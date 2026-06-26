"use client";

import { useState } from "react";

const CONTACT_EMAIL = "gcundergroundmission@gmail.com";

type Status = "idle" | "sending" | "sent" | "error";

const areas = [
  "Gulfport",
  "Biloxi",
  "Harrison County",
  "Hancock County",
  "Jackson County",
  "Elsewhere on the Gulf Coast",
  "Outside the Gulf Coast",
];

/** "Connect With Us" form, styled for the dark teal section (matches the live
 *  site's Connect form: Name, Phone, Email, where you live, Message). */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const formEl = e.currentTarget;
    const data = new FormData(formEl);
    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      area: String(data.get("area") || ""),
      message: String(data.get("message") || ""),
    };

    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus("sent");
        formEl.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg(data.error || "Sorry, something went wrong.");
        setStatus("error");
      }
    } catch {
      setErrorMsg("Couldn't reach the server. Please try again.");
      setStatus("error");
    }
  }

  const field =
    "w-full rounded-[3px] border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/50 outline-none transition-colors focus:border-white/60";
  const label =
    "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/70";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className={field}
            placeholder="Your name"
          />
        </div>
        <div>
          <label className={label} htmlFor="phone">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className={field}
            placeholder="(228) 000-0000"
          />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="email">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={field}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className={label} htmlFor="area">
          Where do you live?
        </label>
        <select id="area" name="area" className={field} defaultValue={areas[0]}>
          {areas.map((a) => (
            <option key={a} value={a} className="bg-teal-darkest">
              {a}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={label} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className={field}
          placeholder="Tell us a little about where you are and how we can help."
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="rounded-[3px] bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-teal transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "sending" ? "Sending…" : "Send"}
      </button>

      {status === "sent" && (
        <p className="text-sm font-medium text-white">
          Thanks! Your message has been sent. We&apos;ll be in touch soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-white/90">
          {errorMsg} You can also email us directly at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="underline">
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      )}
    </form>
  );
}
