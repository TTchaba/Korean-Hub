import { NextResponse } from "next/server";
import { registrationSchema } from "@/lib/validation/registration";
import { createRegistration, UnknownLessonError } from "@/services/registrationService";

/**
 * POST /api/registrations
 *
 * Validates the submitted registration request on the server and stores
 * it in Firestore with status "new". No payment is involved.
 */
export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const parsed = registrationSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Please check the highlighted fields.", issues: parsed.error.flatten().fieldErrors },
      { status: 400 }
    );
  }

  try {
    const id = await createRegistration(parsed.data);
    return NextResponse.json({ id }, { status: 201 });
  } catch (error) {
    if (error instanceof UnknownLessonError) {
      return NextResponse.json({ error: "Selected lesson is not available." }, { status: 400 });
    }
    console.error("Failed to create registration:", error);
    return NextResponse.json({ error: "Something went wrong. Please try again." }, { status: 500 });
  }
}
