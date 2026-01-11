import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Tailwind,
} from '@react-email/components';
import React from 'react';

interface WelcomeEmailProps {
    name: string;
}

export const WelcomeEmail = ({ name }: WelcomeEmailProps) => {
    const previewText = `Welcome to Kharcha, ${name}!`;

    return (
        <Html>
            <Head />
            <Preview>{previewText}</Preview>
            <Tailwind>
                <Body className="bg-white my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src="https://kharcha-website.vercel.app/static/kharcha-logo.png"
                                alt="Kharcha"
                                width="40"
                                height="40"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Welcome to <strong>Kharcha</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hello {name},
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            We're excited to have you on board! <strong>Kharcha</strong> is the easiest way to split expenses with friends and keep track of your shared spending.
                        </Text>
                        <Section className="text-center mt-[32px] mb-[32px]">
                            <Link
                                className="px-5 py-3 rounded text-white bg-[#000000] text-center block w-full text-[12px] no-underline font-semibold"
                                href="https://kharcha.trivyaa.in"
                            >
                                Get Started
                            </Link>
                        </Section>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Here are a few things you can do to get started:
                        </Text>
                        <ul className="text-[14px] leading-[24px] text-black">
                            <li>Create a new Khata (ledger)</li>
                            <li>Invite your friends</li>
                            <li>Add your daily expenses and settle up!</li>
                        </ul>
                        <Text className="text-black text-[14px] leading-[24px]">
                            If you have any questions, feel free to reply to this email.
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Happy tracking!
                            <br />
                            The Kharcha Team
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};

export default WelcomeEmail;
