import { Link } from "@tanstack/react-router";
import { Linkedin, Facebook, Instagram, Youtube, Mail, Phone, Globe } from "lucide-react";
import { COMPANY } from "@/data/site";
import { BrandLogo } from "@/components/site/BrandLogo";

const quickLinks = [
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Careers", to: "/contact" },
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms & Conditions", to: "/terms" },
  { label: "Contact", to: "/contact" },
] as const;

const socials = [
  { label: "LinkedIn", icon: Linkedin },
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "YouTube", icon: Youtube },
];

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <div className="inline-flex items-center rounded-xl bg-white px-3 py-2 shadow-soft">
            <BrandLogo variant="footer" loading="lazy" />
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-navy-foreground/70">
            {COMPANY.tagline}. Android applications, enterprise software, cloud platforms and AI-powered
            business solutions engineered for scale.
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map(({ label, icon: Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full glass-dark text-navy-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                <Icon className="h-4.5 w-4.5" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="text-navy-foreground/80 transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest text-navy-foreground/60">Contact</h3>
          <ul className="mt-5 space-y-3 text-sm text-navy-foreground/80">
            <li className="flex items-start gap-2.5">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                <a href={`mailto:${COMPANY.email}`} className="hover:text-accent">{COMPANY.email}</a>
                <br />
                <a href={`mailto:${COMPANY.support}`} className="hover:text-accent">{COMPANY.support}</a>
              </span>
            </li>
            <li className="flex items-start gap-2.5">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href={`tel:${COMPANY.phoneTel}`} className="hover:text-accent">
                {COMPANY.phone}
              </a>
            </li>
            <li className="flex items-start gap-2.5">
              <Globe className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>{COMPANY.website}</span>
            </li>
            <li className="text-navy-foreground/60">{COMPANY.address}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-navy-foreground/60 lg:px-8">
          © {new Date().getFullYear()} {COMPANY.legal}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
