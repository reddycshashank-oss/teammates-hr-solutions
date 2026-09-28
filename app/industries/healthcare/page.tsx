import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title:
    "Healthcare Recruitment & Jobs | Healthcare Staffing | TeamMates HR Solutions",
  description:
    "Explore healthcare career opportunities or connect with TeamMates HR Solutions for healthcare recruitment, staffing and workforce support across India.",
};

const candidateRoles = [
  {
    title: "Nursing",
    description:
      "Opportunities across nursing, patient care and healthcare support functions.",
  },
  {
    title: "Medical Support",
    description:
      "Roles supporting hospitals, clinics and healthcare operations across different functions.",
  },
  {
    title: "Pharmacy",
    description:
      "Career opportunities across pharmacy, medication support and related healthcare functions.",
  },
  {
    title: "Diagnostics",
    description:
      "Opportunities in diagnostic centres, laboratory support and healthcare testing functions.",
  },
  {
    title: "Hospital Administration",
    description:
      "Roles across administration, coordination, front office and healthcare operations.",
  },
  {
    title: "Healthcare Operations",
    description:
      "Opportunities supporting day-to-day healthcare delivery, coordination and operational activities.",
  },
  {
    title: "Patient Support",
    description:
      "Roles involving patient coordination, customer support and service-related healthcare functions.",
  },
  {
    title: "Other Healthcare Roles",
    description:
      "Additional healthcare opportunities based on current employer requirements and candidate profiles.",
  },
];

const employerServices = [
  {
    title: "Permanent Recruitment",
    description:
      "Connect with suitable professionals for permanent healthcare, administrative and operational positions.",
  },
  {
    title: "Contract Staffing",
    description:
      "Build flexible healthcare teams through staffing solutions aligned with your workforce requirements.",
  },
  {
    title: "Volume Hiring",
    description:
      "Support for multiple healthcare positions where speed, coordination and candidate relevance matter.",
  },
  {
    title: "NAPS / Apprenticeship Support",
    description:
      "Support for organisations developing early-career talent pipelines through apprenticeship opportunities.",
  },
];

const commonReasons = [
  {
    title: "Relevant Opportunities & Talent",
    description:
      "Connect candidates with suitable healthcare opportunities and employers with relevant healthcare professionals.",
  },
  {
    title: "Healthcare Understanding",
    description:
      "Understand different healthcare functions and their workforce requirements.",
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
      "We understand your career goals or healthcare hiring requirement before beginning the recruitment process.",
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
      "We create relevant connections between candidates and healthcare employers.",
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
    question: "What healthcare roles does TeamMates support?",
    answer:
      "TeamMates supports opportunities across nursing, medical support, pharmacy, diagnostics, hospital administration, healthcare operations, patient support and other healthcare functions.",
  },
  {
    question: "Can candidates apply for healthcare jobs through TeamMates?",
    answer:
      "Yes. Candidates can explore current opportunities and apply for suitable healthcare roles through the TeamMates recruitment process.",
  },
  {
    question: "Does TeamMates provide healthcare staffing services?",
    answer:
      "Yes. TeamMates supports employers with permanent recruitment, contract staffing, volume hiring and NAPS / apprenticeship support.",
  },
  {
    question:
      "Can hospitals and healthcare organisations hire through TeamMates?",
    answer:
      "Yes. Healthcare employers can share their hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question:
      "Does TeamMates support freshers and early-career candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on available opportunities.",
  },
];

export default function HealthcarePage() {
  return (
    <main className="bg-[#FDFDFD]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Healthcare
            </p>

            <h1 className="mt-5 max-w-[620px] !text-[#545A5B] text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[52px]">
              Connecting healthcare talent with{" "}
              <span className="!text-[#6D7E5A]">
                growing organisations.
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Whether you are looking for your next healthcare opportunity or
              building a capable healthcare workforce, TeamMates connects
              candidates and employers through focused recruitment and staffing
              support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find Healthcare Jobs
              </Button>

              <Button href="/for-employers" variant="dark">
                Hire Healthcare Talent
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/healthcare.jpg"
              alt="Healthcare professionals working together"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[600px]"
              priority
            />
          </div>

        </div>
      </section>

      {/* =========================================================
          HEALTHCARE RECRUITMENT
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Healthcare Recruitment
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                People who help healthcare organisations move forward.
              </h2>
            </div>

            <div>
              <p className="!text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Healthcare organisations depend on capable people across
                clinical support, administration, operations and patient-facing
                functions.
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
                Find healthcare opportunities that fit your skills.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore opportunities across healthcare functions and career
                stages. TeamMates helps candidates understand available roles
                and move through the recruitment journey with clarity.
              </p>

              <div className="mt-8">
                <Button href="/jobs" variant="primary">
                  Explore Healthcare Jobs
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
                Build stronger healthcare teams.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                From individual healthcare positions to larger workforce
                requirements, TeamMates provides recruitment and staffing
                support aligned with your organisational needs.
              </p>

              <div className="mt-8">
                <Button href="/for-employers" variant="primary">
                  Hire Healthcare Talent
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
                Recruitment support built around people.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are building your healthcare career or building a
                healthcare workforce, our approach focuses on relevant
                opportunities, suitable talent and clear communication.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {commonReasons.map((reason) => (
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
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              FAQ
            </p>

            <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Healthcare recruitment questions.
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
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <div className="mx-auto max-w-[1050px] text-center">

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Healthcare
              </p>

              <h2 className="mx-auto mt-5 max-w-[1000px] !text-white text-[38px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[50px] lg:text-[60px]">
                The right people can help healthcare organisations{" "}
                <span className="!text-[#6D7E5A]">
                  move forward.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[760px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are looking for your next healthcare opportunity
                or building a capable healthcare workforce, TeamMates can help
                you take the next step.
              </p>

            </div>

            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">

              {/* Candidate CTA */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Candidates
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Find your next healthcare opportunity.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Explore healthcare opportunities that match your skills,
                  experience and career direction.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/jobs" variant="primary">
                    Find Healthcare Jobs
                  </Button>
                </div>

              </div>

              {/* Employer CTA */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Build your healthcare team.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Share your hiring requirement and connect with relevant
                  healthcare professionals.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/for-employers" variant="primary">
                    Hire Healthcare Talent
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