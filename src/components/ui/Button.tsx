import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const VARIANT_CLASSES: Record<Variant, string> = {
  primary: "bg-ink text-porcelain hover:bg-celadon-700",
  secondary: "border border-ink/20 text-ink hover:border-ink/40 hover:bg-ink/5",
  ghost: "text-ink hover:text-celadon-700",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded px-6 py-3 text-sm font-medium transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-50";

interface CommonProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

interface LinkButtonProps extends CommonProps {
  href: string;
}

interface ActionButtonProps
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | ActionButtonProps;

export function Button(props: ButtonProps) {
  const { variant = "primary", className, children } = props;
  const classes = cn(baseClasses, VARIANT_CLASSES[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = { ...(props as ActionButtonProps) };
  delete (buttonProps as Record<string, unknown>).variant;
  delete (buttonProps as Record<string, unknown>).href;
  return (
    <button {...buttonProps} className={classes}>
      {children}
    </button>
  );
}
