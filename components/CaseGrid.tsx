import { DUMMY_PROJECTS } from '@/constants';
import { cn } from '@/lib/utils';
import Image from "next/image"

const CasesGrid = () => {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-16 space-y-15">
      {/* Filter Tabs */}
      <div className="sticky top-(--header-height) z-90 flex gap-12 border-b py-6 overflow-x-auto bg-background/90 backdrop-blur-lg">
        {['E-COMMERCE [3]', 'WEBSITE [6]', 'APP [3]'].map((tab) => (
          <button
            key={tab}
            className="font-semibold text-foreground/65 hover:text-foreground"
          >
            {tab}
          </button>
        ))}
      </div>

      <div>
        <h2 className="fancy-title text-[clamp(1.8rem,6vw,4rem)] tracking-wide">
          E-commerce
        </h2>
      </div>

      <div className='space-y-20 md:space-y-4'>
        {DUMMY_PROJECTS.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={project.id}
              className="w-full"
            >
              <div
                className={cn(
                  "flex flex-col gap-4 md:flex-row md:items-center md:gap-10",
                  !isEven && "md:flex-row-reverse"
                )}
              >
                {/* Image */}
                <div
                  className={cn(
                    "relative overflow-hidden group cursor-pointer aspect-video md:aspect-4/3 md:w-1/2",
                    project.color
                  )}
                >

                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    loading='eager'
                    className="object-cover mix-blend-multiply"
                  />
                </div>

                {/* Text */}
                <div className="md:w-1/2 flex items-center">
                  <div className="max-w-xl">
                    <h2 className="text-[clamp(1.6rem,3vw,2.8rem)] font-semibold leading-relaxed mb-5">
                      {project.title}
                    </h2>

                    <p className="text-base lg:text-lg font-bold uppercase text-foreground/85">
                      {project.client}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CasesGrid; 
