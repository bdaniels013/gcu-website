/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Gulf Coast Underground. Visit us at 1109 Cowan Road, Unit B9, Gulfport, MS 39507 or email gcundergroundmission@gmail.com.",
};

export default function ContactPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left: identity + address */}
            <div className="text-center">
              <img
                src="/images/logo-07.png"
                alt="Gulf Coast Underground, Missio Dei"
                className="mx-auto h-28 w-28 object-contain"
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

              <h2 className="mt-8 text-xl font-medium uppercase tracking-tight text-mist">
                Looking to Connect?
              </h2>
              <div className="mt-4">
                <Link
                  href="/connect#connect-with-us"
                  className="inline-flex rounded-[3px] bg-teal px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
                >
                  Connect With Us
                </Link>
              </div>
            </div>

            {/* Right: map */}
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
    </>
  );
}
