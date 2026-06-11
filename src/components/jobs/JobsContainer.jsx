"use client";

import { useMemo, useState } from "react";

import JobCard from "./JobCard";
import JobsFilter from "./JobsFilter";

export default function JobsContainer({ jobs }) {
  const [filters, setFilters] = useState({
    search: "",
    jobType: "all",
    category: "all",
    remoteOnly: false,
  });

  const categories = [
    ...new Set(jobs.map((job) => job.jobCategory)),
  ];

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        job.jobTitle.toLowerCase().includes(search) ||
        job.companyName.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search);

      const matchesType =
        filters.jobType === "all" ||
        job.jobType === filters.jobType;

      const matchesCategory =
        filters.category === "all" ||
        job.jobCategory === filters.category;

      const matchesRemote =
        !filters.remoteOnly || job.isRemote;

      return (
        matchesSearch &&
        matchesType &&
        matchesCategory &&
        matchesRemote
      );
    });
  }, [jobs, filters]);

  return (
    <div className="mt-3">
      <JobsFilter
        filters={filters}
        onFiltersChange={setFilters}
        categories={categories}        
      />

      <div className="mb-4 text-sm text-default-500">
        {filteredJobs.length} jobs found
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredJobs.map((job) => (
          <JobCard
            key={job._id}
            job={job}
          />
        ))}
      </div>
    </div>
  );
}