/* eslint-disable @next/next/no-img-element */
import { Container, Eyebrow } from "@/components/ui";
import { featuredEvent } from "@/lib/event";
import Link from "next/link";

const cards = [
  {
    title: "Have an Idea for a Mission or Ministry?",
    photo: "/images/photo1.jpg",
    body: "We are always looking for new ideas to support. We would love to connect with you and hear all about what God is stirring in your heart in order to carry out His mission through your life! Complete the form so that we can discover how to best serve you.",
    cta: "Start Something New",
    href: "/contact",
  },
  {
    title: "Looking for Support for an Existing Mission or Ministry?",
    photo: "/images/photo2.jpg",
    body: "We are always looking for strategic partnerships through opportunities to support existing ministries which exist to advance the Missio Dei! Complete the form so that we can connect and learn more about your ministry.",
    cta: "Get Ministry Support",
    href: "/contact",
  },
  {
    title: "Looking for Community?",
    photo: "/images/photo3.jpg",
    body: "Looking for a place to belong? We'd love to help you find community and get connected with others living on mission across the Gulf Coast. Complete the form and we'll be in touch.",
    cta: "Get Connected",
    href: "/contact",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — Gulf Coast banner with teal overlay + white wordmark */}
      <section className="relative isolate flex min-h-[460px] items-center justify-center overflow-hidden sm:min-h-[560px]">
        <img
          src="/images/quadrant.jpg"
          alt=""
          aria-hidden
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-teal/85" />
        <Container className="py-20 text-center sm:py-28">
          <img
            src="/images/logo-06.png"
            alt="Gulf Coast Underground — Missio Dei"
            className="mx-auto w-full max-w-2xl"
          />
          <p className="mx-auto mt-8 max-w-2xl text-base font-medium uppercase tracking-[0.25em] text-white/85 sm:text-lg">
            Advancing the Missio Dei on the Mississippi Gulf Coast
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-white px-7 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-white/90"
            >
              Become a Part
            </Link>
            <Link
              href="/events"
              className="rounded-md border border-white/70 px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Upcoming Events
            </Link>
          </div>
        </Container>
      </section>

      {/* Featured event strip */}
      <section className="border-y border-teal-darkest/30 bg-teal-deep">
        <Container className="flex flex-col items-center justify-between gap-4 py-5 sm:flex-row">
          <p className="text-center text-sm font-medium text-white sm:text-left">
            <span className="font-bold uppercase tracking-wide">
              {featuredEvent.title}
            </span>{" "}
            <span className="text-white/75">— {featuredEvent.tagline}</span>
          </p>
          <Link
            href="/events"
            className="flex-none rounded-md bg-white px-5 py-2 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-white/90"
          >
            View Events
          </Link>
        </Container>
      </section>

      {/* Mission statement — Missio Dei (dark charcoal) */}
      <section className="bg-charcoal">
        <Container className="py-20 sm:py-24">
          <div className="flex flex-col items-center text-center">
            <img
              src="/images/icon.png"
              alt=""
              aria-hidden
              className="h-16 w-16 brightness-0 invert"
            />
            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              Missio Dei
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              The Mission of God
            </h2>
          </div>
          <div className="mx-auto mt-10 grid max-w-5xl gap-8 text-[15px] leading-relaxed text-white/75 md:grid-cols-2">
            <p>
              <span className="font-bold text-white">Missio Dei</span> is the
              Latin phrase meaning the Mission of God. The GC Underground exists
              to advance the Missio Dei on the Mississippi Gulf Coast, and we
              accomplish that by focusing on what Christ called &ldquo;making
              disciples.&rdquo; Discipleship is a fairly simple concept at the
              Underground &ndash; it simply means to learn and discover how to
              live in missional rhythms in our everyday context, which is fueled
              and grows by deep intimate relationship that only comes from
              sitting at the feet of Jesus and living in regular community with
              other believers. This is how we learn what it means to follow
              Christ. It is an obedience-based approach, but it is very important
              to understand that obedience is a heart posture as opposed to a
              list of do&apos;s and don&apos;ts. We seek to obey the Lord in all
              things, not to obtain His approval but because we realize who He is
              and what He did for us&hellip;because we love Him and He is worthy
              of our obedience.
            </p>
            <p>
              As we experience the transformational power of the Gospel in our
              lives it begins to impact the world around us, ultimately bringing
              Him glory, which is our reason for living. One of the biggest
              things that sets us apart is our approach to &ldquo;gathering&rdquo;
              and &ldquo;mission.&rdquo; We do not believe that discipleship, and
              ultimately God&apos;s Mission, are best carried out by recruiting
              people to serve our organization. Our approach is actually the
              opposite&hellip;as each individual learns to sit at the feet of
              Jesus and hear His voice, they will discover what the Lord is
              calling them to do, <span className="font-semibold text-white">and
              we exist to equip and support</span> each person to succeed at
              their calling! And, since we operate as a mission hub, we are set
              up to work with everyone &mdash; whether you are part of one of our
              micro-churches or another local church in our community. We look
              forward to meeting you!
            </p>
          </div>
        </Container>
      </section>

      {/* Become a Part of the Underground — alternating rows */}
      <section className="bg-ink">
        <Container className="py-20 sm:py-24">
          <h2 className="mx-auto max-w-3xl text-center text-4xl font-extrabold uppercase tracking-tight text-mist sm:text-5xl">
            Become a Part of the Underground.
          </h2>

          <div className="mt-14 space-y-8">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className={`flex flex-col overflow-hidden rounded-2xl bg-ink-soft shadow-[0_2px_20px_rgba(16,32,31,0.06)] md:flex-row ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-2/5">
                  <img
                    src={c.photo}
                    alt=""
                    className="h-56 w-full object-cover md:h-full"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center p-8 sm:p-10">
                  <h3 className="text-xl font-bold uppercase tracking-tight text-mist sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-mist-soft">
                    {c.body}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={c.href}
                      className="inline-flex rounded-md bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-deep"
                    >
                      {c.cta}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-black/10 bg-ink-soft">
        <Container className="py-16 text-center">
          <Eyebrow>We look forward to meeting you</Eyebrow>
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold tracking-tight text-mist">
            Tell us what God is stirring in you.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-md bg-teal px-7 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-deep"
            >
              Connect With Us
            </Link>
            <Link
              href="/support"
              className="rounded-md border border-teal/30 px-7 py-3 text-sm font-bold uppercase tracking-wide text-teal transition-colors hover:bg-teal/[0.06]"
            >
              Support the Mission
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
