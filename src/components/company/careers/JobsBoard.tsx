"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

import {
  jobDepartments,
  jobListings,
  jobLocations,
} from "@/config/careersContent";
import { filterJobs } from "@/lib/filterJobs";

export default function JobsBoard() {
  const [department, setDepartment] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = useMemo(
    () => filterJobs(jobListings, { department, location }),
    [department, location],
  );

  return (
    <div className="teamtailor-jobs-widget flex flex-col gap-2 md:gap-6">
      <div className="teamtailor-jobs__filters flex flex-col gap-3 md:flex-row md:gap-6">
        <div className="teamtailor-jobs__select-wrapper flex-1">
          <select
            className="teamtailor-jobs__select w-full rounded-xl border border-gray-9 bg-gray-11 px-4 py-3 text-base text-gray-1"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            aria-label="Filter by department"
          >
            <option value="">All Departments</option>
            {jobDepartments.map((dept) => (
              <option key={dept} value={dept}>
                {dept}
              </option>
            ))}
          </select>
        </div>
        <div className="teamtailor-jobs__select-wrapper flex-1">
          <select
            className="teamtailor-jobs__select w-full rounded-xl border border-gray-9 bg-gray-11 px-4 py-3 text-base text-gray-1"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            aria-label="Filter by location"
          >
            <option value="">All locations</option>
            {jobLocations.map((loc) => (
              <option key={loc} value={loc}>
                {loc}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="teamtailor-jobs__job-wrapper flex flex-col gap-4 border-t border-gray-9 pt-6">
        {filteredJobs.length === 0 ? (
          <p className="text-center text-gray-6">No openings match your filters.</p>
        ) : (
          filteredJobs.map((job) => (
            <div key={job.id} className="teamtailor-jobs__job border-b border-gray-9 pb-4">
              <Link
                href={job.href}
                className="teamtailor-jobs__job-title block text-lg font-medium text-gray-1 transition-colors hover:text-brand-rose-1"
              >
                {job.title}
              </Link>
              <span className="teamtailor-jobs__job-info mt-1 block text-sm text-gray-6">
                {job.department ? (
                  <>
                    <span className="teamtailor-jobs__department">{job.department}</span>
                    {" - "}
                  </>
                ) : null}
                <span className="teamtailor-jobs__location">{job.location}</span>
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
