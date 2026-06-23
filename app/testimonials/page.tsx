import type { Metadata } from "next";
import Link from "next/link";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Personal testimonies from the Gulf Coast Underground family — stories of how God is moving through discipleship on the Mississippi Gulf Coast.",
};

/**
 * Add testimonies here as they're posted to YouTube — set `youtubeId` to the
 * video's ID (the part after watch?v= or youtu.be/).
 */
type Testimony = { name: string; youtubeId: string; caption?: string };
const testimonies: Testimony[] = [
  {
    name: "Josh Pope",
    youtubeId: "yHzfN9SmPso",
    caption: "From Addiction to Redemption",
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <LinedHeading>Testimonials</LinedHeading>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-mist-soft">
              Real stories from the Underground family — how God is moving
              through everyday discipleship across the Gulf Coast.
            </p>
          </div>

          {testimonies.length > 0 ? (
            <div
              className={`mx-auto mt-12 grid gap-8 ${
                testimonies.length === 1
                  ? "max-w-2xl"
                  : "max-w-5xl md:grid-cols-2"
              }`}
            >
              {testimonies.map((t) => (
                <figure key={t.youtubeId}>
                  <div className="aspect-video overflow-hidden rounded-lg border border-black/[0.07] bg-black shadow-[0_2px_18px_rgba(0,0,0,0.08)]">
                    <iframe
                      src={`https://www.youtube.com/embed/${t.youtubeId}`}
                      title={`${t.name} testimony`}
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <figcaption className="mt-3 text-center">
                    <span className="font-medium text-mist">{t.name}</span>
                    {t.caption && (
                      <span className="block text-sm text-mist-soft">
                        {t.caption}
                      </span>
                    )}
                  </figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="mx-auto mt-12 max-w-2xl rounded-xl border border-black/[0.07] bg-ink-soft p-10 text-center">
              <h2 className="text-xl font-medium uppercase tracking-tight text-mist">
                Testimonies coming soon
              </h2>
              <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-mist-soft">
                We&apos;re gathering video testimonies from across the
                Underground family. Check back soon — or share your own story
                with us.
              </p>
              <div className="mt-7">
                <Link
                  href="/contact"
                  className="inline-flex rounded-[3px] bg-orange px-7 py-3 text-sm font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-orange-deep"
                >
                  Share Your Story
                </Link>
              </div>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
