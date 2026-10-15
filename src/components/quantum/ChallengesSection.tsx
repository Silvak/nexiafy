import ChallengeCard from "@/components/quantum/ChallengeCard";
import ScrollReveal from "@/components/landing/ScrollReveal";
import type { ChallengeBlock } from "@/config/quantum/types";

interface ChallengesSectionProps {
  title: string;
  blocks: ChallengeBlock[];
}

export default function ChallengesSection({
  title,
  blocks,
}: ChallengesSectionProps) {
  return (
    <section className="grid grid-cols-content justify-center gap-12 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="text-center text-lg font-medium md:text-xl">{title}</div>
      </ScrollReveal>
      <div className="flex flex-col gap-12">
        {blocks.map((block) => (
          <ChallengeCard key={block.id} block={block} />
        ))}
      </div>
    </section>
  );
}
