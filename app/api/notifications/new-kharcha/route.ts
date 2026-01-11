import { createClient } from '@supabase/supabase-js';
import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { NextRequest, NextResponse } from 'next/server';
import { Database } from '@/database.types';

// Initialize Supabase Admin Client
const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const expo = new Expo();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { kharcha_id, name, amount, khata_id, created_by } = body;
    // get khata name from khata table
    const { data: khataData, error: khataError } = await supabase
      .from('khata')
      .select('name,created_by:users(full_name)')
      .eq('id', khata_id)
      .single();
    
    const khata = khataData as unknown as { name: string, created_by: { full_name: string } | null };

    if (khataError) {
      return NextResponse.json({ error: 'Failed to fetch khata' }, { status: 500 });
    }
    if (!kharcha_id || !khata_id) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }
    // 1. Get all members of the Khata except the creator
    const { data: members, error: membersError } = await supabase
      .from('members') 
      .select('user_id')
      .eq('khata_id', khata_id)
      .neq('user_id', created_by);

    if (membersError) {
      return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
    }

    if (!members || members.length === 0) {
      console.log('No other members to notify.');
      return NextResponse.json({ message: 'No members to notify' });
    }

    // get all users except the creator
    const userIds = members.map(m => m.user_id).filter((id): id is string => id !== created_by);

    if (userIds.length === 0) {
        return NextResponse.json({ message: 'No valid user IDs found' });
    }
    // get Push Tokens for these users from logged_in_devices
    const { data: devicesData, error: devicesError } = await supabase
      .from('logged_in_devices')
      .select('expo_push_token')
      .in('user_id', userIds)
      .not('expo_push_token', 'is', null);

    if (devicesError) {
      return NextResponse.json({ error: 'Failed to fetch push tokens' }, { status: 500 });
    }
    
    const devices = devicesData ? devicesData.map(d => d.expo_push_token) : [];


    if (!devices || devices.length === 0) {
       return NextResponse.json({ message: 'No push tokens found' });
    }

    const pushTokens = devices.filter(token => token && Expo.isExpoPushToken(token)) as string[];

    const messages: ExpoPushMessage[] = [];
    for (const pushToken of pushTokens) {
      messages.push({
        to: pushToken,
        sound: 'default',
        title: `New kharcha is added in ${khata.name}`,
        body: `${name} - ₹${amount} added by ${khata.created_by?.full_name}`,
        data: { kharcha_id, khata_id },
      });
    }

    const chunks = expo.chunkPushNotifications(messages);
    const tickets = [];
    for (const chunk of chunks) {
      try {
        const ticketChunk = await expo.sendPushNotificationsAsync(chunk);
        tickets.push(...ticketChunk);
      } catch (error) {
        return NextResponse.json({ error: 'Failed to send push notifications' }, { status: 500 });
      }
    }

    return NextResponse.json({ success: true, ticketsCount: tickets.length });

  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
