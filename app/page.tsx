import Link from "next/link";
import { ButtonLink, Card, Container, Eyebrow } from "@/components/ui";
import { featuredEvent } from "@/lib/event";

const pillars = [
  {
    title: "Sit at Jesus' Feet",
    body: "Everything starts here — learning to listen, to abide, and to be formed by the One we follow before we ever do a thing for Him.",
  },
  {
    title: "Live in Community",
    body: "We were never meant to follow Jesus alone. We share life in small, family-sized communities across the coast.",
  },
  {
    title: "Gospel Transformation",
    body: "As we're changed by the good news, that change spills out — into our homes, our streets, and the world around us.",
  },
];

const paths = [
  {
    title: "Start Something New",
    body: "Got a God-given idea or a ministry stirring in your heart? We help you take the first step and walk with you as you build.",
    href: "/discover-your-part",
    cta: "Start here",
  },
  {
    title: "Get Ministry Support",
    body: "Already leading something? We come alongside existing ministries with coaching, resources, and partnership.",
    href: "/connect",
    cta: "Partner with us",
  },
  {
    title: "Get Connected",
    body: "Just looking for a place to belong? Find a Discovery Bible Study or microchurch near you and join the family.",
    href: "/connect",
    cta: "Find community",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-[-10%] h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-teal/15 blur-3xl" />
          <div className="absolute right-[5%] top-[30%] h-72 w-72 rounded-full bg-amber/10 blur-3xl" />
        </div>
        <Container className="py-24 text-center sm:py-32">
          <Eyebrow>A Mission Hub on the Gulf Coast</Eyebrow>
          <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight text-mist sm:text-7xl">
            Discover how to live{" "}
            <span className="text-teal">on mission</span> right where you are.
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-mist-soft">
            Gulf Coast Underground exists to advance the{" "}
            <em className="text-mist">Missio Dei</em> — the mission of God — by
            equipping everyday people for discipleship in their everyday context.
            We&apos;re not here to recruit you for our needs; we&apos;re here to
            help you discover yours.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/discover-your-part">Discover Your Part</ButtonLink>
            <ButtonLink href="/events" variant="ghost">
              See what&apos;s happening
            </ButtonLink>
          </div>
        </Container>
      </section>

      {/* Featured event strip */}
      <section className="border-y border-white/10 bg-ink-soft">
        <Container className="flex flex-col items-center justify-between gap-5 py-8 sm:flex-row">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-amber">
              Next Gathering
            </p>
            <p className="mt-1 text-lg font-semibold text-mist">
              {featuredEvent.title} —{" "}
              <span className="text-mist-soft">{featuredEvent.tagline}</span>
            </p>
          </div>
          <ButtonLink href="/events" variant="secondary">
            View Events
          </ButtonLink>
        </Container>
      </section>

      {/* Mission statement */}
      <Container className="py-20 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>What We Mean by Discipleship</Eyebrow>
          <p className="mt-6 text-2xl font-medium leading-relaxed text-mist sm:text-3xl">
            &ldquo;Discipleship simply means to learn and discover how to live in
            missional rhythms in our everyday context.&rdquo;
          </p>
          <p className="mt-6 text-base leading-relaxed text-mist-soft">
            We&apos;re a mission hub — a place that equips people rather than
            recruiting them to serve an organization&apos;s needs. Our heart is
            to see disciples who make disciples, all across the Mississippi Gulf
            Coast.
          </p>
        </div>
      </Container>

      {/* Three pillars */}
      <section className="border-t border-white/10 bg-ink-soft">
        <Container className="py-20 sm:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Our Rhythm</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              Three movements that shape everything we do
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {pillars.map((p, i) => (
              <Card key={p.title}>
                <span className="text-sm font-bold text-amber">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-semibold text-mist">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-soft">
                  {p.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Three paths / CTAs */}
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Eyebrow>Where Do You Fit?</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
            However God is moving in you, there&apos;s a next step
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {paths.map((p) => (
            <Card key={p.title} className="flex flex-col">
              <h3 className="text-xl font-semibold text-mist">{p.title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-soft">
                {p.body}
              </p>
              <Link
                href={p.href}
                className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-teal hover:gap-2"
              >
                {p.cta}
                <span aria-hidden>→</span>
              </Link>
            </Card>
          ))}
        </div>
      </Container>

      {/* Closing CTA */}
      <section className="border-t border-white/10 bg-gradient-to-b from-ink-soft to-ink">
        <Container className="py-24 text-center">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-mist sm:text-4xl">
            There&apos;s room for you at the table.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-mist-soft">
            Come sit at the feet of Jesus, share life in community, and discover
            the part you were made to play.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/connect">Get Connected</ButtonLink>
            <ButtonLink href="/support" variant="ghost">
              Support the Mission
            </ButtonLink>
          </div>
        </Container>
      </section>
    </>
  );
}
