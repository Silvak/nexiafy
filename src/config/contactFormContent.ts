export const contactFormShared = {
  fields: {
    firstName: "First Name *",
    lastName: "Last Name *",
    email: "Business Email *",
    company: "Company Name *",
    country: "Country *",
    timezone: "Timezone *",
    phone: "Phone number",
    hearAbout: "How did you hear about us?",
    hearAboutPlaceholder: "Select an option...",
    message: "Message *",
  },
  hearAboutOptions: [
    "Search engine",
    "Social media",
    "Referral",
    "Event or webinar",
    "Other",
  ],
  countrySuggestions: [
    "United States",
    "United Kingdom",
    "Spain",
    "Germany",
    "France",
    "Canada",
    "Mexico",
    "Brazil",
  ],
  timezoneSuggestions: [
    "UTC",
    "America/New_York",
    "America/Los_Angeles",
    "America/Mexico_City",
    "Europe/Madrid",
    "Europe/London",
  ],
  dataProtectionTitle: "Basic data protection information",
  dataProtectionBody:
    "We process the data you provide to respond to your inquiry and manage our commercial relationship. You may exercise your rights of access, rectification, erasure, and objection by contacting us. For more details, see our privacy policy.",
  submitLabel: "Submit",
} as const;

export type ContactFormContent = typeof contactFormShared & {
  title: string;
  subtitle: string;
  successMessage: string;
};

const defaultSuccessMessage =
  "Thank you. Your message has been recorded locally for this demo. We will follow up soon.";

export const contactPageContent: ContactFormContent = {
  ...contactFormShared,
  title: "Contact",
  subtitle:
    "Interested in seeing our Quantum AI softwares in action? Contact us.",
  successMessage: defaultSuccessMessage,
};
