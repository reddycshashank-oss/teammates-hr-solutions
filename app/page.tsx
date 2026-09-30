"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import Button from "@/components/Button";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    if (video.muted) {
      video.muted = false;
      video.volume = 1;

      try {
        await video.play();
        setSoundOn(true);
      } catch (error) {
        console.error("Unable to enable video audio:", error);
      }
    } else {
      video.muted = true;
      setSoundOn(false);
    }
  };

  return (
    <main className="text-[#545A5B]">
  {/* =====================================================
    SECTION 1 — HERO
===================================================== */}

<section
  aria-label="TeamMates HR Solutions"
  className="relative min-h-[calc(100svh-82px)] overflow-hidden bg-[#38472A]"
>
  {/* VIDEO */}

  <video
    ref={videoRef}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="absolute inset-0 h-full w-full object-cover"
  >
    {/* Mobile 9:16 Video */}
    <source
      src="/videos/teammateshr-new-hero-mobile.mp4"
      type="video/mp4"
      media="(max-width: 767px)"
    />

    {/* Desktop Video */}
    <source
      src="/videos/teammateshr-new-hero.mp4"
      type="video/mp4"
    />
  </video>

  {/* VIDEO OVERLAY */}

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[#111111]/50"
  />

  <div
    aria-hidden="true"
    className="absolute inset-0 bg-[#38472A]/15"
  />

  {/* =====================================================
      BOTTOM CTA BAR
  ===================================================== */}

  <div className="absolute bottom-6 left-0 right-0 z-20 px-5 sm:bottom-8 sm:px-8 md:px-10 lg:px-12">

    <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between gap-4">

      {/* =====================================================
          CTA BUTTONS — LEFT
      ===================================================== */}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">

        {/* FIND JOBS */}

        <a
          href="/jobs"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#6D7E5A] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
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
        </a>

        {/* HIRE TALENT */}

        <a
          href="/for-employers"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#FFFFFF] px-7 py-3 text-[13px] font-semibold !text-[#6D7E5A] transition-all duration-300 hover:!bg-[#FFFFFF] hover:!text-[#6D7E5A] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2"
        >
          <span className="!text-[#6D7E5A]">
            Hire Talent
          </span>

          <span
            aria-hidden="true"
            className="!text-[#6D7E5A] transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

      </div>

      {/* =====================================================
          AUDIO CONTROL — RIGHT
      ===================================================== */}

      <button
        type="button"
        onClick={toggleSound}
        aria-label={soundOn ? "Mute video" : "Enable video sound"}
        className="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-full !bg-[#6D7E5A] px-5 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#6D7E5A] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
      >
        <span
          aria-hidden="true"
          className="text-[15px]"
        >
          {soundOn ? "🔊" : "🔇"}
        </span>

        <span className="!text-white">
          {soundOn ? "Mute" : "Enable Sound"}
        </span>
      </button>

    </div>

  </div>

</section>
    {/* =====================================================
    SECTION 2 — WHY TEAMMATES
    ===================================================== */}

<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    {/* SECTION HEADER */}
    <div className="max-w-[720px]">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
        Why TeamMates
      </p>

      <h2 className="mt-5 !text-[#FFFFFF]">
        Recruitment that understands{" "}
        <span className="text-[#6D7E5A]">
          people.
        </span>
      </h2>

      <p className="mt-6 max-w-[620px] text-[16px] leading-7 !text-[#FFFFFF] sm:text-[17px] sm:leading-8">
        We focus on people, requirements and opportunities to create stronger
        connections between candidates and businesses.
      </p>

    </div>


    {/* FOUR SEPARATE CONTAINERS */}
    <div className="mt-12 grid gap-4 sm:grid-cols-2">


      {/* 01 */}
      <div className="group relative min-h-[250px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-9">

        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#A4A9A5]/30 transition-transform duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute right-10 top-10 h-9 w-9 rounded-full bg-[#6D7E5A]"
        />

        <span className="relative text-[11px] font-bold tracking-[0.08em] text-[#6D7E5A]">
          01
        </span>

        <h3 className="relative mt-6 !text-[23px] !leading-tight !text-[#545A5B]">
          Human-first approach
        </h3>

        <p className="relative mt-4 max-w-[440px] text-[14px] leading-6 text-[#6F746F]">
          We focus on people, requirements and goals behind every
          opportunity.
        </p>

      </div>


      {/* 02 */}
      <div className="group relative min-h-[250px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-9">

        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#A4A9A5]/30 transition-transform duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute right-10 top-10 h-9 w-9 rounded-full bg-[#6D7E5A]"
        />

        <span className="relative text-[11px] font-bold tracking-[0.08em] text-[#6D7E5A]">
          02
        </span>

        <h3 className="relative mt-6 !text-[23px] !leading-tight !text-[#545A5B]">
          Industry understanding
        </h3>

        <p className="relative mt-4 max-w-[440px] text-[14px] leading-6 text-[#6F746F]">
          We consider the skills, roles and workforce needs specific to
          different industries.
        </p>

      </div>


      {/* 03 */}
      <div className="group relative min-h-[250px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-9">

        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#A4A9A5]/30 transition-transform duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute right-10 top-10 h-9 w-9 rounded-full bg-[#6D7E5A]"
        />

        <span className="relative text-[11px] font-bold tracking-[0.08em] text-[#6D7E5A]">
          03
        </span>

        <h3 className="relative mt-6 !text-[23px] !leading-tight !text-[#545A5B]">
          Relevant connections
        </h3>

        <p className="relative mt-4 max-w-[440px] text-[14px] leading-6 text-[#6F746F]">
          We work to connect candidates with suitable opportunities and
          businesses with relevant talent.
        </p>

      </div>


      {/* 04 */}
      <div className="group relative min-h-[250px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8 lg:p-9">

        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-48 w-48 rounded-full border border-[#A4A9A5]/30 transition-transform duration-500 group-hover:scale-105"
        />

        <div
          aria-hidden="true"
          className="absolute right-10 top-10 h-9 w-9 rounded-full bg-[#6D7E5A]"
        />

        <span className="relative text-[11px] font-bold tracking-[0.08em] text-[#6D7E5A]">
          04
        </span>

        <h3 className="relative mt-6 !text-[23px] !leading-tight !text-[#545A5B]">
          Responsive support
        </h3>

        <p className="relative mt-4 max-w-[440px] text-[14px] leading-6 text-[#6F746F]">
          Clear communication and support help keep the recruitment journey
          focused and straightforward.
        </p>

      </div>

    </div>


    {/* SINGLE CTA */}
    <div className="mt-8">
      <a
        href="/about-us"
        className="group inline-flex items-center gap-3 rounded-full !bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-[#FFFFFF] transition-colors duration-200 hover:!bg-[#6D7E5A] hover:!text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
      >
        <span className="!text-[#FFFFFF]">
          About TeamMates
        </span>

        <span
          aria-hidden="true"
          className="!text-[#FFFFFF] transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </a>
    </div>

  </div>
</section>
{/* =====================================================
    SECTION 3 — WHO WE SERVE
    ===================================================== */}

<section className="bg-[#FDFDFD]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    {/* SECTION HEADER */}
    <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">

      <div>
        <div className="flex items-center gap-3">
          <span className="h-px w-9 bg-[#6D7E5A]" />

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#38472A] sm:text-[11px]">
            Who We Serve
          </p>
        </div>

        <h2 className="mt-5 max-w-[760px] !text-[40px] !leading-[1.05] sm:!text-[48px] lg:!text-[56px]">
          Connecting people with the right{" "}
          <span className="!text-[#6D7E5A]">
            opportunities.
          </span>
        </h2>
      </div>

      <p className="max-w-[430px] text-[14px] leading-6 text-[#6F746F] sm:text-[15px] sm:leading-7 lg:pb-1">
        Whether you are looking for your next career opportunity or building
        your next team, TeamMates helps create the right connection.
      </p>

    </div>


    {/* =================================================
        CANDIDATE + EMPLOYER CONTAINERS
        ================================================= */}

    <div className="mt-12 grid gap-5 lg:grid-cols-2">


      {/* =================================================
          FOR CANDIDATES
          ================================================= */}

      <article className="group relative min-h-[470px] overflow-hidden rounded-[16px] border border-[#A4A9A5]/50 bg-[#C1C3AC] p-7 sm:min-h-[500px] sm:p-9 lg:p-10">

        {/* LARGE DECORATIVE ARC */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/45 transition-transform duration-500 group-hover:scale-105"
        />

        {/* TOP RIGHT DOT */}
        <div
          aria-hidden="true"
          className="absolute right-16 top-16 h-11 w-11 rounded-full bg-[#38472A] transition-transform duration-300 group-hover:scale-110"
        />


        {/* TOP LABEL */}
        <div className="relative flex items-center justify-between">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] !text-white sm:text-[11px]">
            For Candidates
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] !text-white/75 sm:text-[11px]">
            Career
          </p>

        </div>


        {/* SHORT LINE */}
        <div className="relative mt-5 h-px w-10 bg-white" />


        {/* CANDIDATE ICON */}
        <div className="relative mt-11 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#6D7E5A]">

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <rect
              x="5"
              y="3.5"
              width="14"
              height="17"
              rx="1.5"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <path
              d="M8.5 8h7M8.5 12h7M8.5 16h4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

        </div>


        {/* CONTENT */}
        <div className="relative mt-8">

          <h3 className="max-w-[500px] !text-[30px] !leading-[1.08] !tracking-[-0.035em] !text-white sm:!text-[34px]">

            Find your next{" "}

            <span className="!text-[#38472A]">
              opportunity.
            </span>

          </h3>


          <p className="mt-5 max-w-[500px] text-[14px] leading-6 !text-white/85 sm:text-[15px] sm:leading-7">
            Explore relevant jobs, discover career opportunities and connect
            with employers looking for your skills and potential.
          </p>

        </div>


        {/* CTA */}
        <a
          href="/jobs"
          className="group/link absolute bottom-7 left-7 inline-flex items-center gap-4 border-b border-white/80 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] !text-white transition-colors duration-200 hover:border-[#38472A] hover:!text-[#38472A] sm:bottom-9 sm:left-9 lg:bottom-10 lg:left-10"
        >

          <span>
            Explore Jobs
          </span>

          <span
            aria-hidden="true"
            className="text-base transition-transform duration-200 group-hover/link:translate-x-1"
          >
            →
          </span>

        </a>

      </article>


      {/* =================================================
          FOR EMPLOYERS
          ================================================= */}

      <article className="group relative min-h-[470px] overflow-hidden rounded-[16px] border border-[#A4A9A5]/50 bg-[#C1C3AC] p-7 sm:min-h-[500px] sm:p-9 lg:p-10">

        {/* LARGE DECORATIVE ARC */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/45 transition-transform duration-500 group-hover:scale-105"
        />

        {/* TOP RIGHT DOT */}
        <div
          aria-hidden="true"
          className="absolute right-16 top-16 h-11 w-11 rounded-full bg-[#38472A] transition-transform duration-300 group-hover:scale-110"
        />


        {/* TOP LABEL */}
        <div className="relative flex items-center justify-between">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] !text-white sm:text-[11px]">
            For Employers
          </p>

          <p className="text-[10px] font-semibold uppercase tracking-[0.14em] !text-white/75 sm:text-[11px]">
            Talent
          </p>

        </div>


        {/* SHORT LINE */}
        <div className="relative mt-5 h-px w-10 bg-white" />


        {/* EMPLOYER ICON */}
        <div className="relative mt-11 flex h-[60px] w-[60px] items-center justify-center rounded-full bg-[#6D7E5A]">

          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <rect
              x="3.5"
              y="7"
              width="17"
              height="13"
              rx="1.8"
              stroke="currentColor"
              strokeWidth="1.8"
            />

            <path
              d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />

            <path
              d="M3.5 12h17M10 12v2h4v-2"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>

        </div>


        {/* CONTENT */}
        <div className="relative mt-8">

          <h3 className="max-w-[510px] !text-[30px] !leading-[1.08] !tracking-[-0.035em] !text-white sm:!text-[34px]">

            Build stronger teams with the right{" "}

            <span className="!text-[#38472A]">
              talent.
            </span>

          </h3>


          <p className="mt-5 max-w-[500px] text-[14px] leading-6 !text-white/85 sm:text-[15px] sm:leading-7">
            Find skilled professionals through recruitment and staffing
            support designed around your workforce requirements.
          </p>

        </div>


        {/* CTA */}
        <a
          href="/for-employers"
          className="group/link absolute bottom-7 left-7 inline-flex items-center gap-4 border-b border-white/80 pb-2 text-[10px] font-bold uppercase tracking-[0.16em] !text-white transition-colors duration-200 hover:border-[#38472A] hover:!text-[#38472A] sm:bottom-9 sm:left-9 lg:bottom-10 lg:left-10"
        >

          <span>
            Hire Talent
          </span>

          <span
            aria-hidden="true"
            className="text-base transition-transform duration-200 group-hover/link:translate-x-1"
          >
            →
          </span>

        </a>

      </article>

    </div>

  </div>
</section>
{/* =====================================================
    SECTION 3 — SEARCH JOBS
    ===================================================== */

<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">

    {/* SECTION INTRO */}
    <div className="max-w-[850px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
        Find Your Next Opportunity
      </p>

      <h2 className="mt-5 max-w-[850px] !text-[#FFFFFF]">
        Search jobs that match your skills.
      </h2>

      <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-[#FFFFFF] sm:text-[17px] sm:leading-8">
        Search opportunities by job title, skill, keyword or location and
        discover your next career move.
      </p>
    </div>

    {/* SEARCH PANEL */}
    <div className="mt-10 rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-4 sm:p-5 lg:p-6">

      <form
        action="/jobs"
        method="GET"
        className="grid gap-4 lg:grid-cols-[1fr_1fr_auto] lg:items-end"
      >

        {/* KEYWORD */}
        <div>
          <label
            htmlFor="job-keyword"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] !text-[#545A5B]"
          >
            What are you looking for?
          </label>

          <input
            id="job-keyword"
            name="q"
            type="search"
            placeholder="Job title, skill or keyword"
            className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] transition-colors duration-200 focus:border-[#6D7E5A] focus:outline-none focus:ring-0"
          />
        </div>

        {/* LOCATION */}
        <div>
          <label
            htmlFor="job-location"
            className="mb-2 block text-[10px] font-bold uppercase tracking-[0.12em] !text-[#545A5B]"
          >
            Location
          </label>

          <input
            id="job-location"
            name="location"
            type="search"
            placeholder="City, state or location"
            className="h-14 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FDFDFD] px-4 text-[14px] !text-[#545A5B] placeholder:!text-[#A4A9A5] transition-colors duration-200 focus:border-[#6D7E5A] focus:outline-none focus:ring-0"
          />
        </div>

        {/* SEARCH BUTTON */}
        <button
          type="submit"
          className="group flex h-14 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-8 text-[13px] font-bold !text-[#FFFFFF] transition-transform duration-200 hover:-translate-y-0.5 hover:!bg-[#6D7E5A] hover:!text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          <span className="!text-[#FFFFFF]">Search Jobs</span>

          <span
            aria-hidden="true"
            className="!text-[#FFFFFF] transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </button>

      </form>

      {/* POPULAR SEARCHES */}
      <div className="mt-5 flex flex-col gap-3 border-t border-[#DFE2DF] pt-5 sm:flex-row sm:items-center sm:flex-wrap">

        <span className="text-[10px] font-bold uppercase tracking-[0.12em] !text-[#545A5B]">
          Popular Searches
        </span>

        <div className="flex flex-wrap gap-2">

          {[
            "ITI",
            "Diploma",
            "Fresher",
            "Manufacturing",
            "Engineering",
          ].map((term) => (
            <Link
              key={term}
              href={`/jobs?keyword=${encodeURIComponent(term)}`}
              className="rounded-full border border-[#DFE2DF] bg-[#FFFFFF] px-4 py-2 text-[11px] font-medium !text-[#545A5B] transition-colors duration-200 hover:border-[#6D7E5A] hover:!text-[#6D7E5A]"
            >
              {term}
            </Link>
          ))}

        </div>
      </div>

    </div>
  </div>
</section>
/* =====================================================
    SECTION 5 — INTERNSHIPS
    ===================================================== */}

<section className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    {/* SECTION INTRO */}
    <div className="max-w-[760px]">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
        Internships
      </p>

      <h2 className="mt-5 max-w-[700px] text-[#545A5B]">
        Learn. Experience.{" "}
        <span className="text-[#6D7E5A]">
          Grow.
        </span>
      </h2>

      <p className="mt-6 max-w-[650px] text-[16px] leading-7 text-[#6F746F] sm:text-[17px] sm:leading-8">
        Gain practical industry exposure, develop professional skills and
        take your first step toward a successful career through internship
        opportunities.
      </p>

      <a
        href="/internships"
        className="group mt-8 inline-flex items-center gap-3 rounded-full !bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-[#FFFFFF] transition-colors duration-200 hover:!bg-[#6D7E5A] hover:!text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
      >
        <span>
          Explore Internships
        </span>

        <span
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </a>

    </div>


    {/* =================================================
        INTERNSHIP BENEFITS
        ================================================= */}

    <div className="mt-16 grid gap-4 md:grid-cols-3">


      {/* =================================================
          01 — INDUSTRY EXPOSURE
          ================================================= */}

      <article className="group relative min-h-[330px] overflow-hidden rounded-[16px] bg-[#C1C3AC] p-7 sm:p-8">

        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Decorative dot */}
        <div
          aria-hidden="true"
          className="absolute right-12 top-12 h-10 w-10 rounded-full bg-[#38472A] transition-transform duration-300 group-hover:scale-110"
        />


        {/* Number */}
        <span className="relative text-[13px] font-bold tracking-[0.04em] text-[#38472A]">
          01
        </span>


        {/* Divider */}
        <div className="relative mt-6 h-px w-10 bg-white" />


        {/* Content */}
        <div className="relative mt-16">

          <h3 className="!text-[27px] !leading-[1.1] !tracking-[-0.03em] !text-white sm:!text-[29px]">
            Industry Exposure
          </h3>

          <p className="mt-5 max-w-[330px] text-[14px] leading-6 !text-white/85 sm:text-[15px] sm:leading-7">
            Experience real workplace environments and gain an understanding
            of how your chosen industry works.
          </p>

        </div>

      </article>


      {/* =================================================
          02 — PRACTICAL EXPERIENCE
          ================================================= */}

      <article className="group relative min-h-[330px] overflow-hidden rounded-[16px] bg-[#C1C3AC] p-7 sm:p-8">

        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Decorative dot */}
        <div
          aria-hidden="true"
          className="absolute right-12 top-12 h-10 w-10 rounded-full bg-[#38472A] transition-transform duration-300 group-hover:scale-110"
        />


        {/* Number */}
        <span className="relative text-[13px] font-bold tracking-[0.04em] text-[#38472A]">
          02
        </span>


        {/* Divider */}
        <div className="relative mt-6 h-px w-10 bg-white" />


        {/* Content */}
        <div className="relative mt-16">

          <h3 className="!text-[27px] !leading-[1.1] !tracking-[-0.03em] !text-white sm:!text-[29px]">
            Practical Experience
          </h3>

          <p className="mt-5 max-w-[330px] text-[14px] leading-6 !text-white/85 sm:text-[15px] sm:leading-7">
            Build practical knowledge and strengthen your professional skills
            through meaningful workplace experience.
          </p>

        </div>

      </article>


      {/* =================================================
          03 — CAREER READINESS
          ================================================= */}

      <article className="group relative min-h-[330px] overflow-hidden rounded-[16px] bg-[#C1C3AC] p-7 sm:p-8">

        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Decorative dot */}
        <div
          aria-hidden="true"
          className="absolute right-12 top-12 h-10 w-10 rounded-full bg-[#38472A] transition-transform duration-300 group-hover:scale-110"
        />


        {/* Number */}
        <span className="relative text-[13px] font-bold tracking-[0.04em] text-[#38472A]">
          03
        </span>


        {/* Divider */}
        <div className="relative mt-6 h-px w-10 bg-white" />


        {/* Content */}
        <div className="relative mt-16">

          <h3 className="!text-[27px] !leading-[1.1] !tracking-[-0.03em] !text-white sm:!text-[29px]">
            Career Readiness
          </h3>

          <p className="mt-5 max-w-[330px] text-[14px] leading-6 !text-white/85 sm:text-[15px] sm:leading-7">
            Develop the confidence, skills and workplace exposure needed for
            your next career step.
          </p>

        </div>

      </article>

    </div>

  </div>
</section>
{/* =====================================================
    SECTION 6 — INDUSTRIES
    ===================================================== */}

<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    {/* SECTION HEADER */}
    <div className="max-w-[760px]">

      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
        Industries
      </p>

      <h2 className="mt-5 !text-[#FFFFFF]">
        Talent across{" "}
        <span className="!text-[#6D7E5A]">
          industries.
        </span>
      </h2>

      <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-[#FFFFFF] sm:text-[17px] sm:leading-8">
        We connect businesses with relevant talent across diverse industries,
        workforce requirements and professional roles.
      </p>

    </div>


    {/* =================================================
        INDUSTRY CONTAINERS
        ================================================= */}

    <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">


      {/* 01 — IT & TECHNOLOGY */}
      <a
        href="/industries/it-technology"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <rect
              x="3"
              y="4"
              width="18"
              height="13"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M8 21h8M12 17v4"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          IT &amp; Technology
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Technology, software, IT services and technical professionals.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 02 — MANUFACTURING */}
      <a
        href="/industries/manufacturing"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M3 21V9l7 4V9l7 4V5h4v16H3Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M7 17h2M12 17h2M17 17h2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Manufacturing
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Production, quality, maintenance and industrial workforce roles.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 03 — HEALTHCARE */}
      <a
        href="/industries/healthcare"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M12 21s-7-4.7-7-10.3A4.2 4.2 0 0 1 12 8a4.2 4.2 0 0 1 7 2.7C19 16.3 12 21 12 21Z"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <path
              d="M9 13h6M12 10v6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Healthcare
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Healthcare professionals, support staff and operational roles.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 04 — LOGISTICS */}
      <a
        href="/industries/logistics"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M3 6h11v11H3zM14 10h4l3 3v4h-7z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <circle
              cx="7"
              cy="19"
              r="1.8"
              stroke="currentColor"
              strokeWidth="1.6"
            />
            <circle
              cx="18"
              cy="19"
              r="1.8"
              stroke="currentColor"
              strokeWidth="1.6"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Logistics
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Logistics, warehouse, transportation and supply-chain talent.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 05 — RETAIL */}
      <a
        href="/industries/retail"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M4 9h16l-1-5H5L4 9Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M5 9v10h14V9M9 13h6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Retail
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Retail operations, sales, customer service and support roles.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 06 — BPO & CUSTOMER SUPPORT */}
      <a
        href="/industries/bpo-customer-support"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M5 12a7 7 0 0 1 14 0v5a2 2 0 0 1-2 2h-2v-6h4M5 13H3v4a2 2 0 0 0 2 2h2v-6"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 21h3"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          BPO &amp; Customer Support
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Customer service, voice, non-voice and process-oriented roles.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 07 — BFSI */}
      <a
        href="/industries/bfsi"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 21h18M12 3l9 6H3l9-6Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          BFSI
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Banking, financial services, insurance and operations talent.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 08 — AEROSPACE & DEFENCE */}
      <a
        href="/industries/aerospace-defence"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M3 13l8-2 4-7 2 1-1 7 5 2-1.5 2.5-4.5-1-4 4H8l2-4-7-1v-2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Aerospace &amp; Defence
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Engineering, manufacturing, quality and technical professionals.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 09 — CONSTRUCTION & INFRASTRUCTURE */}
      <a
        href="/industries/construction-infrastructure"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M4 21V9l6-4v16M10 21V5l6 4v12M16 21V9l4 3v9"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M2 21h20M7 12h1M7 16h1M13 10h1M13 14h1M18 14h1M18 18h1"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Construction &amp; Infrastructure
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Project, site, engineering, supervision and skilled workforce roles.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 10 — REAL ESTATE */}
      <a
        href="/industries/real-estate"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M4 21V9l8-6 8 6v12H4Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M9 21v-6h6v6M8 11h2M14 11h2"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Real Estate
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Sales, property management, operations and real estate support.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 11 — TEXTILE & APPAREL */}
      <a
        href="/industries/textile-apparel"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="M9 4c1 1 5 1 6 0l4 3-2 4-2-1v10H9V10l-2 1-2-4 4-3Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M9 4c1 2 5 2 6 0"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Textile &amp; Apparel
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Production, quality, merchandising and apparel workforce roles.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>


      {/* 12 — EDUCATION & EDTECH */}
      <a
        href="/industries/education-edtech"
        className="group flex flex-col rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-7"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#6D7E5A]">
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            className="h-7 w-7 text-white"
          >
            <path
              d="m3 9 9-5 9 5-9 5-9-5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path
              d="M7 11v5c2 2 8 2 10 0v-5M21 9v7"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h3 className="mt-6 !text-[21px] !leading-tight !text-[#545A5B]">
          Education &amp; EdTech
        </h3>

        <p className="mt-3 text-[13px] leading-6 text-[#6F746F]">
          Education, training, academic operations and EdTech professionals.
        </p>

        <span className="mt-6 inline-flex items-center gap-2 text-[12px] font-semibold !text-[#545A5B]">
          Explore
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>

    </div>

  </div>
</section>
{/* =====================================================
    SECTION 7 — HOW WE WORK
    ===================================================== */}

<section className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    <div className="grid items-stretch gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">

      {/* LEFT — IMAGE */}
      <div className="relative min-h-[420px] overflow-hidden rounded-[16px] bg-[#EEF0EE] sm:min-h-[500px] lg:min-h-[560px]">
        <Image
          src="/images/how-we-work.png"
          alt="Recruitment professional meeting with a candidate in a modern workplace"
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover"
        />
      </div>

      {/* RIGHT — CONTENT */}
      <div className="flex flex-col justify-center lg:py-8">

        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
          How We Work
        </p>

        <h2 className="mt-5 max-w-[580px] text-[#545A5B]">
          Understanding before{" "}
          <span className="text-[#6D7E5A]">connecting.</span>
        </h2>

        <p className="mt-6 max-w-[560px] text-[16px] leading-7 text-[#6F746F] sm:text-[17px] sm:leading-8">
          We take the time to understand the requirements of both candidates
          and businesses before making the right connection.
        </p>

        {/* PROCESS */}
        <div className="mt-10 max-w-[560px] border-t border-[#DFE2DF]">

          {/* UNDERSTAND */}
          <div className="border-b border-[#DFE2DF] py-6">
            <h3 className="!text-[21px] !leading-tight !text-[#545A5B]">
              Understand
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#6F746F]">
              We understand the role, requirements, skills and expectations.
            </p>
          </div>

          {/* CONNECT */}
          <div className="border-b border-[#DFE2DF] py-6">
            <h3 className="!text-[21px] !leading-tight !text-[#545A5B]">
              Connect
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#6F746F]">
              We identify relevant opportunities and connect the right people.
            </p>
          </div>

          {/* SUPPORT */}
          <div className="py-6">
            <h3 className="!text-[21px] !leading-tight !text-[#545A5B]">
              Support
            </h3>

            <p className="mt-2 text-[14px] leading-6 text-[#6F746F]">
              We stay involved with clear communication throughout the process.
            </p>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
{/* =====================================================
    SECTION 8 — TESTIMONIALS
    ===================================================== */}

<section className="bg-[#C1C3AC]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    {/* SECTION HEADER */}
    <div className="max-w-[720px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
        Testimonials
      </p>

      <h2 className="mt-5 !text-white">
  Trusted by people who{" "}
  <span className="!text-[#6D7E5A]">
    move forward.
  </span>
</h2>

      <p className="mt-6 max-w-[620px] text-[16px] leading-7 !text-[#FFFFFF] sm:text-[17px] sm:leading-8">
        A few words from people who have experienced the TeamMates
        recruitment journey.
      </p>
    </div>


    {/* TESTIMONIAL CONTAINERS */}
    <div className="mt-14 grid gap-4 md:grid-cols-3">


      {/* =================================================
          TESTIMONIAL 1
          ================================================= */}

      <article className="group relative min-h-[360px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-8 lg:p-9">

        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#A4A9A5]/35 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Decorative olive circle */}
        <div
          aria-hidden="true"
          className="absolute right-12 top-12 h-10 w-10 rounded-full bg-[#6D7E5A] transition-transform duration-300 group-hover:scale-110"
        />

        {/* Quote */}
        <span
          aria-hidden="true"
          className="relative text-[48px] leading-none text-[#C1C3AC]"
        >
          “
        </span>

        {/* Testimonial */}
        <blockquote className="relative mt-4 text-[16px] leading-7 text-[#545A5B]">
          TeamMates understood our requirements and helped us connect with
          suitable candidates quickly and professionally.
        </blockquote>

        {/* Person */}
        <div className="relative mt-8 border-t border-[#DFE2DF] pt-5">
          <p className="text-[13px] font-bold text-[#6D7E5A]">
            Rahul Sharma
          </p>

          <p className="mt-1 text-[12px] text-[#6F746F]">
            HR Manager · Manufacturing
          </p>
        </div>

      </article>


      {/* =================================================
          TESTIMONIAL 2
          ================================================= */}

      <article className="group relative min-h-[360px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-8 lg:p-9">

        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#A4A9A5]/35 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Decorative olive circle */}
        <div
          aria-hidden="true"
          className="absolute right-12 top-12 h-10 w-10 rounded-full bg-[#6D7E5A] transition-transform duration-300 group-hover:scale-110"
        />

        {/* Quote */}
        <span
          aria-hidden="true"
          className="relative text-[48px] leading-none text-[#C1C3AC]"
        >
          “
        </span>

        {/* Testimonial */}
        <blockquote className="relative mt-4 text-[16px] leading-7 text-[#545A5B]">
          The team guided me through the opportunity and kept the process
          clear from the first conversation to the final step.
        </blockquote>

        {/* Person */}
        <div className="relative mt-8 border-t border-[#DFE2DF] pt-5">
          <p className="text-[13px] font-bold text-[#6D7E5A]">
            Priya Nair
          </p>

          <p className="mt-1 text-[12px] text-[#6F746F]">
            Candidate · Engineering
          </p>
        </div>

      </article>


      {/* =================================================
          TESTIMONIAL 3
          ================================================= */}

      <article className="group relative min-h-[360px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-8 lg:p-9">

        {/* Decorative arc */}
        <div
          aria-hidden="true"
          className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-[#A4A9A5]/35 transition-transform duration-500 group-hover:scale-105"
        />

        {/* Decorative olive circle */}
        <div
          aria-hidden="true"
          className="absolute right-12 top-12 h-10 w-10 rounded-full bg-[#6D7E5A] transition-transform duration-300 group-hover:scale-110"
        />

        {/* Quote */}
        <span
          aria-hidden="true"
          className="relative text-[48px] leading-none text-[#C1C3AC]"
        >
          “
        </span>

        {/* Testimonial */}
        <blockquote className="relative mt-4 text-[16px] leading-7 text-[#545A5B]">
          Professional communication, relevant profiles and consistent
          support made the recruitment experience straightforward.
        </blockquote>

        {/* Person */}
        <div className="relative mt-8 border-t border-[#DFE2DF] pt-5">
          <p className="text-[13px] font-bold text-[#6D7E5A]">
            Arjun Mehta
          </p>

          <p className="mt-1 text-[12px] text-[#6F746F]">
            Operations Head · Automotive
          </p>
        </div>

      </article>

    </div>

  </div>
</section>
{/* =====================================================
    SECTION 9 — FAQ
    ===================================================== */}

<section className="bg-[#FDFDFD]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

    {/* SECTION HEADER */}
    <div className="max-w-[720px]">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#6D7E5A] sm:text-[12px]">
        Frequently Asked Questions
      </p>

      <h2 className="mt-5 text-[#545A5B]">
        Questions, answered{" "}
        <span className="text-[#6D7E5A]">clearly.</span>
      </h2>

      <p className="mt-6 max-w-[620px] text-[16px] leading-7 text-[#6F746F] sm:text-[17px] sm:leading-8">
        Find quick answers to common questions about jobs, recruitment,
        staffing and working with TeamMates.
      </p>
    </div>

    {/* FAQ LIST */}
    <div className="mt-14 max-w-[900px] border-t border-[#DFE2DF]">

      <details className="group border-b border-[#DFE2DF]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold text-[#545A5B] sm:text-[17px]">
          <span>How can I apply for a job through TeamMates?</span>

          <span
            aria-hidden="true"
            className="text-[24px] font-normal text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <p className="max-w-[760px] pb-6 pr-10 text-[14px] leading-7 text-[#6F746F]">
          You can browse available opportunities through our jobs section,
          select a suitable position and follow the application process
          provided for that role.
        </p>
      </details>

      <details className="group border-b border-[#DFE2DF]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold text-[#545A5B] sm:text-[17px]">
          <span>What type of recruitment services do you provide?</span>

          <span
            aria-hidden="true"
            className="text-[24px] font-normal text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <p className="max-w-[760px] pb-6 pr-10 text-[14px] leading-7 text-[#6F746F]">
          TeamMates supports businesses with recruitment, staffing and
          manpower solutions across different industries and workforce
          requirements.
        </p>
      </details>

      <details className="group border-b border-[#DFE2DF]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold text-[#545A5B] sm:text-[17px]">
          <span>Can freshers apply for opportunities?</span>

          <span
            aria-hidden="true"
            className="text-[24px] font-normal text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <p className="max-w-[760px] pb-6 pr-10 text-[14px] leading-7 text-[#6F746F]">
          Yes. Opportunities may be available for freshers depending on the
          role, employer requirements and current openings.
        </p>
      </details>

      <details className="group border-b border-[#DFE2DF]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold text-[#545A5B] sm:text-[17px]">
          <span>How can a company hire through TeamMates?</span>

          <span
            aria-hidden="true"
            className="text-[24px] font-normal text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <p className="max-w-[760px] pb-6 pr-10 text-[14px] leading-7 text-[#6F746F]">
          Businesses can share their hiring requirements with TeamMates so
          our recruitment team can understand the role and identify relevant
          talent.
        </p>
      </details>

      <details className="group border-b border-[#DFE2DF]">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-[16px] font-semibold text-[#545A5B] sm:text-[17px]">
          <span>Does TeamMates offer internship opportunities?</span>

          <span
            aria-hidden="true"
            className="text-[24px] font-normal text-[#6D7E5A] transition-transform duration-200 group-open:rotate-45"
          >
            +
          </span>
        </summary>

        <p className="max-w-[760px] pb-6 pr-10 text-[14px] leading-7 text-[#6F746F]">
          Internship opportunities can vary based on available programs,
          employers and current openings. Check the internships section for
          the latest opportunities.
        </p>
      </details>

    </div>

  </div>
</section>
{/* =====================================================
    SECTION 10 — FINAL CTA
===================================================== */}

<section className="bg-[#FFFFFF]">
  <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-20 lg:py-24">

    <div className="w-full rounded-[16px] bg-[#C1C3AC] px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20">

      {/* CTA CONTENT */}
      <div className="max-w-[850px]">

        <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
          Let&apos;s Move Forward
        </p>

        <h2 className="mt-5 !text-white">
          Ready for the next opportunity or the right{" "}
          <span className="!text-[#6D7E5A]">
            talent?
          </span>
        </h2>

        <p className="mt-6 max-w-[700px] text-[16px] leading-7 !text-white sm:text-[18px] sm:leading-8">
          Whether you are looking for your next career opportunity or
          building your team, TeamMates HR Solutions is here to help you
          take the next step.
        </p>

      </div>

      {/* CTA BUTTONS */}
      <div className="mt-9 flex flex-col gap-4 sm:flex-row">

        {/* FIND JOBS */}
        <a
          href="/jobs"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-8 py-3.5 text-[14px] font-semibold !text-white transition-all duration-300 hover:!bg-[#6D7E5A] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
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
        </a>

        {/* HIRE TALENT */}
        <a
          href="/for-employers"
          className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-8 py-3.5 text-[14px] font-semibold !text-white transition-all duration-300 hover:!bg-[#6D7E5A] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
        >
          <span className="!text-white">
            Hire Talent
          </span>

          <span
            aria-hidden="true"
            className="!text-white transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </a>

      </div>

    </div>
  </div>
</section>
    </main>
  );
}