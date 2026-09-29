import { randomUUID } from "crypto";

/** Generates a v4 UUID for use as a registration id / idempotency key. */
export function generateId(): string {
  return randomUUID();
}
