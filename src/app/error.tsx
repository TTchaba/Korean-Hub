"use client";

import { ErrorState } from "@/components/booking/ErrorState";

export default function GlobalError({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-hub">
        <ErrorState
          title="Something went wrong"
          description={
            <>
              An unexpected error occurred.{" "}
              <button type="button" onClick={reset} className="underline">
                Try again
              </button>
            </>
          }
          primaryAction={{ label: "Back to homepage", href: "/" }}
        />
      </div>
    </section>
  );
}
