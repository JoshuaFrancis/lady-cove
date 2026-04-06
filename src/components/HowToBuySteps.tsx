"use client";

import { GradientCard } from "@/components/ui/gradient-card";

const steps = [
  {
    badgeText: "Step 1",
    badgeColor: "#4A7C59",
    title: "Download Palmstreet",
    description:
      "Get the free Palmstreet app on iOS or Android. Create an account and set up your shipping address.",
    ctaText: "Get the app",
    ctaHref: "https://palmstreet.app",
    imageUrl:
      "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=400&auto=format&fit=crop",
    gradient: "green" as const,
  },
  {
    badgeText: "Step 2",
    badgeColor: "#2D6A4F",
    title: "Follow The Lady Cove",
    description:
      'Search for "The Lady Cove" in the app and tap Follow. You\'ll get notified before every livestream.',
    ctaText: "Find us",
    ctaHref: "https://palmstreet.app/shop/the-lady-cove",
    imageUrl:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?q=80&w=400&auto=format&fit=crop",
    gradient: "green" as const,
  },
  {
    badgeText: "Step 3",
    badgeColor: "#F59E0B",
    title: "Join a Livestream",
    description:
      "We go live twice daily. Jump in, say hello, and browse what we're showing. Every plant is displayed on camera.",
    ctaText: "See schedule",
    ctaHref: "/livestreams",
    imageUrl:
      "https://images.unsplash.com/photo-1598880940080-ff9a29891b85?q=80&w=400&auto=format&fit=crop",
    gradient: "orange" as const,
  },
  {
    badgeText: "Step 4",
    badgeColor: "#8B5CF6",
    title: "Claim Your Plant",
    description:
      "See something you love? Tap to claim it. Fixed prices and auctions are both available depending on the stream.",
    ctaText: "Learn more",
    ctaHref: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=400&auto=format&fit=crop",
    gradient: "purple" as const,
  },
  {
    badgeText: "Step 5",
    badgeColor: "#4A7C59",
    title: "We Ship It With Care",
    description:
      "Your plant is packed with our signature attention to detail. Heat packs in winter, careful wrapping year-round.",
    ctaText: "Our packing promise",
    ctaHref: "#",
    imageUrl:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=400&auto=format&fit=crop",
    gradient: "green" as const,
  },
];

export function HowToBuySteps() {
  return (
    <section className="py-24 sm:py-32 px-6 lg:px-8 bg-muted">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            5 Simple Steps
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From download to delivery, here's how it works.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.slice(0, 4).map((step, index) => (
            <div key={index} className="min-h-[180px]">
              <GradientCard
                badgeText={step.badgeText}
                badgeColor={step.badgeColor}
                title={step.title}
                description={step.description}
                ctaText={step.ctaText}
                ctaHref={step.ctaHref}
                imageUrl={step.imageUrl}
                gradient={step.gradient}
              />
            </div>
          ))}
        </div>
        {/* Step 5 full width */}
        <div className="mt-8 min-h-[180px]">
          <GradientCard
            badgeText={steps[4].badgeText}
            badgeColor={steps[4].badgeColor}
            title={steps[4].title}
            description={steps[4].description}
            ctaText={steps[4].ctaText}
            ctaHref={steps[4].ctaHref}
            imageUrl={steps[4].imageUrl}
            gradient={steps[4].gradient}
          />
        </div>
      </div>
    </section>
  );
}
