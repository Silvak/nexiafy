import type { Metadata } from "next";

import ContactHero from "@/components/company/contact/ContactHero";
import OfficeCard from "@/components/company/contact/OfficeCard";
import PageShell from "@/components/common/PageShell";
import ScrollReveal from "@/components/landing/ScrollReveal";
import { officeLocations } from "@/config/officesContent";

export const metadata: Metadata = {
  title: "Contact Us | Nexiafy",
  description:
    "Reach out to Nexiafy worldwide. Find our offices and regional contact details.",
};

export default function ContactUsPage() {
  return (
    <PageShell>
      <ContactHero />
      <div className="grid grid-cols-content justify-center px-5 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 gap-5 md:gap-8 lg:gap-16">
          {officeLocations.map((office) => (
            <ScrollReveal key={office.id} variant="single" direction="y">
              <OfficeCard office={office} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
