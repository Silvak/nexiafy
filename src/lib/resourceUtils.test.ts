import { describe, expect, it } from "vitest";

import {
  filterResources,
  formatResourceDate,
  getReadingTime,
  type ResourceListItem,
} from "./resourceUtils";

const sampleItems: ResourceListItem[] = [
  {
    documentId: "doc-1",
    slug: "alpha",
    title: "Alpha launch",
    excerpt: "First product news",
    date: "2026-10-01",
    image: "/images/image1.png",
    imageAlt: "Alpha",
    category: "news",
    author: "Nexiafy",
  },
  {
    documentId: "doc-2",
    slug: "beta",
    title: "Beta press release",
    excerpt: "Partnership announcement",
    date: "2026-09-15",
    image: "/images/image2.png",
    imageAlt: "Beta",
    category: "press",
    author: "Nexiafy",
  },
];

describe("formatResourceDate", () => {
  it("formats ISO dates in en-US long form", () => {
    expect(formatResourceDate("2026-09-30")).toMatch(/September 30, 2026/);
  });
});

describe("getReadingTime", () => {
  it("returns at least 1 minute", () => {
    expect(getReadingTime("word")).toBe("1 min read");
  });

  it("scales with word count", () => {
    const words = Array.from({ length: 400 }, () => "word").join(" ");
    expect(getReadingTime(words)).toBe("2 min read");
  });
});

describe("filterResources", () => {
  it("filters by category", () => {
    const result = filterResources(sampleItems, "", "press");
    expect(result).toHaveLength(1);
    expect(result[0]?.slug).toBe("beta");
  });

  it("filters by search query", () => {
    const result = filterResources(sampleItems, "launch", "all");
    expect(result).toHaveLength(1);
    expect(result[0]?.slug).toBe("alpha");
  });
});
