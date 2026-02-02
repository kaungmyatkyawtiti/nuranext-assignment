import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export default function Logo({
  className,
}: LogoProps) {
  return (
    <div className={cn(
      "text-3xl tracking-tighter text-brand-blue font-orbitron",
      className
    )}>
      onenex
    </div>
  )
}
