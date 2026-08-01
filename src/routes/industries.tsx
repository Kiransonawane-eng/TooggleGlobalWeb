import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { INDUSTRIES, WHY_US } from "@/data/site";

const title = "Industries We Serve — Retail, Healthcare, Restaurants & More";
const description =
  "Tooggle Global builds software for retail, healthcare, restaurants, temples, education, manufacturing, finance, logistics and hospitality businesses.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/industries" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: Industries,
});

function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Software shaped by domain knowledge"
        description="We have delivered platforms across nine sectors, each with its own compliance, workflow and scale demands."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {INDUSTRIES.map((ind, i) => (
            <Reveal key={ind.name} delay={(i % 3) * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                <h2 className="font-display text-lg font-semibold">{ind.name}</h2>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{ind.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-surface px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Why Choose Us" title="What every engagement includes" />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_US.map((w, i) => (
              <Reveal key={w.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-7 shadow-soft card-hover">
                  <h3 className="text-base font-semibold">{w.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{w.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}