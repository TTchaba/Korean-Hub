"use client";

import { useState, type FormEvent } from "react";
import { registrationSchema, type RegistrationFormValues } from "@/lib/validation/registration";
import { koreanHubConfig } from "@/config/koreanHub";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";

interface RegistrationFormProps {
  lessonId: string;
  initialValues: Omit<RegistrationFormValues, "lessonType">;
  onBack: () => void;
  onContinue: (values: Omit<RegistrationFormValues, "lessonType">) => void;
}

type FieldErrors = Partial<Record<keyof RegistrationFormValues, string>>;

export function RegistrationForm({
  lessonId,
  initialValues,
  onBack,
  onContinue,
}: RegistrationFormProps) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<FieldErrors>({});

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const parsed = registrationSchema.safeParse({ ...values, lessonType: lessonId });
    if (!parsed.success) {
      const fieldErrors: FieldErrors = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0] as keyof RegistrationFormValues;
        fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    onContinue(values);
  }

  function updateField<K extends keyof typeof values>(key: K, value: (typeof values)[K]) {
    setValues((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="max-w-xl">
      <h2 className="font-display text-2xl">Your details</h2>
      <p className="mt-1 text-ink/60">This is all Korean Hub needs to get in touch and confirm your schedule.</p>

      <div className="mt-6 space-y-5">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName}>
          <input
            id="fullName"
            type="text"
            value={values.fullName}
            onChange={(e) => updateField("fullName", e.target.value)}
            aria-invalid={Boolean(errors.fullName)}
            className={inputClasses(Boolean(errors.fullName))}
            autoComplete="name"
          />
        </Field>

        <Field label="Email" htmlFor="email" error={errors.email}>
          <input
            id="email"
            type="email"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-invalid={Boolean(errors.email)}
            className={inputClasses(Boolean(errors.email))}
            autoComplete="email"
          />
        </Field>

        <Field label="Phone number" htmlFor="phone" error={errors.phone}>
          <input
            id="phone"
            type="tel"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-invalid={Boolean(errors.phone)}
            className={inputClasses(Boolean(errors.phone))}
            autoComplete="tel"
          />
        </Field>

        <Field label="Your current Korean level" htmlFor="koreanLevel" error={errors.koreanLevel}>
          <select
            id="koreanLevel"
            value={values.koreanLevel}
            onChange={(e) => updateField("koreanLevel", e.target.value)}
            aria-invalid={Boolean(errors.koreanLevel)}
            className={inputClasses(Boolean(errors.koreanLevel))}
          >
            <option value="" disabled>
              Select a level
            </option>
            {koreanHubConfig.koreanLevels.map((level) => (
              <option key={level.id} value={level.id}>
                {level.label}
              </option>
            ))}
          </select>
        </Field>

        <Field label="Your learning goals" htmlFor="goals" error={errors.goals} optional>
          <textarea
            id="goals"
            rows={3}
            value={values.goals ?? ""}
            onChange={(e) => updateField("goals", e.target.value)}
            aria-invalid={Boolean(errors.goals)}
            className={cn(inputClasses(Boolean(errors.goals)), "resize-none")}
            placeholder="e.g. I'm learning for an upcoming trip to Seoul."
          />
        </Field>

        <Field
          label="Anything else we should know"
          htmlFor="additionalInfo"
          error={errors.additionalInfo}
          optional
        >
          <textarea
            id="additionalInfo"
            rows={3}
            value={values.additionalInfo ?? ""}
            onChange={(e) => updateField("additionalInfo", e.target.value)}
            aria-invalid={Boolean(errors.additionalInfo)}
            className={cn(inputClasses(Boolean(errors.additionalInfo)), "resize-none")}
            placeholder="e.g. preferred days, or questions for the teacher."
          />
        </Field>
      </div>

      <div className="mt-8 flex gap-3">
        <Button type="button" variant="secondary" onClick={onBack}>
          Back
        </Button>
        <Button type="submit" variant="primary">
          Continue
        </Button>
      </div>
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded border bg-porcelain px-4 py-2.5 text-sm",
    hasError ? "border-dancheong-500" : "border-ink/20"
  );
}

function Field({
  label,
  htmlFor,
  error,
  optional,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-medium">
        {label} {optional && <span className="font-normal text-ink/40">(optional)</span>}
      </label>
      <div className="mt-1.5">{children}</div>
      {error && (
        <p id={`${htmlFor}-error`} className="mt-1 text-sm text-dancheong-500">
          {error}
        </p>
      )}
    </div>
  );
}
