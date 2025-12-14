import { Check, Smartphone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

function Pricing() {
  return (
    <section
      className="section relative
        bg-white
        bg-linear-to-br
        from-teal-950/90
        via-teal-950
        to-teal-950/90
        text-white"
    >
      <div className="max-w-5xl mx-auto p-4">
        <SectionHeading
          title="Simple, Transparent Pricing"
          description="Every business is different, but that doesn't mean your accounting fees should be a mystery. We work with clear, predictable packages and will always confirm pricing with you before we start."
          position="center"
          variant="dark"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-10 mt-4">
          {/* LEFT COLUMN (2/3 width, stacked) */}
          <div className="lg:col-span-2 space-y-3 md:space-y-10 h-full sm:grid sm:grid-cols-2 md:block gap-4 sm:gap-6">
            {/* === Plan 1 Card === */}
            <div className="plan-card">
              <div className="flex flex-col">
                <h3 className="text-2xl font-heading font-bold mb-1">
                  Essentials
                </h3>

                <p className="text-slate-300 max-w-md">
                  Ideal for sole traders and small businesses needing reliable
                  bookkeeping and BAS support.
                </p>

                <p className="text-4xl font-bold my-4 text-teal-400">
                  $199
                  <span className="text-lg text-teal-400/50 font-normal">
                    /mo
                  </span>
                </p>

                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400" /> Weekly
                    bookkeeping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400" /> BAS/GST
                    lodgements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-400" /> Email support
                  </li>
                </ul>
              </div>
            </div>

            <div className="plan-card">
              <div className="flex flex-col">
                <h3 className="text-2xl font-heading font-bold mb-1">
                  Enterprise
                </h3>

                <p className="text-slate-300 max-w-md">
                  For businesses needing close financial partnership,
                  forecasting, and proactive support.
                </p>

                <p className="text-4xl font-bold my-4 text-cyan-400">
                  $500
                  <span className="text-lg text-cyan-400/50 font-normal">
                    /mo
                  </span>
                </p>

                <ul className="space-y-2 text-slate-300 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" /> Weekly
                    bookkeeping
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" /> BAS/GST
                    lodgements
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-cyan-400" /> Email support
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (1/3 width, full height) */}
          <div className="lg:row-span-2 mb-10">
            <div className="highlighted-plan-card">
              <div>
                <span className="text-sm text-teal-950 font-light">
                  Most Popular
                </span>
                <h3 className="text-3xl font-heading font-bold mb-1 text-teal-950 mt-4">
                  Growth
                </h3>

                <p className="text-teal-950/60 mb-6 max-w-md">
                  Perfect for growing businesses needing deeper reporting and
                  advisory support.
                </p>

                <p className="text-5xl font-bold mb-8 text-teal-900">
                  $349
                  <span className="text-xl text-teal-900/50 font-normal">
                    /mo
                  </span>
                </p>

                <ul className="space-y-4 text-teal-900 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-950" /> Dedicated
                    financial advisor
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-950" /> Monthly
                    management reports
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-950" /> Unlimited
                    support
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-teal-950" /> Annual tax
                    returns included
                  </li>
                </ul>
              </div>
            </div>

            <Link href="tel:099999999">
              <button className="w-fit bg-teal-50 text-teal-900 hover:bg-teal-900 font-semibold rounded-full flex flex-row items-center text-sm py-2 px-2 transition-all hover:text-teal-50 cursor-pointer mt-8 mx-auto">
                <span className="px-3">Get started today</span>
                <Smartphone className="bg-teal-900 rounded-full text-teal-50 p-2 h-8.5 w-8.5" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
