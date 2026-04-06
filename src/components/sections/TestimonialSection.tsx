import { Quote } from "lucide-react";

interface TestimonialItem {
  quote: string;
  author: string;
  role?: string;
  company?: string;
}

interface TestimonialSectionProps {
  headline: string;
  items: TestimonialItem[];
}

export function TestimonialSection({ headline, items }: TestimonialSectionProps) {
  return (
    <section className="relative py-24 sm:py-32 px-6 lg:px-8 bg-muted overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-primary/5 blur-2xl" />
        <div className="absolute bottom-20 left-20 w-56 h-56 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground text-center mb-4">
          {headline}
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-lg mx-auto">
          Real reviews from our community of plant lovers
        </p>
        <div
          className={`grid grid-cols-1 gap-8 ${
            items.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="relative rounded-2xl bg-background border border-border p-8 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <Quote className="h-8 w-8 text-primary/20 mb-4" />
              <blockquote className="flex-1">
                <p className="text-foreground leading-7">
                  {item.quote}
                </p>
              </blockquote>
              <div className="mt-6 pt-6 border-t border-border flex items-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {item.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {item.author}
                  </p>
                  {(item.role || item.company) && (
                    <p className="text-xs text-muted-foreground">
                      {[item.role, item.company].filter(Boolean).join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
