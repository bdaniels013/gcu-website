/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Find your place at Gulf Coast Underground: Discovery Bible Studies (DBS), Intentional Discipleship Environments (IDE's) through Disciples Made, and microchurches.",
};

const ideTracks = [
  {
    name: "Followers Made",
    image: "/images/followers-made.png",
    color: "#e0992f",
    body: "A transformative, six-month experience that helps participants develop Jesus-like character and begin to discover their unique calling. Grounded in daily spiritual practices, it leads people to create long-lasting, life-changing habits and build vulnerable, accountable community on 3- and 12-person levels. Gifts Passion Story and its companion book, Find Your Place, is integrated throughout.",
  },
  {
    name: "Missionaries Made",
    image: "/images/missionaries-made.png",
    color: "#8e5ca8",
    body: "Based on the belief that God is already at work redeeming and restoring all people and all things, and all we need to do is join Him. In just over three months, participants start to build habits based on the five rhythms of missionary life: Begin in prayer, Listen and engage, Eat, Serve and Story (BLESS).",
  },
  {
    name: "Leaders Made",
    image: "/images/leaders-made.png",
    color: "#d9663a",
    body: "An intense, focused experience to develop disciples who inspire and guide others along the same path, just as Jesus did. During the 10-month program, participants read through most of the Bible, strengthen their spiritual habits, and dive deeper into their calling to discern where their leadership can make the greatest kingdom impact.",
  },
  {
    name: "Microchurch Learning Community",
    image: "/images/microchurch-learning.png",
    color: "#4a9e5c",
    body: "When people start following the rhythms of missional living, a new community naturally forms. This year-long experience equips everyday missionaries to launch and lead the extended spiritual families that emerge, helping participants develop the habits and skills to live in covenant relationship and grow thriving on-mission communities.",
  },
];

function GetConnected() {
  return (
    <Link
      href="#connect-with-us"
      className="inline-flex rounded-[3px] bg-teal px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
    >
      Get Connected
    </Link>
  );
}

export default function ConnectPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />

        {/* DBS */}
        <Container className="py-16 sm:py-20">
          <div id="dbs" className="scroll-mt-24 text-center">
            <LinedHeading>Discovery Bible Studies (DBS)</LinedHeading>
            <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-mist-soft">
              Discovery Bible Study is a great way for those who are not that
              familiar with the Bible to get together with others who are also
              not very familiar with the Bible and discover together what the
              Bible actually says about who God is and what His plan is for
              humanity. A DBS is simple in approach and can be done in any
              setting and with anywhere from 3 to 12 people. For many people,
              especially those who are down-trodden or poor in spirit, the
              institution can be very intimidating and create anxiety. We are
              intentionally simple in approach to our DBS&apos;s in order to
              make it easy for anyone to discover God through His Word.
            </p>
            <div className="mt-8">
              <GetConnected />
            </div>
          </div>
        </Container>

        {/* IDE's */}
        <Container className="border-t border-black/10 py-16 sm:py-20">
          <div id="ides" className="scroll-mt-24 text-center">
            <LinedHeading>
              Intentional Discipleship Environments (IDE&apos;s)
            </LinedHeading>
            <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-mist-soft">
              Our IDE&apos;s, offered through our partnership with Disciples
              Made, Inc., are a great way to connect with others on a deeper
              level by committing to a more long-term track of pursuing God
              together. When each participant completes the track, they have a
              deeper understanding of what it means to live daily rhythms of
              deep and intimate relationship first with Jesus and then with
              other people, in both community and on mission. The tracks below
              describe the IDE&apos;s we currently offer.
            </p>
          </div>

          <div className="mx-auto mt-12 max-w-4xl divide-y divide-black/10">
            {ideTracks.map((track) => (
              <div
                key={track.name}
                className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:items-start sm:gap-10 sm:text-left"
              >
                <div className="flex w-40 flex-none flex-col items-center">
                  <img
                    src={track.image}
                    alt={`${track.name} logo`}
                    className="h-20 w-auto object-contain"
                  />
                  <span className="mt-3 text-base font-medium text-mist">
                    {track.name}
                  </span>
                </div>
                <div className="flex-1">
                  <p className="text-[15px] leading-relaxed text-mist-soft">
                    <span className="italic">
                      *Trademarked by Disciples Made, Inc.{" "}
                    </span>
                    {track.body}
                  </p>
                  <a
                    href="#connect-with-us"
                    className="mt-5 inline-flex rounded-[3px] px-6 py-2.5 text-sm font-medium uppercase tracking-[0.1em] text-white transition-opacity hover:opacity-90"
                    style={{ backgroundColor: track.color }}
                  >
                    Get More Info
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Container>

        {/* Microchurch */}
        <Container className="border-t border-black/10 py-16 sm:py-20">
          <div id="microchurch" className="scroll-mt-24 text-center">
            <LinedHeading>Microchurch</LinedHeading>
            <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-mist-soft">
              We, at the Underground, do believe that the Church comprises the
              people who have decided to lay their lives down and follow Jesus
              as opposed to a building. In other words, &ldquo;Church&rdquo; is
              not something we &ldquo;go to&rdquo; but rather it is who we are.
              However, we also believe that rich theology informs community,
              rhythmic gathering for worship and devotion to the Scripture, and
              covenant relationship all as vital to being the Church. This is
              where the microchurch fits into the picture. Our microchurches
              provide that opportunity to enter into covenant relationship with
              others who are fully devoted Christ-followers for the purpose of
              rhythmic living centered around worship of and devotion to Christ,
              covenant relationship and living out the Missio Dei together in
              your context! If you are interested in being a part of a
              microchurch, we can help you find one or start one in your area.
            </p>
            <div className="mt-8">
              <GetConnected />
            </div>
          </div>
        </Container>
      </section>

      {/* Connect With Us (dark form) */}
      <section
        id="connect-with-us"
        className="scroll-mt-24 bg-teal-darkest text-white"
      >
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
            <div>
              <h2 className="text-4xl font-medium uppercase leading-tight tracking-tight text-white sm:text-5xl">
                Connect With Us
              </h2>
              <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
                Have an idea for a mission or ministry? Looking for support for
                an existing one? Or just looking for community? Complete the
                form so we can discover how to best serve you, learn more about
                your ministry, or help you get involved.
              </p>
            </div>
            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
