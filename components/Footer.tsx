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

type FooterColumnProps = {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
};

function FooterColumn({
  title,
  links,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="!mb-6 !text-[13px] !font-extrabold !leading-none !tracking-[0.12em] !text-white">
        {title}
      </h3>

      <ul className="space-y-3">
        {links.map((link) => (
          <li key={`${link.label}-${link.href}`}>
            <Link
              href={link.href}
              className="text-[15px] font-semibold leading-6 !text-white transition-colors duration-200 hover:!text-white/75"
            >
              {link.label}
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

      <div className="mx-auto w-full max-w-[1280px] px-4 py-14 sm:px-6 md:px-8 md:py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2.85fr] lg:gap-16">

          {/* =====================================================
              BRAND
          ===================================================== */}

          <div className="max-w-[360px]">
            <Link
              href="/"
              aria-label="TeamMates HR Solutions"
              className="inline-flex items-center"
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

            <p className="mt-6 max-w-[320px] text-[15px] font-semibold leading-7 !text-white">
              Connecting talent with opportunities and helping businesses
              build stronger teams across India.
            </p>

            <div className="mt-8">
              <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] !text-white">
                Recruitment & Staffing
              </p>

              <p className="mt-2 text-[14px] font-semibold !text-white">
                Bangalore · India
              </p>

              {/* =================================================
                  SOCIAL MEDIA
              ================================================= */}

              <div className="mt-5 flex items-center gap-3">

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/team.mateshrsolutions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TeamMates HR Solutions on Instagram"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 !text-white transition-all duration-200 hover:border-white hover:bg-white hover:!text-[#6D7E5A]"
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 !text-white transition-all duration-200 hover:border-white hover:bg-white hover:!text-[#6D7E5A]"
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
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/40 !text-white transition-all duration-200 hover:border-white hover:bg-white hover:!text-[#6D7E5A]"
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

              </div>
            </div>
          </div>

          {/* =====================================================
              FOOTER NAVIGATION
          ===================================================== */}

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3">

            <FooterColumn
              title="For Employers"
              links={employerLinks}
            />

            <FooterColumn
              title="Company"
              links={companyLinks}
            />

            <FooterColumn
              title="Industries"
              links={industryLinks}
            />

          </div>
        </div>

        {/* =========================================================
            CONTACT INFORMATION
        ========================================================= */}

        <div className="mt-14 border-t border-white/30 pt-8">
          <div className="grid gap-8 sm:grid-cols-3">

            {/* PHONE */}

            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] !text-white">
                Phone
              </p>

              <div className="mt-3 flex flex-col gap-2">

                <a
                  href="tel:08045148859"
                  className="text-[15px] font-semibold !text-white transition-colors duration-200 hover:!text-white/75"
                >
                  080-45148859
                </a>

                <a
                  href="tel:+916360812255"
                  className="text-[15px] font-semibold !text-white transition-colors duration-200 hover:!text-white/75"
                >
                  +91 6360812255
                </a>

              </div>
            </div>

            {/* EMAIL */}

            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] !text-white">
                Email
              </p>

              <a
                href="mailto:info@teammateshrsolutions.com"
                className="mt-3 inline-block text-[15px] font-semibold !text-white transition-colors duration-200 hover:!text-white/75"
              >
                info@teammateshrsolutions.com
              </a>
            </div>

            {/* OFFICE */}

            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.12em] !text-white">
                Office
              </p>

              <p className="mt-3 max-w-[330px] text-[15px] font-semibold leading-6 !text-white">
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
          BOTTOM BAR
      ========================================================= */}

      <div className="border-t border-white/30">
        <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-4 px-4 py-5 sm:px-6 md:flex-row md:items-center md:justify-between md:px-8">

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