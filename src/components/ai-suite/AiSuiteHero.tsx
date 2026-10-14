import ScrollReveal from "@/components/landing/ScrollReveal";

import AiSuiteWordmark from "./AiSuiteWordmark";
import HeroParticles from "./HeroParticles";

export default function AiSuiteHero() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-brand-green-1 px-5 pb-36 pt-28 md:px-8 md:pb-64 md:pt-40 lg:px-12">
      <ScrollReveal
        variant="single"
        className="relative z-10 mx-auto flex max-w-screen-md flex-col gap-8 md:gap-12"
      >
        <AiSuiteWordmark size="hero" />
      </ScrollReveal>
      <div
        aria-hidden
        className="absolute z-0 aspect-square h-auto !w-4/5 animate-bubble overflow-hidden rounded-full bg-gray-10/20"
      >
        <HeroParticles />
      </div>
    </div>
  );
}
