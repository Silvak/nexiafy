import { describe, expect, it } from "vitest";

import type { DeploymentModel } from "@/config/deploymentContent";

import { filterDeploymentModels } from "./deploymentModels";

const sampleModels: DeploymentModel[] = [
  {
    id: "a",
    name: "Quasar 438B",
    parameters: "438",
    tagLabel: "Nexiafy",
  },
  {
    id: "b",
    name: "Carina 60B",
    parameters: "60",
    tagLabel: "Nexiafy",
  },
  {
    id: "c",
    name: "Other Model",
    parameters: "7",
    tagLabel: "Partner",
  },
];

describe("filterDeploymentModels", () => {
  it("returns all models when filters are empty", () => {
    expect(
      filterDeploymentModels(sampleModels, { query: "", onlyOwn: false }),
    ).toHaveLength(3);
  });

  it("filters by query on name and tag", () => {
    const result = filterDeploymentModels(sampleModels, {
      query: "carina",
      onlyOwn: false,
    });
    expect(result).toHaveLength(1);
    expect(result[0].id).toBe("b");
  });

  it("filters to Nexiafy-tagged models when onlyOwn is true", () => {
    const result = filterDeploymentModels(sampleModels, {
      query: "",
      onlyOwn: true,
    });
    expect(result).toHaveLength(2);
    expect(result.every((m) => m.tagLabel === "Nexiafy")).toBe(true);
  });
});
