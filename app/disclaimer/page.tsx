import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | TeamMates HR Solutions",
  description:
    "Read the Disclaimer for the TeamMates HR Solutions website, including information about job opportunities, recruitment services, third-party information and website content.",
};

const sections = [
  {
    number: "01",
    title: "General Information",
    content: (
      <>
        <p>
          The information provided on the TeamMates HR Solutions website is
          intended for general recruitment, employment, staffing and
          internship-related information.
        </p>

        <p>
          While we aim to keep the information useful and current, TeamMates
          HR Solutions does not guarantee that all information on the website
          will always be complete, accurate or up to date.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Job Opportunities",
    content: (
      <>
        <p>
          Job vacancies and employment opportunities displayed or communicated
          through TeamMates HR Solutions are based on information available to
          us from employers and recruitment requirements.
        </p>

        <p>
          Job availability, qualifications, salary, location, responsibilities,
          experience requirements and other employment details may change
          without prior notice.
        </p>

        <p>
          Candidates are encouraged to verify relevant job details before
          proceeding with an application or accepting an employment offer.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "No Guarantee of Employment",
    content: (
      <>
        <p>
          Registration with TeamMates HR Solutions, submission of a resume or
          application, or participation in the recruitment process does not
          guarantee employment.
        </p>

        <p>
          Selection, interview decisions, job offers and final employment
          decisions remain subject to the requirements and decisions of the
          relevant employer.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Candidate Information",
    content: (
      <>
        <p>
          Candidates are responsible for providing accurate and complete
          information in resumes, applications, forms and other documents
          submitted to TeamMates HR Solutions.
        </p>

        <p>
          TeamMates HR Solutions is not responsible for problems arising from
          inaccurate, incomplete, outdated or misleading information supplied
          by a candidate.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Employer Information",
    content: (
      <>
        <p>
          Job descriptions, hiring requirements and other employer-related
          information may be provided to TeamMates HR Solutions by employers or
          their representatives.
        </p>

        <p>
          While reasonable efforts may be made to communicate relevant
          information, candidates should independently verify important details
          with the employer before making employment-related decisions.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Recruitment and Staffing Services",
    content: (
      <>
        <p>
          TeamMates HR Solutions provides recruitment, staffing and workforce
          support based on requirements received from candidates and
          organisations.
        </p>

        <p>
          The availability, scope and outcome of recruitment or staffing
          services may vary depending on role requirements, candidate
          availability, employer requirements and other circumstances.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Internship Opportunities",
    content: (
      <>
        <p>
          Internship opportunities displayed on the website are subject to
          availability, eligibility requirements and the applicable selection
          process.
        </p>

        <p>
          Applying for an internship does not guarantee selection or
          participation in the internship programme.
        </p>

        <p>
          Internship duration, responsibilities, learning areas and other
          programme details may vary according to the specific opportunity.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Third-Party Information and Links",
    content: (
      <>
        <p>
          The website may contain information, references or links relating to
          third-party organisations, websites or services.
        </p>

        <p>
          TeamMates HR Solutions does not control third-party websites and does
          not accept responsibility for their content, accuracy, availability,
          privacy practices or terms.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "External Websites",
    content: (
      <p>
        Users who access third-party websites through links provided on our
        website do so at their own discretion. We recommend reviewing the
        relevant third party's terms, privacy policy and other applicable
        information before using their services.
      </p>
    ),
  },
  {
    number: "10",
    title: "Website Availability",
    content: (
      <>
        <p>
          We aim to maintain the availability and functionality of the
          TeamMates HR Solutions website.
        </p>

        <p>
          However, the website may occasionally be unavailable due to
          maintenance, technical problems, hosting issues, updates, network
          interruptions or circumstances outside our reasonable control.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Accuracy of Information",
    content: (
      <>
        <p>
          We make reasonable efforts to present useful information on the
          website. However, information may change over time and errors or
          omissions may occasionally occur.
        </p>

        <p>
          Users should verify important information before relying on it for
          employment, recruitment, business or other decisions.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "No Professional Advice",
    content: (
      <p>
        Information published on this website should not be treated as legal,
        financial, tax, medical or other professional advice. Where
        professional advice is required, users should consult an appropriately
        qualified professional.
      </p>
    ),
  },
  {
    number: "13",
    title: "Changes to This Disclaimer",
    content: (
      <p>
        TeamMates HR Solutions may update or modify this Disclaimer from time
        to time. Any updated version will be published on this page. Users are
        encouraged to review the Disclaimer periodically.
      </p>
    ),
  },
  {
    number: "14",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions regarding this Disclaimer or information
          published on the TeamMates HR Solutions website, you can contact us.
        </p>

        <div className="mt-6 rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7">
          <h3 className="!text-[#545A5B] !text-[20px] font-bold leading-[1.2]">
            TeamMates HR Solutions
          </h3>

          <div className="mt-4 space-y-2 !text-[#6F746F] !text-[15px] leading-7">
            <p>
              <strong className="!text-[#545A5B]">Phone:</strong>{" "}
              080-45148859 / +91 6360812255
            </p>

            <p>
              <strong className="!text-[#545A5B]">Email:</strong>{" "}
              info@teammateshrsolutions.com
            </p>

            <p>
              <strong className="!text-[#545A5B]">Office:</strong>{" "}
              #2065, 3rd Stage, 16th “B” Cross, Mother Dairy Cross, Yelahanka
              New Town, Bangalore - 560064
            </p>
          </div>
        </div>
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* =========================
          HERO
      ========================== */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-[850px]">
            <p className="!text-[#6D7E5A] text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px]">
              Legal
            </p>

            <h1 className="mt-4 !text-[#545A5B] !text-[32px] font-bold leading-[1.15] tracking-[-0.025em] sm:!text-[36px] lg:!text-[42px]">
              Website{" "}
              <span className="!text-[#6D7E5A]">
                Disclaimer.
              </span>
            </h1>

            <p className="mt-4 max-w-[720px] !text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-7">
              This Disclaimer explains the general nature of information
              provided on the TeamMates HR Solutions website and the
              responsibilities of users when relying on that information.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          DISCLAIMER CONTENT
      ========================== */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1050px]">
            <div className="rounded-[16px] bg-white p-5 sm:p-8 lg:p-12">

              {/* INTRO */}
              <div className="border-b border-[#DFE2DF] pb-7">
                <p className="!text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                  Please read this Disclaimer carefully before using the
                  TeamMates HR Solutions website or relying on information
                  published through it.
                </p>
              </div>

              {/* SECTIONS */}
              {sections.map((section, index) => (
                <article
                  key={section.number}
                  className={`py-8 sm:py-9 ${
                    index !== sections.length - 1
                      ? "border-b border-[#DFE2DF]"
                      : ""
                  }`}
                >
                  <div className="grid gap-5 md:grid-cols-[70px_1fr] md:gap-7">

                    {/* NUMBER */}
                    <div>
                      <span className="!text-[#6D7E5A] text-[11px] font-bold tracking-[0.12em]">
                        {section.number}
                      </span>
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h2 className="!text-[#545A5B] !text-[23px] font-bold leading-[1.2] tracking-[-0.02em] sm:!text-[27px]">
                        {section.title}
                      </h2>

                      <div className="mt-4 space-y-4 !text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                        {section.content}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-[800px] text-center">

              <p className="!text-[#6D7E5A] text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px]">
                TeamMates HR Solutions
              </p>

              <h2 className="mt-4 !text-white !text-[30px] font-bold leading-[1.12] tracking-[-0.025em] sm:!text-[38px] lg:!text-[46px]">
                Have a question about this{" "}
                <span className="!text-[#6D7E5A]">
                  Disclaimer?
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-[650px] !text-white !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                Contact TeamMates HR Solutions if you have questions about the
                information published on our website.
              </p>

              <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  href="/contact-us"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#38472A]"
                >
                  <span>Contact Us</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>

                <Link
                  href="/"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-white bg-white px-6 py-3 text-[13px] font-semibold !text-[#6D7E5A] transition-all duration-300 hover:bg-[#FDFDFD]"
                >
                  <span>Back to Home</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}