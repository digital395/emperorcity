import { NextRequest, NextResponse } from "next/server";
import { sendGoogleLeadToSheet } from "@/lib/googlesheet";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, phone, email, agree, formtype, leadSource } = body;

    if (!name || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name and Phone are required.",
        },
        { status: 400 },
      );
    }

    if (!/^[A-Za-z\s]+$/.test(name)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid name.",
        },
        { status: 400 },
      );
    }

    if (!/^\d{10}$/.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          message: "Phone number must contain exactly 10 digits.",
        },
        { status: 400 },
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid email address.",
        },
        { status: 400 },
      );
    }

    let projectName = "Emperor City_gad";

    if (leadSource === "meta") {
      projectName = "Emperor City_meta";
    } else if (leadSource === "google") {
      projectName = "Emperor City_gad";
    } else {
      projectName = "Emperor City_gad";
    }

    const sheetResponse = await sendGoogleLeadToSheet({
      name,
      phone,
      email: email || "",
      formType: formtype,
      projectName,
      leadSource,
      agree: agree ? "Yes" : "No",
    });

    console.log("Sheet Response:", sheetResponse);

    return NextResponse.json(
      {
        success: sheetResponse.success,

        message: sheetResponse.success
          ? "Lead submitted successfully."
          : "One or more integrations failed.",

        sheet: sheetResponse,
      },
      {
        status: sheetResponse.success ? 200 : 500,
      },
    );
  } catch (error) {
    console.error("Lead API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 },
    );
  }
}
