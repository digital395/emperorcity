import nodemailer from "nodemailer";

type LeadMailPayload = {
  name: string;
  phone: string;
  email: string;
  formType: string;
  projectName: string;
  leadSource: string;
  agree: boolean;
};

export async function sendGoogleLeadMail(data: LeadMailPayload) {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Emperor City Landing Page Leads" <${process.env.EMAIL_USER}>`,
      to: ["antony@happyhomes.org.in", "clientservicing@blackcoffeebrands.co.in"],
      subject: "New Google Lead - Emperor City",
  html: `
    <h2>New Lead Received</h2>

    <table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;">
      <tr>
        <td><strong>Name</strong></td>
        <td>${data.name}</td>
      </tr>
      <tr>
        <td><strong>Phone</strong></td>
        <td>${data.phone}</td>
      </tr>
      <tr>
        <td><strong>Email</strong></td>
        <td>${data.email || "-"}</td>
      </tr>
      <tr>
        <td><strong>Project</strong></td>
        <td>${data.projectName}</td>
      </tr>
      <tr>
        <td><strong>Lead Source</strong></td>
        <td>${data.leadSource}</td>
      </tr>
      <tr>
        <td><strong>Form Type</strong></td>
        <td>${data.formType}</td>
      </tr>
    
      <tr>
        <td><strong>Consent</strong></td>
        <td>${data.agree ? "Yes" : "No"}</td>
      </tr>
    </table>
  `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("📧 Google Lead Email Sent:", info.response);

    return {
      success: true,
      response: info.response,
    };
  } catch (error: any) {
    console.error("❌ Email Send Error:", error);

    return {
      success: false,
      error: error.message,
    };
  }
}
