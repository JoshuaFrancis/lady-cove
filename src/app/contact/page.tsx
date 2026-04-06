import type { Metadata } from "next";
import { HeroSection, FeatureGrid, ContentSection, CTASection } from "@/components/sections";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with The Lady Cove. Questions about orders, plant care, or partnerships? Reach us through Instagram DMs or our contact form.",
};

export default function ContactPage() {
  return (
    <>
      <HeroSection
        headline="Get in Touch"
        subheadline="Have a question about an order, a plant, or a potential collaboration? We'd love to hear from you."
        cta_text="Message on Instagram"
        cta_href="https://instagram.com/theladycove"
      />

      <FeatureGrid
        headline="Best Ways to Reach Us"
        subheadline="We're most responsive on Instagram, but we read everything."
        items={[
          {
            title: "Instagram DMs",
            description:
              "The fastest way to reach us. Send a message to @theladycove on Instagram and we'll get back to you within 24 hours.",
            icon: "message-circle",
          },
          {
            title: "Palmstreet Chat",
            description:
              "For order-related questions, message us directly through the Palmstreet app where your purchase was made.",
            icon: "smartphone",
          },
          {
            title: "Email",
            description:
              "For wholesale inquiries, press, or collaborations, reach out via email. We'll respond within 48 hours.",
            icon: "mail",
          },
        ]}
      />

      <ContentSection
        headline="Before You Reach Out"
        body={`For the fastest help, check our FAQ page first. We've answered the most common questions about buying, shipping, and plant care there.

If you have a shipping issue or a plant arrived damaged, please contact us within 24 hours of delivery with photos so we can help you quickly.`}
      />

      <CTASection
        headline="Follow Us Everywhere"
        subheadline="Stay connected with The Lady Cove across all our platforms."
        cta_text="Follow on Instagram"
        cta_href="https://instagram.com/theladycove"
      />
    </>
  );
}
