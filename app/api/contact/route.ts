import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, pathway, message } = await req.json();

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Log submission server-side (visible in terminal during dev)
  console.log("=== Contact form submission ===");
  console.log(`Name:    ${name}`);
  console.log(`Email:   ${email}`);
  console.log(`Pathway: ${pathway || "not specified"}`);
  console.log(`Message: ${message}`);
  console.log("================================");

  // TODO: wire up email delivery (e.g. Resend, SendGrid, Nodemailer)
  // Example with Resend:
  //   await resend.emails.send({
  //     from: "contact@leadershipspark.ie",
  //     to: "gencoorkungenc@gmail.com",
  //     subject: `New enquiry from ${name}`,
  //     text: `From: ${name} <${email}>\nPathway: ${pathway}\n\n${message}`,
  //   });

  return NextResponse.json({ ok: true });
}
