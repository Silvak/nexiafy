type SectionHeadingAlign = "left" | "center";

const alignClasses: Record<SectionHeadingAlign, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
};

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: SectionHeadingAlign;
  className?: string;
}

/** Title + optional subtitle used to introduce every landing section. */
export default function SectionHeading({
  title,
  subtitle,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`flex flex-col ${alignClasses[align]} ${className}`}>
      <h2 className="text-xl font-bold lg:text-2xl">{title}</h2>
      {subtitle ? (
        <p className="mt-5 text-sm text-gray-6 lg:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}
