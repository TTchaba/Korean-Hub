import { z } from "zod";
import { koreanHubConfig } from "@/config/koreanHub";

const validLessonIds = koreanHubConfig.lessons.map((lesson) => lesson.id) as [string, ...string[]];
const validLevelIds = koreanHubConfig.koreanLevels.map((level) => level.id) as [string, ...string[]];

/**
 * Single source of truth for registration validation. Used by the form on
 * the client (instant feedback) and by /api/registrations on the server
 * (the client is never trusted on its own).
 */
export const registrationSchema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name.").max(80, "Name is too long."),
  email: z.string().trim().email("Enter a valid email address.").max(120),
  phone: z
    .string()
    .trim()
    .min(6, "Enter a valid phone number.")
    .max(20, "Phone number is too long.")
    .regex(/^[0-9+\s()-]+$/, "Use only numbers, spaces, and + ( ) -."),
  koreanLevel: z.enum(validLevelIds, {
    errorMap: () => ({ message: "Select your current Korean level." }),
  }),
  lessonType: z.enum(validLessonIds, {
    errorMap: () => ({ message: "Select a lesson type." }),
  }),
  goals: z.string().trim().max(600, "Keep this under 600 characters.").optional(),
  additionalInfo: z.string().trim().max(600, "Keep this under 600 characters.").optional(),
});

export type RegistrationFormValues = z.infer<typeof registrationSchema>;

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(80),
  email: z.string().trim().email("Enter a valid email address."),
  message: z.string().trim().min(10, "Message is too short.").max(2000, "Message is too long."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
