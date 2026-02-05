import React from 'react';
import ScrambleText from './animations/ScrambleText';

interface Stat {
  value: string;
  label: string;
}

const text = "We're an extension of your team. One goal, one team and one big product.";

const LandingStats: React.FC = () => {
  const launchStats: Stat[] = [
    { value: '30', label: 'Industries Sector' },
    { value: '150+', label: 'Product Launch' },
  ];

  return (
    <section className="min-h-screen bg-linear-to-b from-background via-gradient-pink to-gradient-violet px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold tracking-wide uppercase leading-tight text-foreground/85">
            We are with you for <br /> the long haul
          </h2>
          <div className="space-y-12">
            <p className="text-lg opacity-90 max-w-md">
              As you scale, launch your products, and go into new markets, we continue to support your business and get people excited all over again.
            </p>
            <div>
              <span className="block text-5xl md:text-6xl font-extrabold text-brand-primary">2.3 YEARS</span>
              <p className="mt-2 text-sm font-medium uppercase tracking-wide">
                Industry average length of client — onenex relationship
              </p>
            </div>
          </div>
        </div>

        {/* What it Takes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <h2 className="text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-wide uppercase leading-tight text-foreground/90">
            We know what it takes <br /> to launch
          </h2>
          <div className="space-y-12">
            <div className="space-y-4">
              <p className="text-lg opacity-90">We have launched hundreds of products across categories.</p>
              <p className="text-lg opacity-90">We have seen it all, done it all.</p>
            </div>

            <div className="flex gap-16 md:gap-24">
              {launchStats.map((stat, idx) => (
                <div key={idx}>
                  <span className="block text-4xl font-bold text-brand-primary">{stat.value}</span>
                  <p className="mt-2 text-sm font-medium uppercase tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extension of Team */}
        <div className="text-center space-y-10 pt-8">
          <ScrambleText
            className="text-2xl md:text-4xl font-extrabold tracking-tighter uppercase leading-snug max-w-4xl mx-auto text-white"
            text={text}
          />
          <div>
            <span className="block text-6xl md:text-8xl font-bold text-cyan-400">
              43+
            </span>
            <p className="mt-2 text-sm font-semibold uppercase tracking-widest text-white">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingStats;
