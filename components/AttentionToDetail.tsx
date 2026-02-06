import FadeInText from "./animations/FadeInText";

const para1 = "Every small details matter to us. Your colors, Typefaces? How does your customer service handle complaints? All of the above and More?"

const para2 = "This is where we start. Your digital product big or small should be unique and should tell the right stories and solve the right problems to create the right connections."

export default function AttentionToDetail() {
  return (
    <section className="min-h-[90vh] px-6 py-20">
      <div className="mx-auto max-w-7xl space-y-35 md:space-y-45">
        {/* Top: Focus on Attention to Detail */}
        <div>
          <FadeInText para={para1}
            className="text-[clamp(24px,4vw,2.5rem)] font-semibold leading-tight text-brand-primary dark:text-primary-pink"
          />
        </div>

        {/* Bottom: Mission Statement */}
        <div className="flex md:justify-end md:text-right">
          <FadeInText para={para2}
            className="text-[clamp(24px,4vw,2.5rem)] font-semibold leading-tight text-primary-pink dark:text-brand-primary"
          />
        </div>
      </div>
    </section>
  )
}

