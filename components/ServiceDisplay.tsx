"use client";

import { DUMMY_LATEST } from "@/constants";
import { useRef } from "react";
import { useScroll } from "motion/react";
import ShowcaseCard from "./ShowcaseCard";

const ServiceDisplay = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  return (
    <section
      ref={container}
      className='relative section-container'
    >
      {DUMMY_LATEST.map((project, i) => {
        const targetScale = 1 - ((DUMMY_LATEST.length - i) * 0.05);

        return (
          <ShowcaseCard
            key={project.id}
            project={project}
            i={i}
            progress={scrollYProgress}
            range={[i * .25, 1]}
            targetScale={targetScale}
          />
        )
      })}
    </section>
  );
};

export default ServiceDisplay;
