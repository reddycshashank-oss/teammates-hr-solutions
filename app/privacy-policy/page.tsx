import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | TeamMates HR Solutions",
  description:
    "Read the Privacy Policy of TeamMates HR Solutions to understand how personal information is collected, used and protected.",
};

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    content: (
      <>
        <p>
          TeamMates HR Solutions may collect information you provide when you
          use our website, submit a job application, register for an
          internship, contact us, or submit a hiring requirement.
        </p>

        <p>
          This may include your name, phone number, email address, location,
          educational qualifications, professional experience, resume or CV,
          skills, employment preferences and other information relevant to
          recruitment or hiring.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Information Submitted by Candidates",
    content: (
      <>
        <p>
          Candidates may voluntarily provide personal and professional
          information when applying for jobs, internships or other
          opportunities through TeamMates HR Solutions.
        </p>

        <p>
          This information may be used to understand your qualifications,
          identify relevant opportunities and facilitate communication with
          potential employers where appropriate.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "Information Submitted by Employers",
    content: (
      <>
        <p>
          Employers and organisations may provide information relating to their
          hiring requirements, workforce needs, job vacancies, role
          descriptions and contact details.
        </p>

        <p>
          This information helps us understand recruitment requirements and
          provide relevant recruitment, staffing and workforce support.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "How We Use Information",
    content: (
      <>
        <p>Information collected through our website may be used to:</p>

        <ul className="list-disc space-y-2 pl-5">
          <li>Respond to enquiries and requests.</li>
          <li>Process job and internship applications.</li>
          <li>Identify relevant employment opportunities.</li>
          <li>Understand employer hiring requirements.</li>
          <li>Provide recruitment and staffing services.</li>
          <li>Communicate with candidates and employers.</li>
          <li>Improve our website, services and user experience.</li>
          <li>Maintain appropriate business and recruitment records.</li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Sharing of Information",
    content: (
      <>
        <p>
          TeamMates HR Solutions may share relevant candidate information with
          prospective employers when necessary for recruitment or when a
          candidate has expressed interest in a relevant opportunity.
        </p>

        <p>
          We aim to share information only where it is relevant to the
          recruitment or hiring process and appropriate to the interaction.
        </p>

        <p>
          We may also disclose information where required by applicable law,
          regulation or lawful governmental request.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Resume and Document Information",
    content: (
      <>
        <p>
          Resumes, CVs, educational details, employment information and other
          documents submitted by candidates may be reviewed for recruitment
          purposes.
        </p>

        <p>
          Candidates should ensure that the information and documents they
          submit are accurate and do not contain unnecessary sensitive
          information.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Cookies and Website Usage",
    content: (
      <>
        <p>
          Our website may use cookies or similar technologies to support
          website functionality, understand website usage and improve the
          overall user experience.
        </p>

        <p>
          Depending on your browser and device settings, you may be able to
          control or restrict cookies through your browser settings.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Data Security",
    content: (
      <>
        <p>
          TeamMates HR Solutions takes reasonable measures to protect the
          information provided through our website and recruitment processes.
        </p>

        <p>
          However, no method of transmitting or storing information online can
          be guaranteed to be completely secure. Users should therefore
          understand that information submitted online may carry inherent
          security risks.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Third-Party Websites",
    content: (
      <>
        <p>
          Our website may contain links to third-party websites, platforms or
          services. These websites may have their own privacy policies and
          terms of use.
        </p>

        <p>
          TeamMates HR Solutions is not responsible for the privacy practices
          or content of third-party websites.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Data Retention",
    content: (
      <>
        <p>
          We may retain information for as long as reasonably necessary to
          provide recruitment services, manage applications, communicate with
          candidates and employers, maintain business records or comply with
          applicable legal requirements.
        </p>

        <p>
          The retention period may vary depending on the nature and purpose of
          the information.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Your Choices",
    content: (
      <>
        <p>
          You may contact TeamMates HR Solutions if you have questions about
          personal information you have submitted to us or if you would like
          clarification regarding its use.
        </p>

        <p>
          Where applicable, we will consider requests relating to access,
          correction or other handling of personal information in accordance
          with applicable requirements.
        </p>
      </>
    ),
  },
  {
    number: "12",
    title: "Children's Privacy",
    content: (
      <p>
        Our website and recruitment services are intended for individuals who
        are legally able to participate in employment, internship or
        recruitment-related activities. We do not knowingly collect personal
        information from children for recruitment purposes.
      </p>
    ),
  },
  {
    number: "13",
    title: "Changes to This Privacy Policy",
    content: (
      <p>
        TeamMates HR Solutions may update this Privacy Policy from time to
        time. Any changes will be reflected on this page. We encourage users
        to review this page periodically.
      </p>
    ),
  },
  {
    number: "14",
    title: "Contact Us",
    content: (
      <>
        <p>
          If you have questions about this Privacy Policy or how your
          information is handled, you can contact TeamMates HR Solutions.
        </p>

        <div className="mt-6 rounded-[16px] border border-[#DFE2DF] bg-[#FDFDFD] p-6 sm:p-7">
          <h3 className="!text-[#545A5B] !text-[20px] font-bold leading-[1.2]">
            TeamMates HR Solutions
          </h3>

          <div className="mt-4 space-y-2 !text-[#6F746F] text-[15px] leading-7">
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

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FDFDFD]">
      {/* HERO */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="max-w-[850px]">
            <p className="!text-[#6D7E5A] text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px]">
              Legal
            </p>

            <h1 className="mt-4 !text-[#545A5B] !text-[32px] font-bold leading-[1.15] tracking-[-0.025em] sm:!text-[36px] lg:!text-[42px]">
              Privacy{" "}
              <span className="!text-[#6D7E5A]">
                Policy.
              </span>
            </h1>

            <p className="mt-4 max-w-[720px] !text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-7">
              This Privacy Policy explains how TeamMates HR Solutions
              collects, uses, protects and manages information provided through
              our website and recruitment services.
            </p>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="mx-auto max-w-[1050px]">
            <div className="rounded-[16px] bg-white p-5 sm:p-8 lg:p-12">

              {/* INTRO */}
              <div className="border-b border-[#DFE2DF] pb-7">
                <p className="!text-[#6F746F] !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                  By using the TeamMates HR Solutions website or submitting
                  information to us, you acknowledge that you have read and
                  understood this Privacy Policy.
                </p>
              </div>

              {/* POLICY SECTIONS */}
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

      {/* FINAL CTA */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-5 py-12 sm:px-10 sm:py-14 lg:px-16 lg:py-16">
            <div className="mx-auto max-w-[800px] text-center">

              <p className="!text-[#6D7E5A] text-[11px] font-bold uppercase tracking-[0.16em] sm:text-[12px]">
                TeamMates HR Solutions
              </p>

              <h2 className="mt-4 !text-white !text-[30px] font-bold leading-[1.12] tracking-[-0.025em] sm:!text-[38px] lg:!text-[46px]">
                Have a question about your{" "}
                <span className="!text-[#6D7E5A]">
                  information?
                </span>
              </h2>

              <p className="mx-auto mt-4 max-w-[650px] !text-white !text-[15px] leading-7 sm:!text-[16px] sm:leading-8">
                Contact TeamMates HR Solutions if you have questions about this
                Privacy Policy or how your information is handled.
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