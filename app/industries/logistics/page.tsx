import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title:
    "Logistics Recruitment & Jobs | Logistics Staffing | TeamMates HR Solutions",
  description:
    "Explore logistics career opportunities or connect with TeamMates HR Solutions for logistics recruitment, staffing and workforce support across India.",
};

const candidateRoles = [
  {
    title: "Warehouse Operations",
    description:
      "Opportunities across warehouse operations, inventory handling, dispatch and day-to-day logistics activities.",
  },
  {
    title: "Supply Chain",
    description:
      "Roles supporting planning, procurement, material movement and supply chain operations.",
  },
  {
    title: "Transport & Fleet",
    description:
      "Career opportunities across transportation, fleet coordination, route planning and vehicle operations.",
  },
  {
    title: "Delivery Operations",
    description:
      "Roles supporting last-mile delivery, distribution and delivery coordination.",
  },
  {
    title: "Inventory & Stores",
    description:
      "Opportunities involving inventory control, stores management, stock movement and documentation.",
  },
  {
    title: "Logistics Coordination",
    description:
      "Roles involving shipment coordination, scheduling, documentation and communication.",
  },
  {
    title: "Operations Support",
    description:
      "Opportunities supporting logistics teams, customers, vendors and daily operational activities.",
  },
  {
    title: "Other Logistics Roles",
    description:
      "Additional logistics opportunities based on current employer requirements and candidate profiles.",
  },
];

const employerServices = [
  {
    title: "Permanent Recruitment",
    description:
      "Connect with suitable professionals for permanent logistics, supply chain and operations positions.",
  },
  {
    title: "Contract Staffing",
    description:
      "Build flexible logistics teams through staffing solutions aligned with your operational requirements.",
  },
  {
    title: "Volume Hiring",
    description:
      "Support for multiple logistics positions where speed, coordination and candidate relevance matter.",
  },
  {
    title: "NAPS / Apprenticeship Support",
    description:
      "Support for organisations developing early-career talent pipelines through apprenticeship opportunities.",
  },
];

const reasons = [
  {
    title: "Relevant Opportunities & Talent",
    description:
      "Connect candidates with suitable logistics opportunities and employers with relevant logistics and operations professionals.",
  },
  {
    title: "Industry Understanding",
    description:
      "Understand different logistics functions and the workforce requirements across operations.",
  },
  {
    title: "Responsive Support",
    description:
      "Clear communication and coordination throughout the recruitment journey.",
  },
  {
    title: "People-Focused Approach",
    description:
      "A recruitment approach that considers skills, experience, requirements and career direction.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your career goals or logistics hiring requirement before beginning the recruitment process.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable candidates or opportunities based on skills, requirements and role expectations.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "We create relevant connections between candidates and logistics employers.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide communication and coordination throughout the recruitment journey.",
  },
];

const faqs = [
  {
    question: "What logistics roles does TeamMates support?",
    answer:
      "TeamMates supports opportunities across warehouse operations, supply chain, transport and fleet, delivery operations, inventory and stores, logistics coordination, operations support and other logistics functions.",
  },
  {
    question: "Can candidates apply for logistics jobs through TeamMates?",
    answer:
      "Yes. Candidates can explore current opportunities and apply for suitable logistics roles through the TeamMates recruitment process.",
  },
  {
    question: "Does TeamMates provide logistics staffing services?",
    answer:
      "Yes. TeamMates supports employers with permanent recruitment, contract staffing, volume hiring and NAPS / apprenticeship support.",
  },
  {
    question: "Can logistics companies hire through TeamMates?",
    answer:
      "Yes. Logistics and supply chain employers can share their hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question: "Does TeamMates support freshers and entry-level candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on available opportunities.",
  },
];

export default function LogisticsPage() {
  return (
    <main className="bg-[#FDFDFD]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Logistics
            </p>

            <h1 className="mt-5 max-w-[620px] !text-[#545A5B] text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[52px]">
              Connecting logistics talent with{" "}
              <span className="!text-[#6D7E5A]">
                growing businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Whether you are looking for your next logistics opportunity or
              building a strong operations workforce, TeamMates connects
              candidates and employers through focused recruitment and staffing
              support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find Logistics Jobs
              </Button>

              <Button href="/for-employers" variant="dark">
                Hire Logistics Talent
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/logistics.jpg"
              alt="Logistics professionals working in a warehouse"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[600px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          LOGISTICS RECRUITMENT
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Logistics Recruitment
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                People who keep goods and operations moving.
              </h2>
            </div>

            <div>
              <p className="!text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Logistics and supply chain businesses depend on capable people
                across warehouses, transportation, inventory, delivery and
                operations.
              </p>

              <p className="mt-5 !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                TeamMates supports candidates and employers by creating
                relevant connections between skills, career opportunities and
                workforce requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOR CANDIDATES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                For Candidates
              </p>

              <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Find logistics opportunities that fit your skills.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore opportunities across logistics and supply chain
                functions. TeamMates helps candidates understand available
                roles and move through the recruitment journey with clarity.
              </p>

              <div className="mt-8">
                <Button href="/jobs" variant="primary">
                  Explore Logistics Jobs
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {candidateRoles.map((role) => (
                <article
                  key={role.title}
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
                >
                  <h3 className="!text-[#545A5B] text-[22px] font-bold leading-tight">
                    {role.title}
                  </h3>

                  <p className="mt-4 !text-[#6F746F] text-[15px] leading-7">
                    {role.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOR EMPLOYERS
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                For Employers
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Build stronger logistics teams.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                From individual logistics positions to larger workforce
                requirements, TeamMates provides recruitment and staffing
                support aligned with your operational needs.
              </p>

              <div className="mt-8">
                <Button href="/for-employers" variant="primary">
                  Hire Logistics Talent
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {employerServices.map((service) => (
                <article
                  key={service.title}
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
                >
                  <h3 className="!text-[#545A5B] text-[22px] font-bold leading-tight">
                    {service.title}
                  </h3>

                  <p className="mt-4 !text-[#6F746F] text-[15px] leading-7">
                    {service.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY TEAMMATES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Why TeamMates
              </p>

              <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Recruitment support built around people and requirements.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are building a logistics workforce or looking for
                your next opportunity, our approach focuses on relevance,
                communication and practical recruitment support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {reasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7"
                >
                  <h3 className="!text-[#545A5B] text-[22px] font-bold leading-tight">
                    {reason.title}
                  </h3>

                  <p className="mt-4 !text-[#6F746F] text-[15px] leading-7">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE WORK
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                How We Work
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                A straightforward recruitment journey.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are a candidate or an employer, our approach
                focuses on understanding first, followed by relevant
                connections and consistent support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {process.map((item) => (
                <article
                  key={item.number}
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7"
                >
                  <p className="text-[12px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
                    {item.number}
                  </p>

                  <h3 className="mt-5 !text-[#545A5B] text-[24px] font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-3 !text-[#6F746F] text-[15px] leading-7">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              FAQ
            </p>

            <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Logistics recruitment questions.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 !text-[#545A5B] text-[18px] font-bold leading-7">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[24px] font-normal !text-[#6D7E5A] transition-transform duration-300 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-5 max-w-[850px] !text-[#6F746F] text-[15px] leading-7">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <div className="mx-auto max-w-[1050px] text-center">

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Logistics
              </p>

              <h2 className="mx-auto mt-5 max-w-[950px] !text-white text-[38px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[50px] lg:text-[60px]">
                The right people can help your logistics business{" "}
                <span className="!text-[#6D7E5A]">
                  move forward.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[760px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore logistics opportunities as a candidate or connect with
                TeamMates for your logistics hiring requirements.
              </p>

            </div>

            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">

              {/* Candidate CTA */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Candidates
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Find your next logistics opportunity.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Explore logistics and supply chain opportunities that match
                  your skills, experience and career direction.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/jobs" variant="primary">
                    Find Logistics Jobs
                  </Button>
                </div>
              </div>

              {/* Employer CTA */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Find the right logistics talent.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Share your logistics hiring requirement and connect with
                  relevant professionals.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/for-employers" variant="primary">
                    Hire Logistics Talent
                  </Button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}