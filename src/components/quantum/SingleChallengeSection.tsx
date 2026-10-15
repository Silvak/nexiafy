import ChallengeCard from "@/components/quantum/ChallengeCard";
import type { ChallengeBlock } from "@/config/quantum/types";

interface SingleChallengeSectionProps {
  block: ChallengeBlock;
}

export default function SingleChallengeSection({
  block,
}: SingleChallengeSectionProps) {
  return (
    <section className="grid grid-cols-content justify-center gap-12 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ChallengeCard block={block} />
    </section>
  );
}
