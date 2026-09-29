import "server-only";
import { FieldValue } from "firebase-admin/firestore";
import { findLessonById } from "@/config/koreanHub";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { COLLECTIONS } from "@/lib/firebase/collections";
import type { RegistrationFormValues } from "@/lib/validation/registration";
import type { RegistrationDocument } from "@/types/registration";

export class UnknownLessonError extends Error {
  constructor(lessonId: string) {
    super(`Unknown lesson id: ${lessonId}`);
    this.name = "UnknownLessonError";
  }
}

/** Stores a new registration request with status "new". Returns its id. */
export async function createRegistration(input: RegistrationFormValues): Promise<string> {
  // The lesson title is looked up server-side from config, not taken from the client.
  const lesson = findLessonById(input.lessonType);
  if (!lesson) throw new UnknownLessonError(input.lessonType);

  const document: RegistrationDocument = {
    fullName: input.fullName,
    email: input.email,
    phone: input.phone,
    koreanLevel: input.koreanLevel,
    lessonType: lesson.id,
    lessonTitle: lesson.title,
    status: "new",
    // Firestore rejects `undefined`, so optional fields are only added when present.
    ...(input.goals ? { goals: input.goals } : {}),
    ...(input.additionalInfo ? { additionalInfo: input.additionalInfo } : {}),
  };

  const ref = getAdminFirestore().collection(COLLECTIONS.registrations).doc();
  await ref.set({
    ...document,
    createdAt: FieldValue.serverTimestamp(),
    updatedAt: FieldValue.serverTimestamp(),
  });

  return ref.id;
}
