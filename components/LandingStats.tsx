import { LAUNCH_STATS } from "@/constants";
import AnimatedCounter from "./animations/AnimatedCounter";
import ScrambleText from "./animations/ScrambleText";

const text =
  "We're an extension of your team. \n One goal, one team and one big product.";

const LandingStats = () => {
  return (
    <section className="relative overflow-hidden min-h-screen px-6 py-20">
      <div className="max-w-7xl mx-auto space-y-45">
        {/* Block 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <p className="text-[clamp(25px,4vw,2.4rem)] font-bold tracking-wide uppercase font-orbitron">
            We are with you for <br /> the long haul
          </p>

          <div className="space-y-12">
            <p className="text-base md:text-lg text-foreground/85">
              As you scale, launch your products, and go into new markets, we
              continue to support your business and get people excited all over
              again.
            </p>

            <div>
              <span className="block text-4xl md:text-5xl font-extrabold text-brand-primary">
                2.3 YEARS
              </span>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide text-brand-foreground">
                Industry average length of client — onenex relationship
              </p>
            </div>
          </div>
        </div>

        {/* Block 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
          <p className="text-[clamp(25px,4vw,2.4rem)] font-bold tracking-wide uppercase font-orbitron">
            We know what it takes <br /> to launch
          </p>

          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-lg text-foreground/85">
                We have launched hundreds of products across categories.
              </p>
              <p className="text-lg text-foreground/85">
                We have seen it all, done it all.
              </p>
            </div>

            {/* Stats Row */}
            <div className="flex gap-10 md:gap-16">
              {LAUNCH_STATS.map((stat, idx) => (
                <div
                  key={idx}
                  className="space-y-2"
                >
                  <div className="text-4xl md:text-5xl font-bold text-brand-primary">
                    <AnimatedCounter from={0} to={stat.value} />
                  </div>
                  <p className="text-sm font-medium uppercase tracking-wide text-brand-foreground">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extension of Team */}
        <div className="text-center space-y-12">
          <ScrambleText
            text={text}
            className="text-2xl md:text-3xl font-extrabold tracking-tighter uppercase leading-snug mx-auto break-keep"
          />

          <div className="inline-flex flex-col items-center justify-center">
            <div className="text-5xl md:text-7xl font-bold text-brand-primary">
              <AnimatedCounter from={0} to={43} />+
            </div>

            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-brand-foreground">
              Team Members
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStats;

