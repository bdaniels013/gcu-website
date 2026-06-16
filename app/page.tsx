/* eslint-disable @next/next/no-img-element */
import { ButtonLink, Container, Eyebrow } from "@/components/ui";
import { Logo } from "@/components/Logo";
import { featuredEvent } from "@/lib/event";

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
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-black/10 bg-ink-soft">
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal/[0.06] blur-3xl" />
        <Container className="relative flex flex-col items-center py-20 text-center sm:py-28">
          <Logo className="h-28 w-28" />
          <p className="mt-7 text-xs font-semibold uppercase tracking-[0.3em] text-teal">
            Gulf Coast Underground
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-[1.1] tracking-tight text-mist sm:text-5xl">
            Advancing the <span className="text-teal">Missio Dei</span> on the
            Mississippi Gulf Coast.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-mist-soft">
            We&apos;re a mission hub equipping everyday people to learn and
            discover how to live in missional rhythms in their everyday context.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact">Become a Part</ButtonLink>
            <ButtonLink href="/events" variant="ghost">
              See Upcoming Events
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Featured event strip */}
      <section className="border-b border-black/10 bg-teal">
        <Container className="flex flex-col items-center justify-between gap-5 py-6 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/70">
              Next Gathering
            </p>
            <p className="mt-1 text-lg font-semibold text-white">
              {featuredEvent.title} —{" "}
              <span className="text-white/80">{featuredEvent.tagline}</span>
            </p>
          </div>
          <ButtonLink
            href="/events"
            className="bg-white !text-teal hover:bg-white hover:opacity-90"
          >
            View Events
          </ButtonLink>
        </Container>
      </section>

      {/* Mission statement — Missio Dei */}
      <Container className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <Eyebrow>Missio Dei</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              The Mission of God
            </h2>
          </div>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-mist-soft">
            <p>
              <em className="font-semibold text-mist">Missio Dei</em> is the
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
              calling them to do, <span className="font-semibold text-mist">and
              we exist to equip and support</span> each person to succeed at
              their calling! And, since we operate as a mission hub, we are set
              up to work with everyone &mdash; whether you are part of one of our
              micro-churches or another local church in our community. We look
              forward to meeting you!
            </p>
          </div>
        </div>
      </Container>

      {/* Become a Part of the Underground — three CTA cards */}
      <section className="border-t border-black/10 bg-ink-soft">
        <Container className="py-20 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>Get Involved</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              Become a Part of the Underground.
            </h2>
          </div>
          <div className="mt-12 grid gap-7 md:grid-cols-3">
            {cards.map((c) => (
              <div
                key={c.title}
                className="flex flex-col overflow-hidden rounded-3xl border border-black/[0.07] bg-ink-card shadow-[0_2px_20px_rgba(16,32,31,0.05)] transition-shadow hover:shadow-[0_8px_30px_rgba(16,32,31,0.1)]"
              >
                <div className="aspect-[5/3] w-full overflow-hidden">
                  <img
                    src={c.photo}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-lg font-bold leading-snug text-mist">
                    {c.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-soft">
                    {c.body}
                  </p>
                  <div className="mt-6">
                    <ButtonLink href={c.href}>{c.cta}</ButtonLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Gulf Coast banner */}
      <section className="relative">
        <img
          src="/images/quadrant.jpg"
          alt="Scenes from the Mississippi Gulf Coast — Gulfport and Biloxi"
          className="h-64 w-full object-cover sm:h-80"
        />
        <div className="absolute inset-0 bg-teal/70" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              For the Mississippi Gulf Coast.
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-base text-white/85">
              From Gulfport to Biloxi and everywhere between — we&apos;re here to
              equip everyday disciples right where they are.
            </p>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <Container className="py-20 text-center sm:py-24">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-mist sm:text-4xl">
          We look forward to meeting you.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-mist-soft">
          Reach out and tell us what God is stirring in you — we&apos;d love to
          discover how to best serve and equip you.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink href="/contact">Connect With Us</ButtonLink>
          <ButtonLink href="/support" variant="ghost">
            Support the Mission
          </ButtonLink>
        </div>
      </Container>
    </>
  );
}
