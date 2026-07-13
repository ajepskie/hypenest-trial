import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 pt-24 pb-10 md:px-10">
        <div className="grid gap-16 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-paper" />
              <span className="font-display text-xl font-semibold">HypeNest</span>
            </div>
            <p className="mt-6 max-w-sm text-pretty text-white/60">
              We build AI-powered brands that grow. Design, automation, and
              marketing systems for ambitious businesses.
            </p>
            <Link
              to="/book-consultation"
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-2.5 text-sm transition-colors hover:bg-white hover:text-ink"
            >
              Start a project →
            </Link>
          </div>

          <FooterCol
            title="Studio"
            items={[
              { label: "Services", to: "/services" },
              { label: "Work", to: "/portfolio" },
              { label: "About", to: "/about" },
              { label: "Pricing", to: "/pricing" },
              { label: "Journal", to: "/blog" },
            ]}
          />
          <FooterCol
            title="Services"
            items={[
              { label: "AI solutions", to: "/services" },
              { label: "Web design", to: "/services" },
              { label: "Shopify", to: "/services" },
              { label: "WordPress", to: "/services" },
              { label: "Google Ads", to: "/services" },
              { label: "Social media", to: "/services" },
            ]}
          />
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">Contact</p>
            <ul className="mt-6 space-y-3 text-sm">
              <li><a href="mailto:hello@hypenest.co" className="hover:text-white/70">hello@hypenest.co</a></li>
              <li><a href="tel:+10000000000" className="hover:text-white/70">+1 (000) 000-0000</a></li>
              <li className="text-white/60">Remote — Global</li>
            </ul>
            <div className="mt-8 flex gap-3">
              {["IG", "IN", "X", "BE"].map((s) => (
                <a key={s} href="#" aria-label={s} className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-xs transition-colors hover:bg-white hover:text-ink">
                  {s}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24 select-none">
          <p className="font-display text-[18vw] leading-none tracking-tighter text-white/[0.06] md:text-[15vw]">HypeNest</p>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} HypeNest Studio. All rights reserved.</p>
          <p>Crafted with intent — no templates, no shortcuts.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { label: string; to: string }[] }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.2em] text-white/40">{title}</p>
      <ul className="mt-6 space-y-3 text-sm">
        {items.map((i) => (
          <li key={i.label}>
            <Link to={i.to} className="text-white/85 hover:text-white">{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}