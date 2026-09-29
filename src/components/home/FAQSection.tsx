import { SectionTitle } from "@/components/ui/SectionTitle";
import { Reveal } from "@/components/ui/Reveal";
import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { koreanHubConfig } from "@/config/koreanHub";

export function FAQSection() {
  return (
    <section className="py-24 sm:py-32">
      <div className="container-hub max-w-3xl">
        <SectionTitle title="Frequently asked questions" />
        <Reveal className="mt-12">
          <FAQAccordion items={koreanHubConfig.faq} />
        </Reveal>
      </div>
    </section>
  );
}
