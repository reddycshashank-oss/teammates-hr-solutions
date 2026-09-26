import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

export const metadata = {
  title: "IT & Technology Recruitment | Jobs & Hiring | TeamMates HR Solutions",
  description:
    "Explore IT and technology career opportunities or connect with TeamMates HR Solutions for technology recruitment, staffing and hiring support across India.",
};

const candidateRoles = [
  {
    title: "Software Development",
    description:
      "Opportunities across software development, application development and technology teams.",
  },
  {
    title: "IT Support",
    description:
      "Roles supporting users, systems and day-to-day technology operations.",
  },
  {
    title: "Quality Assurance",
    description:
      "Opportunities in software testing, quality assurance and product validation.",
  },
  {
    title: "Network & Infrastructure",
    description:
      "Roles across networks, infrastructure, systems administration and technical operations.",
  },
  {
    title: "Data & Analytics",
    description:
      "Career opportunities involving data, reporting, analytics and business insights.",
  },
  {
    title: "Technical Support",
    description:
      "Customer-facing and internal technical support opportunities across technology environments.",
  },
  {
    title: "Project & Operations",
    description:
      "Roles supporting technology projects, coordination, delivery and operational functions.",
  },
  {
    title: "Other Technology Roles",
    description:
      "Additional technology opportunities based on current employer requirements and candidate profiles.",
  },
];

const employerServices = [
  {
    title: "Permanent Recruitment",
    description:
      "Connect with technology professionals for full-time and long-term hiring requirements.",
  },
  {
    title: "Contract Staffing",
    description:
      "Build flexible technology teams through contract staffing solutions aligned with business requirements.",
  },
  {
    title: "Volume Hiring",
    description:
      "Support for multiple technology positions where speed, coordination and candidate relevance matter.",
  },
  {
    title: "NAPS / Apprenticeship Support",
    description:
      "Support for organisations looking to build early-career talent pipelines through apprenticeship opportunities.",
  },
];

const candidateReasons = [
  "Relevant technology opportunities",
  "Clear communication throughout the process",
  "Guidance based on your career stage",
  "Access to opportunities across different technology functions",
];

const employerReasons = [
  "Relevant technology talent",
  "Understanding of different technology functions",
  "Responsive recruitment support",
  "People-focused hiring approach",
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your career goals or hiring requirement before moving forward.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify suitable candidates or opportunities based on the requirement.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "We facilitate meaningful connections between candidates and employers.",
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
    question: "What IT and technology roles does TeamMates support?",
    answer:
      "TeamMates supports opportunities across software development, IT support, quality assurance, network and infrastructure, data and analytics, technical support, project and operations and other technology functions.",
  },
  {
    question: "Can candidates apply for IT jobs through TeamMates?",
    answer:
      "Yes. Candidates can explore current opportunities and apply for suitable IT and technology roles through the TeamMates recruitment process.",
  },
  {
    question: "Does TeamMates provide technology staffing services?",
    answer:
      "Yes. TeamMates supports employers with permanent recruitment, contract staffing, volume hiring and NAPS / apprenticeship support.",
  },
  {
    question: "Can employers hire technology professionals through TeamMates?",
    answer:
      "Yes. Employers can share their technology hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question: "Does TeamMates support freshers and early-career candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on the available opportunities.",
  },
];

export default function ITTechnologyPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* Hero */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              IT & Technology
            </p>

            <h1 className="mt-5 max-w-[720px] !text-[#545A5B] text-[48px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[62px] lg:text-[78px]">
              Connecting technology talent with{" "}
              <span className="!text-[#6D7E5A]">growing businesses.</span>
            </h1>

            <p className="mt-7 max-w-[650px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Whether you are looking for your next technology opportunity or
              building a technology team, TeamMates HR Solutions connects
              candidates and employers through focused recruitment support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find IT Jobs
              </Button>

              <Button href="/for-employers" variant="dark">
                Hire Technology Talent
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/it-technology.jpg"
              alt="IT and technology professionals working together"
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
                Technology Recruitment
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                Building connections across the technology ecosystem.
              </h2>
            </div>

            <div>
              <p className="!text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Technology teams require the right combination of technical
                capability, adaptability and workplace fit. TeamMates supports
                both candidates and employers by creating a clearer connection
                between skills, opportunities and hiring requirements.
              </p>

              <p className="mt-5 !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Our technology recruitment support covers a range of functions,
                from software and IT support to infrastructure, data,
                quality assurance and technology operations.
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
                Find technology opportunities that fit your career.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore technology roles across different functions and career
                stages. TeamMates helps candidates understand opportunities
                and move through the recruitment journey with clarity.
              </p>

              <div className="mt-8">
                <Button href="/jobs" variant="primary">
                  Explore IT Jobs
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
                Build technology teams with the right people.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                From individual technology positions to larger workforce
                requirements, TeamMates provides recruitment and staffing
                support aligned with your business needs.
              </p>

              <div className="mt-8">
                <Button href="/for-employers" variant="primary">
                  Hire Technology Talent
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
        <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24 lg:items-center">
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/it-technology-team.jpg"
              alt="Technology professionals collaborating in a workplace"
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
              Support that keeps your career journey clear.
            </h2>

            <p className="mt-6 !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Finding the right technology role is about more than matching a
              job title. We focus on understanding your profile, experience
              and career direction.
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
              Recruitment support built around your hiring requirement.
            </h2>

            <p className="mt-6 !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              We work with employers to understand the requirement first and
              then connect it with relevant talent.
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
              Explore current IT and technology opportunities.
            </h2>

            <p className="mt-5 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Browse available roles and find opportunities that match your
              skills, experience and career direction.
            </p>
          </div>

          <Button href="/jobs" variant="primary">
            View IT Jobs
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
                  Looking for technology talent?
                </h2>

                <p className="mt-5 max-w-[700px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                  Share your requirement with TeamMates and our recruitment
                  team can help you connect with relevant technology
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
              IT & Technology recruitment questions.
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
              IT & Technology
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[62px]">
              The right technology connection can help you{" "}
              <span className="!text-[#6D7E5A]">move forward.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Explore opportunities as a candidate or connect with TeamMates
              for your technology hiring requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find IT Opportunities
              </Button>

              <Button href="/for-employers" variant="primary">
                Hire IT Talent
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}