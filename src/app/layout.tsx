import type { Metadata } from "next";
import { Fraunces, Noto_Sans_KR } from "next/font/google";
import { koreanHubConfig } from "@/config/koreanHub";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

// Noto Sans KR is used site-wide (not only for Korean copy) so that any
// Hangul rendered inline — in the interactive vocabulary section, the
// brand mark, or quoted phrases — sits typographically consistent with
// the Latin body text, rather than falling back to a mismatched system font.
const sans = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(koreanHubConfig.site.url),
  title: {
    default: koreanHubConfig.seo.defaultTitle,
    template: koreanHubConfig.seo.titleTemplate,
  },
  description: koreanHubConfig.seo.defaultDescription,
  openGraph: {
    title: koreanHubConfig.seo.defaultTitle,
    description: koreanHubConfig.seo.defaultDescription,
    url: koreanHubConfig.site.url,
    siteName: koreanHubConfig.brand.name,
    images: [{ url: koreanHubConfig.seo.ogImage }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: koreanHubConfig.seo.defaultTitle,
    description: koreanHubConfig.seo.defaultDescription,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-ink focus:px-4 focus:py-2 focus:text-porcelain"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
