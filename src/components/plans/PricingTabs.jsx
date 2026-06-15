"use client";

import { useState } from "react";
import { Card } from "@heroui/react";

import PricingCard from "./PricingCard";

const pricingPlans = {
  seekers: [
    {
      name: "Free",
      id: "seeker_free",
      price: "$0",
      period: "/forever",
      features: [
        "Browse & save up to 10 jobs",
        "Apply to up to 3 jobs per month",
        "Basic profile",
        "Email alerts",
      ],
    },
    {
      name: "Pro",
      id: "seeker_pro",
      price: "$19",
      period: "/month",
      popular: true,
      features: [
        "Apply to up to 30 jobs per month",
        "Unlimited saved jobs",
        "Application tracking",
        "Salary insights",
      ],
    },
    {
      name: "Premium",
      id: "seeker_premium",
      price: "$39",
      period: "/month",
      features: [
        "Everything in Pro",
        "Unlimited applications",
        "Profile boost to recruiters",
        "Early access to new jobs",
        "Priority support",
      ],
    },
  ],

  recruiters: [
    {
      name: "Free",
      id: "recruiter_free",
      price: "$0",
      period: "/forever",
      features: [
        "Up to 3 active job posts",
        "Basic applicant management",
        "Standard listing visibility",
      ],
    },
    {
      name: "Growth",
      id: "recruiter_growth",
      price: "$49",
      period: "/month",
      popular: true,
      features: [
        "Up to 10 active job posts",
        "Applicant tracking",
        "Basic analytics",
        "Email support",
      ],
    },
    {
      name: "Enterprise",
      id: "recruiter_enterprise",
      price: "$149",
      period: "/month",
      features: [
        "Up to 50 active job posts",
        "Advanced analytics dashboard",
        "Featured job listings",
        "Team collaboration",
        "Custom branding",
        "Priority support",
      ],
    },
  ],
};

export default function PricingTabs() {
  const [type, setType] = useState("seekers");

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="inline-flex rounded-xl border p-1">
          <button
            onClick={() => setType("seekers")}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
              type === "seekers"
                ? "bg-black text-white"
                : ""
            }`}
          >
            For Job Seekers
          </button>

          <button
            onClick={() => setType("recruiters")}
            className={`rounded-lg px-5 py-2 text-sm font-medium transition ${
              type === "recruiters"
                ? "bg-black text-white"
                : ""
            }`}
          >
            For Recruiters
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {pricingPlans[type].map((plan) => (
          <PricingCard
            key={plan.name}
            plan={plan}
          />
        ))}
      </div>
    </div>
  );
}