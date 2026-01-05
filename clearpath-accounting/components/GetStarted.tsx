"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";

interface SanityStep {
  stepTitle: string;
  stepDescription: string;
  imageUrl: string;
}

interface ProcessData {
  heading: string;
  description: string;
  steps: SanityStep[];
}

export default function OurProcess({ data }: { data: ProcessData }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Trigger when step crosses 2/3 down the screen
  useEffect(() => {
    function handleScroll() {
      const triggerY = window.innerHeight * (2 / 3);
      let current = 0;

      stepRefs.current.forEach((el, i) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top < triggerY) {
          current = i;
        }
      });

      setActiveIndex(current);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="get-started"
      className="section bg-radial from-teal-50/80 via-teal-50/50 to-teal-50/20"
    >
      <div className="container mb-24">
        <SectionHeading
          title={data.heading}
          variant="light"
          position="center"
          description={data.description}
        />
      </div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24">
        {/* LEFT — Steps with larger spacing */}
        <aside>
          <ul className="relative space-y-40 pb-12">
            {" "}
            {/* VERY large spacing */}
            {data.steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <li
                  key={index}
                  data-index={index}
                  ref={(el) => {
                    stepRefs.current[index] = el;
                  }}
                  className={`
                    transition-all duration-300 ease-out
                    cursor-default
                    ${isActive ? "opacity-100" : "opacity-40"}
                  `}
                >
                  <span
                    className={`
                      block font-black mb-4
                      ${isActive ? "text-teal-400" : "text-slate-300"}
                    `}
                  >
                    0{index + 1}
                  </span>

                  <h6
                    className={`
                      text-3xl font-heading font-semibold mb-4
                      ${isActive ? "text-foreground" : "text-slate-500"}
                    `}
                  >
                    {step.stepTitle}
                  </h6>

                  <p
                    className={`
                      text-base leading-relaxed max-w-md
                      ${isActive ? "text-slate-500" : "text-slate-400"}
                    `}
                  >
                    {step.stepDescription}
                  </p>
                </li>
              );
            })}
          </ul>
        </aside>

        {/* RIGHT — Sticky images */}
        <div className="relative h-full hidden md:block mb-8">
          <div className="sticky top-28 flex justify-center items-center h-[80vh]">
            {data.steps.map((step, index) => {
              const isActive = index === activeIndex;

              return (
                <Image
                  key={index}
                  src={step.imageUrl}
                  alt={step.stepTitle}
                  width={650}
                  height={650}
                  className={`
                    absolute w-full h-full object-cover rounded-2xl shadow-xl
                    transition-opacity duration-700 ease-out
                    ${isActive ? "opacity-100" : "opacity-0"}
                  `}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
