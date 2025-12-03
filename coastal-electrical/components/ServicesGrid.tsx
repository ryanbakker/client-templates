import { Zap, Home, Lightbulb, Plug, PanelLeft, Building } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

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

const services = [
  {
    title: "Emergency Repairs",
    description: "Fast and reliable fault finding and urgent electrical fixes.",
    icon: Zap,
  },
  {
    title: "New Build & Renovation Wiring",
    description:
      "Safe, compliant wiring for new homes, extensions, and remodels.",
    icon: Home,
  },
  {
    title: "Lighting Installation",
    description:
      "Indoor and outdoor lighting, LEDs, security lighting, and upgrades.",
    icon: Lightbulb,
  },
  {
    title: "Outlets & Power Points",
    description:
      "New power points, rewiring, appliance circuits, and EV chargers.",
    icon: Plug,
  },
  {
    title: "Switchboard Upgrades",
    description: "Upgrade outdated boards to modern, safe, compliant systems.",
    icon: PanelLeft,
  },
  {
    title: "Commercial Electrical",
    description:
      "Maintenance and electrical fit-outs for offices and small businesses.",
    icon: Building,
  },
];

export function ServicesGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard
          key={service.title}
          title={service.title}
          description={service.description}
          icon={service.icon}
        />
      ))}
    </div>
  );
}
