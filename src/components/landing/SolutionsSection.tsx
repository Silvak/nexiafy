import Card from "@/components/common/Card";
import SectionContainer from "@/components/common/SectionContainer";
import SectionHeading from "@/components/common/SectionHeading";
import { solutions } from "@/config/landingContent";

export default function SolutionsSection() {
  return (
    <SectionContainer>
      <div className="flex flex-col gap-16">
        <SectionHeading
          title="Solutions built around your data"
          subtitle="From automation to predictive analytics, every solution is tailored to how your team already works."
        />
        <div className="grid gap-4 lg:grid-cols-2">
          {solutions.map((item) => (
            <Card key={item.title} padding="lg">
              <h3 className="text-lg font-bold text-gray-1">{item.title}</h3>
              <p className="mt-3 text-sm text-gray-6">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
