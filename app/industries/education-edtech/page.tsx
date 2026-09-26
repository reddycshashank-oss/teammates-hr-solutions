import Image from "next/image";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Education & EdTech Jobs | Recruitment & Staffing | TeamMates HR Solutions",
  description:
    "Explore education and EdTech career opportunities or connect with TeamMates HR Solutions for recruitment and staffing support across teaching, administration, technology, student support and other education functions in India.",
};

const candidateRoles = [
  {
    title: "Teaching & Faculty",
    description:
      "Opportunities across teaching, faculty, academic delivery and subject-specific education roles.",
  },
  {
    title: "Academic Administration",
    description:
      "Roles supporting academic coordination, administration, admissions and institutional operations.",
  },
  {
    title: "Student Support",
    description:
      "Career opportunities across student services, counselling, coordination and learner support functions.",
  },
  {
    title: "Sales & Admissions",
    description:
      "Opportunities across admissions, counselling, inside sales, business development and enrolment support.",
  },
  {
    title: "EdTech & Technology",
    description:
      "Roles across technology, product support, implementation, technical operations and digital learning platforms.",
  },
  {
    title: "Content & Curriculum",
    description:
      "Opportunities involving educational content, curriculum development, instructional design and learning resources.",
  },
  {
    title: "Operations & Customer Support",
    description:
      "Roles supporting education operations, customer service, coordination and day-to-day business functions.",
  },
  {
    title: "Other Education Roles",
    description:
      "Additional opportunities based on current employer requirements and candidate qualifications.",
  },
];

const employerServices = [
  {
    title: "Permanent Recruitment",
    description:
      "Connect with suitable professionals across teaching, administration, admissions, technology and education support functions.",
  },
  {
    title: "Contract Staffing",
    description:
      "Build flexible teams through staffing solutions aligned with academic, operational and project-based workforce requirements.",
  },
  {
    title: "Volume Hiring",
    description:
      "Recruitment support for multiple positions where coordination, speed and candidate relevance are important.",
  },
  {
    title: "NAPS / Apprenticeship Support",
    description:
      "Support for organisations developing early-career talent through structured apprenticeship opportunities.",
  },
];

const candidateReasons = [
  "Access to relevant education and EdTech opportunities",
  "Opportunities across academic, technology and support functions",
  "Clear communication throughout the recruitment process",
  "Support based on your skills, qualifications and career direction",
];

const employerReasons = [
  "Relevant education and EdTech talent",
  "Understanding of academic, operational and technology functions",
  "Responsive recruitment support",
  "People-focused hiring approach",
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
      "We create relevant connections between candidates and employers across the education and EdTech industry.",
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
    question: "What types of education and EdTech roles does TeamMates support?",
    answer:
      "TeamMates supports opportunities across teaching, faculty, academic administration, admissions, student support, sales, technology, content, curriculum, customer support and other related functions.",
  },
  {
    question: "Can candidates apply for education and EdTech jobs through TeamMates?",
    answer:
      "Yes. Candidates can explore current opportunities and apply for suitable roles based on their qualifications, skills and experience.",
  },
  {
    question: "Does TeamMates provide staffing services for education organisations?",
    answer:
      "Yes. TeamMates supports employers with permanent recruitment, contract staffing, volume hiring and NAPS / apprenticeship support.",
  },
  {
    question: "Can schools, institutions and EdTech companies hire through TeamMates?",
    answer:
      "Yes. Employers can share their hiring requirements with TeamMates for recruitment and staffing support.",
  },
  {
    question: "Does TeamMates support freshers and entry-level candidates?",
    answer:
      "TeamMates supports candidates at different career stages, including freshers and early-career professionals, depending on available opportunities.",
  },
];

export default function EducationEdTechPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* Hero */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[620px] max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Education & EdTech
            </p>

            <h1 className="mt-5 max-w-[720px] !text-[#545A5B] text-[48px] font-extrabold leading-[1.02] tracking-[-0.045em] sm:text-[62px] lg:text-[78px]">
              Connecting education talent with{" "}
              <span className="!text-[#6D7E5A]">
                growing opportunities.
              </span>
            </h1>

            <p className="mt-7 max-w-[650px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Whether you are looking for your next opportunity or building a
              capable education and EdTech workforce, TeamMates connects
              candidates and employers through focused recruitment and staffing
              support.
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
              src="/images/industries/education-edtech.jpg"
              alt="Education and EdTech professionals working together"
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
                Industry Recruitment
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
                Connecting people with education & EdTech opportunities.
              </h2>
            </div>

            <div>
              <p className="!text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Education and EdTech organisations need professionals across
                teaching, academic administration, student support, admissions,
                technology, content and operational functions.
              </p>

              <p className="mt-5 !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                TeamMates supports both candidates and employers by creating
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
                Find education opportunities that fit your skills.
              </h2>

              <p className="mt-6 max-w-[520px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                Explore career opportunities across teaching, administration,
                admissions, student support, technology, content and other
                education and EdTech functions.
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

      {/* Employers */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                For Employers
              </p>

              <h2 className="mt-4 !text-white text-[38px] font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-[50px]">
                Build stronger education & EdTech teams.
              </h2>

              <p className="mt-6 max-w-[520px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                From teaching and academic roles to technology and operational
                requirements, TeamMates provides recruitment and staffing
                support aligned with your workforce needs.
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

      {/* Why Candidates */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div className="relative overflow-hidden rounded-[16px]">
            <Image
              src="/images/industries/education-edtech-team.jpg"
              alt="Education and EdTech team collaborating at work"
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
              Support throughout your career journey.
            </h2>

            <p className="mt-6 !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Finding the right opportunity is about more than a job title. We
              focus on understanding your skills, qualifications, experience
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
              Recruitment support built around your workforce.
            </h2>

            <p className="mt-6 !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              We work with employers to understand their requirements before
              connecting them with relevant academic, technology, admissions
              and operational talent.
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
              Explore current education & EdTech opportunities.
            </h2>

            <p className="mt-5 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Browse available roles and find opportunities that match your
              skills, qualifications and career direction.
            </p>
          </div>

          <Button href="/jobs" variant="primary">
            View Jobs
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
                  Looking for education & EdTech talent?
                </h2>

                <p className="mt-5 max-w-[700px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px] sm:leading-8">
                  Share your requirement with TeamMates and our recruitment
                  team can help you connect with relevant academic, technology,
                  admissions, content and support professionals.
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
              Education & EdTech recruitment questions.
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
              Education & EdTech
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[62px]">
              The right people can help your business{" "}
              <span className="!text-[#6D7E5A]">move forward.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px] sm:leading-8">
              Explore education and EdTech opportunities as a candidate or
              connect with TeamMates for your workforce requirements.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/jobs" variant="primary">
                Find Jobs
              </Button>

              <Button href="/for-employers" variant="primary">
                Hire Talent
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}