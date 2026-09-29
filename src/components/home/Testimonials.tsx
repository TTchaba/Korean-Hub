import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { koreanHubConfig } from "@/config/koreanHub";

export function Testimonials() {
  return (
    <section className="border-b border-ink/10 bg-porcelain-dim py-24 sm:py-32">
      <div className="container-hub">
        <SectionTitle title="What students say" />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {koreanHubConfig.testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.id} delay={index * 0.08} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
