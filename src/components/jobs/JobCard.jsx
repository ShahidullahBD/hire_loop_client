"use client";

import Image from "next/image";
import Link from "next/link";

import {
  Card,
  Chip,
  Button,
} from "@heroui/react";

import {
  Briefcase,
  MapPin,
  Calendar,
  CircleDollarSign,
} from "lucide-react";

const JobCard = ({ job }) => {
  const formattedDeadline = new Date(job.deadline).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <Card className="w-full border border-default-200 hover:shadow-lg transition-all duration-300">
      <Card.Header className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-14 overflow-hidden rounded-xl border bg-white">
            <Image
              src={job.companyLogo}
              alt={job.companyName}
              fill
              className="object-contain p-2"
            />
          </div>

          <div>
            <h3 className="font-semibold text-lg">
              {job.companyName}
            </h3>

            <p className="text-sm text-default-500">
              {job.jobCategory}
            </p>
          </div>
        </div>

        <Chip
          size="sm"
          color={job.isRemote ? "success" : "primary"}
          variant="flat"
        >
          {job.isRemote ? "Remote" : "On-site"}
        </Chip>
      </Card.Header>

      <Card.Content className="space-y-4">
        <div>
          <h2 className="text-xl font-bold">
            {job.jobTitle}
          </h2>
        </div>

        <div className="flex flex-wrap gap-2">
          <Chip
            variant="bordered"
            // startContent={<Briefcase size={14} />}
          >
            {job.jobType}
          </Chip>

          <Chip variant="bordered">
            {job.jobCategory}
          </Chip>
        </div>

        <div className="space-y-2 text-sm text-default-600">
          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{job.location}</span>
          </div>

          <div className="flex items-center gap-2">
            <CircleDollarSign size={16} />
            <span>
              ${job.minSalary}k - ${job.maxSalary}k {job.currency}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar size={16} />
            <span>Apply before {formattedDeadline}</span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm text-default-500">
          {job.responsibilities}
        </p>
      </Card.Content>

      <Card.Footer className="flex justify-between gap-2">
        <Link
          href={`/jobs/${job._id}`}
          variant="bordered"
          className="flex-1"
        >
          View Details
        </Link>

        <Link          
          href={`/jobs/${job._id}`}
          color="primary"
          className="flex-1"
        >
          Apply Now
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default JobCard;