"use client";

import { Card } from "@heroui/react";
import {
  FileText,
  Persons,
  Thunderbolt,
  CircleCheck,
} from "@gravity-ui/icons";

const stats = [
  {
    title: "Total Job Posts",
    value: 48,
    icon: FileText,
  },
  {
    title: "Total Applicants",
    value: "1,284",
    icon: Persons,
  },
  {
    title: "Active Jobs",
    value: 18,
    icon: Thunderbolt,
  },
  {
    title: "Jobs Closed",
    value: 32,
    icon: CircleCheck,
  },
];

export default function DashboardStatsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 my-10">
      {stats.map((item, index) => {
        const Icon = item.icon;

        return (
          <Card
            key={index}
            className="bg-zinc-950 border border-zinc-800 p-6 rounded-2xl shadow-sm hover:border-zinc-700 transition-all duration-300"
          >
            <div className="flex flex-col gap-5">
              <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center">
                <Icon className="w-5 h-5 text-zinc-300" />
              </div>

              <div>
                <p className="text-sm text-zinc-400 mb-1">
                  {item.title}
                </p>

                <h2 className="text-3xl font-semibold text-white">
                  {item.value}
                </h2>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}