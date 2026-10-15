import Link from "next/link";

import ScrollReveal from "@/components/landing/ScrollReveal";
import type { IntroSplitContent } from "@/config/quantum/types";

function IntroArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="48"
      viewBox="0 0 33 48"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.09 0C16.54 0 16.91 0.37 16.91 0.82V47.18C16.91 47.63 16.54 48 16.09 48C15.64 48 15.27 47.63 15.27 47.18V0.82C15.27 0.37 15.64 0 16.09 0Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.24 31.33C0.56 31.01 1.08 31.01 1.4 31.33L16.09 46.02L30.79 31.33C31.1 31.01 31.62 31.01 31.94 31.33C32.26 31.65 32.26 32.17 31.94 32.49L16.67 47.76C16.35 48.08 15.83 48.08 15.51 47.76L0.24 32.49C-0.08 32.17 -0.08 31.65 0.24 31.33Z"
        fill="currentColor"
      />
    </svg>
  );
}

interface IntroSplitCardProps {
  content: IntroSplitContent;
}

export default function IntroSplitCard({ content }: IntroSplitCardProps) {
  const rich = content.descriptionRich;

  return (
    <div className="-mt-12 grid grid-cols-content justify-center px-5 md:-mt-32 md:px-12 lg:px-16">
      <ScrollReveal variant="single">
        <div className="relative grid grid-cols-1 gap-8 rounded-[20px] bg-gray-11 p-5 md:grid-cols-2 md:gap-12 md:rounded-4xl md:p-12">
          <div className="flex h-full flex-row items-start justify-between gap-4 md:flex-col">
            <div className="grid gap-4">
              <h2 className="whitespace-pre-wrap text-xl font-bold text-gray-1 md:text-2xl">
                {content.title}
              </h2>
            </div>
            <IntroArrowIcon className="h-7 w-auto shrink-0 text-brand-rose-1 md:h-12" />
          </div>
          <div className="flex flex-col items-start gap-5 md:gap-16">
            <h3 className="text-lg font-medium text-gray-1 md:text-xl">
              {content.headline}
            </h3>
            <p className="whitespace-pre-line text-base text-gray-6 md:text-lg">
              {rich?.link ? (
                <>
                  {rich.beforeLink}
                  <Link
                    href={rich.link.href}
                    className="text-brand-sea-1 transition-opacity duration-200 hover:opacity-70"
                  >
                    {rich.link.label}
                  </Link>
                  {rich.afterLink}
                </>
              ) : (
                content.description
              )}
            </p>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
