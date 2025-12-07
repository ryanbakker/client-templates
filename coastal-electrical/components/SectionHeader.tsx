interface SectionHeadingProps {
  heading: string;
  subheading?: string;
  variant?: "light" | "dark";
}

const SectionHeader = ({
  heading,
  subheading,
  variant,
}: SectionHeadingProps) => {
  return (
    <div className="text-center pb-10">
      <h3 className="font-bold text-3xl sm:text-4xl text-accent">{heading}</h3>
      <h4
        className={`font-medium text-sm pt-1 text-primary/70 ${
          variant === "dark" && "text-slate-400"
        }`}
      >
        {subheading}
      </h4>
    </div>
  );
};

export default SectionHeader;
