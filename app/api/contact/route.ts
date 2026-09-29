import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase-server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      enquiryType,
      subject,
      message,
    } = body;

    // Server-side validation
    if (!name || !email || !enquiryType || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

    // Save enquiry to Supabase
    const { error } = await supabase.from("contacts").insert({
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || null,
      enquiry_type: enquiryType,
      subject: subject.trim(),
      message: message.trim(),
    });

    if (error) {
      console.error("Supabase contact error:", error);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to submit your enquiry. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}