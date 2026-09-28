import Link from "next/link";

export const metadata = {
  title:
    "Staffing Solutions | Contract Staffing & Volume Hiring | TeamMates HR Solutions",
  description:
    "Explore staffing solutions from TeamMates HR Solutions, including contract staffing, volume hiring and flexible workforce support for organisations across India.",
};

const staffingServices = [
  {
    number: "01",
    title: "Contract Staffing",
    description:
      "Build flexible workforce capacity through contract staffing solutions aligned with your operational and workforce requirements.",
    points: [
      "Understand workforce and role requirements",
      "Source suitable candidates",
      "Support flexible workforce needs",
      "Coordinate throughout the staffing process",
    ],
  },
  {
    number: "02",
    title: "Volume Hiring",
    description:
      "Manage multiple hiring requirements with structured candidate sourcing and recruitment coordination.",
    points: [
      "Support for multiple positions",
      "Structured candidate sourcing",
      "Candidate screening and coordination",
      "Support for time-sensitive hiring requirements",
    ],
  },
];

const workforceNeeds = [
  {
    number: "01",
    title: "Flexible Workforce",
    description:
      "Support workforce requirements that may change according to operational needs, projects or business cycles.",
  },
  {
    number: "02",
    title: "Multiple Positions",
    description:
      "Support organisations managing several open positions across teams, functions or locations.",
  },
  {
    number: "03",
    title: "Operational Hiring",
    description:
      "Connect with relevant talent for operational and workforce-intensive requirements.",
  },
  {
    number: "04",
    title: "Workforce Expansion",
    description:
      "Support organisations expanding teams and workforce capacity across different functions.",
  },
];

const functions = [
  "Production & Manufacturing",
  "Warehouse & Logistics",
  "Operations",
  "Customer Support",
  "Back Office",
  "Sales",
  "Retail",
  "Quality",
  "Maintenance",
  "Administration",
  "Technical Support",
  "Other Workforce Functions",
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
      "We understand your workforce requirement, positions, skills, timelines and operational expectations.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable candidates based on your staffing requirement and role expectations.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Relevant candidates are connected with your organisation for the next stage of the staffing process.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide communication and coordination throughout the staffing journey.",
  },
];

const reasons = [
  {
    number: "01",
    title: "Flexible Support",
    description:
      "Staffing solutions can be aligned with different workforce requirements and operational needs.",
  },
  {
    number: "02",
    title: "Relevant Talent",
    description:
      "Focus on connecting organisations with candidates whose skills and experience match the requirement.",
  },
  {
    number: "03",
    title: "Volume Hiring Support",
    description:
      "Structured sourcing and coordination for organisations managing multiple hiring requirements.",
  },
  {
    number: "04",
    title: "Responsive Coordination",
    description:
      "Clear communication and coordination throughout the staffing and recruitment process.",
  },
];

const faqs = [
  {
    question: "What staffing solutions does TeamMates provide?",
    answer:
      "TeamMates provides contract staffing and volume hiring support for organisations with flexible or multiple workforce requirements.",
  },
  {
    question: "What is contract staffing?",
    answer:
      "Contract staffing is a workforce solution where organisations hire professionals for defined staffing requirements based on their operational needs.",
  },
  {
    question: "Does TeamMates support volume hiring?",
    answer:
      "Yes. TeamMates supports multiple-position hiring requirements through structured candidate sourcing, screening and recruitment coordination.",
  },
  {
    question: "Which roles can be supported through staffing solutions?",
    answer:
      "Staffing requirements can vary by organisation. Support may include operations, production, warehouse, logistics, customer support, sales, retail, technical and other workforce functions.",
  },
  {
    question: "Which industries can use TeamMates staffing solutions?",
    answer:
      "TeamMates supports organisations across industries including IT & Technology, Manufacturing, Healthcare, Logistics, Retail, BPO & Customer Support, BFSI, Aerospace & Defence, Construction & Infrastructure, Real Estate, Textile & Apparel and Education & EdTech.",
  },
];

export default function StaffingSolutionsPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* =========================================================
          01. HERO
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto flex min-h-[620px] w-full max-w-[1280px] items-center px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[950px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Staffing Solutions
            </p>

            <h1 className="mt-5 max-w-[900px] !text-[#545A5B] text-[46px] font-extrabold leading-[1.04] tracking-[-0.04em] sm:text-[62px] lg:text-[76px]">
              Flexible workforce solutions for your{" "}
              <span className="!text-[#6D7E5A]">
                business needs.
              </span>
            </h1>

            <p className="mt-7 max-w-[720px] text-[17px] leading-8 !text-[#6F746F] sm:text-[18px]">
              TeamMates HR Solutions helps organisations build flexible
              workforce capacity through contract staffing and volume hiring
              support across India.
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
                Workforce Solutions
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                Workforce support that adapts to your{" "}
                <span className="!text-[#6D7E5A]">
                  business requirements.
                </span>
              </h2>
            </div>

            <div>
              <p className="text-[16px] leading-8 !text-white sm:text-[18px]">
                Workforce requirements can change with business growth,
                projects, operational demand and hiring volumes. Staffing
                solutions provide organisations with a flexible approach to
                building workforce capacity.
              </p>

              <p className="mt-6 text-[16px] leading-8 !text-white sm:text-[17px]">
                TeamMates supports organisations through contract staffing
                and volume hiring, with a focus on relevant talent,
                structured sourcing and responsive coordination.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03. STAFFING SERVICES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[780px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              What We Provide
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Staffing support for different{" "}
              <span className="!text-[#6D7E5A]">
                workforce needs.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
              Our staffing services are designed around flexible workforce
              requirements and multiple-position hiring needs.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {staffingServices.map((service) => (
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
          04. WORKFORCE NEEDS
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Workforce Requirements
              </p>

              <h2 className="mt-5 max-w-[540px] !text-white">
                Staffing support for changing{" "}
                <span className="!text-[#6D7E5A]">
                  workforce needs.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Different business situations can require different
                approaches to workforce planning and staffing.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {workforceNeeds.map((item) => (
                <article
                  key={item.number}
                  className="rounded-[16px] bg-white p-6 sm:p-7"
                >
                  <p className="text-[11px] font-bold tracking-[0.14em] !text-[#6D7E5A]">
                    {item.number}
                  </p>

                  <h3 className="mt-5 !text-[23px] !leading-tight !text-[#545A5B]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[14px] leading-7 !text-[#6F746F]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          05. FUNCTIONS WE SUPPORT
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[780px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Workforce Functions
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Staffing support across key{" "}
              <span className="!text-[#6D7E5A]">
                workforce functions.
              </span>
            </h2>

            <p className="mt-6 max-w-[680px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
              Staffing requirements vary by organisation. Our support can
              cover different operational, technical and customer-facing
              functions.
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
                Staffing support across{" "}
                <span className="!text-[#6D7E5A]">
                  multiple industries.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Our staffing approach can support workforce requirements
                across different industries and operational environments.
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
                Staffing support focused on{" "}
                <span className="!text-[#6D7E5A]">
                  relevance and flexibility.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
                We focus on understanding your workforce requirement before
                sourcing and connecting relevant candidates.
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
                A structured staffing process from requirement to{" "}
                <span className="!text-[#6D7E5A]">
                  workforce connection.
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] text-[16px] leading-8 !text-white sm:text-[17px]">
                Our process keeps the staffing journey organised and focused
                on your workforce requirements.
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
              Staffing questions,{" "}
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
                Staffing Support
              </p>

              <h2 className="mt-5 !text-white">
                Build the workforce you need for your{" "}
                <span className="!text-[#6D7E5A]">
                  next stage.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[700px] text-[16px] leading-8 !text-white sm:text-[18px]">
                Share your workforce requirement with TeamMates and connect
                with relevant staffing support.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[27px] !leading-[1.12] !text-[#545A5B] sm:text-[30px]">
                  Share your staffing requirement.
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
                  Tell us about the positions, workforce requirements and
                  hiring volumes you need support with.
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
                  Need permanent recruitment support?
                </h3>

                <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
                  Explore our recruitment services for permanent and
                  specialist hiring requirements.
                </p>

                <div className="mt-auto pt-7">
                  <Link
                    href="/for-employers/recruitment-services"
                    className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#38472A]"
                  >
                    <span className="!text-white">
                      Recruitment Services
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