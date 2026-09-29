"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { koreanHubConfig } from "@/config/koreanHub";

// A handful of everyday Korean words that drift behind the headline —
// the "characteristic thing in the subject's world" the hero opens with,
// rather than a generic stock photo or gradient blob.
const DRIFTING_WORDS = [
  { hangul: "안녕", meaning: "hello", top: "12%", left: "6%", delay: 0 },
  { hangul: "감사", meaning: "thanks", top: "68%", left: "10%", delay: 0.6 },
  { hangul: "배우다", meaning: "to learn", top: "22%", left: "82%", delay: 0.3 },
  { hangul: "잘했어", meaning: "well done", top: "78%", left: "78%", delay: 0.9 },
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();
  const { heroHeadline, heroSubheadline, heroPrimaryCta, heroSecondaryCta } =
    koreanHubConfig.homepage;

  return (
    <section className="relative overflow-hidden border-b border-ink/10 bg-porcelain py-24 sm:py-32">
      {!shouldReduceMotion &&
        DRIFTING_WORDS.map((word) => (
          <motion.span
            key={word.hangul}
            className="pointer-events-none absolute select-none font-display text-2xl text-celadon-300 sm:text-3xl"
            style={{ top: word.top, left: word.left }}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: [0, 0.8, 0.8, 0], y: [12, 0, 0, -12] }}
            transition={{
              duration: 6,
              delay: word.delay,
              repeat: Infinity,
              repeatDelay: 4,
              ease: "easeInOut",
            }}
          >
            {word.hangul}
            <span className="ml-2 align-middle text-xs font-sans font-normal text-ink/40">
              {word.meaning}
            </span>
          </motion.span>
        ))}

      <div className="container-hub relative">
        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 12 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-display text-sm tracking-wide text-celadon-700"
        >
          {koreanHubConfig.brand.logoText} · Korean Hub
        </motion.p>

        <motion.h1
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 24 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 max-w-3xl text-5xl font-medium leading-[1.05] tracking-tight sm:text-7xl"
        >
          {heroHeadline}
        </motion.h1>

        <motion.p
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-6 max-w-xl text-lg text-ink/70"
        >
          {heroSubheadline}
        </motion.p>

        <motion.div
          initial={shouldReduceMotion ? undefined : { opacity: 0, y: 16 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/book" variant="primary">
            {heroPrimaryCta}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
          <Button href="#how-it-works" variant="secondary">
            {heroSecondaryCta}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
