import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CloudCog } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { digitalNativesProducts } from "@/config/digitalNativesContent";

export default function ProductCardsSection() {
  return (
    <ScrollReveal
      variant="single"
      direction="y"
      className="relative mx-auto mt-[88px] flex w-full max-w-[1024px] flex-col items-center gap-12 lg:mt-[176px]"
    >
      <div className="relative grid w-full grid-cols-1 gap-6 overflow-hidden px-5 lg:grid-cols-2 lg:gap-4 lg:px-0">
        {digitalNativesProducts.map((product) => (
          <div
            key={product.id}
            className="flex w-full flex-col justify-between rounded-4xl bg-gray-11 p-5 lg:h-[660px] lg:p-8"
          >
            <div>
              <div className="relative h-[188px] overflow-hidden rounded-xl lg:h-[300px] lg:rounded-2xl">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.overlayIcon === "cloudCog" ? (
                  <div className="absolute z-10 flex h-full w-full items-center justify-center">
                    <div
                      className="flex h-[80px] w-[80px] items-center justify-center rounded-full lg:h-[104px] lg:w-[104px]"
                      style={{
                        background: "rgba(232, 255, 254, 0.24)",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      <CloudCog
                        aria-hidden
                        className="h-8 w-8 text-white lg:h-10 lg:w-10"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                ) : null}
              </div>
              <p className="mt-6 text-lg font-bold text-white lg:mt-12 lg:text-xl">
                {product.title}
              </p>
              <p className="mr-0 mt-3 text-sm font-normal text-gray-6 lg:mr-20">
                {product.description}
              </p>
            </div>
            <Link
              id={product.ctaIdDesktop}
              href={product.href}
              className="mt-6 hidden items-center justify-center gap-2 rounded-full bg-gray-10 px-6 py-3 text-white backdrop-blur-xs lg:flex"
            >
              <span className="text-sm font-bold">Read more</span>
              <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={2} />
            </Link>
            <Link
              id={product.ctaIdMobile}
              href={product.href}
              className="mt-6 flex items-center justify-center gap-3 rounded-full bg-[#0961FF] px-6 py-4 text-white backdrop-blur-xs lg:hidden"
            >
              <span className="text-sm font-bold">Read more</span>
              <ArrowRight aria-hidden className="h-5 w-5" strokeWidth={2} />
            </Link>
          </div>
        ))}
      </div>
    </ScrollReveal>
  );
}
