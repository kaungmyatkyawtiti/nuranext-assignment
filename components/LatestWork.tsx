import { DUMMY_LATEST } from '@/constants';
import { RiArrowLeftUpFill } from '@remixicon/react';
import Image from "next/image"
import ScrambleText from './animations/ScrambleText';

const text = "THE LATEST";

const LatestWork = () => {
  return (
    <section className="w-full py-24 px-8 sm:px-16 bg-gradient-violet">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <ScrambleText
            className="text-[clamp(2rem,8vw,5rem)] font-bold text-stone-100"
            text={text}
          />
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DUMMY_LATEST.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer flex flex-col bg-stone-100"
            >

              {/* Image Container */}
              <div className="aspect-4/3 overflow-hidden bg-gray-200 relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col p-5 space-y-4 min-h-40">
                <div className="flex items-center space-x-2">
                  <RiArrowLeftUpFill size={30} className="text-primary-blue" />
                  <span className="text-lg font-bold tracking-wider text-primary-blue">
                    {item.client}
                  </span>
                </div>

                <p className="text-base font-medium leading-snug text-black/80">
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
