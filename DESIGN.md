# Design System — The Lady Cove

## Direction: Modern Greenhouse
Clean, editorial, modern. Whitespace lets the plant photography shine. Care guides feel like a design-forward plant magazine. Sophisticated but approachable.

## Colors

| Token | Hex | HSL | Usage |
|-------|-----|-----|-------|
| `--background` | #FFFFFF | 0 0% 100% | Page background |
| `--foreground` | #1A1A1A | 0 0% 10% | Primary text |
| `--primary` | #4A7C59 | 142 27% 39% | CTAs, links, active states |
| `--primary-foreground` | #FFFFFF | 0 0% 100% | Text on primary backgrounds |
| `--muted` | #F5F5F0 | 60 20% 95% | Section backgrounds, cards |
| `--muted-foreground` | #6B7280 | 220 9% 46% | Secondary text, captions |
| `--border` | #E0E0E0 | 0 0% 88% | Borders, dividers |
| `--accent` | #2C2C2C | 0 0% 17% | Charcoal accent, secondary buttons |
| `--accent-foreground` | #FFFFFF | 0 0% 100% | Text on accent backgrounds |
| `--destructive` | #DC2626 | 0 72% 51% | Error states |
| `--ring` | #4A7C59 | 142 27% 39% | Focus rings |

## Typography

| Role | Font | Weight | Google Fonts |
|------|------|--------|--------------|
| Headings | Space Grotesk | 500, 700 | Yes |
| Body | Inter | 400, 500, 600 | Yes |
| Mono | JetBrains Mono | 400 | Yes (if needed) |

### Type Scale
| Element | Size (desktop) | Size (mobile) | Line Height | Weight |
|---------|---------------|---------------|-------------|--------|
| h1 | 3.75rem (60px) | 2.5rem (40px) | 1.1 | 700 |
| h2 | 2.25rem (36px) | 1.75rem (28px) | 1.2 | 700 |
| h3 | 1.5rem (24px) | 1.25rem (20px) | 1.3 | 600 |
| h4 | 1.25rem (20px) | 1.125rem (18px) | 1.4 | 600 |
| Body | 1rem (16px) | 1rem (16px) | 1.6 | 400 |
| Small | 0.875rem (14px) | 0.875rem (14px) | 1.5 | 400 |
| Caption | 0.75rem (12px) | 0.75rem (12px) | 1.4 | 500 |

## Spacing

| Token | Value | Usage |
|-------|-------|-------|
| Section padding (desktop) | 96px (py-24) | Between major page sections |
| Section padding (mobile) | 64px (py-16) | Between major page sections |
| Container max-width | 1280px (max-w-7xl) | Content container |
| Card padding | 24px (p-6) | Interior card padding |
| Component gap | 16px (gap-4) | Between sibling components |
| Grid gap | 32px (gap-8) | Between grid items |

## Border Radius
| Element | Value |
|---------|-------|
| Buttons | 8px (rounded-lg) |
| Cards | 12px (rounded-xl) |
| Images | 8px (rounded-lg) |
| Badges | 9999px (rounded-full) |
| Inputs | 8px (rounded-lg) |

## Motion
| Property | Value | Usage |
|----------|-------|-------|
| Default transition | 150ms ease-in-out | Hover states, color changes |
| Entrance | 200ms ease-out | Elements entering view |
| Hover scale | scale(1.02) | Cards, interactive elements |
| Hover opacity | 0.8 → 1.0 | Logo cloud, secondary elements |

## Component Patterns

### Buttons
- **Primary**: `bg-primary text-primary-foreground rounded-lg px-6 py-3 font-medium hover:opacity-90`
- **Secondary**: `bg-accent text-accent-foreground rounded-lg px-6 py-3 font-medium hover:opacity-90`
- **Ghost**: `border border-border text-foreground rounded-lg px-6 py-3 font-medium hover:bg-muted`
- **Link**: `text-primary underline-offset-4 hover:underline`

### Cards
- `bg-white border border-border rounded-xl p-6 hover:shadow-md transition-shadow`
- On muted backgrounds: `bg-white` (stands out against #F5F5F0)
- On white backgrounds: `bg-muted` or `border border-border`

### Section Backgrounds
- Alternate between `bg-background` (white) and `bg-muted` (#F5F5F0) for visual rhythm
- CTA sections use `bg-primary text-primary-foreground`
- Hero sections use `bg-background` with generous whitespace

### Navigation
- Clean horizontal nav with text links, no background until scroll
- On scroll: `bg-white/80 backdrop-blur-sm border-b border-border`
- "Watch Live" CTA button in primary green in the nav

### Images
- Plant photography with `rounded-lg` treatment
- Aspect ratios: hero 16:9, cards 4:3, thumbnails 1:1
- Placeholder: sage green gradient (`from-[#4A7C59]/10 to-[#4A7C59]/5`)
