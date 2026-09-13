type SheetLeadPayload = {
  name: string;
  phone: string;
  email: string;
  formType: string;
  projectName: string;
  leadSource: string;
  agree:string;
};

export async function sendGoogleLeadToSheet(data: SheetLeadPayload) {
  try {
    const sheetWebhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (!sheetWebhookUrl) {
      throw new Error("Missing GOOGLE_SHEET_WEBHOOK_URL");
    }

    const response = await fetch(sheetWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    const responseText = await response.text();

    console.log("📄 Google Sheet Status:", response.status);
    console.log("📄 Google Sheet Response:", responseText);

    return {
      success: response.ok,
      status: response.status,
      data: responseText,
    };
  } catch (error: any) {
    console.error("❌ Google Sheet Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
