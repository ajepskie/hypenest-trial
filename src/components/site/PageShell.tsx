import type { ReactNode } from "react";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <section className="border-b border-hair pt-40 pb-20 md:pt-48 md:pb-28">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10">
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft">
            <span className="h-px w-8 bg-ink" />
            <span>{eyebrow}</span>
          </div>
          <h1 className="font-display text-6xl leading-[0.92] tracking-tighter text-balance md:text-[8vw]">
            {title}
          </h1>
          {intro && <p className="mt-10 max-w-2xl text-lg text-ink-soft text-pretty md:text-xl">{intro}</p>}
        </div>
      </section>
      {children}
      <Footer />
    </div>
  );
}