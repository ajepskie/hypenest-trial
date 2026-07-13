import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/portfolio", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/pricing", label: "Pricing" },
  { to: "/blog", label: "Journal" },
  { to: "/contact", label: "Contact" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-paper/70 border-b border-hair" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
        <Link to="/" className="group flex items-center gap-2">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-ink transition-transform group-hover:scale-125" />
          <span className="font-display text-lg font-semibold tracking-tight">HypeNest</span>
          <span className="ml-1 hidden text-[10px] uppercase tracking-[0.2em] text-ink-soft sm:inline">/ studio</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-ink" }}
              inactiveProps={{ className: "text-ink-soft hover:text-ink" }}
              className="relative px-3 py-2 text-sm transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/book-consultation"
            className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-transform hover:scale-[1.02] md:inline-block"
          >
            Book a call
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full border border-hair md:hidden"
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-hair bg-paper md:hidden">
          <nav className="flex flex-col p-6">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-hair py-4 text-2xl font-display tracking-tight"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/book-consultation"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-full bg-ink px-6 py-4 text-center text-sm font-medium text-paper"
            >
              Book a call
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}