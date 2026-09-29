import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { getPrimaryTeacher } from "@/config/koreanHub";

export function TeacherPreview() {
  const teacher = getPrimaryTeacher();

  return (
    <section className="border-b border-ink/10 py-24 sm:py-32">
      <div className="container-hub grid items-center gap-12 lg:grid-cols-[0.8fr_1fr]">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-md bg-celadon-100">
            <Image
              src={teacher.photo}
              alt={`Portrait of ${teacher.name}`}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 40vw, 90vw"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-sm font-medium text-celadon-700">Your teacher</p>
          <h2 className="mt-2 font-display text-4xl tracking-tight sm:text-5xl">
            {teacher.name}
          </h2>
          <p className="mt-1 text-ink/60">{teacher.role}</p>
          <p className="mt-6 max-w-prose text-lg text-ink/80">{teacher.shortBio}</p>
          <div className="mt-8">
            <Button href="/teacher" variant="secondary">
              Meet {teacher.name}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
