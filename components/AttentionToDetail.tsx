import FadeInText from "./animations/FadeInText";

const para1 = "Every small details matter to us. Your colors, Typefaces? How does your customer service handle complaints? All of the above and More?"

const para2 = "This is where we start. Your digital product big or small should be unique and should tell the right stories and solve the right problems to create the right connections."

export default function AttentionToDetail() {
  return (
    <section className="relative px-8 md:px-16 lg:px-24 min-h-dvh">
      <div className="mx-auto max-w-7xl space-y-35 md:space-y-45">
        {/* Top: Focus on Attention to Detail */}
        <div>
          <FadeInText para={para1}
            className="text-[clamp(1.4rem,4vw,2.6rem)] font-semibold leading-tight text-cyan-600 dark:text-violet-500"
          />
        </div>

        {/* Bottom: Mission Statement */}
        <div className="flex justify-end text-right">
          <FadeInText para={para2}
            className="text-[clamp(1.4rem,4vw,2.6rem)] font-semibold leading-tight text-violet-600 dark:text-cyan-500"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-160 h-80 bg-cyan-500/30 blur-[120px] rounded-full pointer-events-none" />
    </section>
  )
}

