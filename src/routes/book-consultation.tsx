import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { ContactForm } from "../components/site/ContactForm";

export const Route = createFileRoute("/book-consultation")({
  head: () => ({
    meta: [
      { title: "Book a consultation — HypeNest" },
      { name: "description", content: "Book a free 30-minute intro call. We'll audit your setup and share what we'd do first." },
      { property: "og:title", content: "Book a consultation — HypeNest" },
      { property: "og:description", content: "Free 30-minute intro call with the HypeNest team." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <PageShell
      eyebrow="Book a consultation"
      title={<><span className="block">Free, 30 minutes,</span><span className="block text-ink-soft">no pitch.</span></>}
      intro="Tell us a bit about the business. We'll come back with a written summary of what we'd do first — whether or not you hire us."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div className="border-t border-hair pt-8 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            {["Audit of your current site & funnel", "One AI automation we'd wire first", "A 90-day growth plan sketch", "Honest read on budget & scope"].map((line, i) => (
              <p key={i} className="mb-6 flex items-start gap-4 font-display text-lg tracking-tight md:text-xl">
                <span className="text-ink-soft">0{i + 1}</span> {line}
              </p>
            ))}
          </div>
          <ContactForm compact />
        </div>
      </section>
    </PageShell>
  );
}