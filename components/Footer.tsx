import Image from "next/image";
import Link from "next/link";

const employerLinks = [
  {
    label: "Recruitment Services",
    href: "/for-employers/recruitment-services",
  },
  {
    label: "Staffing Solutions",
    href: "/for-employers/staffing-solutions",
  },
  {
    label: "NAPS / Apprenticeship Support",
    href: "/for-employers/naps-apprenticeship-support",
  },
];

const companyLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Internships",
    href: "/internships",
  },
  {
    label: "About Us",
    href: "/about-us",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact Us",
    href: "/contact-us",
  },
];

const industryLinks = [
  {
    label: "IT & Technology",
    href: "/industries/it-technology",
  },
  {
    label: "Manufacturing",
    href: "/industries/manufacturing",
  },
  {
    label: "Healthcare",
    href: "/industries/healthcare",
  },
  {
    label: "Logistics",
    href: "/industries/logistics",
  },
  {
    label: "Retail",
    href: "/industries/retail",
  },
  {
    label: "BPO & Customer Support",
    href: "/industries/bpo-customer-support",
  },
  {
    label: "BFSI",
    href: "/industries/bfsi",
  },
  {
    label: "Aerospace & Defence",
    href: "/industries/aerospace-defence",
  },
  {
    label: "Construction & Infrastructure",
    href: "/industries/construction-infrastructure",
  },
  {
    label: "Real Estate",
    href: "/industries/real-estate",
  },
  {
    label: "Textile & Apparel",
    href: "/industries/textile-apparel",
  },
  {
    label: "Education & EdTech",
    href: "/industries/education-edtech",
  },
];

const legalLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Terms",
    href: "/terms",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
];

type FooterCardProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterCard({ title, links }: FooterCardProps) {
  return (
    <div className="h-full rounded-[16px] border border-[#DFE2DF] bg-white p-6 sm:p-7">
      <h3 className="!mb-6 !text-[13px] !font-extrabold !leading-none !tracking-[0.12em] !text-[#545A5B]">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="group flex items-center justify-between gap-4 text-[14px] font-semibold leading-6 !text-[#545A5B] transition-colors duration-200 hover:!text-[#6D7E5A]"
            >
              <span>{link.label}</span>

              <span
                aria-hidden="true"
                className="shrink-0 !text-[#6D7E5A] transition-transform duration-200 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#C1C3AC]">

      {/* =========================================================
          MAIN FOOTER
      ========================================================= */}

      <div className="mx-auto w-full max-w-[1320px] px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:py-20">

        {/* =======================================================
            TOP FOUR CARDS
        ======================================================= */}

        <div className="grid items-stretch gap-5 sm:grid-cols-2 xl:grid-cols-[1fr_0.9fr_0.9fr_1.3fr]">

          {/* =====================================================
              LOGO + SOCIAL MEDIA
          ===================================================== */}

          <div className="h-full rounded-[16px] border border-[#DFE2DF] bg-white p-6 sm:p-7">

            <Link
              href="/"
              aria-label="TeamMates HR Solutions"
              className="inline-flex items-center"
            >
              <Image
                src="/images/teammates_footer_logo.png"
                alt="TeamMates HR Solutions"
                width={190}
                height={60}
                priority
                className="h-auto w-[160px] object-contain sm:w-[180px]"
              />
            </Link>

            {/* =================================================
                SOCIAL MEDIA
            ================================================= */}

            <div className="mt-8 flex flex-wrap items-center gap-3">

              {/* Instagram */}

              <a
                href="https://www.instagram.com/team.mateshrsolutions/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeamMates HR Solutions on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFE2DF] !text-[#6D7E5A] transition-all duration-200 hover:border-[#6D7E5A] hover:bg-[#6D7E5A] hover:!text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="3"
                    width="18"
                    height="18"
                    rx="5"
                  />

                  <circle
                    cx="12"
                    cy="12"
                    r="4.2"
                  />

                  <circle
                    cx="17.4"
                    cy="6.6"
                    r="1"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>

              {/* Facebook */}

              <a
                href="https://www.facebook.com/teammateshrsolution"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeamMates HR Solutions on Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFE2DF] !text-[#6D7E5A] transition-all duration-200 hover:border-[#6D7E5A] hover:bg-[#6D7E5A] hover:!text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M14 8h3V4.5c-.52-.07-1.84-.18-3.5-.18-3.47 0-5.85 2.12-5.85 6.02V13H4v3.9h3.65V24h4.48v-7.1h3.65l.58-3.9h-4.23v-2.3c0-1.13.31-1.9 1.87-1.9Z" />
                </svg>
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/company/team-mates-hr-solution/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TeamMates HR Solutions on LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFE2DF] !text-[#6D7E5A] transition-all duration-200 hover:border-[#6D7E5A] hover:bg-[#6D7E5A] hover:!text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M5.1 3.5A2.1 2.1 0 1 1 5.1 7.7a2.1 2.1 0 0 1 0-4.2ZM3.3 9h3.6v11.5H3.3V9Zm5.8 0h3.45v1.57h.05c.48-.91 1.65-1.87 3.4-1.87 3.63 0 4.3 2.39 4.3 5.5v6.3h-3.6v-5.59c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.69H9.1V9Z" />
                </svg>
              </a>

              {/* Email */}

              <a
                href="mailto:info@teammateshrsolutions.com"
                aria-label="Email TeamMates HR Solutions"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#DFE2DF] !text-[#6D7E5A] transition-all duration-200 hover:border-[#6D7E5A] hover:bg-[#6D7E5A] hover:!text-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                  />

                  <path d="m4 7 8 6 8-6" />
                </svg>
              </a>

            </div>
          </div>

          {/* =====================================================
              FOR EMPLOYERS
          ===================================================== */}

          <FooterCard
            title="For Employers"
            links={employerLinks}
          />

          {/* =====================================================
              COMPANY
          ===================================================== */}

          <FooterCard
            title="Company"
            links={companyLinks}
          />

          {/* =====================================================
              CONTACT DETAILS
          ===================================================== */}

          <div className="h-full rounded-[16px] border border-[#DFE2DF] bg-white p-6 sm:p-7">

            <h3 className="!mb-6 !text-[13px] !font-extrabold !leading-none !tracking-[0.12em] !text-[#545A5B]">
              Contact Details
            </h3>

            {/* PHONE */}

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF0EE] !text-[#6D7E5A]">

                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6.6 3.8 9 3.2c.6-.15 1.2.17 1.45.72l1.15 2.7c.22.52.08 1.12-.34 1.48L9.8 9.55a14.2 14.2 0 0 0 4.65 4.65l1.45-1.46c.37-.41.97-.55 1.49-.33l2.7 1.15c.55.24.87.85.72 1.45l-.6 2.4c-.15.58-.68.99-1.28.99C11.22 18.4 5.6 12.78 5.6 5.07c0-.6.41-1.13 1-1.28Z" />
                </svg>

              </div>

              <div>

                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] !text-[#A4A9A5]">
                  Phone
                </p>

                <div className="mt-1.5 flex flex-col gap-1">

                  <a
                    href="tel:08045148859"
                    className="text-[14px] font-semibold !text-[#545A5B] transition-colors duration-200 hover:!text-[#6D7E5A]"
                  >
                    080-45148859
                  </a>

                  <a
                    href="tel:+916360812255"
                    className="text-[14px] font-semibold !text-[#545A5B] transition-colors duration-200 hover:!text-[#6D7E5A]"
                  >
                    +91 6360812255
                  </a>

                </div>

              </div>

            </div>

            {/* OFFICE */}

            <div className="mt-6 flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EEF0EE] !text-[#6D7E5A]">

                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 21s7-6.1 7-12A7 7 0 0 0 5 9c0 5.9 7 12 7 12Z" />

                  <circle
                    cx="12"
                    cy="9"
                    r="2.3"
                  />
                </svg>

              </div>

              <div>

                <p className="text-[10px] font-extrabold uppercase tracking-[0.12em] !text-[#A4A9A5]">
                  Office
                </p>

                <p className="mt-1.5 max-w-[330px] text-[14px] font-semibold leading-6 !text-[#545A5B]">
                  #2065, 3rd Stage, 16th “B” Cross,
                  <br />
                  Mother Dairy Cross, Yelahanka New Town,
                  <br />
                  Bangalore - 560064
                </p>

              </div>

            </div>
          </div>
        </div>

        {/* =========================================================
            INDUSTRIES WE SERVE
        ========================================================= */}

        <div className="mt-12 border-t border-white/40 pt-10">

          {/* WHITE HEADING BAR */}

          <div className="rounded-[14px] border border-[#DFE2DF] bg-white px-6 py-6 sm:px-8 sm:py-7">

            <h2 className="!text-[18px] !font-extrabold !uppercase !tracking-[0.12em] !text-[#545A5B] sm:!text-[20px]">
              Industries We Serve
            </h2>

            <div className="mt-4 h-[4px] w-16 rounded-full bg-[#6D7E5A]" />

          </div>

          {/* INDUSTRY BUTTONS */}

          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {industryLinks.map((industry) => (
              <Link
                key={industry.href}
                href={industry.href}
                className="group flex min-h-[68px] items-center justify-between gap-4 rounded-[12px] border border-[#DFE2DF] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6D7E5A] hover:shadow-[0_8px_24px_rgba(56,71,42,0.08)]"
              >

                <span className="text-[14px] font-semibold leading-5 !text-[#545A5B] sm:text-[15px]">
                  {industry.label}
                </span>

                <span
                  aria-hidden="true"
                  className="shrink-0 text-[20px] font-medium !text-[#6D7E5A] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>

              </Link>
            ))}

          </div>
        </div>
      </div>

      {/* =========================================================
          BOTTOM BAR
      ========================================================= */}

      <div className="border-t border-white/30">

        <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">

          <p className="text-[13px] font-semibold !text-white">
            © 2026 TeamMates HR Solutions. All Rights Reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">

            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold !text-white transition-colors duration-200 hover:!text-white/75"
              >
                {link.label}
              </Link>
            ))}

          </div>

        </div>
      </div>
    </footer>
  );
}