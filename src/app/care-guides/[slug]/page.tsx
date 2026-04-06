import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCareGuide, getAllCareGuideSlugs, careGuides } from "@/data/care-guides";
import { CTASection } from "@/components/sections";
import {
  Sun, Droplets, Wind, ThermometerSun, Layers, Beaker,
  ArrowUpFromDot, Scissors, GitBranch, Bug, AlertTriangle, HelpCircle,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllCareGuideSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getCareGuide(slug);
  if (!guide) return {};
  return {
    title: `${guide.name} Care Guide`,
    description: `Complete ${guide.name} care guide from The Lady Cove. Expert advice on light, water, humidity, soil, fertilizer, propagation, pests, and common problems.`,
  };
}

const careIcons = [
  { key: "light", label: "Light", icon: Sun },
  { key: "water", label: "Water", icon: Droplets },
  { key: "humidity", label: "Humidity", icon: Wind },
  { key: "temperature", label: "Temperature", icon: ThermometerSun },
  { key: "soil", label: "Soil", icon: Layers },
  { key: "fertilizer", label: "Fertilizer", icon: Beaker },
  { key: "repotting", label: "Repotting", icon: ArrowUpFromDot },
  { key: "pruning", label: "Pruning", icon: Scissors },
  { key: "propagation", label: "Propagation", icon: GitBranch },
  { key: "pests", label: "Pests", icon: Bug },
  { key: "toxicity", label: "Toxicity", icon: AlertTriangle },
  { key: "commonProblems", label: "Common Problems", icon: HelpCircle },
] as const;

export default async function CareGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getCareGuide(slug);
  if (!guide) notFound();

  const relatedGuides = careGuides
    .filter((g) => g.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <section className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <nav className="mb-8">
            <Link
              href="/care-guides"
              className="text-sm text-primary hover:underline"
            >
              &larr; All Care Guides
            </Link>
          </nav>

          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
            {guide.name} Care Guide
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            {guide.description}
          </p>

          <div className="mt-16 space-y-12">
            {careIcons.map(({ key, label, icon: Icon }) => (
              <div key={key} className="flex gap-4">
                <div className="shrink-0 mt-1">
                  <div className="inline-flex items-center justify-center rounded-lg bg-primary/10 p-2">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {label}
                  </h2>
                  <p className="mt-2 text-base leading-7 text-muted-foreground">
                    {guide[key]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides */}
      <section className="py-16 px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            More Care Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedGuides.map((g) => (
              <Link
                key={g.slug}
                href={`/care-guides/${g.slug}`}
                className="group rounded-xl border border-border bg-background p-6 transition-all hover:shadow-md hover:border-primary/30"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {g.name}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                  {g.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline={`Looking for ${guide.name} Plants?`}
        subheadline={`Join our Palmstreet livestreams to find rare ${guide.name} specimens. We go live twice daily.`}
        cta_text="Watch Us Live"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
