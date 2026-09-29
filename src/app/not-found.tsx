import { ErrorState } from "@/components/booking/ErrorState";

export default function NotFound() {
  return (
    <section className="py-20 sm:py-28">
      <div className="container-hub">
        <ErrorState
          title="Page not found"
          description="The page you're looking for doesn't exist or may have moved."
          primaryAction={{ label: "Back to homepage", href: "/" }}
        />
      </div>
    </section>
  );
}
