"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { UseCaseIndustry } from "@/config/quantum/types";

interface UseCaseExplorerProps {
  title: string;
  sidebarTitle?: string;
  industries: UseCaseIndustry[];
  defaultIndustryId?: string;
  defaultCaseId?: string;
}

function findDefaultSelection(
  industries: UseCaseIndustry[],
  defaultIndustryId?: string,
  defaultCaseId?: string,
) {
  const industry =
    industries.find((i) => i.id === defaultIndustryId) ?? industries[0];
  const useCase =
    industry?.cases.find((c) => c.id === defaultCaseId) ?? industry?.cases[0];
  return {
    industryId: industry?.id ?? "",
    caseId: useCase?.id ?? "",
  };
}

export default function UseCaseExplorer({
  title,
  sidebarTitle = "Using Nexiafy Quantum in...",
  industries,
  defaultIndustryId = "manufacturing",
  defaultCaseId = "anomalous-vibration",
}: UseCaseExplorerProps) {
  const initial = useMemo(
    () => findDefaultSelection(industries, defaultIndustryId, defaultCaseId),
    [industries, defaultIndustryId, defaultCaseId],
  );

  const [openIndustryId, setOpenIndustryId] = useState(initial.industryId);
  const [selectedCaseId, setSelectedCaseId] = useState(initial.caseId);

  const selectedCase = useMemo(() => {
    for (const industry of industries) {
      const match = industry.cases.find((c) => c.id === selectedCaseId);
      if (match) {
        return match;
      }
    }
    return industries[0]?.cases[0];
  }, [industries, selectedCaseId]);

  function toggleIndustry(id: string) {
    setOpenIndustryId((prev) => (prev === id ? "" : id));
  }

  function selectCase(industryId: string, caseId: string) {
    setOpenIndustryId(industryId);
    setSelectedCaseId(caseId);
  }

  return (
    <section
      id="browse"
      className="grid grid-cols-content content-stretch items-stretch justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44"
    >
      <ScrollReveal variant="single" direction="y">
        <h2 className="text-center text-xl font-bold md:text-2xl">{title}</h2>
      </ScrollReveal>
      <ScrollReveal variant="single" direction="y">
        <div className="relative mb-4 mt-8 aspect-auto lg:aspect-[3/2]">
          <div className="pointer-events-none absolute animate-beat-inner-sm rounded-[2.125rem] bg-brand-sea-1 md:animate-beat-inner-lg md:rounded-[3rem]" />
          <div className="pointer-events-none absolute animate-beat-outer-sm rounded-[2.375rem] bg-brand-sea-1 md:animate-beat-outer-lg md:rounded-[4rem]" />
          <div className="relative grid h-full w-full grid-cols-1 content-stretch items-stretch gap-4 lg:grid-rows-1 rounded-[1.75rem] border border-brand-sea-1/70 bg-gray-14 p-3 md:rounded-4xl md:p-4 lg:grid-cols-[16rem_1fr]">
            <div className="scroll-none relative flex min-h-full w-full flex-col rounded-2xl bg-gray-11">
              <div className="relative flex justify-between p-5">
                <h2 className="font-bold">{sidebarTitle}</h2>
              </div>
              <div className="w-full" role="tablist" aria-orientation="vertical">
                {industries.map((industry) => {
                  const isOpen = openIndustryId === industry.id;
                  return (
                    <div key={industry.id} className="relative px-2.5">
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 opacity-5"
                      />
                      <h3 className="flex">
                        <button
                          type="button"
                          aria-expanded={isOpen}
                          className="flex flex-1 items-center justify-between px-2.5 py-4 text-sm font-medium transition-all [&[aria-expanded=true]>svg]:rotate-180 [&[aria-expanded=true]>svg]:text-gray-6"
                          onClick={() => toggleIndustry(industry.id)}
                        >
                          {industry.label}
                          <ChevronDown
                            className="h-4 w-4 shrink-0 transition duration-200"
                            aria-hidden
                          />
                        </button>
                      </h3>
                      {isOpen ? (
                        <div className="flex flex-col gap-1 pb-2.5">
                          {industry.cases.map((useCase) => {
                            const active = selectedCaseId === useCase.id;
                            return (
                              <button
                                key={useCase.id}
                                type="button"
                                className={`rounded-md px-2.5 py-1.5 text-left text-sm transition-colors ${
                                  active
                                    ? "bg-gray-9 text-gray-1"
                                    : "text-gray-6 hover:text-gray-1"
                                }`}
                                onClick={() =>
                                  selectCase(industry.id, useCase.id)
                                }
                              >
                                {useCase.title}
                              </button>
                            );
                          })}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </div>
            {selectedCase ? (
              <div className="grid grid-cols-1 grid-rows-[auto_1fr] items-start gap-4">
                <div className="flex items-center justify-between gap-3 rounded-2xl bg-gray-11 py-4 pl-5 pr-4">
                  <h3 className="w-full">{selectedCase.title}</h3>
                </div>
                <div className="relative grid h-full items-start rounded-2xl bg-gray-11 p-4">
                  <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                    {selectedCase.videoEmbedUrl ? (
                      <iframe
                        src={selectedCase.videoEmbedUrl}
                        title={selectedCase.title}
                        className="absolute inset-0 h-full w-full"
                        sandbox="allow-scripts allow-same-origin allow-presentation allow-popups allow-forms"
                        allow="picture-in-picture"
                      />
                    ) : selectedCase.posterImage ? (
                      <Image
                        src={selectedCase.posterImage}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 640px, 100vw"
                      />
                    ) : null}
                  </div>
                </div>
                <div className="flex h-full flex-col gap-3 rounded-2xl bg-gray-11 px-5 py-4">
                  <p className="text-base text-gray-1">
                    {selectedCase.description}
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
