"use client";

import { useState } from "react";
import { Button } from "@heroui/react";

import {
  BarsAscendingAlignLeftArrowUp,
  ThunderboltFill,
  ChartColumn,
  Plus,
  ArrowRight,
  CrownDiamond,
  SquareFill,
} from "@gravity-ui/icons";

const plans = {
  monthly: [
    {
      name: "Starter",
      price: 0,
      icon: <CrownDiamond/>,
      featured: false,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Growth",
      price: 17,
      icon: <BarsAscendingAlignLeftArrowUp/>,
      featured: true,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Premium",
      price: 99,
      icon: <ThunderboltFill/>,
      featured: false,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
    },
  ],

  yearly: [
    {
      name: "Starter",
      price: 0,
      icon: <CrownDiamond/>,
      featured: false,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Growth",
      price: 13,
      icon: <ChartColumn/>,
      featured: true,
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
    },
    {
      name: "Premium",
      price: 74,
      icon: <ThunderboltFill/>,
      featured: false,
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
    },
  ],
};

export default function PricingSection() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="bg-black py-24 px-4">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center">
          <p className="text-indigo-400 uppercase tracking-[0.3em] text-sm mb-4 flex gap-3 justify-center items-center">
            <SquareFill/>Pricing<SquareFill/>
          </p>

          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Pay for the leverage,
            <br />
            not the listings
          </h2>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mt-12">
          <div className="bg-zinc-900 rounded-full p-1 flex">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-6 py-2 rounded-full transition ${billing === "monthly"
                  ? "bg-white text-black"
                  : "text-gray-400"
                }`}
            >
              Monthly
            </button>

            <button
              onClick={() => setBilling("yearly")}
              className={`px-6 py-2 rounded-full transition flex items-center gap-2 ${billing === "yearly"
                  ? "bg-white text-black"
                  : "text-gray-400"
                }`}
            >
              Yearly

              <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full">
                25%
              </span>
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mt-16">
          {plans[billing].map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl border p-8 transition-all duration-300 ${plan.featured
                  ? "border-white/20 bg-zinc-900 shadow-lg"
                  : "border-white/10 bg-zinc-950"
                }`}
            >
              {/* Plan Header */}
              <div className="flex items-center justify-between">
                <div className="flex gap-5 items-center">
                  <div>{plan.icon}</div>
                  <h3 className="text-2xl font-semibold text-white">
                    {plan.name}
                  </h3>
                </div>

                <div className="text-right">
                  <h4 className="text-5xl font-bold text-white">
                    ${plan.price}
                  </h4>

                  <p className="text-gray-400 text-sm">
                    /month
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-300 mt-8">
                Start building your insights hub:
              </p>

              {/* Features */}
              <ul className="space-y-4 mt-8">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-3 text-gray-400"
                  >
                    <div className="w-6 h-6 rounded-md bg-zinc-800 flex items-center justify-center">
                      +
                    </div>

                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <Button
                className={`w-full mt-10 h-14 font-medium ${plan.featured
                    ? "bg-white text-black"
                    : "bg-zinc-800 text-white"
                  }`}
              >
                Choose This Plan →
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}