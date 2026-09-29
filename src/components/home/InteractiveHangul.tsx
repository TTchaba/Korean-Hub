"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";

interface VocabCard {
  hangul: string;
  romanization: string;
  meaning: string;
}

const VOCAB: VocabCard[] = [
  { hangul: "사랑", romanization: "sarang", meaning: "love" },
  { hangul: "친구", romanization: "chingu", meaning: "friend" },
  { hangul: "행복", romanization: "haengbok", meaning: "happiness" },
  { hangul: "여행", romanization: "yeohaeng", meaning: "journey" },
  { hangul: "용기", romanization: "yonggi", meaning: "courage" },
  { hangul: "희망", romanization: "huimang", meaning: "hope" },
];

/**
 * A single strong concept: cards that flip from Hangul to meaning on
 * hover/tap, framed as a small daily-vocabulary moment rather than a
 * grid of unrelated effects.
 */
export function InteractiveHangul() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  function toggle(hangul: string) {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(hangul)) next.delete(hangul);
      else next.add(hangul);
      return next;
    });
  }

  return (
    <section className="border-b border-ink/10 bg-celadon-900 py-24 text-porcelain sm:py-32">
      <div className="container-hub">
        <SectionTitle
          className="text-porcelain [&_p]:text-porcelain/70"
          title="One word a day adds up"
          description="Every card below hides its meaning until you look. That's how real vocabulary sticks — a little curiosity, a little repetition."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {VOCAB.map((card, index) => {
            const isFlipped = flipped.has(card.hangul);
            return (
              <Reveal key={card.hangul} delay={index * 0.05}>
                <button
                  type="button"
                  onClick={() => toggle(card.hangul)}
                  className="group relative h-40 w-full [perspective:800px]"
                  aria-pressed={isFlipped}
                  aria-label={`${card.hangul}, reveal meaning`}
                >
                  <motion.div
                    className="relative h-full w-full rounded-md [transform-style:preserve-3d]"
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-md border border-porcelain/15 bg-celadon-700 [backface-visibility:hidden]">
                      <span className="font-display text-3xl">{card.hangul}</span>
                      <span className="mt-1 text-xs text-porcelain/60">{card.romanization}</span>
                    </div>
                    <div
                      className="absolute inset-0 flex items-center justify-center rounded-md border border-ochre-400/40 bg-ochre-400 text-ink [backface-visibility:hidden]"
                      style={{ transform: "rotateY(180deg)" }}
                    >
                      <span className="font-display text-xl">{card.meaning}</span>
                    </div>
                  </motion.div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
