import Link from "next/link";

interface CTASectionProps {
  headline: string;
  subheadline?: string;
  cta_text: string;
  cta_href: string;
}

export function CTASection({ headline, subheadline, cta_text, cta_href }: CTASectionProps) {
  const isExternal = cta_href.startsWith("http");

  return (
    <section className="relative py-28 sm:py-36 px-6 lg:px-8 bg-gradient-to-br from-[#1B4332] via-[#2D6A4F] to-[#4A7C59] overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -top-10 -right-10 w-80 h-80 opacity-10" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="150" stroke="white" strokeWidth="0.5" />
          <circle cx="160" cy="160" r="110" stroke="white" strokeWidth="0.5" />
          <circle cx="160" cy="160" r="70" stroke="white" strokeWidth="0.5" />
        </svg>
        <svg className="absolute -bottom-10 -left-10 w-60 h-60 opacity-10" viewBox="0 0 240 240" fill="none">
          <path d="M120 10 Q180 60 150 120 Q120 180 60 150 Q0 120 60 60 Q90 30 120 10Z" fill="white" />
        </svg>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          {headline}
        </h2>
        {subheadline && (
          <p className="mt-6 text-lg text-white/80 max-w-xl mx-auto">{subheadline}</p>
        )}
        <div className="mt-10">
          {isExternal ? (
            <a
              href={cta_href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#1B4332] shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              {cta_text}
            </a>
          ) : (
            <Link
              href={cta_href}
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-[#1B4332] shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
            >
              {cta_text}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
