"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { koreanHubConfig } from "@/config/koreanHub";
import { cn } from "@/lib/utils/cn";
import { MobileMenu } from "./MobileMenu";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/lessons", label: "Lessons" },
  { href: "/teacher", label: "Teacher" },
  { href: "/for-students", label: "For Students" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-porcelain/90 backdrop-blur">
      <div className="container-hub flex h-16 items-center justify-between sm:h-20">
        <Link href="/" className="font-display text-lg font-medium tracking-tight sm:text-xl">
          {koreanHubConfig.brand.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm transition-colors hover:text-celadon-700",
                  isActive ? "text-ink font-medium" : "text-ink/70"
                )}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/book"
            className="rounded bg-ink px-5 py-2.5 text-sm font-medium text-porcelain transition-colors hover:bg-celadon-700"
          >
            Register Now
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded text-ink md:hidden"
          onClick={() => setIsMobileMenuOpen(true)}
          aria-label="Open menu"
          aria-expanded={isMobileMenuOpen}
        >
          <Menu className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={NAV_LINKS}
        closeIcon={<X className="h-6 w-6" aria-hidden="true" />}
      />
    </header>
  );
}
