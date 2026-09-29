"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { koreanHubConfig } from "@/config/koreanHub";

export function HowItWorks() {
  const steps = koreanHubConfig.homepage.howItWorks;

  return (
    <section id="how-it-works" className="border-b border-ink/10 bg-celadon-900 py-24 text-porcelain sm:py-32">
      <div className="container-hub">
        <SectionTitle
          className="[&_p]:text-porcelain/70"
          title="How it works"
          description="Registering takes a couple of minutes. Your actual lesson time is agreed with you personally, not assigned by an algorithm."
        />

        <ol className="relative mt-16 grid gap-10 sm:grid-cols-5 sm:gap-4">
          <motion.div
            className="absolute left-0 right-0 top-5 hidden h-px origin-left bg-porcelain/20 sm:block"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          />
          {steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 0.1}>
              <li className="relative">
                <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ochre-400 font-display text-sm text-ink">
                  {index + 1}
                </span>
                <h3 className="mt-4 font-medium">{step.title}</h3>
                <p className="mt-1 text-sm text-porcelain/70">{step.description}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
