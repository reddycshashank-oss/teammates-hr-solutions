import Link from "next/link";

export const metadata = {
  title:
    "Recruitment Services | Permanent Recruitment & Executive Search | TeamMates HR Solutions",
  description:
    "Explore permanent recruitment and executive search services from TeamMates HR Solutions. Connect with relevant professionals across functions and industries in India.",
};

const recruitmentServices = [
  {
    number: "01",
    title: "Permanent Recruitment",
    description:
      "Find suitable professionals for permanent positions across different functions, experience levels and industries.",
    points: [
      "Understand the role and hiring requirement",
      "Source relevant candidate profiles",
      "Screen candidates based on role requirements",
      "Coordinate throughout the recruitment process",
    ],
  },
  {
    number: "02",
    title: "Executive Search",
    description:
      "Connect with experienced professionals for specialist, leadership and critical positions where relevant experience and role fit matter.",
    points: [
      "Understand specialist role requirements",
      "Identify relevant experienced professionals",
      "Focus on skills and experience alignment",
      "Support communication throughout the process",
    ],
  },
];

const recruitmentFunctions = [
  "Engineering & Technical",
  "Sales & Business Development",
  "Finance & Accounts",
  "Human Resources",
  "Operations",
  "Administration",
  "IT & Technology",
  "Quality",
  "Supply Chain",
  "Customer Support",
  "Marketing",
  "Other Business Functions",
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
      "We begin by understanding the position, responsibilities, skills, experience and hiring requirement.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify relevant professionals based on the role requirements and candidate profile.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Suitable candidates are connected with your organisation for the next stage of the recruitment process.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We maintain communication and coordination throughout the recruitment journey.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Relevant Talent",
    description:
      "Focus on connecting organisations with professionals whose skills and experience are relevant to the position.",
  },
  {
    number: "02",
    title: "Role Understanding",
    description:
      "We take time to understand the responsibilities, expectations and requirements of the position.",
  },
  {
    number: "03",
    title: "Industry Understanding",
    description:
      "Recruitment support across multiple industries and business functions helps us understand different workforce requirements.",
  },
  {
    number: "04",
    title: "Responsive Support",
    description:
      "Clear communication and coordination throughout the recruitment process.",
  },
];

const faqs = [
  {
    question: "What does TeamMates Recruitment Services include?",
    answer:
      "TeamMates Recruitment Services includes permanent recruitment and executive search support for organisations looking to connect with relevant professionals.",
  },
  {
    question: "What types of positions can TeamMates recruit for?",
    answer:
      "Recruitment support can cover different business functions, experience levels and industry requirements based on the organisation's hiring needs.",
  },
  {
    question: "Does TeamMates support experienced professionals?",
    answer:
      "Yes. Recruitment support can include experienced professionals and specialist profiles depending on the position and employer requirement.",
  },
  {
    question: "Can companies submit a specific hiring requirement?",
    answer:
      "Yes. Organisations can share their hiring requirement with TeamMates so the recruitment team can understand the position and workforce need.",
  },
  {
    question: "Does TeamMates support recruitment across India?",
    answer:
      "TeamMates HR Solutions provides recruitment and staffing support for organisations and candidates across India, subject to the specific hiring requirement.",
  },
];

export default function RecruitmentServicesPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* =========================================================
          01. HERO
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1280px] items-center px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[950px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Recruitment Services
            </p>

            <h1 className="mt-5 max-w-[900px] !text-[#545A5B] text-[46px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[62px] lg:text-[76px]">
              Recruitment that connects your business with{" "}
              <span className="!text-[#6D7E5A]">
                relevant talent.
              </span>
            </h1>

            <p className="mt-7 max-w-[720px] text-[17px] leading-8 !text-[#6F746F] sm:text-[18px]">
              TeamMates HR Solutions helps organisations identify and connect
              with professionals for permanent and specialist positions
              across different industries and business functions.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/for-employers/hiring-requirement"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#38472A]"
              >
                <span className="!text-white">
                  Share Hiring Requirement
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
                Our Recruitment Approach
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                The right recruitment process starts with{" "}
                <span className="!text-[#6D7E5A]">
                  understanding.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-8 !text-white sm:text-[18px]">
                Recruitment is more than finding a profile that matches a
                job description. It involves understanding the organisation,
                the role, the required skills and the expectations of both
                sides.
              </p>

              <p className="mt-6 text-[16px] leading-8 !text-white sm:text-[17px]">
                TeamMates focuses on creating relevant connections between
                employers and professionals through a structured recruitment
                process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03. RECRUITMENT SERVICES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[780px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              What We Do
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Recruitment services for different{" "}
              <span className="!text-[#6D7E5A]">
                hiring requirements.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
              Our recruitment support can be structured around permanent
              positions and specialist hiring requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {recruitmentServices.map((service) => (
              <article
                key={service.number}
                className="flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-7 sm:p-9"
              >
                <p className="text-[11px] font-bold tracking-[0.14em] !text-[#6D7E5A]">
                  {service.number}
                </p>

                <h3 className="mt-6 !text-[28px] !leading-tight !text-[#545A5B]">
                  {service.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 !text-[#6F746F]">
                  {service.description}
                </p>

                <div className="mt-7 border-t border-[#DFE2DF] pt-6">
                  <ul className="space-y-3">
                    {service.points.map((point) => (
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
          04. FUNCTIONS WE SUPPORT
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Functions
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                Recruitment across key{" "}
                <span className="!text-[#6D7E5A]">
                  business functions.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Recruitment requirements can vary by organisation and
                position. We support hiring across a range of business and
                technical functions.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {recruitmentFunctions.map((functionName) => (
                <div
                  key={functionName}
                  className="flex min-h-[64px] items-center justify-between rounded-[16px] bg-white px-5 py-4"
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
        </div>
      </section>

      {/* =========================================================
          05. INDUSTRIES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[780px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Industries
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Recruitment support across{" "}
              <span className="!text-[#6D7E5A]">
                different industries.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
              We support organisations across a range of industries and
              workforce environments.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <Link
                key={industry}
                href="/industries"
                className="group flex min-h-[92px] items-center justify-between rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] px-6 py-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-[14px] font-semibold !text-[#545A5B]">
                  {industry}
                </span>

                <span
                  aria-hidden="true"
                  className="ml-4 shrink-0 !text-[#6D7E5A] transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          06. WHY TEAMMATES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Why TeamMates
              </p>

              <h2 className="mt-5 max-w-[520px] !text-[#545A5B]">
                A recruitment approach focused on{" "}
                <span className="!text-[#6D7E5A]">
                  relevance.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
                We focus on understanding the requirement before creating
                connections between employers and professionals.
              </p>

              <Link
                href="/for-employers/hiring-requirement"
                className="group mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#38472A]"
              >
                <span className="!text-white">
                  Start Hiring
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
          07. HOW WE WORK
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                How We Work
              </p>

              <h2 className="mt-5 max-w-[520px] !text-white">
                A structured process from requirement to{" "}
                <span className="!text-[#6D7E5A]">
                  relevant connection.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Our recruitment process is designed to keep the hiring
                journey clear, organised and focused on the requirement.
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
          08. FAQ
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Recruitment questions,{" "}
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
          09. FINAL CTA
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="mx-auto max-w-[900px] text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Recruitment Support
              </p>

              <h2 className="mt-5 !text-white">
                Ready to find the right people for your{" "}
                <span className="!text-[#6D7E5A]">
                  team?
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 !text-white sm:text-[18px]">
                Share your hiring requirement and let TeamMates understand
                the role, identify relevant talent and support the
                recruitment journey.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[27px] !leading-[1.12] !text-[#545A5B] sm:text-[30px]">
                  Share your hiring requirement.
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
                  Tell us about the role, skills and workforce requirement
                  you are looking to fulfil.
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
                  Explore staffing and apprenticeship support.
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
                  Explore additional workforce solutions for flexible
                  staffing and early-career talent requirements.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/for-employers"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#38472A]"
                  >
                    <span className="!text-white">
                      Explore Employer Services
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
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}