import AboutContact from "@/components/AboutContact";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Pricing from "@/components/Pricing";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";
import { getCombinedData } from "@/lib/queries/getCombinedData";
import Image from "next/image";

export default async function Home() {
  const data = await getCombinedData();

  console.log("Data ===> ", data);

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
          <div className="absolute inset-0 bg-linear-to-tr from-cyan-800 via-cyan-600/25 to-teal-400/60 z-10" />

          {/* Heading contrast enhance */}
          <div className="absolute inset-0 bg-linear-to-t from-transparent via-transparent via-80% to-cyan-50/50 z-10" />

          <Image
            src={data.hero.bgImage}
            alt="Our office"
            fill
            className="object-cover object-center md:object-left"
          />
        </div>
      </section>

      <section className="text-center bg-linear-to-tr from-teal-200/60 to-teal-200/30 pt-[22px] pb-4">
        <p className="text-xs font-bold text-teal-900 leading-[6px]">
          {data.promotion.heading}
        </p>
        <span className="text-[10px] text-teal-800">
          {data.promotion.subHeading}
        </span>
      </section>

      <WhyUs />

      <Services />

      <GetStarted data={data.process} />

      <Testimonials data={data.testimonials} />

      <Pricing />

      {/* About / Contact Combined Section */}
      <AboutContact data={data} />

      <Footer />
    </main>
  );
}
