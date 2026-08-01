import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, Globe, MapPin, Clock, LifeBuoy, FileText, IdCard } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { PageHero } from "@/components/site/blocks";
import { Reveal } from "@/components/site/Reveal";
import { COMPANY } from "@/data/site";

const title = "Contact Tooggle Global — Talk to Our Software Team";
const description =
  "Contact Tooggle Global for Android app development, enterprise software, cloud platforms and AI solutions. Email, phone, business hours and enquiry form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  company: z.string().trim().max(120).optional(),
  message: z.string().trim().min(10, "Tell us a little more about your project").max(1000),
});

const details = [
  { icon: Mail, label: "Email", value: COMPANY.email, href: `mailto:${COMPANY.email}` },
  { icon: LifeBuoy, label: "Support", value: COMPANY.support, href: `mailto:${COMPANY.support}` },
  { icon: Phone, label: "Phone", value: COMPANY.phone, href: `tel:${COMPANY.phoneTel}` },
  { icon: Globe, label: "Website", value: COMPANY.website },
  { icon: MapPin, label: "Address", value: COMPANY.address },
  { icon: Clock, label: "Business Hours", value: COMPANY.hours },
  { icon: FileText, label: "GSTIN", value: COMPANY.gstin },
  { icon: IdCard, label: "PAN", value: COMPANY.pan },
];

function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const key = String(i.path[0]);
        if (!next[key]) next[key] = i.message;
      });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }
    setErrors({});
    form.reset();
    toast.success("Thank you — our team will contact you within one business day.");
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your project"
        description="Share a few details and a solution consultant will reach out with next steps, timelines and an indicative estimate."
      />

      <section className="px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="space-y-4">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div
                key={label}
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft card-hover"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {label}
                  </div>
                  {href ? (
                    <a href={href} className="text-sm font-medium break-words hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <div className="text-sm font-medium break-words">{value}</div>
                  )}
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={onSubmit}
              noValidate
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              <h2 className="text-2xl">Send us an enquiry</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                All fields marked with * are required.
              </p>

              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name *" error={errors["name"]}>
                  <Input id="name" name="name" placeholder="Your name" maxLength={100} />
                </Field>
                <Field id="email" label="Work email *" error={errors["email"]}>
                  <Input id="email" name="email" type="email" placeholder="you@company.com" maxLength={255} />
                </Field>
                <Field id="phone" label="Phone" error={errors["phone"]}>
                  <Input id="phone" name="phone" placeholder="+91 00000 00000" maxLength={20} />
                </Field>
                <Field id="company" label="Company" error={errors["company"]}>
                  <Input id="company" name="company" placeholder="Company name" maxLength={120} />
                </Field>
                <div className="sm:col-span-2">
                  <Field id="message" label="Project details *" error={errors["message"]}>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      maxLength={1000}
                      placeholder="Tell us about your product, timeline and goals."
                    />
                  </Field>
                </div>
              </div>

              <Button type="submit" size="lg" className="mt-7 w-full rounded-full text-base sm:w-auto sm:px-9">
                Book Free Consultation
              </Button>
            </form>
          </Reveal>
        </div>
      </section>

      <section className="px-5 pb-24 lg:px-8">
        <Reveal className="mx-auto max-w-7xl overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Tooggle Global office location map"
            src="https://www.google.com/maps?q=India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[380px] w-full border-0"
          />
        </Reveal>
      </section>
    </>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="text-sm font-medium">
        {label}
      </Label>
      <div className="mt-2">{children}</div>
      {error ? <p className="mt-1.5 text-xs text-destructive">{error}</p> : null}
    </div>
  );
}