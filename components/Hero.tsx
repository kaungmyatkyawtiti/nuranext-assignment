const Intro = () => {
  return (
    <section className="relative min-h-dvh col-center overflow-hidden px-6">

      {/* Text Content */}
      <div className="text-center">
        <h2 className="text-[clamp(2rem,8vw,6rem)] leading-tight font-semibold">BOOST YOUR</h2>
        <h2 className="text-[clamp(2rem,8vw,6rem)] text-brand-primary leading-tight font-semibold">
          GROWTH
        </h2>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="relative min-h-dvh w-full px-8 py-20 md:px-16 lg:px-24">
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">
        {/* Left: primary messaging */}
        <div className="flex flex-col space-y-8">
          <h3 className="text-lg font-bold uppercase tracking-[0.2em] text-white">
            What do we do?
          </h3>

          <div className="flex flex-col space-y-4">
            <h2 className="text-4xl font-semibold tracking-tight text-brand-primary md:text-5xl lg:text-6xl">
              {`We don't just build website.`}
            </h2>

            <p className="text-4xl font-semibold tracking-tight text-brand-primary/40 md:text-5xl lg:text-6xl">
              We help build digital products functional and impactful.
            </p>
          </div>
        </div>

        {/* Right: detailed description */}
        <div className="flex items-end lg:pb-12 lg:pl-20">
          <p className="max-w-md text-lg leading-relaxed md:text-base">
            {`Our job is to make it more human. To build digital products, that help
            businesses do better, be better and show up in a way that makes our
            consumers' lives better.`}
          </p>
        </div>
      </div>
    </section>
  );
};

const DetailsSection = () => {
  return (
    <section className="w-full px-8 py-24 md:px-16 lg:px-24">
      <div className="mx-auto max-w-7xl">

        {/* Top Paragraph: Focus on Attention to Detail */}
        <div className="mb-32">
          <h2 className="text-[clamp(1.8rem,5vw,3rem)] font-semibold leading-tight text-cyan-400">
            Every small details matter to us. Your colors, Typefaces?{" "}
            <span className="text-black">How does your customer service handle complaints?</span>{" "}
            <span className="opacity-60">All of the above and More?</span>
          </h2>
        </div>

        {/* Bottom Paragraph: Right-aligned Mission Statement */}
        <div className="flex justify-end text-right">
          <h2 className="text-[clamp(1.6rem,5vw,2.8rem)] font-semibold leading-tight text-cyan-400">
            This is where we start. Your digital product big or small
            should be unique and should tell the right stories and
            solve the right problems to create the right connections.
          </h2>
        </div>

      </div>
    </section>
  );
};

const Hero = () => {
  return (
    <>
      <Intro />
      <AboutSection />
      <DetailsSection />
    </>
  )
}

export default Hero;
