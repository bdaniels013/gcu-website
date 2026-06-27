import { NextResponse } from "next/server";
import { sendMinistryEmail } from "@/lib/resendMail";

export async function POST(req: Request) {
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

  const result = await sendMinistryEmail({
    subject: `Website inquiry from ${name}`,
    replyTo: email,
    text: [
      `Name:  ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      `Where they live: ${area || "—"}`,
      "",
      message,
    ].join("\n"),
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ ok: true });
}
