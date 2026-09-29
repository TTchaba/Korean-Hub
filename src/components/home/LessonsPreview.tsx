import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { LessonCard } from "@/components/lessons/LessonCard";
import { koreanHubConfig } from "@/config/koreanHub";

export function LessonsPreview() {
  return (
    <section className="border-b border-ink/10 bg-porcelain-dim py-24 sm:py-32">
      <div className="container-hub">
        <SectionTitle
          title="Two ways to learn"
          description="Both are live, online, one hour, twice a week — the difference is who's in the room."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {koreanHubConfig.lessons.map((lesson, index) => (
            <Reveal key={lesson.id} delay={index * 0.1}>
              <LessonCard lesson={lesson} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
