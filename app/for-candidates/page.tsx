import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Recruitment Services for Job Seekers in India | TeamMates",
  description:
    "Find career opportunities and recruitment support with TeamMates HR Solutions. Connect with relevant jobs and employers across India.",
  keywords: [
    "Recruitment Services for Job Seekers in India",
    "Jobs for candidates in India",
    "Career opportunities in India",
    "Job placement services",
    "Recruitment agency for job seekers",
    "Career support",
    "Job search assistance",
  ],
};

const candidateSupport = [
  {
    number: "01",
    title: "Discover Opportunities",
    description:
      "Explore relevant job openings based on your skills, experience and career interests.",
  },
  {
    number: "02",
    title: "Connect With Employers",
    description:
      "Get connected with employers looking for relevant skills and professional experience.",
  },
  {
    number: "03",
    title: "Navigate Your Job Search",
    description:
      "Get practical support as you explore opportunities and move through the application process.",
  },
  {
    number: "04",
    title: "Move Forward With Confidence",
    description:
      "Take the next step toward your career goals through relevant opportunities and meaningful connections.",
  },
];

const careerStages = [
  {
    number: "01",
    title: "Freshers",
    description:
      "Explore entry-level opportunities designed for candidates beginning their professional journey.",
  },
  {
    number: "02",
    title: "Experienced Professionals",
    description:
      "Discover roles that align with your existing experience, skills and next career goal.",
  },
  {
    number: "03",
    title: "Skilled & Technical Talent",
    description:
      "Find opportunities for technical, trade, engineering and industry-specific skills.",
  },
];

const jobProcess = [
  {
    number: "01",
    title: "Find a Role",
    description:
      "Search opportunities that match your skills, experience and career interests.",
  },
  {
    number: "02",
    title: "Share Your Profile",
    description:
      "Provide your details so relevant opportunities can be considered.",
  },
  {
    number: "03",
    title: "Connect With the Employer",
    description:
      "Suitable candidates can move forward through the employer's recruitment process.",
  },
  {
    number: "04",
    title: "Take the Next Step",
    description:
      "Continue through the employer's selection process and move toward your next opportunity.",
  },
];

const resources = [
  {
    label: "01",
    title: "Resume & Profile",
    description:
      "Practical guidance for presenting your experience, skills and professional profile.",
  },
  {
    label: "02",
    title: "Interview Preparation",
    description:
      "Useful guidance to help you prepare for recruitment conversations and interviews.",
  },
  {
    label: "03",
    title: "Job Search Tips",
    description:
      "Practical advice for navigating your job search and identifying relevant opportunities.",
  },
];

const faqs = [
  {
    question: "How can I find jobs through TeamMates HR Solutions?",
    answer:
      "You can explore current opportunities through the Jobs section of our website. Search for roles that match your skills, experience, location or career interests and review the available opportunities.",
  },
  {
    question: "What types of job opportunities does TeamMates offer?",
    answer:
      "TeamMates supports recruitment opportunities across multiple industries and functions. Available roles depend on current employer requirements and the opportunities listed on the Jobs page.",
  },
  {
    question: "Can freshers apply for jobs through TeamMates?",
    answer:
      "Yes. TeamMates supports opportunities for candidates at different stages of their careers, including freshers and entry-level candidates. Available roles depend on current employer requirements.",
  },
  {
    question: "Does TeamMates help candidates with their job search?",
    answer:
      "TeamMates focuses on connecting candidates with relevant recruitment opportunities and employers. Candidates can explore suitable openings and follow the application process associated with each opportunity.",
  },
  {
    question: "Does TeamMates provide career support?",
    answer:
      "TeamMates helps candidates discover relevant opportunities and connect with employers. Candidates can also explore career resources covering topics such as job search, resumes and interview preparation.",
  },
  {
    question: "How can I submit my profile to TeamMates?",
    answer:
      "You can explore current job opportunities and follow the relevant application process. For general enquiries or candidate-related questions, you can also contact the TeamMates HR Solutions team.",
  },
];

export default function ForCandidatesPage() {
  return (
    <main className="overflow-hidden bg-[#FDFDFD]">

      {/* =========================================================
    1. CANDIDATE HERO
========================================================= */}
<section className="border-b border-[#DFE2DF] bg-[#FDFDFD]">
  <div className="mx-auto grid min-h-[680px] w-full max-w-[1280px] items-center gap-14 px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:py-24">

    <div className="max-w-[650px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] !text-[#6D7E5A] sm:text-[12px]">
        For Candidates
      </p>

      <h1 className="mt-5 max-w-[700px] !text-[#545A5B]">
        Find the Right{" "}
        <span className="!text-[#6D7E5A]">
          Career Opportunity
        </span>{" "}
        in India.
      </h1>

      <p className="mt-7 max-w-[590px] text-[17px] leading-8 !text-[#6F746F] sm:text-[18px]">
        Connect with relevant jobs, employers and career opportunities
        across India. Get the support you need to take your next career
        step with confidence.
      </p>

      <div className="mt-9">
        <Link
          href="/jobs"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold tracking-[-0.01em] !text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          <span className="!text-white">
            Find Jobs
          </span>

          <span
            aria-hidden="true"
            className="!text-white transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-[#DFE2DF] pt-5 text-[11px] font-semibold uppercase tracking-[0.1em]">
        <span className="!text-[#6F746F]">Jobs</span>

        <span className="!text-[#A4A9A5]">•</span>

        <span className="!text-[#6F746F]">Career Support</span>

        <span className="!text-[#A4A9A5]">•</span>

        <span className="!text-[#6F746F]">Opportunities</span>
      </div>
    </div>

    <div className="relative">
      <div className="relative aspect-[0.94/1] min-h-[440px] w-full overflow-hidden rounded-[16px] bg-[#EEF0EE] sm:min-h-[540px]">
        <Image
          src="/images/candidates-hero.jpg"
          alt="Indian professional exploring career opportunities"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 52vw"
          className="object-cover"
        />
      </div>

      <div className="absolute -bottom-5 -left-3 hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] px-5 py-4 shadow-[0_10px_30px_rgba(17,17,17,0.06)] sm:block md:left-[-20px]">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#6F746F]">
          Your next step
        </p>

        <p className="mt-1 text-[15px] font-bold !text-[#545A5B]">
          Starts with the right opportunity.
        </p>
      </div>
    </div>

  </div>
</section>

      {/* =========================================================
    2. HOW WE HELP CANDIDATES
========================================================= */}
<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

    <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
          How We Help
        </p>

        <h2 className="mt-5 max-w-[560px] !text-white">
          More than finding a job. We&apos;re helping you find the right
          opportunity.
        </h2>

        <p className="mt-6 max-w-[520px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
          Our recruitment approach starts with understanding people.
          Skills, experience, career interests and employer requirements
          all matter when creating a relevant connection.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
        {candidateSupport.map((item) => (
          <article
            key={item.number}
            className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7 lg:p-8"
          >
            <p className="text-[11px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
              {item.number}
            </p>

            <h3 className="mt-4 text-[23px] leading-tight !text-[#545A5B]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[390px] text-[15px] leading-7 !text-[#6F746F]">
              {item.description}
            </p>
          </article>
        ))}
      </div>

    </div>
  </div>
</section>

      {/* =========================================================
    3. SEARCH JOBS
========================================================= */}
<section className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

    <div className="mx-auto max-w-[900px] text-center">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
        Search Jobs
      </p>

      <h2 className="mt-5 !text-[#545A5B]">
        Find jobs that match your skills.
      </h2>

      <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8">
        Search current opportunities by job title, skill, industry or
        location and discover roles that fit your career goals.
      </p>

    </div>

    <form
      action="/jobs"
      method="GET"
      className="mx-auto mt-12 max-w-[1050px] rounded-[16px] bg-[#FFFFFF] p-4 sm:p-5 md:p-6"
    >
      <div className="grid gap-3 md:grid-cols-[1fr_1fr_auto]">

        <div>
          <label
            htmlFor="candidate-keyword"
            className="sr-only"
          >
            Job title, skill or keyword
          </label>

          <input
            id="candidate-keyword"
            name="keyword"
            type="text"
            placeholder="Job title, skill or keyword"
            className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors placeholder:!text-[#6F746F] focus:border-[#6D7E5A] focus:ring-1 focus:ring-[#6D7E5A]"
          />
        </div>

        <div>
          <label
            htmlFor="candidate-location"
            className="sr-only"
          >
            Location
          </label>

          <input
            id="candidate-location"
            name="location"
            type="text"
            placeholder="Location"
            className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors placeholder:!text-[#6F746F] focus:border-[#6D7E5A] focus:ring-1 focus:ring-[#6D7E5A]"
          />
        </div>

        <button
          type="submit"
          className="group inline-flex h-14 items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-7 text-[13px] font-bold !text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          <span className="!text-white">
            Search Jobs
          </span>

          <span
            aria-hidden="true"
            className="!text-white transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

      </div>

      <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-[#DFE2DF] pt-5">

        <span className="text-[11px] font-bold uppercase tracking-[0.1em] !text-[#6F746F]">
          Popular searches
        </span>

        {[
          "ITI",
          "Diploma",
          "Fresher",
          "Engineering",
          "Manufacturing",
        ].map((term) => (
          <Link
            key={term}
            href={`/jobs?keyword=${encodeURIComponent(term)}`}
            className="text-[13px] font-semibold !text-[#38472A] transition-colors hover:!text-[#6D7E5A]"
          >
            {term}
          </Link>
        ))}

      </div>
    </form>

  </div>
</section>

      {/* =========================================================
    4. CANDIDATE SUPPORT
========================================================= */}
<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

    <div className="max-w-[720px]">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
        Candidate Support
      </p>

      <h2 className="mt-5 !text-white">
        Support for every step of your job search.
      </h2>

      <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
        Finding the right opportunity is not only about searching for
        vacancies. It is also about understanding your direction,
        identifying relevant roles and moving through the recruitment
        process clearly.
      </p>

    </div>

    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">

      {[
        ["01", "Prepare"],
        ["02", "Search"],
        ["03", "Apply"],
        ["04", "Connect"],
        ["05", "Grow"],
      ].map(([number, title]) => (
        <div
          key={number}
          className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 lg:p-7"
        >
          <span className="text-[11px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
            {number}
          </span>

          <h3 className="mt-4 text-[24px] !text-[#545A5B]">
            {title}
          </h3>

          <div className="mt-6 h-px w-10 bg-[#6D7E5A]" />
        </div>
      ))}

    </div>
  </div>
</section>

     {/* =========================================================
    5. WHO WE SUPPORT
========================================================= */}
<section className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

    <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
          Who We Support
        </p>

        <h2 className="mt-5 max-w-[520px] !text-[#545A5B]">
          Opportunities for different stages of your career.
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">

        {careerStages.map((item) => (
          <article
            key={item.number}
            className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
              {item.number}
            </span>

            <h3 className="mt-4 text-[23px] !text-[#545A5B]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
              {item.description}
            </p>
          </article>
        ))}

      </div>

    </div>

  </div>
</section>

      {/* =========================================================
    6. HOW THE JOB PROCESS WORKS
========================================================= */}
<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

    <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

      <div>
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
          The Process
        </p>

        <h2 className="mt-5 max-w-[520px] !text-white">
          A clearer path from job search to opportunity.
        </h2>

        <p className="mt-6 max-w-[500px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
          Every employer has its own recruitment process. Our role is to
          help create a relevant connection between candidates and
          opportunities.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">

        {jobProcess.map((item) => (
          <div
            key={item.number}
            className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
          >
            <span className="text-[11px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
              {item.number}
            </span>

            <h3 className="mt-4 text-[23px] !text-[#545A5B]">
              {item.title}
            </h3>

            <p className="mt-4 max-w-[430px] text-[15px] leading-7 !text-[#6F746F]">
              {item.description}
            </p>
          </div>
        ))}

      </div>

    </div>
  </div>
</section>
      {/* =========================================================
          7. CAREER RESOURCES
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

          <div className="flex flex-col gap-7 border-b border-[#DFE2DF] pb-10 lg:flex-row lg:items-end lg:justify-between">

            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
                Career Resources
              </p>

              <h2 className="mt-5 max-w-[650px] text-[#111111]">
                Useful resources for your career journey.
              </h2>
            </div>

            <Link
              href="/resources"
              className="group inline-flex w-fit items-center gap-3 text-[14px] font-bold text-[#38472A] transition-colors hover:text-[#6D7E5A]"
            >
              <span>Explore Resources</span>

              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>

          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-3 lg:gap-6">

            {resources.map((resource) => (
              <Link
                key={resource.label}
                href="/resources"
                className="group rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 lg:p-8"
              >
                <span className="text-[11px] font-bold tracking-[0.12em] text-[#6D7E5A]">
                  {resource.label}
                </span>

                <h3 className="mt-5 text-[25px] !text-[#545A5B]">
                  {resource.title}
                </h3>

                <p className="mt-4 max-w-[360px] text-[14px] leading-7 text-[#6F746F]">
                  {resource.description}
                </p>

                <span
                  aria-hidden="true"
                  className="mt-7 inline-block text-[18px] text-[#6D7E5A] transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </Link>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
    8. FAQ
========================================================= */}
<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[980px] px-4 py-20 sm:px-6 md:px-8 md:py-28 lg:py-[120px]">

    <div className="text-center">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
        Candidate FAQ
      </p>

      <h2 className="mt-5 !text-white">
        Questions candidates often ask.
      </h2>

      <p className="mx-auto mt-6 max-w-[620px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
        Find answers to common questions about job opportunities,
        candidate support and the recruitment process.
      </p>

    </div>

    <div className="mt-12 grid gap-4">

      {faqs.map((faq) => (
        <details
          key={faq.question}
          className="group rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] px-5 sm:px-6"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-left text-[16px] font-bold !text-[#545A5B] sm:py-7 sm:text-[17px] [&::-webkit-details-marker]:hidden">

            <span className="!text-[#545A5B]">
              {faq.question}
            </span>

            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#A4A9A5] text-[18px] font-normal !text-[#38472A] transition-transform duration-300 group-open:rotate-45"
            >
              +
            </span>

          </summary>

          <div className="max-w-[760px] pb-7 pr-10 text-[15px] leading-7 !text-[#6F746F] sm:pb-8 sm:text-[16px] sm:leading-8">
            {faq.answer}
          </div>

        </details>
      ))}

    </div>
  </div>
</section>

    {/* =========================================================
    9. FINAL CTA
========================================================= */}
<section className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-[112px]">

    <div className="w-full rounded-[16px] bg-[#C1C3AC] p-7 sm:p-9 lg:p-12">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
        Your Next Move
      </p>

      <h2 className="mt-5 max-w-[850px] !text-white">
        Your next career opportunity could be closer than you think.
      </h2>

      <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
        Explore current opportunities and take the next step in your
        career with TeamMates HR Solutions.
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row">

        <Link
          href="/jobs"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          <span className="!text-white">
            Find Jobs
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
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#6D7E5A] bg-white px-6 py-3 text-[13px] font-semibold !text-[#6D7E5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          <span className="!text-[#6D7E5A]">
            Contact TeamMates
          </span>

          <span
            aria-hidden="true"
            className="!text-[#6D7E5A] transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>

      </div>

    </div>
  </div>
</section>

    </main>
  );
}