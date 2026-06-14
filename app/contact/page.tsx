import type { Metadata } from "next";
import { Container, Eyebrow, PageHero } from "@/components/ui";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gulf Coast Underground. Visit us at 1109 Cowan Road, Unit B9, Gulfport, MS 39507 or email gcundergroundmission@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="We'd love to hear from you."
        subtitle="Questions, prayer requests, or ready to get connected? Reach out — there's a real person on the other end who'd love to walk with you."
      />

      <Container className="py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          {/* Details */}
          <div>
            <Eyebrow>Visit & Connect</Eyebrow>
            <h2 className="mt-3 text-2xl font-bold text-mist">
              Find us on the coast
            </h2>

            <dl className="mt-8 space-y-7">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-teal">
                  Address
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-mist-soft">
                  1109 Cowan Road, Unit B9
                  <br />
                  Gulfport, MS 39507
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-teal">
                  Email
                </dt>
                <dd className="mt-2 text-base text-mist-soft">
                  <a
                    href="mailto:gcundergroundmission@gmail.com"
                    className="hover:text-mist"
                  >
                    gcundergroundmission@gmail.com
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-teal">
                  Gather With Us
                </dt>
                <dd className="mt-2 text-base leading-relaxed text-mist-soft">
                  Discovery Bible Studies and microchurches meet throughout the
                  week across the Gulf Coast. Reach out and we&apos;ll connect you
                  with the group nearest you.
                </dd>
              </div>
            </dl>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10">
              <iframe
                title="Map to Gulf Coast Underground"
                src="https://maps.google.com/maps?q=1109%20Cowan%20Road%20Unit%20B9%20Gulfport%20MS%2039507&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full grayscale-[0.3]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-ink-soft p-8">
            <h2 className="text-2xl font-bold text-mist">Send us a message</h2>
            <p className="mt-2 text-sm text-mist-soft">
              Fill this out and your email app will open with your message ready
              to send. Prefer email? Write us directly at{" "}
              <a
                href="mailto:gcundergroundmission@gmail.com"
                className="text-teal hover:underline"
              >
                gcundergroundmission@gmail.com
              </a>
              .
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
