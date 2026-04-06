import * as React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  imageUrl: string;
  quote: string;
  author: string;
  role: string;
  gradientFrom?: string;
  gradientVia?: string;
  gradientTo?: string;
  className?: string;
}

export function TestimonialCard({
  imageUrl,
  quote,
  author,
  role,
  gradientFrom = "#4A7C59",
  gradientVia = "#2D6A4F",
  gradientTo = "#1B4332",
  className,
}: TestimonialCardProps) {
  return (
    <div className={cn("max-w-80 rounded-2xl", className)} style={{ backgroundColor: "#1B4332" }}>
      <div className="relative -mt-px overflow-hidden rounded-2xl">
        <img
          src={imageUrl}
          alt={author}
          className="h-[270px] w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top"
        />
        <div
          className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none to-transparent"
          style={{
            backgroundImage: `linear-gradient(to top, #1B4332, transparent)`,
          }}
        />
      </div>
      <div className="px-4 pb-4 text-white">
        <p className="font-medium border-b border-white/20 pb-5">
          &ldquo;{quote}&rdquo;
        </p>
        <p className="mt-4">&mdash; {author}</p>
        <p
          className="text-sm font-medium bg-clip-text text-transparent"
          style={{
            backgroundImage: `linear-gradient(to right, ${gradientFrom}, ${gradientVia}, ${gradientTo})`,
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
