import type { ReactNode } from "react";

export function Marquee({ children }: { children: ReactNode }) {
  return (
    <div className="no-scrollbar overflow-hidden">
      <div className="marquee-track flex w-max gap-16 whitespace-nowrap">
        <div className="flex items-center gap-16">{children}</div>
        <div className="flex items-center gap-16" aria-hidden>{children}</div>
      </div>
    </div>
  );
}