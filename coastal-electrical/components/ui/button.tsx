import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-primary/40 px-4! cursor-pointer",
  {
    variants: {
      variant: {
        // Strong brand action – works on light & dark backgrounds
        default: "bg-primary text-bg hover:bg-primary/90 shadow-sm",

        // Accent (yellow for Coastal Electrical) – high contrast CTA
        accent: "bg-accent text-dark hover:bg-accent/90 shadow-sm",

        // A modern outline that adapts to light/dark backgrounds
        outline:
          "border border-light/40 text-primary bg-bg hover:bg-light/20 dark:bg-dark dark:border-light/20 dark:hover:bg-light/10",

        // Subtle filled button – for secondary actions on light backgrounds
        secondary:
          "bg-light text-dark hover:bg-light/70 dark:bg-dark/40 dark:text-light dark:hover:bg-dark/60",

        // Transparent minimal button – works anywhere
        ghost: "text-primary hover:bg-primary/10 dark:hover:bg-primary/20",

        // Inline link version using brand primary
        link: "text-primary underline-offset-4 hover:underline",

        primaryLight:
          "bg-accent text-primary hover:bg-white transition-all hover:gap-1.5",
        primaryDark:
          "bg-accent text-primary hover:bg-primary hover:text-accent transition-all hover:gap-1.5",
        secondaryDark:
          "border border-primary text-primary hover:border-accent hover:bg-accent hover:gap-1.5 transition-all",
        secondaryLight:
          "border border-accent text-accent hover:text-primary hover:bg-accent hover:gap-1.5 transition-all",
      },

      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-10! has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
