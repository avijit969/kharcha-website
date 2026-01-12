import {
    Body,
    Container,
    Column,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Text,
    Tailwind,
} from '@react-email/components';
import React from 'react';

interface InviteEmailProps {
    inviterName: string;
    khataName: string;
    inviteLink?: string;
}

export const InviteEmail = ({ inviterName, khataName, inviteLink = 'https://kharcha.trivyaa.in' }: InviteEmailProps) => {
    const previewText = `${inviterName} invited you to join ${khataName} on Kharcha!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-slate-50 my-auto mx-auto font-sans">
                    <Container className="bg-white border border-solid border-[#eaeaea] rounded-lg my-[40px] mx-auto p-[20px] max-w-[465px] shadow-sm">

                        {/* Header Logo */}
                        <Section className="mt-[32px] text-center">
                            <div className="flex justify-center items-center">
                                <Img
                                    src="https://kharcha.trivyaa.in/icon.png"
                                    alt="Kharcha Logo"
                                    width="50"
                                    height="50"
                                    className="my-0 mx-auto"
                                />
                            </div>
                        </Section>

                        {/* Invite Heading */}
                        <Heading className="text-slate-900 text-[24px] font-bold text-center p-0 my-[30px] mx-0">
                            Join {khataName} on Kharcha
                        </Heading>

                        {/* Intro Text */}
                        <Text className="text-slate-700 text-[16px] leading-[24px]">
                            Hello,
                        </Text>
                        <Text className="text-slate-600 text-[15px] leading-[26px]">
                            <strong>{inviterName}</strong> has invited you to join the group <strong>"{khataName}"</strong> on Kharcha.
                            Join the group to track expenses, split bills, and keep finances transparent together.
                        </Text>

                        {/* Call to Actions */}
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Link
                                className="px-6 py-3 rounded-full text-white bg-[#9333ea] text-center block w-full text-[14px] font-bold no-underline shadow-md hover:bg-[#7e22ce]"
                                href={inviteLink}
                            >
                                Accept Invite
                            </Link>

                            {/* Divider or Space */}
                            <Text className="text-slate-400 text-[12px] my-2">
                                — OR —
                            </Text>

                            <Link
                                className="px-6 py-3 rounded-full text-[#9333ea] border border-solid border-[#9333ea] bg-white text-center block w-full text-[14px] font-bold no-underline hover:bg-purple-50"
                                href="https://pub-6920084430834985bcce8c3128f020b5.r2.dev/kharcha.apk"
                            >
                                Download Android App
                            </Link>
                        </Section>

                        {/* Footer */}
                        <Text className="text-slate-600 text-[14px] leading-[24px]">
                            If you didn't expect this invite, you can safely ignore this email.
                        </Text>

                        <Section className="border-t border-slate-200 mt-6 pt-4">
                            <Text className="text-slate-500 text-[12px] leading-[20px] text-center">
                                Happy tracking! <br />
                                <strong>The Kharcha Team</strong>
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default InviteEmail;
