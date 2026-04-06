export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "The Lady Cove",
    url: "https://theladycove.com",
    description:
      "Family-owned Florida nursery specializing in rare aroids, begonias, and hoyas. Live plant sales on Palmstreet.",
    sameAs: [
      "https://instagram.com/theladycove",
      "https://facebook.com/theladycove",
      "https://etsy.com/shop/TheLadyCove",
      "https://palmstreet.app/shop/the-lady-cove",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "The Lady Cove",
    description:
      "Certified Florida nursery specializing in rare tropical houseplants including aroids, begonias, and hoyas.",
    url: "https://theladycove.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "FL",
      addressCountry: "US",
    },
    sameAs: [
      "https://instagram.com/theladycove",
      "https://facebook.com/theladycove",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "5966",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQSchemaProps {
  items: { question: string; answer: string }[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "The Lady Cove",
    url: "https://theladycove.com",
    description:
      "Rare plants, expert care guides, and monthly subscription boxes from a family-owned Florida nursery.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
