import { describe, expect, it } from "vitest";

import { jobListings } from "@/config/careersContent";

import { filterJobs } from "./filterJobs";

describe("filterJobs", () => {
  it("returns all jobs when filters are empty", () => {
    expect(filterJobs(jobListings, { department: "", location: "" })).toHaveLength(
      jobListings.length,
    );
  });

  it("filters by department and location", () => {
    const result = filterJobs(jobListings, {
      department: "Growth & Sales",
      location: "Madrid",
    });
    expect(result.length).toBeGreaterThan(0);
    expect(result.every((j) => j.department === "Growth & Sales")).toBe(true);
    expect(result.every((j) => j.location.includes("Madrid"))).toBe(true);
  });
});
