import { Hero } from "@/components/home/Hero";
import { InteractiveHangul } from "@/components/home/InteractiveHangul";
import { WhyKoreanHub } from "@/components/home/WhyKoreanHub";
import { LessonsPreview } from "@/components/home/LessonsPreview";
import { TeacherPreview } from "@/components/home/TeacherPreview";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/shared/CTASection";
import { koreanHubConfig } from "@/config/koreanHub";

export default function HomePage() {
  return (
    <>
      <Hero />
      <InteractiveHangul />
      <WhyKoreanHub />
      <LessonsPreview />
      <TeacherPreview />
      <HowItWorks />
      <Testimonials />
      <FAQSection />
      <CTASection
        headline={koreanHubConfig.homepage.finalCtaHeadline}
        description={koreanHubConfig.homepage.finalCtaDescription}
        ctaLabel={koreanHubConfig.homepage.finalCtaLabel}
        ctaHref="/book"
      />
    </>
  );
}
