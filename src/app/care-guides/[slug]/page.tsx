import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCareGuide, getAllCareGuideSlugs, careGuides } from "@/data/care-guides";
import { CTASection } from "@/components/sections";
import { DestinationCard } from "@/components/ui/card-21";
import {
  Sun, Droplets, Wind, ThermometerSun, Layers, Beaker,
  ArrowUpFromDot, Scissors, GitBranch, Bug, AlertTriangle, HelpCircle,
  ChevronLeft,
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

const careItems = [
  { key: "light", label: "Light Requirements", icon: Sun, color: "from-amber-500/15 to-amber-500/5" },
  { key: "water", label: "Watering", icon: Droplets, color: "from-blue-500/15 to-blue-500/5" },
  { key: "humidity", label: "Humidity", icon: Wind, color: "from-cyan-500/15 to-cyan-500/5" },
  { key: "temperature", label: "Temperature", icon: ThermometerSun, color: "from-red-400/15 to-red-400/5" },
  { key: "soil", label: "Soil Mix", icon: Layers, color: "from-amber-700/15 to-amber-700/5" },
  { key: "fertilizer", label: "Fertilizer", icon: Beaker, color: "from-emerald-500/15 to-emerald-500/5" },
  { key: "repotting", label: "Repotting", icon: ArrowUpFromDot, color: "from-primary/15 to-primary/5" },
  { key: "pruning", label: "Pruning", icon: Scissors, color: "from-gray-500/15 to-gray-500/5" },
  { key: "propagation", label: "Propagation", icon: GitBranch, color: "from-green-500/15 to-green-500/5" },
  { key: "pests", label: "Common Pests", icon: Bug, color: "from-orange-500/15 to-orange-500/5" },
  { key: "toxicity", label: "Toxicity", icon: AlertTriangle, color: "from-red-500/15 to-red-500/5" },
  { key: "commonProblems", label: "Troubleshooting", icon: HelpCircle, color: "from-violet-500/15 to-violet-500/5" },
] as const;

const guideImages: Record<string, string> = {
  alocasia: "https://images.unsplash.com/photo-1766139443607-ea1782ce245a?q=80&w=1200&auto=format&fit=crop",
  anthurium: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=1200&auto=format&fit=crop",
  begonia: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=1200&auto=format&fit=crop",
  philodendron: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=1200&auto=format&fit=crop",
  monstera: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=1200&auto=format&fit=crop",
  hoya: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=1200&auto=format&fit=crop",
  syngonium: "https://images.unsplash.com/photo-1543805926-214b3603a158?q=80&w=1200&auto=format&fit=crop",
  calathea: "https://images.unsplash.com/photo-1597306200021-f8e16b12fb45?q=80&w=1200&auto=format&fit=crop",
  pothos: "https://images.unsplash.com/photo-1534726955665-2cb2d145f2ad?q=80&w=1200&auto=format&fit=crop",
  scindapsus: "https://images.unsplash.com/photo-1598983062491-5934ce558814?q=80&w=1200&auto=format&fit=crop",
  rhaphidophora: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=1200&auto=format&fit=crop",
  epipremnum: "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?q=80&w=1200&auto=format&fit=crop",
  colocasia: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=1200&auto=format&fit=crop",
  caladium: "https://images.unsplash.com/photo-1517174780709-7ea39b5ce33e?q=80&w=1200&auto=format&fit=crop",
  aglaonema: "https://images.unsplash.com/photo-1525847053749-2bc50678f5a0?q=80&w=1200&auto=format&fit=crop",
  fern: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1200&auto=format&fit=crop",
  peperomia: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=1200&auto=format&fit=crop",
};

const guideColors: Record<string, string> = {
  alocasia: "142 40% 22%", anthurium: "0 50% 35%", begonia: "330 40% 30%",
  philodendron: "150 45% 25%", monstera: "145 50% 28%", hoya: "30 40% 30%",
  syngonium: "160 35% 25%", calathea: "155 45% 22%", pothos: "130 50% 28%",
  scindapsus: "170 35% 25%", rhaphidophora: "140 40% 24%", epipremnum: "135 45% 26%",
  colocasia: "120 40% 22%", caladium: "350 45% 30%", aglaonema: "148 38% 24%",
  fern: "138 50% 20%", peperomia: "155 30% 28%",
};

export default async function CareGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getCareGuide(slug);
  if (!guide) notFound();

  const heroImage = guideImages[slug] || "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1200&auto=format&fit=crop";

  const relatedGuides = careGuides
    .filter((g) => g.slug !== slug)
    .slice(0, 4);

  // Split care items into two columns for the grid
  const essentials = careItems.slice(0, 6); // Light, Water, Humidity, Temp, Soil, Fertilizer
  const advanced = careItems.slice(6); // Repotting, Pruning, Propagation, Pests, Toxicity, Problems

  return (
    <>
      {/* Hero with full-width image */}
      <section className="relative h-[50vh] min-h-[400px] max-h-[500px] overflow-hidden">
        <img
          src={heroImage}
          alt={`${guide.name} plant`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1B4332] via-[#1B4332]/60 to-transparent" />
        <div className="relative h-full flex flex-col justify-end px-6 lg:px-8 pb-12">
          <div className="mx-auto max-w-7xl w-full">
            <Link
              href="/care-guides"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-4"
            >
              <ChevronLeft className="h-4 w-4" />
              All Care Guides
            </Link>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              {guide.name} Care Guide
            </h1>
            <p className="mt-3 text-lg text-white/80 max-w-2xl">
              {guide.description}
            </p>
          </div>
        </div>
      </section>

      {/* Quick reference bar */}
      <section className="bg-[#1B4332] text-white py-6 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="text-center">
              <Sun className="h-5 w-5 mx-auto mb-1 text-amber-300" />
              <p className="text-xs text-white/60 uppercase tracking-wider">Light</p>
              <p className="text-sm font-medium mt-0.5">
                {guide.light.includes("Bright indirect") ? "Bright Indirect" :
                 guide.light.includes("Low to medium") ? "Low to Medium" :
                 guide.light.includes("Full sun") ? "Full Sun" : "Medium Light"}
              </p>
            </div>
            <div className="text-center">
              <Droplets className="h-5 w-5 mx-auto mb-1 text-blue-300" />
              <p className="text-xs text-white/60 uppercase tracking-wider">Water</p>
              <p className="text-sm font-medium mt-0.5">
                {guide.water.includes("consistently moist") ? "Keep Moist" :
                 guide.water.includes("dry almost completely") ? "Let Dry" :
                 guide.water.includes("top 1-2 inches") ? "Top Inch Dry" : "Moderate"}
              </p>
            </div>
            <div className="text-center">
              <Wind className="h-5 w-5 mx-auto mb-1 text-cyan-300" />
              <p className="text-xs text-white/60 uppercase tracking-wider">Humidity</p>
              <p className="text-sm font-medium mt-0.5">
                {guide.humidity.includes("60%+") ? "High (60%+)" :
                 guide.humidity.includes("Average") ? "Average" :
                 guide.humidity.includes("50-60%") ? "Medium (50-60%)" : "Moderate"}
              </p>
            </div>
            <div className="text-center">
              <AlertTriangle className="h-5 w-5 mx-auto mb-1 text-red-300" />
              <p className="text-xs text-white/60 uppercase tracking-wider">Toxicity</p>
              <p className="text-sm font-medium mt-0.5">
                {guide.toxicity.includes("Non-toxic") ? "Pet Safe" : "Toxic to Pets"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Essential Care */}
      <section className="py-20 sm:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
            Essential Care
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {essentials.map(({ key, label, icon: Icon, color }) => (
              <div
                key={key}
                className="rounded-2xl border border-border bg-background p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${color} p-3`}>
                    <Icon className="h-6 w-6 text-foreground/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {label}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {guide[key]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Care */}
      <section className="py-20 sm:py-24 px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12">
            Advanced Care & Troubleshooting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advanced.map(({ key, label, icon: Icon, color }) => (
              <div
                key={key}
                className="rounded-2xl border border-border bg-background p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${color} p-3`}>
                    <Icon className="h-6 w-6 text-foreground/70" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {label}
                    </h3>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {guide[key]}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related guides using DestinationCards */}
      <section className="py-20 sm:py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
            More Care Guides
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedGuides.map((g) => (
              <div key={g.slug} className="h-[320px]">
                <DestinationCard
                  imageUrl={guideImages[g.slug] || "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop"}
                  location={g.name}
                  flag=""
                  stats={g.description.slice(0, 50) + "..."}
                  href={`/care-guides/${g.slug}`}
                  themeColor={guideColors[g.slug] || "142 40% 25%"}
                />
              </div>
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
