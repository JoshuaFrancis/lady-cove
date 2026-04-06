# The Lady Cove — Site Architecture

## Site Type
Hybrid: Small Business + Content Hub + E-Commerce Bridge

## Page Hierarchy

```
The Lady Cove
├── / (Homepage)
├── /about (Our Story)
├── /how-to-buy (How to Buy Plants)
├── /care-guides (Care Guides Hub)
│   ├── /care-guides/alocasia
│   ├── /care-guides/anthurium
│   ├── /care-guides/begonia
│   ├── /care-guides/hoya
│   ├── /care-guides/monstera
│   ├── /care-guides/philodendron
│   ├── /care-guides/syngonium
│   ├── /care-guides/calathea
│   ├── /care-guides/pothos
│   ├── /care-guides/scindapsus
│   ├── /care-guides/rhaphidophora
│   ├── /care-guides/epipremnum
│   ├── /care-guides/colocasia
│   ├── /care-guides/caladium
│   ├── /care-guides/aglaonema
│   ├── /care-guides/fern
│   └── /care-guides/peperomia
├── /subscriptions (Subscription Boxes)
├── /shop (Merch Shop — links to Shopify)
├── /livestreams (Livestream Schedule)
├── /contact (Contact)
└── /faq (FAQ)
```

## URL Map

| Page | Route | Purpose | Priority | Content Source |
|------|-------|---------|----------|----------------|
| Homepage | `/` | Brand hub — hero, featured collections, social proof, CTAs | P0 | New copy |
| Our Story | `/about` | Origin story, team bios, certifications, mission | P0 | Brief (origin story) |
| How to Buy Plants | `/how-to-buy` | Explains Palmstreet livestream process, app download | P0 | New copy |
| Care Guides Hub | `/care-guides` | Index page linking to all genus care guides | P0 | New copy |
| Care Guide: Alocasia | `/care-guides/alocasia` | Alocasia care guide (12-point format) | P0 | Existing content |
| Care Guide: Anthurium | `/care-guides/anthurium` | Anthurium care guide | P0 | Existing content |
| Care Guide: Begonia | `/care-guides/begonia` | Begonia care guide | P0 | Existing content |
| Care Guide: Hoya | `/care-guides/hoya` | Hoya care guide | P0 | Existing content |
| Care Guide: Monstera | `/care-guides/monstera` | Monstera care guide | P0 | Existing content |
| Care Guide: Philodendron | `/care-guides/philodendron` | Philodendron care guide | P0 | Existing content |
| Care Guide: Syngonium | `/care-guides/syngonium` | Syngonium care guide | P0 | Existing content |
| Care Guide: Calathea | `/care-guides/calathea` | Calathea care guide | P0 | Existing content |
| Care Guide: Pothos | `/care-guides/pothos` | Pothos care guide | P0 | Existing content |
| Care Guide: Scindapsus | `/care-guides/scindapsus` | Scindapsus care guide | P0 | Existing content |
| Care Guide: Rhaphidophora | `/care-guides/rhaphidophora` | Rhaphidophora care guide | P0 | Existing content |
| Care Guide: Epipremnum | `/care-guides/epipremnum` | Epipremnum care guide | P0 | Existing content |
| Care Guide: Colocasia | `/care-guides/colocasia` | Colocasia care guide | P0 | Existing content |
| Care Guide: Caladium | `/care-guides/caladium` | Caladium care guide | P0 | Existing content |
| Care Guide: Aglaonema | `/care-guides/aglaonema` | Aglaonema care guide | P0 | Existing content |
| Care Guide: Fern | `/care-guides/fern` | Fern care guide | P0 | Existing content |
| Care Guide: Peperomia | `/care-guides/peperomia` | Peperomia care guide | P0 | Existing content |
| Subscriptions | `/subscriptions` | Subscription box tiers + signup CTAs | P1 | New copy |
| Merch Shop | `/shop` | Branded merchandise — redirects/links to Shopify | P1 | Shopify bridge |
| Livestream Schedule | `/livestreams` | Upcoming stream times, Palmstreet link | P2 | New copy |
| Contact | `/contact` | Contact form, email, social links | P1 | New copy |
| FAQ | `/faq` | Common questions about buying, shipping, care | P1 | New copy |

## Navigation Structure

### Primary Navigation (Header)
| Label | Route | Type |
|-------|-------|------|
| About | `/about` | Internal |
| How to Buy | `/how-to-buy` | Internal |
| Care Guides | `/care-guides` | Internal |
| Subscriptions | `/subscriptions` | Internal |
| Shop | `/shop` | Internal |
| Watch Live | `https://palmstreet.app/shop/the-lady-cove` | External (CTA button) |

### Footer Navigation

**Column 1: Shop**
- How to Buy Plants → `/how-to-buy`
- Subscription Boxes → `/subscriptions`
- Merch Store → `/shop`
- Livestream Schedule → `/livestreams`

**Column 2: Learn**
- Care Guides → `/care-guides`
- Alocasia Care → `/care-guides/alocasia`
- Anthurium Care → `/care-guides/anthurium`
- Begonia Care → `/care-guides/begonia`
- Philodendron Care → `/care-guides/philodendron`

**Column 3: Company**
- Our Story → `/about`
- Contact → `/contact`
- FAQ → `/faq`

**Column 4: Connect**
- Instagram → `https://instagram.com/theladycove`
- Facebook → `https://facebook.com/theladycove`
- Palmstreet → `https://palmstreet.app/shop/the-lady-cove`
- Etsy → `https://etsy.com/shop/TheLadyCove`

**Footer Bottom**: Copyright + Florida Dept. of Agriculture + FNGLA badges

## Internal Linking Strategy

### Hub-and-Spoke Model
- **Hub**: Care Guides index (`/care-guides`)
- **Spokes**: Individual genus care guides (`/care-guides/[slug]`)
- Each spoke links back to hub and to 2-3 related genus guides
- Homepage features 3-4 popular care guides as entry points

### Cross-Page Links
- Every page includes a CTA linking to Palmstreet (Watch Live)
- About page links to Care Guides (expertise proof) and How to Buy
- How to Buy links to Livestream Schedule and Subscriptions (alternatives)
- Subscription pages link to Care Guides (education value-add)
- FAQ links to How to Buy, Care Guides, and Contact contextually

### External Links (opened in new tab)
- Palmstreet shop/app download
- Instagram @theladycove
- Facebook page
- Shopify merch store
- Etsy shop (if reactivated)
