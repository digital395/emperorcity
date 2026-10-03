import { NextRequest, NextResponse } from "next/server";
import { sendGoogleLeadMail } from "@/lib/mail";
import { sendGoogleLeadToSheet } from "@/lib/googlesheet";

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
    const sheetResponse = await sendGoogleLeadToSheet({
      name,
      phone,
      email: email,
      formType: formtype,
      projectName,
      leadSource: leadSource,
      agree: agree,
    });

    console.log("Google Sheet Response:", sheetResponse);

    const source = "Google";
    const pixProjectName = "Emperor City";


    const webhookUrl =
      "https://crm.pixapp.in/api/v1/webhooks/google-form?token=343cc527a42cf3a2675641235214e70b5623e7670270b8d548e02f0d398cfa26";

    const webhookParams = new URLSearchParams({
      name,
      phone: phone,
      email: email || "",
      source:source,
      projectname: pixProjectName,
    });

    const pixUrl = `${webhookUrl}&${webhookParams.toString()}`;

    console.log("Pix CRM URL:", pixUrl);

    const pixResponse = await fetch(pixUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      cache: "no-store",
    });

    const pixResponseText = await pixResponse.text();

    console.log("Pix CRM Status:", pixResponse.status);
    console.log("Pix CRM Response:", pixResponseText);

    if (!pixResponse.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Lead email sent, but Pix CRM submission failed.",
          crmStatus: pixResponse.status,
          crmResponse: pixResponseText,
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
