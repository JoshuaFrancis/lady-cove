import type { Metadata } from "next";
import { bodyFont, headingFont } from "@/lib/fonts";
import { FooterSection } from "@/components/sections";
import { Navbar } from "@/components/Navbar";
import { OrganizationSchema, WebSiteSchema, LocalBusinessSchema } from "@/components/SchemaMarkup";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "The Lady Cove | Rare Plants, Live Sales & Expert Care Guides",
    template: "%s | The Lady Cove",
  },
  description:
    "The Lady Cove is a family-owned Florida nursery specializing in rare aroids, begonias, and hoyas. Shop live on Palmstreet, explore care guides, or subscribe to monthly plant boxes.",
};

const footerColumns = [
  {
    title: "Shop",
    links: [
      { label: "How to Buy Plants", href: "/how-to-buy" },
      { label: "Subscription Boxes", href: "/subscriptions" },
      { label: "Merch Store", href: "/shop" },
      { label: "Livestream Schedule", href: "/livestreams" },
    ],
  },
  {
    title: "Learn",
    links: [
      { label: "Care Guides", href: "/care-guides" },
      { label: "Alocasia Care", href: "/care-guides/alocasia" },
      { label: "Anthurium Care", href: "/care-guides/anthurium" },
      { label: "Begonia Care", href: "/care-guides/begonia" },
      { label: "Philodendron Care", href: "/care-guides/philodendron" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Instagram", href: "https://instagram.com/theladycove" },
      { label: "Facebook", href: "https://facebook.com/theladycove" },
      {
        label: "Palmstreet",
        href: "https://palmstreet.app/shop/the-lady-cove",
      },
      { label: "Etsy", href: "https://etsy.com/shop/TheLadyCove" },
    ],
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${headingFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <OrganizationSchema />
        <WebSiteSchema />
        <LocalBusinessSchema />
        <Navbar />
        <main className="flex-1">{children}</main>
        <FooterSection
          columns={footerColumns}
          copyright="&copy; 2026 The Lady Cove. Family-owned rare plant nursery. Florida Department of Agriculture certified. FNGLA member."
        />
      </body>
    </html>
  );
}
