import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { Reveal } from "../components/site/Reveal";
import { CTALink } from "../components/site/Button";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — HypeNest" },
      { name: "description", content: "Transparent engagement models — sprints, retainers, and full builds. Priced by outcome, not headcount." },
      { property: "og:title", content: "Pricing — HypeNest" },
      { property: "og:description", content: "Sprint, retainer, and build engagements — priced against outcomes." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  {
    name: "Sprint",
    price: "from $6k",
    tag: "2-week engagement",
    items: ["Landing page or brand micro-build", "AI workflow prototype", "Positioning & messaging refresh", "Handover + Loom walkthrough"],
  },
  {
    name: "Studio Retainer",
    price: "from $9k / mo",
    tag: "Ongoing partnership",
    items: ["Design, dev & AI capacity", "Ads or SEO channel included", "Monthly outcome review", "Slack + weekly working call"],
    featured: true,
  },
  {
    name: "Full Build",
    price: "from $28k",
    tag: "6–10 week project",
    items: ["Brand + custom website", "AI automation systems", "CRM & analytics wired end-to-end", "Launch strategy & handover"],
  },
];

function PricingPage() {
  return (
    <PageShell
      eyebrow="Pricing"
      title={<><span className="block">Priced by</span><span className="block text-ink-soft">outcome.</span></>}
      intro="Three ways to work together. Every engagement is scoped to a business metric — no vanity milestones."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className={`hair-b flex h-full flex-col rounded-2xl p-8 md:p-10 ${t.featured ? "bg-ink text-paper border-ink" : ""}`}>
                <div className="flex items-start justify-between">
                  <div>
                    <p className={`text-xs uppercase tracking-[0.2em] ${t.featured ? "text-white/50" : "text-ink-soft"}`}>{t.tag}</p>
                    <h2 className="mt-3 font-display text-3xl tracking-tight md:text-4xl">{t.name}</h2>
                  </div>
                  {t.featured && <span className="rounded-full bg-white/10 px-3 py-1 text-xs">Popular</span>}
                </div>
                <p className="mt-8 font-display text-5xl tracking-tight md:text-6xl">{t.price}</p>
                <ul className="mt-8 flex-1 space-y-3 text-sm">
                  {t.items.map((i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={16} className="mt-1 shrink-0 stroke-[1.5]" />
                      <span>{i}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <CTALink to="/book-consultation" variant={t.featured ? "invert" : "outline"} className="w-full justify-between">Get started</CTALink>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-14 max-w-xl text-sm text-ink-soft">
            Need something bespoke? We also take on advisory work, product
            partnerships, and equity-friendly builds for early-stage teams.
          </p>
        </Reveal>
      </section>
    </PageShell>
  );
}