interface StatItem {
  value: string;
  label: string;
}

interface StatsSectionProps {
  headline?: string;
  items: StatItem[];
}

export function StatsSection({ headline, items }: StatsSectionProps) {
  return (
    <section className="relative py-20 sm:py-24 px-6 lg:px-8 bg-gradient-to-r from-[#1B4332] via-[#2D6A4F] to-[#4A7C59] overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-white" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-white" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {headline && (
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
            {headline}
          </h2>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-white">
                {item.value}
              </div>
              <div className="mt-2 text-sm font-medium text-white/70 uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
