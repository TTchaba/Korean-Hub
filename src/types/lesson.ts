export type Currency = "GEL" | "USD" | "EUR" | "GBP";

export interface LessonType {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  duration: string;
  frequency: string;
  format: string;
  /** Authoritative price. The server re-reads this by id; never trust a client-sent price. */
  price: number;
  currency: Currency;
  whatsIncluded: string[];
  isGroup: boolean;
  maxStudents: number;
}

export interface TeacherInfo {
  id: string;
  name: string;
  role: string;
  photo: string;
  shortBio: string;
  fullBio: string[];
  experienceYears: number;
  qualifications: string[];
  teachingPhilosophy: string;
  languagesSpoken: string[];
}

export interface KoreanLevelOption {
  id: string;
  label: string;
}
