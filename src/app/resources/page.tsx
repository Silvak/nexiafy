import type { Metadata } from "next";

import ResourcesExplorer from "@/components/resources/ResourcesExplorer";
import ScrollReveal from "@/components/landing/ScrollReveal";
import { getAllResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Media | Nexiafy",
  description: "All the latest resources and news, straight from us.",
};

export default function ResourcesPage() {
  const items = getAllResources();

  return (
    <div className="pb-24 md:pb-36">
      <div className="grid grid-cols-1 justify-center px-5 pb-24 pt-28 md:px-12 md:pb-36 md:pt-48 lg:px-16">
        <ScrollReveal
          variant="group"
          className="grid grid-cols-content items-center justify-center gap-5 md:gap-8"
        >
          <ScrollReveal variant="groupItem">
            <div className="bg-gradient-to-b from-gray-1 to-gray-7 bg-clip-text pb-2 text-center text-xl font-bold text-transparent md:text-2xl lg:text-3xl">
              Media
            </div>
          </ScrollReveal>
          <ScrollReveal variant="groupItem">
            <div className="text-center text-lg font-medium text-gray-6 md:text-xl">
              All the latest resources and news, straight from us.
            </div>
          </ScrollReveal>
        </ScrollReveal>
      </div>
      <ResourcesExplorer items={items} />
    </div>
  );
}
