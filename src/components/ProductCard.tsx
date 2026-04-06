import type { Product } from "@/data/products";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const categoryGradients: Record<string, string> = {
  merch: "from-primary/12 via-primary/8 to-emerald-500/5",
  subscription: "from-teal-500/12 via-teal-500/8 to-emerald-500/5",
  supplies: "from-amber-500/12 via-amber-500/8 to-yellow-500/5",
};

const categoryIcons: Record<string, string> = {
  merch: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  supplies: "M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25",
};

export function ProductCard({ product }: ProductCardProps) {
  const gradient = categoryGradients[product.category] || categoryGradients.merch;

  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-background transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Product image placeholder */}
      <div className={`relative h-56 bg-gradient-to-br ${gradient} overflow-hidden`}>
        {/* Decorative pattern */}
        <div className="absolute inset-0">
          <div className="absolute top-6 right-6 w-24 h-24 rounded-full border border-primary/10" />
          <div className="absolute bottom-4 left-4 w-16 h-16 rounded-full border border-primary/10" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-20 h-20 rounded-2xl bg-white/30 backdrop-blur-sm flex items-center justify-center rotate-6 group-hover:rotate-0 transition-transform">
              <ShoppingBag className="w-8 h-8 text-primary/60" />
            </div>
          </div>
        </div>

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 inline-flex items-center rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
            {product.badge}
          </div>
        )}
      </div>

      {/* Product info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-tight">
            {product.name}
          </h3>
          <div className="text-right shrink-0">
            <span className="text-lg font-bold text-foreground">
              ${product.price.toFixed(2)}
            </span>
            {product.comparePrice && (
              <span className="block text-xs text-muted-foreground line-through">
                ${product.comparePrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {product.variants && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {product.variants.map((v) => (
              <span
                key={v}
                className="inline-block text-xs px-2 py-0.5 rounded-md bg-muted text-muted-foreground border border-border/50"
              >
                {v}
              </span>
            ))}
          </div>
        )}

        <a
          href={product.shopifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 hover:shadow-md"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to Cart
        </a>
      </div>
    </div>
  );
}
