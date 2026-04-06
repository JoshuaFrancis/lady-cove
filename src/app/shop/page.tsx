import type { Metadata } from "next";
import { HeroSection, CTASection } from "@/components/sections";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop The Lady Cove — branded merch, plant care supplies, soil mixes, and more. Cooter Cult hoodies, mugs, stickers, crossbody bags, and premium aroid soil mix.",
};

export default function ShopPage() {
  const merchProducts = products.filter((p) => p.category === "merch");
  const supplyProducts = products.filter((p) => p.category === "supplies");

  return (
    <>
      <HeroSection
        variant="botanical"
        headline="Shop The Lady Cove"
        subheadline="Branded merch, plant care supplies, and everything a Cooter Cult member needs. All items ship from our Florida nursery."
        cta_text="Browse Merch"
        cta_href="#merch"
        secondary_cta_text="Plant Supplies"
        secondary_cta_href="#supplies"
      />

      {/* Trust bar */}
      <section className="py-8 px-6 lg:px-8 border-b border-border bg-muted">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center justify-center gap-8 sm:gap-16">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-5 w-5 text-primary" />
            <span>Flat-rate shipping</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <ShieldCheck className="h-5 w-5 text-primary" />
            <span>Secure checkout</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <RotateCcw className="h-5 w-5 text-primary" />
            <span>Easy returns</span>
          </div>
        </div>
      </section>

      {/* Merch section */}
      <section id="merch" className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Merch
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Rep the Cooter Cult wherever you go.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Supplies section */}
      <section id="supplies" className="py-24 sm:py-32 px-6 lg:px-8 bg-muted">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Plant Care Supplies
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              The same tools and mixes we use in our nursery.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supplyProducts.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        headline="Want Live Plants Instead?"
        subheadline="We sell rare aroids, begonias, and hoyas through twice-daily livestreams on Palmstreet. Join us live."
        cta_text="Watch Us Live on Palmstreet"
        cta_href="https://palmstreet.app/shop/the-lady-cove"
      />
    </>
  );
}
