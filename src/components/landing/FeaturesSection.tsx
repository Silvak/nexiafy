import Card from "@/components/common/Card";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { features } from "@/config/landingContent";

/**
 * Feature cards use a tighter mobile gutter (12px) than the rest of the
 * page (20px), matching the reference. `fullBleed` drops the default
 * gutter so each inner block can set its own horizontal padding.
 */
export default function FeaturesSection() {
  return (
    <SectionContainer fullBleed>
      <div className="px-5 lg:px-0">
        <SectionHeading
          title="Everything you need to ship AI products"
          subtitle="Expertise, infrastructure and ongoing support in a single partner."
        />
      </div>
      <div className="mt-16 grid grid-cols-2 gap-3 px-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 lg:px-0">
        {features.map((feature) => (
          <Card key={feature.title} padding="md">
            <h3 className="text-sm font-bold text-gray-1 lg:text-base">
              {feature.title}
            </h3>
            <p className="mt-2 text-xs text-gray-6 lg:text-sm">
              {feature.description}
            </p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
