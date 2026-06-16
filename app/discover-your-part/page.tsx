import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Discover Your Part",
  description:
    "Everyone has a calling: the God-given intersection of gifts, passions, and stories. GPS helps you explore those three signals and find your place in the kingdom.",
};

const signals = [
  {
    letter: "G",
    title: "Gifts",
    body: "The abilities and spiritual giftings God has uniquely placed in you to serve His kingdom and the people around you.",
  },
  {
    letter: "P",
    title: "Passions",
    body: "The people, places, and needs that stir your heart, the things you can't help but care deeply about.",
  },
  {
    letter: "S",
    title: "Stories",
    body: "The experiences God has walked you through, the highs and the lows, that shape how you uniquely reflect Him.",
  },
];

export default function DiscoverYourPartPage() {
  return (
    <>
      <PageHero
        eyebrow="Discover Your Part"
        title="Everyone has a calling."
        subtitle="A calling is the God-given intersection of your gifts, passions, and stories. But not everyone knows their calling, and that's exactly what we want to help you discover."
      />

      {/* GPS intro */}
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Find Your GPS</Eyebrow>
          <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
            Gifts. Passions. Stories.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-mist-soft">
            GPS helps people explore those three signals, gifts, passions, and
            stories, and find their place in the kingdom. From detailed
            assessment questions to journaling exercises, GPS leads people into
            a deeper understanding of their one-of-a-kind Masterpiece Missions.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 sm:grid-cols-3">
          {signals.map((s) => (
            <div
              key={s.title}
              className="rounded-2xl border border-black/[0.07] bg-ink-card p-7 text-center shadow-[0_2px_20px_rgba(16,32,31,0.05)]"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-teal text-2xl font-medium text-white">
                {s.letter}
              </div>
              <h3 className="mt-4 text-xl font-medium uppercase text-mist">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-mist-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </Container>

      {/* Self-assessment CTA */}
      <section className="border-t border-black/10 bg-ink-soft">
        <Container className="py-16 sm:py-20">
          <div className="mx-auto max-w-3xl rounded-3xl border border-teal/20 bg-ink p-8 text-center shadow-[0_4px_30px_rgba(0,86,85,0.08)] sm:p-12">
            <Eyebrow>Take the Next Step</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist">
              Start with a self-assessment
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-mist-soft">
              You can get started by taking an online self-assessment focused on
              your GPS. After you complete it, your results are emailed to you,
              along with one of our ministry coaches, who will be available to
              help you get connected and find training and/or support as needed.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex rounded-[3px] bg-teal px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
              >
                Get Started
              </Link>
              <Link
                href="/connect"
                className="inline-flex rounded-[3px] border-2 border-teal px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-teal transition-colors hover:bg-teal/[0.06]"
              >
                Explore Ways to Connect
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
