import type { Metadata } from "next";
import { Container, LinedHeading } from "@/components/ui";
import { BannerHero } from "@/components/BannerHero";
import { TornDivider } from "@/components/TornDivider";
import { CalendarView } from "@/components/CalendarView";

export const metadata: Metadata = {
  title: "Calendar",
  description:
    "Monthly calendar of Gulf Coast Underground gatherings — weekly Men's Bible Studies and upcoming events across the Mississippi Gulf Coast.",
};

export default function CalendarPage() {
  return (
    <>
      <BannerHero />

      <section className="relative bg-ink">
        <TornDivider fill="fill-ink" position="top" />
        <Container className="py-16 sm:py-20">
          <div className="text-center">
            <LinedHeading>Calendar</LinedHeading>
            <p className="mx-auto mt-8 max-w-2xl text-[15px] leading-relaxed text-mist-soft">
              Here&apos;s what&apos;s happening at the Underground. Our Men&apos;s
              Bible Studies meet every week — tap any study to add it to your
              Google Calendar, and we&apos;d love to see you there.
            </p>
          </div>

          <div className="mt-12">
            <CalendarView />
          </div>
        </Container>
      </section>
    </>
  );
}
