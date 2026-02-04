import React from 'react';
import { ArrowUpRight } from 'lucide-react'; // Using lucide-react for the arrows

interface CaseStudy {
  title: string;
  description: string;
  image: string;
  category: string;
}

const cases: CaseStudy[] = [
  {
    title: "TOYOTA MYANMAR",
    description: "Digital Transformation of Manual Delays to Instant Approvals",
    image: "/api/placeholder/600/400", // Replace with your Toyota image
    category: "TOYOTA MYANMAR"
  },
  {
    title: "A BANK",
    description: "Creating An Intuitive Banking Experience",
    image: "/api/placeholder/600/400", // Replace with your A Bank image
    category: "A BANK"
  },
  {
    title: "THE GOOD LIFE",
    description: "The Goodlife Website: A Digital Content Hub to Inspire Modern Lifestyles",
    image: "/api/placeholder/600/400", // Replace with your Good Life image
    category: "THE GOOD LIFE"
  }
];

const LatestWork: React.FC = () => {
  return (
    <section className="w-full py-24 px-6 md:px-12">
      <div className="mx-auto max-w-7xl">

        {/* Outlined Header */}
        <div className="mb-20 text-center">
          <h2 className="fancy-title text-[clamp(2rem,8vw,5rem)] tracking-wider">
            THE LATEST
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cases.map((item, index) => (
            <div key={index} className="group cursor-pointer flex flex-col bg-white">

              {/* Image Container */}
              <div className="aspect-4/3 overflow-hidden bg-gray-200">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content Area */}
              <div className="flex flex-col p-6 space-y-4 min-h-[180px]">
                <div className="flex items-center space-x-2">
                  <ArrowUpRight className="w-5 h-5 text-cyan-500" />
                  <span className="text-sm font-bold tracking-wider text-cyan-500">
                    {item.category}
                  </span>
                </div>

                <p className="text-lg font-medium leading-snug text-gray-800">
                  {item.description}
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
