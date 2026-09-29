import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

interface CTASectionProps {
  headline: string;
  description?: string;
  ctaLabel: string;
  ctaHref: string;
}

export function CTASection({ headline, description, ctaLabel, ctaHref }: CTASectionProps) {
  return (
    <section className="bg-ink py-24 text-porcelain sm:py-28">
      <div className="container-hub text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-4xl font-medium tracking-tight sm:text-5xl">
            {headline}
          </h2>
          {description && (
            <p className="mx-auto mt-4 max-w-lg text-porcelain/70">{description}</p>
          )}
          <div className="mt-10">
            <Button href={ctaHref} variant="primary" className="bg-porcelain text-ink hover:bg-ochre-400">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
