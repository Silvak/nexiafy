import type { JobListing } from "@/config/careersContent";

export interface JobFilters {
  department: string;
  location: string;
}

export function filterJobs(
  jobs: JobListing[],
  filters: JobFilters,
): JobListing[] {
  return jobs.filter((job) => {
    const departmentMatch =
      !filters.department ||
      (job.department !== undefined &&
        job.department.toLowerCase() === filters.department.toLowerCase());
    const locationMatch =
      !filters.location ||
      job.location.toLowerCase().includes(filters.location.toLowerCase());
    return departmentMatch && locationMatch;
  });
}
