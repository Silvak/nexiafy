import Image from "next/image";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { aiSuiteWhy } from "@/config/aiSuiteContent";

export default function WhySection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal
        variant="single"
        className="text-center text-lg font-bold md:mx-0 md:max-w-none md:text-2xl"
      >
        {aiSuiteWhy.title}
      </ScrollReveal>
      <ScrollReveal
        variant="single"
        className="flex flex-col gap-6 text-center text-gray-6 md:text-lg"
      >
        <p>{aiSuiteWhy.lead[0]}</p>
        <p>{aiSuiteWhy.lead[1]}</p>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-8">
        {aiSuiteWhy.cards.map((card) => (
          <ScrollReveal
            key={card.id}
            variant="single"
            className="flex flex-col items-center gap-10 rounded-[20px] bg-gray-11 p-4 pb-10 text-center md:rounded-4xl"
          >
            <div className="relative aspect-video h-auto w-full overflow-hidden rounded-md md:rounded-2xl">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="space-y-5 px-4">
              <h3 className="text-lg font-medium text-gray-1">{card.title}</h3>
              <p className="text-gray-6">{card.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
