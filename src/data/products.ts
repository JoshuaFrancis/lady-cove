export interface Product {
  slug: string;
  name: string;
  price: number;
  comparePrice?: number;
  description: string;
  category: "merch" | "subscription" | "supplies";
  image?: string;
  badge?: string;
  shopifyUrl: string;
  variants?: string[];
}

export const products: Product[] = [
  // Merch
  {
    slug: "cooter-cult-hoodie",
    name: "Cooter Cult Hoodie",
    price: 54.00,
    description: "Cozy pullover hoodie with the iconic Cooter Cult logo. Unisex fit, available in multiple colors. Perfect for chilly plant room mornings.",
    category: "merch",
    badge: "Best Seller",
    shopifyUrl: "https://theladycove.com/products/cooter-cult-hoodie",
    variants: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "plant-lover-mug",
    name: "The Lady Cove Mug",
    price: 8.50,
    description: "11oz ceramic mug featuring The Lady Cove branding. Dishwasher and microwave safe. Pairs well with your morning plant check.",
    category: "merch",
    shopifyUrl: "https://theladycove.com/products/plant-lover-mug",
  },
  {
    slug: "crossbody-bag",
    name: "Crossbody Plant Bag",
    price: 34.50,
    description: "Hands-free crossbody bag with adjustable strap. Perfect for nursery runs, plant swaps, and farmer's market trips.",
    category: "merch",
    shopifyUrl: "https://theladycove.com/products/crossbody-bag",
  },
  {
    slug: "cooter-cult-sticker-pack",
    name: "Cooter Cult Sticker Pack",
    price: 3.50,
    description: "Vinyl die-cut stickers featuring The Lady Cove and Cooter Cult designs. Weatherproof and UV resistant. Decorate everything.",
    category: "merch",
    shopifyUrl: "https://theladycove.com/products/sticker-pack",
  },
  {
    slug: "plant-parent-tee",
    name: "Plant Parent Tee",
    price: 28.00,
    description: "Soft cotton blend t-shirt with The Lady Cove plant parent design. Pre-shrunk, true to size. Unisex fit.",
    category: "merch",
    shopifyUrl: "https://theladycove.com/products/plant-parent-tee",
    variants: ["S", "M", "L", "XL", "2XL"],
  },
  {
    slug: "nursery-cap",
    name: "The Lady Cove Cap",
    price: 22.00,
    description: "Embroidered dad cap with The Lady Cove logo. Adjustable strap, one size fits most. Sun protection for greenhouse visits.",
    category: "merch",
    shopifyUrl: "https://theladycove.com/products/nursery-cap",
  },
  // Supplies
  {
    slug: "aroid-soil-mix",
    name: "Premium Aroid Soil Mix",
    price: 18.00,
    description: "Our custom chunky aroid mix — orchid bark, perlite, charcoal, and coco coir. The same mix we use in our nursery. 2-quart bag.",
    category: "supplies",
    badge: "New",
    shopifyUrl: "https://theladycove.com/products/aroid-soil-mix",
  },
  {
    slug: "moss-pole-kit",
    name: "Moss Pole Starter Kit",
    price: 14.00,
    description: "Sphagnum moss pole with twist ties and care instructions. Perfect for climbing aroids like Monstera and Philodendron. 24-inch height.",
    category: "supplies",
    shopifyUrl: "https://theladycove.com/products/moss-pole-kit",
  },
];

export function getProductsByCategory(category: Product["category"]): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
