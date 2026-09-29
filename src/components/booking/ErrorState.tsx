import type { ReactNode } from "react";
import { XCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ErrorStateProps {
  title: string;
  description: ReactNode;
  primaryAction?: { label: string; href: string };
}

export function ErrorState({ title, description, primaryAction }: ErrorStateProps) {
  return (
    <div className="mx-auto max-w-lg text-center">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dancheong-500/10">
        <XCircle className="h-8 w-8 text-dancheong-500" aria-hidden="true" />
      </span>
      <h1 className="mt-6 font-display text-3xl">{title}</h1>
      <p className="mt-3 text-ink/70">{description}</p>
      <div className="mt-8 flex justify-center gap-3">
        <Button href={primaryAction?.href ?? "/book"}>{primaryAction?.label ?? "Back to registration"}</Button>
        <Button href="/contact" variant="secondary">
          Contact us
        </Button>
      </div>
    </div>
  );
}
