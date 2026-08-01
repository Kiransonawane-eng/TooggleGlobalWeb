import { createFileRoute } from "@tanstack/react-router";
import { CtaBand, PageHero, SectionHeading } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { PROCESS, TECH_STACK } from "@/data/site";

const title = "Technology Stack — Flutter, Android, Cloud, AI | Tooggle Global";
const description =
  "Our engineering stack: Flutter, Android, Java, Spring Boot, React, Angular, Node.js, Firebase, AWS, Google Cloud, Docker, Kubernetes, MySQL, PostgreSQL, MongoDB and OpenAI.";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/technology" },
    ],
    links: [{ rel: "canonical", href: "/technology" }],
  }),
  component: Technology,
});

const groups = ["Mobile", "Frontend", "Backend", "Cloud", "DevOps", "Data", "AI"];

function Technology() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="A modern stack, chosen deliberately"
        description="We standardise on proven frameworks and cloud services so your platform stays fast, secure and maintainable for years."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-12">
          {groups.map((g, gi) => {
            const items = TECH_STACK.filter((t) => t.group === g);
            if (!items.length) return null;
            return (
              <Reveal key={g} delay={gi * 60}>
                <div className="grid gap-6 lg:grid-cols-[220px_1fr]">
                  <h2 className="font-display text-xl font-semibold text-primary">{g}</h2>
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {items.map((t) => (
                      <div
                        key={t.name}
                        className="rounded-2xl border border-border bg-card px-5 py-4 text-sm font-semibold shadow-soft card-hover"
                      >
                        {t.name}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="bg-surface px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Process" title="How we take technology to production" />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((p, i) => (
              <Reveal key={p.step} delay={(i % 4) * 80}>
                <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-soft card-hover">
                  <span className="font-display text-sm font-bold text-accent">0{i + 1}</span>
                  <h3 className="mt-3 text-base font-semibold">{p.step}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
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