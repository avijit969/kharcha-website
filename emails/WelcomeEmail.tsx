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

interface WelcomeEmailProps {
    name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
    const previewText = `Welcome to Kharcha, ${name}! Start tracking your expenses today.`;

    return (
        <Html>
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Head />
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

                        {/* Welcome Heading */}
                        <Heading className="text-slate-900 text-[24px] font-bold text-center p-0 my-[30px] mx-0">
                            Welcome to Kharcha!
                        </Heading>

                        {/* Intro Text */}
                        <Text className="text-slate-700 text-[16px] leading-[24px]">
                            Hello <strong>{name}</strong>,
                        </Text>
                        <Text className="text-slate-600 text-[15px] leading-[26px]">
                            We're thrilled to have you! <strong>Kharcha</strong> is the simplest way to manage group expenses, split bills, and keep your finances transparent. No more awkward "who owes who" conversations.
                        </Text>

                        {/* Features List */}
                        <Section className="my-[20px] bg-slate-50 p-4 rounded-lg">
                            <Text className="text-slate-800 font-semibold mb-2 mt-0">
                                Get started in 3 easy steps:
                            </Text>
                            <Section>
                                <Row>
                                    <Column style={{ width: '24px', verticalAlign: 'top', paddingTop: '4px' }}>
                                        <Text className="text-[16px] m-0">📒</Text>
                                    </Column>
                                    <Column>
                                        <Text className="text-slate-600 text-[14px] m-0 mb-2">Create a new <strong>Khata</strong> (Ledger)</Text>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column style={{ width: '24px', verticalAlign: 'top', paddingTop: '4px' }}>
                                        <Text className="text-[16px] m-0">👥</Text>
                                    </Column>
                                    <Column>
                                        <Text className="text-slate-600 text-[14px] m-0 mb-2">Invite your friends to join</Text>
                                    </Column>
                                </Row>
                                <Row>
                                    <Column style={{ width: '24px', verticalAlign: 'top', paddingTop: '4px' }}>
                                        <Text className="text-[16px] m-0">💸</Text>
                                    </Column>
                                    <Column>
                                        <Text className="text-slate-600 text-[14px] m-0">Add expenses & settle up instantly!</Text>
                                    </Column>
                                </Row>
                            </Section>
                        </Section>

                        {/* Call to Actions */}
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Link
                                className="px-6 py-3 rounded-full text-white bg-[#9333ea] text-center block w-full text-[14px] font-bold no-underline shadow-md hover:bg-[#7e22ce]"
                                href="https://kharcha.trivyaa.in"
                            >
                                Get Started on Web
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
                            If you have any questions, simply reply to this email. We're here to help!
                        </Text>

                        <Section className="border-t border-slate-200 mt-6 pt-4">
                            <Text className="text-slate-500 text-[12px] leading-[20px] text-center">
                                Happy tracking! <br />
                                <strong>The Kharcha Team</strong>
                            </Text>
                            <Text className="text-slate-400 text-[10px] text-center mt-2">
                                © {new Date().getFullYear()} Kharcha. All rights reserved.
                            </Text>
                        </Section>

                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
