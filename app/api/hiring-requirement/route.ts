import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      company,
      contactName,
      email,
      phone,
      jobTitle,
      requirementDetails,
    } = body;

    if (
      !company ||
      !contactName ||
      !email ||
      !phone ||
      !jobTitle ||
      !requirementDetails
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("hiring_requirements")
      .insert({
        company: company.trim(),
        contact_name: contactName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        job_title: jobTitle.trim(),
        requirement_details: requirementDetails.trim(),
      });

    if (error) {
      console.error("Supabase hiring requirement error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your hiring requirement. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your hiring requirement has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Hiring requirement API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}