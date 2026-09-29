import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { formatPrice } from "@/lib/utils/currency";
import type { LessonType } from "@/types/lesson";

interface LessonCardProps {
  lesson: LessonType;
  /** Show the full "what's included" list; the homepage preview keeps it short. */
  detailed?: boolean;
}

export function LessonCard({ lesson, detailed = false }: LessonCardProps) {
  return (
    <div className="flex h-full flex-col justify-between rounded-md border border-ink/10 bg-porcelain p-8">
      <div>
        <p className="text-sm font-medium text-celadon-700">
          {lesson.isGroup ? "Group" : "Individual"}
        </p>
        <h3 className="mt-2 font-display text-2xl">{lesson.title}</h3>
        <p className="mt-3 text-ink/70">{lesson.shortDescription}</p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-ink/10 py-4 text-sm">
          <div>
            <dt className="text-ink/50">Duration</dt>
            <dd className="mt-0.5 font-medium">{lesson.duration}</dd>
          </div>
          <div>
            <dt className="text-ink/50">Frequency</dt>
            <dd className="mt-0.5 font-medium">{lesson.frequency}</dd>
          </div>
        </dl>

        {detailed && (
          <ul className="mt-6 space-y-3">
            {lesson.whatsIncluded.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-ink/80">
                <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-celadon-600" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-8 flex items-end justify-between">
        <p className="font-display text-3xl">{formatPrice(lesson.price, lesson.currency)}</p>
        <Button href={`/book?lesson=${lesson.id}`} variant="primary">
          Register
        </Button>
      </div>
    </div>
  );
}
