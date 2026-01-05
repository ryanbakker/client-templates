import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function CardGrid({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 container",
        className
      )}
    >
      {children}
    </div>
  );
}
