import {
  Zap,
  Home,
  Lightbulb,
  Plug,
  PanelLeft,
  Building,
  type LucideIcon,
} from "lucide-react";
import { FadeInUp } from "./AnimateOnScroll";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

// Icon mapping for Sanity data
const iconMap: Record<string, LucideIcon> = {
  Zap,
  Home,
  Lightbulb,
  Plug,
  PanelLeft,
  Building,
};

// Accent used: text-accent, bg-accent/xx, border-accent/xx
// Assumes your accent color is orange in your Tailwind theme.

export function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div
      className="
          group relative rounded-2xl p-6
          border border-slate-300/50
          bg-white/90
          shadow-sm
          overflow-hidden
          transition-all duration-300
          hover:-translate-y-1 hover:shadow-xl
          hover:border-accent/60
        "
    >
      {/* Animated orange top bar */}
      <span
        className="
            pointer-events-none absolute left-0 right-0 top-0 h-1
            bg-accent/80
            opacity-0 scale-x-0 origin-left
            rounded-t-2xl
            transition-all duration-300
            group-hover:opacity-100 group-hover:scale-x-100
          "
      />

      {/* Accent gradient on hover */}
      <div
        className="
            pointer-events-none absolute inset-0
            bg-linear-to-br from-accent/10 via-transparent to-accent/5
            opacity-0 transition-opacity duration-300
            group-hover:opacity-100
          "
      />

      {/* Icon */}
      <div
        className="
            mb-4 flex h-12 w-12 items-center justify-center rounded-xl
            bg-accent/15 text-accent
            transition-all duration-300
            group-hover:bg-accent/25
            group-hover:scale-110
            group-hover:shadow-[0_0_15px_rgba(251,146,60,0.45)]
          "
      >
        <Icon className="h-6 w-6" />
      </div>

      {/* Title */}
      <h3
        className="
            mb-2 text-lg font-semibold text-dark
            transition-colors duration-300
            group-hover:text-accent
          "
      >
        {title}
      </h3>

      {/* Description */}
      <p
        className="
            text-sm leading-relaxed text-dark/70
            transition-colors duration-300
            group-hover:text-dark
          "
      >
        {description}
      </p>
    </div>
  );
}

interface ServicesGridProps {
  services: Array<{
    title: string;
    description: string;
    icon?: string;
  }>;
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => {
        const IconComponent = iconMap[service.icon || ""] || Zap;
        return (
          <FadeInUp
            key={service.title}
            delay={index * 20}
            distance={25}
            duration={600}
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={IconComponent}
            />
          </FadeInUp>
        );
      })}
    </div>
  );
}
