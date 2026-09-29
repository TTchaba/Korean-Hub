/**
 * Lifecycle of a registration *request*. Registering on the website does
 * not book a lesson — it only tells Korean Hub someone is interested.
 *
 *   new        — just submitted through the website
 *   contacted  — the teacher has reached out to the student
 *   confirmed  — schedule agreed with the student
 *
 * Status is changed manually (e.g. in the Firebase console).
 */
export type RegistrationStatus = "new" | "contacted" | "confirmed";

/** Fields stored in the Firestore `registrations` collection. */
export interface RegistrationDocument {
  fullName: string;
  email: string;
  phone: string;
  koreanLevel: string;
  lessonType: string; // lesson id from config, e.g. "individual"
  lessonTitle: string; // snapshot of the title at submission time
  goals?: string;
  additionalInfo?: string;
  status: RegistrationStatus;
  // createdAt / updatedAt are written by the server as Firestore timestamps.
}

export interface ContactSubmission {
  id: string;
  createdAt: string;
  name: string;
  email: string;
  message: string;
}
