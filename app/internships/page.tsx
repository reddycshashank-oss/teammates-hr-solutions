import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    number: "01",
    title: "Industry Exposure",
    description:
      "Experience professional workplace environments and understand how real teams and businesses operate.",
  },
  {
    number: "02",
    title: "Practical Experience",
    description:
      "Apply your academic knowledge in practical situations and gain valuable workplace experience.",
  },
  {
    number: "03",
    title: "Professional Skills",
    description:
      "Develop communication, teamwork, workplace discipline and other skills that support your career.",
  },
  {
    number: "04",
    title: "Career Readiness",
    description:
      "Build confidence, practical knowledge and experience for your transition into the professional world.",
  },
];

const internshipAreas = [
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

const applicationSteps = [
  {
    number: "01",
    title: "Submit Application",
    description:
      "Complete the internship application form with your personal, educational and career details.",
  },
  {
    number: "02",
    title: "Profile Review",
    description:
      "Our team reviews your profile and understands your internship interests and requirements.",
  },
  {
    number: "03",
    title: "Connect With Us",
    description:
      "Our team connects with you to discuss relevant internship opportunities and next steps.",
  },
  {
    number: "04",
    title: "Begin Your Journey",
    description:
      "Start your internship experience and gain practical exposure in a professional environment.",
  },
];

const faqs = [
  {
    question: "Who can apply for the internship?",
    answer:
      "Students, recent graduates and individuals looking to gain practical workplace experience can apply, subject to the requirements of available internship opportunities.",
  },
  {
    question: "What is the internship duration?",
    answer: "The internship duration is 4–6 months.",
  },
  {
    question: "What can I gain from the internship?",
    answer:
      "The internship provides an opportunity to gain practical industry exposure, develop professional skills and understand workplace expectations.",
  },
  {
    question: "How can I apply?",
    answer:
      "You can submit your details through the internship application form on this page.",
  },
  {
    question: "How can I get more information?",
    answer:
      "You can contact TeamMates HR Solutions through the contact details provided on our website.",
  },
];

export const metadata = {
  title:
    "Internship Programme | Practical Industry Experience | TeamMates HR Solutions",
  description:
    "Explore the TeamMates HR Solutions internship programme. Gain practical industry exposure, develop professional skills and build valuable workplace experience through a 4–6 month internship.",
};

function InternshipHero() {
  return (
    <section className="bg-[#FDFDFD]">
      <div className="mx-auto w-full max-w-[1280px] px-4 py-10 sm:px-6 sm:py-14 md:px-8 lg:py-16">
        <div className="grid min-h-[560px] overflow-hidden rounded-[16px] bg-[#EEF0EE] lg:grid-cols-[0.9fr_1.1fr]">

          {/* LEFT — TEXT */}
          <div className="flex h-full flex-col justify-center px-6 py-12 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Internship Programme
            </p>

            <h1 className="mt-5 max-w-[560px] !text-[#545A5B] !text-[42px] font-extrabold leading-[1.06] tracking-[-0.04em] sm:!text-[52px] lg:!text-[60px]">
              Build experience.
              <br />
              <span className="!text-[#6D7E5A]">
                Start your career.
              </span>
            </h1>

            <p className="mt-6 max-w-[520px] !text-[#6F746F] !text-[16px] leading-7 sm:!text-[17px] sm:leading-8">
              Gain practical industry exposure, develop professional skills
              and build valuable workplace experience through the TeamMates
              HR Solutions internship programme.
            </p>

            <p className="mt-4 !text-[#545A5B] !text-[14px] font-semibold">
              Internship Duration: 4–6 Months
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#apply"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#38472A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
              >
                <span className="!text-white">
                  Apply for Internship
                </span>

                <span
                  aria-hidden="true"
                  className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <Link
                href="/contact-us"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full border border-[#6D7E5A] !bg-white px-7 py-3 text-[13px] font-semibold !text-[#6D7E5A] transition-all duration-300 hover:-translate-y-0.5 hover:!bg-[#6D7E5A] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
              >
                <span className="!text-[#6D7E5A] group-hover:!text-white">
                  Enquire Now
                </span>

                <span
                  aria-hidden="true"
                  className="!text-[#6D7E5A] transition-transform duration-300 group-hover:translate-x-1 group-hover:!text-white"
                >
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* RIGHT — IMAGE */}
          <div className="relative min-h-[420px] h-full lg:min-h-[560px]">
            <Image
              src="/images/internship-hero.jpg"
              alt="Students and young professionals gaining practical workplace experience through an internship"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-[#38472A]/10" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function InternshipsPage() {
  return (
    <main>
      {/* =========================================================
          01. INTERNSHIP HERO
      ========================================================= */}
      <InternshipHero />

      {/* =========================================================
          02. ABOUT THE INTERNSHIP
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="rounded-[16px] bg-[#FFFFFF] p-7 sm:p-10 lg:p-16">
            <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                  About The Internship
                </p>

                <h2 className="mt-5 max-w-[520px] !text-[#545A5B]">
                  More than an internship.{" "}
                  <span className="!text-[#6D7E5A]">
                    A start to your career.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-[16px] leading-8 !text-[#6F746F] sm:text-[18px]">
                  The TeamMates internship programme is designed to help
                  individuals gain practical exposure and understand
                  professional workplace environments.
                </p>

                <p className="mt-6 text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
                  Through practical workplace experience, participants can
                  strengthen professional skills, understand industry
                  expectations and prepare themselves for the transition into
                  the professional world.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Practical Exposure",
                    "Workplace Learning",
                    "Professional Skills",
                    "Career Preparation",
                  ].map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[#DFE2DF] bg-[#FDFDFD] px-4 py-2 text-[12px] font-semibold !text-[#545A5B]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          03. WHO CAN APPLY
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Eligibility
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Is this internship{" "}
              <span className="!text-[#6D7E5A]">
                right for you?
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8">
              Our internship programme is designed for individuals looking to
              gain practical experience, develop professional skills and
              understand real-world workplace environments.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Students",
                text: "Students looking to gain practical exposure alongside their academic journey.",
              },
              {
                title: "Fresh Graduates",
                text: "Graduates looking to build workplace experience and improve career readiness.",
              },
              {
                title: "Career Starters",
                text: "Individuals taking their first step into a professional work environment.",
              },
              {
                title: "Career Focus",
                text: "Individuals looking to develop practical skills and understand industry expectations.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
              >
                <div className="h-2 w-10 rounded-full bg-[#6D7E5A]" />

                <h3 className="mt-7 !text-[22px] !leading-tight !text-[#545A5B]">
                  {item.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 !text-[#6F746F]">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          04. WHAT YOU WILL GAIN
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              What You Will Gain
            </p>

            <h2 className="mt-5 !text-white">
              Skills that go beyond{" "}
              <span className="!text-[#6D7E5A]">
                the classroom.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
              Develop practical understanding and professional skills through
              real workplace exposure.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {benefits.map((item) => (
              <article
                key={item.number}
                className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-9"
              >
                <p className="text-[11px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
                  {item.number}
                </p>

                <h3 className="mt-5 !text-[26px] !leading-tight !text-[#545A5B]">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-[520px] text-[15px] leading-7 !text-[#6F746F]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          05. INTERNSHIP EXPERIENCE
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid items-stretch gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
            <div className="relative min-h-[420px] overflow-hidden rounded-[16px] bg-[#EEF0EE] sm:min-h-[520px]">
              <Image
                src="/images/internship-experience.jpg"
                alt="Professional internship workplace experience"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Internship Experience
              </p>

              <h2 className="mt-5 !text-[#545A5B]">
                Learn. Experience.{" "}
                <span className="!text-[#6D7E5A]">
                  Grow.
                </span>
              </h2>

              <p className="mt-6 max-w-[580px] text-[16px] leading-8 !text-[#6F746F] sm:text-[17px]">
                An internship is an opportunity to understand how professional
                workplaces function while developing skills that support your
                future career.
              </p>

              <div className="mt-10 border-t border-[#DFE2DF]">
                <div className="border-b border-[#DFE2DF] py-6">
                  <h3 className="!text-[22px] !text-[#545A5B]">
                    Learn
                  </h3>

                  <p className="mt-2 text-[14px] leading-7 !text-[#6F746F]">
                    Understand professional processes and workplace
                    expectations.
                  </p>
                </div>

                <div className="border-b border-[#DFE2DF] py-6">
                  <h3 className="!text-[22px] !text-[#545A5B]">
                    Experience
                  </h3>

                  <p className="mt-2 text-[14px] leading-7 !text-[#6F746F]">
                    Gain practical exposure through real workplace
                    environments.
                  </p>
                </div>

                <div className="py-6">
                  <h3 className="!text-[22px] !text-[#545A5B]">
                    Grow
                  </h3>

                  <p className="mt-2 text-[14px] leading-7 !text-[#6F746F]">
                    Develop skills and confidence for your next career step.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          06. INTERNSHIP AREAS
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Internship Areas
            </p>

            <h2 className="mt-5 !text-white">
              Explore opportunities across{" "}
              <span className="!text-[#6D7E5A]">
                industries.
              </span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[17px] sm:leading-8">
              Explore internship opportunities across industries supported by
              TeamMates HR Solutions, subject to current availability.
            </p>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {internshipAreas.map((industry) => (
              <div
                key={industry}
                className="group flex min-h-[100px] items-center justify-between rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] px-6 py-5 transition-transform duration-300 hover:-translate-y-1"
              >
                <span className="text-[15px] font-semibold !text-[#545A5B]">
                  {industry}
                </span>

                <span
                  aria-hidden="true"
                  className="ml-4 shrink-0 !text-[#6D7E5A] transition-transform duration-200 group-hover:translate-x-1"
                >
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          07. HOW TO APPLY
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              How To Apply
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Start your internship{" "}
              <span className="!text-[#6D7E5A]">
                journey.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {applicationSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 sm:p-7"
              >
                <p className="text-[12px] font-bold tracking-[0.12em] !text-[#6D7E5A]">
                  {step.number}
                </p>

                <h3 className="mt-6 !text-[22px] !leading-tight !text-[#545A5B]">
                  {step.title}
                </h3>

                <p className="mt-4 text-[14px] leading-7 !text-[#6F746F]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          08. INTERNSHIP APPLICATION FORM
      ========================================================= */}
      <section
        id="apply"
        className="scroll-mt-24 bg-[#C1C3AC]"
      >
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="rounded-[16px] bg-[#FFFFFF] p-6 sm:p-10 lg:p-14">
            <div className="max-w-[720px]">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Apply Now
              </p>

              <h2 className="mt-5 !text-[#545A5B]">
                Apply for the{" "}
                <span className="!text-[#6D7E5A]">
                  internship programme.
                </span>
              </h2>

              <p className="mt-5 text-[15px] leading-7 !text-[#6F746F] sm:text-[16px]">
                Fill in your details below and our team will get in touch
                regarding the internship opportunity.
              </p>
            </div>

            <form
              action="/internships"
              method="POST"
              encType="multipart/form-data"
              className="mt-10 grid gap-5 md:grid-cols-2"
            >
              {/* FULL NAME */}
              <div>
                <label
                  htmlFor="full-name"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Full Name *
                </label>

                <input
                  id="full-name"
                  name="fullName"
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* PHONE */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Phone Number *
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* QUALIFICATION */}
              <div>
                <label
                  htmlFor="qualification"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Educational Qualification *
                </label>

                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  required
                  placeholder="e.g. B.E, B.Com, MBA, BCA"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* SPECIALIZATION */}
              <div>
                <label
                  htmlFor="specialization"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Area of Study / Specialization
                </label>

                <input
                  id="specialization"
                  name="specialization"
                  type="text"
                  placeholder="Enter your specialization"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* COLLEGE */}
              <div>
                <label
                  htmlFor="college"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  College / Institution
                </label>

                <input
                  id="college"
                  name="college"
                  type="text"
                  placeholder="Enter your college or institution"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* CURRENT STATUS */}
              <div>
                <label
                  htmlFor="current-status"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Current Status
                </label>

                <select
                  id="current-status"
                  name="currentStatus"
                  defaultValue=""
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A]"
                >
                  <option value="" disabled>
                    Select your status
                  </option>

                  <option value="student">
                    Currently Studying
                  </option>

                  <option value="graduate">
                    Recently Graduated
                  </option>

                  <option value="job-seeker">
                    Looking for Opportunities
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* PREFERRED LOCATION */}
              <div>
                <label
                  htmlFor="location"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Preferred Location
                </label>

                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="City / Location"
                  className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* RESUME */}
              <div>
                <label
                  htmlFor="resume"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Resume
                </label>

                <input
                  id="resume"
                  name="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="flex h-14 w-full items-center rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 py-3 text-[13px] !text-[#545A5B] file:mr-4 file:rounded-full file:border-0 file:bg-[#6D7E5A] file:px-4 file:py-2 file:text-[12px] file:font-semibold file:!text-white"
                />
              </div>

              {/* MESSAGE */}
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-[11px] font-bold uppercase tracking-[0.1em] !text-[#545A5B]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your internship interests..."
                  className="w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 py-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] outline-none transition-colors focus:border-[#6D7E5A]"
                />
              </div>

              {/* SUBMIT */}
              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
                >
                  <span className="!text-white">
                    Submit Application
                  </span>

                  <span
                    aria-hidden="true"
                    className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =========================================================
          09. FAQ
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Frequently Asked Questions
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Questions, answered{" "}
              <span className="!text-[#6D7E5A]">
                clearly.
              </span>
            </h2>
          </div>

          <div className="mt-12 max-w-[950px] border-t border-[#DFE2DF]">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border-b border-[#DFE2DF]"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold !text-[#545A5B] sm:text-[17px]">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[24px] font-normal !text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="max-w-[780px] pb-6 pr-10 text-[14px] leading-7 !text-[#6F746F]">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          10. FINAL CTA
      ========================================================= */}
      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="w-full rounded-[16px] bg-[#C1C3AC] px-6 py-14 text-center sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Start Your Journey
            </p>

            <h2 className="mx-auto mt-5 max-w-[850px] !text-white">
              Your career starts with{" "}
              <span className="!text-[#6D7E5A]">
                experience.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-[16px] leading-7 !text-white sm:text-[18px] sm:leading-8">
              Take the first step toward building practical skills, workplace
              confidence and valuable industry exposure.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href="#apply"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="!text-white">
                  Apply for Internship
                </span>

                <span
                  aria-hidden="true"
                  className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <Link
                href="/contact-us"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-white px-7 py-3 text-[13px] font-semibold !text-[#6D7E5A] transition-all duration-300 hover:-translate-y-0.5"
              >
                <span className="!text-[#6D7E5A]">
                  Contact Us
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