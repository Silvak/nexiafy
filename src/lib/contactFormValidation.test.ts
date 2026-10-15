import { describe, expect, it } from "vitest";

import {
  validateContactForm,
  type ContactFormValues,
} from "./contactFormValidation";

const validValues: ContactFormValues = {
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@company.com",
  company: "Acme",
  country: "Spain",
  timezone: "Europe/Madrid",
  phone: "",
  hearAbout: "",
  message: "Hello",
};

describe("validateContactForm", () => {
  it("accepts valid values", () => {
    const result = validateContactForm(validValues);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("requires core fields and valid email", () => {
    const result = validateContactForm({
      ...validValues,
      firstName: "",
      email: "not-an-email",
      message: "  ",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.firstName).toBeDefined();
    expect(result.errors.email).toBeDefined();
    expect(result.errors.message).toBeDefined();
  });
});
