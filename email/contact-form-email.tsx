/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Heading,
  Text,
  Hr,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const ContactFormEmail = ({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>New Message from your portfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black font-sans">
          <Container className="mx-auto px-4">
            <Section className="bg-white shadow-lg my-10 py-8 px-6 rounded-md">
              <Heading className="text-2xl font-semibold mb-4">
                New Message from Contact Form
              </Heading>
              <Text className="text-lg leading-relaxed">{message}</Text>
              <Hr className="my-6 border-t" />
              <Text className="text-base">
                <strong>Sender's Email:</strong> {senderEmail}
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
