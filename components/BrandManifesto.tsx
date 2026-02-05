const BrandManifesto = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-16 lg:px-24 overflow-hidden select-none"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main heading */}
        <h1 className="text-[clamp(2rem,4.5vw,4.5rem)] font-medium tracking-tight text-brand-foreground leading-tight md:leading-[1.1]">
          We are in the business of building <br className="hidden md:block" />
          capabilities for our clients,
        </h1>

        {/* Marquee title row */}
        <MarqueeTitle />

        {/* Subtext */}
        <h3 className="text-[clamp(2rem,4.5vw,4.5rem)] font-medium tracking-tight text-brand-foreground ml-8 md:ml-32">
          from startup to industry leaders
        </h3>
      </div>
    </section>
  );
};

function MarqueeTitle() {
  return (
    <div className="flex-center gap-4 md:gap-8 my-8 md:my-16 w-full overflow-visible whitespace-nowrap">
      <h2 className="fancy-title text-[clamp(2rem,4.5vw,4.5rem)] tracking-tighter">
        STUDIES
      </h2>
      <div className="shrink-0 h-0.5 w-12 md:w-48 bg-brand-primary"></div>
      <h2 className="shrink-0 text-[clamp(2rem,4.5vw,4.5rem)] font-bold uppercase tracking-tighter text-brand-primary">
        CASE
      </h2>
    </div>
  )
}

export default BrandManifesto;
