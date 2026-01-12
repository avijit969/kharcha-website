import { createClient } from '@supabase/supabase-js';
import { Expo, ExpoPushMessage } from 'expo-server-sdk';
import { NextRequest, NextResponse } from 'next/server';
import { Database } from '@/database.types';
import { Resend } from 'resend';
import InviteEmail from '@/emails/InviteEmail';

const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const expo = new Expo();
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const payload = body.record || body;
    const { invited_by_id, invited_to_id, khata_id } = payload;

    if (!invited_by_id || !invited_to_id || !khata_id) {
        return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // 1. Fetch Khata details
    const { data: khata, error: khataError } = await supabase
      .from('khata')
      .select('name')
      .eq('id', khata_id)
      .single();

    if (khataError || !khata) {
      return NextResponse.json({ error: 'Failed to fetch khata' }, { status: 500 });
    }

    // 2. Fetch Inviter details
    const { data: inviter, error: inviterError } = await supabase
      .from('users')
      .select('full_name')
      .eq('id', invited_by_id)
      .single();

    if (inviterError || !inviter) {
      return NextResponse.json({ error: 'Failed to fetch inviter' }, { status: 500 });
    }

    // 3. Fetch Invitee details (User being invited)
    const { data: invitee, error: inviteeError } = await supabase
      .from('users')
      .select('id,email, full_name')
      .eq('id', invited_to_id)
      .single();

    if (inviteeError || !invitee) {
         return NextResponse.json({ error: 'Failed to fetch invitee' }, { status: 500 });
    }
    // save in notifications table
    const { data: notification, error: notificationError } = await supabase
      .from('notifications')
      .insert([
        {
          user_id: invited_to_id,
          type: 'invite',
          title: `You're invited to ${khata.name}`,
          body: `${inviter.full_name} invited you to join this Khata.`,
          is_viewed: false,
          data: {
            url: `/accept_invite/${invitee.id}`,
          }
        },
      ])
      .select('id')
      .single();
    // 4. Fetch Invitee's Push Tokens
    const { data: devices, error: devicesError } = await supabase
        .from('logged_in_devices')
        .select('expo_push_token')
        .eq('user_id', invited_to_id)
        .not('expo_push_token', 'is', null);

    const pushTokens = devices ? devices.map(d => d.expo_push_token).filter(t => t && Expo.isExpoPushToken(t)) as string[] : [];

    // --- Send Push Notification ---
    if (pushTokens.length > 0) {
        const messages: ExpoPushMessage[] = [];
        for (const token of pushTokens) {
            messages.push({
                to: token,
                sound: 'default',
                title: `You're invited to ${khata.name}`,
                body: `${inviter.full_name} invited you to join this Khata.`,
                data: { url:`/accept_invite/${invited_to_id}`},
            });
        }
        const chunks = expo.chunkPushNotifications(messages);
        for (const chunk of chunks) {
            try {
                await expo.sendPushNotificationsAsync(chunk);
            } catch (e) {
                console.error('Error sending push chunk', e);
            }
        }
    }

    // --- Send Email Notification ---
    if (invitee.email) {
        try {
            await resend.emails.send({
                from: 'Kharcha <kharcha@trivyaa.in>',
                to: [invitee.email],
                subject: `Invitation to join ${khata.name} on Kharcha`,
                react: InviteEmail({ 
                    inviterName: inviter.full_name || 'A user', 
                    khataName: khata.name || 'a group',
                }),
                text: `${inviter.full_name || 'A user'} invited you to join ${khata.name || 'a group'} on Kharcha. Check it out at https://kharcha.trivyaa.in`,
            });
        } catch (emailError) {
            console.error('Error sending email', emailError);
        }
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('New invite notification error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
