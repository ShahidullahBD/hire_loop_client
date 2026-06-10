"use client";

import {
  Magnifier,
  ChartColumn,
  House,
  Bookmark,
  MagicWand,
  TextAlignLeft,
  Layers3Diagonal,
  ArrowUpRight,
  SquareFill,
} from "@gravity-ui/icons";

const features = [
  {
    icon: <Magnifier/>,
    title: "Smart Search",
    description: "Find your ideal job with advanced filters.",
  },
  {
    icon: <ChartColumn/>,
    title: "Salary Insights",
    description: "Get real salary data to negotiate confidently.",
  },
  {
    icon: <House/>,
    title: "Top Companies",
    description: "Apply to vetted companies that are hiring.",
  },
  {
    icon: <Bookmark/>,
    title: "Saved Jobs",
    description: "Manage applications & favorites on your dashboard.",
  },
  {
    icon: <MagicWand/>,
    title: "One-Click Apply",
    description: "Simplify your job applications for an easier process.",
  },
  {
    icon: <TextAlignLeft/>,
    title: "Resume Builder",
    description: "Create professional resumes with modern templates.",
  },
  {
    icon: <Layers3Diagonal/>,
    title: "Skill-Based Matching",
    description: "Discover jobs that match your skills and experience.",
  },
  {
    icon: <ArrowUpRight/>,
    title: "Career Growth Resources",
    description: "Boost your career with quick interview tips.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#08090D] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-400 mb-6">
            <SquareFill/>Features Job<SquareFill/>
          </div>

          <h2 className="text-white text-4xl md:text-6xl font-bold leading-tight">
            Everything you need
            <br />
            to succeed
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-12">
          {features.map((feature) => {
            // const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="flex items-start gap-5 group"
              >
                {/* Icon Box */}
                <div className="shrink-0 w-16 h-16 rounded-xl border border-white/10 bg-linear-to-b from-black to-zinc-900 flex items-center justify-center">
                  {/* <Icon
                    width={28}
                    height={28}
                    className="text-fuchsia-300"
                  /> */}
                  <div>{feature.icon}</div>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-white text-xl font-medium mb-2">
                    {feature.title}
                  </h3>

                  <p className="text-gray-400 leading-8">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}