import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

interface FooterSectionProps {
  columns: FooterColumn[];
  copyright?: string;
}

export function FooterSection({ columns, copyright }: FooterSectionProps) {
  return (
    <footer className="relative bg-[#1B4332] text-white overflow-hidden">
      {/* Decorative top border */}
      <div className="h-1 bg-gradient-to-r from-[#4A7C59] via-emerald-400 to-[#4A7C59]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute -bottom-10 -right-10 w-60 h-60 opacity-5" viewBox="0 0 240 240" fill="none">
          <circle cx="120" cy="120" r="110" stroke="white" strokeWidth="0.5" />
          <circle cx="120" cy="120" r="80" stroke="white" strokeWidth="0.5" />
          <circle cx="120" cy="120" r="50" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-16 pb-12">
        {/* Brand section */}
        <div className="mb-12 max-w-sm">
          <h2 className="text-2xl font-bold font-[family-name:var(--font-dm-sans)]">
            The Lady Cove
          </h2>
          <p className="mt-3 text-sm text-white/60 leading-6">
            Family-owned rare plant nursery in Florida. Aroids, begonias, hoyas,
            and a whole lot of personality. Join the Cooter Cult.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-white/40">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      {isExternal ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/60 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {copyright && (
          <div className="mt-12 pt-8 border-t border-white/10">
            <p
              className="text-xs text-white/40 text-center"
              dangerouslySetInnerHTML={{ __html: copyright }}
            />
          </div>
        )}
      </div>
    </footer>
  );
}
