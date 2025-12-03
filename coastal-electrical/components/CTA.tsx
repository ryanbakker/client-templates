import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="bg-linear-to-tr from-white via-primary/5 to-white">
      <div className="container pt-20 pb-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
          {/* LEFT — Main CTA */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60 mb-3">
              Need an electrician?
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-tight">
              Safe, reliable electrical work — done right the first time.
            </h2>

            <p className="text-dark/70 text-sm sm:text-base max-w-xl mb-8">
              Whether you need urgent repairs, new wiring, or lighting upgrades,
              Coastal Electrical delivers compliant, tidy workmanship with
              straightforward communication from start to finish.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a
                href="tel:0000000000"
                className="
                  inline-flex items-center gap-2 rounded-full 
                  bg-accent px-6 py-2.5 
                  text-sm font-semibold text-white
                  shadow-sm hover:shadow-md
                  hover:bg-accent/90
                  transition-all
                "
              >
                Request a call
                <ArrowRight className="h-4 w-4" />
              </a>

              <a
                href="mailto:example@email.com?subject=Coastal%20Electrical%20Enquiry"
                className="
                  inline-flex items-center gap-2 rounded-full 
                  border border-primary/20
                  px-6 py-2.5 
                  text-sm font-semibold text-primary
                  hover:border-accent/70 hover:text-accent
                  transition-all
                "
              >
                Email our team
              </a>
            </div>
          </div>

          {/* RIGHT — Contact Card */}
          <div
            className="
              rounded-2xl border border-primary/10 
              bg-white/80 backdrop-blur-sm
              px-6 py-7 sm:px-7 sm:py-8
              shadow-[0_10px_35px_rgba(0,0,0,0.07)]
            "
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/60 mb-4">
              Same-day response for urgent work
            </p>

            <div className="space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-dark/50">Call us directly</p>
                  <a
                    href="tel:0000000000"
                    className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                  >
                    00 000 0000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-xs text-dark/50">Send an email</p>
                  <a
                    href="mailto:example@email.com"
                    className="text-sm font-semibold text-primary hover:text-accent transition-colors break-all"
                  >
                    example@email.com
                  </a>
                </div>
              </div>
            </div>

            <p className="mt-6 text-[11px] leading-relaxed text-dark/50">
              Fully licensed and experienced electricians servicing East & South
              Auckland for residential, commercial, and renovation work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
