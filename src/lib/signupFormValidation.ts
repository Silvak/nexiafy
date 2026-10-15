export interface SignupFormValues {
  email: string;
  legalAccepted: boolean;
}

export type SignupFormField = keyof SignupFormValues;

export interface SignupFormValidationResult {
  valid: boolean;
  errors: Partial<Record<SignupFormField, string>>;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateSignupForm(
  values: SignupFormValues,
): SignupFormValidationResult {
  const errors: Partial<Record<SignupFormField, string>> = {};

  if (!values.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.legalAccepted) {
    errors.legalAccepted = "You must accept the terms to continue.";
  }

  return {
    valid: Object.keys(errors).length === 0,
    errors,
  };
}
