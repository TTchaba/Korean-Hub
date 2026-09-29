import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation/registration";
import { getAdminFirestore } from "@/lib/firebase/admin";
import { COLLECTIONS } from "@/lib/firebase/collections";
import { generateId } from "@/lib/utils/id";
import type { ContactSubmission } from "@/types/registration";

/** POST /api/contact — stores a contact form submission in Firestore. */
export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Validation failed.", issues: parsed.error.flatten() },
      { status: 400 }
    );
  }

  const submission: ContactSubmission = {
    id: generateId(),
    createdAt: new Date().toISOString(),
    ...parsed.data,
  };

  try {
    const db = getAdminFirestore();
    await db.collection(COLLECTIONS.contactSubmissions).doc(submission.id).set(submission);
    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error("Failed to store contact submission:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
