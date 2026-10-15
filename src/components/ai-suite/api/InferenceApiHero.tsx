import Link from "next/link";
import { ArrowDown, ChevronLeft, Gift } from "lucide-react";

import { inferenceApiHero } from "@/config/inferenceApiContent";

export default function InferenceApiHero() {
  const backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(rgba(0, 0, 0, 0.137) 0%, rgba(0, 0, 0, 0.8) 100%), url("${inferenceApiHero.backgroundImage}")`;

  return (
    <section
      className="flex w-full flex-col items-center justify-center px-5 pb-[88px] pt-36"
      style={{
        backgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="mx-auto flex w-full max-w-[658px] flex-col items-center gap-6">
        <div className="flex w-full flex-row items-center justify-center gap-3">
          <Link
            href={inferenceApiHero.breadcrumbParent.href}
            className="flex flex-row items-center gap-2"
            id="inference-api-header-back"
          >
            <ChevronLeft
              aria-hidden
              className="text-white"
              size={20}
              strokeWidth={2}
            />
            <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-4">
              {inferenceApiHero.breadcrumbParent.label}
            </span>
          </Link>
          <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-4">
            ·
          </span>
          <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-4">
            {inferenceApiHero.breadcrumbCurrent}
          </span>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <h1 className="max-w-[593px] text-center text-[36px] font-bold leading-[44px] text-white">
            {inferenceApiHero.title}
          </h1>
          <p className="text-center text-[16px] font-medium leading-[24px] text-white">
            {inferenceApiHero.description}
          </p>
        </div>

        <div className="flex w-full max-w-[212px] flex-col items-start justify-center gap-3 md:w-fit md:max-w-none md:flex-row">
          {inferenceApiHero.actions.map((action) => {
            const isPrimary = action.variant === "primary";
            const className = isPrimary
              ? "flex h-14 flex-row items-center w-full md:w-fit justify-center gap-3 rounded-full px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 hover:scale-95 hover:opacity-90 bg-brand-rose-1"
              : "flex h-14 flex-row items-center w-full md:w-fit justify-center gap-3 rounded-full px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 hover:scale-95 hover:opacity-90 border border-white/5 bg-gray-9";

            return (
              <Link
                key={action.id}
                href={action.href}
                className={className}
                id={action.id}
              >
                <span>{action.label}</span>
                {action.icon === "arrowDown" ? (
                  <ArrowDown aria-hidden size={20} strokeWidth={2} />
                ) : null}
              </Link>
            );
          })}
        </div>

        <div className="inline-flex items-center gap-2 rounded-full border border-gray-1/[0.06] bg-[#2A1014] py-1.5 pl-3 pr-3.5">
          <Gift
            aria-hidden
            className="shrink-0 text-brand-rose-1"
            size={16}
            strokeWidth={2}
          />
          <span className="text-[14px] font-medium leading-[20px] text-gray-3">
            {inferenceApiHero.promoPill}
          </span>
        </div>
      </div>
    </section>
  );
}
