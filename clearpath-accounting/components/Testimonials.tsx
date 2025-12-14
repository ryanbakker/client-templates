"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";

const TESTIMONIALS = [
  {
    name: "Sarah Thompson",
    title: "Small Business Owner",
    rating: 5,
    date: "March 2025",
    review:
      "Clearpath made our bookkeeping effortless. Every month is accurate, timely, and clearly explained. Their advice has genuinely improved our financial decision-making.",
  },
  {
    name: "Michael Chen",
    title: "Independent Consultant",
    rating: 3,
    date: "February 2025",
    review:
      "I finally feel in control of my finances. Transparent processes, proactive communication, and genuinely friendly support.",
  },
  {
    name: "Emma Rodgers",
    title: "Property Manager",
    rating: 4,
    date: "January 2025",
    review:
      "Reliable and consistent. The reports are clean and easy to understand — a huge upgrade from what we had before.",
  },
  {
    name: "David Patel",
    title: "E-commerce Founder",
    rating: 4,
    date: "December 2024",
    review:
      "Clearpath helped streamline our growth stage. Their forecasting and cash flow insight were genuinely game-changing.",
  },
  {
    name: "Laura Williams",
    title: "Nonprofit Director",
    rating: 5,
    date: "November 2024",
    review:
      "They understand the unique accounting needs of nonprofits. Consistent, accurate, and supportive every step of the way.",
  },
];

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

function TestimonialCard({ name, title, rating, review, date }: any) {
  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm p-6 w-80 flex flex-col gap-4">
      <Stars rating={rating} />
      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
        {review}
      </p>

      <div className="mt-auto">
        <p className="font-semibold text-slate-900 dark:text-white">{name}</p>
        <p className="text-xs text-slate-500 dark:text-slate-400">{title}</p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          {date}
        </p>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [shuffled, setShuffled] = useState<typeof TESTIMONIALS>([]);

  useEffect(() => {
    setShuffled([...TESTIMONIALS].sort(() => Math.random() - 0.5));
  }, []);

  const row2 = shuffled.length ? shuffled : TESTIMONIALS;

  return (
    <section className="py-24 relative bg-background overflow-hidden">
      <SectionHeading
        title="What Our Clients Say"
        description="Our clients come from a range of industries, but they share the same goal: to understand their numbers and feel in control. Here’s what they’ve said about working with us."
        variant="light"
        position="right"
      />

      <div className="space-y-6">
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee gap-6">
            {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
              <TestimonialCard {...t} key={`r1-${i}`} />
            ))}
          </div>
        </div>

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
