import AnimatedCounter from './animations/AnimatedCounter';
import ScrambleText from './animations/ScrambleText';

interface Stat {
  value: number;
  label: string;
}

const text = "We're an extension of your team. \n One goal, one team and one big product.";

const launchStats: Stat[] = [
  { value: 30, label: 'Industries Sector' },
  { value: 150, label: 'Product Launch' },
];

const LandingStats = () => {
  return (
    <section className="min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[clamp(27px,4vw,2.6rem)] font-bold tracking-wide uppercase">
            We are with you for <br /> the long haul
          </p>
          <div className="space-y-10">
            <p className="text-base md:text-lg max-w-md text-foreground/85">
              As you scale, launch your products, and go into new markets, we continue to support your business and get people excited all over again.
            </p>
            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-brand-primary">2.3 YEARS</span>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-brand-foreground">
                Industry average length of client — onenex relationship
              </p>
            </div>
          </div>
        </div>

        {/* What it Takes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <p className="text-[clamp(27px,4vw,2.6rem)] font-bold tracking-wide uppercase">
            We know what it takes <br /> to launch
          </p>

          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-lg text-foreground/85">We have launched hundreds of products across categories.</p>
              <p className="text-lg text-foreground/85">We have seen it all, done it all.</p>
            </div>

            <div className="flex gap-16 md:gap-24">
              {launchStats.map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-brand-primary">
                    <AnimatedCounter from={0} to={stat.value} />
                  </div>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide text-brand-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extension of Team */}
        <div className="text-center space-y-10 pt-8">
          <ScrambleText
            text={text}
            className="text-xl md:text-3xl font-extrabold tracking-tighter uppercase leading-snug mx-auto break-keep"
          />

          <div className="text-5xl md:text-7xl font-bold text-brand-primary">
            <AnimatedCounter from={0} to={43} />+
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStats;
