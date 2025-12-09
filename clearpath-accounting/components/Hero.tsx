import Link from "next/link";
import { Archive } from "lucide-react";

function Hero() {
  return (
    <div className="container flex flex-col mb-5">
      <h1 className="text-white font-extrabold tracking-normal text-3xl max-w-[350px] xs:text-4xl xs:max-w-[430px] md:text-5xl md:max-w-[470px]">
        Clear Financial Direction, with Grounded Expertise
      </h1>
      <h2 className="pt-2 text-white/70 font-medium text-sm max-w-[250px] md:text-base md:max-w-full">
        Get in touch today, to start reaching your financial goals.
      </h2>

      <Link href="/#services" className="w-fit mt-4">
        <button className="w-fit bg-teal-50 text-teal-900 hover:bg-teal-900 font-semibold rounded-full flex flex-row items-center text-sm py-1 px-1.5 transition-all hover:text-teal-50 cursor-pointer">
          <Archive className="bg-teal-900 rounded-full text-teal-50 p-1.5 h-7 w-7" />
          <span className="px-3">See our services</span>
        </button>
      </Link>
    </div>
  );
}

export default Hero;
