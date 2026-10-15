import { describe, expect, it } from "vitest";

import { slugifyHeading, toHeadingId } from "./headingId";

describe("slugifyHeading", () => {
  it("lowercases and hyphenates spaces", () => {
    expect(slugifyHeading("Legal Information")).toBe("legal-information");
  });

  it("strips accents", () => {
    expect(slugifyHeading("Política de privacidad")).toBe(
      "politica-de-privacidad",
    );
  });

  it("replaces ampersand with and", () => {
    expect(slugifyHeading("Quality & Environmental")).toBe(
      "quality-and-environmental",
    );
  });

  it("falls back when empty", () => {
    expect(slugifyHeading("   ")).toBe("section");
  });
});

describe("toHeadingId", () => {
  it("deduplicates with numeric suffix", () => {
    const seen = new Map<string, number>();
    expect(toHeadingId("Scope", seen)).toBe("scope");
    expect(toHeadingId("Scope", seen)).toBe("scope-1");
    expect(toHeadingId("Scope", seen)).toBe("scope-2");
  });
});
