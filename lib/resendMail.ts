import { Resend } from "resend";

// Inquiries are delivered to the ministry inbox, sent from an address on the
// Resend-verified domain (mail.gulfcoastunderground.org). Override the sender
// with the CONTACT_FROM env var if needed.
const TO_EMAIL = "gcundergroundmission@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM ??
  "GC Underground <noreply@mail.gulfcoastunderground.org>";

export type SendResult =
  | { ok: true }
  | { ok: false; status: number; error: string };

/** Send a plain-text inquiry to the ministry inbox via Resend. */
export async function sendMinistryEmail(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<SendResult> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { ok: false, status: 500, error: "Email is not configured yet." };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: opts.replyTo,
    subject: opts.subject,
    text: opts.text,
  });

  if (error) {
    console.error("Resend send error:", error);
    return {
      ok: false,
      status: 502,
      error: "Sorry, something went wrong sending your message.",
    };
  }

  return { ok: true };
}
