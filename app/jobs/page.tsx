"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  type: string;
  experience: string;
  education: string;
  industry: string;
  salary: string;
  posted: string;
  slug: string;
};

const jobs: Job[] = [
  {
    id: 1,
    title: "Junior Software Developer",
    company: "Hiring Partner",
    location: "Bangalore, Karnataka",
    type: "Full Time",
    experience: "0–2 Years",
    education: "Engineering",
    industry: "IT & Technology",
    salary: "₹3.0 – ₹4.5 LPA",
    posted: "2 days ago",
    slug: "junior-software-developer-bangalore",
  },
  {
    id: 2,
    title: "Production Trainee",
    company: "Hiring Partner",
    location: "Bangalore, Karnataka",
    type: "Full Time",
    experience: "Fresher",
    education: "ITI",
    industry: "Manufacturing",
    salary: "₹15,000 – ₹20,000 / month",
    posted: "3 days ago",
    slug: "production-trainee-bangalore",
  },
  {
    id: 3,
    title: "Quality Inspector",
    company: "Hiring Partner",
    location: "Chennai, Tamil Nadu",
    type: "Full Time",
    experience: "0–2 Years",
    education: "Diploma",
    industry: "Manufacturing",
    salary: "₹18,000 – ₹25,000 / month",
    posted: "4 days ago",
    slug: "quality-inspector-chennai",
  },
  {
    id: 4,
    title: "Customer Support Executive",
    company: "Hiring Partner",
    location: "Hyderabad, Telangana",
    type: "Full Time",
    experience: "Fresher",
    education: "Graduate",
    industry: "BPO & Customer Support",
    salary: "₹18,000 – ₹24,000 / month",
    posted: "5 days ago",
    slug: "customer-support-executive-hyderabad",
  },
  {
    id: 5,
    title: "Warehouse Executive",
    company: "Hiring Partner",
    location: "Pune, Maharashtra",
    type: "Contract",
    experience: "0–2 Years",
    education: "Graduate",
    industry: "Logistics",
    salary: "₹20,000 – ₹27,000 / month",
    posted: "1 week ago",
    slug: "warehouse-executive-pune",
  },
  {
    id: 6,
    title: "HR Recruiter",
    company: "Hiring Partner",
    location: "Bangalore, Karnataka",
    type: "Full Time",
    experience: "0–2 Years",
    education: "Graduate",
    industry: "Human Resources",
    salary: "₹2.5 – ₹4.0 LPA",
    posted: "1 week ago",
    slug: "hr-recruiter-bangalore",
  },
];

const locations = [
  "All Locations",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Mumbai",
  "Delhi NCR",
];

const experiences = [
  "All Experience",
  "Fresher",
  "0–2 Years",
  "2–5 Years",
  "5+ Years",
];

const jobTypes = [
  "All Job Types",
  "Full Time",
  "Contract",
  "Apprenticeship",
  "Internship",
];

const educations = [
  "All Education",
  "ITI",
  "Diploma",
  "Engineering",
  "Graduate",
  "Postgraduate",
];

const industries = [
  "All Industries",
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

function SearchIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
    >
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M3 12h18" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function JobCard({ job }: { job: Job }) {
  return (
    <article className="group rounded-[16px] border border-[#DFE2DF] bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#6D7E5A] hover:shadow-[0_12px_30px_rgba(56,71,42,0.07)] sm:p-7">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.12em] !text-[#6D7E5A]">
              {job.industry}
            </p>

            <h3 className="!text-[23px] !font-extrabold !leading-tight !tracking-[-0.025em] !text-[#545A5B] sm:!text-[26px]">
              {job.title}
            </h3>

            <p className="mt-2 text-[14px] font-medium !text-[#6F746F]">
              {job.company}
            </p>
          </div>

          <span className="w-fit shrink-0 rounded-full border border-[#DFE2DF] bg-[#FDFDFD] px-3.5 py-1.5 text-[11px] font-bold !text-[#545A5B]">
            {job.type}
          </span>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 border-y border-[#DFE2DF] py-5">
          <div className="flex items-center gap-2">
            <span className="!text-[#6D7E5A]">
              <LocationIcon />
            </span>

            <span className="text-[13px] font-semibold !text-[#545A5B]">
              {job.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="!text-[#6D7E5A]">
              <BriefcaseIcon />
            </span>

            <span className="text-[13px] font-semibold !text-[#545A5B]">
              {job.experience}
            </span>
          </div>

          <span className="text-[13px] font-semibold !text-[#545A5B]">
            {job.education}
          </span>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.1em] !text-[#A4A9A5]">
              Compensation
            </p>

            <p className="mt-1 text-[14px] font-bold !text-[#545A5B]">
              {job.salary}
            </p>

            <p className="mt-1 text-[11px] font-medium !text-[#6F746F]">
              Posted {job.posted}
            </p>
          </div>

          <Link
            href={`/jobs/${job.slug}`}
            className="group/link inline-flex min-h-11 w-fit items-center justify-center gap-3 rounded-full bg-[#6D7E5A] px-5 py-2.5 text-[13px] font-semibold !text-white transition-all duration-300 hover:bg-[#38472A]"
          >
            View Opportunity

            <span className="transition-transform duration-300 group-hover/link:translate-x-1">
              <ArrowIcon />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}

function FilterSelect({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <label className="mb-2 block text-[10px] font-extrabold uppercase tracking-[0.12em] !text-[#6F746F]">
        {label}
      </label>

      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="h-11 w-full rounded-[8px] border border-[#DFE2DF] bg-white px-3 text-[13px] font-semibold !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default function JobsPage() {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [experience, setExperience] = useState("All Experience");
  const [jobType, setJobType] = useState("All Job Types");
  const [education, setEducation] = useState("All Education");
  const [industry, setIndustry] = useState("All Industries");
  const [showFilters, setShowFilters] = useState(false);

  const filteredJobs = useMemo(() => {
    const search = keyword.trim().toLowerCase();

    return jobs.filter((job) => {
      const matchesKeyword =
        !search ||
        job.title.toLowerCase().includes(search) ||
        job.industry.toLowerCase().includes(search) ||
        job.education.toLowerCase().includes(search) ||
        job.location.toLowerCase().includes(search);

      const matchesLocation =
        location === "All Locations" ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const matchesExperience =
        experience === "All Experience" ||
        job.experience === experience;

      const matchesType =
        jobType === "All Job Types" || job.type === jobType;

      const matchesEducation =
        education === "All Education" || job.education === education;

      const matchesIndustry =
        industry === "All Industries" || job.industry === industry;

      return (
        matchesKeyword &&
        matchesLocation &&
        matchesExperience &&
        matchesType &&
        matchesEducation &&
        matchesIndustry
      );
    });
  }, [keyword, location, experience, jobType, education, industry]);

  function clearFilters() {
    setKeyword("");
    setLocation("All Locations");
    setExperience("All Experience");
    setJobType("All Job Types");
    setEducation("All Education");
    setIndustry("All Industries");
  }

  return (
    <main className="bg-[#FDFDFD]">
      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="max-w-[850px]">
            <p className="mb-5 text-[11px] font-extrabold uppercase tracking-[0.16em] !text-white">
              Opportunities With TeamMates
            </p>

            <h1 className="!text-[48px] !font-extrabold !leading-[1.02] !tracking-[-0.045em] !text-white sm:!text-[60px] lg:!text-[76px]">
              Find work that{" "}
              <span className="!text-[#6D7E5A]">
                moves you forward.
              </span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[16px] leading-7 !text-white sm:text-[18px]">
              Explore career opportunities across industries, locations and
              experience levels with TeamMates HR Solutions.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-10 rounded-[16px] border border-[#DFE2DF] bg-white p-3">
            <div className="grid gap-3 lg:grid-cols-[1fr_260px_150px]">
              <div className="flex min-h-[54px] items-center rounded-[10px] border border-[#DFE2DF] px-4">
                <span className="mr-3 shrink-0 !text-[#6D7E5A]">
                  <SearchIcon />
                </span>

                <input
                  type="text"
                  value={keyword}
                  onChange={(event) => setKeyword(event.target.value)}
                  placeholder="Job title, skill or keyword"
                  className="w-full bg-transparent text-[14px] font-medium !text-[#545A5B] outline-none placeholder:!text-[#A4A9A5]"
                />
              </div>

              <div className="flex min-h-[54px] items-center rounded-[10px] border border-[#DFE2DF] px-4">
                <span className="mr-3 shrink-0 !text-[#6D7E5A]">
                  <LocationIcon />
                </span>

                <select
                  value={location}
                  onChange={(event) => setLocation(event.target.value)}
                  className="w-full bg-transparent text-[14px] font-semibold !text-[#545A5B] outline-none"
                >
                  {locations.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button
                type="button"
                className="min-h-[54px] rounded-[10px] bg-[#6D7E5A] px-6 text-[13px] font-bold !text-white transition-colors duration-300 hover:bg-[#38472A]"
              >
                Search Jobs
              </button>
            </div>
          </div>

          {/* POPULAR SEARCHES */}
          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 text-[11px] font-bold !text-white">
              Popular:
            </span>

            {["Fresher", "ITI", "Diploma", "Engineering", "Manufacturing"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setKeyword(item)}
                  className="rounded-full border border-white/50 bg-transparent px-3.5 py-1.5 text-[11px] font-semibold !text-white transition-colors duration-200 hover:bg-white hover:!text-[#6D7E5A]"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </section>

      {/* =========================================================
          CURRENT OPENINGS
      ========================================================= */}
      <section className="bg-[#FDFDFD]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="mb-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                Current Openings
              </p>

              <h2 className="!text-[36px] !font-extrabold !leading-tight !text-[#545A5B] sm:!text-[48px]">
                Explore available roles.
              </h2>

              <p className="mt-3 text-[14px] !text-[#6F746F]">
                {filteredJobs.length}{" "}
                {filteredJobs.length === 1 ? "opportunity" : "opportunities"}{" "}
                available.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setShowFilters((value) => !value)}
              className="inline-flex min-h-11 w-fit items-center rounded-full border border-[#DFE2DF] bg-white px-5 text-[12px] font-bold !text-[#545A5B] lg:hidden"
            >
              {showFilters ? "Hide Filters" : "Filter Jobs"}
            </button>
          </div>

          <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
            {/* FILTERS */}
            <aside
              className={`${
                showFilters ? "block" : "hidden"
              } h-fit rounded-[16px] border border-[#DFE2DF] bg-white p-5 lg:block`}
            >
              <div className="flex items-center justify-between">
                <h3 className="!text-[18px] !font-extrabold !text-[#545A5B]">
                  Filter Jobs
                </h3>

                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-[11px] font-bold !text-[#6D7E5A] hover:underline"
                >
                  Clear
                </button>
              </div>

              <div className="mt-6 space-y-5">
                <FilterSelect
                  label="Location"
                  value={location}
                  options={locations}
                  onChange={setLocation}
                />

                <FilterSelect
                  label="Experience"
                  value={experience}
                  options={experiences}
                  onChange={setExperience}
                />

                <FilterSelect
                  label="Job Type"
                  value={jobType}
                  options={jobTypes}
                  onChange={setJobType}
                />

                <FilterSelect
                  label="Education"
                  value={education}
                  options={educations}
                  onChange={setEducation}
                />

                <FilterSelect
                  label="Industry"
                  value={industry}
                  options={industries}
                  onChange={setIndustry}
                />
              </div>
            </aside>

            {/* JOB RESULTS */}
            <div className="space-y-5">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))
              ) : (
                <div className="rounded-[16px] border border-[#DFE2DF] bg-white px-6 py-16 text-center">
                  <h3 className="!text-[24px] !font-extrabold !text-[#545A5B]">
                    No matching opportunities
                  </h3>

                  <p className="mx-auto mt-3 max-w-[500px] text-[14px] leading-6 !text-[#6F746F]">
                    Try changing your search or clearing one or more filters
                    to explore other opportunities.
                  </p>

                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 rounded-full bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white transition-colors hover:bg-[#38472A]"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          THE TEAMMATES APPROACH
      ========================================================= */}
      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="mb-4 text-[11px] font-extrabold uppercase tracking-[0.15em] !text-white">
                The TeamMates Approach
              </p>

              <h2 className="!text-[36px] !font-extrabold !leading-[1.08] !text-white sm:!text-[48px]">
                More than a job search.
                <br />
                <span className="!text-[#6D7E5A]">
                  A clearer next step.
                </span>
              </h2>
            </div>

            <div>
              <p className="max-w-[680px] text-[15px] leading-7 !text-white sm:text-[16px]">
                TeamMates HR Solutions connects candidates with relevant
                opportunities across industries while helping them navigate
                their next career move with greater clarity.
              </p>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[16px] border border-[#DFE2DF] bg-white p-6 sm:p-7">
                  <div className="flex gap-5">
                    <span className="shrink-0 text-[12px] font-extrabold !text-[#6D7E5A]">
                      01
                    </span>

                    <div>
                      <h3 className="!text-[22px] !font-extrabold !text-[#545A5B]">
                        Relevant Opportunities
                      </h3>

                      <p className="mt-2 text-[14px] leading-6 !text-[#6F746F]">
                        Explore roles aligned with your skills, education,
                        experience and career direction.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[16px] border border-[#DFE2DF] bg-white p-6 sm:p-7">
                  <div className="flex gap-5">
                    <span className="shrink-0 text-[12px] font-extrabold !text-[#6D7E5A]">
                      02
                    </span>

                    <div>
                      <h3 className="!text-[22px] !font-extrabold !text-[#545A5B]">
                        Opportunities Across Industries
                      </h3>

                      <p className="mt-2 text-[14px] leading-6 !text-[#6F746F]">
                        Discover career opportunities across IT, manufacturing,
                        healthcare, logistics and other growing sectors.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-[16px] border border-[#DFE2DF] bg-white p-6 sm:p-7">
                  <div className="flex gap-5">
                    <span className="shrink-0 text-[12px] font-extrabold !text-[#6D7E5A]">
                      03
                    </span>

                    <div>
                      <h3 className="!text-[22px] !font-extrabold !text-[#545A5B]">
                        A Simpler Recruitment Journey
                      </h3>

                      <p className="mt-2 text-[14px] leading-6 !text-[#6F746F]">
                        Find an opportunity and take your next step through a
                        straightforward recruitment experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">
          <div className="flex flex-col gap-8 rounded-[20px] bg-[#FDFDFD] px-6 py-10 sm:px-10 md:flex-row md:items-center md:justify-between md:py-12 lg:px-12">
            <div className="max-w-[700px]">
              <p className="mb-3 text-[11px] font-extrabold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                Didn&apos;t Find The Right Role?
              </p>

              <h2 className="!text-[36px] !font-extrabold !leading-tight !text-[#545A5B] sm:!text-[46px]">
                Let the right opportunity find you.
              </h2>

              <p className="mt-4 text-[15px] leading-7 !text-[#6F746F]">
                Share your profile with TeamMates HR Solutions and our
                recruitment team can consider you for relevant opportunities.
              </p>
            </div>

            <Link
              href="/contact-us"
              className="inline-flex min-h-12 w-fit shrink-0 items-center gap-3 rounded-full bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white transition-colors duration-300 hover:bg-[#38472A]"
            >
              Submit Your Profile
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}