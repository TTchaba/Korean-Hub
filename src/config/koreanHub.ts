/**
 * Korean Hub — central business configuration.
 *
 * This is the ONE file to edit for day-to-day business changes: copy,
 * pricing, teacher bio, contact details, FAQ, testimonials, and the
 * booking settings. Nothing in `components/` or `app/`
 * should hard-code business content — it should all be read from here.
 *
 * Version 1 has NO online payment. Prices are informational only and
 * are displayed on the site; they are never used in any payment logic.
 */

import type { LessonType, TeacherInfo } from "@/types/lesson";
import type { FaqItem, HowItWorksStep, Testimonial, WhyReason } from "@/types/content";

export const koreanHubConfig = {
  site: {
    name: "Korean Hub",
    tagline: "Learn Korean with a real teacher, not an app.",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://example.com",
    locale: "en",
    // Shown in the footer and legal-ish copy. Replace with the real
    // registered business name if different from the brand name.
    legalName: "[LEGAL BUSINESS NAME]",
  },

  brand: {
    name: "Korean Hub",
    shortName: "KH",
    logoText: "한국허브",
    description:
      "A focused, one-teacher Korean language studio offering live online individual and group lessons.",
  },

  /**
   * Structured as a list so a second (or third) teacher can be added
   * later without any component or route rewrites. Today only the
   * first entry is used, and it is treated as "the teacher" throughout
   * the site (see teacher page, homepage teacher section).
   */
  teachers: [
    {
      id: "teacher-1",
      name: "[TEACHER NAME]",
      role: "Founder & Korean Language Teacher",
      photo: "/images/teacher-placeholder.svg",
      shortBio: "[SHORT TEACHER BIO — one or two sentences for cards and previews.]",
      fullBio: [
        "[TEACHER FULL BIOGRAPHY PARAGRAPH ONE. Replace with the teacher's real background, how they started teaching Korean, and what they care about in the classroom.]",
        "[TEACHER FULL BIOGRAPHY PARAGRAPH TWO. Replace with more detail on teaching style, experience with different levels, or specialisation such as exam prep, conversation, or business Korean.]",
      ],
      experienceYears: 0,
      qualifications: ["[QUALIFICATION 1]", "[QUALIFICATION 2]", "[QUALIFICATION 3]"],
      teachingPhilosophy:
        "[TEACHING PHILOSOPHY — a short paragraph on how lessons are structured and what students can expect.]",
      languagesSpoken: ["Korean", "English"],
    },
  ] satisfies TeacherInfo[],

  /**
   * Lesson catalogue. `price` is shown on the site for information only.
   * Leave `price: 0` while undecided — the UI then displays "[PRICE]".
   */
  lessons: [
    {
      id: "individual",
      title: "Individual Korean",
      shortDescription: "One-on-one lessons tailored to your pace and goals.",
      description:
        "[LESSON DESCRIPTION — replace with real detail about what an individual lesson covers, materials used, and who it suits.]",
      duration: "1 hour",
      frequency: "2 times per week",
      format: "Online, live",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[INCLUSION 1 — e.g. personalised lesson plan]",
        "[INCLUSION 2 — e.g. learning materials]",
        "[INCLUSION 3 — e.g. homework and feedback]",
      ],
      isGroup: false,
      maxStudents: 1,
    },
    {
      id: "group",
      title: "Group Korean",
      shortDescription: "Learn alongside a small group at a similar level.",
      description:
        "[LESSON DESCRIPTION — replace with real detail about group size, level matching, and lesson style.]",
      duration: "1 hour",
      frequency: "2 times per week",
      format: "Online, live",
      price: 0,
      currency: "GEL",
      whatsIncluded: [
        "[INCLUSION 1 — e.g. small group, max N students]",
        "[INCLUSION 2 — e.g. shared learning materials]",
        "[INCLUSION 3 — e.g. speaking practice with peers]",
      ],
      isGroup: true,
      maxStudents: 6,
    },
  ] satisfies LessonType[],

  koreanLevels: [
    { id: "beginner", label: "Beginner — just starting out" },
    { id: "elementary", label: "Elementary — know the basics" },
    { id: "intermediate", label: "Intermediate — can hold conversations" },
    { id: "advanced", label: "Advanced — refining fluency" },
    { id: "unsure", label: "Not sure — I'd like guidance" },
  ],

  contact: {
    email: "[EMAIL]",
    phone: "[PHONE]",
    // Used for "teacher will contact you" messaging on confirmation pages.
    responseWindow: "within 1–2 business days",
    address: "[ADDRESS — optional, omit if fully online]",
  },

  socialMedia: {
    instagram: "[INSTAGRAM URL]",
    facebook: "[FACEBOOK URL]",
    youtube: "[YOUTUBE URL]",
    kakaotalk: "[KAKAOTALK / MESSENGER LINK — optional]",
  },

  faq: [
    {
      id: "faq-1",
      question: "Do I need to create an account to register?",
      answer:
        "No. You choose a lesson, fill in a short registration form, and send it — there's no account or password to manage.",
    },
    {
      id: "faq-2",
      question: "When will my lesson schedule be confirmed?",
      answer:
        "Registering sends a request. Korean Hub will contact you directly by email or phone to agree on a schedule that works for you. This isn't automated — a real person confirms it with you.",
    },
    {
      id: "faq-3",
      question: "Is anything paid on this website?",
      answer:
        "No. This website doesn't take any payment. Registering only sends your details so Korean Hub can get in touch with you.",
    },
    {
      id: "faq-4",
      question: "Can I switch between individual and group lessons later?",
      answer:
        "Yes — just get in touch and Korean Hub will help you move to the option that fits you best going forward.",
    },
    {
      id: "faq-5",
      question: "[FAQ QUESTION PLACEHOLDER]",
      answer: "[FAQ ANSWER PLACEHOLDER]",
    },
  ] satisfies FaqItem[],

  testimonials: [
    {
      id: "t1",
      name: "[STUDENT NAME]",
      level: "Beginner",
      quote: "[PLACEHOLDER TESTIMONIAL — replace with a real student quote once available.]",
    },
    {
      id: "t2",
      name: "[STUDENT NAME]",
      level: "Intermediate",
      quote: "[PLACEHOLDER TESTIMONIAL — replace with a real student quote once available.]",
    },
    {
      id: "t3",
      name: "[STUDENT NAME]",
      level: "Group student",
      quote: "[PLACEHOLDER TESTIMONIAL — replace with a real student quote once available.]",
    },
  ] satisfies Testimonial[],

  homepage: {
    heroHeadline: "Korean, taught properly.",
    heroSubheadline:
      "Live online lessons with a dedicated teacher — individual or small group, twice a week, built around how you actually learn.",
    heroPrimaryCta: "Request a lesson",
    heroSecondaryCta: "See how it works",
    finalCtaHeadline: "Ready to start learning Korean?",
    finalCtaDescription: "Send your registration — Korean Hub will get in touch to arrange the details.",
    finalCtaLabel: "Register now",

    whyKoreanHub: {
      title: "Why learn with Korean Hub",
      description: "A small, focused studio — built around real conversation, not a course library.",
      reasons: [
        {
          icon: "teacher",
          title: "One dedicated teacher",
          description: "No rotating instructors — you build a real teaching relationship over time.",
        },
        {
          icon: "schedule",
          title: "A schedule that fits you",
          description: "Your lesson times are agreed personally with you, not assigned by a system.",
        },
        {
          icon: "speaking",
          title: "Built around speaking",
          description: "Lessons are live and conversational, not pre-recorded videos to watch alone.",
        },
        {
          icon: "simple",
          title: "Simple to start",
          description: "Fill in one short form — no account and no password to manage.",
        },
      ] satisfies WhyReason[],
    },

    howItWorks: [
      { title: "Choose your lesson", description: "Pick individual or group Korean." },
      { title: "Register", description: "Tell us a little about you and your goals." },
      { title: "We get in touch", description: "Korean Hub contacts you by phone or email." },
      { title: "Confirm your schedule", description: "Agree lesson days and times together." },
      { title: "Start learning", description: "Begin your live online lessons." },
    ] satisfies HowItWorksStep[],
  },

  /**
   * The native registration form is the normal flow. Only if you set
   * `useGoogleForm: true` AND fill in `googleFormUrl` will /book redirect
   * to that Google Form instead.
   */
  booking: {
    useGoogleForm: false,
    googleFormUrl: "",
    steps: [
      { id: "lesson", label: "Choose lesson" },
      { id: "details", label: "Your details" },
      { id: "review", label: "Review" },
    ],
  },

  seo: {
    defaultTitle: "Korean Hub — Learn Korean Online",
    titleTemplate: "%s | Korean Hub",
    defaultDescription:
      "Korean Hub offers live online individual and group Korean lessons with a dedicated teacher. Register online — your schedule is confirmed personally.",
    ogImage: "/images/og-default.svg",
    twitterHandle: "[TWITTER/X HANDLE — optional]",
  },
} as const;

export type KoreanHubConfig = typeof koreanHubConfig;

/** Convenience accessor: the single active teacher (today, teachers[0]). */
export function getPrimaryTeacher(): TeacherInfo {
  const teacher = koreanHubConfig.teachers[0];
  if (!teacher) {
    throw new Error("Korean Hub configuration must include at least one teacher.");
  }
  return teacher;
}

/** Look up a lesson by id. Returns undefined if the id doesn't exist. */
export function findLessonById(lessonId: string): LessonType | undefined {
  return koreanHubConfig.lessons.find((lesson) => lesson.id === lessonId);
}
