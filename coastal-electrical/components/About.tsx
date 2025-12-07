import { FadeInUp } from "./AnimateOnScroll";
import SectionHeader from "./SectionHeader";

const About = () => {
  return (
    <section
      id="about"
      className="bg-linear-to-tr from-primary via-primary/97 to-primary py-8"
    >
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading="About Coastal Electrical"
          subheading="Local, reliable electricians serving East & South Auckland"
          variant="dark"
        />

        {/* Main about text */}
        <div className="pb-6 max-w-3xl space-y-5 text-sm sm:text-base text-slate-200 text-center mx-auto">
          <FadeInUp delay={200}>
            <p>
              Coastal Electrical was founded to make electrical work simple,
              safe, and transparent for homeowners and businesses. We combine
              tidy workmanship with clear communication, so you always know
              what&apos;s happening on your job.
            </p>
          </FadeInUp>

          <FadeInUp delay={400}>
            <p>
              From emergency call-outs to full new builds, we focus on doing the
              basics right: turning up when we say we will, working safely to
              current standards, and leaving your space as clean as we found it.
            </p>
          </FadeInUp>

          <FadeInUp delay={600}>
            <p>
              We work across East and South Auckland and are experienced in
              residential, renovation, and light commercial projects.
            </p>
          </FadeInUp>
        </div>

        {/* Stats row underneath */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <FadeInUp delay={800}>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 px-5 py-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Experience
              </p>
              <p className="text-3xl font-black text-slate-50 mb-1">10+</p>
              <p className="text-xs text-slate-300">
                Years working in residential and commercial electrical.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={950}>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 px-5 py-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Local focus
              </p>
              <p className="text-3xl font-black text-slate-50 mb-1">
                East &amp; South
              </p>
              <p className="text-xs text-slate-300">
                Servicing East Auckland, South Auckland, and surrounding areas.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={1100}>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 px-5 py-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Safety first
              </p>
              <p className="text-3xl font-black text-slate-50 mb-1">Licensed</p>
              <p className="text-xs text-slate-300">
                Fully qualified and operating to current NZ electrical
                standards.
              </p>
            </div>
          </FadeInUp>

          <FadeInUp delay={1250}>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 px-5 py-5 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                Approach
              </p>
              <p className="text-3xl font-black text-slate-50 mb-1">
                Tidy work
              </p>
              <p className="text-xs text-slate-300">
                Clear communication, clean finishes, and honest pricing.
              </p>
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  );
};

export default About;
