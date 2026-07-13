import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline" | "invert";

const styles: Record<Variant, string> = {
  primary: "bg-ink text-paper hover:opacity-90",
  ghost: "bg-transparent text-ink hover:bg-ink hover:text-paper",
  outline: "border border-ink text-ink hover:bg-ink hover:text-paper",
  invert: "bg-paper text-ink hover:opacity-90",
};

export function CTALink({
  to,
  children,
  variant = "primary",
  className = "",
}: {
  to: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link
      to={to}
      className={`group inline-flex items-center gap-3 rounded-full px-7 py-4 text-sm font-medium transition-all duration-300 ${styles[variant]} ${className}`}
    >
      <span>{children}</span>
      <span className="grid h-6 w-6 place-items-center rounded-full border border-current transition-transform group-hover:translate-x-1">→</span>
    </Link>
  );
}