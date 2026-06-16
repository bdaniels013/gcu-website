/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Find your place at Gulf Coast Underground: Discovery Bible Studies (DBS), Intentional Discipleship Environments (IDE's) through Disciples Made, and microchurches.",
};

const ideTracks = [
  {
    name: "Followers Made",
    duration: "6-month experience",
    image: "/images/followers-made.png",
    body: "A transformative, six-month experience that helps participants develop Jesus-like character and begin to discover their unique calling. Grounded in daily spiritual practices, it leads people to create long-lasting, life-changing habits and build vulnerable, accountable community on 3- and 12-person levels. Gifts Passion Story and its companion book, Find Your Place, is integrated throughout.",
  },
  {
    name: "Missionaries Made",
    duration: "3+ month experience",
    image: "/images/missionaries-made.png",
    body: "Based on the belief that God is already at work redeeming and restoring all people and all things, and all we need to do is join Him. In just over three months, participants start to build habits based on the five rhythms of missionary life: Begin in prayer, Listen and engage, Eat, Serve and Story (BLESS).",
  },
  {
    name: "Leaders Made",
    duration: "10-month experience",
    image: "/images/leaders-made.png",
    body: "An intense, focused experience to develop disciples who inspire and guide others along the same path, just as Jesus did. During the 10-month program, participants read through most of the Bible, strengthen their spiritual habits, and dive deeper into their calling to discern where their leadership can make the greatest kingdom impact.",
  },
  {
    name: "Microchurch Learning Community",
    duration: "Year-long experience",
    image: "/images/microchurch-learning.png",
    body: "When people start following the rhythms of missional living, a new community naturally forms. This year-long experience equips everyday missionaries to launch and lead the extended spiritual families that emerge, helping participants develop the habits and skills to live in covenant relationship and grow thriving on-mission communities.",
  },
];

export default function ConnectPage() {
  return (
    <>
      <PageHero
        eyebrow="Connect"
        title="Find your place in the family."
        subtitle="Following Jesus was never meant to be done alone. Here are the everyday rhythms where life and discipleship happen at the Underground."
      />

      {/* DBS */}
      <Container className="py-16 sm:py-20">
        <div
          id="dbs"
          className="grid scroll-mt-24 gap-10 md:grid-cols-[1fr_1.6fr]"
        >
          <div>
            <Eyebrow>Start Here</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist">
              Discovery Bible Studies (DBS)
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-mist-soft">
            <p>
              Discovery Bible Study is a great way for those who are not that
              familiar with the Bible to get together with others who are also
              not very familiar with the Bible and discover together what the
              Bible actually says about who God is and what His plan is for
              humanity. A DBS is simple in approach and can be done in any
              setting and with anywhere from 3 to 12 people.
            </p>
            <p>
              For many people, especially those who are down-trodden or poor in
              spirit, the institution can be very intimidating and create
              anxiety. We are intentionally simple in approach to our DBS&apos;s
              in order to make it easy for anyone to discover God through His
              Word.
            </p>
          </div>
        </div>
      </Container>

      {/* IDE's */}
      <section
        id="ides"
        className="scroll-mt-24 border-t border-black/10 bg-ink-soft"
      >
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Go Deeper</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
              Intentional Discipleship Environments (IDE&apos;s)
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mist-soft">
              Our IDE&apos;s, offered through our partnership with Disciples
              Made, Inc., are a great way to connect with others on a deeper
              level by committing to a more long-term track of pursuing God
              together. When each participant completes the track, they have a
              deeper understanding of what it means to live daily rhythms of
              deep and intimate relationship first with Jesus and then with
              other people, in both community and on mission.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {ideTracks.map((track) => (
              <div
                key={track.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-black/[0.07] bg-ink shadow-[0_2px_20px_rgba(16,32,31,0.05)]"
              >
                <div className="flex items-center justify-center bg-white p-6">
                  <img
                    src={track.image}
                    alt={`${track.name} logo`}
                    className="h-24 w-auto object-contain"
                  />
                </div>
                <div className="flex flex-1 flex-col border-t border-black/[0.06] p-7">
                  <h3 className="text-xl font-medium uppercase text-mist">
                    {track.name}
                  </h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-teal">
                    {track.duration}
                  </p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-mist-soft">
                    {track.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 text-xs italic text-mist-soft/70">
            Followers Made, Missionaries Made, Leaders Made, and the Microchurch
            Learning Community are trademarked by Disciples Made, Inc.
          </p>
        </Container>
      </section>

      {/* Microchurch */}
      <Container className="py-16 sm:py-20">
        <div
          id="microchurch"
          className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-[1.5fr_1fr]"
        >
          <div>
            <Eyebrow>Be the Church</Eyebrow>
            <h2 className="mt-3 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
              Microchurch
            </h2>
            <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-mist-soft">
              <p>
                We, at the Underground, believe that the Church comprises the
                people who have decided to lay their lives down and follow Jesus
                as opposed to a building. In other words, &ldquo;Church&rdquo;
                is not something we &ldquo;go to&rdquo; but rather it is who we
                are.
              </p>
              <p>
                We also believe that rich theology informs community, rhythmic
                gathering for worship and devotion to the Scripture, and
                covenant relationship as vital to being the Church. This is
                where the microchurch fits in. Our microchurches provide the
                opportunity to enter into covenant relationship with other fully
                devoted Christ-followers for rhythmic living centered around
                worship of and devotion to Christ, covenant relationship, and
                living out the Missio Dei together in your context. If you are
                interested in being part of a microchurch, we can help you find
                one or start one in your area.
              </p>
            </div>
          </div>
          <figure className="rounded-2xl border border-black/[0.07] bg-white p-6 shadow-[0_2px_20px_rgba(16,32,31,0.05)]">
            <img
              src="/images/values.png"
              alt="Microchurch diagram: Worship, Community, and Mission centered on Jesus"
              className="mx-auto w-full max-w-sm"
            />
            <figcaption className="mt-3 text-center text-xs text-mist-soft">
              Worship, Community &amp; Mission, centered on Jesus.
            </figcaption>
          </figure>
        </div>
      </Container>

      {/* Connect With Us */}
      <section
        id="connect-with-us"
        className="scroll-mt-24 border-t border-black/10 bg-ink-soft"
      >
        <Container className="py-16 text-center sm:py-20">
          <Eyebrow>Connect With Us</Eyebrow>
          <h2 className="mt-4 text-3xl font-medium uppercase tracking-tight text-mist sm:text-4xl">
            Let&apos;s help you get connected.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-mist-soft">
            Have an idea for a mission or ministry? Looking for support for an
            existing one? Or just looking for community? Complete the form so we
            can discover how to best serve you, learn more about your ministry,
            or help you get involved.
          </p>
          <div className="mt-8">
            <Link
              href="/contact"
              className="inline-flex rounded-[3px] bg-teal px-7 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
            >
              Get Connected
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
