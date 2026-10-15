import Image from "next/image";

import { ourTeamHero } from "@/config/ourTeamContent";

export default function OurTeamHero() {
  return (
    <div className="relative flex aspect-[3/2] w-full items-center justify-center md:aspect-auto md:h-[90svh] md:max-h-[60rem]">
      <Image
        src={ourTeamHero.image}
        alt={ourTeamHero.imageAlt}
        fill
        priority
        className="absolute inset-0 h-full w-full object-cover md:relative md:h-auto md:w-full"
        sizes="100vw"
      />
    </div>
  );
}
