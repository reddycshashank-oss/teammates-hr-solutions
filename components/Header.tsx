"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Internships", href: "/internships" },
  { label: "For Candidates", href: "/for-candidates" },
  { label: "For Employers", href: "/for-employers" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* =========================================================
          HEADER
      ========================================================= */}
      <header className="sticky top-0 z-50 w-full bg-[#6D7E5A]">
        <div className="mx-auto flex h-[82px] w-full max-w-[1280px] items-center justify-between px-4 sm:px-6 md:px-8">

          {/* =====================================================
              LOGO
          ===================================================== */}
          <Link
            href="/"
            aria-label="TeamMates HR Solutions"
            className="group flex shrink-0 items-center"
          >
            <Image
              src="/images/teammates_hr_solutions_logo.png"
              alt="TeamMates HR Solutions"
              width={190}
              height={60}
              priority
              className="h-auto w-[160px] object-contain sm:w-[180px]"
            />
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center lg:flex"
          >
            <div className="flex items-center gap-7 xl:gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative whitespace-nowrap py-3 text-[15px] font-bold tracking-[-0.01em] !text-white transition-colors duration-200 hover:!text-white/80"
                >
                  <span className="!text-white">
                    {item.label}
                  </span>

                  <span
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-[2px] w-0 bg-white transition-all duration-200 group-hover:w-full"
                  />
                </Link>
              ))}
            </div>
          </nav>

          {/* =====================================================
              DESKTOP CTA BUTTONS
          ===================================================== */}
          <div className="hidden items-center gap-3 lg:flex">

            {/* FIND JOBS */}
            <Link
              href="/jobs"
              className="group flex h-12 items-center justify-center gap-3 rounded-full !bg-white px-6 text-[14px] font-bold !text-[#38472A] transition-all duration-200 hover:!bg-white hover:!text-[#6D7E5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6D7E5A]"
            >
              <span className="!text-[#38472A] group-hover:!text-[#6D7E5A]">
                Find Jobs
              </span>

              <span
                aria-hidden="true"
                className="!text-[#38472A] text-[18px] transition-transform duration-200 group-hover:translate-x-1 group-hover:!text-[#6D7E5A]"
              >
                →
              </span>
            </Link>

            {/* CONTACT US */}
            <Link
              href="/contact-us"
              className="group flex h-12 items-center justify-center gap-3 rounded-full border-2 border-white !bg-transparent px-6 text-[14px] font-bold !text-white transition-all duration-200 hover:!bg-white hover:!text-[#38472A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6D7E5A]"
            >
              <span className="!text-white group-hover:!text-[#38472A]">
                Contact Us
              </span>

              <span
                aria-hidden="true"
                className="!text-white text-[18px] transition-transform duration-200 group-hover:translate-x-1 group-hover:!text-[#38472A]"
              >
                →
              </span>
            </Link>

          </div>

          {/* =====================================================
              MOBILE MENU BUTTON
          ===================================================== */}
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white !text-white transition-colors duration-200 hover:!bg-white hover:!text-[#38472A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6D7E5A] lg:hidden"
          >
            <span
              aria-hidden="true"
              className="flex flex-col gap-[5px]"
            >
              <span
                className={`block h-px w-5 bg-current transition-transform duration-200 ${
                  mobileOpen
                    ? "translate-y-[6px] rotate-45"
                    : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition-opacity duration-200 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`block h-px w-5 bg-current transition-transform duration-200 ${
                  mobileOpen
                    ? "-translate-y-[6px] -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>

        </div>
      </header>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}
      <MobileMenu
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
      />
    </>
  );
}