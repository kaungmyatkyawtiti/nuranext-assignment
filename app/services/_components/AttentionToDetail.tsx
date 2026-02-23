import FadeInText from "@/components/animations/FadeInText";

const para1 =
  "Every small details matter to us. Your colors, Typefaces? How does your customer service handle complaints? All of the above and More?";

const para2 =
  "This is where we start. Your digital product big or small should be unique and should tell the right stories and solve the right problems to create the right connections.";

export default function AttentionToDetail() {
  return (
    <section className="overflow-hidden min-h-screen section-container">
      <div className="mx-auto max-w-7xl relative">
        {/* Background Glow */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-brand-primary/10 dark:bg-primary-pink/15 blur-[120px]" />
          <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-primary-pink/10 dark:bg-brand-primary/15 blur-[120px]" />
        </div>

        {/* Quote Decoration */}
        <div className="absolute top-5 right-6 text-[100px] md:text-[140px] text-brand-primary/20 dark:text-primary-pink/20">
          “
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Label */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-brand-foreground font-orbitron">
            Attention to Detail
          </p>

          {/* Top Text */}
          <FadeInText
            para={para1}
            className="text-[clamp(22px,4vw,2.4rem)] font-semibold leading-tight text-brand-primary dark:text-primary-pink"
          />

          {/* Divider */}
          <div className="h-px w-full bg-border" />

          {/* Bottom Text */}
          <div className="flex md:justify-end md:text-right border-r-5 border-primary-pink pr-6">
            <FadeInText
              para={para2}
              className="text-[clamp(22px,4vw,2.4rem)] font-semibold leading-tight text-primary-pink dark:text-brand-primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
