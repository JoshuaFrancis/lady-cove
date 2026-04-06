import Link from "next/link";

interface HeroSectionProps {
  headline: string;
  subheadline?: string;
  cta_text: string;
  cta_href: string;
  secondary_cta_text?: string;
  secondary_cta_href?: string;
  variant?: "default" | "accent" | "botanical";
}

export function HeroSection({
  headline,
  subheadline,
  cta_text,
  cta_href,
  secondary_cta_text,
  secondary_cta_href,
  variant = "default",
}: HeroSectionProps) {
  const isExternal = cta_href.startsWith("http");
  const isSecondaryExternal = secondary_cta_href?.startsWith("http");

  const bgClasses =
    variant === "botanical"
      ? "relative overflow-hidden bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#4A7C59]"
      : variant === "accent"
      ? "relative overflow-hidden bg-gradient-to-br from-muted via-background to-muted"
      : "relative overflow-hidden bg-gradient-to-b from-muted/60 to-background";

  const textClasses =
    variant === "botanical" ? "text-white" : "text-foreground";
  const subTextClasses =
    variant === "botanical" ? "text-white/80" : "text-muted-foreground";

  return (
    <section className={`${bgClasses} py-28 sm:py-36 px-6 lg:px-8`}>
      {/* Decorative elements */}
      {variant === "botanical" && (
        <>
          <div className="absolute inset-0 opacity-10">
            <svg className="absolute -top-20 -right-20 w-96 h-96" viewBox="0 0 400 400" fill="none">
              <circle cx="200" cy="200" r="180" stroke="white" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="140" stroke="white" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="100" stroke="white" strokeWidth="0.5" />
              <path d="M200 20 Q300 100 200 200 Q100 100 200 20Z" fill="white" fillOpacity="0.15" />
              <path d="M200 200 Q300 300 200 380 Q100 300 200 200Z" fill="white" fillOpacity="0.1" />
            </svg>
            <svg className="absolute -bottom-16 -left-16 w-72 h-72" viewBox="0 0 300 300" fill="none">
              <path d="M150 10 C200 50, 250 100, 200 150 C150 200, 100 150, 50 200 C0 250, 50 280, 150 290" stroke="white" strokeWidth="1" fill="none" />
              <path d="M30 150 Q80 80 150 100 Q220 120 270 60" stroke="white" strokeWidth="0.5" fill="none" />
            </svg>
          </div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.08)_0%,_transparent_60%)]" />
        </>
      )}
      {variant === "default" && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-[10%] w-64 h-64 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute bottom-10 left-[5%] w-48 h-48 rounded-full bg-primary/3 blur-2xl" />
        </div>
      )}

      <div className="relative mx-auto max-w-3xl text-center">
        <h1
          className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] ${textClasses}`}
        >
          {headline}
        </h1>
        {subheadline && (
          <p
            className={`mt-6 text-lg sm:text-xl leading-8 max-w-2xl mx-auto ${subTextClasses}`}
          >
            {subheadline}
          </p>
        )}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          {isExternal ? (
            <a
              href={cta_href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                variant === "botanical"
                  ? "bg-white text-[#1B4332] hover:bg-white/95"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {cta_text}
            </a>
          ) : (
            <Link
              href={cta_href}
              className={`inline-flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
                variant === "botanical"
                  ? "bg-white text-[#1B4332] hover:bg-white/95"
                  : "bg-primary text-primary-foreground hover:opacity-90"
              }`}
            >
              {cta_text}
            </Link>
          )}
          {secondary_cta_text && secondary_cta_href &&
            (isSecondaryExternal ? (
              <a
                href={secondary_cta_href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center justify-center rounded-lg border px-8 py-3.5 text-sm font-semibold transition-colors ${
                  variant === "botanical"
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {secondary_cta_text}
              </a>
            ) : (
              <Link
                href={secondary_cta_href}
                className={`inline-flex items-center justify-center rounded-lg border px-8 py-3.5 text-sm font-semibold transition-colors ${
                  variant === "botanical"
                    ? "border-white/30 text-white hover:bg-white/10"
                    : "border-border text-foreground hover:bg-muted"
                }`}
              >
                {secondary_cta_text}
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
