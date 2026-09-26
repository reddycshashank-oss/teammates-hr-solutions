"use client";

import Link from "next/link";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

const navigation = [
  { label: "Home", href: "/" },
  { label: "Internships", href: "/internships" },
  { label: "For Candidates", href: "/for-candidates" },
  { label: "For Employers", href: "/for-employers" },
  { label: "Industries", href: "/industries" },
  { label: "About", href: "/about-us" },
  { label: "Blog", href: "/blog" },
];

export default function MobileMenu({
  open,
  onClose,
}: MobileMenuProps) {
  if (!open) return null;

  return (
    <div
      id="mobile-navigation"
      className="fixed inset-0 z-[100] bg-[#FDFDFD] lg:hidden"
    >
      {/* =====================================================
          TOP BAR
      ====================================================== */}
      <div className="flex h-[68px] items-center justify-between border-b border-[#A4A9A5]/40 px-4 sm:px-6">

        {/* LOGO */}
        <Link
          href="/"
          onClick={onClose}
          aria-label="TeamMates HR Solutions Home"
          className="flex shrink-0 items-center"
        >
          <img
            src="/images/teammates_hr_solutions_logo.png"
            alt="TeamMates HR Solutions"
            className="h-auto w-[155px] object-contain sm:w-[175px]"
          />
        </Link>

        {/* CLOSE BUTTON */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex h-[40px] w-[40px] shrink-0 items-center justify-center border border-[#A4A9A5] text-[24px] font-light leading-none text-[#111111] transition-colors duration-200 hover:border-[#6D7E5A] hover:bg-[#6D7E5A] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          ×
        </button>
      </div>

      {/* =====================================================
          MENU CONTENT
      ====================================================== */}
      <div className="h-[calc(100vh-68px)] overflow-y-auto px-4 py-7 sm:px-6">
        <nav aria-label="Mobile navigation">

          {/* =================================================
              NAVIGATION LINKS
          ================================================== */}
          <div className="border-t border-[#A4A9A5]/40">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="group flex min-h-[58px] items-center justify-between border-b border-[#A4A9A5]/40 text-[#111111] transition-colors duration-200 hover:text-[#6D7E5A]"
              >
                <span className="text-[18px] font-semibold tracking-[-0.025em]">
                  {item.label}
                </span>

                <span
                  aria-hidden="true"
                  className="text-[18px] text-[#A4A9A5] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#6D7E5A]"
                >
                  →
                </span>
              </Link>
            ))}
          </div>

          {/* =================================================
              CTA BUTTONS
          ================================================== */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">

            {/* FIND JOBS */}
            <Link
              href="/jobs"
              onClick={onClose}
              className="group flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-6 text-[13px] font-semibold tracking-[-0.01em] text-[#FFFFFF] transition-colors duration-200 hover:bg-[#38472A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
            >
              <span>Find Jobs</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            {/* CONTACT US */}
            <Link
              href="/contact-us"
              onClick={onClose}
              className="group flex h-[52px] items-center justify-center gap-3 rounded-full border border-[#6D7E5A] bg-[#FFFFFF] px-6 text-[13px] font-semibold tracking-[-0.01em] text-[#6D7E5A] transition-colors duration-200 hover:bg-[#6D7E5A] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
            >
              <span>Contact Us</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

          </div>

          {/* =================================================
              SUPPORTING BRAND MESSAGE
          ================================================== */}
          <div className="mt-10 border-t border-[#A4A9A5]/40 pt-6">
            <p className="max-w-[340px] text-[14px] leading-7 text-[#A4A9A5]">
              Connecting people with opportunities and helping businesses
              build stronger teams.
            </p>
          </div>

        </nav>
      </div>
    </div>
  );
}