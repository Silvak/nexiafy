import Image from "next/image";
import Link from "next/link";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { awsMarketplaceCta } from "@/config/inferenceApiContent";

export default function AwsMarketplaceCta() {
  return (
    <div className="grid grid-cols-content justify-center gap-12 px-5 pt-6 md:px-12 md:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="w-full">
          <div className="flex flex-col items-center gap-6 rounded-3xl bg-gray-11 px-8 py-12 md:gap-12 md:rounded-4xl md:px-12 md:py-14">
            <div className="flex flex-col items-center gap-4 text-center md:gap-8">
              <div className="relative flex items-center justify-center">
                <Image
                  src={awsMarketplaceCta.logoSrc}
                  alt={awsMarketplaceCta.logoAlt}
                  width={136}
                  height={24}
                  className="h-6 w-auto"
                />
              </div>
              <div className="flex max-w-[576px] flex-col items-center gap-3 text-center md:gap-5">
                <h3 className="text-lg font-bold text-gray-1 md:text-xl">
                  {awsMarketplaceCta.title}
                </h3>
                <p className="text-base text-gray-6">
                  {awsMarketplaceCta.description}
                </p>
              </div>
              <Link
                href={awsMarketplaceCta.href}
                id={awsMarketplaceCta.id}
                target="_blank"
                rel="noopener noreferrer"
                className="ease-[cubic-bezier(0.95,0.05,0.795,0.035)] flex h-14 items-center justify-center gap-1.5 rounded-full border border-white/5 bg-gray-9 px-6 text-center text-[14px] font-bold leading-[20px] text-white transition-all duration-300 visited:scale-100 visited:opacity-100 hover:scale-95 hover:opacity-90"
              >
                <span className="text-[14px] font-bold text-white">
                  {awsMarketplaceCta.buttonLabel}
                </span>
                <div className="flex h-[21px] w-[28px] items-start pt-1">
                  <Image
                    src={awsMarketplaceCta.logoSrc}
                    alt="AWS"
                    width={28}
                    height={17}
                    className="h-[17px] w-[28px]"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
