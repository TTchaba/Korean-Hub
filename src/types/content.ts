export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface Testimonial {
  id: string;
  name: string;
  level: string;
  quote: string;
}

export type WhyReasonIcon = "teacher" | "schedule" | "speaking" | "simple";

export interface WhyReason {
  icon: WhyReasonIcon;
  title: string;
  description: string;
}

export interface HowItWorksStep {
  title: string;
  description: string;
}
