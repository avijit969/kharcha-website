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
    const { data: khata, error: khataError } = await supabase
      .from('khata')
      .select('name,created_by:users(full_name)')
      .eq('id', khata_id)
      .single();
    console.log('Khata:', JSON.stringify(khata,null,2));
    if (khataError) {
      console.error('Error fetching khata:', khataError);
      return NextResponse.json({ error: 'Failed to fetch khata' }, { status: 500 });
    }

    console.log('New Kharcha Notification Triggered:', { kharcha_id, name, amount, khata_id, created_by, khata_name: khata.name });

    if (!kharcha_id || !khata_id) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Get all members of the Khata except the creator
    const { data: members, error: membersError } = await supabase
      .from('members') 
      .select('user_id')
      .eq('khata_id', khata_id)
      .neq('user_id', created_by); // Don't notify the creator

    if (membersError) {
      console.error('Error fetching members:', membersError);
      return NextResponse.json({ error: 'Failed to fetch members' }, { status: 500 });
    }

    if (!members || members.length === 0) {
      console.log('No other members to notify.');
      return NextResponse.json({ message: 'No members to notify' });
    }

    // Filter out null user_ids if any (though schema says user_id is nullable, logic implies valid users)
    const userIds = members.map(m => m.user_id).filter((id): id is string => id !== null);

    if (userIds.length === 0) {
        console.log('No valid user IDs found to notify');
        return NextResponse.json({ message: 'No valid user IDs found' });
    }

    // 2. Get Push Tokens for these users from logged_in_devices
    // 'logged_in_devices' table has 'expo_push_token' and 'user_id'
    const { data: devices, error: devicesError } = await supabase
      .from('logged_in_devices')
      .select('expo_push_token')
      .in('user_id', userIds)
      .not('expo_push_token', 'is', null);

    if (devicesError) {
      console.error('Error fetching tokens:', devicesError);
      return NextResponse.json({ error: 'Failed to fetch push tokens' }, { status: 500 });
    }

    if (!devices || devices.length === 0) {
       console.log('No push tokens found for members.');
       return NextResponse.json({ message: 'No push tokens found' });
    }

    const pushTokens = devices.map(p => p.expo_push_token).filter(token => token && Expo.isExpoPushToken(token)) as string[];

    // 3. Send Notifications
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
        console.error('Error sending push notification chunk:', error);
      }
    }

    return NextResponse.json({ success: true, ticketsCount: tickets.length });

  } catch (error) {
    console.error('Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
