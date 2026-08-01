import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ShieldCheck, Sparkles, Quote } from "lucide-react";
import heroImg from "@/assets/hero.jpg";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { Reveal } from "@/components/site/Reveal";
import { CtaBand, FeatureTick, SectionHeading, productIcons } from "@/components/site/blocks";
import { INDUSTRIES, PROCESS, PRODUCTS, STATS, TECH_STACK, TESTIMONIALS, WHY_US } from "@/data/site";

const title = "Tooggle Global — Enterprise Software, Android Apps & AI Solutions";
const description =
  "Tooggle Global develops Android applications, enterprise software, cloud platforms and AI-powered business solutions for retail, healthcare, restaurants and temples.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <img
          src={heroImg}
          alt="Global network of connected data nodes representing enterprise cloud technology"
          width={1536}
          height={1024}
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,oklch(0.24_0.055_262/0.96)_35%,oklch(0.24_0.055_262/0.55))]" />
        <div className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent/35 blur-3xl floaty" />
        <div className="pointer-events-none absolute right-10 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl floaty" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:py-32 lg:px-8">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full glass-dark px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Digital Transformation Partner
            </span>
            <h1 className="mt-6 text-4xl leading-[1.06] sm:text-5xl lg:text-6xl">
              Empowering Businesses Through{" "}
              <span className="text-gradient">Intelligent Digital Solutions</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
              Tooggle Global develops Android applications, enterprise software, cloud platforms and
              AI-powered business solutions that accelerate business growth.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accent px-7 text-base text-accent-foreground shadow-lift hover:bg-accent/90"
              >
                <Link to="/products">
                  Explore Products <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-white/25 bg-transparent px-7 text-base text-navy-foreground hover:bg-white/10 hover:text-navy-foreground"
              >
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
            <p className="mt-8 flex items-center gap-2 text-sm text-navy-foreground/60">
              <ShieldCheck className="h-4 w-4 text-success" /> Enterprise-grade security · Cloud-native ·
              24×7 support
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-border bg-surface px-5 py-14 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="font-display text-4xl font-bold text-navy sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <SectionHeading
            center={false}
            eyebrow="Who We Are"
            title="A software partner built for enterprise ambition"
            description="Tooggle Global is a software development company delivering scalable digital products for enterprises, startups and growing businesses. We combine innovation, AI, cloud computing and mobile technology to build reliable software solutions."
          />
          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {[
              { k: "Product Engineering", v: "Mobile, web and backend systems built to last." },
              { k: "Cloud & DevOps", v: "Automated pipelines on AWS and Google Cloud." },
              { k: "AI & Automation", v: "Assistants, forecasting and workflow intelligence." },
              { k: "Digital Transformation", v: "Legacy modernisation with measurable ROI." },
            ].map((c) => (
              <div key={c.k} className="rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                <h3 className="font-display text-base font-semibold">{c.k}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.v}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Our Products"
            title="Platforms shipping in production today"
            description="Industry-ready products you can deploy quickly and tailor to your operations."
          />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {PRODUCTS.map((p, i) => {
              const Icon = productIcons[p.icon]!;
              return (
                <Reveal key={p.slug} delay={i * 90}>
                  <article className="h-full rounded-3xl border border-border bg-card p-8 shadow-soft card-hover">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-lift">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 text-xl">{p.name}</h3>
                    <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                      {p.features.slice(0, 6).map((f) => (
                        <FeatureTick key={f}>{f}</FeatureTick>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              );
            })}
          </div>
          <Reveal className="mt-12 text-center">
            <Button asChild size="lg" variant="outline" className="rounded-full px-7">
              <Link to="/products">
                View all products <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Why Tooggle Global"
            title="Engineering standards enterprises rely on"
            description="Nine reasons teams choose us for mission-critical software."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                  <span className="font-display text-xs font-semibold tracking-widest text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Industries" title="Domain expertise across nine sectors" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((ind, i) => (
              <Reveal key={ind.name} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                  <h3 className="text-base font-semibold">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Technology Stack"
            title="Modern, proven, production-tested"
            description="We pick the right tools for reliability, performance and long-term maintainability."
          />
          <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {TECH_STACK.map((t, i) => (
              <Reveal key={t.name} delay={(i % 4) * 60}>
                <div className="flex h-full items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-soft card-hover">
                  <span className="font-display text-sm font-semibold">{t.name}</span>
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
                    {t.group}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-24 text-navy-foreground lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full glass-dark px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              Our Process
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl">Seven disciplined steps from idea to support</h2>
          </Reveal>
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl glass-dark p-6 transition-colors hover:bg-white/12">
                  <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-base font-semibold">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/70">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Testimonials" title="Trusted by growing businesses" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft card-hover">
                  <Quote className="h-8 w-8 text-primary/30" />
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                    "{t.quote}"
                  </blockquote>
                  <figcaption className="mt-6 border-t border-border pt-5">
                    <div className="font-display text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
