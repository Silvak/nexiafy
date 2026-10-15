import ScrollReveal from "@/components/landing/ScrollReveal";
import { contactPageHero } from "@/config/officesContent";

export default function ContactHero() {
  return (
    <div className="grid grid-cols-1 justify-center px-5 pb-24 pt-28 md:px-12 md:pb-36 md:pt-48 lg:px-16">
      <ScrollReveal variant="single">
        <div className="grid grid-cols-content-md items-center justify-center gap-5 md:gap-8">
          <div className="bg-gradient-to-b from-gray-1 to-gray-7 bg-clip-text pb-2 text-center text-xl font-bold text-transparent md:text-2xl lg:text-3xl">
            {contactPageHero.title}
          </div>
          <div className="text-center text-lg font-medium text-gray-6 md:text-xl">
            {contactPageHero.subtitle}
          </div>
        </div>
      </ScrollReveal>
    </div>
  );
}
