"use client";

import { useState } from "react";

const CONTACT_EMAIL = "gcundergroundmission@gmail.com";

const interests = [
  "I'm new, help me get connected",
  "Discovery Bible Study (DBS)",
  "Microchurch",
  "I want to start something new",
  "Ministry support / partnership",
  "Prayer request",
  "Something else",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const interest = String(data.get("interest") || "");
    const message = String(data.get("message") || "");

    const subject = `Website inquiry, ${interest || "General"}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Interest: ${interest}`,
      "",
      message,
    ].join("\n");

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
    setSubmitted(true);
  }

  const fieldClass =
    "w-full rounded-xl border border-black/10 bg-ink-card px-4 py-3 text-sm text-mist placeholder:text-mist-soft/60 outline-none transition-colors focus:border-teal";
  const labelClass =
    "mb-1.5 block text-xs font-semibold uppercase tracking-widest text-mist-soft";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className={labelClass} htmlFor="name">
          Name
        </label>
        <input
          id="name"
          name="name"
          required
          className={fieldClass}
          placeholder="Your name"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="email">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={fieldClass}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label className={labelClass} htmlFor="interest">
          I&apos;m reaching out about
        </label>
        <select
          id="interest"
          name="interest"
          className={fieldClass}
          defaultValue={interests[0]}
        >
          {interests.map((i) => (
            <option key={i} value={i} className="bg-ink-card">
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className={labelClass} htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={fieldClass}
          placeholder="Tell us a little about where you are and how we can help."
        />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
      >
        Send Message
      </button>

      {submitted && (
        <p className="text-center text-sm text-teal">
          Your email app should have opened with your message. If it
          didn&apos;t, email us directly at {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
