import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title:
    "BPO & Customer Support Recruitment | Jobs & Staffing | TeamMates HR Solutions",
  description:
    "Explore BPO and customer support career opportunities or connect with TeamMates HR Solutions for BPO recruitment, staffing and workforce support across India.",
};

const candidateRoles = [
  {
    title: "Customer Support",
    description:
      "Opportunities across customer service, customer assistance and day-to-day support functions.",
  },
  {
    title: "Voice Process",
    description:
      "Roles involving customer conversations, inbound and outbound calls and voice-based support.",
  },
  {
    title: "Non-Voice Process",
    description:
      "Opportunities across email, chat, documentation and other non-voice customer support functions.",
  },
  {
    title: "Technical Support",
    description:
      "Roles supporting customers with products, applications, systems and technology-related queries.",
  },
  {
    title: "Back Office",
    description:
      "Opportunities across data processing, documentation, coordination and administrative support.",
  },
  {
    title: "Operations",
    description:
      "Roles supporting process management, team coordination, reporting and day-to-day BPO operations.",
  },
  {
    title: "Quality & Training",
    description:
      "Opportunities across quality monitoring, process improvement, training and employee development.",
  },
  {
    title: "Other BPO Roles",
    description:
      "Additional BPO and customer support opportunities based on current employer requirements and candidate profiles.",
  },
];

const employerServices = [
  {
    title: "Permanent Recruitment",
    description:
      "Connect with suitable professionals for permanent BPO, customer support and operations positions.",
  },
  {
    title: "Contract Staffing",
    description:
      "Build flexible customer support teams through staffing solutions aligned with your business requirements.",
  },
  {
    title: "Volume Hiring",
    description:
      "Support for multiple BPO positions where speed, coordination and candidate relevance matter.",
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
      "Connect candidates with relevant BPO opportunities and employers with suitable customer support professionals.",
  },
  {
    title: "Customer Support Understanding",
    description:
      "Understand customer service, voice, non-voice and operational functions and their workforce requirements.",
  },
  {
    title: "Responsive Support",
    description:
      "Clear communication and coordination throughout the recruitment journey.",
  },
  {
    title: "People-Focused Approach",
    description:
      "A recruitment approach that considers skills, requirements and career direction.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your career goals or BPO hiring requirement before beginning the recruitment process.",
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
      "We create relevant connections between candidates and BPO employers.",
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
    question: "What BPO and customer support roles does TeamMates support?",
    answer:
      "TeamMates supports opportunities across customer support, voice process, non-voice process, technical support, back office, operations, quality and training and other BPO functions.",
  },
  {
    question: "Can candidates apply for BPO jobs through TeamMates?",
    answer:
      "Yes. Candidates can explore current opportunities and apply for suitable BPO and customer support roles through the TeamMates recruitment process.",
  },
  {
    question: "Does TeamMates provide BPO staffing services?",
    answer:
      "Yes. TeamMates supports employers with permanent recruitment, contract staffing, volume hiring and NAPS / apprenticeship support.",
  },
  {
    question: "Can BPO companies hire through TeamMates?",
    answer:
      "Yes. BPO and customer support employers can share their hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question: "Does TeamMates support freshers and entry-level candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on available opportunities.",
  },
];

export default function BPOCustomerSupportPage() {
  return (
    <main className="bg-[#FDFDFD]">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              BPO & Customer Support
            </p>

            <h1 className="mt-5 max-w-[620px] !text-[#545A5B] text-[38px] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-[46px] lg:text-[52px]">
              Connecting customer support talent with{" "}
              <span className="!text-[#6D7E5A]">
                growing businesses.
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Whether you are looking for your next BPO opportunity or building
              a customer-focused workforce, TeamMates connects candidates and
              employers through focused recruitment and staffing support.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find BPO Jobs
              </Button>

              <Button href="/for-employers" variant="dark">
                Hire BPO Talent
              </Button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/bpo-customer-support.jpg"
              alt="Customer support professionals working together"
              width={900}
              height={700}
              className="h-[420px] w-full object-cover sm:h-[500px] lg:h-[600px]"
              priority
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          BPO RECRUITMENT
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                BPO & Customer Support Recruitment
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                People who create better customer experiences.
              </h2>
            </div>

            <div>
              <p className="!text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                BPO and customer support teams depend on people who can
                communicate clearly, understand customer needs and contribute
                to consistent operations.
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
                Find BPO opportunities that fit your skills.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore opportunities across customer support, voice,
                non-voice and operations functions. TeamMates helps candidates
                understand available roles and move through the recruitment
                journey with clarity.
              </p>

              <div className="mt-8">
                <Button href="/jobs" variant="primary">
                  Explore BPO Jobs
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
                Build stronger customer support teams.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                From individual customer support positions to larger workforce
                requirements, TeamMates provides recruitment and staffing
                support aligned with your business needs.
              </p>

              <div className="mt-8">
                <Button href="/for-employers" variant="primary">
                  Hire BPO Talent
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
                Whether you are building your customer service career or
                building a BPO workforce, our approach focuses on relevant
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
              BPO recruitment questions.
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
                BPO & Customer Support
              </p>

              <h2 className="mx-auto mt-5 max-w-[1000px] !text-white text-[38px] font-extrabold leading-[1.04] tracking-[-0.045em] sm:text-[50px] lg:text-[60px]">
                The right people can help your customer support business{" "}
                <span className="!text-[#6D7E5A]">
                  move forward.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-[760px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Whether you are looking for your next BPO opportunity or
                building a capable customer support workforce, TeamMates can
                help you take the next step.
              </p>

            </div>

            <div className="mx-auto mt-10 grid max-w-[1000px] items-stretch gap-5 md:grid-cols-2">

              {/* Candidate CTA */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Candidates
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Find your next BPO opportunity.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Explore customer support, voice, non-voice and operations
                  opportunities that match your skills and experience.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/jobs" variant="primary">
                    Find BPO Jobs
                  </Button>
                </div>

              </div>

              {/* Employer CTA */}
              <div className="flex h-full flex-col rounded-[16px] bg-white p-7 text-left sm:p-8">

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  For Employers
                </p>

                <h3 className="mt-3 min-h-[72px] !text-[#545A5B] text-[27px] font-bold leading-[1.12] tracking-[-0.025em] sm:text-[30px]">
                  Build your customer support team.
                </h3>

                <p className="mt-4 max-w-[430px] !text-[#6F746F] text-[15px] leading-7">
                  Share your hiring requirement and connect with relevant BPO
                  and customer support talent.
                </p>

                <div className="mt-auto pt-7">
                  <Button href="/for-employers" variant="primary">
                    Hire BPO Talent
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