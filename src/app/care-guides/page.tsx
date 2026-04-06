import type { Metadata } from "next";
import { careGuides } from "@/data/care-guides";
import { HeroSection, CTASection } from "@/components/sections";
import { DestinationCard } from "@/components/ui/card-21";

export const metadata: Metadata = {
  title: "Plant Care Guides",
  description:
    "Expert care guides for rare tropical houseplants. Detailed instructions for Alocasia, Anthurium, Begonia, Philodendron, Monstera, Hoya, and more from a certified Florida nursery.",
};

const guideImages: Record<string, string> = {
  alocasia: "https://images.unsplash.com/photo-1766139443607-ea1782ce245a?q=80&w=800&auto=format&fit=crop",
  anthurium: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=800&auto=format&fit=crop",
  begonia: "https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=800&auto=format&fit=crop",
  philodendron: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=800&auto=format&fit=crop",
  monstera: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
  hoya: "https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=800&auto=format&fit=crop",
  syngonium: "https://images.unsplash.com/photo-1543805926-214b3603a158?q=80&w=800&auto=format&fit=crop",
  calathea: "https://images.unsplash.com/photo-1597306200021-f8e16b12fb45?q=80&w=800&auto=format&fit=crop",
  pothos: "https://images.unsplash.com/photo-1534726955665-2cb2d145f2ad?q=80&w=800&auto=format&fit=crop",
  scindapsus: "https://images.unsplash.com/photo-1598983062491-5934ce558814?q=80&w=800&auto=format&fit=crop",
  rhaphidophora: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=800&auto=format&fit=crop",
  epipremnum: "https://images.unsplash.com/photo-1620803366004-119b57f54cd6?q=80&w=800&auto=format&fit=crop",
  colocasia: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?q=80&w=800&auto=format&fit=crop",
  caladium: "https://images.unsplash.com/photo-1517174780709-7ea39b5ce33e?q=80&w=800&auto=format&fit=crop",
  aglaonema: "https://images.unsplash.com/photo-1525847053749-2bc50678f5a0?q=80&w=800&auto=format&fit=crop",
  fern: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop",
  peperomia: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?q=80&w=800&auto=format&fit=crop",
};

const guideColors: Record<string, string> = {
  alocasia: "142 40% 22%",
  anthurium: "0 50% 35%",
  begonia: "330 40% 30%",
  philodendron: "150 45% 25%",
  monstera: "145 50% 28%",
  hoya: "30 40% 30%",
  syngonium: "160 35% 25%",
  calathea: "155 45% 22%",
  pothos: "130 50% 28%",
  scindapsus: "170 35% 25%",
  rhaphidophora: "140 40% 24%",
  epipremnum: "135 45% 26%",
  colocasia: "120 40% 22%",
  caladium: "350 45% 30%",
  aglaonema: "148 38% 24%",
  fern: "138 50% 20%",
  peperomia: "155 30% 28%",
};

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {careGuides.map((guide) => (
              <div key={guide.slug} className="h-[380px]">
                <DestinationCard
                  imageUrl={guideImages[guide.slug] || "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop"}
                  location={guide.name}
                  flag=""
                  stats={guide.description.slice(0, 60) + "..."}
                  href={`/care-guides/${guide.slug}`}
                  themeColor={guideColors[guide.slug] || "142 40% 25%"}
                />
              </div>
            ))}
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
