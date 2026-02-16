"use client";

import { DUMMY_PROJECTS } from '@/constants';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import ProjectCard from './ProjectCard';
import { cn } from '@/lib/utils';

const tabs = ['All', 'E-commerce', 'Website', 'App'];

const CasesGrid = () => {
  const [selectedTab, setSelectedTab] = useState("All")

  const filteredProjects = DUMMY_PROJECTS.filter(project => selectedTab === "All" || selectedTab === project.category);

  const categoryCounts = DUMMY_PROJECTS.reduce(
    (acc: Record<string, number>, project) => {
      acc[project.category] = (acc[project.category] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>
  );
  console.log("categoryCounts", categoryCounts)

  const totalCount = DUMMY_PROJECTS.length;

  const projectsByCategory = DUMMY_PROJECTS.reduce(
    (acc: Record<string, typeof DUMMY_PROJECTS>, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    },
    {} as Record<string, typeof DUMMY_PROJECTS>
  );
  console.log("projectsByCategory", projectsByCategory)

  return (
    <section className="section-container">
      <div className='max-w-7xl mx-auto'>
        {/* Filter Tabs */}
        <ul className="sticky top-(--header-height) z-90 flex border-b overflow-x-auto whitespace-nowrap bg-background/90 backdrop-blur-lg">
          {tabs.map((item, i) => (
            <motion.li
              key={i}
              initial={false}
              animate={{
                backgroundColor:
                  item === selectedTab ? "#f6339a26" : "transparent",
              }}
              onClick={() => setSelectedTab(item)}
              className={cn(
                'px-6 py-3 relative cursor-pointer font-semibold text-foreground/80 hover:text-foreground text-[14px] md:text-[15px]',
                item === selectedTab && "text-foreground"
              )}
            >
              {item} [{item === "All" ? totalCount : categoryCounts[item] || 0}]
              {item === selectedTab ? (
                <motion.div
                  layoutId="underline"
                  id="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-pink-500"
                />
              ) : null}
            </motion.li>
          ))}
        </ul>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab === "All"
              ? Object.entries(projectsByCategory).map(([category, projects]) => (
                <div
                  key={category}
                  className='mt-16 space-y-4'
                >
                  <h2 className="fancy-title text-[clamp(2.4rem,6vw,4rem)] tracking-wide">
                    {category}
                  </h2>

                  <div className='space-y-12 md:space-y-6'>
                    {projects.map((project, index) => {
                      const isEven = index % 2 === 0;

                      return (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          isEven={isEven}
                        />
                      );
                    })}
                  </div>
                </div>
              ))
              : (
                <div className='mt-16 space-y-4'>
                  <h2 className="fancy-title text-[clamp(2.4rem,6vw,4rem)] tracking-wide">
                    {selectedTab}
                  </h2>

                  <div className='space-y-12 md:space-y-6'>
                    {filteredProjects.map((project, index) => {
                      const isEven = index % 2 === 0;

                      return (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          isEven={isEven}
                        />
                      );
                    })}
                  </div>
                </div>
              )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default CasesGrid; 
