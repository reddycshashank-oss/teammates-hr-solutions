import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

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

const candidateReasons = [
  "Access to relevant healthcare opportunities",
  "Opportunities across different healthcare functions",
  "Clear communication throughout the recruitment process",
  "Support based on your skills and career direction",
];

const employerReasons = [
  "Relevant healthcare talent",
  "Understanding of different healthcare functions",
  "Responsive recruitment support",
  "People-focused hiring approach",
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
    question: "Can hospitals and healthcare organisations hire through TeamMates?",
    answer:
      "Yes. Healthcare employers can share their hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question: "Does TeamMates support freshers and early-career candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on available opportunities.",
  },
];

export default function HealthcarePage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* Hero */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Healthcare
            </p>

            <h1 className="mt-5 max-w-[720px] !text-[#545A5B] text-[48px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[62px] lg:text-[78px]">
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

      {/* Industry Introduction */}
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

      {/* Candidates */}
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

      {/* Employers */}
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

      {/* Why Candidates */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/healthcare-team.jpg"
              alt="Healthcare professionals collaborating at work"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover sm:h-[520px]"
            />
          </div>

          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              For Professionals
            </p>

            <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Support throughout your healthcare career journey.
            </h2>

            <p className="mt-6 !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Finding the right healthcare opportunity is about more than a
              job title. We focus on understanding your skills, experience and
              career direction.
            </p>

            <div className="mt-8 space-y-4">
              {candidateReasons.map((reason) => (
                <div
                  key={reason}
                  className="flex items-start gap-4 border-b border-[#DFE2DF] pb-4"
                >
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#6D7E5A] text-[12px] font-bold !text-white">
                    ✓
                  </span>

                  <p className="!text-[#545A5B] text-[15px] font-semibold leading-6">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Employers */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-[850px] text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              For Employers
            </p>

            <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Recruitment support built around your healthcare workforce.
            </h2>

            <p className="mt-6 !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              We work with healthcare employers to understand their
              requirements before connecting them with relevant talent.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {employerReasons.map((reason) => (
              <article
                key={reason}
                className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
              >
                <p className="!text-[#545A5B] text-[18px] font-bold leading-7">
                  {reason}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                How We Work
              </p>

              <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                A straightforward recruitment journey.
              </h2>

              <p className="mt-6 !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
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

      {/* Current Opportunities */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Current Opportunities
            </p>

            <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Explore current healthcare opportunities.
            </h2>

            <p className="mt-5 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Browse available roles and find opportunities that match your
              skills, experience and career direction.
            </p>
          </div>

          <Button href="/jobs" variant="primary">
            View Healthcare Jobs
          </Button>
        </div>
      </section>

      {/* Hiring Requirement */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="w-full rounded-[16px] bg-[#FDFDFD] p-8 sm:p-10 lg:p-14">
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                  Hiring Requirement
                </p>

                <h2 className="mt-4 !text-[#545A5B] text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                  Looking for healthcare talent?
                </h2>

                <p className="mt-5 max-w-[700px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                  Share your requirement with TeamMates and our recruitment
                  team can help you connect with relevant healthcare
                  professionals.
                </p>
              </div>

              <Button href="/for-employers" variant="primary">
                Share Hiring Requirement
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              FAQ
            </p>

            <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
              Healthcare recruitment questions.
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
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

      {/* Final CTA */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Healthcare
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[62px]">
              The right people can help healthcare organisations{" "}
              <span className="!text-[#6D7E5A]">move forward.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Explore healthcare opportunities as a candidate or connect with
              TeamMates for your healthcare hiring requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find Healthcare Jobs
              </Button>

              <Button href="/for-employers" variant="primary">
                Hire Healthcare Talent
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}