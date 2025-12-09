import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="relative min-h-[85vh] grid grid-rows-[auto_1fr_auto]">
        {/* Header pinned top-left + top-right */}
        <div className="relative z-100">
          <Header />
        </div>

        {/* Spacer row (used to stretch the hero to the bottom) */}
        <div />

        {/* Hero pinned bottom-right */}
        <div className="relative z-10 flex justify-start">
          <Hero />
        </div>

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          {/* Hero gradient fill */}
          <div className="absolute inset-0 bg-linear-to-tr from-cyan-800 via-cyan-500/15 to-teal-400/60 z-10" />

          {/* Heading contrast enhance */}
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent via-80% to-cyan-50/50 z-10" />

          <Image
            src="/images/hero-bg.jpg"
            alt="Our office"
            fill
            className="object-cover object-center md:object-left"
          />
        </div>
      </section>

      <section className="text-center bg-teal-200/40 pt-[22px] pb-4">
        <p className="text-xs font-bold text-teal-900 leading-[6px]">
          Join today for 1 month free book keeping!
        </p>
        <span className="text-[10px] text-teal-800">
          Focus on Growth, We&apos;ll Handle the Numbers.
        </span>
      </section>

      <Footer />
    </main>
  );
}
