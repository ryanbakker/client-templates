import { Check, Smartphone } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { getPricing } from "@/lib/queries/getPricing";

async function Pricing() {
  const data = await getPricing();
  const plans = data.plans;

  console.log("DATA ====>>>, ", plans);

  return (
    <section
      id="pricing"
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
          title={data.heading}
          description={data.description}
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
                  {plans[0].planTitle}
                </h3>

                <p className="text-slate-300 max-w-md">
                  {plans[0].planDescription}
                </p>

                <p className="text-4xl font-bold my-4 text-teal-400">
                  ${plans[0].price}
                  <span className="text-lg text-teal-400/50 font-normal">
                    /mo
                  </span>
                </p>

                <ul className="space-y-2 text-slate-300 text-sm">
                  {plans[0].featuresList.map(
                    (feature: string, index: number) => (
                      <li className="flex items-center gap-2" key={index}>
                        <Check className="w-4 h-4 text-cyan-400" /> {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <div className="plan-card">
              <div className="flex flex-col">
                <h3 className="text-2xl font-heading font-bold mb-1">
                  {plans[2].planTitle}
                </h3>

                <p className="text-slate-300 max-w-md">
                  {plans[2].planDescription}
                </p>

                <p className="text-4xl font-bold my-4 text-cyan-400">
                  ${plans[2].price}
                  <span className="text-lg text-cyan-400/50 font-normal">
                    /mo
                  </span>
                </p>

                <ul className="space-y-2 text-slate-300 text-sm">
                  {plans[2].featuresList.map(
                    (feature: string, index: number) => (
                      <li className="flex items-center gap-2" key={index}>
                        <Check className="w-4 h-4 text-cyan-400" /> {feature}
                      </li>
                    )
                  )}
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
                <h3 className="text-3xl font-heading font-extrabold mb-1 text-teal-950 mt-4">
                  {plans[1].planTitle}
                </h3>

                <p className="text-teal-950/60 mb-6 max-w-md">
                  {plans[1].planDescription}
                </p>

                <p className="text-5xl font-bold mb-8 text-teal-900">
                  ${plans[1].price}
                  <span className="text-xl text-teal-900/50 font-normal">
                    /mo
                  </span>
                </p>

                <ul className="space-y-4 text-teal-900 text-sm">
                  {plans[1].featuresList.map(
                    (feature: string, index: number) => (
                      <li className="flex items-center gap-2" key={index}>
                        <Check className="w-4 h-4 text-teal-950" /> {feature}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <Link href={`tel:${data.actionButtonPhone}`}>
              <button className="w-fit bg-teal-50 text-teal-900 hover:bg-teal-900 font-semibold rounded-full flex flex-row items-center text-sm py-2 px-2 transition-all hover:text-teal-50 cursor-pointer mt-8 mx-auto">
                <span className="px-3">{plans[1].actionButton}</span>
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
