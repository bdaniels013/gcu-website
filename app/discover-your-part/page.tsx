import type { Metadata } from "next";
import { ButtonLink, Card, Container, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover Your Part",
  description:
    "Discover the part you were made to play in the mission of God — whether you're starting something new, seeking ministry support, or looking to get connected.",
};

const steps = [
  {
    n: "01",
    title: "Sit at His feet",
    body: "Before anything else, we listen. Discovering your part starts with discovering Jesus and what He's already stirring in you.",
  },
  {
    n: "02",
    title: "Name what you're carrying",
    body: "A burden for a neighborhood? A ministry idea? A gift you've been sitting on? Put words to it — that's where the journey begins.",
  },
  {
    n: "03",
    title: "Take the next faithful step",
    body: "You don't need the whole plan. We'll help you take one obedient step, then the next, with people walking beside you.",
  },
  {
    n: "04",
    title: "Multiply",
    body: "As you grow, you'll equip others. That's the heart of it — disciples who make disciples across the Gulf Coast.",
  },
];

const tracks = [
  {
    title: "I want to start something new",
    body: "You've got a God-given idea or a ministry stirring. We'll help you take the first step and walk with you as you build.",
    href: "/contact",
    cta: "Let's talk",
  },
  {
    title: "I need ministry support",
    body: "You're already leading something. We come alongside with coaching, resources, and genuine partnership.",
    href: "/connect",
    cta: "Get support",
  },
  {
    title: "I just want to get connected",
    body: "You're looking for a place to belong. Find a Discovery Bible Study or microchurch near you.",
    href: "/connect",
    cta: "Find your people",
  },
];

export default function DiscoverYourPartPage() {
  return (
    <>
      <PageHero
        eyebrow="Discover Your Part"
        title="You were made to play a part in the mission of God."
        subtitle="We're not here to recruit you for our needs — we're here to help you discover the part you were made for, and to equip you to live it out."
      />

      {/* Steps */}
      <Container className="py-20">
        <div className="max-w-2xl">
          <Eyebrow>The Journey</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
            How discovery happens
          </h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {steps.map((s) => (
            <Card key={s.n}>
              <span className="text-2xl font-bold text-amber">{s.n}</span>
              <h3 className="mt-3 text-xl font-semibold text-mist">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-soft">
                {s.body}
              </p>
            </Card>
          ))}
        </div>
      </Container>

      {/* Tracks */}
      <section className="border-t border-white/10 bg-ink-soft">
        <Container className="py-20">
          <div className="max-w-2xl">
            <Eyebrow>Where Are You Starting?</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              Pick the path that fits you
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {tracks.map((t) => (
              <Card key={t.title} className="flex flex-col">
                <h3 className="text-xl font-semibold text-mist">{t.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-soft">
                  {t.body}
                </p>
                <div className="mt-6">
                  <ButtonLink href={t.href} variant="secondary">
                    {t.cta}
                  </ButtonLink>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
