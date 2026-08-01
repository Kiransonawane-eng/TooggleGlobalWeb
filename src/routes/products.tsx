import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CtaBand, FeatureTick, PageHero, productIcons } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { PRODUCTS } from "@/data/site";

const title = "Products — Retail, Restaurant, Pharmacy & Spiritual Platforms";
const description =
  "Explore Tooggle Global products: Spiritual App, Retail Management System, Restaurant Management Platform and Pharmacy Management System with cloud dashboards and GST billing.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  return (
    <>
      <PageHero
        eyebrow="Our Products"
        title="Software platforms ready for your industry"
        description="Each product is production-proven, cloud-hosted and configurable to the way your business already works."
      />

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl space-y-8">
          {PRODUCTS.map((p, i) => {
            const Icon = productIcons[p.icon]!;
            return (
              <Reveal key={p.slug} delay={i * 60}>
                <article className="grid gap-8 rounded-3xl border border-border bg-card p-8 shadow-soft card-hover lg:grid-cols-[1.1fr_1fr] lg:p-10">
                  <div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)] text-primary-foreground shadow-lift">
                      <Icon className="h-7 w-7" />
                    </div>
                    <h2 className="mt-6 text-2xl">{p.name}</h2>
                    <p className="mt-1 text-sm font-medium text-primary">{p.tagline}</p>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
                    <Button asChild className="mt-7 rounded-full px-6">
                      <Link to="/contact">
                        Request a demo <ArrowRight className="ml-1.5 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                  <div className="rounded-2xl bg-surface p-6">
                    <h3 className="font-display text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      Key capabilities
                    </h3>
                    <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                      {p.features.map((f) => (
                        <FeatureTick key={f}>{f}</FeatureTick>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBand />
    </>
  );
}