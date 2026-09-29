"use client";

import type { FormEvent } from "react";
import type { Metadata } from "next";
import { useState } from "react";

const metadata: Metadata = {
  title: "Contact TeamMates HR Solutions | Recruitment & Staffing India",
  description:
    "Contact TeamMates HR Solutions for recruitment, staffing, talent acquisition and career opportunities. Get in touch with our team for hiring or job enquiries.",
};

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | "";
    message: string;
  }>({
    type: "",
    message: "",
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      enquiryType: String(formData.get("enquiryType") || "").trim(),
      subject: String(formData.get("subject") || "").trim(),
      message: String(formData.get("message") || "").trim(),
    };

    setIsSubmitting(true);
    setStatus({
      type: "",
      message: "",
    });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setStatus({
          type: "error",
          message:
            result.message ||
            "Unable to submit your enquiry. Please try again.",
        });
        return;
      }

      setStatus({
        type: "success",
        message:
          result.message ||
          "Your enquiry has been submitted successfully.",
      });

      form.reset();
    } catch (error) {
      console.error("Contact form error:", error);

      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main>
      {/* =========================================================
          1. CONTACT HERO
      ========================================================= */}

      <section className="bg-[#FDFDFD]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-16 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="max-w-[820px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Contact TeamMates
            </p>

            <h1 className="mt-5 max-w-[760px] !text-[#545A5B]">
              Let&apos;s{" "}
              <span className="!text-[#6D7E5A]">Connect.</span>
            </h1>

            <p className="mt-6 max-w-[680px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8 lg:text-[18px]">
              Whether you are looking for your next career opportunity or
              seeking recruitment and staffing support for your business,
              connect with TeamMates HR Solutions. Our team is here to
              understand your requirements and help you take the next step.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          2. CONTACT INFORMATION + ENQUIRY FORM
      ========================================================= */}

      <section className="bg-[#C1C3AC]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:gap-6">

            {/* CONTACT INFORMATION CARD */}

            <div className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-8 lg:p-10">
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                Get in Touch
              </p>

              <h2 className="mt-5 max-w-[480px] !text-[#545A5B]">
                Let&apos;s start with a{" "}
                <span className="!text-[#6D7E5A]">conversation.</span>
              </h2>

              <p className="mt-6 max-w-[500px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8">
                Reach out to us for job enquiries, recruitment requirements,
                staffing solutions or general questions about TeamMates HR
                Solutions.
              </p>

              {/* CONTACT DETAILS */}

              <div className="mt-10 border-t border-[#DFE2DF]">

                {/* Phone */}

                <div className="border-b border-[#DFE2DF] py-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                    Phone
                  </p>

                  <a
                    href="tel:+916360812255"
                    className="mt-2 inline-block text-[16px] font-semibold !text-[#545A5B] transition-colors duration-200 hover:!text-[#6D7E5A]"
                  >
                    +91 6360812255
                  </a>
                </div>

                {/* Email */}

                <div className="border-b border-[#DFE2DF] py-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                    Email
                  </p>

                  <a
                    href="mailto:info@teammateshrsolutions.com"
                    className="mt-2 inline-block break-all text-[16px] font-semibold !text-[#545A5B] transition-colors duration-200 hover:!text-[#6D7E5A]"
                  >
                    info@teammateshrsolutions.com
                  </a>
                </div>

                {/* Office */}

                <div className="py-6">
                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                    Office
                  </p>

                  <p className="mt-2 max-w-[430px] text-[15px] leading-7 !text-[#545A5B]">
                    #2065, 3rd Stage, 16th &quot;B&quot; Cross,
                    <br />
                    Mother Dairy Cross,
                    <br />
                    Yelahanka New Town,
                    <br />
                    Bangalore – 560064
                  </p>
                </div>
              </div>
            </div>

            {/* ENQUIRY FORM CARD */}

            <div className="rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-8 lg:p-10">
              <div className="max-w-[680px]">
                <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
                  Send an Enquiry
                </p>

                <h2 className="mt-4 !text-[#545A5B]">
                  How can we help?
                </h2>

                <form
                  onSubmit={handleSubmit}
                  className="mt-8 space-y-5"
                >
                  {/* Name + Email */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-[12px] font-semibold !text-[#545A5B]"
                      >
                        Full Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        autoComplete="name"
                        required
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FFFFFF] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-[12px] font-semibold !text-[#545A5B]"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FFFFFF] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A] focus:ring-0"
                      />
                    </div>
                  </div>

                  {/* Phone + Enquiry Type */}

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-[12px] font-semibold !text-[#545A5B]"
                      >
                        Phone Number
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91"
                        autoComplete="tel"
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FFFFFF] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A] focus:ring-0"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="enquiry-type"
                        className="mb-2 block text-[12px] font-semibold !text-[#545A5B]"
                      >
                        I am a
                      </label>

                      <select
                        id="enquiry-type"
                        name="enquiryType"
                        required
                        defaultValue=""
                        className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FFFFFF] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A] focus:ring-0"
                      >
                        <option value="" disabled>
                          Select an option
                        </option>

                        <option value="candidate">
                          Job Seeker
                        </option>

                        <option value="employer">
                          Employer
                        </option>

                        <option value="other">
                          Other
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Subject */}

                  <div>
                    <label
                      htmlFor="subject"
                      className="mb-2 block text-[12px] font-semibold !text-[#545A5B]"
                    >
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What would you like to discuss?"
                      required
                      className="h-12 w-full rounded-[10px] border border-[#DFE2DF] bg-[#FFFFFF] px-4 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A] focus:ring-0"
                    />
                  </div>

                  {/* Message */}

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-[12px] font-semibold !text-[#545A5B]"
                    >
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Tell us how we can help..."
                      required
                      className="w-full resize-y rounded-[10px] border border-[#DFE2DF] bg-[#FFFFFF] px-4 py-3 text-[14px] !text-[#545A5B] outline-none transition-colors focus:border-[#6D7E5A] focus:ring-0"
                    />
                  </div>

                  {/* Status Message */}

                  {status.message && (
                    <div
                      role="status"
                      aria-live="polite"
                      className={`rounded-[10px] border px-4 py-3 text-[13px] leading-6 ${
                        status.type === "success"
                          ? "border-[#6D7E5A]/30 bg-[#EEF0EE] !text-[#38472A]"
                          : "border-red-200 bg-red-50 !text-red-700"
                      }`}
                    >
                      {status.message}
                    </div>
                  )}

                  {/* Submit */}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-7 py-3 text-[13px] font-semibold tracking-[-0.01em] !text-white transition-all duration-300 hover:!bg-[#38472A] hover:!text-white disabled:cursor-not-allowed disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
                    >
                      <span className="!text-white">
                        {isSubmitting ? "Sending..." : "Send Enquiry"}
                      </span>

                      {!isSubmitting && (
                        <span
                          aria-hidden="true"
                          className="!text-white transition-transform duration-300 group-hover:translate-x-1"
                        >
                          →
                        </span>
                      )}
                    </button>
                  </div>

                  <p className="text-[12px] leading-5 !text-[#6F746F]">
                    By submitting this form, you agree to be contacted
                    regarding your enquiry.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          3. FIND US
      ========================================================= */}

      <section className="bg-[#FFFFFF]">
        <div className="mx-auto w-full max-w-[1280px] px-4 py-20 sm:px-6 md:px-8 md:py-24 lg:py-28">

          {/* SECTION INTRO */}

          <div className="max-w-[760px]">
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] !text-[#6D7E5A] sm:text-[12px]">
              Find Us
            </p>

            <h2 className="mt-5 !text-[#545A5B]">
              Visit the TeamMates{" "}
              <span className="!text-[#6D7E5A]">office.</span>
            </h2>

            <p className="mt-6 max-w-[650px] text-[16px] leading-7 !text-[#6F746F] sm:text-[17px] sm:leading-8">
              Our office is located in Yelahanka New Town, Bangalore. Visit us
              for recruitment, staffing and career-related enquiries.
            </p>
          </div>

          {/* ADDRESS + MAP */}

          <div className="mt-12 grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-stretch">

            {/* ADDRESS CARD */}

            <div className="flex flex-col justify-between rounded-[16px] border border-[#DFE2DF] bg-[#FFFFFF] p-7 sm:p-8">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.14em] !text-[#6D7E5A]">
                  TeamMates HR Solutions
                </p>

                <p className="mt-5 text-[16px] leading-7 !text-[#545A5B]">
                  #2065, 3rd Stage, 16th &quot;B&quot; Cross,
                  <br />
                  Mother Dairy Cross,
                  <br />
                  Yelahanka New Town,
                  <br />
                  Bangalore – 560064
                </p>
              </div>

              <div className="mt-8">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=TeamMates+HR+Solutions+Yelahanka+New+Town+Bangalore"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full !bg-[#6D7E5A] px-6 py-3 text-[13px] font-semibold !text-white transition-all duration-300 hover:!bg-[#38472A] hover:!text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6D7E5A] focus-visible:ring-offset-2"
                >
                  <span className="!text-white">
                    Get Directions
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

            {/* GOOGLE MAP */}

            <div className="min-h-[420px] overflow-hidden rounded-[16px] border border-[#DFE2DF] bg-[#EEF0EE] sm:min-h-[500px]">
              <iframe
                title="TeamMates HR Solutions office location"
                src="https://www.google.com/maps?q=TeamMates%20HR%20Solutions%2C%20Yelahanka%20New%20Town%2C%20Bangalore&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="min-h-[420px] border-0 sm:min-h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}