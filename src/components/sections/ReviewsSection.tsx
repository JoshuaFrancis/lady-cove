"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  quote: string;
  author: string;
  source: "Facebook" | "Etsy" | "Palmstreet" | "Google";
  rating: number;
  date?: string;
}

interface ReviewsSectionProps {
  headline: string;
  subheadline?: string;
  reviews: Review[];
  stats?: {
    totalReviews: number;
    averageRating: number;
    recommendRate: number;
  };
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-amber-400 text-amber-400"
              : "fill-gray-200 text-gray-200"
          }`}
        />
      ))}
    </div>
  );
}

const sourceColors: Record<string, string> = {
  Facebook: "bg-blue-100 text-blue-700",
  Etsy: "bg-orange-100 text-orange-700",
  Palmstreet: "bg-green-100 text-green-700",
  Google: "bg-red-100 text-red-700",
};

export function ReviewsSection({
  headline,
  subheadline,
  reviews,
  stats,
}: ReviewsSectionProps) {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < reviews.length;

  const visibleReviews = reviews.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="relative py-24 sm:py-32 px-6 lg:px-8 bg-muted overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-16 right-16 w-48 h-48 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-16 left-16 w-64 h-64 rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            {headline}
          </h2>
          {subheadline && (
            <p className="mt-3 text-lg text-muted-foreground max-w-lg mx-auto">
              {subheadline}
            </p>
          )}

          {/* Stats bar */}
          {stats && (
            <div className="mt-8 inline-flex items-center gap-8 rounded-2xl bg-background border border-border px-8 py-4 shadow-sm">
              <div className="text-center">
                <div className="flex items-center gap-1.5">
                  <span className="text-2xl font-bold text-foreground">
                    {stats.averageRating}
                  </span>
                  <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Average Rating
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">
                  {stats.totalReviews.toLocaleString()}+
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Total Reviews
                </p>
              </div>
              <div className="w-px h-8 bg-border" />
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">
                  {stats.recommendRate}%
                </div>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Recommend
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Navigation arrows */}
        {reviews.length > visibleCount && (
          <div className="flex justify-end gap-2 mb-6">
            <button
              onClick={() => setStartIndex(Math.max(0, startIndex - 1))}
              disabled={!canPrev}
              className="p-2 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="h-4 w-4 text-foreground" />
            </button>
            <button
              onClick={() =>
                setStartIndex(
                  Math.min(reviews.length - visibleCount, startIndex + 1)
                )
              }
              disabled={!canNext}
              className="p-2 rounded-lg border border-border bg-background hover:bg-muted disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next reviews"
            >
              <ChevronRight className="h-4 w-4 text-foreground" />
            </button>
          </div>
        )}

        {/* Review cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((review, i) => (
            <div
              key={startIndex + i}
              className="rounded-2xl bg-background border border-border p-7 flex flex-col shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <StarRating rating={review.rating} />
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    sourceColors[review.source] || "bg-gray-100 text-gray-700"
                  }`}
                >
                  {review.source}
                </span>
              </div>

              <blockquote className="flex-1 mb-5">
                <p className="text-foreground leading-7 text-[0.95rem]">
                  &ldquo;{review.quote}&rdquo;
                </p>
              </blockquote>

              <div className="pt-4 border-t border-border flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary font-semibold text-sm">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">
                    {review.author}
                  </p>
                  {review.date && (
                    <p className="text-xs text-muted-foreground">
                      {review.date}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots indicator */}
        {reviews.length > visibleCount && (
          <div className="flex justify-center gap-1.5 mt-8">
            {Array.from({
              length: reviews.length - visibleCount + 1,
            }).map((_, i) => (
              <button
                key={i}
                onClick={() => setStartIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === startIndex ? "bg-primary" : "bg-border"
                }`}
                aria-label={`Go to review set ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
