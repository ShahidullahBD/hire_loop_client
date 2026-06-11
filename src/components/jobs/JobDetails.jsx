"use client";

import Image from "next/image";
import Link from "next/link";

import { Card, Button } from "@heroui/react";

import {
  Briefcase,
  MapPin,
  Calendar,
  CircleDollarSign,
} from "lucide-react";

export default function JobDetails({ job }) {
  const deadline = new Date(job.deadline).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Main Content */}

      <div className="lg:col-span-2 space-y-6">
        {/* Header Card */}

        <Card>
          <Card.Content className="p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-start">
              <div className="relative h-20 w-20 overflow-hidden rounded-xl border bg-white">
                <Image
                  src={job.companyLogo}
                  alt={job.companyName}
                  height={80}
                  width={80}                
                  className="object-contain p-2"
                />
              </div>

              <div className="flex-1">
                <h1 className="text-3xl font-bold">
                  {job.jobTitle}
                </h1>

                <p className="mt-1 text-default-500">
                  {job.companyName}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="rounded-full bg-default-100 px-3 py-1 text-sm">
                    {job.jobCategory}
                  </span>

                  <span className="rounded-full bg-default-100 px-3 py-1 text-sm">
                    {job.jobType}
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-sm ${
                      job.isRemote
                        ? "bg-green-100 text-green-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                  >
                    {job.isRemote
                      ? "Remote"
                      : "On-site"}
                  </span>
                </div>
              </div>
            </div>
          </Card.Content>
        </Card>

        {/* Responsibilities */}

        <Card>
          <Card.Header>
            <Card.Title>
              Responsibilities
            </Card.Title>
          </Card.Header>

          <Card.Content>
            <p className="leading-7 text-default-600">
              {job.responsibilities}
            </p>
          </Card.Content>
        </Card>

        {/* Requirements */}

        <Card>
          <Card.Header>
            <Card.Title>
              Requirements
            </Card.Title>
          </Card.Header>

          <Card.Content>
            <p className="leading-7 text-default-600">
              {job.requirements}
            </p>
          </Card.Content>
        </Card>

        {/* Benefits */}

        <Card>
          <Card.Header>
            <Card.Title>
              Benefits
            </Card.Title>
          </Card.Header>

          <Card.Content>
            <p className="leading-7 text-default-600">
              {job.benefits}
            </p>
          </Card.Content>
        </Card>
      </div>

      {/* Sidebar */}

      <div>
        <Card className="sticky top-6">
          <Card.Header>
            <Card.Title>
              Job Overview
            </Card.Title>
          </Card.Header>

          <Card.Content>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <CircleDollarSign size={18} />

                <div>
                  <p className="text-xs text-default-500">
                    Salary
                  </p>

                  <p className="font-medium">
                    ${job.minSalary}k - ${job.maxSalary}k{" "}
                    {job.currency}
                  </p>
                </div>
              </div>

              <div className="border-t" />

              <div className="flex items-center gap-3">
                <MapPin size={18} />

                <div>
                  <p className="text-xs text-default-500">
                    Location
                  </p>

                  <p className="font-medium">
                    {job.location}
                  </p>
                </div>
              </div>

              <div className="border-t" />

              <div className="flex items-center gap-3">
                <Briefcase size={18} />

                <div>
                  <p className="text-xs text-default-500">
                    Employment Type
                  </p>

                  <p className="font-medium">
                    {job.jobType}
                  </p>
                </div>
              </div>

              <div className="border-t" />

              <div className="flex items-center gap-3">
                <Calendar size={18} />

                <div>
                  <p className="text-xs text-default-500">
                    Application Deadline
                  </p>

                  <p className="font-medium">
                    {deadline}
                  </p>
                </div>
              </div>

              <div className="border-t" />

              <div className="flex items-center gap-3">
                <Briefcase size={18} />

                <div>
                  <p className="text-xs text-default-500">
                    Work Mode
                  </p>

                  <p className="font-medium">
                    {job.isRemote
                      ? "Remote"
                      : "On-site"}
                  </p>
                </div>
              </div>
            </div>
          </Card.Content>

          <Card.Footer>
            <Button
              asChild
              color="primary"
              className="w-full"
            >
              <Link href={`/jobs/${job._id}/apply`}>
                Apply Now
              </Link>
            </Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
}