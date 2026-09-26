import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Career Blog & Job Search Tips | TeamMates HR Solutions",
  description:
    "Read TeamMates HR Solutions career insights, job search tips, resume advice, interview guidance and employment insights for job seekers in India.",
};

const posts = [
  {
    category: "Job Search",
    date: "Career Guide",
    title: "How to Find the Right Job in India: A Practical Guide",
    excerpt:
      "A practical guide to finding relevant job opportunities, identifying suitable roles and making your job search more focused.",
  },
  {
    category: "Resume",
    date: "Career Guide",
    title: "How to Create a Resume That Gets Noticed",
    excerpt:
      "Learn how to structure your resume, highlight relevant skills and present your experience clearly to potential employers.",
  },
  {
    category: "Interview",
    date: "Interview Tips",
    title: "10 Common Interview Questions and How to Prepare",
    excerpt:
      "Prepare for your next interview with practical guidance on common questions, preparation and communicating your experience.",
  },
  {
    category: "Freshers",
    date: "Career Guide",
    title: "Job Search Tips for Freshers in India",
    excerpt:
      "Starting your career can feel challenging. Here are practical ways freshers can approach their first job search.",
  },
  {
    category: "Skills & Careers",
    date: "Career Insights",
    title: "ITI Jobs in India: Career Opportunities for Skilled Professionals",
    excerpt:
      "Explore the types of career opportunities available to ITI-qualified professionals and how to approach your job search.",
  },
  {
    category: "Skills & Careers",
    date: "Career Insights",
    title: "Diploma Jobs in India: Career Paths and Opportunities",
    excerpt:
      "Understand the career possibilities available to diploma holders across technical, engineering and other industries.",
  },
  {
    category: "Interview",
    date: "Interview Tips",
    title: "How to Prepare for Your First Job Interview",
    excerpt:
      "A simple preparation guide for candidates attending their first professional interview.",
  },
  {
    category: "Employer Insights",
    date: "Hiring Insights",
    title: "What Employers Look for When Hiring Freshers",
    excerpt:
      "Understand the skills, attitude and workplace qualities employers may consider when hiring entry-level professionals.",
  },
  {
    category: "Career Growth",
    date: "Career Insights",
    title: "How to Build Skills That Support Long-Term Career Growth",
    excerpt:
      "Explore practical ways to continue learning and develop skills that can support your career over time.",
  },
];

export default function BlogPage() {
  return (
    <main>
      {/* =========================================================
          1. BLOG HERO
      ========================================================= */}

      <section className="bg-[#FDFDFD]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[820px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              TeamMates Blog
            </p>

            <h1 className="mt-5 !text-[#545A5B]">
              Career insights for your next move.
            </h1>

            <p className="mt-7 max-w-[680px] text-[17px] leading-8 !text-[#6F746F] sm:text-[18px]">
              Practical job search advice, resume tips, interview guidance,
              career insights and employment information for professionals
              across India.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. LATEST POSTS
      ========================================================= */}

      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          {/* SECTION INTRO */}

          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Latest Posts
            </p>

            <h2 className="mt-5 !text-white">
              Ideas and advice for your career.
            </h2>

            <p className="mt-5 max-w-[680px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
              Practical guidance to help you search for opportunities, prepare
              for interviews, build your skills and move forward in your
              career.
            </p>
          </div>

          {/* BLOG CARDS */}

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, index) => (
              <article
                key={post.title}
                className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 transition-all duration-300 hover:-translate-y-1 sm:p-8"
              >
                {/* CARD TOP */}

                <div className="flex items-center justify-between gap-4">
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] !text-[#6D7E5A]">
                    {post.category}
                  </span>

                  <span className="text-[11px] font-semibold tracking-[0.08em] !text-[#A4A9A5]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TITLE */}

                <h3 className="mt-7 !text-[#545A5B]">
                  {post.title}
                </h3>

                {/* EXCERPT */}

                <p className="mt-4 text-[15px] leading-7 !text-[#6F746F]">
                  {post.excerpt}
                </p>

                {/* CARD FOOTER */}

                <div className="mt-auto pt-7">
                  <div className="flex items-center justify-between border-t border-[#DFE2DF] pt-5">
                    <span className="text-[11px] font-semibold uppercase tracking-[0.1em] !text-[#A4A9A5]">
                      {post.date}
                    </span>

                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-[13px] font-semibold !text-[#6D7E5A] transition-transform duration-300 group-hover:translate-x-1"
                    >
                      <span className="!text-[#6D7E5A]">
                        Read
                      </span>

                      <span
                        aria-hidden="true"
                        className="!text-[#6D7E5A]"
                      >
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FINAL CTA
      ========================================================= */}

      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div className="max-w-[820px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Your Next Move
              </p>

              <h2 className="mt-5 !text-white">
                Looking for your next career opportunity?
              </h2>

              <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[18px] sm:leading-8">
                Explore job opportunities with TeamMates HR Solutions and
                take your next step.
              </p>

              {/* CTA BUTTONS */}

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button
                  href="/jobs"
                  variant="primary"
                  className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
                >
                  Find Jobs
                </Button>

                <Button
                  href="/for-candidates"
                  variant="primary"
                  className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
                >
                  For Candidates
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}