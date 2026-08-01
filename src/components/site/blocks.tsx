import { Link } from "@tanstack/react-router";
import {
  Landmark,
  ShoppingCart,
  UtensilsCrossed,
  Cross,
  ArrowRight,
  Check,
  type LucideIcon,
} from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export const productIcons: Record<string, LucideIcon> = {
  temple: Landmark,
  cart: ShoppingCart,
  restaurant: UtensilsCrossed,
  medical: Cross,
};

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-navy">
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  center?: boolean;
  className?: string;
}) {
  return (
    <Reveal className={cn("max-w-3xl", center && "mx-auto text-center", className)}>
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2 className="mt-5 text-3xl leading-tight sm:text-4xl lg:text-[2.75rem]">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
      ) : null}
    </Reveal>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy text-navy-foreground">
      <div className="pointer-events-none absolute -left-24 top-0 h-72 w-72 rounded-full bg-accent/30 blur-3xl floaty" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-gold/20 blur-3xl floaty" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:py-24 lg:px-8">
        <Reveal className="max-w-3xl">
          <span className="inline-flex rounded-full glass-dark px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/75 sm:text-lg">
            {description}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function FeatureTick({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
      <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
      <span>{children}</span>
    </li>
  );
}

export function CtaBand() {
  return (
    <section className="px-5 py-20 lg:px-8">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-4xl bg-navy px-6 py-16 text-center text-navy-foreground sm:px-12">
        <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-accent/40 blur-3xl floaty" />
        <div className="pointer-events-none absolute -bottom-16 right-0 h-64 w-64 rounded-full bg-gold/25 blur-3xl floaty" />
        <div className="relative">
          <h2 className="text-3xl leading-tight sm:text-4xl">Ready to Build Your Next Digital Product?</h2>
          <p className="mx-auto mt-4 max-w-xl text-navy-foreground/75">Let's discuss your project today.</p>
          <Button
            asChild
            size="lg"
            className="mt-8 rounded-full bg-accent px-8 text-base text-accent-foreground shadow-lift hover:bg-accent/90"
          >
            <Link to="/contact">
              Book Free Consultation <ArrowRight className="ml-1.5 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Reveal>
    </section>
  );
}