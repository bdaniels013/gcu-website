import { NextResponse } from "next/server";
import { sendMinistryEmail } from "@/lib/resendMail";

const INTENT_LABEL: Record<string, string> = {
  tickets: "Individual Tickets",
  table: "Mission Table",
  sponsor: "Sponsorship",
};

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
  const intent = (body.intent ?? "").trim();
  const ticketQty = (body.ticketQty ?? "").trim();
  const tableQty = (body.tableQty ?? "").trim();
  const sponsorLevel = (body.sponsorLevel ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email) {
    return NextResponse.json(
      { error: "Please fill in your name and email." },
      { status: 400 },
    );
  }

  const intentLabel = INTENT_LABEL[intent] ?? "Gala inquiry";
  const detailLines: string[] = [];
  if (intent === "tickets") detailLines.push(`Tickets requested: ${ticketQty || "—"}`);
  if (intent === "table") detailLines.push(`Tables requested: ${tableQty || "—"}`);
  if (intent === "sponsor") detailLines.push(`Sponsorship level: ${sponsorLevel || "—"}`);

  const result = await sendMinistryEmail({
    subject: `Gala — ${intentLabel} — ${name}`,
    replyTo: email,
    text: [
      `GALA INQUIRY — ${intentLabel}`,
      "",
      `Name:  ${name}`,
      `Email: ${email}`,
      `Phone: ${phone || "—"}`,
      ...detailLines,
      "",
      message || "(no additional message)",
    ].join("\n"),
  });

  if (!result.ok) {
    return NextResponse.json({ error: result.error }, { status: result.status });
  }
  return NextResponse.json({ ok: true });
}
