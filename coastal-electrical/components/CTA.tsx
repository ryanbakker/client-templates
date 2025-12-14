import { Phone, Mail, ReceiptText } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import { FadeInLeft, FadeInUp } from "./AnimateOnScroll";

interface CTAProps {
  data?: {
    badge?: string;
    heading?: string;
    description?: string;
    primaryButtonText?: string;
    secondaryButtonText?: string;
    contactCardTitle?: string;
    phone?: string;
    email?: string;
    contactCardFooter?: string;
  };
}

const CTA = ({ data }: CTAProps) => {
  if (
    !data?.badge ||
    !data?.heading ||
    !data?.description ||
    !data?.primaryButtonText ||
    !data?.secondaryButtonText ||
    !data?.contactCardTitle ||
    !data?.phone ||
    !data?.email ||
    !data?.contactCardFooter
  ) {
    return null;
  }

  const {
    badge,
    heading,
    description,
    primaryButtonText,
    secondaryButtonText,
    contactCardTitle,
    phone,
    email,
    contactCardFooter,
  } = data;

  return (
    <section className="bg-linear-to-tr from-white via-primary/5 to-white shadow-xl shadow-black">
      <div className="container pt-20 pb-24">
        <div className="grid gap-12 md:grid-cols-[minmax(0,2fr)_minmax(0,1.2fr)] items-center">
          {/* LEFT — Main CTA */}
          <div>
            <FadeInUp delay={200}>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary/60 mb-3">
                {badge}
              </p>
            </FadeInUp>

            <FadeInUp delay={400}>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-7 md:leading-8 lg:leading-10">
                {heading}
              </h2>
            </FadeInUp>

            <FadeInUp delay={600}>
              <p className="text-dark/70 text-sm sm:text-base max-w-xl mb-8">
                {description}
              </p>
            </FadeInUp>

            <div className="flex flex-wrap items-center gap-4">
              <FadeInUp delay={700} className="w-full sm:w-auto">
                <Link href="/#contact">
                  <Button variant="primaryDark" className="w-full sm:w-auto">
                    {primaryButtonText}
                    <ReceiptText />
                  </Button>
                </Link>
              </FadeInUp>

              <FadeInUp delay={800} className="w-full sm:w-auto">
                <Link
                  href={`mailto:${email}?subject=Coastal%20Electrical%20Enquiry`}
                >
                  <Button variant="secondaryDark" className="w-full sm:w-auto">
                    {secondaryButtonText} <Mail />
                  </Button>
                </Link>
              </FadeInUp>
            </div>
          </div>

          {/* RIGHT — Contact Card */}
          <FadeInLeft delay={600}>
            <div
              className="
            rounded-2xl border border-primary/10 
            bg-white/80 backdrop-blur-sm
            px-6 py-7 sm:px-7 sm:py-8
            shadow-[0_10px_35px_rgba(0,0,0,0.07)]
            "
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/60 mb-4">
                {contactCardTitle}
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
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="text-sm font-semibold text-primary hover:text-accent transition-colors"
                    >
                      {phone}
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
                      href={`mailto:${email}`}
                      className="text-sm font-semibold text-primary hover:text-accent transition-colors break-all"
                    >
                      {email}
                    </a>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[11px] leading-relaxed text-dark/50">
                {contactCardFooter}
              </p>
            </div>
          </FadeInLeft>
        </div>
      </div>
    </section>
  );
};

export default CTA;
