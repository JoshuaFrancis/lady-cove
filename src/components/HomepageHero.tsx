"use client";

import { DicedHeroSection } from "@/components/ui/diced-hero-section";

export function HomepageHero() {
  return (
    <section className="py-8 sm:py-12 px-4 lg:px-8">
      <DicedHeroSection
        topText="Family-Owned Florida Nursery"
        mainText="Rare Plants, Grown with Love"
        subMainText="We specialize in aroids, begonias, and hoyas, sold live on Palmstreet where you see every plant before you buy. Join our twice-daily livestreams and find your next obsession."
        buttonText="Watch Us Live"
        slides={[
          {
            title: "Monstera Deliciosa",
            image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=800&auto=format&fit=crop",
          },
          {
            title: "Anthurium",
            image: "https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=800&auto=format&fit=crop",
          },
          {
            title: "Philodendron",
            image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=800&auto=format&fit=crop",
          },
          {
            title: "Tropical Plants Collection",
            image: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop",
          },
        ]}
        onMainButtonClick={() => {
          window.open("https://palmstreet.app/shop/the-lady-cove", "_blank");
        }}
        topTextStyle={{
          color: "var(--diced-hero-section-top-text)",
          fontSize: "1rem",
        }}
        mainTextStyle={{
          fontSize: "4rem",
          gradient:
            "linear-gradient(135deg, var(--diced-hero-section-main-gradient-from), var(--diced-hero-section-main-gradient-to))",
        }}
        subMainTextStyle={{
          color: "var(--diced-hero-section-sub-text)",
          fontSize: "1.05rem",
        }}
        buttonStyle={{
          backgroundColor: "var(--diced-hero-section-button-bg)",
          color: "var(--diced-hero-section-button-fg)",
          borderRadius: "0.5rem",
          hoverColor: "var(--diced-hero-section-button-hover-bg)",
          hoverForeground: "var(--diced-hero-section-button-hover-fg)",
        }}
        separatorColor="var(--diced-hero-section-separator)"
        maxContentWidth="1280px"
        mobileBreakpoint={768}
        fontFamily="var(--font-inter), system-ui, sans-serif"
        componentBorderRadius="1rem"
      />
    </section>
  );
}
