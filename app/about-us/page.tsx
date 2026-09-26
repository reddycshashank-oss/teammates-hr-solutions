import type { Metadata } from "next";
import Image from "next/image";
import Button from "../../components/Button";

export const metadata: Metadata = {
  title:
    "About TeamMates HR Solutions | Recruitment & Staffing Company India",
  description:
    "Learn about TeamMates HR Solutions, an India-focused recruitment and staffing company connecting professionals with employers through people-focused talent and workforce solutions.",
};

export default function AboutPage() {
  return (
    <main>

      {/* =========================================================
          ABOUT HERO
      ========================================================== */}

      <section className="border-b border-[#DFE2DF] bg-[#FDFDFD]">
        <div className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-[1280px] items-center gap-12 px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16 lg:py-24 xl:gap-20">

          {/* CONTENT */}

          <div className="max-w-[680px]">

            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              About TeamMates
            </p>

            <h1 className="mt-5 max-w-[680px] !text-[#545A5B]">
              Recruitment &amp; Staffing
              <br />
              Company in{" "}
              <span className="!text-[#6D7E5A]">
                India.
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8 lg:text-[18px]">
              TeamMates HR Solutions is an India-focused recruitment and
              staffing company connecting skilled professionals with
              businesses across diverse industries. We focus on understanding
              people, workforce requirements and career goals to create
              relevant connections that support both candidates and employers.
            </p>

            <div className="mt-9">
              <Button
                href="/contact-us"
                variant="primary"
                className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
              >
                Get in Touch
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#DFE2DF] pt-5">

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#545A5B]">
                Recruitment Services
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-1 bg-[#A4A9A5]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#6F746F]">
                Staffing Solutions
              </span>

              <span
                aria-hidden="true"
                className="h-1 w-1 bg-[#A4A9A5]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#6F746F]">
                Talent Connections
              </span>

            </div>
          </div>

          {/* IMAGE */}

          <div className="relative">

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[16px] bg-[#EEF0EE] lg:aspect-[4/4.8]">

              <Image
                src="/images/about-hero.jpg"
                alt="Indian professionals collaborating in a modern workplace"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

            </div>

            <div className="absolute bottom-5 left-5 max-w-[240px] rounded-[16px] bg-[#FDFDFD] px-5 py-4 sm:bottom-6 sm:left-6">

              <p className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#6D7E5A]">
                People &amp; Opportunity
              </p>

              <p className="mt-2 text-[13px] leading-5 !text-[#545A5B]">
                Connecting talent, careers and businesses through meaningful
                recruitment opportunities.
              </p>

            </div>
          </div>

        </div>
      </section>


      {/* =========================================================
          WHO WE ARE
      ========================================================== */}

      <section className="bg-[#C1C3AC]">

        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

            {/* SECTION HEADING */}

            <div>

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Who We Are
              </p>

              <h2 className="mt-5 max-w-[520px] !text-white">
                A recruitment partner built around{" "}
                <span className="!text-[#6D7E5A]">
                  people and opportunity.
                </span>
              </h2>

            </div>

            {/* CONTENT */}

            <div className="max-w-[680px]">

              <p className="text-[17px] leading-8 !text-white sm:text-[18px]">
                TeamMates HR Solutions is a recruitment consultancy based in
                Yelahanka, Bangalore, with more than 15 years of recruitment
                experience. We connect job seekers with verified opportunities
                and help businesses find skilled professionals across diverse
                industries.
              </p>

              <p className="mt-6 text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
                Our recruitment and staffing services support organizations
                across IT, Manufacturing, Healthcare, Logistics, Retail, BPO
                and other sectors. We focus on understanding what candidates
                are looking for and what employers genuinely need, creating
                relevant connections between talent and opportunity.
              </p>

              <p className="mt-6 text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
                We believe recruitment should be clear, relevant and
                people-focused. By understanding skills, experience, workforce
                requirements and career goals, we work to create meaningful
                connections between professionals and employers.
              </p>

              {/* KEY FACTS */}

              <div className="mt-10 grid border-y border-white/30 sm:grid-cols-3">

                {/* EXPERIENCE */}

                <div className="border-b border-white/30 py-6 sm:border-b-0 sm:border-r sm:pr-6">

                  <p className="text-[28px] font-bold tracking-[-0.04em] !text-[#38472A]">
                    15+
                  </p>

                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] !text-white">
                    Years Experience
                  </p>

                </div>

                {/* INDUSTRIES */}

                <div className="border-b border-white/30 py-6 sm:border-b-0 sm:border-r sm:px-6">

                  <p className="text-[28px] font-bold tracking-[-0.04em] !text-[#38472A]">
                    12+
                  </p>

                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] !text-white">
                    Industries
                  </p>

                </div>

                {/* APPROACH */}

                <div className="py-6 sm:pl-6">

                  <p className="text-[28px] font-bold tracking-[-0.04em] !text-[#38472A]">
                    People
                  </p>

                  <p className="mt-2 text-[11px] font-bold uppercase tracking-[0.1em] !text-white">
                    First Approach
                  </p>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =========================================================
          OUR APPROACH
      ========================================================== */}

      <section
        id="our-approach"
        className="bg-[#FFFFFF]"
      >

        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

          {/* SECTION INTRO */}

          <div className="max-w-[760px]">

            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Our Approach
            </p>

            <h2 className="mt-5 max-w-[720px] !text-[#545A5B]">
              Recruitment built around{" "}
              <span className="!text-[#6D7E5A]">
                people, requirements
              </span>{" "}
              and results.
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8">
              Our approach to recruitment and staffing begins with
              understanding. We take time to understand the needs of employers
              and the aspirations of candidates before creating relevant
              connections.
            </p>

          </div>

          {/* APPROACH CONTAINERS */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">

            {/* UNDERSTAND */}

            <article className="rounded-[16px] border border-white/30 bg-[#C1C3AC] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                Understand
              </p>

              <h3 className="mt-4 !text-white">
                Start with the right understanding.
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-white">
                We understand the role, workforce requirements, skills and
                expectations before beginning the recruitment process.
              </p>

            </article>

            {/* CONNECT */}

            <article className="rounded-[16px] border border-white/30 bg-[#C1C3AC] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                Connect
              </p>

              <h3 className="mt-4 !text-white">
                Connect talent with opportunity.
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-white">
                We connect suitable professionals with relevant opportunities
                based on skills, experience and role requirements.
              </p>

            </article>

            {/* SUPPORT */}

            <article className="rounded-[16px] border border-white/30 bg-[#C1C3AC] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                Support
              </p>

              <h3 className="mt-4 !text-white">
                Keep the process clear.
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-white">
                We maintain clear communication throughout the recruitment
                journey, helping candidates and employers stay informed.
              </p>

            </article>

            {/* BUILD */}

            <article className="rounded-[16px] border border-white/30 bg-[#C1C3AC] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                Build
              </p>

              <h3 className="mt-4 !text-white">
                Build relationships that last.
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-white">
                We focus on relationships that can support long-term workforce
                needs and meaningful career opportunities.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR VALUES
      ========================================================== */}

      <section className="bg-[#C1C3AC]">

        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

          {/* SECTION INTRO */}

          <div className="max-w-[760px]">

            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Our Values
            </p>

            <h2 className="mt-5 max-w-[720px] !text-white">
              What guides the way{" "}
              <span className="!text-[#6D7E5A]">
                we work.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
              Our values shape how we communicate, build relationships and
              approach every recruitment opportunity.
            </p>

          </div>

          {/* VALUES CONTAINERS */}

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:gap-6">

            {/* PEOPLE FIRST */}

            <article className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                01
              </p>

              <h3 className="mt-4 !text-[#545A5B]">
                People First
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-[#6F746F]">
                We consider the people, goals and expectations behind every
                recruitment opportunity.
              </p>

            </article>

            {/* INTEGRITY */}

            <article className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                02
              </p>

              <h3 className="mt-4 !text-[#545A5B]">
                Integrity
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-[#6F746F]">
                We value honest communication and transparent interactions
                with candidates and employers.
              </p>

            </article>

            {/* RELEVANCE */}

            <article className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                03
              </p>

              <h3 className="mt-4 !text-[#545A5B]">
                Relevance
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-[#6F746F]">
                We focus on connecting the right skills, experience and
                requirements to create meaningful opportunities.
              </p>

            </article>

            {/* COMMITMENT */}

            <article className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-10">

              <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                04
              </p>

              <h3 className="mt-4 !text-[#545A5B]">
                Commitment
              </h3>

              <p className="mt-4 max-w-[480px] text-[15px] leading-7 !text-[#6F746F]">
                We stay engaged throughout the recruitment journey and focus
                on relationships that can create lasting value.
              </p>

            </article>

          </div>

        </div>
      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================== */}

      <section className="bg-[#FFFFFF]">

        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:px-8 lg:py-28">

          {/* CTA CONTAINER */}

          <div className="rounded-[16px] border border-[#DFE2DF] bg-[#C1C3AC] p-7 sm:p-10 md:p-12 lg:p-16">

            <div className="max-w-[900px]">

              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Let&apos;s Move Forward
              </p>

              <h2 className="mt-5 max-w-[900px] !text-white">
                Ready for the next opportunity or the right{" "}
                <span className="!text-[#6D7E5A]">
                  talent?
                </span>
              </h2>

              <p className="mt-6 max-w-[700px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
                Whether you are looking for your next career opportunity or
                building your team, TeamMates HR Solutions is here to help you
                take the next step.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                <Button
                  href="/jobs"
                  variant="primary"
                  className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
                >
                  Find Jobs
                </Button>

                <Button
                  href="/for-employers"
                  variant="primary"
                  className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
                >
                  Hire Talent
                </Button>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}