import type { Metadata } from "next";
import Link from "next/link";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Recruitment Services Across Industries in India | TeamMates",
  description:
    "Explore TeamMates HR Solutions recruitment and staffing expertise across IT, manufacturing, healthcare, logistics, retail, BFSI, aerospace and other industries.",
};

const industries = [
  {
    title: "IT & Technology",
    href: "/industries/it-technology",
    description:
      "Recruitment support for technology, software, IT services and digital roles across different experience levels.",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description:
      "Workforce solutions for manufacturing operations, production, quality, maintenance, engineering and related roles.",
  },
  {
    title: "Healthcare",
    href: "/industries/healthcare",
    description:
      "Recruitment support for healthcare organizations and professionals across relevant operational and support functions.",
  },
  {
    title: "Logistics",
    href: "/industries/logistics",
    description:
      "Talent support for logistics, supply chain, warehousing, transportation and distribution requirements.",
  },
  {
    title: "Retail",
    href: "/industries/retail",
    description:
      "Recruitment solutions for retail businesses across store operations, sales, customer service and support functions.",
  },
  {
    title: "BPO & Customer Support",
    href: "/industries/bpo-customer-support",
    description:
      "Workforce support for customer service, BPO, voice, non-voice and customer experience requirements.",
  },
  {
    title: "BFSI",
    href: "/industries/bfsi",
    description:
      "Recruitment support for banking, financial services and insurance organizations across relevant workforce requirements.",
  },
  {
    title: "Aerospace & Defence",
    href: "/industries/aerospace-defence",
    description:
      "Talent support for aerospace and defence organizations requiring skilled technical and operational professionals.",
  },
  {
    title: "Construction & Infrastructure",
    href: "/industries/construction-infrastructure",
    description:
      "Recruitment support for construction, infrastructure, engineering and project-related workforce requirements.",
  },
  {
    title: "Real Estate",
    href: "/industries/real-estate",
    description:
      "Workforce solutions for real estate businesses across sales, operations, property and support functions.",
  },
  {
    title: "Textile & Apparel",
    href: "/industries/textile-apparel",
    description:
      "Recruitment support for textile and apparel organizations across production, quality, operations and related roles.",
  },
  {
    title: "Education & EdTech",
    href: "/industries/education-edtech",
    description:
      "Talent support for educational institutions and EdTech organizations across relevant academic, operational and support roles.",
  },
];

const recruitmentApproach = [
  {
    title: "Understand",
    description:
      "We understand the workforce requirement, role expectations, skills and experience needed for the position.",
  },
  {
    title: "Identify",
    description:
      "We identify professionals whose skills and experience are relevant to the requirement.",
  },
  {
    title: "Connect",
    description:
      "Relevant candidates are connected with employers for the next stage of the recruitment process.",
  },
  {
    title: "Support",
    description:
      "We maintain clear communication and provide recruitment support throughout the process.",
  },
];

const reasons = [
  {
    title: "Relevant Workforce Understanding",
    description:
      "Different industries have different workforce requirements. Our approach starts by understanding those requirements.",
  },
  {
    title: "Diverse Talent Access",
    description:
      "Our recruitment focus covers multiple industries, allowing us to support different types of hiring requirements.",
  },
  {
    title: "People-Focused Recruitment",
    description:
      "We consider both the employer's workforce requirement and the candidate's skills, experience and career goals.",
  },
];

const faqs = [
  {
    question: "Which industries does TeamMates HR Solutions support?",
    answer:
      "TeamMates HR Solutions supports recruitment and staffing requirements across IT & Technology, Manufacturing, Healthcare, Logistics, Retail, BPO & Customer Support, BFSI, Aerospace & Defence, Construction & Infrastructure, Real Estate, Textile & Apparel, and Education & EdTech.",
  },
  {
    question: "Do you provide recruitment services across India?",
    answer:
      "Yes. TeamMates HR Solutions supports recruitment and staffing requirements for businesses across India.",
  },
  {
    question: "Can businesses from other industries contact TeamMates?",
    answer:
      "Yes. If your industry or workforce requirement is not specifically listed, you can contact TeamMates to discuss your recruitment requirement.",
  },
  {
    question: "What types of recruitment services do you provide?",
    answer:
      "TeamMates provides Permanent Recruitment, Contract Staffing and NAPS / Apprenticeship Support.",
  },
  {
    question: "Can job seekers find opportunities across these industries?",
    answer:
      "Yes. Job seekers can explore relevant opportunities based on their skills, experience, qualifications and career interests.",
  },
];

export default function IndustriesPage() {
  return (
    <main className="bg-[#FDFDFD] !text-[#545A5B]">
      {/* =========================================================
          01. HERO
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Industries
              </p>

              <h1 className="mt-5 max-w-[780px] text-[48px] font-extrabold leading-[0.98] tracking-[-0.045em] !text-[#545A5B] sm:text-[62px] lg:text-[82px]">
                Recruitment Across Industries in{" "}
                <span className="!text-[#6D7E5A]">India</span>
              </h1>

              <p className="mt-7 max-w-[650px] !text-[#6F746F] text-[17px] leading-8 sm:text-[18px]">
                TeamMates HR Solutions supports businesses and professionals
                across diverse industries through recruitment, staffing and
                workforce solutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  href="/for-employers"
                  variant="primary"
                  className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
                >
                  Hire Talent
                </Button>

                <Button
                  href="/jobs"
                  variant="secondary"
                  className="!rounded-full !border-[#6D7E5A] !bg-white !text-[#6D7E5A] hover:!border-[#6D7E5A] hover:!bg-white hover:!text-[#6D7E5A]"
                >
                  Find Jobs
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[16px] border border-[#DFE2DF] bg-[#C1C3AC] p-7 sm:p-9 lg:p-10">
                <p className="text-[12px] font-bold uppercase tracking-[0.12em] !text-[#6D7E5A]">
                  Our Industry Reach
                </p>

                <p className="mt-5 text-[64px] font-extrabold leading-none tracking-[-0.06em] !text-white sm:text-[80px]">
                  12+
                </p>

                <p className="mt-4 text-[18px] font-semibold !text-white">
                  Industries supported
                </p>

                <p className="mt-4 max-w-[400px] !text-white text-[15px] leading-7">
                  Recruitment and workforce support across technology,
                  engineering, services, operations and other business sectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02. INDUSTRY OVERVIEW
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Industry-Specific Recruitment
              </p>

              <h2 className="mt-5 max-w-[560px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                Understanding the industry behind every{" "}
                <span className="!text-[#6D7E5A]">
                  hiring requirement.
                </span>
              </h2>
            </div>

            <div className="max-w-[720px]">
              <p className="!text-white text-[17px] leading-8 sm:text-[18px]">
                Every industry has different roles, skills, workforce
                structures and hiring requirements. Our recruitment approach
                begins by understanding those differences.
              </p>

              <p className="mt-6 !text-white text-[16px] leading-7 sm:text-[17px] sm:leading-8">
                From technical and engineering roles to customer support,
                operations and business functions, we help employers connect
                with relevant professionals across multiple sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03. INDUSTRIES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              12+ Industries
            </p>

            <h2 className="mt-5 !text-[#545A5B] text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Supporting workforce requirements across{" "}
              <span className="!text-[#6D7E5A]">sectors.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Explore the industries where TeamMates supports recruitment and
              staffing requirements.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, index) => (
              <Link
                key={industry.title}
                href={industry.href}
                className="group block rounded-[16px] border border-[#DFE2DF] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <div className="flex items-center justify-between gap-6">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6D7E5A] text-[11px] font-bold !text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    aria-hidden="true"
                    className="h-2.5 w-2.5 rounded-full bg-[#6D7E5A] transition-transform duration-300 group-hover:scale-125"
                  />
                </div>

                <h3 className="mt-7 !text-[#545A5B] text-[22px] font-bold tracking-[-0.025em]">
                  {industry.title}
                </h3>

                <p className="mt-4 !text-[#6F746F] text-[15px] leading-7">
                  {industry.description}
                </p>

                <div className="mt-6 h-px w-full bg-[#DFE2DF]" />

                <span className="mt-5 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#6D7E5A]">
                  Explore Industry
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04. RECRUITMENT APPROACH
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Our Recruitment Approach
            </p>

            <h2 className="mt-5 !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Relevant recruitment starts with{" "}
              <span className="!text-[#6D7E5A]">understanding.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              We focus on understanding the requirement before connecting
              employers with relevant professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {recruitmentApproach.map((item, index) => (
              <div
                key={item.title}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6D7E5A] text-[11px] font-bold !text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 !text-[#545A5B] text-[23px] font-bold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 !text-[#6F746F] text-[15px] leading-7">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          05. WHY INDUSTRY-FOCUSED RECRUITMENT
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Why It Matters
            </p>

            <h2 className="mt-5 !text-[#545A5B] text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Recruitment shaped around real{" "}
              <span className="!text-[#6D7E5A]">workforce needs.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reasons.map((reason, index) => (
              <article
                key={reason.title}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-8"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#6D7E5A] text-[11px] font-bold !text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-6 !text-[#545A5B] text-[23px] font-bold tracking-[-0.025em]">
                  {reason.title}
                </h3>

                <p className="mt-4 !text-[#6F746F] text-[15px] leading-7">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06. INDUSTRY WORKFORCE SUPPORT
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Workforce Support
              </p>

              <h2 className="mt-5 max-w-[700px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                Supporting businesses as their workforce requirements{" "}
                <span className="!text-[#6D7E5A]">evolve.</span>
              </h2>

              <p className="mt-6 max-w-[680px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether a business needs permanent professionals, contract
                staffing or apprenticeship support, TeamMates works around the
                requirement to help create relevant connections.
              </p>
            </div>

            <div className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-9">
              <p className="text-[11px] font-bold uppercase tracking-[0.12em] !text-[#6D7E5A]">
                Workforce Services
              </p>

              <div className="mt-6 space-y-4">
                <div className="rounded-[12px] border border-[#DFE2DF] p-5">
                  <p className="font-semibold !text-[#545A5B]">
                    Permanent Recruitment
                  </p>

                  <p className="mt-2 !text-[#6F746F] text-[14px] leading-6">
                    Hiring support for permanent workforce requirements.
                  </p>
                </div>

                <div className="rounded-[12px] border border-[#DFE2DF] p-5">
                  <p className="font-semibold !text-[#545A5B]">
                    Contract Staffing
                  </p>

                  <p className="mt-2 !text-[#6F746F] text-[14px] leading-6">
                    Flexible workforce support for temporary and project needs.
                  </p>
                </div>

                <div className="rounded-[12px] border border-[#DFE2DF] p-5">
                  <p className="font-semibold !text-[#545A5B]">
                    NAPS / Apprenticeship Support
                  </p>

                  <p className="mt-2 !text-[#6F746F] text-[14px] leading-6">
                    Support for apprenticeship and workforce requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          07. FAQ
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1100px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 !text-[#545A5B] text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Questions about our{" "}
              <span className="!text-[#6D7E5A]">industry coverage.</span>
            </h2>
          </div>

          <div className="mt-12 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[16px] border border-[#DFE2DF] bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 sm:p-7">
                  <span className="!text-[#545A5B] text-[17px] font-bold tracking-[-0.015em] sm:text-[19px]">
                    {faq.question}
                  </span>

                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6D7E5A] !text-[#6D7E5A] text-[22px] font-normal leading-none transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <p className="max-w-[900px] !text-[#6F746F] text-[15px] leading-7">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          08. FINAL CTA
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 md:px-8 lg:py-24">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Let&apos;s Work Together
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[62px]">
              The right people can help your business{" "}
              <span className="!text-[#6D7E5A]">move forward.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Connect with TeamMates HR Solutions for recruitment and staffing
              support across India.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/for-employers" variant="primary">
                Hire Talent
              </Button>

              <Button href="/jobs" variant="secondary">
                Find Jobs
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}