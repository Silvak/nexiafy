import ScrollReveal from "@/components/landing/ScrollReveal";
import type { IconFeature } from "@/config/quantum/types";

interface IconFeatureGridProps {
  title?: string;
  features: IconFeature[];
  columns?: "two" | "three";
}

export default function IconFeatureGrid({
  title,
  features,
  columns = "two",
}: IconFeatureGridProps) {
  const gridCols =
    columns === "three"
      ? "grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 lg:grid-cols-3"
      : "grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8";

  return (
    <section className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      {title ? (
        <ScrollReveal variant="single" direction="y">
          <h2 className="text-center text-lg font-bold md:text-2xl">{title}</h2>
        </ScrollReveal>
      ) : null}
      <ScrollReveal variant="group" direction="y" className={`grid ${gridCols}`}>
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <ScrollReveal
              key={feature.id}
              variant="groupItem"
              direction="y"
              className="flex flex-col items-center gap-8 rounded-[20px] bg-gray-11 p-8 text-center md:rounded-4xl md:px-12 md:py-14"
            >
              <Icon
                className={`h-8 w-8 ${feature.iconColorClass}`}
                strokeWidth={2}
                aria-hidden
              />
              <h3 className="text-lg font-medium">{feature.title}</h3>
              {feature.description ? (
                <p className="text-gray-6">{feature.description}</p>
              ) : null}
            </ScrollReveal>
          );
        })}
      </ScrollReveal>
    </section>
  );
}
