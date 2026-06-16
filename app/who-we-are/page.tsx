/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { Container, Eyebrow, PageHero } from "@/components/ui";
import { Accordion } from "@/components/Accordion";
import { focusItems, values } from "@/lib/manifesto";

export const metadata: Metadata = {
  title: "Who We Are",
  description:
    "Our background, vision, mission, manifesto, and how Gulf Coast Underground is organized as a 501(c)(3) mission hub advancing the Missio Dei on the Mississippi Gulf Coast.",
};

const groups = ["Christ-Centered", "Worship", "Community", "Mission"] as const;

const missionPoints = [
  "Build intentional and healthy relationships with people in our contexts.",
  "Train disciples of Jesus Christ among new contexts and networks of people.",
  "Help new disciples discover the objective will of God as well as the subjective call of God on their life.",
  "Equip and support every follower of Christ in accomplishing the Missio Dei in the context of their everyday life.",
];

export default function WhoWeArePage() {
  return (
    <>
      <PageHero
        eyebrow="Who We Are"
        title="A mission hub advancing the Missio Dei on the Gulf Coast."
        subtitle="Christ-centered and discipleship focused. Here's the story of how the Underground began, what we believe, and how we're organized."
      />

      {/* Our Background */}
      <Container className="py-16 sm:py-20">
        <div id="background" className="scroll-mt-24">
          <Eyebrow>Our Background</Eyebrow>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
            Why we exist
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-[15px] leading-relaxed text-mist-soft">
            <p>
              In 2018, we were sitting, as long-standing members, in a
              non-denominational megachurch type model church. Don&apos;t get me
              wrong, we loved our church and still believe it has its place. In
              fact, we still seek to maintain healthy relationships with the
              people there. However, God was calling us to focus a little
              differently. We do not take the position that our focus is right
              and the church we came from is wrong, but we merely believe that
              multiple approaches to discipleship are needed to reach different
              contexts.
            </p>
            <p>
              After much time and effort, we realized it was not going to work
              for us to focus our efforts in the way that God was calling us to
              do within that institutional structure. So we began to seek what
              God was doing outside of the organization, and He began to open
              doors for us into new networks of like-minded ministry leaders. A
              small group of Christ followers began fasting and meeting to pray
              and seek God, and before we knew it, we had the resources pooled
              together and the GC Underground Missio Dei was launched.
            </p>
            <p>
              The Mississippi Gulf Coast has over 350,000 people, and we believe
              60-80% of that population (210,000 to 280,000) are unchurched and,
              for whatever reason, not being reached. We believe that an
              overwhelming majority of those people are poor-in-spirit,
              suffering from the injustices that result from sin, and wide open
              to learning about God and His plan in Christ.
            </p>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-black/[0.07] bg-ink-soft p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-teal">
              Our Vision
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-mist-soft">
              To reach every person along the Gulf Coast who is poor-in-spirit
              and/or experiencing suffering caused by sin and the injustices of
              this world and is not being reached by the existing church
              structures, with the transformative Gospel of Jesus Christ; and to
              help them experience the true love, as established by God&apos;s
              plan in Christ through the Scriptures, that draws us to repentance
              and obedience to Christ.
            </p>
          </div>
          <div className="rounded-2xl border border-black/[0.07] bg-ink-soft p-8">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-teal">
              Our Mission
            </h3>
            <p className="mt-3 text-sm text-mist-soft">
              Founded on prayer, fasting and 100% devotion to the Lord, our
              mission is to:
            </p>
            <ol className="mt-3 space-y-2 text-[15px] leading-relaxed text-mist-soft">
              {missionPoints.map((p, i) => (
                <li key={i} className="flex gap-3">
                  <span className="font-bold text-teal">{i + 1}.</span>
                  <span>{p}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>

      {/* Our Manifesto */}
      <section
        id="manifesto"
        className="scroll-mt-24 border-t border-black/10 bg-ink-soft"
      >
        <Container className="py-16 sm:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Our Manifesto</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist sm:text-4xl">
              What we believe to be true
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-mist-soft">
              The Gulf Coast Underground is Christ-centered and discipleship
              focused. Discipleship multiplication starts and finishes with a
              deep understanding of who Christ is, and is ultimately
              accomplished in how that understanding affects our relationships
              with Him and with others.
            </p>
          </div>

          {/* Focus */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <h3 className="text-xl font-bold text-mist">Focus</h3>
              <p className="mt-2 text-sm text-mist-soft">
                Healthy missiology and ecclesiology, filtered through the lens
                of healthy Christology.
              </p>
              <div className="mt-5">
                <Accordion
                  items={focusItems.map((f) => ({
                    title: f.title,
                    body: <p>{f.body}</p>,
                    refs: f.refs,
                  }))}
                  defaultOpen={0}
                />
              </div>
            </div>
            <figure className="rounded-2xl border border-black/[0.07] bg-white p-4 shadow-[0_2px_20px_rgba(16,32,31,0.05)]">
              <img
                src="/images/Engel-Scale.jpg"
                alt="The Engel Scale: steps to Christ, from no awareness of God to missional living in context"
                className="w-full rounded-lg"
              />
              <figcaption className="mt-3 text-center text-xs text-mist-soft">
                The Engel Scale, the discipleship spectrum from
                &ldquo;discipling to Christ&rdquo; (missiology) to
                &ldquo;discipling in Christ&rdquo; (ecclesiology).
              </figcaption>
            </figure>
          </div>

          {/* Values */}
          <div className="mt-14">
            <h3 className="text-xl font-bold text-mist">Our Values</h3>
            <p className="mt-2 max-w-2xl text-sm text-mist-soft">
              Our focus and values provide the lens through which we see all of
              life, which ultimately yields walking and living in the life
              rhythms of Christ.
            </p>

            <div className="mt-6 space-y-8">
              {groups.map((group) => {
                const items = values.filter((v) => v.group === group);
                return (
                  <div key={group}>
                    <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal">
                      {group}
                    </h4>
                    <Accordion
                      items={items.map((v) => ({
                        title: v.title,
                        body: <p>{v.body}</p>,
                        refs: v.refs,
                      }))}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Organization */}
      <Container className="py-16 sm:py-20">
        <div
          id="organization"
          className="grid scroll-mt-24 gap-10 md:grid-cols-[1fr_2fr]"
        >
          <div>
            <Eyebrow>Our Organization</Eyebrow>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-mist">
              How we&apos;re structured
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-relaxed text-mist-soft">
            <p>
              The Gulf Coast Underground Missio Dei is not legally set up as a
              &ldquo;church.&rdquo; The GC Underground is a corporate entity
              organized under 501(c)(3) of the IRS code as a mission&apos;s hub
              that has applied for and obtained IRS qualification for its
              tax-exempt status. We have a board of directors and officers that
              are responsible for the hub, including its vision and health as an
              organization.
            </p>
            <p>
              Micro-churches that emerge as a result of the work supported by
              the hub do not fall under the hub&apos;s by-laws or organizational
              authority. The glue that keeps our micro-churches together is
              relationship and networking centered on carrying out God&apos;s
              mission. Rather than organizing under by-laws and government law,
              they organize under God&apos;s sole authority with elders who lead
              by developing influence through the way they live out their lives
              under God&apos;s Word.
            </p>
            <p>
              By organizing as a mission hub, rather than as a &ldquo;church,
              &rdquo; we are better able to partner with other churches in the
              communities along the Gulf Coast to help them with discipleship
              multiplication.
            </p>
            <div className="pt-2">
              <Link
                href="/connect"
                className="inline-flex rounded-md bg-teal px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-teal-deep"
              >
                See How to Connect
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
