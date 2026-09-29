"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { koreanHubConfig } from "@/config/koreanHub";

export function SuccessState({ lessonTitle }: { lessonTitle?: string }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="mx-auto max-w-lg text-center" role="status">
      <motion.span
        initial={shouldReduceMotion ? { opacity: 0 } : { scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
        className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-celadon-100"
      >
        <CheckCircle2 className="h-8 w-8 text-celadon-700" aria-hidden="true" />
      </motion.span>
      <h1 className="mt-6 font-display text-3xl">
        Thank you for registering with {koreanHubConfig.brand.name}
      </h1>
      <p className="mt-3 text-ink/70">
        We received your information{lessonTitle ? ` for ${lessonTitle}` : ""} successfully. We
        will contact you by phone or email {koreanHubConfig.contact.responseWindow} to confirm your
        lesson details and schedule.
      </p>
      <p className="mt-2 text-sm text-ink/50">
        No lesson time has been booked yet — that happens once we&apos;ve spoken.
      </p>
      <div className="mt-8">
        <Button href="/">Back to homepage</Button>
      </div>
    </div>
  );
}
