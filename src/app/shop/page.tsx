import type { Metadata } from "next";
import { HeroSection, CTASection } from "@/components/sections";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { Truck, ShieldCheck, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Shop",
  description:
    "Shop The Lady Cove. Cooter Cult hoodies, mugs, stickers, crossbody bags, throw blankets, and more. Rep your favorite plant nursery.",
};

export default function ShopPage() {
  return (
    <>
      <HeroSection
        variant="botanical"
        headline="Shop The Lady Cove"
        subheadline="Branded merch for the Cooter Cult. Hoodies, mugs, bags, blankets, and more, all shipping from Florida."
        cta_text="Browse Below"
        cta_href="#products"
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

      {/* Products */}
      <section id="products" className="py-24 sm:py-32 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              All Products
            </h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Rep the Cooter Cult wherever you go.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
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
