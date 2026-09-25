import { NextRequest, NextResponse } from "next/server";
import { sendGoogleLeadMail } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { name, phone, email, agree, formtype, leadSource } = body;

    // -----------------------------
    // Validation
    // -----------------------------

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

    // -----------------------------
    // Project Name
    // -----------------------------

    let projectName = "Emperor City_gad";

    if (leadSource === "meta") {
      projectName = "Emperor City_meta";
    } else if (leadSource === "google") {
      projectName = "Emperor City_gad";
    }

    // -----------------------------
    // Send Email
    // -----------------------------

    const mailResponse = await sendGoogleLeadMail({
      name,
      phone,
      email: email || "",
      formType: formtype || "Enquiry Form",
      projectName,
      leadSource: leadSource || "direct",
      agree: Boolean(agree),
    });

    console.log("Mail Response:", mailResponse);

    if (!mailResponse.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Failed to send lead.",
          error: mailResponse.error,
        },
        { status: 500 },
      );
    }

    const webformid = "2";
    const moduletype = "Basic";
    const company_name = "HAPPYHOMES";
    const source = "Google";
    const medium = "Website";
    const rsoftProjectName = "Emperor City";
    const description = "I need a Plot";
    const location = "Tirunelveli";

    const rsoftParams = new URLSearchParams({
      webformid,
      moduletype,
      company_name,
      name,
      mobileno: phone,
      email: email || "",
      source,
      medium,
      projectname: rsoftProjectName,
      description,
      location,
    });

    const rsoftUrl = `https://www.thesalezrobot.com/public/api/WebformIntegration?${rsoftParams.toString()}`;

    console.log("RSoft CRM URL:", rsoftUrl);

    const rsoftResponse = await fetch(rsoftUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const rsoftResponseText = await rsoftResponse.text();

    console.log("RSoft CRM Status:", rsoftResponse.status);
    console.log("RSoft CRM Response:", rsoftResponseText);

    if (!rsoftResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead email sent, but RSoft CRM submission failed.",
          crmStatus: rsoftResponse.status,
          crmResponse: rsoftResponseText,
        },
        { status: 502 },
      );
    }


    return NextResponse.json(
      {
        success: true,
        message: "Lead submitted successfully.",
      },
      { status: 200 },
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
