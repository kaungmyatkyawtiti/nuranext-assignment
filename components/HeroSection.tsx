const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Main heading */}
        <h1 className="text-[clamp(2rem,5vw,4rem)] font-medium tracking-tight text-brand-foreground leading-tight md:leading-[1.1]">
          We are in the business of building <br className="hidden md:block" />
          capabilities for our clients,
        </h1>

        {/* Scrolling text row */}
        <div className="flex-center gap-4 md:gap-8 my-8 md:my-16 w-full overflow-visible whitespace-nowrap">
          <span className="shrink-0 text-[clamp(2rem,6vw,4.2rem)] font-bold uppercase tracking-tighter text-transparent hero-stroke-text">
            STUDIES
          </span>
          <div className="shrink-0 h-0.5 w-12 md:w-48 bg-brand-primary"></div>
          <span className="shrink-0 text-[clamp(2rem,6vw,4.2rem)] font-bold uppercase tracking-tighter text-brand-primary">
            CASE
          </span>
          <span className="shrink-0 text-[clamp(2rem,6vw,4.2rem)] font-bold uppercase tracking-tighter text-transparent hero-stroke-text">
            STUDIES
          </span>
        </div>

        {/* Subtext */}
        <h3 className="text-[clamp(2rem,5vw,4rem)] font-medium tracking-tight text-brand-foreground ml-8 md:ml-32">
          from startup to industry leaders
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
