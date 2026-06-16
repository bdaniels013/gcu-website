/**
 * Central configuration for the featured event.
 *
 * This single object powers:
 *   - the full-page popup that appears when the site first loads
 *   - the scrolling countdown bar pinned to the bottom of every page
 *   - the highlighted event on the /events page
 *
 * To feature a different event, just edit the fields below.
 */
export interface FeaturedEvent {
  id: string;
  title: string;
  tagline: string;
  description: string;
  /** ISO 8601 date-time in local time, e.g. "2026-07-18T18:00:00" */
  startsAt: string;
  location: string;
  address: string;
  ctaLabel: string;
  ctaHref: string;
}

export const featuredEvent: FeaturedEvent = {
  id: "underground-gala-2026",
  title: "GC Underground Gala",
  tagline: "Second Annual · “Fishers of Men”",
  description:
    "A night of breaking bread & spreading the Gospel. “Where the harvest is plentiful, but the laborers are few.” Limited tickets available — text 228-669-3696 to lock in your spot now.",
  startsAt: "2026-09-17T18:00:00",
  location: "Biloxi Visitors Center",
  address: "1050 Beach Blvd, Biloxi, MS 39530",
  ctaLabel: "Reserve Your Spot",
  ctaHref: "/gala",
};

/**
 * The Gala — full details for the dedicated /gala page. Mirrors the format
 * of last year's "Africa the Gala" (sponsorship tiers + dollar amounts kept
 * identical), updated for this year's date, venue, and "Fishers of Men" theme.
 */
export const gala = {
  ordinal: "Second Annual",
  title: "GC Underground Gala",
  theme: "Fishers of Men",
  tagline: "A Night of Breaking Bread & Spreading the Gospel",
  verses: [
    "Blessed are the poor in spirit, for theirs is the kingdom of heaven.",
    "Where the harvest is plentiful, but the laborers are few.",
  ],
  dateLabel: "Thursday, September 17, 2026",
  timeLabel: "6:00 – 9:00 PM",
  venue: "Biloxi Visitors Center",
  venueAddress: "1050 Beach Blvd, Biloxi, MS 39530",
  startsAtISO: "2026-09-17T18:00:00",
  ticketNote: "Limited number of tickets available",
  reserveNumber: "228-669-3696",
  reserveNumberRaw: "2286693696",
  reserveMessage: "GALA",
};

export interface SponsorTier {
  /** Nautical name for this year's "Fishers of Men" theme (last year used
   *  Africa animals: Lion / Gorilla / Giraffe / Elephant). */
  name: string;
  price: string;
  benefits: string[];
  highlighted?: boolean;
}

/** Sponsorship levels — benefits & dollar amounts copied from last year. */
export const galaSponsorTiers: SponsorTier[] = [
  {
    name: "Whale",
    price: "$3,500",
    highlighted: true,
    benefits: [
      "Main event sponsor including corporate logo on entrance signs",
      "Presenting sponsor including corporate logo throughout evening presentations and mentions throughout the evening",
      "Corporate logo on center pieces at all tables",
      "Large corporate logo on event web landing page",
      "Eight person table at the event",
    ],
  },
  {
    name: "Shark",
    price: "$2,000",
    benefits: [
      "Presenting sponsor including corporate logo throughout evening presentations and mentions throughout the evening",
      "Corporate logo on center pieces at all tables",
      "Large corporate logo on event web landing page",
    ],
  },
  {
    name: "Dolphin",
    price: "$1,000",
    benefits: [
      "Silent auction sponsor including corporate logo on silent auction signs and mentions with every mention of the silent auction",
      "Corporate logo on event web landing page",
    ],
  },
  {
    name: "Sea Turtle",
    price: "$250 – $500",
    benefits: [
      "Corporate logo on event web landing page and a mention at the event",
    ],
  },
];

export interface GcuEvent {
  id: string;
  title: string;
  date: string; // ISO
  endTime?: string;
  location: string;
  address: string;
  description: string;
  tag: "Gathering" | "DBS" | "Microchurch" | "Training" | "Outreach";
}

/** All upcoming events listed on the /events page. */
export const events: GcuEvent[] = [
  {
    id: "underground-gala-2026",
    title: "Second Annual GC Underground Gala — “Fishers of Men”",
    date: "2026-09-17T18:00:00",
    endTime: "9:00 PM",
    location: "Biloxi Visitors Center",
    address: "Biloxi Visitors Center · Biloxi, MS",
    description:
      "A night of breaking bread and spreading the Gospel. Limited number of tickets available — text 228-669-3696 to lock in your spot now.",
    tag: "Gathering",
  },
  {
    id: "dbs-weekly",
    title: "Discovery Bible Study (DBS)",
    date: "2026-06-19T19:00:00",
    endTime: "8:00 PM",
    location: "Various homes across the Gulf Coast",
    address: "Contact us for the group nearest you",
    description:
      "Learn to read, obey, and share the Scriptures together. No experience needed — just open hands and an open heart.",
    tag: "DBS",
  },
  {
    id: "microchurch-gathering",
    title: "Microchurch Gathering",
    date: "2026-06-22T17:30:00",
    endTime: "7:00 PM",
    location: "Gulfport & Biloxi neighborhoods",
    address: "Reach out to find your nearest microchurch",
    description:
      "Small, family-sized communities living out the way of Jesus in everyday rhythms — a shared meal, the Word, and prayer.",
    tag: "Microchurch",
  },
  {
    id: "discipleship-training",
    title: "Missional Rhythms Training",
    date: "2026-08-02T10:00:00",
    endTime: "1:00 PM",
    location: "Gulf Coast Underground Hub",
    address: "1109 Cowan Road, Unit B9, Gulfport, MS 39507",
    description:
      "A hands-on workshop for anyone wanting to start something new or get equipped to disciple others where they already are.",
    tag: "Training",
  },
  {
    id: "coast-outreach",
    title: "Coast Outreach Day",
    date: "2026-08-16T09:00:00",
    endTime: "12:00 PM",
    location: "Gulfport waterfront",
    address: "Meet at the Gulf Coast Underground Hub",
    description:
      "Serving our neighbors and sharing good news together. Families welcome — let's be the hands and feet of Jesus on the coast.",
    tag: "Outreach",
  },
];
