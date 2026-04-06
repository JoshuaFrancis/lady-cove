import type { Metadata } from "next";
import { HeroSection, ContentSection, FAQSection, CTASection } from "@/components/sections";
import { HowToBuySteps } from "@/components/HowToBuySteps";

export const metadata: Metadata = {
  title: "How to Buy Plants",
  description:
    "Learn how to buy rare plants from The Lady Cove on Palmstreet. Step-by-step guide to joining our livestreams, bidding, and getting plants shipped to your door.",
};

export default function HowToBuyPage() {
  return (
    <>
      <HeroSection
        headline="How to Buy Our Plants"
        subheadline="We sell live on Palmstreet, an app built for plant lovers. Here's everything you need to know to join a stream and take home your next rare find."
        cta_text="Download Palmstreet"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />

      <HowToBuySteps />

      <ContentSection
        headline="Our Packing Promise"
        body={`Packing is where we obsess. Every plant is individually wrapped, secured, and cushioned for transit. We use insulated boxes with UniHeat packs during cold months and ship Monday through Wednesday to avoid weekend delays at sorting facilities.

Our Etsy Star Seller status and hundreds of five-star reviews aren't an accident. When you open a box from The Lady Cove, the plant looks like it never left the greenhouse.`}
      />

      <FAQSection
        headline="Buying FAQ"
        items={[
          {
            question: "What is Palmstreet?",
            answer:
              "Palmstreet is a live-selling app designed specifically for plant sellers and buyers. Think of it as a plant-focused livestream shopping experience where you can see exactly what you're buying before you purchase.",
          },
          {
            question: "Do you sell plants on your website?",
            answer:
              "Our primary plant sales happen through Palmstreet livestreams. We sell branded merchandise on our Shopify store and offer monthly subscription boxes. For individual plant purchases, Palmstreet is the best experience.",
          },
          {
            question: "How much is shipping?",
            answer:
              "Shipping costs are calculated at checkout on Palmstreet based on your location and the size of your order. We ship via USPS Priority Mail for fastest delivery.",
          },
          {
            question: "Do you ship internationally?",
            answer:
              "Currently we ship within the United States only. International shipping requires phytosanitary certificates and additional documentation that we may offer in the future.",
          },
          {
            question: "What if my plant arrives damaged?",
            answer:
              "Contact us through Palmstreet within 24 hours of delivery with photos. We stand behind our packing and will work with you to make it right.",
          },
        ]}
      />

      <CTASection
        headline="Ready to Shop?"
        subheadline="Our next livestream is just around the corner. Download Palmstreet and follow The Lady Cove to get notified."
        cta_text="Download Palmstreet"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
