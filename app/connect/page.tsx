import type { Metadata } from "next";
import { ButtonLink, Card, Container, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Find your place at Gulf Coast Underground — Discovery Bible Study (DBS), IDE's, microchurches, and ways to connect with us.",
};

const ways = [
  {
    id: "dbs",
    name: "Discovery Bible Study (DBS)",
    tag: "DBS",
    body: "A simple, reproducible way to read, obey, and share the Scriptures together. No expert required — just a group of people and an open Bible. It's often the first step into the family.",
  },
  {
    id: "ides",
    name: "IDE's",
    tag: "Immersive Discipleship",
    body: "Immersive Discipleship Experiences — focused seasons of being formed as a disciple of Jesus and equipped to disciple others in your everyday context.",
  },
  {
    id: "microchurch",
    name: "Microchurch",
    tag: "Community",
    body: "Small, family-sized communities living out the way of Jesus together — a shared meal, the Word, prayer, and mission woven into ordinary life across the coast.",
  },
  {
    id: "connect",
    name: "Connect With Us",
    tag: "Start Here",
    body: "Not sure where to begin? Reach out and we'll help you find the group, study, or community nearest you. Everyone's welcome at the table.",
  },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Find your place in the family."
        subtitle="Following Jesus was never meant to be done alone. Here are the everyday rhythms where life and discipleship happen at Gulf Coast Underground."
      />

      <Container className="py-20">
        <div className="grid gap-6 md:grid-cols-2">
          {ways.map((w) => (
            <Card key={w.id} className="flex flex-col">
              <span className="w-fit rounded-full bg-teal/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-teal">
                {w.tag}
              </span>
              <h2 className="mt-4 text-2xl font-semibold text-mist">{w.name}</h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-soft">
                {w.body}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-14 rounded-3xl border border-black/10 bg-ink-soft p-10 text-center">
          <Eyebrow>Ready to take a step?</Eyebrow>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-mist">
            Let&apos;s help you get connected.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-mist-soft">
            Tell us a little about where you are, and we&apos;ll point you toward
            a Discovery Bible Study or microchurch near you.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/contact">Connect With Us</ButtonLink>
            <ButtonLink href="/events" variant="ghost">
              Browse upcoming events
            </ButtonLink>
          </div>
        </div>
      </Container>
    </>
  );
}
