/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";
import { Accordion } from "@/components/Accordion";
import { focusItems, values } from "@/lib/manifesto";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Our background, vision, mission, manifesto, and how Gulf Coast Underground is organized as a 501(c)(3) mission hub advancing the Missio Dei on the Mississippi Gulf Coast.",
};

const christology = focusItems[0];
const missiology = focusItems[1];
const christCentered = values.find((v) => v.group === "Christ-Centered")!;
const worship = values.filter((v) => v.group === "Worship");
const community = values.filter((v) => v.group === "Community");
const mission = values.filter((v) => v.group === "Mission");

const missionPoints = [
  "Build intentional and healthy relationships with people in our contexts;",
  "Train disciples of Jesus Christ among new contexts and networks of people;",
  "Help new disciples discover the objective will of God as well as the subjective call of God on their life; and",
  "Equip and support every follower of Christ in accomplishing the Missio Dei in the context of their everyday life.",
];

function accordionItems(group: typeof worship) {
  return group.map((v) => ({
    title: v.title,
    body: <p>{v.body}</p>,
    refs: v.refs,
  }));
}

export default function WhoWeArePage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />

        {/* OUR BACKGROUND */}
        <Container className="py-16 sm:py-20">
          <div id="background" className="scroll-mt-24">
            <LinedHeading>Our Background</LinedHeading>
            <div className="mx-auto mt-8 max-w-3xl space-y-4 text-center text-[15px] leading-relaxed text-mist-soft">
              <p>
                In 2018, we were sitting, as long-standing members, in a
                non-denominational megachurch type model church. Don&apos;t get
                me wrong, we loved our church and still believe it has its
                place. However, God was calling us to focus a little
                differently. After much time and effort, we realized it was not
                going to work for us to focus our efforts in the way that God
                was calling us to do within that institutional structure. So we
                began to seek what God was doing outside of the organization,
                and a small group of Christ followers began fasting and meeting
                to pray and seek God. Before we knew it, the GC Underground
                Missio Dei was launched.
              </p>
              <p>
                The Mississippi Gulf Coast has over 350,000 people, and we
                believe 60-80% of that population (210,000 to 280,000) are
                unchurched and, for whatever reason, not being reached. We
                believe that an overwhelming majority of those people are
                poor-in-spirit, suffering from the injustices that result from
                sin, and wide open to learning about God and His plan in Christ.
                And this leads us to our Vision &amp; Mission:
              </p>
            </div>

            {/* Vision / Mission dark boxes */}
            <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
              <div className="rounded-md bg-charcoal p-8 text-white">
                <h3 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                  GC Underground Vision
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/80">
                  To reach every person along the Gulf Coast who is
                  poor-in-spirit and/or experiencing suffering caused by sin and
                  the injustices of this world and is not being reached by the
                  existing church structures, with the transformative Gospel of
                  Jesus Christ; and to help them experience the true love, as
                  established by God&apos;s plan in Christ through the
                  Scriptures, that draws us to repentance and obedience to
                  Christ.
                </p>
              </div>
              <div className="rounded-md bg-charcoal p-8 text-white">
                <h3 className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-teal">
                  GC Underground Mission
                </h3>
                <p className="mt-4 text-[14px] leading-relaxed text-white/80">
                  Founded on prayer, fasting and 100% devotion to the Lord, our
                  Mission is to:
                </p>
                <ol className="mt-3 space-y-1.5 text-[14px] leading-relaxed text-white/80">
                  {missionPoints.map((p, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="font-semibold text-teal">{i + 1})</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-3xl text-center text-[15px] leading-relaxed text-mist-soft">
              The components of our Mission consist of micro-churches,
              collectives, a mission&apos;s hub, Discovery Bible Studies and
              Intentional Discipleship Environments. These components combine to
              form a process for Christ-centered discipleship multiplication.
            </p>
            <div className="mt-8 text-center">
              <Link
                href="/connect"
                className="inline-flex rounded-[3px] bg-teal px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
              >
                Connect With Us
              </Link>
            </div>
          </div>
        </Container>

        {/* OUR MANIFESTO */}
        <Container className="scroll-mt-24 border-t border-black/10 py-16 sm:py-20">
          <div id="manifesto" className="scroll-mt-24">
            <LinedHeading>Our Manifesto</LinedHeading>
            <p className="mx-auto mt-8 max-w-3xl text-center text-[15px] leading-relaxed text-mist-soft">
              The Gulf Coast Underground is Christ-centered and discipleship
              focused. Discipleship multiplication starts and finishes with a
              deep understanding of who Christ is, and is ultimately
              accomplished in how that understanding affects our relationships
              with Him and with others.
            </p>

            {/* Focus / Values Venn diagrams */}
            <div className="mx-auto mt-12 grid max-w-3xl gap-8 sm:grid-cols-2">
              <figure className="flex flex-col items-center rounded-xl border border-black/[0.06] bg-ink-soft p-6 text-center shadow-[0_2px_18px_rgba(0,0,0,0.04)]">
                <h3 className="text-lg font-medium uppercase tracking-[0.12em] text-teal">
                  Focus
                </h3>
                <img
                  src="/images/focus.png"
                  alt="Focus diagram: Christology, Missiology and Ecclesiology meeting in discipleship"
                  className="mx-auto mt-4 w-full max-w-[200px] mix-blend-multiply"
                />
              </figure>
              <figure className="flex flex-col items-center rounded-xl border border-black/[0.06] bg-ink-soft p-6 text-center shadow-[0_2px_18px_rgba(0,0,0,0.04)]">
                <h3 className="text-lg font-medium uppercase tracking-[0.12em] text-teal">
                  Values
                </h3>
                <img
                  src="/images/values.png"
                  alt="Values diagram: Worship, Community and Mission centered on Jesus"
                  className="mx-auto mt-4 w-full max-w-[200px] mix-blend-multiply"
                />
              </figure>
            </div>

            {/* Christology / Christ-Centered two-column */}
            <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-medium uppercase tracking-tight text-mist">
                  Christology
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
                  {christology.body}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-medium uppercase tracking-tight text-mist">
                  {christCentered.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
                  {christCentered.body}
                </p>
              </div>
            </div>

            {/* Missiology & Ecclesiology + Engel Scale */}
            <div className="mx-auto mt-14 grid max-w-5xl items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
              <div>
                <h3 className="text-xl font-medium uppercase tracking-tight text-mist">
                  {missiology.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
                  {missiology.body}
                </p>
              </div>
              <figure className="rounded-md border border-black/[0.07] bg-white p-3 shadow-[0_2px_18px_rgba(0,0,0,0.06)]">
                <img
                  src="/images/Engel-Scale.jpg"
                  alt="The Engel Scale: steps to Christ, from no awareness of God to missional living in context"
                  className="w-full rounded"
                />
              </figure>
            </div>

            {/* Worship / Community / Mission accordions */}
            <div className="mx-auto mt-14 max-w-3xl space-y-10">
              {(
                [
                  ["Worship", worship],
                  ["Community", community],
                  ["Mission", mission],
                ] as const
              ).map(([label, group]) => (
                <div key={label}>
                  <h3 className="mb-4 text-center text-2xl font-medium uppercase tracking-tight text-mist">
                    {label}
                  </h3>
                  <Accordion items={accordionItems(group)} />
                </div>
              ))}
            </div>
          </div>
        </Container>

        {/* OUR ORGANIZATION */}
        <Container className="scroll-mt-24 border-t border-black/10 py-16 sm:py-20">
          <div id="organization" className="scroll-mt-24">
            <LinedHeading>Our Organization</LinedHeading>
            <p className="mx-auto mt-8 max-w-3xl text-center text-[15px] leading-relaxed text-mist-soft">
              The Gulf Coast Underground Missio Dei is not legally set up as a
              &ldquo;church.&rdquo; The GC Underground is a corporate entity
              organized under 501(c)(3) of the IRS code as a mission&apos;s hub
              that has applied for and obtained IRS qualification for its
              tax-exempt status. We have a board of directors and officers
              responsible for the hub. Micro-churches that emerge as a result of
              the work supported by the hub do not fall under the hub&apos;s
              by-laws or organizational authority. The glue that keeps our
              micro-churches together is relationship and networking centered on
              carrying out God&apos;s mission. By organizing as a mission hub,
              rather than as a &ldquo;church,&rdquo; we are better able to
              partner with other churches in the communities along the Gulf
              Coast to help them with discipleship multiplication.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
