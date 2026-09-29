"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: Array<{ href: string; label: string }>;
  closeIcon: ReactNode;
}

export function MobileMenu({ isOpen, onClose, links, closeIcon }: MobileMenuProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-ink text-porcelain md:hidden"
          initial={shouldReduceMotion ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }}
          animate={shouldReduceMotion ? { opacity: 1 } : { clipPath: "circle(150% at 100% 0%)" }}
          exit={shouldReduceMotion ? { opacity: 0 } : { clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: shouldReduceMotion ? 0.15 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="container-hub flex h-16 items-center justify-end sm:h-20">
            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded"
              aria-label="Close menu"
            >
              {closeIcon}
            </button>
          </div>

          <nav className="container-hub flex flex-1 flex-col justify-center gap-2 pb-24">
            {links.map((link, index) => (
              <motion.div
                key={link.href}
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
                animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
                transition={{ delay: shouldReduceMotion ? 0 : 0.1 + index * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block py-3 font-display text-4xl tracking-tight sm:text-5xl"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 16 }}
              animate={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: shouldReduceMotion ? 0 : 0.1 + links.length * 0.05, duration: 0.4 }}
              className="mt-6"
            >
              <Link
                href="/book"
                onClick={onClose}
                className="inline-block rounded bg-porcelain px-6 py-3 font-medium text-ink"
              >
                Register Now
              </Link>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
