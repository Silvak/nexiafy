import ScrollReveal from "@/components/landing/ScrollReveal";
import { partnerTypeCards } from "@/config/partnersContent";

export default function PartnerTypeCards() {
  return (
    <div className="grid grid-cols-content justify-center gap-4 px-5 md:gap-8 md:px-12 lg:px-16">
      <div className="flex flex-col gap-4 md:gap-8">
        {partnerTypeCards.map((card) => (
          <ScrollReveal key={card.title} variant="single" direction="y">
            <div className="flex flex-col justify-between gap-8 rounded-2xl bg-gray-11 p-6 md:gap-16 md:rounded-4xl md:p-12">
              <h2 className="text-xl font-bold text-gray-5">{card.title}</h2>
              <p className="text-base font-medium text-gray-7">{card.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
