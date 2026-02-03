"use client";

import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiSendPlaneFill } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/lib/actions/contact-email";
import { toast } from "sonner";


const contactSchema = z.object({
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

export type ContactFormInputs = z.infer<typeof contactSchema>;

const defaultValues = {
  name: "",
  bussiness: "",
  phone: "",
  email: "",
  about: ""
}

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    try {
      const result = await sendEmail(data);
      // console.log('result', result);
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("Contact submit error", error)
      toast.error("Something went wrong");
    } finally {
      reset(
        defaultValues,
        { keepErrors: true }
      );
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8"
    >
      <div className="flex flex-col gap-2 w-full">
        <input
          {...register("name")}
          placeholder="Name"
          className={cn(
            "contact-input",
            errors.name && "error"
          )}
        />
        <p className="contact-error">
          {errors.name?.message}
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <input
          {...register("bussiness")}
          placeholder="Bussiness (OPTIONAL)"
          className={cn(
            "contact-input",
            errors.bussiness && "error"
          )}
        />
        <p className="contact-error">
          {errors.bussiness?.message}
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <input
          {...register("phone")}
          placeholder="Phone"
          className={cn(
            "contact-input",
            errors.phone && "error"
          )}
        />
        <p className="contact-error">
          {errors.phone?.message}
        </p>
      </div>

      <div className="flex flex-col gap-2 w-full">
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className={cn(
            "contact-input",
            errors.email && "error"
          )}
        />
        <p className="contact-error">
          {errors.email?.message}
        </p>
      </div>

      <div className="flex flex-col gap-2">
        <textarea
          {...register("about")}
          placeholder="Tell us about your project..."
          className={cn(
            "contact-input resize-none",
            errors.about && "error"
          )}
        />
        <p className="contact-error">
          {errors.about?.message}
        </p>
      </div>

      <button
        className="primary-btn px-4 py-3"
        type="submit"
        form="contact-form"
      >
        Send
        <RiSendPlaneFill size={20} />
      </button>
    </form>
  )
}
