import Link from "next/link";

export const metadata = {
  title:
    "NAPS & Apprenticeship Support | Apprenticeship Hiring | TeamMates HR Solutions",
  description:
    "Explore NAPS and apprenticeship support from TeamMates HR Solutions for organisations looking to develop early-career talent pipelines and support apprenticeship hiring across India.",
};

const supportAreas = [
  {
    number: "01",
    title: "Apprenticeship Talent Sourcing",
    description:
      "Support organisations in identifying suitable early-career candidates for apprenticeship opportunities based on their workforce requirements.",
    points: [
      "Understand apprenticeship requirements",
      "Source suitable early-career candidates",
      "Support candidate coordination",
      "Connect organisations with relevant talent",
    ],
  },
  {
    number: "02",
    title: "Early-Career Talent Pipeline",
    description:
      "Help organisations develop a pipeline of emerging talent for future workforce requirements.",
    points: [
      "Build early-career talent connections",
      "Support entry-level workforce requirements",
      "Identify candidates based on role expectations",
      "Support ongoing talent pipeline development",
    ],
  },
  {
    number: "03",
    title: "Apprenticeship Hiring Support",
    description:
      "Provide recruitment and coordination support for organisations looking to engage apprentices across suitable functions.",
    points: [
      "Understand role and workforce needs",
      "Source relevant candidates",
      "Coordinate candidate communication",
      "Support the hiring journey",
    ],
  },
  {
    number: "04",
    title: "Workforce Development Support",
    description:
      "Support organisations in creating structured pathways for early-career individuals to gain workplace exposure and practical experience.",
    points: [
      "Support early-career workforce planning",
      "Connect organisations with emerging talent",
      "Support practical workplace exposure",
      "Strengthen future talent pipelines",
    ],
  },
];

const benefits = [
  {
    number: "01",
    title: "Build Talent Pipelines",
    description:
      "Develop connections with early-career professionals who can contribute to future workforce requirements.",
  },
  {
    number: "02",
    title: "Access Emerging Talent",
    description:
      "Connect with candidates looking to gain practical workplace experience and begin their professional careers.",
  },
  {
    number: "03",
    title: "Support Workforce Planning",
    description:
      "Create opportunities to develop talent in line with organisational workforce requirements.",
  },
  {
    number: "04",
    title: "Practical Exposure",
    description:
      "Support early-career individuals in gaining workplace experience and understanding professional environments.",
  },
];

const functions = [
  "Production",
  "Manufacturing",
  "Engineering",
  "Quality",
  "Maintenance",
  "Warehouse & Stores",
  "Logistics",
  "Operations",
  "Administration",
  "Customer Support",
  "Technical Support",
  "Other Functions",
];

const industries = [
  "IT & Technology",
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Retail",
  "BPO & Customer Support",
  "BFSI",
  "Aerospace & Defence",
  "Construction & Infrastructure",
  "Real Estate",
  "Textile & Apparel",
  "Education & EdTech",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your apprenticeship requirement, roles, workforce needs and expectations.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable early-career candidates based on the role and organisation requirements.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Relevant candidates are connected with your organisation for the next stage of the apprenticeship journey.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide communication and coordination throughout the recruitment and apprenticeship process.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Early-Career Focus",
    description:
      "Support designed around organisations looking to connect with emerging and early-career talent.",
  },
  {
    number: "02",
    title: "Relevant Candidates",
    description:
      "Focus on identifying candidates whose education, skills and interests are relevant to the requirement.",
  },
  {
    number: "03",
    title: "Workforce Understanding",
    description:
      "Understand the role, workforce requirement and expectations before creating relevant candidate connections.",
  },
  {
    number: "04",
    title: "Responsive Support",
    description:
      "Clear communication and coordination throughout the apprenticeship hiring journey.",
  },
];

const faqs = [
  {
    question: "What is NAPS / apprenticeship support?",
    answer:
      "TeamMates provides recruitment and coordination support for organisations looking to develop early-career talent pipelines through apprenticeship opportunities.",
  },
  {
    question: "Who can use apprenticeship hiring support?",
    answer:
      "Organisations looking to develop early-career talent pipelines and support apprenticeship opportunities can connect with TeamMates regarding their workforce requirements.",
  },
  {
    question: "What types of roles can be supported?",
    answer:
      "Apprenticeship requirements can vary by organisation. Support may include production, engineering, quality, maintenance, warehouse, logistics, operations, administration, customer support and other suitable functions.",
  },
  {
    question: "Can TeamMates help source apprenticeship candidates?",
    answer:
      "Yes. TeamMates can support organisations in identifying and connecting with suitable early-career candidates based on the organisation's requirements.",
  },
  {
    question: "Does TeamMates support early-career candidates?",
    answer:
      "Yes. TeamMates supports connections between organisations and early-career individuals seeking practical workplace exposure and apprenticeship opportunities.",
  },
];

export default function NapsApprenticeshipSupportPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* =========================================================
          01. HERO
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1280px] items-center px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[960px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              NAPS / Apprenticeship Support
            </p>

            <h1 className="mt-5 max-w-[920px] !text-[#545A5B] text-[46px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[62px] lg:text-[76px]">
              Build your future workforce through{" "}
              <span className="!text-[#6D7E5A]">
                apprenticeship opportunities.
              </span>
            </h1>

            <p className="mt-7 max-w-[740px] text-[17px] leading-8 !text-[#6F746F] sm:text-[18px]">
              TeamMates HR Solutions supports organisations looking to
              develop early-career talent pipelines through apprenticeship
              opportunities and structured workforce support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/for-employers/hiring-requirement"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#38472A]"
              >
                <span className="!text-white">
                  Share Your Requirement
                </span>

                <span
                  aria-hidden="true"
                  className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>

              <Link
                href="/contact-us"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#6D7E5A] !bg-white px-7 py-3 text-[13px] font-semibold !text-[#6D7E5A] transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#6D7E5A] hover:!text-white"
              >
                <span className="group-hover:!text-white">
                  Contact Us
                </span>

                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:!text-white"
                >
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          02. INTRODUCTION
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Apprenticeship Support
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                Developing talent today for your{" "}
                <span className="!text-[#6D7E5A]">
                  workforce tomorrow.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-8 !text-white sm:text-[18px]">
                Apprenticeship opportunities can help organisations connect
                with early-career talent while giving individuals practical
                exposure to professional workplace environments.
              </p>

              <p className="mt-6 text-[16px] leading-8 !text-white sm:text-[17px]">
                TeamMates supports organisations by understanding their
                workforce requirements, identifying relevant candidates and
                supporting communication throughout the apprenticeship
                hiring journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03. SUPPORT AREAS
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[780px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Our Support
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Support for building{" "}
              <span className="!text-[#6D7E5A]">
                early-career talent pipelines.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
              Our apprenticeship support focuses on connecting organisations
              with relevant early-career talent and supporting the hiring
              journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {supportAreas.map((item) => (
              <article
                key={item.number}
                className="flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-7 sm:p-9"
              >
                <p className="text-[11px] font-bold tracking-[0.14em] !text-[#6D7E5A]">
                  {item.number}
                </p>

                <h3 className="mt-6 !text-[27px] !leading-tight !text-[#545A5B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-[#6F746F]">
                  {item.description}
                </p>

                <div className="mt-7 border-t border-[#DFE2DF] pt-6">
                  <ul className="space-y-3">
                    {item.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-[14px] leading-6 !text-[#545A5B]"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#6D7E5A]"
                        />

                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04. BENEFITS FOR EMPLOYERS
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Employer Benefits
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                Create stronger{" "}
                <span className="!text-[#6D7E5A]">
                  early-career pathways.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Apprenticeship opportunities can form part of an
                organisation&apos;s approach to developing emerging talent
                and future workforce capacity.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <article
                  key={benefit.number}
                  className="rounded-[16px] bg-white p-6 sm:p-7"
                >
                  <p className="text-[11px] font-bold tracking-[0.14em] !text-[#6D7E5A]">
                    {benefit.number}
                  </p>

                  <h3 className="mt-5 !text-[23px] !leading-tight !text-[#545A5B]">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 !text-[#6F746F]">
                    {benefit.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05. FUNCTIONS
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[780px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Workforce Functions
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Apprenticeship opportunities across{" "}
              <span className="!text-[#6D7E5A]">
                different functions.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
              Apprenticeship requirements depend on the organisation and
              available roles. Potential functions may include:
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {functions.map((functionName) => (
              <div
                key={functionName}
                className="flex min-h-[92px] items-center justify-between rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] px-6 py-5"
              >
                <span className="text-[14px] font-semibold !text-[#545A5B]">
                  {functionName}
                </span>

                <span
                  aria-hidden="true"
                  className="ml-4 shrink-0 !text-[#6D7E5A]"
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06. INDUSTRIES
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Industries
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                Early-career workforce support across{" "}
                <span className="!text-[#6D7E5A]">
                  multiple industries.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Apprenticeship and early-career requirements can vary by
                industry, role and organisation.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {industries.map((industry) => (
                <Link
                  key={industry}
                  href="/industries"
                  className="group flex min-h-[64px] items-center justify-between rounded-[16px] bg-white px-5 py-4 transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="text-[14px] font-semibold !text-[#545A5B]">
                    {industry}
                  </span>

                  <span
                    aria-hidden="true"
                    className="ml-4 !text-[#6D7E5A] transition-transform duration-200 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          07. WHY TEAMMATES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Why TeamMates
              </p>

              <h2 className="mt-5 max-w-[520px] !text-[#545A5B]">
                Early-career hiring support focused on{" "}
                <span className="!text-[#6D7E5A]">
                  relevance.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
                We focus on understanding the organisation&apos;s requirement
                and connecting it with relevant early-career talent.
              </p>

              <Link
                href="/for-employers/hiring-requirement"
                className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#38472A]"
              >
                <span className="!text-white">
                  Discuss Your Requirement
                </span>

                <span
                  aria-hidden="true"
                  className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article
                  key={reason.number}
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7"
                >
                  <p className="text-[11px] font-bold tracking-[0.14em] !text-[#6D7E5A]">
                    {reason.number}
                  </p>

                  <h3 className="mt-5 !text-[23px] !leading-tight !text-[#545A5B]">
                    {reason.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 !text-[#6F746F]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          08. HOW WE WORK
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                How We Work
              </p>

              <h2 className="mt-5 max-w-[520px] !text-white">
                A clear process from apprenticeship requirement to{" "}
                <span className="!text-[#6D7E5A]">
                  candidate connection.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Our process is designed to keep apprenticeship recruitment
                organised, clear and focused on the organisation&apos;s
                workforce requirement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((step) => (
                <article
                  key={step.number}
                  className="rounded-[16px] bg-white p-6 sm:p-7"
                >
                  <p className="text-[11px] font-bold tracking-[0.14em] !text-[#6D7E5A]">
                    {step.number}
                  </p>

                  <h3 className="mt-5 !text-[24px] !leading-tight !text-[#545A5B]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 !text-[#6F746F]">
                    {step.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          09. FAQ
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Apprenticeship questions,{" "}
              <span className="!text-[#6D7E5A]">
                answered clearly.
              </span>
            </h2>
          </div>

          <div className="mt-12 max-w-[950px] border-t border-[#DFE2DF]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[#DFE2DF]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold !text-[#545A5B] sm:text-[17px]">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[24px] font-normal !text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-[780px] pb-6 pr-10 text-[14px] leading-7 !text-[#6F746F]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          10. FINAL CTA
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                NAPS / Apprenticeship Support
              </p>

              <h2 className="mt-5 !text-white">
                Start building your{" "}
                <span className="!text-[#6D7E5A]">
                  future talent pipeline.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 !text-white sm:text-[18px]">
                Tell us about your apprenticeship requirement and let
                TeamMates understand your workforce needs.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[27px] !leading-[1.12] !text-[#545A5B] sm:text-[30px]">
                  Share your apprenticeship requirement.
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
                  Tell us about your roles, workforce needs and apprenticeship
                  requirements.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/for-employers/hiring-requirement"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#38472A]"
                  >
                    <span className="!text-white">
                      Submit Requirement
                    </span>

                    <span
                      aria-hidden="true"
                      className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>

              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  Other Employer Services
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[27px] !leading-[1.12] !text-[#545A5B] sm:text-[30px]">
                  Need recruitment or staffing support?
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
                  Explore our recruitment and staffing solutions for broader
                  workforce requirements.
                </p>

                <div className="mt-auto flex flex-col gap-3 pt-7 sm:flex-row">
                  <Link
                    href="/for-employers/recruitment-services"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-5 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#38472A]"
                  >
                    <span className="!text-white">
                      Recruitment
                    </span>

                    <span
                      aria-hidden="true"
                      className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </Link>

                  <Link
                    href="/for-employers/staffing-solutions"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#6D7E5A] !bg-white px-5 py-3 text-[13px] font-semibold !text-[#6D7E5A] transition-all duration-300 hover:!bg-[#6D7E5A] hover:!text-white"
                  >
                    <span className="group-hover:!text-white">
                      Staffing
                    </span>

                    <span
                      aria-hidden="true"
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:!text-white"
                    >
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}