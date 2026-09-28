import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | TeamMates HR Solutions",
  description:
    "Read the Terms and Conditions governing the use of the TeamMates HR Solutions website, recruitment services and related information.",
};

const sections = [
  {
    number: "01",
    title: "Acceptance of Terms",
    content: (
      <>
        <p>
          By accessing or using the TeamMates HR Solutions website, you agree
          to comply with these Terms and Conditions.
        </p>

        <p>
          If you do not agree with any part of these terms, please do not use
          the website or submit information through it.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "About Our Services",
    content: (
      <>
        <p>
          TeamMates HR Solutions provides recruitment, staffing, internship and
          workforce-related services for candidates and employers.
        </p>

        <p>
          Our services may include permanent recruitment, contract staffing,
          volume hiring, apprenticeship support and assistance in connecting
          candidates with relevant employment opportunities.
        </p>

        <p>
          The availability of specific services may depend on current business
          requirements and opportunities.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Use of the Website",
    content: (
      <>
        <p>
          You agree to use this website only for lawful purposes and in a
          manner that does not interfere with the operation, security or
          availability of the website.
        </p>

        <p>You must not:</p>

        <ul className="list-disc space-y-2 pl-5">
          <li>
            Submit false, misleading or inaccurate information.
          </li>
          <li>
            Attempt to gain unauthorised access to the website or its systems.
          </li>
          <li>
            Use the website for fraudulent, unlawful or harmful activities.
          </li>
          <li>
            Upload malicious software, code or other harmful material.
          </li>
          <li>
            Copy, reproduce or misuse website content without appropriate
            permission.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: "04",
    title: "Candidate Information",
    content: (
      <>
        <p>
          Candidates are responsible for ensuring that information submitted
          to TeamMates HR Solutions is accurate, current and complete.
        </p>

        <p>
          This may include resumes, educational qualifications, employment
          history, skills, contact information and other recruitment-related
          details.
        </p>

        <p>
          Providing inaccurate or misleading information may affect the
          recruitment process and the suitability of opportunities presented to
          you.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Job Opportunities",
    content: (
      <>
        <p>
          Job opportunities displayed or communicated through TeamMates HR
          Solutions may be based on requirements received from employers and
          other recruitment requirements.
        </p>

        <p>
          Availability, job requirements, compensation, location, working
          conditions and other employment details may change according to the
          employer's requirements.
        </p>

        <p>
          Submission of an application does not guarantee an interview, job
          offer, selection or employment.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Employer Information",
    content: (
      <>
        <p>
          Employers are responsible for providing accurate information about
          vacancies, job responsibilities, qualifications, workforce
          requirements and other relevant hiring details.
        </p>

        <p>
          TeamMates HR Solutions may use the information provided by employers
          to identify and connect relevant candidates.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Internship Programme",
    content: (
      <>
        <p>
          Internship opportunities offered through TeamMates HR Solutions are
          subject to the specific programme requirements, availability and
          applicable selection process.
        </p>

        <p>
          Submission of an internship application does not guarantee selection
          or participation in the programme.
        </p>

        <p>
          Internship duration, responsibilities, eligibility and other
          programme details may vary according to the specific opportunity.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Intellectual Property",
    content: (
      <>
        <p>
          Unless otherwise stated, the content of this website, including
          text, graphics, logos, design elements, images and other materials,
          belongs to or is used by TeamMates HR Solutions with appropriate
          rights.
        </p>

        <p>
          Website content must not be reproduced, modified, distributed,
          republished or commercially used without appropriate permission.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-Party Links",
    content: (
      <>
        <p>
          The website may contain links to third-party websites or services.
          These links may be provided for convenience or additional
          information.
        </p>

        <p>
          TeamMates HR Solutions does not control third-party websites and is
          not responsible for their content, availability, terms or privacy
          practices.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "No Guarantee of Employment",
    content: (
      <>
        <p>
          TeamMates HR Solutions facilitates recruitment and connections
          between candidates and employers. We do not guarantee that a
          candidate will receive employment as a result of using our website
          or services.
        </p>

        <p>
          Final hiring decisions remain with the relevant employer.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Website Availability",
    content: (
      <>
        <p>
          We aim to keep the website available and functioning properly.
          However, access may occasionally be interrupted because of
          maintenance, technical issues, hosting problems, updates or
          circumstances outside our reasonable control.
        </p>

        <p>
          We do not guarantee that the website will always be available,
          uninterrupted or free from technical errors.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Limitation of Responsibility",
    content: (
      <>
        <p>
          Information provided through the website is intended to support
          recruitment and employment-related interactions.
        </p>

        <p>
          Users should independently verify important employment details,
          employer information, job conditions and other information before
          making decisions or entering into an employment relationship.
        </p>
      </>
    ),
  },
  {
    number: "13",
    title: "Changes to These Terms",
    content: (
      <p>
        TeamMates HR Solutions may update these Terms and Conditions from time
        to time. Updated terms will be published on this page. Continued use
        of the website after changes are published may constitute acceptance of
        the updated terms.
      </p>
    ),
  },
  {
    number: "14",
    title: "Governing Law",
    content: (
      <p>
        These Terms and Conditions shall be interpreted in accordance with
        applicable laws of India. Any legal matters arising in connection with
        the website or these terms shall be subject to the jurisdiction of
        applicable courts in India.
      </p>
    ),
  },
  {
    number: "15",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions regarding these Terms and Conditions, you can
          contact TeamMates HR Solutions.
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

export default function TermsPage() {
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
              Terms &{" "}
              <span className="!text-[#6D7E5A]">
                Conditions.
              </span>
            </h1>

            <p className="mt-4 max-w-[720px] !text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-7">
              These Terms and Conditions explain the rules and requirements for
              using the TeamMates HR Solutions website and our recruitment,
              staffing and internship-related services.
            </p>
          </div>
        </div>
      </section>

      {/* =========================
          TERMS CONTENT
      ========================== */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1050px]">
            <div className="rounded-[16px] bg-white p-5 sm:p-8 lg:p-12">

              {/* INTRO */}
              <div className="border-b border-[#DFE2DF] pb-7">
                <p className="!text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                  Please read these Terms and Conditions carefully before
                  using the TeamMates HR Solutions website or submitting
                  information through our website.
                </p>
              </div>

              {/* TERMS SECTIONS */}
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
                Need clarification about our{" "}
                <span className="!text-[#6D7E5A]">
                  terms?
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-[650px] !text-white !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                Contact TeamMates HR Solutions if you have questions about
                these Terms and Conditions.
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