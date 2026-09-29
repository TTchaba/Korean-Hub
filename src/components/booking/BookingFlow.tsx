"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { BookingStepper } from "./BookingStepper";
import { LessonSelector } from "./LessonSelector";
import { RegistrationForm } from "./RegistrationForm";
import { RegistrationSummary } from "./RegistrationSummary";
import { SuccessState } from "./SuccessState";
import { findLessonById } from "@/config/koreanHub";
import type { RegistrationFormValues } from "@/lib/validation/registration";

type StepId = "lesson" | "details" | "review" | "done";

type DetailsValues = Omit<RegistrationFormValues, "lessonType">;

const EMPTY_DETAILS: DetailsValues = {
  fullName: "",
  email: "",
  phone: "",
  koreanLevel: "" as DetailsValues["koreanLevel"],
  goals: "",
  additionalInfo: "",
};

export function BookingFlow() {
  const searchParams = useSearchParams();
  const preselectedLessonId = searchParams.get("lesson");
  const initialLessonId =
    preselectedLessonId && findLessonById(preselectedLessonId) ? preselectedLessonId : null;

  const [step, setStep] = useState<StepId>("lesson");
  const [lessonId, setLessonId] = useState<string | null>(initialLessonId);
  const [details, setDetails] = useState<DetailsValues>(EMPTY_DETAILS);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const lesson = lessonId ? findLessonById(lessonId) : undefined;

  async function handleSubmit() {
    if (!lessonId) return;
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/registrations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...details, lessonType: lessonId }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => ({}))) as { error?: string };
        throw new Error(data.error ?? "Could not send your registration.");
      }

      setStep("done");
    } catch (error) {
      setSubmitError(
        error instanceof Error ? error.message : "Something went wrong. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div>
      {step !== "done" && (
        <div className="mb-12">
          <BookingStepper currentStepId={step} />
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: 16 }}
          animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, x: 0 }}
          exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, x: -16 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {step === "lesson" && (
            <LessonSelector
              selectedLessonId={lessonId}
              onSelect={setLessonId}
              onContinue={() => setStep("details")}
            />
          )}

          {step === "details" && lessonId && (
            <RegistrationForm
              lessonId={lessonId}
              initialValues={details}
              onBack={() => setStep("lesson")}
              onContinue={(values) => {
                setDetails(values);
                setStep("review");
              }}
            />
          )}

          {step === "review" && lesson && (
            <RegistrationSummary
              values={{ ...details, lessonType: lesson.id }}
              onBack={() => setStep("details")}
              onSubmit={handleSubmit}
              isSubmitting={isSubmitting}
              error={submitError}
            />
          )}

          {step === "done" && <SuccessState lessonTitle={lesson?.title} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
