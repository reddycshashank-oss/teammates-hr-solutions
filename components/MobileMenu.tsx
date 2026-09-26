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
      {/* Mobile Header */}
      <div className="flex h-[68px] items-center justify-between bg-[#6D7E5A] px-4 sm:px-6">
        {/* Logo */}
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

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation menu"
          className="flex h-[40px] w-[40px] shrink-0 items-center justify-center border border-white/70 text-[24px] font-light leading-none text-white transition-colors duration-200 hover:border-white hover:bg-white hover:text-[#6D7E5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#6D7E5A]"
        >
          ×
        </button>
      </div>

      {/* Navigation Content */}
      <div className="h-[calc(100vh-68px)] overflow-y-auto px-4 py-7 sm:px-6">
        <nav aria-label="Mobile navigation">
          {/* Navigation Links */}
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

          {/* CTA Buttons */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {/* Find Jobs */}
            <Link
              href="/jobs"
              onClick={onClose}
              className="group flex h-[52px] items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-6 text-[13px] font-semibold tracking-[-0.01em] text-white transition-colors duration-200 hover:bg-[#38472A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
            >
              <span className="text-white">Find Jobs</span>

              <span
                aria-hidden="true"
                className="text-white transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

            {/* Contact Us */}
            <Link
              href="/contact-us"
              onClick={onClose}
              className="group flex h-[52px] items-center justify-center gap-3 rounded-full border border-[#6D7E5A] bg-white px-6 text-[13px] font-semibold tracking-[-0.01em] text-[#6D7E5A] transition-colors duration-200 hover:bg-[#6D7E5A] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
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

          {/* Description */}
          <div className="mt-10 border-t border-[#A4A9A5]/40 pt-6">
            <p className="max-w-[340px] text-[14px] leading-7 text-[#6F746F]">
              Connecting people with opportunities and helping businesses
              build stronger teams.
            </p>
          </div>
        </nav>
      </div>
    </div>
  );
}