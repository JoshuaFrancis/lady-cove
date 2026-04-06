import type { Metadata } from "next";
import Link from "next/link";
import { careGuides } from "@/data/care-guides";
import { HeroSection, CTASection } from "@/components/sections";
import {
  Leaf, Heart, Flower2, TreePine, Mountain, Sun,
  ArrowUpRight, Droplets, Zap, Sparkle, MoveUp,
  GitBranch, CloudRain, Palette, Home, Wind, CircleDot,
  type LucideIcon,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Plant Care Guides",
  description:
    "Expert care guides for rare tropical houseplants. Detailed instructions for Alocasia, Anthurium, Begonia, Philodendron, Monstera, Hoya, and more from a certified Florida nursery.",
};

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf, heart: Heart, "flower-2": Flower2, "tree-pine": TreePine,
  mountain: Mountain, sun: Sun, "arrow-up-right": ArrowUpRight,
  droplets: Droplets, zap: Zap, sparkle: Sparkle, "move-up": MoveUp,
  "git-branch": GitBranch, "cloud-rain": CloudRain, palette: Palette,
  home: Home, wind: Wind, "circle-dot": CircleDot,
};

const gradients = [
  "from-emerald-500/15 to-emerald-500/5",
  "from-teal-500/15 to-teal-500/5",
  "from-green-600/15 to-green-600/5",
  "from-primary/15 to-primary/5",
  "from-cyan-600/15 to-cyan-600/5",
  "from-lime-500/15 to-lime-500/5",
];

export default function CareGuidesPage() {
  return (
    <>
      <HeroSection
        variant="botanical"
        headline="Plant Care Guides"
        subheadline="Detailed, grower-tested care instructions for every genus we specialize in. Written from years of hands-on experience in our Florida nursery."
        cta_text="Watch Us Live"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />

      <section className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Browse by Genus
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Select a plant family to read our complete care guide covering
              light, water, humidity, soil, fertilizer, pests, and more.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {careGuides.map((guide, index) => {
              const Icon = iconMap[guide.icon] || Leaf;
              const gradient = gradients[index % gradients.length];
              return (
                <Link
                  key={guide.slug}
                  href={`/care-guides/${guide.slug}`}
                  className="group rounded-2xl overflow-hidden border border-border bg-background transition-all hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Visual header */}
                  <div className={`h-28 bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon className="h-14 w-14 text-primary/30 group-hover:text-primary/50 transition-colors" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-16 h-16 rounded-full border border-primary/10" />
                    <div className="absolute -bottom-2 -left-2 w-10 h-10 rounded-full border border-primary/10" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {guide.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
                      {guide.description}
                    </p>
                    <span className="mt-4 inline-block text-sm font-medium text-primary">
                      Read care guide &rarr;
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want the Plant, Not Just the Guide?"
        subheadline="Join our Palmstreet livestreams to find rare specimens of every genus we cover here."
        cta_text="Watch Us Live"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
