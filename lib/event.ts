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
  id: "underground-night-summer-2026",
  title: "Underground Night",
  tagline: "A night of worship, teaching & community on the Gulf Coast",
  description:
    "Come sit at the feet of Jesus with us. One night, one family — worship, the Word, and space to belong. Bring a friend. Everyone's welcome at the table.",
  startsAt: "2026-07-18T18:00:00",
  location: "Gulf Coast Underground Hub",
  address: "1109 Cowan Road, Unit B9, Gulfport, MS 39507",
  ctaLabel: "Save Your Spot",
  ctaHref: "/events#underground-night-summer-2026",
};

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
    id: "underground-night-summer-2026",
    title: "Underground Night",
    date: "2026-07-18T18:00:00",
    endTime: "8:30 PM",
    location: "Gulf Coast Underground Hub",
    address: "1109 Cowan Road, Unit B9, Gulfport, MS 39507",
    description:
      "A night of worship, teaching, and community. Come as you are — there's room for you here.",
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
