"use client";

import { formatPrice } from "@/lib/utils/currency";
import { koreanHubConfig, findLessonById } from "@/config/koreanHub";
import { Button } from "@/components/ui/Button";
import type { RegistrationFormValues } from "@/lib/validation/registration";

interface RegistrationSummaryProps {
  values: RegistrationFormValues;
  onBack: () => void;
  onSubmit: () => void;
  isSubmitting: boolean;
  error?: string | null;
}

export function RegistrationSummary({
  values,
  onBack,
  onSubmit,
  isSubmitting,
  error,
}: RegistrationSummaryProps) {
  const lesson = findLessonById(values.lessonType);
  const level = koreanHubConfig.koreanLevels.find((l) => l.id === values.koreanLevel);

  if (!lesson) return null;

  return (
    <div className="max-w-xl">
      <h2 className="font-display text-2xl">Review your request</h2>
      <p className="mt-1 text-ink/60">Check everything looks right, then send it to Korean Hub.</p>

      <dl className="mt-6 divide-y divide-ink/10 rounded-md border border-ink/10">
        <Row label="Lesson" value={lesson.title} />
        <Row label="Duration" value={lesson.duration} />
        <Row label="Frequency" value={lesson.frequency} />
        <Row label="Listed price" value={formatPrice(lesson.price, lesson.currency)} />
        <Row label="Name" value={values.fullName} />
        <Row label="Email" value={values.email} />
        <Row label="Phone" value={values.phone} />
        <Row label="Korean level" value={level?.label ?? values.koreanLevel} />
        {values.goals && <Row label="Goals" value={values.goals} />}
        {values.additionalInfo && <Row label="Notes" value={values.additionalInfo} />}
      </dl>

      <p className="mt-4 text-sm text-ink/50">
        This is a registration request. No lesson time is booked yet — {koreanHubConfig.brand.name}{" "}
        will contact you to confirm the details and schedule.
      </p>

      {error && (
        <p role="alert" className="mt-4 text-sm text-dancheong-500">
          {error}
        </p>
      )}

      <div className="mt-8 flex gap-3">
        <Button type="button" variant="secondary" onClick={onBack} disabled={isSubmitting}>
          Back
        </Button>
        <Button type="button" variant="primary" onClick={onSubmit} disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "Submit registration"}
        </Button>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-6 px-5 py-3.5">
      <dt className="flex-shrink-0 text-sm text-ink/50">{label}</dt>
      <dd className="break-words text-right text-sm font-medium">{value}</dd>
    </div>
  );
}
