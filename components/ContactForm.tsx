"use client";

import z from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiSendPlaneFill } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/lib/actions/contact-email";
import { toast } from "sonner";
import InteractiveBtn from "./animations/InteractiveBtn";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";


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
  const [shakeTrigger, setShakeTrigger] = useState(0);

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
      onSubmit={handleSubmit(
        onSubmit,
        () => { setShakeTrigger((prev) => prev + 1) }
      )}
      className="space-y-6"
    >
      <div className="contact-group">
        <input
          {...register("name")}
          placeholder="Name"
          className={cn(
            "contact-input",
            errors.name && "error"
          )}
        />

        <ErrorTooltip
          error={errors.name?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <input
          {...register("bussiness")}
          placeholder="Bussiness (OPTIONAL)"
          className={cn(
            "contact-input",
            errors.bussiness && "error"
          )}
        />

        <ErrorTooltip
          error={errors.bussiness?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <input
          {...register("phone")}
          placeholder="Phone"
          className={cn(
            "contact-input",
            errors.phone && "error"
          )}
        />

        <ErrorTooltip
          error={errors.phone?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className={cn(
            "contact-input",
            errors.email && "error"
          )}
        />

        <ErrorTooltip
          error={errors.email?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <div className="contact-group">
        <textarea
          {...register("about")}
          placeholder="Tell us about your project..."
          className={cn(
            "contact-input resize-none",
            errors.about && "error"
          )}
        />

        <ErrorTooltip
          error={errors.about?.message}
          shakeTrigger={shakeTrigger}
        />
      </div>

      <InteractiveBtn
        type="submit"
        form="contact-form"
        className="mt-8"
      >
        Send
        <RiSendPlaneFill size={20} />
      </InteractiveBtn>
    </form>
  )
}

interface ErrorTooltipProps {
  error?: string;
  shakeTrigger: number;
}

function ErrorTooltip({
  error,
  shakeTrigger
}: ErrorTooltipProps) {
  return (
    <AnimatePresence
      initial={false}
      mode="popLayout"
    >
      {error && (
        <motion.span
          key={shakeTrigger}
          className="error-tooltip scroll-smooth scrollbar-hidden"
          initial={{ opacity: 0, y: -4 }}
          animate={{
            opacity: 1,
            x: [0, -4, 4, -3, 3, -2, 2, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.35,
            ease: "easeInOut",
          }}
        >
          {error}
        </motion.span>)}
    </AnimatePresence>
  );
}
