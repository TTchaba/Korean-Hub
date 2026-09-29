import { cn } from "@/lib/utils/cn";

interface SectionTitleProps {
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionTitle({ title, description, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      <h2 className="text-3xl font-medium tracking-tight sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-lg text-ink/70">{description}</p>}
    </div>
  );
}
