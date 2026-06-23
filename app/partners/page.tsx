import type { Metadata } from "next";
import Link from "next/link";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";

export const metadata: Metadata = {
  title: "Strategic Partners",
  description:
    "The ministry partners we work alongside to advance the Missio Dei and multiply disciples across the Mississippi Gulf Coast.",
};

/** Strategic partner feature videos (YouTube IDs from watch?v=…). */
type PartnerVideo = { name: string; youtubeId: string; caption?: string };
const partnerVideos: PartnerVideo[] = [
  {
    name: "Freedom Lighthouse",
    youtubeId: "mM-nx7hKS18",
    caption: "From Addiction to Freedom in Christ",
  },
  {
    name: "Home of Grace",
    youtubeId: "iWvesIsXQns",
    caption: "Hope and Recovery Through Christ",
  },
];

export default function PartnersPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <LinedHeading>Strategic Partners</LinedHeading>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-mist-soft">
              As a mission hub, we work alongside like-minded organizations to
              equip everyday disciples and multiply the work of the Gospel
              across the Gulf Coast.
            </p>
          </div>

          {partnerVideos.length > 0 && (
            <div className="mx-auto mt-12 max-w-5xl">
              <h2 className="text-center text-2xl font-medium uppercase tracking-tight text-mist">
                Partner Stories
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {partnerVideos.map((v) => (
                  <figure key={v.youtubeId}>
                    <div className="aspect-video overflow-hidden rounded-lg border border-black/[0.07] bg-black shadow-[0_2px_18px_rgba(0,0,0,0.08)]">
                      <iframe
                        src={`https://www.youtube.com/embed/${v.youtubeId}`}
                        title={v.name}
                        className="h-full w-full"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                    <figcaption className="mt-3 text-center">
                      <span className="font-medium text-mist">{v.name}</span>
                      {v.caption && (
                        <span className="block text-sm text-mist-soft">
                          {v.caption}
                        </span>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          <div className="mx-auto mt-16 max-w-2xl rounded-xl border border-teal/20 bg-ink p-8 text-center">
            <h2 className="text-lg font-medium uppercase tracking-tight text-mist">
              Partner with us
            </h2>
            <p className="mx-auto mt-3 max-w-md text-[15px] leading-relaxed text-mist-soft">
              Interested in a strategic partnership to advance the Missio Dei?
              We&apos;d love to connect.
            </p>
            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex rounded-[3px] bg-teal px-7 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
