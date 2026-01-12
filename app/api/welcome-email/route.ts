import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
import WelcomeEmail from '@/emails/WelcomeEmail';

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    if (!email || !name) {
      return NextResponse.json({ error: 'Email and Name are required' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Kharcha <kharcha@trivyaa.in>',
      to: [email],
      subject: 'Welcome to Kharcha! 🎉',
      react:await WelcomeEmail({ name }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('Welcome email error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
