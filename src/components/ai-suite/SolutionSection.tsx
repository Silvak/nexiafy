import { Check } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { aiSuiteSolution } from "@/config/aiSuiteContent";

import AiSuiteWordmark from "./AiSuiteWordmark";

export default function SolutionSection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <div className="flex flex-col items-center gap-16 text-center">
        <AiSuiteWordmark size="compact" className="justify-center" />
        <div className="flex flex-col gap-5">
          <ScrollReveal
            variant="single"
            className="text-center text-lg font-bold md:mx-0 md:max-w-none md:text-2xl"
          >
            {aiSuiteSolution.title}
          </ScrollReveal>
          <ScrollReveal
            variant="single"
            className="flex flex-col gap-6 text-center text-gray-6 md:text-lg"
          >
            <p>{aiSuiteSolution.paragraphs[0]}</p>
            <p>{aiSuiteSolution.paragraphs[1]}</p>
          </ScrollReveal>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:gap-8">
        {aiSuiteSolution.points.map((point) => (
          <ScrollReveal
            key={point.id}
            variant="single"
            className="grid grid-cols-1 items-start gap-5 rounded-[20px] bg-gray-11 p-5 md:grid-cols-[auto_1fr_1fr] md:gap-8 md:rounded-4xl md:p-8 lg:p-12 lg:pb-14"
          >
            <div className="flex h-7 w-fit items-center justify-center">
              <Check
                aria-hidden
                className="mt-1.5 shrink-0 text-brand-green-1"
                size={16}
                strokeWidth={2}
              />
            </div>
            <h3 className="text-lg font-medium text-gray-1">{point.title}</h3>
            <p className="text-gray-6">{point.description}</p>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
