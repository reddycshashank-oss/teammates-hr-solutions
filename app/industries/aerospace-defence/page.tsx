import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title:
    "Aerospace & Defence Jobs | Recruitment & Staffing | TeamMates HR Solutions",
  description:
    "Explore aerospace and defence career opportunities or connect with TeamMates HR Solutions for recruitment and staffing support across technical, manufacturing, engineering and support functions in India.",
};

const candidateRoles = [
  {
    title: "Engineering & Technical",
    description:
      "Opportunities across engineering, technical support, production engineering and related technical functions.",
  },
  {
    title: "Production & Manufacturing",
    description:
      "Roles supporting production, assembly, manufacturing processes and shop-floor operations.",
  },
  {
    title: "Quality & Inspection",
    description:
      "Opportunities across quality control, inspection, documentation and process compliance functions.",
  },
  {
    title: "Maintenance",
    description:
      "Roles involving equipment maintenance, technical support and maintenance operations.",
  },
  {
    title: "Supply Chain & Procurement",
    description:
      "Career opportunities across procurement, inventory, logistics and supply chain support.",
  },
  {
    title: "Operations & Administration",
    description:
      "Roles supporting business operations, coordination, documentation and administrative functions.",
  },
  {
    title: "Skilled & Shop-Floor Roles",
    description:
      "Opportunities for skilled professionals supporting manufacturing and technical operations.",
  },
  {
    title: "Other Industry Roles",
    description:
      "Additional opportunities based on current employer requirements and candidate qualifications.",
  },
];

const employerServices = [
  {
    title: "Permanent Recruitment",
    description:
      "Connect with suitable professionals for engineering, manufacturing, quality, operations and support positions.",
  },
  {
    title: "Contract Staffing",
    description:
      "Build flexible teams through staffing solutions aligned with workforce and operational requirements.",
  },
  {
    title: "Volume Hiring",
    description:
      "Recruitment support for multiple positions where coordination, speed and candidate relevance are important.",
  },
  {
    title: "NAPS / Apprenticeship Support",
    description:
      "Support for organisations developing early-career talent through apprenticeship opportunities.",
  },
];

const commonReasons = [
  {
    title: "Relevant Opportunities & Talent",
    description:
      "We connect candidates with relevant aerospace and defence opportunities and employers with suitable technical and operational talent.",
  },
  {
    title: "Industry Understanding",
    description:
      "Our recruitment approach considers engineering, manufacturing, quality, maintenance, supply chain and operational functions.",
  },
  {
    title: "Responsive Support",
    description:
      "We focus on clear communication and timely coordination throughout the recruitment journey.",
  },
  {
    title: "People-Focused Approach",
    description:
      "We believe recruitment works best when candidate skills and employer requirements are understood clearly.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your career goals or workforce requirement before beginning the recruitment process.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable candidates or opportunities based on skills, qualifications and role requirements.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "We create relevant connections between candidates and employers across the industry.",
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
    question:
      "What types of aerospace and defence roles does TeamMates support?",
    answer:
      "TeamMates supports opportunities across engineering, technical functions, production, manufacturing, quality, maintenance, supply chain, procurement, operations and other related roles.",
  },
  {
    question: "Can candidates apply for aerospace and defence jobs?",
    answer:
      "Yes. Candidates can explore current opportunities and apply for suitable roles based on their qualifications, skills and experience.",
  },
  {
    question:
      "Does TeamMates provide staffing services for aerospace and defence companies?",
    answer:
      "Yes. TeamMates supports employers with permanent recruitment, contract staffing, volume hiring and NAPS / apprenticeship support.",
  },
  {
    question:
      "Can manufacturing and engineering companies hire through TeamMates?",
    answer:
      "Yes. Employers can share their hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question:
      "Does TeamMates support freshers and early-career candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on available opportunities.",
  },
];

export default function AerospaceDefencePage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Aerospace & Defence
            </p>

            <h1 className="mt-5 max-w-[650px] !text-[#545A5B] text-[42px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[52px] lg:text-[px]">
              Connecting skilled people with{" "}
              <span className="!text-[#6D7E5A]">
                aerospace & defence opportunities.
              </span>
            </h1>

            <p className="mt-7 max-w-[640px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Whether you are looking for your next engineering, manufacturing
              or operations opportunity or building a capable workforce,
              TeamMates connects candidates and employers through focused
              recruitment and staffing support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find Jobs
              </Button>

              <Button href="/for-employers" variant="dark">
                Hire Talent
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/aerospace-defence.jpg"
              alt="Aerospace and defence professionals working together"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[600px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRY RECRUITMENT
      ========================================================== */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-20">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Industry Recruitment
              </p>

              <h2 className="mt-4 max-w-[620px] !text-white text-[42px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[52px] lg:text-[64px]">
                Connecting talent with aerospace and defence opportunities.
              </h2>
            </div>

            <div className="pt-1 lg:pt-12">
              <p className="max-w-[720px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Aerospace and defence organisations rely on skilled
                professionals across engineering, manufacturing, quality,
                maintenance, supply chain and operational functions.
              </p>

              <p className="mt-5 max-w-[720px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                TeamMates supports both candidates and employers by creating
                relevant connections between skills, career opportunities and
                workforce requirements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FOR CANDIDATES
      ========================================================== */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                For Candidates
              </p>

              <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Find opportunities that match your technical skills.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore career opportunities across engineering,
                manufacturing, quality, maintenance, supply chain and other
                aerospace and defence functions.
              </p>

              <div className="mt-8">
                <Button href="/jobs" variant="primary">
                  Explore Jobs
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
      ========================================================== */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                For Employers
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Build capable aerospace & defence teams.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                From specialist positions to larger workforce requirements,
                TeamMates provides recruitment and staffing support aligned
                with your operational needs.
              </p>

              <div className="mt-8">
                <Button href="/for-employers" variant="primary">
                  Hire Talent
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
      ========================================================== */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Why TeamMates
              </p>

              <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Recruitment support built around people.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are looking for an opportunity or building an
                aerospace and defence team, our approach focuses on relevant
                connections, clear communication and practical recruitment
                support.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {commonReasons.map((reason) => (
                <article
                  key={reason.title}
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#6D7E5A]">
                    <span className="text-[13px] font-bold !text-white">
                      ✓
                    </span>
                  </div>

                  <h3 className="mt-5 !text-[#545A5B] text-[21px] font-bold leading-tight">
                    {reason.title}
                  </h3>

                  <p className="mt-3 !text-[#6F746F] text-[14px] leading-7">
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
      ========================================================== */}
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
                  className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
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
      ========================================================== */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              FAQ
            </p>

            <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Aerospace & defence recruitment questions.
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
          FINAL COMBINED CTA
      ========================================================== */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            {/* CTA INTRO */}
            <div className="mx-auto max-w-[1050px] text-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Aerospace & Defence
              </p>

              <h2 className="mx-auto mt-5 max-w-[1000px] !text-white text-[38px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[50px] lg:text-[60px]">
                The right people can help your business{" "}
                <span className="!text-[#6D7E5A]">
                  move forward.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[760px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are looking for your next aerospace and defence
                opportunity or building a capable workforce, TeamMates can
                help you take the next step.
              </p>
            </div>

            {/* CTA CARDS */}
            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">

              {/* CANDIDATES */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Candidates
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Find your next aerospace & defence opportunity.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Explore opportunities across engineering, manufacturing,
                  quality, maintenance, supply chain and other industry
                  functions.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/jobs" variant="primary">
                    Find Jobs
                  </Button>
                </div>
              </div>

              {/* EMPLOYERS */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Build your aerospace & defence team.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Share your workforce requirement and connect with relevant
                  engineering, manufacturing, technical and operational
                  talent.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/for-employers" variant="primary">
                    Hire Talent
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