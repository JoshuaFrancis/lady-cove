import {
  StatsSection,
  ContentSection,
  CTASection,
  PricingTable,
} from "@/components/sections";
import { HomepageHero } from "@/components/HomepageHero";
import { DestinationCard } from "@/components/ui/card-21";
import { TestimonialCard } from "@/components/ui/testimonial-card";

export default function HomePage() {
  return (
    <>
      <HomepageHero />

      <StatsSection
        items={[
          { value: "5,966+", label: "Plants Sold" },
          { value: "7,400+", label: "Community Members" },
          { value: "17", label: "Care Guides" },
          { value: "4.8/5", label: "Average Rating" },
        ]}
      />

      {/* What We Grow — DestinationCards */}
      <section className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What We Grow
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Our nursery specializes in rare and unusual tropical plants. Each
              one is hand-selected and lovingly packed.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="h-[400px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1637967886160-fd78dc3ce3f5?q=80&w=800&auto=format&fit=crop"
                location="Aroids"
                flag=""
                stats="Anthurium, Philodendron, Alocasia, Monstera & more"
                href="/care-guides/anthurium"
                themeColor="142 40% 22%"
              />
            </div>
            <div className="h-[400px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1611211232932-da3113c5b960?q=80&w=800&auto=format&fit=crop"
                location="Begonias"
                flag=""
                stats="Rex, cane, rhizomatous & rare species"
                href="/care-guides/begonia"
                themeColor="330 40% 28%"
              />
            </div>
            <div className="h-[400px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1602923668104-8f9e03e77e62?q=80&w=800&auto=format&fit=crop"
                location="Hoyas"
                flag=""
                stats="Trailing, climbing & compact wax plants"
                href="/care-guides/hoya"
                themeColor="30 40% 28%"
              />
            </div>
            <div className="h-[400px]">
              <DestinationCard
                imageUrl="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop"
                location="And More"
                flag=""
                stats="Calathea, Scindapsus, Peperomia, ferns & specialties"
                href="/care-guides"
                themeColor="150 45% 25%"
              />
            </div>
          </div>
        </div>
      </section>

      <ContentSection
        variant="side-image"
        imagePosition="right"
        headline="How It Works"
        body={`We sell plants live on Palmstreet, where you can see exactly what you're getting before you buy. No stock photos, no guessing. Every plant is shown on camera, and you pick the one you want.

Download the Palmstreet app, follow The Lady Cove, and join our next livestream. We go live twice daily with fresh inventory, rare finds, and plenty of plant talk along the way.`}
      />

      {/* Testimonials with people images */}
      <section className="py-24 sm:py-32 px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              What Our Community Says
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">
              Real reviews from customers across Facebook, Etsy, and Palmstreet
            </p>
          </div>
          <div className="flex flex-wrap items-start justify-center gap-6">
            <TestimonialCard
              imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=600&auto=format&fit=crop"
              quote="I had such a wonderful experience with The Lady Cove Nursery! Fast shipping, amazing plant varieties, and everything arrived healthy and beautiful. Highly recommend!"
              author="Ambyre Roberson"
              role="Facebook Review"
              gradientFrom="#4A7C59"
              gradientVia="#6DBF8B"
              gradientTo="#2D6A4F"
            />
            <TestimonialCard
              imageUrl="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop"
              quote="Absolutely captivating. Shipping was quick, and my plant was very lovingly snuggled in when packed. Will definitely be ordering again."
              author="Sarah M."
              role="Etsy Verified Purchase"
              gradientFrom="#4A7C59"
              gradientVia="#6DBF8B"
              gradientTo="#2D6A4F"
            />
            <TestimonialCard
              imageUrl="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
              quote="Beautiful plant. Looks better than the pictures. Packaged well. The plant traveled from Florida to Washington and it's still beautiful."
              author="PlantMom_PNW"
              role="Etsy Verified Purchase"
              gradientFrom="#4A7C59"
              gradientVia="#6DBF8B"
              gradientTo="#2D6A4F"
            />
          </div>
        </div>
      </section>

      {/* Subscription Pricing Table */}
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

      <CTASection
        headline="Ready to Join the Cooter Cult?"
        subheadline="Follow us on Palmstreet for twice-daily livestreams, or explore our care guides to level up your plant game."
        cta_text="Download Palmstreet"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
