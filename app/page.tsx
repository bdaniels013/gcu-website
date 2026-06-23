/* eslint-disable @next/next/no-img-element */
import { Container, Eyebrow } from "@/components/ui";
import { TornDivider } from "@/components/TornDivider";
import { CalendarView } from "@/components/CalendarView";
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
    body: "We always have a number of micro-churches, IDE's (Intentional Discipleship Environments) and/or DBS (Discovery Bible Studies) running in our community. Check the calendar and join us this week.",
    cta: "Get Connected",
    href: "/#calendar",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero, Gulf Coast banner with teal overlay + white wordmark.
          Height is kept close to the 3:1 banner so the full image (all four
          coast panels) stays visible instead of the sides being cropped. */}
      <section className="relative isolate flex min-h-[440px] items-center justify-center overflow-hidden sm:min-h-[500px] lg:min-h-[540px]">
        <img
          src="/images/quadrant-3.jpg"
          alt=""
          aria-hidden
          className="animate-kenburns absolute inset-0 -z-20 h-full w-full scale-100 object-cover brightness-105 saturate-[1.15]"
        />
        {/* light teal tint that keeps the coast imagery bright + vivid (like
            the live site), with a soft darkening only at the very bottom so the
            torn edge blends into the charcoal band below */}
        <div className="absolute inset-0 -z-10 bg-teal/45" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-transparent to-teal-darkest/50" />

        <Container className="py-14 text-center">
          <img
            src="/images/logo-06.png"
            alt="Gulf Coast Underground, Missio Dei"
            className="animate-rise mx-auto w-[92%] max-w-4xl drop-shadow-[0_6px_36px_rgba(0,0,0,0.4)]"
          />
          <p
            className="animate-rise mx-auto mt-6 max-w-2xl text-sm font-semibold uppercase tracking-[0.3em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)] sm:text-base"
            style={{ animationDelay: "0.12s" }}
          >
            Advancing the Missio Dei on the Mississippi Gulf Coast
          </p>
          <div
            className="animate-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.24s" }}
          >
            <a
              href="#calendar"
              className="rounded-[3px] bg-white px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-teal shadow-lg shadow-teal-darkest/30 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Become a Part
            </a>
            <Link
              href="/gala"
              className="rounded-[3px] border-2 border-white/70 px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              The Gala
            </Link>
          </div>
        </Container>

        {/* scroll cue */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60">
          <span className="block text-[10px] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
        </div>
      </section>

      {/* Mission statement, Missio Dei (dark charcoal) */}
      <section className="relative bg-charcoal">
        {/* torn edges biting up into the hero and down into the next band */}
        <TornDivider fill="fill-charcoal" position="top" />
        <TornDivider fill="fill-charcoal" position="bottom" />
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
              <span className="font-semibold text-white">Missio&nbsp;Dei</span>{" "}
              is the Latin phrase meaning the Mission of God. The GC Underground
              exists to advance the Missio Dei on the Mississippi Gulf Coast,
              and we accomplish that by focusing on what Christ called
              &ldquo;making disciples.&rdquo; Discipleship is a fairly simple
              concept at the Underground, it simply means to learn and discover
              how to live in missional rhythms in our everyday context, which is
              fueled and grows by deep intimate relationship that only comes
              from sitting at the feet of Jesus and living in regular community
              with other believers. This is how we learn what it means to follow
              Christ. It is an obedience-based approach, but it is very
              important to understand that obedience is a heart posture as
              opposed to a list of do&apos;s and don&apos;ts. We seek to obey
              the Lord in all things, not to obtain His approval but because we
              realize who He is and what He did for us&hellip;because we love
              Him and He is worthy of our obedience.
            </p>
            <p>
              As we experience the transformational power of the Gospel in our
              lives it begins to impact the world around us, ultimately bringing
              Him glory, which is our reason for living. One of the biggest
              things that sets us apart is our approach to
              &ldquo;gathering&rdquo; and &ldquo;mission.&rdquo; We do not
              believe that discipleship, and ultimately God&apos;s Mission, are
              best carried out by recruiting people to serve our organization.
              Our approach is actually the opposite&hellip;as each individual
              learns to sit at the feet of Jesus and hear His voice, they will
              discover what the Lord is calling them to do,{" "}
              <span className="font-semibold text-white">
                and we exist to equip and support
              </span>{" "}
              each person to succeed at their calling! And, since we operate as
              a mission hub, we are set up to work with everyone, whether you
              are part of one of our micro-churches or another local church in
              our community. We look forward to meeting you!
            </p>
          </div>
        </Container>
      </section>

      {/* Become a Part of the Underground, alternating rows */}
      <section className="bg-ink">
        <Container className="py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-teal">
              Get Involved
            </p>
            <h2 className="mt-3 text-4xl font-medium uppercase leading-[1.05] tracking-tight text-mist sm:text-5xl">
              Become a Part of the Underground.
            </h2>
            <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-amber" />
          </div>

          {/* This month at the Underground — weekly studies + the gala.
              The full calendar (with add-to-calendar buttons) lives here now. */}
          <div id="calendar" className="mx-auto mt-10 max-w-4xl">
            <p className="text-center text-[15px] leading-relaxed text-mist-soft">
              A great first step is simply showing up. Here&apos;s what&apos;s
              happening this month at the Underground.
            </p>
            <div className="mt-8">
              <CalendarView />
            </div>
          </div>

          <div className="mt-16 space-y-7">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className={`group grid overflow-hidden rounded-2xl border border-black/[0.06] bg-ink-soft shadow-[0_2px_24px_rgba(16,32,31,0.06)] transition-shadow hover:shadow-[0_14px_40px_rgba(16,32,31,0.12)] md:grid-cols-2 ${
                  i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={c.photo}
                    alt=""
                    className="h-60 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 md:h-full"
                  />
                  <span className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-medium text-teal shadow">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-8 sm:p-12">
                  <h3 className="text-xl font-medium uppercase leading-snug tracking-tight text-mist sm:text-2xl">
                    {c.title}
                  </h3>
                  <p className="mt-4 text-[15px] leading-relaxed text-mist-soft">
                    {c.body}
                  </p>
                  <div className="mt-6">
                    <Link
                      href={c.href}
                      className="inline-flex items-center gap-2 rounded-[3px] bg-teal px-6 py-3 text-sm font-medium uppercase tracking-wide text-white transition-all hover:gap-3 hover:bg-teal-deep"
                    >
                      {c.cta}
                      <span aria-hidden>→</span>
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
          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-medium uppercase tracking-tight text-mist">
            Tell us what God is stirring in you.
          </h2>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-[3px] bg-teal px-7 py-3 text-sm font-medium uppercase tracking-wide text-white transition-colors hover:bg-teal-deep"
            >
              Connect With Us
            </Link>
            <Link
              href="/support"
              className="rounded-[3px] border-2 border-teal px-7 py-3 text-sm font-medium uppercase tracking-wide text-teal transition-colors hover:bg-teal/[0.06]"
            >
              Support the Mission
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
