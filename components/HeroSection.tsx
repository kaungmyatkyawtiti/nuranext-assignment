const HeroSection = () => {
  return (
    <section id="hero">
      <div className="hero-inner">
        {/* Main heading */}
        <h1 className="hero-title">
          We are in the business of building <br className="hidden md:block" />
          capabilities for our clients,
        </h1>

        {/* Scrolling text row */}
        <div className="flex-center gap-4 md:gap-8 my-8 md:my-16 w-full overflow-visible whitespace-nowrap">
          <span className="shrink-0 text-4xl md:text-8xl font-bold uppercase tracking-tighter text-transparent hero-stroke-text">
            STUDIES
          </span>
          <div className="shrink-0 h-0.5 w-12 md:w-48 bg-brand-primary"></div>
          <span className="shrink-0 text-4xl md:text-8xl font-bold uppercase tracking-tighter text-brand-primary">
            CASE
          </span>
          <span className="shrink-0 text-4xl md:text-8xl font-bold uppercase tracking-tighter text-transparent hero-stroke-text">
            STUDIES
          </span>
        </div>

        {/* Subtext */}
        <h3 className="hero-subtitle">
          from startup to industry leaders
        </h3>
      </div>
    </section>
  );
};

export default HeroSection;
