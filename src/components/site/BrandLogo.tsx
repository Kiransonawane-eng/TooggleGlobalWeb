import logo from "@/assets/logo.png";
import { COMPANY } from "@/data/site";
import { cn } from "@/lib/utils";

/** Intrinsic logo ratio from brand asset (321 × 95). */
export const LOGO_WIDTH = 321;
export const LOGO_HEIGHT = 95;

const sizes = {
  header: "h-10 w-[135px] sm:h-11 sm:w-[148px]",
  footer: "h-12 w-[162px] sm:h-14 sm:w-[189px]",
} as const;

type BrandLogoProps = {
  variant?: keyof typeof sizes;
  className?: string;
  loading?: "eager" | "lazy";
};

export function BrandLogo({ variant = "header", className, loading = "eager" }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt={`${COMPANY.name} — ${COMPANY.tagline}`}
      width={LOGO_WIDTH}
      height={LOGO_HEIGHT}
      loading={loading}
      decoding="async"
      className={cn("block object-contain object-left", sizes[variant], className)}
    />
  );
}
