import type { Metadata } from "next";
import { HeroSection, ContentSection, FeatureGrid, CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Livestream Schedule",
  description:
    "Catch The Lady Cove live on Palmstreet. We stream twice daily with rare aroids, begonias, hoyas, and more.",
};

export default function LivestreamsPage() {
  return (
    <>
      <HeroSection
        headline="Catch Us Live"
        subheadline="We go live twice daily on Palmstreet with fresh inventory, rare finds, and plenty of plant talk. Here's when to tune in."
        cta_text="Follow Us on Palmstreet"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />

      <ContentSection
        headline="Our Livestream Schedule"
        body={`We stream twice daily on Palmstreet. Morning streams tend to feature new inventory drops and rare finds, while evening streams are more relaxed with a mix of plants and community conversation.

Follow us on Palmstreet and turn on notifications so you never miss a stream. We also post stream announcements on Instagram @theladycove.`}
      />

      <FeatureGrid
        headline="What to Expect"
        subheadline="New to plant livestreams? Here's what happens when you join."
        items={[
          {
            title: "See Every Plant Up Close",
            description:
              "We show each plant on camera from multiple angles. You see exactly what you're buying — no stock photos, no surprises.",
            icon: "eye",
          },
          {
            title: "Ask Questions Live",
            description:
              "Chat with us during the stream. Ask about specific plants, care tips, or just say hello. The community is friendly and welcoming.",
            icon: "message-circle",
          },
          {
            title: "Buy in Real Time",
            description:
              "When you see something you love, claim it right in the app. Fixed prices and auctions depending on the stream.",
            icon: "zap",
          },
          {
            title: "Join the Regulars",
            description:
              "Our Cooter Cult community shows up stream after stream. It's part plant shopping, part hangout, part education.",
            icon: "users",
          },
        ]}
      />

      <CTASection
        headline="Don't Miss the Next Stream"
        subheadline="Download Palmstreet and follow The Lady Cove to get notified before every livestream."
        cta_text="Download Palmstreet"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
