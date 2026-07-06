import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  id?: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  id,
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 id={id} className="text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
        <span className="mt-2 block h-1 w-12 rounded-full bg-accent" />
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{subtitle}</p>
      )}
    </div>
  );
}
