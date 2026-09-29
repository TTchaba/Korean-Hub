import { clsx, type ClassValue } from "clsx";

/** Small classnames helper so components can compose conditional Tailwind classes. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
