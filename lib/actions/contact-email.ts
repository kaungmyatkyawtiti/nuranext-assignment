"use server";

import { Resend } from 'resend';
import EmailTemplate from '@/components/email-template';
import { ContactFormInputs } from '@/types';

const resend = new Resend(process.env.RESEND_API_KEY);
// console.log("process.env.RESEND_API_KEY", process.env.RESEND_API_KEY)

export const sendEmail = async (formData: ContactFormInputs) => {
  const { name, email, bussiness, phone, about } = formData;

  try {
    await resend.emails.send({
      from: "Onenex Contact <onboarding@resend.dev>",
      to: [process.env.RESEND_TO_EMAIL!],
      replyTo: email,
      subject: `New contact message from ${name}`,
      react: EmailTemplate({
        name,
        email,
        bussiness,
        phone,
        message: about,
      }),
    });
  } catch (error) {
    throw error;
  }
}
