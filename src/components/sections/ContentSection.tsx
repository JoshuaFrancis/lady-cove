interface ContentSectionProps {
  headline: string;
  body: string;
  variant?: "default" | "accent" | "side-image";
  imagePosition?: "left" | "right";
}

export function ContentSection({
  headline,
  body,
  variant = "default",
  imagePosition = "right",
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
            {/* Decorative image placeholder */}
            <div className={`relative ${imagePosition === "left" ? "lg:col-start-1" : ""}`}>
              <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/15 via-primary/10 to-emerald-600/5 overflow-hidden relative">
                {/* Botanical decorative pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 400 300" fill="none">
                  <path d="M200 250 Q200 150 250 100 Q300 50 280 20" stroke="#4A7C59" strokeWidth="2" fill="none" />
                  <path d="M250 100 Q220 80 200 100" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
                  <path d="M250 100 Q280 80 260 60" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
                  <path d="M230 140 Q200 120 190 140" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
                  <path d="M230 140 Q260 130 240 110" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
                  <path d="M215 180 Q185 160 180 180" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
                  <path d="M215 180 Q240 170 225 150" stroke="#4A7C59" strokeWidth="1.5" fill="none" />
                  <circle cx="100" cy="200" r="60" stroke="#4A7C59" strokeWidth="0.5" opacity="0.3" />
                  <circle cx="320" cy="80" r="40" stroke="#4A7C59" strokeWidth="0.5" opacity="0.3" />
                </svg>
                {/* Center leaf icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-10 h-10 text-primary/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22L6.66 19.7C7.14 19.87 7.64 20 8 20C19 20 22 3 22 3C21 5 14 5.25 9 6.25C4 7.25 2 11.5 2 13.5C2 15.5 3.75 17.25 3.75 17.25" />
                    </svg>
                  </div>
                </div>
              </div>
              {/* Offset decorative element */}
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
