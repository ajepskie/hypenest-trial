import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { Reveal } from "../components/site/Reveal";
import { projects } from "../lib/site-data";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Work — HypeNest" },
      { name: "description", content: "Selected projects across restaurants, travel, real estate, healthcare, e-commerce and startups." },
      { property: "og:title", content: "Work — HypeNest" },
      { property: "og:description", content: "Case studies from HypeNest — brand, web, AI, and growth work." },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <PageShell
      eyebrow="Selected work"
      title={<><span className="block">Work we're</span><span className="block text-ink-soft">proud to sign.</span></>}
      intro="A slice of recent engagements. Every project ships with measurable outcomes — not just deliverables."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 2) * 0.08}>
              <a href="#" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <div className={`absolute inset-0 ${i % 3 === 1 ? "bg-ink" : "bg-[#f4f2ee]"}`}>
                    <motion.div
                      className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full ${i % 3 === 1 ? "bg-paper" : "bg-ink"} mix-blend-difference`}
                      animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
                      transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    />
                  </div>
                  <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="rounded-full bg-paper px-4 py-2 text-xs font-medium text-ink">Case study</span>
                    <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-paper"><ArrowUpRight size={18} /></span>
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <h2 className="font-display text-2xl tracking-tight md:text-3xl">{p.name}</h2>
                    <p className="mt-1 text-sm text-ink-soft">{p.industry}</p>
                  </div>
                  <p className="pt-2 text-right text-xs uppercase tracking-[0.18em] text-ink-soft">{p.services}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}