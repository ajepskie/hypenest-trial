import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { Reveal } from "../components/site/Reveal";
import { CTALink } from "../components/site/Button";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — HypeNest" },
      { name: "description", content: "A small, senior team of designers, engineers, and marketers building AI-first work for ambitious businesses." },
      { property: "og:title", content: "About — HypeNest" },
      { property: "og:description", content: "The studio behind AI-first brand, web, and growth work." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const values = [
    { t: "Craft first", d: "Every pixel, every workflow, considered. No template shortcuts." },
    { t: "Outcomes second", d: "We report against a metric, not a scope of deliverables." },
    { t: "AI, quietly", d: "Automation should feel invisible — never gimmicky, never in the way." },
    { t: "Direct by default", d: "Small team, no account managers. You talk to the people doing the work." },
  ];
  return (
    <PageShell
      eyebrow="About"
      title={<><span className="block">A studio for</span><span className="block text-ink-soft">the next decade.</span></>}
      intro="HypeNest is a small, senior team of designers, engineers, and marketers. We build AI-first brand, product, and growth work for founders who care about craft."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.2fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
              <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#000_0_1px,transparent_1px_5px)] opacity-30" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.2em]">
                <span>Team portrait</span><span>N°01</span>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
              We believe businesses shouldn't waste time on repetitive work.
              Our mission is to combine modern design with AI automation and
              marketing systems to help businesses grow faster.
            </h2>

            <div className="mt-14 grid gap-8 sm:grid-cols-2">
              {values.map((v) => (
                <div key={v.t} className="border-t border-hair pt-6">
                  <h3 className="font-display text-xl tracking-tight">{v.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{v.d}</p>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <CTALink to="/contact">Work with us</CTALink>
            </div>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}