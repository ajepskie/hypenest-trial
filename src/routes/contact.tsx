import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "../components/site/PageShell";
import { ContactForm } from "../components/site/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — HypeNest" },
      { name: "description", content: "Tell us about your project. We reply within one business day." },
      { property: "og:title", content: "Contact — HypeNest" },
      { property: "og:description", content: "Start a project with HypeNest." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact"
      title={<><span className="block">Tell us about</span><span className="block text-ink-soft">the project.</span></>}
      intro="We reply within one business day. If it's not a fit, we'll tell you — and usually point you somewhere that is."
    >
      <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-ink-soft">Direct</p>
            <ul className="mt-8 space-y-6">
              <li><a href="mailto:hello@hypenest.co" className="font-display text-2xl tracking-tight hover:underline md:text-3xl">hello@hypenest.co</a></li>
              <li><a href="tel:+10000000000" className="font-display text-2xl tracking-tight hover:underline md:text-3xl">+1 (000) 000-0000</a></li>
            </ul>
            <div className="mt-14 border-t border-hair pt-8 text-sm text-ink-soft">
              <p>Studio hours</p>
              <p className="mt-2">Mon — Fri · 9:00 → 18:00</p>
              <p className="mt-6">Remote first · NYC · London</p>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>
    </PageShell>
  );
}