import * as React from "react";
import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  rating?: number;
  className?: string;
}

export function TestimonialCard({
  quote,
  author,
  role,
  rating = 5,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "max-w-80 rounded-2xl p-6 flex flex-col text-white",
        className
      )}
      style={{ backgroundColor: "#1B4332" }}
    >
      {/* Star rating */}
      <div className="flex gap-0.5 mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${
              star <= rating
                ? "fill-amber-400 text-amber-400"
                : "fill-white/20 text-white/20"
            }`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="font-medium leading-relaxed flex-1">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-5 pt-4 border-t border-white/20">
        <p className="font-semibold">&mdash; {author}</p>
        <p
          className="text-sm font-medium bg-clip-text text-transparent mt-0.5"
          style={{
            backgroundImage:
              "linear-gradient(to right, #6DBF8B, #4A7C59, #2D6A4F)",
          }}
        >
          {role}
        </p>
      </div>
    </div>
  );
}
