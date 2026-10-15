import { describe, expect, it } from "vitest";

import {
  validateSignupForm,
  type SignupFormValues,
} from "./signupFormValidation";

const validValues: SignupFormValues = {
  email: "user@example.com",
  legalAccepted: true,
};

describe("validateSignupForm", () => {
  it("accepts valid values", () => {
    const result = validateSignupForm(validValues);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("requires email and valid format", () => {
    const empty = validateSignupForm({ ...validValues, email: "" });
    expect(empty.valid).toBe(false);
    expect(empty.errors.email).toBeDefined();

    const invalid = validateSignupForm({ ...validValues, email: "not-an-email" });
    expect(invalid.valid).toBe(false);
    expect(invalid.errors.email).toBeDefined();
  });

  it("requires legal acceptance", () => {
    const result = validateSignupForm({ ...validValues, legalAccepted: false });
    expect(result.valid).toBe(false);
    expect(result.errors.legalAccepted).toBeDefined();
  });
});
