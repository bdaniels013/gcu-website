import type { Metadata } from "next";
import {
  ButtonLink,
  Card,
  Container,
  Eyebrow,
  PageHero,
} from "@/components/ui";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Our background, our manifesto, and how Gulf Coast Underground is organized as a mission hub on the Mississippi Gulf Coast.",
};

const manifesto = [
  {
    claim: "We are sent, not gathered.",
    body: "The church doesn't have a mission so much as the mission has a church. We exist to join what God is already doing on the Gulf Coast.",
  },
  {
    claim: "We equip people, not recruit them.",
    body: "A mission hub releases people into their calling. We're not here to fill our own roster, we're here to help you find yours.",
  },
  {
    claim: "We disciple in everyday rhythms.",
    body: "Discipleship happens at kitchen tables, on job sites, and in neighborhoods, not only in a building on a Sunday.",
  },
  {
    claim: "We make disciples who make disciples.",
    body: "Multiplication, not addition. Every follower of Jesus is a potential disciple-maker, and we equip them to be exactly that.",
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A mission hub advancing the Missio Dei on the Gulf Coast."
        subtitle="We're a grassroots family of disciples learning together how to live on mission in our everyday context across the Mississippi Gulf Coast."
      />

      {/* Our Background */}
      <Container className="py-20">
        <div id="background" className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Our Background</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist">
              Why we exist
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-mist-soft">
            <p>
              Gulf Coast Underground began with a simple conviction: that the
              good news of Jesus is meant to move through ordinary people in
              ordinary places. Rather than building one more program, we set out
              to build a <span className="text-mist">hub</span>, a place that
              equips and releases everyday disciples.
            </p>
            <p>
              The name says it. <span className="text-mist">Gulf Coast</span>{" "}
              roots us in the people and places of coastal Mississippi.{" "}
              <span className="text-mist">Underground</span> reflects a movement
              that grows quietly and organically, relationship by relationship,
              home by home, neighborhood by neighborhood.
            </p>
            <p>
              We believe discipleship simply means learning and discovering how
              to live in missional rhythms in our everyday context. That belief
              shapes everything that follows.
            </p>
          </div>
        </div>
      </Container>

      {/* Our Manifesto */}
      <section id="manifesto" className="border-y border-black/10 bg-ink-soft">
        <Container className="py-20">
          <div className="max-w-2xl">
            <Eyebrow>Our Manifesto</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              What we believe to be true
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {manifesto.map((m) => (
              <Card key={m.claim}>
                <h3 className="text-lg font-semibold text-teal">{m.claim}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-soft">
                  {m.body}
                </p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Organization */}
      <Container className="py-20">
        <div id="organization" className="grid gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <Eyebrow>Our Organization</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist">
              How we&apos;re structured
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-mist-soft">
            <p>
              We function as a decentralized network rather than a single
              congregation. At the center is the{" "}
              <span className="text-mist">hub</span>, a team that trains,
              resources, and coaches. Out from the hub are{" "}
              <span className="text-mist">microchurches</span> and{" "}
              <span className="text-mist">Discovery Bible Studies</span> spread
              across the coast.
            </p>
            <p>
              This keeps us light and reproducible. Anyone can start a DBS in
              their home. Anyone can be discipled and learn to disciple others.
              The hub exists to serve and multiply that movement, never to
              centralize it.
            </p>
            <div className="pt-2">
              <ButtonLink href="/connect">See how to connect</ButtonLink>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
