import { DUMMY_LATEST } from '@/constants';
import { RiArrowLeftUpFill } from '@remixicon/react';
import Image from "next/image"
import ScrambleText from './animations/ScrambleText';
import { cn } from '@/lib/utils';

const text = "THE LATEST";

const LatestWork = () => {
  return (
    <section className="section-container">
      <div className='max-w-7xl mx-auto'>
        <div className="mb-16 text-center">
          <ScrambleText
            className="text-[clamp(2rem,8vw,5rem)] font-bold text-brand"
            text={text}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_LATEST.map(item => (
            <div
              key={item.id}
              className={cn(
                "group cursor-pointer flex flex-col bg-brand",
              )}
            >
              {/* Image Container */}
              <div className="aspect-4/3 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  loading='eager'
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col p-5 space-y-4 min-h-30">
                <div className="flex items-center space-x-2">
                  <RiArrowLeftUpFill size={30} className="text-primary-foreground/90 dark:text-primary-blue" />
                  <span className="md:text-lg font-bold tracking-wider text-primary-foreground/90 dark:text-primary-blue">
                    {item.client}
                  </span>
                </div>

                <p className="text-sm md:text-base font-medium leading-snug text-primary-foreground/80">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default LatestWork;
