import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import { BookingFlow } from "@/components/booking/BookingFlow";
import { koreanHubConfig } from "@/config/koreanHub";

export const metadata: Metadata = {
  title: "Register",
  description: "Send a registration request for individual or group Korean lessons.",
};

export default function BookPage() {
  const { useGoogleForm, googleFormUrl } = koreanHubConfig.booking;

  // Optional fallback: only when explicitly enabled AND a URL is set.
  if (useGoogleForm && googleFormUrl) {
    redirect(googleFormUrl);
  }

  return (
    <section className="py-16 sm:py-24">
      <div className="container-hub max-w-4xl">
        <Suspense fallback={null}>
          <BookingFlow />
        </Suspense>
      </div>
    </section>
  );
}
