"use client";

import { Star } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import SectionHeading from "./SectionHeading";

// 1. Update Interface: Sanity returns dates as strings
interface TestimonyCard {
  personName: string;
  personJobTitle: string;
  testimonyDate: string;
  starRating: number;
  testimonyText: string;
}

interface TestimonialData {
  heading: string;
  description: string;
  cards: TestimonyCard[];
}

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 text-teal-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={15}
          className={i < rating ? "fill-teal-400" : "fill-transparent"}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  personName,
  personJobTitle,
  starRating,
  testimonyText,
  testimonyDate,
}: TestimonyCard) {
  // Helper to format the Sanity date string (e.g. "2025-03-01") to "March 2025"
  const formattedDate = new Date(testimonyDate).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 w-80 flex flex-col gap-4 shrink-0">
      <Stars rating={starRating} />
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-4">
        {testimonyText}
      </p>

      <div className="mt-auto">
        <p className="font-semibold text-slate-900 dark:text-white">
          {personName}
        </p>
        <p className="text-xs text-slate-500 dark:text-slate-400">
          {personJobTitle}
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          {formattedDate}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials({ data }: { data: TestimonialData }) {
  // Safe check in case data.cards is undefined
  const testimonials = useMemo(() => {
    return data?.cards || [];
  }, [data?.cards]);

  const [shuffled, setShuffled] = useState<TestimonyCard[]>([]);

  useEffect(() => {
    // 3. This will now only trigger when the actual cards data changes
    setShuffled([...testimonials].sort(() => Math.random() - 0.5));
  }, [testimonials]);

  // If we don't have enough testimonials to scroll smoothly,
  // we can just repeat the original list for the second row as fallback.
  const row2 = shuffled.length > 0 ? shuffled : testimonials;

  if (testimonials.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="py-24 relative bg-background overflow-hidden"
    >
      <SectionHeading
        // 2. Use dynamic Heading/Description
        title={data.heading || "What Our Clients Say"}
        description={data.description}
        variant="light"
        position="right"
      />

      <div className="space-y-6 mt-5">
        {/* ROW 1: Standard Order */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {/* 3. Use dynamic 'testimonials' array */}
            {/* Duplicating array [...x, ...x] ensures smooth marquee loop */}
            {[...testimonials, ...testimonials].map((t, i) => (
              <TestimonialCard {...t} key={`r1-${i}`} />
            ))}
          </div>
        </div>

        {/* ROW 2: Shuffled Order */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse gap-6 translate-x-20">
            {[...row2, ...row2].map((t, i) => (
              <TestimonialCard {...t} key={`r2-${i}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
