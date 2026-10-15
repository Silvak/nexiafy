import Image from "next/image";

import ScrollReveal from "@/components/landing/ScrollReveal";

interface UnlockingFeatureItem {
  id: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

interface UnlockingFeaturesSectionProps {
  title: string;
  features: UnlockingFeatureItem[];
}

export default function UnlockingFeaturesSection({
  title,
  features,
}: UnlockingFeaturesSectionProps) {
  return (
    <section className="grid grid-cols-content justify-center gap-12 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44">
      <ScrollReveal variant="single" direction="y">
        <div className="text-center text-xl font-medium">{title}</div>
      </ScrollReveal>
      <ScrollReveal variant="group" direction="y" className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-8">
        {features.map((feature) => (
          <ScrollReveal
            key={feature.id}
            variant="groupItem"
            direction="y"
            className="flex flex-col items-center gap-5 rounded-[20px] bg-gray-11 px-5 py-8 lg:gap-10 lg:rounded-4xl lg:px-8 lg:py-12"
          >
            <Image
              src={feature.image}
              alt={feature.imageAlt}
              width={128}
              height={128}
              className="h-14 w-14 object-contain"
            />
            <div className="flex flex-col items-center gap-3">
              <h4 className="text-center text-lg font-medium">{feature.title}</h4>
              <p className="text-center text-gray-6">{feature.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </ScrollReveal>
    </section>
  );
}
