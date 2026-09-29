import type { Currency } from "@/types/lesson";

const SYMBOLS: Record<Currency, string> = {
  GEL: "₾",
  USD: "$",
  EUR: "€",
  GBP: "£",
};

/** Formats a price for display, e.g. formatPrice(120, "GEL") -> "₾120". */
export function formatPrice(price: number, currency: Currency): string {
  if (!price || price <= 0) {
    return "[PRICE]";
  }
  const symbol = SYMBOLS[currency];
  return `${symbol}${price.toLocaleString("en-US")}`;
}
