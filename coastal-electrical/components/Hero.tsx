"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Info, Mail, Unplug } from "lucide-react";
import { FadeInUp } from "./AnimateOnScroll";
import { useParallax } from "@/lib/useParallax";

const Hero = () => {
  const offset = useParallax(0.5);

  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden -mt-16">
      {/* PARALLAX BG IMAGE (always at top of header) */}
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        width={1400}
        height={900}
        priority
        className="absolute inset-0 w-full h-full object-cover -z-30 object-[50%_15%] will-change-transform"
        style={{
          transform: `translateY(${offset}px)`,
        }}
      />

      {/* GRADIENT OVERLAY */}
      <div
        className="absolute inset-0 bg-linear-to-tr 
        from-primary via-primary/40 md:via-primary/10 to-primary/40 
        pointer-events-none -z-10"
      />

      {/* HERO CONTENT */}
      <div className="container relative z-10 pt-36">
        <FadeInUp delay={300}>
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold max-w-[550px]">
            Reliable Electrical Services in East Auckland
          </h1>
        </FadeInUp>

        <FadeInUp delay={500}>
          <h2 className="max-w-[500px] text-accent text-lg sm:text-xl pt-3">
            Safe, efficient, and professional electrical solutions for homes and
            businesses.
          </h2>
        </FadeInUp>

        <FadeInUp delay={700}>
          <div className="flex flex-col gap-1 mt-12">
            <p className="text-xs sm:text-sm font-semibold text-neutral-300 pb-1">
              Get a free quote
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <FadeInUp delay={900} className="w-full sm:w-auto">
                <Link href="/#contact">
                  <Button variant="primaryLight" className="w-full sm:w-auto">
                    <Mail /> Contact
                  </Button>
                </Link>
              </FadeInUp>

              <FadeInUp delay={1050} className="w-full sm:w-auto">
                <Link href="/#services">
                  <Button variant="secondaryLight" className="w-full sm:w-auto">
                    <Unplug /> Services
                  </Button>
                </Link>
              </FadeInUp>
            </div>

            <FadeInUp delay={1300}>
              <div className="flex items-center gap-1 text-slate-200 bg-slate-50/30 w-fit px-2 py-1 rounded-sm mt-4">
                <Info className="w-3.5 h-3.5" />
                <p className="text-xs">
                  Fully licensed and available for urgent callouts.
                </p>
              </div>
            </FadeInUp>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
};

export default Hero;
