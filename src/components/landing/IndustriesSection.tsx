import {
  ArrowRight,
  Atom,
  CircleDot,
  Cog,
  Coins,
  FlaskConical,
  Lightbulb,
  Lock,
  Orbit,
  Package,
  Shield,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

import SectionContainer from "@/components/common/SectionContainer";
import {
  industries,
  type IndustryIcon,
  type IndustryItem,
} from "@/config/landingContent";

const icons: Record<IndustryIcon, LucideIcon> = {
  coins: Coins,
  lightbulb: Lightbulb,
  package: Package,
  flask: FlaskConical,
  cog: Cog,
  orbit: Orbit,
  lock: Lock,
  shield: Shield,
  atom: Atom,
  "circle-dot": CircleDot,
};

function IndustryCard({ item }: { item: IndustryItem }) {
  const Icon = icons[item.icon];

  return (
    <div className="grid aspect-square h-40 w-full grid-cols-1 content-between justify-between rounded-[20px] bg-gray-11 p-6 md:h-44 md:rounded-4xl md:p-8">
      <Icon
        aria-hidden
        className="h-8 w-8 text-gray-6 md:h-10 md:w-10"
        strokeWidth={1.5}
      />
      <h3 className="text-base font-bold text-gray-5 md:text-lg md:font-normal md:text-white">
        {item.name}
      </h3>
    </div>
  );
}

export default function IndustriesSection() {
  return (
    <SectionContainer>
      <div className="grid grid-cols-1 gap-16">
        <h2 className="text-center text-xl font-bold text-white md:text-2xl">
          {industries.title}
        </h2>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
          {industries.items.map((item) => (
            <IndustryCard key={item.name} item={item} />
          ))}
          <div className="relative z-0 col-span-2 flex aspect-auto flex-col justify-between gap-5 overflow-hidden rounded-[1.25rem] p-5 pt-4 md:gap-0 md:rounded-4xl md:p-8">
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 88% 72%, #f01438 0%, transparent 22%), radial-gradient(circle at 72% 38%, #6d4aff 0%, transparent 34%), radial-gradient(circle at 96% 18%, #2ee6d6 0%, transparent 24%), linear-gradient(115deg, #1b2744 0%, #3a2868 48%, #c23b6e 100%)",
              }}
            />
            <div className="absolute inset-0 bg-black/10" />
            <h3 className="relative h-36 text-lg font-medium text-gray-5 mix-blend-screen md:h-auto md:text-white">
              {industries.banner.title}
            </h3>
            <Link
              id={industries.banner.cta.id}
              href={industries.banner.cta.href}
              className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] relative mr-auto flex h-12 items-center justify-center space-x-3 rounded-full bg-gray-11 pr-4 pl-6 text-sm backdrop-blur-sm transition-all duration-500 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
            >
              <span className="text-gray-1">{industries.banner.cta.label}</span>
              <ArrowRight
                aria-hidden
                className="h-4 w-4 text-brand-rose-1"
                strokeWidth={2}
              />
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
