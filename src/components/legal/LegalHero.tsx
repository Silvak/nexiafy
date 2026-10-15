import ScrollReveal from "@/components/landing/ScrollReveal";

interface LegalHeroProps {
  title: string;
  subtitle: string;
}

export default function LegalHero({ title, subtitle }: LegalHeroProps) {
  return (
    <div className="grid grid-cols-1 justify-center px-5 pb-24 pt-28 md:px-12 md:pb-36 md:pt-48 lg:px-16">
      <ScrollReveal variant="group" className="grid grid-cols-content-md items-center justify-center gap-5 md:gap-8">
        <ScrollReveal variant="groupItem">
          <h1 className="bg-gradient-to-b from-gray-1 to-gray-7 bg-clip-text pb-2 text-center text-xl font-bold text-transparent md:text-2xl lg:text-3xl">
            {title}
          </h1>
        </ScrollReveal>
        <ScrollReveal variant="groupItem">
          <div className="text-center text-lg font-medium text-gray-6 md:text-xl">
            {subtitle}
          </div>
        </ScrollReveal>
      </ScrollReveal>
    </div>
  );
}
