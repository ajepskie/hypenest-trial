import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowUpRight, Sparkles, Layers, ShoppingBag, Wrench, Megaphone, LineChart, Instagram } from "lucide-react";
import { Nav } from "../components/site/Nav";
import { Footer } from "../components/site/Footer";
import { Section } from "../components/site/Section";
import { Marquee } from "../components/site/Marquee";
import { Reveal, Stagger, revealItem } from "../components/site/Reveal";
import { HeroShape } from "../components/site/HeroShape";
import { CTALink } from "../components/site/Button";
import { services, projects, processSteps, testimonials } from "../lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HypeNest — AI-first marketing agency" },
      { name: "description", content: "We design, automate, and market businesses with modern AI systems that generate leads, save time, and grow revenue." },
      { property: "og:title", content: "HypeNest — AI-first marketing agency" },
      { property: "og:description", content: "AI-first marketing that actually grows your business." },
    ],
  }),
  component: Home,
});

const serviceIcons = { ai: Sparkles, web: Layers, shopify: ShoppingBag, wordpress: Wrench, marketing: Megaphone, ads: LineChart, social: Instagram } as const;

function Home() {
  return (
    <div className="bg-paper text-ink">
      <Nav />
      <Hero />
      <TrustedBy />
      <Services />
      <WhyUs />
      <FeaturedWork />
      <Process />
      <AIAutomation />
      <Testimonials />
      <AboutTeaser />
      <FinalCTA />
      <Footer />
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section ref={ref} className="relative overflow-hidden pt-32 md:pt-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-16 px-6 pb-24 md:grid-cols-[1.35fr_1fr] md:gap-10 md:px-10 md:pb-32">
        <motion.div style={{ y, opacity }}>
          <div className="mb-10 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-ink-soft">
            <span className="h-px w-8 bg-ink" />
            <span>Studio · Est. 2018</span>
          </div>
          <h1 className="font-display text-[13vw] font-medium leading-[0.92] tracking-tighter text-balance md:text-[7.2vw]">
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              AI-first marketing
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="block text-ink-soft"
            >
              that actually grows
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="block"
            >
              your business.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-10 max-w-xl text-lg text-ink-soft text-pretty md:text-xl"
          >
            We design, automate, and market businesses using modern AI systems
            that generate leads, save time, and increase revenue.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <CTALink to="/contact">Start your project</CTALink>
            <CTALink to="/portfolio" variant="outline">View our work</CTALink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex items-center gap-8 text-xs uppercase tracking-[0.2em] text-ink-soft"
          >
            <div><span className="text-ink font-medium">50+</span> projects</div>
            <div className="h-3 w-px bg-hair" />
            <div><span className="text-ink font-medium">8 yrs</span> in market</div>
            <div className="h-3 w-px bg-hair" />
            <div><span className="text-ink font-medium">100%</span> custom</div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block"
        >
          <HeroShape />
        </motion.div>
      </div>

      <div className="border-y border-hair py-4">
        <Marquee>
          {["Design", "•", "AI Automation", "•", "Web Development", "•", "Shopify", "•", "WordPress", "•", "Google Ads", "•", "Social Media", "•", "SEO", "•", "Brand Strategy", "•"].map((t, i) => (
            <span key={i} className="font-display text-2xl tracking-tight text-ink-soft md:text-3xl">{t}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function TrustedBy() {
  const logos = ["MERIDIAN", "NORTHLINE", "VOYAGE&CO", "CLEARWELL", "FIELD NOTES", "HALO", "ATRIUM", "KINDRED"];
  return (
    <section className="border-b border-hair bg-paper py-14">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <p className="mb-10 text-center text-xs uppercase tracking-[0.25em] text-ink-soft">
          Trusted by teams building the next decade
        </p>
        <Marquee>
          {logos.map((l) => (
            <span key={l} className="font-display text-xl tracking-[0.15em] text-ink-soft/70 hover:text-ink md:text-2xl">{l}</span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

function Services() {
  return (
    <Section eyebrow="Services / 01">
      <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] md:gap-16">
        <div>
          <h2 className="font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl">
            A studio, not a stack of freelancers.
          </h2>
          <p className="mt-8 max-w-md text-ink-soft text-pretty">
            Seven disciplines, one team, one point of contact. Every engagement
            is scoped to move a real business metric — not a vanity one.
          </p>
        </div>

        <Stagger className="divide-y divide-hair border-y border-hair">
          {services.map((s) => {
            const Icon = serviceIcons[s.key];
            return (
              <motion.details
                key={s.key}
                variants={revealItem}
                className="group py-8"
              >
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6">
                  <div className="flex min-w-0 items-start gap-6">
                    <Icon className="mt-1 h-6 w-6 shrink-0 stroke-[1.5]" />
                    <div className="min-w-0">
                      <h3 className="font-display text-3xl tracking-tight md:text-4xl">{s.title}</h3>
                      <p className="mt-2 text-sm text-ink-soft">{s.tagline}</p>
                    </div>
                  </div>
                  <span className="mt-2 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-hair transition-all group-hover:bg-ink group-hover:text-paper group-open:rotate-45">
                    +
                  </span>
                </summary>
                <ul className="mt-6 grid gap-2 pl-12 text-ink-soft md:grid-cols-2">
                  {s.items.map((i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span className="h-1 w-1 rounded-full bg-ink" />
                      {i}
                    </li>
                  ))}
                </ul>
              </motion.details>
            );
          })}
        </Stagger>
      </div>
    </Section>
  );
}

function WhyUs() {
  const stats = [
    { n: "50+", l: "Projects shipped" },
    { n: "8+", l: "Years in market" },
    { n: "100%", l: "Custom design" },
    { n: "AI", l: "Automation first" },
  ];
  return (
    <Section eyebrow="Why us / 02" className="border-t border-hair">
      <div className="grid items-end gap-16 md:grid-cols-2">
        <Reveal>
          <h2 className="font-display text-6xl leading-[0.9] tracking-tight text-balance md:text-8xl">
            We work like operators, not vendors.
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="max-w-md text-lg text-ink-soft text-pretty">
            Every retainer starts with the same question: what number are we
            here to move? Everything else — brand, code, ads, automations —
            reports to that.
          </p>
        </Reveal>
      </div>

      <div className="mt-20 grid grid-cols-2 divide-x divide-y divide-hair border border-hair md:grid-cols-4 md:divide-y-0">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.08} className="p-8 md:p-12">
            <div className="font-display text-5xl tracking-tight md:text-7xl">{s.n}</div>
            <div className="mt-4 text-xs uppercase tracking-[0.2em] text-ink-soft">{s.l}</div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function FeaturedWork() {
  return (
    <Section eyebrow="Selected work / 03" className="border-t border-hair">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Recent<br />engagements.
        </h2>
        <CTALink to="/portfolio" variant="outline">All projects</CTALink>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <a href="#" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <ProjectArt seed={i} />
                <div className="absolute inset-0 flex items-end justify-between p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="rounded-full bg-paper px-4 py-2 text-xs font-medium text-ink">Case study</span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-ink text-paper">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
              </div>
              <div className="mt-5 flex items-start justify-between gap-6">
                <div>
                  <h3 className="font-display text-2xl tracking-tight md:text-3xl">{p.name}</h3>
                  <p className="mt-1 text-sm text-ink-soft">{p.industry}</p>
                </div>
                <p className="pt-2 text-right text-xs uppercase tracking-[0.18em] text-ink-soft">{p.services}</p>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function ProjectArt({ seed }: { seed: number }) {
  const patterns = [
    <div key="a" className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#000_1px,transparent_1.5px)] [background-size:14px_14px]" />,
    <div key="b" className="absolute inset-0 bg-[linear-gradient(45deg,#000_1px,transparent_1px)] [background-size:22px_22px] opacity-70" />,
    <div key="c" className="absolute inset-0 bg-[linear-gradient(#000_1px,transparent_1px),linear-gradient(90deg,#000_1px,transparent_1px)] [background-size:28px_28px] opacity-60" />,
    <div key="d" className="absolute inset-0 bg-ink" />,
    <div key="e" className="absolute inset-0 bg-[repeating-linear-gradient(-45deg,#000_0_1px,transparent_1px_10px)] opacity-70" />,
    <div key="f" className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,#000_2px,transparent_2.5px)] [background-size:20px_20px]" />,
  ];
  const dark = seed % 3 === 1;
  return (
    <div className={`absolute inset-0 ${dark ? "bg-ink" : "bg-[#f4f2ee]"}`}>
      <div className={`${dark ? "invert" : ""}`}>{patterns[seed % patterns.length]}</div>
      <motion.div
        className={`absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full ${dark ? "bg-paper" : "bg-ink"} mix-blend-difference`}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

function Process() {
  return (
    <Section eyebrow="Process / 04" className="border-t border-hair">
      <div className="mb-16 grid gap-10 md:grid-cols-[1fr_1fr]">
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Six steps.<br />Zero surprises.
        </h2>
        <p className="self-end text-lg text-ink-soft text-pretty">
          Every engagement runs on the same rails, so you always know where
          we are, what's next, and what it's costing.
        </p>
      </div>

      <Stagger className="divide-y divide-hair border-y border-hair">
        {processSteps.map((s) => (
          <motion.div
            key={s.n}
            variants={revealItem}
            className="group grid grid-cols-[80px_1fr] items-baseline gap-6 py-10 transition-colors hover:bg-ink hover:text-paper md:grid-cols-[120px_1fr_1.2fr] md:gap-10 md:py-14 md:px-6"
          >
            <div className="font-display text-2xl text-ink-soft group-hover:text-paper/60 md:text-3xl">{s.n}</div>
            <h3 className="font-display text-3xl tracking-tight md:text-5xl">{s.title}</h3>
            <p className="col-start-2 max-w-md text-ink-soft group-hover:text-paper/70 md:col-start-3">{s.desc}</p>
          </motion.div>
        ))}
      </Stagger>
    </Section>
  );
}

function AIAutomation() {
  const flows = [
    ["Lead", "AI Chatbot", "CRM", "Email", "Sales"],
    ["Instagram", "AI Analyzer", "Content", "Schedule"],
    ["Inquiry", "AI Triage", "Human Rep", "Closed Deal"],
  ];
  return (
    <Section eyebrow="AI automation / 05" dark className="border-t border-white/10">
      <div className="mb-16 grid gap-10 md:grid-cols-[1.2fr_1fr]">
        <h2 className="font-display text-5xl leading-[0.95] tracking-tight md:text-7xl">
          Systems that run<br />while you sleep.
        </h2>
        <p className="self-end text-lg text-white/60 text-pretty">
          We wire AI into the seams of your business — inbound, content,
          support, sales ops. It's not a chatbot on your site. It's the
          plumbing.
        </p>
      </div>

      <div className="space-y-6">
        {flows.map((flow, i) => (
          <Reveal key={i} delay={i * 0.1}>
            <div className="hair-b rounded-2xl border-white/10 p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 md:gap-5">
                {flow.map((node, idx) => (
                  <div key={node} className="flex items-center gap-3 md:gap-5">
                    <div className="rounded-full border border-white/20 bg-white/5 px-5 py-3 font-display text-sm tracking-tight md:text-base">
                      {node}
                    </div>
                    {idx < flow.length - 1 && (
                      <motion.div
                        className="relative h-px w-8 bg-white/25 md:w-16"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: idx * 0.15 }}
                        style={{ transformOrigin: "left" }}
                      >
                        <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Testimonials() {
  return (
    <Section eyebrow="Words / 06" dark className="border-t border-white/10">
      <div className="grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={i} delay={(i % 2) * 0.1}>
            <figure className="hair-b h-full rounded-2xl border-white/10 p-8 md:p-10">
              <blockquote className="font-display text-2xl leading-tight tracking-tight text-pretty md:text-3xl">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-10 flex items-center gap-4 text-sm">
                <span className="grid h-10 w-10 place-items-center rounded-full border border-white/20 text-xs">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <div>{t.name}</div>
                  <div className="text-white/50">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function AboutTeaser() {
  return (
    <Section eyebrow="About / 07">
      <div className="grid gap-16 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden bg-secondary">
            <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#000_0_1px,transparent_1px_6px)] opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs uppercase tracking-[0.2em] text-ink">
              <span>HypeNest Team</span>
              <span>2026</span>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-balance md:text-6xl">
            We believe businesses shouldn't waste time doing repetitive work.
            Our mission is to combine modern design with AI automation and
            marketing systems to help businesses grow faster.
          </h2>
          <div className="mt-10">
            <CTALink to="/about" variant="outline">More about us</CTALink>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function FinalCTA() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-[1400px] px-6 py-32 text-center md:px-10 md:py-48">
        <Reveal>
          <p className="mb-8 text-xs uppercase tracking-[0.25em] text-white/50">Say hi</p>
          <h2 className="font-display text-[13vw] leading-[0.9] tracking-tighter text-balance md:text-[9vw]">
            Let's build<br />something smart.
          </h2>
          <div className="mt-14 flex justify-center">
            <CTALink to="/book-consultation" variant="invert">Book free consultation</CTALink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}