"use server";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";
import toast from "react-hot-toast";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  try {
    if (!message || typeof message !== "string" || message.length > 5000) {
      return {
        error: {
          status: 400,
          message: "Invalid message format or length (max 5000 characters).",
        },
      };
    }

    if (
      !senderEmail ||
      typeof senderEmail !== "string" ||
      !isValidEmail(senderEmail)
    ) {
      return {
        error: {
          status: 400,
          message: "Invalid sender email format.",
        },
      };
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "ozbetelashvilitornike2@gmail.com",
      subject: "Message from my portfolio contact form",
      reply_to: senderEmail as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, { message, senderEmail }),
    });

    return { success: true };
  } catch (error) {
    toast.error("Failed to send email. Please try again.");
    return {
      error: {
        status: 500,
        message: "Failed to send email.",
      },
    };
  }
};

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
