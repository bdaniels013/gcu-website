import { NextResponse } from "next/server";
import { Resend } from "resend";

// Inquiries are delivered to the ministry inbox, sent from an address on the
// Resend-verified domain. Override the sender with the CONTACT_FROM env var if
// you use a different verified domain or local-part.
const TO_EMAIL = "gcundergroundmission@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM ??
  "GC Underground <noreply@gulfcoastunderground.org>";

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured yet." },
      { status: 500 },
    );
  }

  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const area = (body.area ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email, and a message." },
      { status: 400 },
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `Website inquiry from ${name}`,
    text: [
      `Name:  ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Where they live: ${area || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      { error: "Sorry, something went wrong sending your message." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
