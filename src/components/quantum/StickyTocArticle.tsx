"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { TocSection } from "@/config/quantum/types";

interface StickyTocArticleProps {
  title: string;
  subtitle?: string;
  tocAriaLabel?: string;
  sections: TocSection[];
}

export default function StickyTocArticle({
  title,
  subtitle,
  tocAriaLabel = "Sections",
  sections,
}: StickyTocArticleProps) {
  const [activeAnchor, setActiveAnchor] = useState(sections[0]?.anchor ?? "");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.anchor))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveAnchor(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <section className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="text-center text-lg font-bold md:text-2xl">
          <h2 className="mx-auto inline-flex max-w-screen-md flex-col gap-2">
            <span>{title}</span>
            {subtitle ? (
              <>
                <span aria-hidden>-</span>
                <span>{subtitle}</span>
              </>
            ) : null}
          </h2>
        </div>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[384px_1fr] lg:gap-12">
        <nav
          aria-label={tocAriaLabel}
          className="sticky top-24 hidden h-fit flex-col rounded-4xl bg-gray-11 py-2 lg:flex"
        >
          {sections.map((section, index) => {
            const active = activeAnchor === section.anchor;
            return (
              <div key={section.id}>
                <Link
                  href={`#${section.anchor}`}
                  className={`flex items-start gap-6 scroll-smooth px-8 py-6 transition-colors hover:text-gray-1 ${
                    active ? "text-gray-1" : "text-gray-6"
                  }`}
                  onClick={() => setActiveAnchor(section.anchor)}
                >
                  <span
                    className={`mt-1.5 inline-flex h-4 w-4 shrink-0 rounded-full border-2 ${
                      active
                        ? "border-brand-green-1 bg-brand-green-1"
                        : "border-gray-7 bg-transparent"
                    }`}
                  />
                  <span className="text-base font-medium">{section.title}</span>
                </Link>
                {index < sections.length - 1 ? (
                  <div className="h-px bg-gradient-to-r from-white/0 via-white to-white/0 opacity-30" />
                ) : null}
              </div>
            );
          })}
        </nav>
        <article className="flex flex-col gap-8">
          {sections.map((section) => (
            <div
              key={section.id}
              id={section.anchor}
              className="scroll-mt-24 scroll-smooth"
            >
              <ScrollReveal variant="single" direction="y">
              <div className="flex flex-col gap-6 rounded-[20px] bg-gray-11 p-8 text-gray-6 md:rounded-4xl">
                <h3 className="font-medium text-gray-1 md:text-lg">
                  {section.title}
                </h3>
                {section.paragraphs.map((paragraph, i) => (
                  <span
                    key={`${section.id}-p-${i}`}
                    className="whitespace-normal text-base md:text-lg"
                  >
                    {section.externalLink &&
                    paragraph.includes(section.externalLink.href) ? (
                      <>
                        {paragraph.split(section.externalLink.href)[0]}
                        <a
                          href={section.externalLink.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-sea-1 transition-opacity duration-200 hover:opacity-70"
                        >
                          {section.externalLink.label}
                        </a>
                      </>
                    ) : (
                      paragraph
                    )}
                  </span>
                ))}
                {section.externalLink &&
                !section.paragraphs.some((p) =>
                  p.includes(section.externalLink!.href),
                ) ? (
                  <a
                    href={section.externalLink.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-brand-sea-1 transition-opacity duration-200 hover:opacity-70 md:text-lg"
                  >
                    {section.externalLink.label}
                  </a>
                ) : null}
              </div>
              </ScrollReveal>
            </div>
          ))}
        </article>
      </div>
    </section>
  );
}
