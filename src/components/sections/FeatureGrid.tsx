import {
  Leaf, Heart, Flower2, Sparkles, Package, Flower, Sprout,
  Smartphone, UserPlus, Video, ShoppingCart, Truck,
  ShieldCheck, BookOpen, Pause, Eye, MessageCircle, Zap, Users,
  Mail, TreePine, Mountain, Sun, ArrowUpRight, Droplets,
  Home, Wind, CircleDot, GitBranch, CloudRain, Palette,
  MoveUp, Sparkle, Coffee, Briefcase, Sticker, Shirt,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  leaf: Leaf, heart: Heart, "flower-2": Flower2, sparkles: Sparkles,
  package: Package, flower: Flower, sprout: Sprout, smartphone: Smartphone,
  "user-plus": UserPlus, video: Video, "shopping-cart": ShoppingCart,
  truck: Truck, "shield-check": ShieldCheck, "book-open": BookOpen,
  pause: Pause, eye: Eye, "message-circle": MessageCircle, zap: Zap,
  users: Users, mail: Mail, "tree-pine": TreePine, mountain: Mountain,
  sun: Sun, "arrow-up-right": ArrowUpRight, droplets: Droplets,
  home: Home, wind: Wind, "circle-dot": CircleDot, "git-branch": GitBranch,
  "cloud-rain": CloudRain, palette: Palette, "move-up": MoveUp,
  sparkle: Sparkle, coffee: Coffee, briefcase: Briefcase,
  sticker: Sticker, shirt: Shirt,
};

interface FeatureItem {
  title: string;
  description: string;
  icon?: string;
}

interface FeatureGridProps {
  headline: string;
  subheadline?: string;
  items: FeatureItem[];
  variant?: "default" | "accent" | "image-cards";
}

export function FeatureGrid({
  headline,
  subheadline,
  items,
  variant = "default",
}: FeatureGridProps) {
  const cols =
    items.length <= 2
      ? "sm:grid-cols-2"
      : items.length === 3
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : items.length <= 5
      ? "sm:grid-cols-2 lg:grid-cols-3"
      : "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  const sectionBg = variant === "accent" ? "bg-muted" : "bg-background";

  return (
    <section className={`py-24 sm:py-32 px-6 lg:px-8 ${sectionBg}`}>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-4 text-lg text-muted-foreground">{subheadline}</p>
          )}
        </div>
        <div className={`grid grid-cols-1 ${cols} gap-6`}>
          {items.map((item, index) => {
            const Icon = item.icon ? iconMap[item.icon] : Leaf;
            const gradients = [
              "from-primary/10 to-primary/5",
              "from-emerald-500/10 to-emerald-500/5",
              "from-teal-500/10 to-teal-500/5",
              "from-green-600/10 to-green-600/5",
              "from-lime-500/10 to-lime-500/5",
              "from-cyan-600/10 to-cyan-600/5",
            ];
            const gradient = gradients[index % gradients.length];

            return variant === "image-cards" ? (
              <div
                key={item.title}
                className="group relative rounded-2xl overflow-hidden border border-border transition-all hover:shadow-xl hover:-translate-y-1"
              >
                {/* Decorative top band with gradient */}
                <div className={`h-32 bg-gradient-to-br ${gradient} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    {Icon && <Icon className="h-12 w-12 text-primary/40" />}
                  </div>
                  {/* Decorative botanical circles */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full border border-primary/10" />
                  <div className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full border border-primary/10" />
                </div>
                <div className="p-6 bg-background">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ) : (
              <div
                key={item.title}
                className={`rounded-xl p-6 transition-all hover:shadow-lg hover:-translate-y-0.5 ${
                  variant === "accent"
                    ? "bg-background border border-border"
                    : "bg-muted/50 border border-border/50"
                }`}
              >
                {Icon && (
                  <div className={`mb-4 inline-flex items-center justify-center rounded-xl bg-gradient-to-br ${gradient} p-3`}>
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
