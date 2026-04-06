import type { Metadata } from "next";
import { HeroSection, FAQSection, CTASection } from "@/components/sections";
import { FAQSchema } from "@/components/SchemaMarkup";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about buying plants from The Lady Cove. Answers about Palmstreet, shipping, plant care, subscriptions, and returns.",
};

export default function FAQPage() {
  const allFaqItems = [
    { question: "How do I buy plants from The Lady Cove?", answer: "We sell plants through twice-daily livestreams on the Palmstreet app. Download Palmstreet, follow The Lady Cove, and join our next stream to browse and buy." },
    { question: "Why don't you sell plants on your website?", answer: "Livestreaming lets us show you every plant from every angle before you buy. You see exactly what you're getting." },
    { question: "Where do you ship?", answer: "We ship within the United States via USPS Priority Mail." },
    { question: "How are plants packed?", answer: "Every plant is individually wrapped, secured, and cushioned. We use insulated boxes and include UniHeat 72-hour packs during cold weather." },
    { question: "How do subscription boxes work?", answer: "Choose a tier (Plant Parent Starter, Cooter Cult Crate, or Begonia of the Month), and we'll ship a curated plant box to your door during the first week of each month." },
    { question: "Can I pause or cancel?", answer: "Yes. You can pause, skip a month, or cancel your subscription at any time with no fees." },
  ];

  return (
    <>
      <FAQSchema items={allFaqItems} />
      <HeroSection
        headline="Frequently Asked Questions"
        subheadline="Everything you need to know about buying plants, shipping, subscriptions, and more."
        cta_text="Contact Us"
        cta_href="/contact"
      />

      <FAQSection
        headline="Buying Plants"
        items={[
          {
            question: "How do I buy plants from The Lady Cove?",
            answer:
              "We sell plants through twice-daily livestreams on the Palmstreet app. Download Palmstreet, follow The Lady Cove, and join our next stream to browse and buy.",
          },
          {
            question: "Why don't you sell plants on your website?",
            answer:
              "Livestreaming lets us show you every plant from every angle before you buy. You see exactly what you're getting. It's a better experience for rare and unique plants where every specimen is different.",
          },
          {
            question: "What is Palmstreet?",
            answer:
              "Palmstreet is a live-selling app designed for plant sellers and buyers. It handles payments, shipping labels, and buyer protection. Think of it as a plant-focused livestream shopping experience.",
          },
          {
            question: "Do you sell on Etsy?",
            answer:
              "Our Etsy shop (TheLadyCove) is currently on pause while we focus on Palmstreet. We may reopen it for select items in the future.",
          },
        ]}
      />

      <FAQSection
        headline="Shipping & Delivery"
        items={[
          {
            question: "Where do you ship?",
            answer:
              "We ship within the United States via USPS Priority Mail. International shipping is not available at this time.",
          },
          {
            question: "How are plants packed?",
            answer:
              "Every plant is individually wrapped, secured, and cushioned. We use insulated boxes and include UniHeat 72-hour packs during cold weather. Our packing quality is consistently praised in reviews.",
          },
          {
            question: "What days do you ship?",
            answer:
              "We ship Monday through Wednesday to avoid plants sitting in sorting facilities over weekends.",
          },
          {
            question: "What if my plant arrives damaged?",
            answer:
              "Contact us within 24 hours of delivery through Palmstreet with photos of the damage. We'll work with you to make it right.",
          },
        ]}
      />

      <FAQSection
        headline="Subscriptions"
        items={[
          {
            question: "How do subscription boxes work?",
            answer:
              "Choose a tier (Plant Parent Starter, Cooter Cult Crate, or Begonia of the Month), and we'll ship a curated plant box to your door during the first week of each month.",
          },
          {
            question: "Can I choose which plant I get?",
            answer:
              "Subscription boxes are curated by us. The surprise is part of the experience, and we often include varieties you might not have tried on your own.",
          },
          {
            question: "Can I pause or cancel?",
            answer:
              "Yes. You can pause, skip a month, or cancel your subscription at any time with no fees.",
          },
        ]}
      />

      <FAQSection
        headline="Plant Care"
        items={[
          {
            question: "Where can I find care information?",
            answer:
              "Our Care Guides section has detailed guides for every genus we specialize in, covering light, water, humidity, soil, fertilizer, pests, and more.",
          },
          {
            question: "Do you offer plant care advice?",
            answer:
              "Yes! Ask questions during our livestreams, check our care guides on this site, or message us on Instagram for specific advice.",
          },
          {
            question: "My plant doesn't look right. What should I do?",
            answer:
              "Check the relevant care guide on our site first. If you're still not sure, send us a photo on Instagram DMs and we'll help diagnose the issue.",
          },
        ]}
      />

      <CTASection
        headline="Still Have Questions?"
        subheadline="We're always happy to help. Reach out on Instagram or join a livestream and ask us directly."
        cta_text="Contact Us"
        cta_href="/contact"
      />
    </>
  );
}
