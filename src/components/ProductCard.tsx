import type { Product } from "@/data/products";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border border-border bg-background transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Product image */}
      <div className="relative h-64 overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
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
