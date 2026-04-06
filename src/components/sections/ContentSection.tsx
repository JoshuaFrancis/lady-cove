interface ContentSectionProps {
  headline: string;
  body: string;
  variant?: "default" | "accent" | "side-image";
  imagePosition?: "left" | "right";
  imageUrl?: string;
}

export function ContentSection({
  headline,
  body,
  variant = "default",
  imagePosition = "right",
  imageUrl,
}: ContentSectionProps) {
  const paragraphs = body.split("\n\n").filter((p) => p.trim());
  const bgClass = variant === "accent" ? "bg-muted" : "bg-background";

  if (variant === "side-image") {
    return (
      <section className={`py-24 sm:py-32 px-6 lg:px-8 ${bgClass}`}>
        <div className="mx-auto max-w-7xl">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imagePosition === "left" ? "lg:grid-flow-dense" : ""}`}>
            <div className={imagePosition === "left" ? "lg:col-start-2" : ""}>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
                {headline}
              </h2>
              <div className="mt-6 space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-7 text-muted-foreground">
                    {p.trim()}
                  </p>
                ))}
              </div>
            </div>
            <div className={`relative ${imagePosition === "left" ? "lg:col-start-1" : ""}`}>
              <div className="aspect-[4/3] rounded-2xl overflow-hidden relative">
                <img
                  src={imageUrl || "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=800&auto=format&fit=crop"}
                  alt={headline}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-xl bg-primary/10 -z-10" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-24 sm:py-32 px-6 lg:px-8 ${bgClass}`}>
      <div className="mx-auto max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
          {headline}
        </h2>
        <div className="mt-6 space-y-4">
          {paragraphs.map((p, i) => (
            <p key={i} className="text-base leading-7 text-muted-foreground">
              {p.trim()}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
