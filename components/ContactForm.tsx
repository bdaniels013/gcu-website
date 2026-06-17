"use client";

import { useState } from "react";

const CONTACT_EMAIL = "gcundergroundmission@gmail.com";

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
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    const phone = String(data.get("phone") || "");
    const email = String(data.get("email") || "");
    const area = String(data.get("area") || "");
    const message = String(data.get("message") || "");

    const subject = "Website inquiry, Connect With Us";
    const body = [
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
      `Where they live: ${area}`,
      "",
      message,
    ].join("\n");

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
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
        className="rounded-[3px] bg-white px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-teal transition-colors hover:bg-white/90"
      >
        Send
      </button>

      {submitted && (
        <p className="text-sm text-white/80">
          Your email app should have opened with your message. If it
          didn&apos;t, email us directly at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
