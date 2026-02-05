"use client";

import Image from "next/image";
import { Project } from "@/types";

interface CardProps {
  project: Project;
  i: number;
}

export default function Card({
  project,
  i
}: CardProps) {
  return (
    <div className="h-screen flex items-center justify-center sticky top-0">
      <div
        className="relative flex flex-col rounded-xl p-12"
        style={{
          backgroundColor: "#ebdbb2",
          top: `calc(-5vh + ${i * 25}px)`,
        }}
      >
        <h2 className="text-center text-2xl md:text-3xl font-semibold">{project.title}</h2>

        <div className="flex flex-col md:flex-row gap-12 mt-12 h-[500px]">
          {/* Description */}
          <div className="w-full md:w-2/5 relative top-10">
            <p className="text-base md:text-lg">
              {project.category.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <span className="flex items-center gap-2 mt-2">
              <a
                href="#"
                target="_blank"
                className="text-sm underline cursor-pointer"
              >
                See more
              </a>
              <svg
                width="22"
                height="12"
                viewBox="0 0 22 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                  fill="black"
                />
              </svg>
            </span>
          </div>

          {/* Image */}
          <div className="w-full md:w-3/5 h-full relative rounded-[25px] overflow-hidden">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

