"use client";

import { LucideIcon, icons } from "lucide-react"; // Import 'icons' for string lookup
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description?: string;
  // Change type to accept the icon component OR the string name
  icon?: LucideIcon | string;
  children?: React.ReactNode;
  className?: string;
  variant?: "light" | "dark";
}

export function Card({
  title,
  description,
  icon,
  children,
  className,
  variant = "light",
}: CardProps) {
  const isDark = variant === "dark";

  // 1. Resolve the Icon:
  // If it's a string, look it up in the Lucide icons object.
  // If it's already a component, use it as is.
  const RenderIcon = typeof icon === "string" ? (icons as any)[icon] : icon;

  return (
    <div
      className={cn(
        "group relative rounded-2xl p-6 transition-all duration-300 ease-out",
        isDark
          ? "bg-teal-900/80 border-teal-700 text-white"
          : "bg-white/90 border-teal-900/10 text-foreground",
        "backdrop-blur-sm border",
        "hover:-translate-y-[3px] hover:shadow-lg hover:border-teal-400/60",
        isDark && "hover:border-teal-300!",
        "before:absolute before:inset-0 before:rounded-2xl before:opacity-0",
        "before:bg-linear-to-br before:from-teal-400/10 before:to-teal-500/10",
        "before:transition-opacity before:duration-300",
        "group-hover:before:opacity-100",
        className
      )}
    >
      {/* 2. Render the resolved icon */}
      {RenderIcon && (
        <div
          className={cn(
            "mb-4 flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300",
            isDark
              ? "bg-teal-800 border-teal-700 text-teal-300"
              : "bg-teal-50 border-teal-100 text-teal-600",
            "group-hover:border-teal-400/50 group-hover:text-teal-600"
          )}
        >
          <RenderIcon className="h-6 w-6" strokeWidth={1.75} />
        </div>
      )}

      <h3
        className={cn(
          "text-xl font-heading font-semibold mb-2",
          isDark ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </h3>

      {description && (
        <p
          className={cn(
            "text-sm leading-relaxed mb-3",
            isDark ? "text-teal-100" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}

      {children}
    </div>
  );
}
