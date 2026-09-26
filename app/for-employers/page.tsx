import Image from "next/image";
import Button from "@/components/Button";

export const metadata = {
  title: "Recruitment Services for Employers in India | TeamMates",
  description:
    "Hire skilled professionals with TeamMates HR Solutions. Explore recruitment, staffing, talent acquisition and workforce solutions for businesses across India.",
};

const services = [
  {
    number: "01",
    title: "Permanent Recruitment",
    description:
      "Find qualified professionals for permanent positions through a recruitment process focused on skills, experience and role requirements.",
  },
  {
    number: "02",
    title: "Contract Staffing",
    description:
      "Build flexible teams with contract staffing support for project-based, temporary and workforce requirements.",
  },
  {
    number: "03",
    title: "NAPS / Apprenticeship Support",
    description:
      "Get support with apprenticeship hiring and workforce requirements through the National Apprenticeship Promotion Scheme.",
  },
];

const industries = [
  "IT & Technology",
  "Manufacturing",
  "Healthcare",
  "Logistics",
  "Retail",
  "BPO & Customer Support",
  "BFSI",
  "Aerospace & Defence",
  "Construction & Infrastructure",
  "Real Estate",
  "Textile & Apparel",
  "Education & EdTech",
];

const reasons = [
  {
    number: "01",
    title: "Relevant Talent",
    description:
      "We focus on connecting businesses with professionals whose skills and experience are relevant to the requirement.",
  },
  {
    number: "02",
    title: "Industry Understanding",
    description:
      "Our recruitment approach considers the workforce needs and hiring realities of different industries.",
  },
  {
    number: "03",
    title: "Responsive Support",
    description:
      "We keep communication clear and support the recruitment process from requirement to connection.",
  },
  {
    number: "04",
    title: "People-Focused Approach",
    description:
      "We believe effective recruitment starts with understanding both the employer's requirement and the candidate's profile.",
  },
];

const process = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your role, skills, experience requirements and workforce needs.",
  },
  {
    number: "02",
    title: "Source",
    description:
      "We identify and connect with relevant professionals based on your requirement.",
  },
  {
    number: "03",
    title: "Connect",
    description:
      "Relevant candidates are connected with the employer for the next stage of the hiring process.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "We provide communication and recruitment support throughout the process.",
  },
];

const faqs = [
  {
    question: "What recruitment services does TeamMates provide?",
    answer:
      "TeamMates HR Solutions provides Permanent Recruitment, Contract Staffing and NAPS / Apprenticeship Support for businesses across India.",
  },
  {
    question: "Can TeamMates help with urgent hiring requirements?",
    answer:
      "Yes. Share your hiring requirement with our team so we can understand the role, workforce requirement and relevant candidate profile.",
  },
  {
    question: "Do you provide recruitment services across India?",
    answer:
      "Yes. TeamMates HR Solutions supports recruitment and staffing requirements for businesses across India.",
  },
  {
    question: "What information should I provide for a hiring requirement?",
    answer:
      "Useful information includes the job title, number of openings, required skills, experience, location, employment type and other role-specific requirements.",
  },
  {
    question: "Do you support apprenticeship requirements?",
    answer:
      "Yes. TeamMates provides NAPS / Apprenticeship Support as part of its recruitment and workforce services.",
  },
  {
    question: "How can I submit a hiring requirement?",
    answer:
      "You can submit your requirement through the hiring enquiry form on this page or contact TeamMates directly through the Contact page.",
  },
];

export default function ForEmployersPage() {
  return (
    <main className="bg-[#FDFDFD] !text-[#545A5B]">

      {/* =========================================================
          01. EMPLOYER HERO
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-28">
          <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">

            <div className="lg:col-span-6">
              <p className="mb-5 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
                For Employers
              </p>

              <h1 className="max-w-[680px] text-[48px] font-extrabold leading-[0.98] tracking-[-0.045em] !text-[#545A5B] sm:text-[62px] lg:text-[82px]">
                Hire the right
                <span className="!text-[#6D7E5A]"> people.</span>
              </h1>

              <p className="mt-7 max-w-[590px] text-[16px] leading-7 !text-[#6F746F] sm:text-[18px]">
                Connect with relevant professionals through recruitment and
                workforce solutions designed around your hiring requirements.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Button
                  href="#hiring-requirement"
                  variant="primary"
                  className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
                >
                  Hire Talent
                </Button>

                <Button
                  href="/contact-us"
                  variant="secondary"
                  className="!rounded-full !border-[#6D7E5A] !bg-white !text-[#6D7E5A] hover:!border-[#6D7E5A] hover:!bg-white hover:!text-[#6D7E5A]"
                >
                  Talk to TeamMates
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="overflow-hidden rounded-[16px]">
                <Image
                  src="/images/employers-hero.jpg"
                  alt="Professionals discussing recruitment and workforce requirements"
                  width={1000}
                  height={760}
                  className="h-[420px] w-full object-cover sm:h-[520px]"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================
          02. HIRING THAT STARTS WITH UNDERSTANDING
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-[760px]">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
              Our Approach
            </p>

            <h2 className="!text-white text-[38px] font-extrabold leading-[1.02] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Hiring that starts with{" "}
              <span className="!text-[#6D7E5A]">understanding.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px]">
              We take the time to understand your workforce requirements,
              role expectations and the skills needed before connecting you
              with relevant professionals.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {[
              {
                number: "01",
                title: "Understand Your Requirement",
                description:
                  "We understand the role, skills, experience and workforce expectations before beginning the recruitment process.",
              },
              {
                number: "02",
                title: "Identify Relevant Talent",
                description:
                  "We focus on finding professionals whose experience and skills are relevant to your requirement.",
              },
              {
                number: "03",
                title: "Connect the Right Profiles",
                description:
                  "Suitable professionals can be connected with your organisation for the next stage of the hiring process.",
              },
              {
                number: "04",
                title: "Support the Process",
                description:
                  "We maintain clear communication and provide recruitment support throughout the process.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-8"
              >
                <span className="!text-[#6D7E5A] text-[13px] font-bold tracking-[0.08em]">
                  {item.number}
                </span>

                <h3 className="mt-5 !text-[#545A5B] text-[23px] font-bold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 !text-[#6F746F] text-[15px] leading-7">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          03. HIRING REQUIREMENT
      ========================================================= */}
      <section
        id="hiring-requirement"
        className="bg-[#FFFFFF]"
      >
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="w-full rounded-[16px] bg-[#C1C3AC] p-6 sm:p-8 lg:p-12">

            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">

              <div className="lg:col-span-5">
                <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
                  Hiring Requirement
                </p>

                <h2 className="!text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px]">
                  Tell us what you{" "}
                  <span className="!text-[#6D7E5A]">need.</span>
                </h2>

                <p className="mt-6 max-w-[500px] !text-white text-[16px] leading-7">
                  Share your hiring requirement with TeamMates HR Solutions
                  and our team will understand your workforce needs and
                  relevant candidate profile.
                </p>
              </div>

              <div className="lg:col-span-7">
                <form className="rounded-[16px] bg-white p-6 sm:p-8">

                  <div className="grid gap-5 sm:grid-cols-2">

                    <div>
                      <label
                        htmlFor="company-name"
                        className="mb-2 block !text-[#545A5B] text-[13px] font-semibold"
                      >
                        Company Name
                      </label>

                      <input
                        id="company-name"
                        name="companyName"
                        type="text"
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-white px-4 !text-[#545A5B] text-[14px] outline-none transition focus:border-[#6D7E5A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-name"
                        className="mb-2 block !text-[#545A5B] text-[13px] font-semibold"
                      >
                        Contact Name
                      </label>

                      <input
                        id="contact-name"
                        name="contactName"
                        type="text"
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-white px-4 !text-[#545A5B] text-[14px] outline-none transition focus:border-[#6D7E5A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block !text-[#545A5B] text-[13px] font-semibold"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-white px-4 !text-[#545A5B] text-[14px] outline-none transition focus:border-[#6D7E5A]"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block !text-[#545A5B] text-[13px] font-semibold"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-white px-4 !text-[#545A5B] text-[14px] outline-none transition focus:border-[#6D7E5A]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="job-title"
                        className="mb-2 block !text-[#545A5B] text-[13px] font-semibold"
                      >
                        Job Title / Requirement
                      </label>

                      <input
                        id="job-title"
                        name="jobTitle"
                        type="text"
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-white px-4 !text-[#545A5B] text-[14px] outline-none transition focus:border-[#6D7E5A]"
                      />
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="message"
                        className="mb-2 block !text-[#545A5B] text-[13px] font-semibold"
                      >
                        Requirement Details
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        className="w-full resize-none rounded-[10px] border border-[#DFE2DF] bg-white px-4 py-3 !text-[#545A5B] text-[14px] outline-none transition focus:border-[#6D7E5A]"
                      />
                    </div>

                  </div>

                  <button
                    type="submit"
                    className="mt-6 inline-flex min-h-12 items-center justify-center rounded-full bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition hover:bg-[#6D7E5A]"
                  >
                    Submit Hiring Requirement
                    <span className="ml-3 !text-white">→</span>
                  </button>

                </form>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          04. RECRUITMENT & WORKFORCE SERVICES
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-[760px]">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
              Recruitment & Workforce Services
            </p>

            <h2 className="!text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Solutions built around your{" "}
              <span className="!text-[#6D7E5A]">workforce.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px]">
              Explore recruitment and workforce services designed to support
              different hiring requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-8"
              >
                <span className="!text-[#6D7E5A] text-[13px] font-bold tracking-[0.08em]">
                  {service.number}
                </span>

                <h3 className="mt-5 !text-[#545A5B] text-[24px] font-bold tracking-[-0.025em]">
                  {service.title}
                </h3>

                <p className="mt-4 !text-[#6F746F] text-[15px] leading-7">
                  {service.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          05. INDUSTRIES
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-[760px]">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
              Industries
            </p>

            <h2 className="!text-[#545A5B] text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Recruitment across{" "}
              <span className="!text-[#6D7E5A]">industries.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px]">
              Our recruitment approach considers the different workforce
              requirements and hiring realities of multiple industries.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry, index) => (
              <div
                key={industry}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
              >
                <div className="flex items-start gap-4">

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6D7E5A] text-[12px] font-bold !text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3 className="pt-2 !text-[#545A5B] text-[18px] font-bold tracking-[-0.02em]">
                    {industry}
                  </h3>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          06. WHY TEAMMATES
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-[760px]">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
              Why TeamMates
            </p>

            <h2 className="!text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Recruitment focused on{" "}
              <span className="!text-[#6D7E5A]">relevance.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px]">
              We focus on understanding the requirement, identifying relevant
              talent and maintaining clear communication throughout the
              recruitment journey.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">

            {reasons.map((reason) => (
              <div
                key={reason.number}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-8"
              >
                <span className="!text-[#6D7E5A] text-[13px] font-bold tracking-[0.08em]">
                  {reason.number}
                </span>

                <h3 className="mt-5 !text-[#545A5B] text-[23px] font-bold tracking-[-0.025em]">
                  {reason.title}
                </h3>

                <p className="mt-3 !text-[#6F746F] text-[15px] leading-7">
                  {reason.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          07. HOW WE WORK
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-[760px]">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
              How We Work
            </p>

            <h2 className="!text-[#545A5B] text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              A clear recruitment{" "}
              <span className="!text-[#6D7E5A]">process.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-[#6F746F] text-[16px] leading-7 sm:text-[18px]">
              From understanding your requirement to connecting relevant
              professionals, we keep the recruitment process clear and
              focused.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">

            {process.map((item) => (
              <div
                key={item.number}
                className="rounded-[16px] border border-[#DFE2DF] bg-white p-7 sm:p-8"
              >
                <span className="!text-[#6D7E5A] text-[13px] font-bold tracking-[0.08em]">
                  {item.number}
                </span>

                <h3 className="mt-5 !text-[#545A5B] text-[23px] font-bold tracking-[-0.025em]">
                  {item.title}
                </h3>

                <p className="mt-3 !text-[#6F746F] text-[15px] leading-7">
                  {item.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          08. FAQ
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="max-w-[760px]">

            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.18em] !text-[#6D7E5A]">
              FAQ
            </p>

            <h2 className="!text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[60px]">
              Questions from{" "}
              <span className="!text-white">employers.</span>
            </h2>

            <p className="mt-6 max-w-[700px] !text-white text-[16px] leading-7 sm:text-[18px]">
              Find answers to common questions about our recruitment and
              workforce services.
            </p>

          </div>

          <div className="mt-12 space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-[16px] border border-[#DFE2DF] bg-white"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 p-6 sm:p-7">

                  <span className="!text-[#545A5B] text-[17px] font-bold tracking-[-0.015em] sm:text-[19px]">
                    {faq.question}
                  </span>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#6D7E5A] !text-[#6D7E5A] text-[22px] font-normal leading-none transition-transform duration-300 group-open:rotate-45">
                    +
                  </span>

                </summary>

                <div className="px-6 pb-6 sm:px-7 sm:pb-7">
                  <p className="max-w-[900px] !text-[#6F746F] text-[15px] leading-7">
                    {faq.answer}
                  </p>
                </div>

              </details>
            ))}

          </div>
        </div>
      </section>

      {/* =========================================================
          09. FINAL CTA
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto max-w-[1280px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">

          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">

            <p className="!text-[#6D7E5A] text-[12px] font-semibold uppercase tracking-[0.18em]">
              Let’s Build Your Team
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] !text-white text-[38px] font-extrabold leading-[1.03] tracking-[-0.04em] sm:text-[50px] lg:text-[62px]">
              Ready to find the{" "}
              <span className="!text-white">right talent?</span>
            </h2>

            <p className="mx-auto mt-6 max-w-[720px] !text-white text-[16px] leading-7 sm:text-[18px]">
              Share your hiring requirement with TeamMates HR Solutions and
              take the next step toward building your team.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3">

              <Button
                href="#hiring-requirement"
                variant="primary"
                className="!rounded-full !bg-[#6D7E5A] !text-white hover:!bg-[#6D7E5A] hover:!text-white"
              >
                Hire Talent
              </Button>

              <Button
                href="/contact-us"
                variant="secondary"
                className="!rounded-full !border-white !bg-white !text-[#6D7E5A] hover:!border-white hover:!bg-white hover:!text-[#6D7E5A]"
              >
                Contact TeamMates
              </Button>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}