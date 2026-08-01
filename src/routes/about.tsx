import { createFileRoute } from "@tanstack/react-router";
import { Target, Lightbulb, Users, Rocket } from "lucide-react";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { PROCESS, STATS } from "@/data/site";

const title = "About Tooggle Global — Software Development Company";
const description =
  "Tooggle Global is a software development company delivering scalable Android apps, enterprise software and cloud platforms for enterprises, startups and growing businesses.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  { icon: Target, title: "Outcome First", desc: "Every release is measured against a business metric, not a ticket count." },
  { icon: Lightbulb, title: "Innovation", desc: "AI, cloud and mobile advances applied pragmatically to real operations." },
  { icon: Users, title: "Partnership", desc: "Embedded teams that work as an extension of your organisation." },
  { icon: Rocket, title: "Velocity", desc: "Short cycles, transparent roadmaps and dependable delivery dates." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Who We Are"
        description="Tooggle Global is a software development company delivering scalable digital products for enterprises, startups and growing businesses."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <SectionHeading
            center={false}
            eyebrow="Our Mission"
            title="Helping businesses become smarter through software"
            description="We combine innovation, AI, cloud computing and mobile technology to build reliable software solutions. From the first discovery workshop to long-term support, our engineers design systems that stay dependable as your business scales."
          />
          <Reveal delay={120} className="grid gap-4 sm:grid-cols-2">
            {values.map(({ icon: Icon, title: t, desc }) => (
              <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                <Icon className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold">{t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-surface px-5 py-16 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <div className="font-display text-4xl font-bold text-primary sm:text-5xl">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <p className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <SectionHeading eyebrow="How We Work" title="Our delivery process" />
          <ol className="mt-14 space-y-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={i * 60} as="li">
                <div className="flex gap-5 rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[image:var(--gradient-primary)] font-display text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <div className="min-w-0">
                    <h3 className="font-display text-base font-semibold">{p.step}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}