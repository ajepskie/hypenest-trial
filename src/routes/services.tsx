import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Layers, ShoppingBag, Wrench, Megaphone, LineChart, Instagram } from "lucide-react";
import { PageShell } from "../components/site/PageShell";
import { Reveal, Stagger, revealItem } from "../components/site/Reveal";
import { CTALink } from "../components/site/Button";
import { services } from "../lib/site-data";
import { motion } from "motion/react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — HypeNest" },
      { name: "description", content: "AI, web design, Shopify, WordPress, marketing, Google Ads and social media — one studio, seven disciplines." },
      { property: "og:title", content: "Services — HypeNest" },
      { property: "og:description", content: "Seven disciplines, one team. AI, design, and growth systems for modern businesses." },
    ],
  }),
  component: ServicesPage,
});

const icons = { ai: Sparkles, web: Layers, shopify: ShoppingBag, wordpress: Wrench, marketing: Megaphone, ads: LineChart, social: Instagram } as const;

function ServicesPage() {
  return (
    <PageShell
      eyebrow="Services"
      title={<><span className="block">What we do,</span><span className="block text-ink-soft">end to end.</span></>}
      intro="Seven disciplines under one roof — briefed together, shipped together, measured together."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <Stagger className="grid gap-6 md:grid-cols-2">
          {services.map((s) => {
            const Icon = icons[s.key];
            return (
              <motion.article key={s.key} variants={revealItem} className="hair-b group rounded-2xl p-8 transition-colors hover:bg-ink hover:text-paper md:p-10">
                <div className="flex items-start justify-between">
                  <Icon className="h-8 w-8 stroke-[1.4]" />
                  <span className="text-xs uppercase tracking-[0.2em] text-ink-soft group-hover:text-paper/60">0{services.indexOf(s) + 1}</span>
                </div>
                <h2 className="mt-10 font-display text-4xl tracking-tight md:text-5xl">{s.title}</h2>
                <p className="mt-3 text-ink-soft group-hover:text-paper/70">{s.tagline}</p>
                <ul className="mt-8 grid gap-2 text-sm">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-3 border-t border-current/10 py-3">
                      <span className="h-1 w-1 rounded-full bg-current" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </Stagger>

        <Reveal>
          <div className="mt-24 flex flex-col items-start justify-between gap-6 border-t border-hair pt-14 md:flex-row md:items-center">
            <p className="max-w-xl font-display text-3xl tracking-tight md:text-4xl">Not sure where to start? Book a 30-minute intro call.</p>
            <CTALink to="/book-consultation">Book a call</CTALink>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}