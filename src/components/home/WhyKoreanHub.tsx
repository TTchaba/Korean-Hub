"use client";

import { motion } from "framer-motion";
import { UserRound, CalendarCheck, MessagesSquare, Sparkles, type LucideIcon } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { koreanHubConfig } from "@/config/koreanHub";
import type { WhyReasonIcon } from "@/types/content";

const ICONS: Record<WhyReasonIcon, LucideIcon> = {
  teacher: UserRound,
  schedule: CalendarCheck,
  speaking: MessagesSquare,
  simple: Sparkles,
};

export function WhyKoreanHub() {
  const { title, description, reasons } = koreanHubConfig.homepage.whyKoreanHub;

  return (
    <section className="border-b border-ink/10 py-24 sm:py-32">
      <div className="container-hub">
        <SectionTitle title={title} description={description} />

        <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => {
            const Icon = ICONS[reason.icon];
            return (
              <Reveal key={reason.title} delay={index * 0.08} className="h-full">
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="h-full bg-porcelain p-8"
                >
                  <Icon className="h-6 w-6 text-celadon-600" aria-hidden="true" />
                  <h3 className="mt-5 font-medium">{reason.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{reason.description}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
