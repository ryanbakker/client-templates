import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Info, Mail, Unplug } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full min-h-[75vh] z-0">
      <div className="container z-10 relative py-18">
        <h1 className="text-white text-6xl font-bold max-w-[550px]">
          Reliable Electrical Services in East Auckland
        </h1>
        <h2 className="max-w-[500px] text-accent text-xl pt-3">
          Safe, efficient, and professional electrical solutions for homes and
          businesses.
        </h2>

        <div className="flex flex-col gap-1 mt-12">
          <p className="text-sm font-semibold text-neutral-300 pb-1">
            Get a free quote
          </p>

          <div className="flex flex-row items-center gap-4">
            <Link href="/#contact">
              <Button variant="primaryLight">
                <Mail /> Contact
              </Button>
            </Link>

            <Link href="/#services">
              <Button variant="secondaryLight">
                <Unplug /> Services
              </Button>
            </Link>
          </div>

          <div className="flex items-center gap-1 text-slate-200 bg-slate-50/30 w-fit px-2 py-1 rounded-sm mt-4">
            <Info className="w-3.5 h-3.5" />
            <p className="text-xs">
              Fully licensed and available for urgent callouts.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full h-full absolute bg-linear-to-tr from-primary via-primary/10 to-primary/40 top-0 left-0 z-5" />
      <Image
        src="/images/hero-bg.jpg"
        alt="Hero background"
        width={1000}
        height={700}
        className="w-full h-full object-cover absolute top-0 left-0 -z-10 object-[50%_15%]"
      />
    </section>
  );
};

export default Hero;
