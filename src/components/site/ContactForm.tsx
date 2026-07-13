import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

const services = [
  "AI Solutions",
  "Web Design",
  "Shopify",
  "WordPress",
  "Marketing",
  "Google Ads",
  "Social Media",
];

const budgets = ["< $5k", "$5k — $15k", "$15k — $40k", "$40k — $100k", "$100k+"];

export function ContactForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");

  const toggle = (s: string) =>
    setPicked((cur) => (cur.includes(s) ? cur.filter((x) => x !== s) : [...cur, s]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="thanks"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="hair-b rounded-2xl p-10"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-ink-soft">Received</p>
            <h3 className="mt-4 font-display text-4xl tracking-tight md:text-5xl">Thanks — we'll be in touch.</h3>
            <p className="mt-4 text-ink-soft">We reply within one business day, usually sooner.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={onSubmit}
            className="space-y-10"
          >
            <div className={compact ? "grid gap-8" : "grid gap-8 sm:grid-cols-2"}>
              <Field label="Name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <div>
                <Label>Budget</Label>
                <div className="mt-4 flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setBudget(b)}
                      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                        budget === b ? "border-ink bg-ink text-paper" : "border-hair text-ink-soft hover:border-ink hover:text-ink"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <Label>Services needed</Label>
              <div className="mt-4 flex flex-wrap gap-2">
                {services.map((s) => (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(s)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      picked.includes(s) ? "border-ink bg-ink text-paper" : "border-hair text-ink-soft hover:border-ink hover:text-ink"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <Label>Message</Label>
              <textarea
                name="message"
                rows={5}
                required
                placeholder="Tell us about the business, the goal, and any deadlines."
                className="mt-3 block w-full resize-none border-0 border-b border-hair bg-transparent py-3 text-base outline-none placeholder:text-ink-soft/70 focus:border-ink"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-medium text-paper transition-transform hover:scale-[1.02]"
            >
              Start my project
              <span className="grid h-6 w-6 place-items-center rounded-full border border-paper transition-transform group-hover:translate-x-1">→</span>
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">{children}</span>;
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <label className="block">
      <Label>{label}{required && " *"}</Label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-3 block w-full border-0 border-b border-hair bg-transparent py-3 text-base outline-none focus:border-ink"
      />
    </label>
  );
}