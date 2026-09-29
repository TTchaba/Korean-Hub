import { Check } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import { koreanHubConfig } from "@/config/koreanHub";

interface BookingStepperProps {
  currentStepId: string;
}

export function BookingStepper({ currentStepId }: BookingStepperProps) {
  const steps = koreanHubConfig.booking.steps;
  const currentIndex = steps.findIndex((step) => step.id === currentStepId);

  return (
    <ol className="flex items-center gap-2 sm:gap-4" aria-label="Booking progress">
      {steps.map((step, index) => {
        const isComplete = index < currentIndex;
        const isCurrent = index === currentIndex;

        return (
          <li key={step.id} className="flex flex-1 items-center gap-2 sm:gap-4">
            <div className="flex items-center gap-2">
              <span
                className={cn(
                  "flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-medium",
                  isComplete && "bg-celadon-600 text-porcelain",
                  isCurrent && "bg-ink text-porcelain",
                  !isComplete && !isCurrent && "bg-ink/10 text-ink/50"
                )}
                aria-current={isCurrent ? "step" : undefined}
              >
                {isComplete ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : index + 1}
              </span>
              <span
                className={cn(
                  "hidden text-sm sm:inline",
                  isCurrent ? "font-medium text-ink" : "text-ink/50"
                )}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={cn("h-px flex-1", isComplete ? "bg-celadon-600" : "bg-ink/10")} />
            )}
          </li>
        );
      })}
    </ol>
  );
}
