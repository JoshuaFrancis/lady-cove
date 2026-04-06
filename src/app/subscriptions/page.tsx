import type { Metadata } from "next";
import { HeroSection, PricingTable, FeatureGrid, FAQSection, CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Monthly Plant Subscription Boxes",
  description:
    "Subscribe to monthly rare plant boxes from The Lady Cove. Choose from Cooter Cult Crate (rare aroids), Begonia of the Month, or Plant Parent Starter. Ships from our Florida nursery.",
};

export default function SubscriptionsPage() {
  return (
    <>
      <HeroSection
        headline="Monthly Plant Subscription Boxes"
        subheadline="A curated rare plant delivered to your door every month. Hand-selected from our nursery, packed with care, and shipped with everything you need to grow it well."
        cta_text="Subscribe Now"
        cta_href="https://theladycove.com/collections/subscriptions"
      />

      <PricingTable
        headline="Choose Your Box"
        subheadline="Three tiers for every level of collector. Cancel or pause anytime."
        tiers={[
          {
            name: "Plant Parent Starter",
            price: "$24\u201334",
            period: "/month",
            description:
              "Perfect for new plant parents ready to level up from big-box basics",
            cta_text: "Subscribe Now",
            cta_href: "https://theladycove.com/collections/subscriptions",
            features: [
              "1 easy-care tropical plant",
              "Soil mix sample",
              "Printed care card",
              "Access to beginner care module",
              "Ships in insulated packaging",
            ],
            highlighted: false,
          },
          {
            name: "Cooter Cult Crate",
            price: "$49\u201369",
            period: "/month",
            description:
              "Our signature box for aroid collectors. A rare find every month.",
            cta_text: "Subscribe Now",
            cta_href: "https://theladycove.com/collections/subscriptions",
            features: [
              "1 rare aroid (Anthurium, Philodendron, Alocasia, Monstera, or Syngonium)",
              "Care card with QR code to video guide",
              "Branded extra (sticker, soil sample, or moss pole section)",
              "Handwritten note from Andie",
              "First access to limited drops",
            ],
            highlighted: true,
          },
          {
            name: "Begonia of the Month",
            price: "$39\u201349",
            period: "/month",
            description:
              "For the begonia obsessed. A specimen-grade begonia every month.",
            cta_text: "Subscribe Now",
            cta_href: "https://theladycove.com/collections/subscriptions",
            features: [
              "1 specimen-grade begonia",
              "Variety-specific propagation tips",
              "Members-only Begonia Lovers community access",
              "Seasonal corm-of-the-month variant",
              "Priority customer support",
            ],
            highlighted: false,
          },
        ]}
      />

      <FeatureGrid
        headline="What Makes Our Boxes Different"
        subheadline="We're not a fulfillment center. Every plant ships from our nursery, selected and packed by us."
        items={[
          {
            title: "Nursery-Fresh Plants",
            description:
              "Every plant in your box was growing in our greenhouse days before shipping. No warehouses, no middlemen, no wilted specimens.",
            icon: "sprout",
          },
          {
            title: "Expert Packing",
            description:
              "The same signature packing that earned us Star Seller status on Etsy. Insulated boxes, heat packs in winter, and individual wrapping.",
            icon: "shield-check",
          },
          {
            title: "Care Support Included",
            description:
              "Every box includes care instructions specific to your plant, plus QR codes linking to video guides from our collection.",
            icon: "book-open",
          },
          {
            title: "Pause or Cancel Anytime",
            description:
              "Life happens. Skip a month, pause your subscription, or cancel with no hassle and no fees.",
            icon: "pause",
          },
        ]}
      />

      <FAQSection
        headline="Subscription FAQ"
        items={[
          {
            question: "When do boxes ship?",
            answer:
              "Subscription boxes ship during the first week of each month, Monday through Wednesday. You'll receive a tracking number via email once your box is on its way.",
          },
          {
            question: "Can I choose which plant I receive?",
            answer:
              "Boxes are curated by us, which is part of the fun. The mystery selection lets us send you varieties you might not have picked yourself but will absolutely love.",
          },
          {
            question: "What if my plant arrives damaged?",
            answer:
              "Contact us within 24 hours of delivery with photos. We pack carefully, but transit can be unpredictable. We'll make it right.",
          },
          {
            question: "Do you ship during extreme weather?",
            answer:
              "We monitor weather conditions along shipping routes. During extreme cold or heat, we may hold shipments for a day or two to protect your plant. We'll notify you if there's a delay.",
          },
          {
            question: "Can I gift a subscription?",
            answer:
              "Yes! Gift subscriptions are available for 3, 6, or 12 months. Contact us to set one up.",
          },
        ]}
      />

      <CTASection
        headline="Start Your Subscription"
        subheadline="Pick your box, tell us where to send it, and get a hand-selected rare plant every month."
        cta_text="Subscribe Now"
        cta_href="https://theladycove.com/collections/subscriptions"
      />
    </>
  );
}
