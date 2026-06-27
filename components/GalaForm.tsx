"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { galaSponsorTiers, galaTickets } from "@/lib/event";

const CONTACT_EMAIL = "gcundergroundmission@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";
type Intent = "tickets" | "table" | "sponsor";

const individual = galaTickets.find((t) => t.name === "Individual Ticket");
const table = galaTickets.find((t) => t.name === "Mission Table");

const intentOptions: { id: Intent; label: string; sub: string }[] = [
  {
    id: "tickets",
    label: "Individual Tickets",
    sub: individual ? `${individual.price} per guest` : "Per guest",
  },
  {
    id: "table",
    label: "Reserve a Table",
    sub: table ? `${table.price} · seats 8` : "Seats 8",
  },
  {
    id: "sponsor",
    label: "Sponsorship",
    sub: "Partner with the mission",
  },
];

export function GalaForm() {
  const params = useSearchParams();
  const typeParam = params.get("type");
  const levelParam = params.get("level") || "";
  const initialIntent: Intent =
    typeParam === "sponsor" ? "sponsor" : typeParam === "table" ? "table" : "tickets";

  const [intent, setIntent] = useState<Intent>(initialIntent);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const payload = {
      intent,
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      phone: String(data.get("phone") || ""),
      ticketQty: String(data.get("ticketQty") || ""),
      tableQty: String(data.get("tableQty") || ""),
      sponsorLevel: String(data.get("sponsorLevel") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/gala", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        formEl.reset();
      } else {
        const d = await res.json().catch(() => ({}));
        setErrorMsg(d.error || "Sorry, something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="rounded-xl border border-teal/20 bg-ink p-8 text-center">
        <h3 className="text-xl font-medium uppercase tracking-tight text-mist">
          Thank you!
        </h3>
        <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-mist-soft">
          Your gala inquiry has been sent. We&apos;ll be in touch soon with the
          details.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-[3px] border border-black/15 bg-white px-4 py-3 text-sm text-mist outline-none transition-colors focus:border-teal focus:ring-1 focus:ring-teal";
  const label =
    "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist-soft";

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Intent selector */}
      <fieldset>
        <legend className={label}>I&apos;m interested in</legend>
        <div className="grid gap-3 sm:grid-cols-3">
          {intentOptions.map((o) => {
            const active = intent === o.id;
            return (
              <button
                key={o.id}
                type="button"
                onClick={() => setIntent(o.id)}
                aria-pressed={active}
                className={`cursor-pointer rounded-lg border p-4 text-left transition-colors ${
                  active
                    ? "border-teal bg-teal/[0.06] ring-1 ring-teal"
                    : "border-black/10 hover:border-teal/40"
                }`}
              >
                <span
                  className={`block text-sm font-semibold ${
                    active ? "text-teal" : "text-mist"
                  }`}
                >
                  {o.label}
                </span>
                <span className="mt-0.5 block text-xs text-mist-soft">
                  {o.sub}
                </span>
              </button>
            );
          })}
        </div>
      </fieldset>

      {/* Contact info */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="g-name">
            Name
          </label>
          <input
            id="g-name"
            name="name"
            required
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={label} htmlFor="g-phone">
            Phone
          </label>
          <input
            id="g-phone"
            name="phone"
            type="tel"
            className={field}
            placeholder="(228) 000-0000"
          />
        </div>
      </div>
      <div>
        <label className={label} htmlFor="g-email">
          Email
        </label>
        <input
          id="g-email"
          name="email"
          type="email"
          required
          className={field}
          placeholder="you@example.com"
        />
      </div>

      {/* Conditional fields */}
      {intent === "tickets" && (
        <div>
          <label className={label} htmlFor="g-ticketQty">
            How many tickets?
          </label>
          <input
            id="g-ticketQty"
            name="ticketQty"
            type="number"
            min={1}
            defaultValue={1}
            className={`${field} max-w-[140px]`}
          />
          {individual && (
            <p className="mt-1.5 text-xs text-mist-soft">
              {individual.price} per guest · includes dinner &amp; program.
            </p>
          )}
        </div>
      )}
      {intent === "table" && (
        <div>
          <label className={label} htmlFor="g-tableQty">
            How many tables?
          </label>
          <input
            id="g-tableQty"
            name="tableQty"
            type="number"
            min={1}
            defaultValue={1}
            className={`${field} max-w-[140px]`}
          />
          {table && (
            <p className="mt-1.5 text-xs text-mist-soft">
              {table.price} per table · seats 8 guests.
            </p>
          )}
        </div>
      )}
      {intent === "sponsor" && (
        <div>
          <label className={label} htmlFor="g-sponsorLevel">
            Sponsorship level
          </label>
          <select
            id="g-sponsorLevel"
            name="sponsorLevel"
            defaultValue={levelParam || galaSponsorTiers[0].name}
            className={field}
          >
            {galaSponsorTiers.map((t) => (
              <option key={t.name} value={t.name}>
                {t.name} — {t.price}
              </option>
            ))}
          </select>
          <p className="mt-1.5 text-xs text-mist-soft">
            Not sure yet? Pick the closest level and we&apos;ll help you
            finalize.
          </p>
        </div>
      )}

      {/* Message */}
      <div>
        <label className={label} htmlFor="g-message">
          Anything else? <span className="lowercase">(optional)</span>
        </label>
        <textarea
          id="g-message"
          name="message"
          rows={3}
          className={field}
          placeholder="Questions, guest names, dietary needs, etc."
        />
      </div>

      <div className="flex flex-col items-start gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex cursor-pointer items-center justify-center rounded-[3px] bg-orange px-8 py-3.5 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Submit Inquiry"}
        </button>
        {status === "error" && (
          <p className="text-sm text-mist-soft">
            {errorMsg} You can also email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-teal underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
