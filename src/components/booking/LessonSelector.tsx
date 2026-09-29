"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { formatPrice } from "@/lib/utils/currency";
import { koreanHubConfig } from "@/config/koreanHub";
import { Button } from "@/components/ui/Button";

interface LessonSelectorProps {
  selectedLessonId: string | null;
  onSelect: (lessonId: string) => void;
  onContinue: () => void;
}

export function LessonSelector({ selectedLessonId, onSelect, onContinue }: LessonSelectorProps) {
  return (
    <div>
      <h2 className="font-display text-2xl">Choose your lesson</h2>
      <p className="mt-1 text-ink/60">Both are live, online, one hour, twice a week.</p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {koreanHubConfig.lessons.map((lesson) => {
          const isSelected = selectedLessonId === lesson.id;
          return (
            <button
              key={lesson.id}
              type="button"
              onClick={() => onSelect(lesson.id)}
              aria-pressed={isSelected}
              className={cn(
                "relative rounded-md border p-6 text-left transition-colors",
                isSelected ? "border-celadon-600 bg-celadon-50" : "border-ink/15 hover:border-ink/30"
              )}
            >
              {isSelected && (
                <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-celadon-600 text-porcelain">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              )}
              <p className="text-sm font-medium text-celadon-700">
                {lesson.isGroup ? "Group" : "Individual"}
              </p>
              <p className="mt-1 font-display text-xl">{lesson.title}</p>
              <p className="mt-2 text-sm text-ink/70">{lesson.shortDescription}</p>
              <p className="mt-4 font-display text-2xl">{formatPrice(lesson.price, lesson.currency)}</p>
            </button>
          );
        })}
      </div>

      <div className="mt-8">
        <Button
          type="button"
          variant="primary"
          disabled={!selectedLessonId}
          onClick={onContinue}
        >
          Continue
        </Button>
      </div>
    </div>
  );
}
