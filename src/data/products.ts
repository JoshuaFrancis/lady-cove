export interface Product {
  slug: string;
  name: string;
  price: number;
  comparePrice?: number;
  description: string;
  category: "merch" | "subscription" | "supplies";
  image: string;
  badge?: string;
  shopifyUrl: string;
  variants?: string[];
}

export const products: Product[] = [
  {
    slug: "alibi-mug",
    name: "Alibi Mug",
    price: 8.50,
    description: "White glossy ceramic mug with The Lady Cove's signature plant design. Available in 11oz and 15oz. Dishwasher and microwave safe.",
    category: "merch",
    image: "https://theladycove.com/cdn/shop/files/white-glossy-mug-white-11-oz-front-view-6958243db254a.jpg?v=1737171005&width=600",
    shopifyUrl: "https://theladycove.com/products/alibi-mug",
    variants: ["11oz", "15oz"],
  },
  {
    slug: "butt-cuts-tee",
    name: "Butt Cuts Are The Tits Tee",
    price: 24.00,
    description: "Women's micro rib raglan baby tee with the iconic 'butt cuts are the tits' design. Soft cotton blend, true to size.",
    category: "merch",
    image: "https://theladycove.com/cdn/shop/files/womens-micro-rib-raglan-baby-tee-white-black-front-6958346b0ecaf.jpg?v=1737175147&width=600",
    shopifyUrl: "https://theladycove.com/products/butt-cuts-are-the-tits",
    variants: ["S", "M", "L", "XL"],
  },
  {
    slug: "cooter-cult-hoodie",
    name: "Cooter Cult Hoodie",
    price: 54.00,
    description: "Urban hoodie with the iconic Cooter Cult branding. Premium heavyweight cotton, unisex fit. The official uniform of the Cooter Cult.",
    category: "merch",
    badge: "Best Seller",
    image: "https://theladycove.com/cdn/shop/files/lane-seven-ls16001-i-urban-hoodie-white-front-and-back-69587c375027f.png?v=1737193527&width=600",
    shopifyUrl: "https://theladycove.com/products/cooter-cult-hoodie",
    variants: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "crossbody-bag",
    name: "Crossbody Bag",
    price: 34.50,
    description: "All-over print crossbody bag with botanical design. Hands-free plant shopping. Perfect for nursery runs and plant swaps.",
    category: "merch",
    image: "https://theladycove.com/cdn/shop/files/all-over-print-crossbody-bag-black-front-695927ad27506.jpg?v=1737237421&width=600",
    shopifyUrl: "https://theladycove.com/products/crossbody-bag",
  },
  {
    slug: "dad-hat",
    name: "The Lady Cove Dad Hat",
    price: 19.50,
    description: "Embroidered dad cap with The Lady Cove logo. Adjustable strap, one size fits most. Sun protection for greenhouse visits.",
    category: "merch",
    image: "https://theladycove.com/cdn/shop/files/classic-dad-hat-white-front-695837023e5e4.jpg?v=1737211650&width=600",
    shopifyUrl: "https://theladycove.com/products/dad-hat",
  },
  {
    slug: "movin-right-along-sticker",
    name: "Movin' Right Along Sticker",
    price: 3.50,
    description: "Vinyl die-cut sticker with The Lady Cove's 'Movin' Right Along' skeleton design. Weatherproof and UV resistant.",
    category: "merch",
    image: "https://theladycove.com/cdn/shop/files/kiss-cut-vinyl-decals-5.5x5.5-front-6958478d6e2c2.png?v=1737179021&width=600",
    shopifyUrl: "https://theladycove.com/products/movin-right-along-sticker",
  },
  {
    slug: "spiral-notebook",
    name: "Spiral Notebook",
    price: 19.31,
    description: "'Grow with love' spiral notebook with botanical cover art. Perfect for plant journals, care notes, and wish lists.",
    category: "merch",
    image: "https://theladycove.com/cdn/shop/files/spiral-notebook-white-front-6958b2a9a1def.jpg?v=1737207464&width=600",
    shopifyUrl: "https://theladycove.com/products/spiral-notebook",
  },
  {
    slug: "throw-blanket-cooter-cult",
    name: "Cooter Cult Throw Blanket",
    price: 40.50,
    description: "Cozy throw blanket with the Cooter Cult artwork. Perfect for plant room lounging and livestream watching.",
    category: "merch",
    badge: "New",
    image: "https://theladycove.com/cdn/shop/files/throw-blanket-50x60-front-69591f8b97e5c.jpg?v=1737235339&width=600",
    shopifyUrl: "https://theladycove.com/products/throw-blanket-cooter-cult",
  },
];

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
