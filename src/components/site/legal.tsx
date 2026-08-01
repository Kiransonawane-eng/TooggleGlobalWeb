import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function LegalBody({ updated, children }: { updated: string; children: ReactNode }) {
  return (
    <section className="px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">{updated}</p>
        <div className="mt-10 space-y-10">{children}</div>
      </div>
    </section>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-xl sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground [&_a]:text-primary [&_a:hover]:underline [&_li]:mt-2 [&_strong]:text-foreground [&_ul]:list-disc [&_ul]:pl-5">
        {children}
      </div>
    </Reveal>
  );
}