import { cn } from "@/lib/utils";
import { Project } from "@/types"
import Image from "next/image"

interface ProjectCardProps {
  project: Project;
  isEven: boolean;
}

export default function ProjectCard({
  project,
  isEven
}: ProjectCardProps) {
  return (
    <div className={cn(
      "flex flex-col md:flex-row md:items-center gap-3 md:gap-10",
      !isEven && "md:flex-row-reverse"
    )}>
      {/* Image */}
      <div className={cn(
        "relative overflow-hidden group cursor-pointer aspect-video md:aspect-4/3 md:w-1/2",
      )}>
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          loading='eager'
          className="object-cover"
        />
      </div>

      {/* Text */}
      <div className="md:w-1/2 flex items-center">
        <div className="max-w-xl space-y-4">
          <h2 className="text-[clamp(20px,3.8vw,1.8rem)] font-semibold">
            {project.title}
          </h2>
          <p className="text-[15px] lg:text-lg font-bold uppercase text-primary-pink">
            {project.client}
          </p>
        </div>
      </div>
    </div>
  )
}
