"use client";

import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useMediaQuery } from "@/lib/useMediaQuery";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Residential Client – Beachlands",
    quote:
      "Coastal Electrical were on time, tidy, and explained everything clearly. The new lighting has completely transformed our home.",
  },
  {
    name: "Mark Wilson",
    role: "Renovation Project – Howick",
    quote:
      "From switchboard upgrades to the last outlet, the team were professional and easy to deal with. Nothing was a problem.",
  },
  {
    name: "Emma Rogers",
    role: "Property Manager",
    quote:
      "Reliable, responsive, and great communication. Coastal Electrical are now our first call for any electrical work on our rentals.",
  },
  {
    name: "David Chen",
    role: "New Build – Whitford",
    quote:
      "The team worked seamlessly with our other trades and delivered on time. Very impressed with the quality of the finish.",
  },
  {
    name: "Lisa Brown",
    role: "Commercial Fit-Out",
    quote:
      "Clear communication from start to finish and no surprises on the invoice. Highly recommend Coastal Electrical.",
  },
];

const TestimonialsCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const visibleCount = isDesktop ? 3 : 1;

  const getVisibleTestimonials = () => {
    const result = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (startIndex + i) % testimonials.length;
      result.push(testimonials[index]);
    }
    return result;
  };

  const handlePrev = () => {
    setStartIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % testimonials.length);
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="mt-6 flex flex-col md:flex-row md:items-center md:gap-4 h-full">
      {/* Cards */}
      <div className="flex-1 grid gap-6 grid-cols-1 md:grid-cols-3 order-1 md:order-0 h-full">
        {visibleTestimonials.map((t) => (
          <article
            key={t.name}
            className="group flex flex-col rounded-2xl border border-slate-700/50 bg-slate-900/40 backdrop-blur-sm px-6 py-7 shadow-md hover:shadow-xl hover:border-accent/60 transition-all h-[300px]"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/20">
                <Quote className="h-5 w-5 text-accent" />
              </div>
            </div>

            <p className="text-slate-100 text-sm md:text-base leading-relaxed flex-1">
              {t.quote}
            </p>

            <div className="mt-6 pt-4 border-t border-slate-700/60">
              <p className="text-slate-50 font-semibold text-sm">{t.name}</p>
              <p className="text-slate-400 text-xs mt-1">{t.role}</p>
            </div>
          </article>
        ))}
      </div>

      {/* Arrow controls (mobile bottom, desktop sides) */}
      <div
        className="
        flex justify-center gap-4 mt-4 
        md:mt-0 md:flex-col md:justify-center md:gap-4
        md:order-0 order-2
      "
      >
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Previous testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-accent hover:border-accent/80 shadow-md transition-colors"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Next testimonials"
          className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-900/80 border border-slate-700/80 text-slate-200 hover:text-accent hover:border-accent/80 shadow-md transition-colors"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-primary">
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading="What Our Clients Say"
          subheading="Trusted by homeowners and property managers across Auckland"
          variant="dark"
        />

        <TestimonialsCarousel />

        {/* Subtle Feedback Link */}
        <div className="mt-10 text-center">
          <a
            href="mailto:example@email.com?subject=Coastal%20Electrical%20Feedback"
            className="text-slate-400 text-sm hover:text-accent transition-colors underline underline-offset-4"
          >
            Give us feedback
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
