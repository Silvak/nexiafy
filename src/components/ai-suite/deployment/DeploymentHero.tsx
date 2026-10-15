import Link from "next/link";
import { ArrowDown, ChevronLeft } from "lucide-react";

import { deploymentHero } from "@/config/deploymentContent";
import { heroActionClass } from "@/lib/heroActionClass";

export default function DeploymentHero() {
  const backgroundImage = `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(rgba(0, 0, 0, 0.137) 0%, rgba(0, 0, 0, 0.8) 100%), url("${deploymentHero.backgroundImage}")`;

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
            href={deploymentHero.breadcrumbParent.href}
            className="flex flex-row items-center gap-2"
            id="deployment-header-back"
          >
            <ChevronLeft
              aria-hidden
              className="text-white"
              size={20}
              strokeWidth={2}
            />
            <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-4">
              {deploymentHero.breadcrumbParent.label}
            </span>
          </Link>
          <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-4">
            ·
          </span>
          <span className="text-[12px] font-bold uppercase leading-[16px] tracking-[0.1em] text-gray-4">
            {deploymentHero.breadcrumbCurrent}
          </span>
        </div>

        <div className="flex w-full flex-col items-center gap-6">
          <h1 className="max-w-[593px] text-center text-[36px] font-bold leading-[44px] text-white">
            {deploymentHero.title}
          </h1>
          <div className="flex flex-row items-center justify-center gap-2">
            <p className="text-center text-[16px] font-medium leading-[24px] text-white">
              {deploymentHero.description}
            </p>
          </div>
        </div>

        <div className="flex w-full max-w-[212px] flex-col items-start justify-center gap-3 md:w-fit md:max-w-none md:flex-row">
          {deploymentHero.actions.map((action) => (
            <Link
              key={action.id}
              href={action.href}
              className={heroActionClass(action.variant)}
              id={action.id}
            >
              <span>{action.label}</span>
              {action.icon === "arrowDown" ? (
                <ArrowDown aria-hidden size={20} strokeWidth={2} />
              ) : null}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
