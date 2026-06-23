/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import { Container } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gulf Coast Underground. Visit us at 1109 Cowan Road, Unit B9, Gulfport, MS 39507 or email gcundergroundmission@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <BannerHero />

      {/* Identity + address + map */}
      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <img
                src="/images/logo-07.png"
                alt="Gulf Coast Underground, Missio Dei"
                className="mx-auto h-28 w-28 object-contain lg:mx-0"
              />
              <address className="mt-6 space-y-1 text-[15px] not-italic leading-relaxed text-mist-soft">
                <p className="font-semibold text-mist">
                  GC Underground · Missio Dei
                </p>
                <p>1109 Cowan Road</p>
                <p>Unit B9</p>
                <p>Gulfport, MS 39507</p>
                <p>
                  <a
                    href="mailto:gcundergroundmission@gmail.com"
                    className="text-teal hover:underline"
                  >
                    gcundergroundmission@gmail.com
                  </a>
                </p>
              </address>
            </div>

            <div className="overflow-hidden rounded-md border border-black/10 shadow-[0_2px_18px_rgba(0,0,0,0.06)]">
              <iframe
                title="Map to Gulf Coast Underground"
                src="https://maps.google.com/maps?q=1109%20Cowan%20Road%20Unit%20B9%20Gulfport%20MS%2039507&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-80 w-full lg:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* The one contact form (dark teal) */}
      <section className="bg-teal-darkest text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight text-white sm:text-5xl">
                Connect With Us
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
                Have an idea for a mission or ministry? Looking for support for
                an existing one? Complete the form so we can discover how to best
                serve you, learn more about your ministry, or help you get
                involved.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
