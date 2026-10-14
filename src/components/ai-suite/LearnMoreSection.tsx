import Image from "next/image";
import Link from "next/link";
import { FileText, Play } from "lucide-react";

import ScrollReveal from "@/components/landing/ScrollReveal";
import { aiSuiteLearnMore } from "@/config/aiSuiteContent";

export default function LearnMoreSection() {
  return (
    <div className="grid grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal
        variant="single"
        className="text-center text-lg font-bold md:mx-0 md:max-w-none md:text-2xl"
      >
        {aiSuiteLearnMore.title}
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-8">
        {aiSuiteLearnMore.items.map((item) => (
          <ScrollReveal key={item.id} variant="single">
            <Link
              href={item.href}
              className="flex flex-col items-center gap-5 md:gap-8"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-gray-11">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/25">
                  {item.variant === "video" ? (
                    <Play
                      aria-hidden
                      className="h-14 w-14 text-white"
                      strokeWidth={1.5}
                    />
                  ) : (
                    <FileText
                      aria-hidden
                      className="h-14 w-14 text-white"
                      strokeWidth={1.5}
                    />
                  )}
                </div>
              </div>
              <h3 className="font-medium text-gray-1 md:text-xl">{item.title}</h3>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
