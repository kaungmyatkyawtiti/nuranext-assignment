import FadeInText from "./animations/FadeInText"

const para = "We don't just build website.\nWe help build digital products functional and impactful."

export default function WhatWeDo() {
  return (
    <section className="min-h-dvh px-8 md:px-16 lg:px-24">
      <div className="mx-auto grid grid-cols-1 gap-14 lg:grid-cols-2 items-center max-w-7xl">
        {/* Left: primary messaging */}
        <div className="space-y-6 md:space-y-8">
          <h3 className="text-base md:text-lg font-bold uppercase tracking-[0.2em]">
            What do we do?
          </h3>

          <FadeInText para={para}
            className="text-[clamp(2rem,3.6vw,3rem)] font-semibold leading-tight text-brand-primary"
          />
        </div>

        {/* Right: detailed description */}
        <div>
          <p className="text-base leading-relaxed md:text-lg">
            {`Our job is to make it more human. To build digital products, that help
            businesses do better, be better and show up in a way that makes our
            consumers' lives better.`}
          </p>
        </div>
      </div>
    </section>

  )
}

