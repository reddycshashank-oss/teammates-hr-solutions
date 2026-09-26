import Image from "next/image";
import Link from "next/link";

const employerLinks = [
  {
    label: "Recruitment Services",
    href: "/services",
  },
  {
    label: "Staffing Solutions",
    href: "/services",
  },
  {
    label: "NAPS / Apprenticeship Support",
    href: "/services",
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
                src="/images/teammates_hr_solution_logo.png"
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