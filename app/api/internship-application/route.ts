import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const fullName = formData.get("fullName")?.toString() || "";
    const email = formData.get("email")?.toString() || "";
    const phone = formData.get("phone")?.toString() || "";
    const qualification =
      formData.get("qualification")?.toString() || "";

    const specialization =
      formData.get("specialization")?.toString() || "";

    const college =
      formData.get("college")?.toString() || "";

    const currentStatus =
      formData.get("currentStatus")?.toString() || "";

    const location =
      formData.get("location")?.toString() || "";

    const message =
      formData.get("message")?.toString() || "";

    if (!fullName || !email || !phone || !qualification) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    const { error } = await supabase
      .from("internship_applications")
      .insert({
        full_name: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        educational_qualification: qualification.trim(),

        specialization: specialization.trim() || null,
        college_institution: college.trim() || null,
        current_status: currentStatus.trim() || null,
        preferred_location: location.trim() || null,

        resume_url: null,
        message: message.trim() || null,
      });

    if (error) {
      console.error(
        "Supabase internship application error:",
        error
      );

      return NextResponse.json(
        {
          success: false,
          message:
            "Unable to submit your internship application. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your internship application has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(
      "Internship application API error:",
      error
    );

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}