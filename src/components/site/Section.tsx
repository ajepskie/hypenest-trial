import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  children,
  className = "",
  dark = false,
}: {
  id?: string;
  eyebrow?: string;
  children: ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${dark ? "bg-ink text-paper" : "bg-paper text-ink"} ${className}`}
    >
      <div className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        {eyebrow && (
          <div className="mb-14 flex items-center gap-3 text-xs uppercase tracking-[0.25em]">
            <span className={`h-px w-8 ${dark ? "bg-white/40" : "bg-ink"}`} />
            <span className={dark ? "text-white/60" : "text-ink-soft"}>{eyebrow}</span>
          </div>
        )}
        {children}
      </div>
    </section>
  );
}