import { describe, expect, it } from "vitest";

import {
  validatePartnerForm,
  type PartnerFormValues,
} from "./partnerFormValidation";

const validValues: PartnerFormValues = {
  firstName: "Alex",
  lastName: "Rivera",
  email: "alex@integrator.io",
  phone: "",
  companyName: "Integrator Co",
  website: "https://integrator.io",
  companyDetails: "50 employees, $12M revenue",
  geographyDetails: "EMEA, financial services",
  aiTeamDetails: "8 ML engineers",
  aiProjects: "12",
  hearAbout: "Web search",
};

describe("validatePartnerForm", () => {
  it("accepts valid values", () => {
    const result = validatePartnerForm(validValues);
    expect(result.valid).toBe(true);
    expect(result.errors).toEqual({});
  });

  it("requires core fields and valid email and website", () => {
    const result = validatePartnerForm({
      ...validValues,
      email: "bad",
      website: "not-a-url",
      aiTeamDetails: "  ",
    });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeDefined();
    expect(result.errors.website).toBeDefined();
    expect(result.errors.aiTeamDetails).toBeDefined();
  });
});
