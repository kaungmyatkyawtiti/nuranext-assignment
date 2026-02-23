import z from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(5, "Please enter your name (minimum 5 characters)")
    .max(100, "Your name is too long"),

  bussiness: z
    .string()
    .optional()
    .or(z.literal("")),

  phone: z
    .string()
    .min(5, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),

  email: z
    .email("Please enter a valid email address"),

  about: z
    .string()
    .min(5, "Please enter your message (minimum 5 characters)")
});


