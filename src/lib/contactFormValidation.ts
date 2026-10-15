export interface ContactFormValues {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  country: string;
  timezone: string;
  phone: string;
  hearAbout: string;
  message: string;
}

export type ContactFormField = keyof ContactFormValues;

export interface ContactFormValidationResult {
  valid: boolean;
  errors: Partial<Record<ContactFormField, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContactForm(
  values: ContactFormValues,
): ContactFormValidationResult {
  const errors: Partial<Record<ContactFormField, string>> = {};

  if (!values.firstName.trim()) {
    errors.firstName = "First name is required.";
  }
  if (!values.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }
  if (!values.email.trim()) {
    errors.email = "Business email is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!values.company.trim()) {
    errors.company = "Company name is required.";
  }
  if (!values.country.trim()) {
    errors.country = "Country is required.";
  }
  if (!values.timezone.trim()) {
    errors.timezone = "Timezone is required.";
  }
  if (!values.message.trim()) {
    errors.message = "Message is required.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
