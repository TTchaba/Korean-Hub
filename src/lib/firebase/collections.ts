import "server-only";

/** Centralised Firestore collection names — change here, not per-call-site. */
export const COLLECTIONS = {
  registrations: "registrations",
  contactSubmissions: "contactSubmissions",
} as const;
