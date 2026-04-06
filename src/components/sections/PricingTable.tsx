import Link from "next/link";
import { Check, Star } from "lucide-react";

interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description?: string;
  cta_text: string;
  cta_href: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingTableProps {
  headline: string;
  subheadline?: string;
  tiers: PricingTier[];
}

export function PricingTable({ headline, subheadline, tiers }: PricingTableProps) {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((tier) => {
            const isExternal = tier.cta_href.startsWith("http");
            return (
              <div
                key={tier.name}
                className={`relative rounded-2xl p-8 flex flex-col transition-all ${
                  tier.highlighted
                    ? "bg-gradient-to-b from-[#1B4332] to-[#2D6A4F] text-white shadow-2xl scale-[1.03] ring-4 ring-primary/20"
                    : "bg-background border border-border shadow-sm hover:shadow-md"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-full bg-white px-4 py-1.5 text-xs font-semibold text-[#1B4332] shadow-lg">
                    <Star className="h-3 w-3 fill-current" />
                    Most Popular
                  </div>
                )}
                <h3 className={`text-lg font-semibold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                  {tier.name}
                </h3>
                {tier.description && (
                  <p className={`mt-2 text-sm ${tier.highlighted ? "text-white/70" : "text-muted-foreground"}`}>
                    {tier.description}
                  </p>
                )}
                <div className="mt-6 mb-8">
                  <span className={`text-4xl font-bold ${tier.highlighted ? "text-white" : "text-foreground"}`}>
                    {tier.price}
                  </span>
                  {tier.period && (
                    <span className={`text-sm ml-1 ${tier.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                      {tier.period}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 flex-1">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className={`h-4 w-4 mt-0.5 shrink-0 ${tier.highlighted ? "text-white/80" : "text-primary"}`} />
                      <span className={`text-sm ${tier.highlighted ? "text-white/80" : "text-muted-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {isExternal ? (
                    <a
                      href={tier.cta_href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full text-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                        tier.highlighted
                          ? "bg-white text-[#1B4332] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {tier.cta_text}
                    </a>
                  ) : (
                    <Link
                      href={tier.cta_href}
                      className={`block w-full text-center rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                        tier.highlighted
                          ? "bg-white text-[#1B4332] shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                          : "bg-primary text-primary-foreground hover:opacity-90"
                      }`}
                    >
                      {tier.cta_text}
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
