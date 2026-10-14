import Card from "@/components/common/Card";
import SectionContainer from "@/components/common/SectionContainer";
import { stats } from "@/config/landingContent";

export default function StatsSection() {
  return (
    <SectionContainer spacing="compact">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card
            key={stat.label}
            padding="md"
            className="flex flex-col items-center text-center"
          >
            <span className="text-2xl font-bold text-gray-1 lg:text-3xl">
              {stat.value}
            </span>
            <span className="mt-2 text-sm text-gray-6">{stat.label}</span>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}
