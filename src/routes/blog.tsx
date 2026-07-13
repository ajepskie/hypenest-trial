import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { Reveal } from "../components/site/Reveal";
import { ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Journal — HypeNest" },
      { name: "description", content: "Notes on AI systems, brand craft, and building modern businesses." },
      { property: "og:title", content: "Journal — HypeNest" },
      { property: "og:description", content: "Notes from the studio — AI, design, and growth." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { title: "The quiet AI stack every service business should run", date: "Jun 2026", read: "6 min", cat: "AI" },
  { title: "Why we design in black and white first", date: "May 2026", read: "4 min", cat: "Design" },
  { title: "Anatomy of a Shopify page that converts at 6%", date: "Apr 2026", read: "8 min", cat: "CRO" },
  { title: "The retainer that pays for itself in month one", date: "Mar 2026", read: "5 min", cat: "Studio" },
  { title: "Google Ads for founders who hate Google Ads", date: "Feb 2026", read: "7 min", cat: "Ads" },
  { title: "How we brief AI like it's a junior designer", date: "Jan 2026", read: "6 min", cat: "AI" },
];

function BlogPage() {
  return (
    <PageShell
      eyebrow="Journal"
      title={<><span className="block">Notes from</span><span className="block text-ink-soft">the studio.</span></>}
      intro="Long-form pieces on AI, brand craft, and building modern businesses that compound."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="divide-y divide-hair border-y border-hair">
          {posts.map((p, i) => (
            <Reveal key={p.title} delay={(i % 3) * 0.05}>
              <a href="#" className="group grid grid-cols-[1fr_auto] items-baseline gap-6 py-10 transition-colors hover:bg-ink hover:text-paper md:grid-cols-[100px_1fr_120px_auto] md:gap-10 md:px-6">
                <span className="hidden text-xs uppercase tracking-[0.2em] text-ink-soft group-hover:text-paper/60 md:block">{p.cat}</span>
                <h2 className="font-display text-2xl tracking-tight md:text-4xl">{p.title}</h2>
                <span className="hidden text-xs uppercase tracking-[0.2em] text-ink-soft group-hover:text-paper/60 md:block">{p.date} · {p.read}</span>
                <ArrowUpRight className="mt-1 h-5 w-5 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}