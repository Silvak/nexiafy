import type { Metadata } from "next";
import type { CSSProperties } from "react";

import ContactForm from "@/components/common/ContactForm";
import { contactPageContent } from "@/config/contactFormContent";

export const metadata: Metadata = {
  title: "Contact | Nexiafy",
  description:
    "Interested in seeing our Quantum AI softwares in action? Contact Nexiafy.",
};

export default function ContactPage() {
  return (
    <div
      style={
        {
          "--mobile-banner-offset": "40px",
          "--mobile-banner-offset-md": "36px",
        } as CSSProperties
      }
      className="pt-[var(--mobile-banner-offset)] md:pt-[var(--mobile-banner-offset-md)] lg:pt-0"
    >
      <ContactForm
        content={contactPageContent}
        formId="contact-form"
        className="grid w-full grid-cols-content justify-center gap-16 px-5 pt-16 md:px-12 md:pt-36 lg:px-16 lg:pt-44"
      />
    </div>
  );
}
