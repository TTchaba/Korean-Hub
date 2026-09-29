import type { Testimonial } from "@/types/content";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-md border border-ink/10 bg-porcelain p-8">
      <blockquote className="text-lg leading-relaxed text-ink/80">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-6 text-sm">
        <span className="font-medium text-ink">{testimonial.name}</span>
        <span className="text-ink/50"> · {testimonial.level}</span>
      </figcaption>
    </figure>
  );
}
