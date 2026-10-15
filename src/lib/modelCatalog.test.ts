import { describe, expect, it } from "vitest";

import type { InferenceModel } from "@/config/inferenceApiContent";

import {
  ALL_PROVIDERS,
  filterModels,
  getProviders,
  sortModelsByName,
} from "./modelCatalog";

const sampleModels: InferenceModel[] = [
  {
    id: "a",
    name: "Zeta Model",
    provider: "Z.ai",
    isNexiafy: false,
    features: [],
    pricing: { type: "tokens", input: "$1/M", output: "$2/M" },
  },
  {
    id: "b",
    name: "Alpha Nexiafy",
    provider: "Nexiafy",
    isNexiafy: true,
    features: [],
    pricing: { type: "tokens", input: "$0.5/M", output: "$1/M" },
  },
  {
    id: "c",
    name: "Beta Mistral",
    provider: "Mistral",
    isNexiafy: false,
    features: [],
    pricing: { type: "tokens", input: "$0.2/M", output: "$0.3/M" },
  },
];

describe("getProviders", () => {
  it("returns unique providers sorted alphabetically", () => {
    expect(getProviders(sampleModels)).toEqual(["Mistral", "Nexiafy", "Z.ai"]);
  });
});

describe("filterModels", () => {
  it("filters by provider", () => {
    const result = filterModels(sampleModels, {
      provider: "Mistral",
      nexiafyOnly: false,
      query: "",
    });
    expect(result.map((m) => m.id)).toEqual(["c"]);
  });

  it("filters nexiafy only", () => {
    const result = filterModels(sampleModels, {
      provider: ALL_PROVIDERS,
      nexiafyOnly: true,
      query: "",
    });
    expect(result.map((m) => m.id)).toEqual(["b"]);
  });

  it("filters by case-insensitive query", () => {
    const result = filterModels(sampleModels, {
      provider: ALL_PROVIDERS,
      nexiafyOnly: false,
      query: "zeta",
    });
    expect(result.map((m) => m.id)).toEqual(["a"]);
  });
});

describe("sortModelsByName", () => {
  it("sorts ascending by name", () => {
    const sorted = sortModelsByName(sampleModels, "asc");
    expect(sorted.map((m) => m.name)).toEqual([
      "Alpha Nexiafy",
      "Beta Mistral",
      "Zeta Model",
    ]);
  });

  it("sorts descending by name", () => {
    const sorted = sortModelsByName(sampleModels, "desc");
    expect(sorted.map((m) => m.name)).toEqual([
      "Zeta Model",
      "Beta Mistral",
      "Alpha Nexiafy",
    ]);
  });
});
