import type { Metadata } from "next";
import { HeroSection, ContentSection, StatsSection, CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Meet Andie and Matthew Haran, the family behind The Lady Cove. From a San Diego garden bungalow to a certified Florida nursery, here's how our plant journey began.",
};

export default function AboutPage() {
  return (
    <>
      <HeroSection
        variant="botanical"
        headline="Our Story"
        subheadline="From a garden bungalow in San Diego to a certified nursery in Florida, The Lady Cove started with one thing — a love for growing plants and sharing that passion with others."
        cta_text="Watch Us Live"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />

      <ContentSection
        variant="side-image"
        imagePosition="right"
        headline="How It Started"
        body={`Andie's plant obsession started in a small garden bungalow in San Diego, where every windowsill and shelf became home to another tropical specimen. What began as a hobby quickly turned into something more — propagating, trading, and eventually selling plants to a growing community of collectors.

Matthew, with a background in the Navy, brought structure, logistics, and an unfailing work ethic to the operation. Together, they made the leap — packing up their life into an RV and driving cross-country to settle in Florida, where the climate and growing conditions were perfect for building a real nursery.`}
      />

      <ContentSection
        variant="side-image"
        imagePosition="left"
        headline="What We Do Today"
        body={`The Lady Cove is a licensed, certified nursery registered with the Florida Department of Agriculture and a member of the Florida Nursery, Growers & Landscape Association (FNGLA). We specialize in rare aroids, begonias, and hoyas — the kinds of plants that make collectors' hearts race.

We sell primarily through twice-daily livestreams on Palmstreet, where you can see every plant up close before you buy. No stock photos. No surprises. Just real plants, shown on camera, packed with the care they deserve.`}
      />

      <StatsSection
        items={[
          { value: "5,966+", label: "Plants Shipped" },
          { value: "Star Seller", label: "Etsy Status" },
          { value: "88%", label: "Recommend Us" },
          { value: "FL Certified", label: "Nursery License" },
        ]}
      />

      <ContentSection
        headline="The Cooter Cult"
        body={`Our community has a name, and yes, it's exactly what you think. The Cooter Cult is what our regulars call themselves — a group of plant lovers who show up to livestreams, cheer each other on, share growing tips, and celebrate every new leaf unfurling.

It started as an inside joke and became something real. We're not just selling plants. We're building a community of people who genuinely care about growing things well.`}
      />

      <CTASection
        headline="Come Grow With Us"
        subheadline="Join a livestream, follow us on Instagram, or explore our care guides. We'd love to have you in the community."
        cta_text="Watch Us Live"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
