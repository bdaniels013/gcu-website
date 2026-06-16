import type { Metadata } from "next";
import { Container, Eyebrow, PageHero } from "@/components/ui";
import { events, featuredEvent } from "@/lib/event";
import { FeaturedEventCard } from "@/components/FeaturedEventCard";
import { EventCard } from "@/components/EventCard";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming gatherings, Discovery Bible Studies, microchurches, trainings, and outreach with Gulf Coast Underground on the Mississippi Gulf Coast.",
};

export default function EventsPage() {
  const featured = events.find((e) => e.id === featuredEvent.id);
  const rest = events.filter((e) => e.id !== featuredEvent.id);

  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Come and be part of what God is doing."
        subtitle="From weekly Discovery Bible Studies to coast-wide gatherings, here's where you can show up, belong, and join the mission."
      />

      <Container className="py-16">
        {featured && (
          <section id={featured.id} className="scroll-mt-28">
            <Eyebrow>Featured Event</Eyebrow>
            <div className="mt-5">
              <FeaturedEventCard event={featured} />
            </div>
          </section>
        )}

        <section className="mt-16">
          <Eyebrow>What&apos;s Coming Up</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
            Upcoming gatherings & rhythms
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {rest.map((e) => (
              <div key={e.id} id={e.id} className="scroll-mt-28">
                <EventCard event={e} />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-3xl border border-black/10 bg-ink-soft p-10 text-center">
          <h2 className="text-2xl font-medium uppercase text-mist">
            Don&apos;t see a group near you?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-mist-soft">
            New Discovery Bible Studies and microchurches are starting all the
            time. Reach out and we&apos;ll connect you, or help you start one.
          </p>
          <a
            href="/contact"
            className="mt-7 inline-flex rounded-full bg-teal px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-teal-deep"
          >
            Connect With Us
          </a>
        </section>
      </Container>
    </>
  );
}
