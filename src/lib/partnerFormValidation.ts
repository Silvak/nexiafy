export interface PartnerFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  companyName: string;
  website: string;
  companyDetails: string;
  geographyDetails: string;
  aiTeamDetails: string;
  aiProjects: string;
  hearAbout: string;
}

export type PartnerFormField = keyof PartnerFormValues;

export interface PartnerFormValidationResult {
  valid: boolean;
  errors: Partial<Record<PartnerFormField, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_PATTERN = /^(https?:\/\/)?[\w.-]+\.[a-z]{2,}(\/.*)?$/i;

export function validatePartnerForm(
  values: PartnerFormValues,
): PartnerFormValidationResult {
  const errors: Partial<Record<PartnerFormField, string>> = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.companyName.trim()) {
    errors.companyName = "Company name is required.";
  }
  if (!values.website.trim()) {
    errors.website = "Website URL is required.";
  } else if (!URL_PATTERN.test(values.website.trim())) {
    errors.website = "Enter a valid website URL.";
  }
  if (!values.companyDetails.trim()) {
    errors.companyDetails = "Company size details are required.";
  }
  if (!values.geographyDetails.trim()) {
    errors.geographyDetails = "Geography / sector focus is required.";
  }
  if (!values.aiTeamDetails.trim()) {
    errors.aiTeamDetails = "AI / ML team details are required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
