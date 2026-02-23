"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiLoader2Fill, RiSendPlaneFill } from "@remixicon/react";
import { cn } from "@/lib/utils";
import { sendEmail } from "@/lib/actions/contact-email";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { contactSchema } from "@/lib/validations";
import { ContactFormInputs } from "@/types";
import InteractiveBtn from "@/components/animations/InteractiveBtn";

export default function ContactForm() {
  const [shakeTrigger, setShakeTrigger] = useState(0);

  const handleShake = () => setShakeTrigger(prev => prev + 1);

  const defaultValues = {
    name: "",
    bussiness: "",
    phone: "",
    email: "",
    about: ""
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormInputs>({
    resolver: zodResolver(contactSchema),
    defaultValues,
    mode: "onSubmit",
    reValidateMode: "onBlur"
  })

  const onSubmit: SubmitHandler<ContactFormInputs> = async (data) => {
    console.log("Contact submit data", data);

    try {
      const result = await sendEmail(data);
      // console.log('Send email submit result', result);
      toast.success("Message sent successfully!");
      reset(defaultValues);
    } catch (err) {
      console.log("Send email submit error", err)
      const errMsg = err instanceof Error
        ? err.message
        : "Something went wrong";
      toast.error(errMsg);
    }
  }

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit(
        onSubmit,
        handleShake,
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
        disabled={isSubmitting}
      >
        {isSubmitting
          && <RiLoader2Fill className="animate-spin" />
        }
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
          exit={{ opacity: 0, y: 4 }}
          animate={{
            opacity: 1,
            x: [0, -4, 4, -3, 3, -2, 2, 0],
          }}
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
