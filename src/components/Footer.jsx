"use client";

import Link from "next/link";
import { LogoFacebook, LogoLinkedin, LogoGithub } from "@gravity-ui/icons";

const productLinks = [
  { label: "Job Discovery", href: "/jobs" },
  { label: "Worker AI", href: "/worker-ai" },
  { label: "Companies", href: "/companies" },
  { label: "Salary Data", href: "/salary-data" },
];

const navigationLinks = [
  { label: "Help Center", href: "/help-center" },
  { label: "Career Library", href: "/career-library" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Brand Guideline", href: "/brand-guideline" },
  { label: "Newsroom", href: "/newsroom" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/5 bg-[#050816]">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#4338ca20,transparent_35%)]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/">
              <h2 className="text-4xl font-extrabold tracking-tight">
                <span className="text-sky-500">hire</span>
                <span className="text-orange-500">loop</span>
              </h2>
            </Link>

            <p className="max-w-xs text-sm leading-7 text-gray-400">
              The AI-native career platform. Built for people who
              take their work seriously.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gray-300 transition-all hover:bg-indigo-600 hover:text-white"
              >
                <LogoFacebook />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-600 text-white transition-all hover:scale-105"
              >
                <LogoGithub />
              </Link>

              <Link
                href="#"
                className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-gray-300 transition-all hover:bg-indigo-600 hover:text-white"
              >
                <LogoLinkedin />
              </Link>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-indigo-400">
              Product
            </h3>

            <ul className="space-y-4">
              {productLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigations */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-indigo-400">
              Navigations
            </h3>

            <ul className="space-y-4">
              {navigationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-lg font-semibold text-indigo-400">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-gray-400 transition hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Section */}
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <p className="text-sm text-gray-500">
            Copyright © 2024 — Hire Loop
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-gray-500">
            <Link
              href="/terms"
              className="hover:text-gray-300 transition"
            >
              Terms & Policy
            </Link>

            <span className="hidden md:block">•</span>

            <Link
              href="/privacy"
              className="hover:text-gray-300 transition"
            >
              Privacy Guideline
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}