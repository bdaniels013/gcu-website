import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";

export const metadata: Metadata = {
  title: "Discover Your Part",
  description:
    "Everyone has a calling: the God-given intersection of gifts, passions, and stories. GPS helps you explore those three signals and find your place in the kingdom.",
};

export default function DiscoverYourPartPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-20 text-center sm:py-28">
          <h1 className="text-6xl font-bold uppercase tracking-tight sm:text-8xl">
            <span className="text-teal">G</span>
            <span className="text-amber">P</span>
            <span className="text-[#007b93]">S</span>
          </h1>
          <p className="mt-2 text-2xl font-medium tracking-wide text-mist sm:text-3xl">
            Gifts Passion Story
          </p>

          <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-relaxed text-mist-soft">
            Everyone has a calling: the God-given intersection of gifts,
            passions and stories. But not everyone knows their calling. GPS
            helps people explore those three signals, gifts, passions, stories,
            and find their place in the kingdom. From detailed assessment
            questions to journaling exercises, GPS leads people into a deeper
            understanding of their one-of-a-kind Masterpiece Missions. You can
            get started by taking an online self-assessment that will focus on
            your GPS. After you complete the test, your results will be emailed
            to you as well as one of our ministry coaches who will be available
            to help you get connected and find training and/or support as
            needed.
          </p>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex rounded-[3px] bg-teal px-8 py-3.5 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-teal-deep"
            >
              Request Info to Get Started
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
