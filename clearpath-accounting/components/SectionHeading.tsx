interface SectionHeadingProps {
  title: string;
  description?: string;
  position: "left" | "right" | "center";
  variant: "light" | "dark";
}

function SectionHeading({
  title,
  description,
  position,
  variant,
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col container ${
        (position === "left" && "items-start text-left") ||
        (position === "center" && "items-center text-center") ||
        (position === "right" && "items-end text-right")
      }`}
    >
      <h3
        className={`font-bold text-3xl lg:text-4xl pb-1 ${
          variant === "light" ? "text-teal-950" : "text-teal-50"
        }`}
      >
        {title}
      </h3>
      <p
        className={`text-sm lg:text-base max-w-[550px] ${
          variant === "light" ? "text-teal-950/70" : "text-teal-50/70"
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
