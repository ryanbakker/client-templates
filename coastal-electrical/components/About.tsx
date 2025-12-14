import { PortableText, PortableTextBlock } from "next-sanity";
import { FadeInUp } from "./AnimateOnScroll";
import SectionHeader from "./SectionHeader";

interface AboutProps {
  data?: {
    headline?: string;
    subHeadline?: string;
    body?: PortableTextBlock[];
    cards?: {
      _key: string;
      label: string;
      number: string;
      description: string;
    }[];
  };
}

export default function About({ data }: AboutProps) {
  if (
    !data?.headline ||
    !data?.subHeadline ||
    !data?.body ||
    data.body.length === 0 ||
    !data?.cards ||
    data.cards.length === 0
  ) {
    return null;
  }

  const { headline, subHeadline, body, cards } = data;

  return (
    <section
      id="about"
      className="bg-linear-to-tr from-primary via-primary/97 to-primary py-8"
    >
      <div className="container pt-16 pb-24">
        <SectionHeader
          heading={headline}
          subheading={subHeadline}
          variant="dark"
        />

        {/* Main about text */}
        <div className="max-w-7xl! space-y-5 text-sm sm:text-base text-slate-200 text-center mx-auto w-full!">
          <FadeInUp delay={280} className="w-full!">
            <div className="prose prose-invert prose-sm max-w-7xl! w-full!">
              <PortableText
                value={body}
                components={{
                  block: {
                    normal: ({ children }) => (
                      <p className="pb-4 max-w-2xl! mx-auto w-full!">
                        {children}
                      </p>
                    ),
                  },
                }}
              />
            </div>
          </FadeInUp>
        </div>

        {/* Stats row underneath */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <FadeInUp key={card._key} delay={800 + index * 150}>
              <div className="rounded-2xl border border-slate-700/70 bg-slate-900/40 px-5 py-5 backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-2">
                  {card.label}
                </p>
                <p className="text-3xl font-black text-slate-50 mb-1">
                  {card.number}
                </p>
                <p className="text-xs text-slate-300">{card.description}</p>
              </div>
            </FadeInUp>
          ))}
        </div>
      </div>
    </section>
  );
}
