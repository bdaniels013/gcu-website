/**
 * Central configuration for the featured event.
 *
 * This single object powers:
 * - the full-page popup that appears when the site first loads
 * - the scrolling countdown bar pinned to the bottom of every page
 * - the highlighted event on the /events page
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

/** Email used for gala tickets, tables & sponsorships. */
export const galaEmail = "gcundergroundmission@gmail.com";

export const featuredEvent: FeaturedEvent = {
  id: "underground-gala-2026",
  title: "GC Underground Gala",
  tagline: "Second Annual · “Fishers of Men”",
  description:
    "A night of breaking bread & spreading the Gospel. Tickets, tables & sponsorships available.",
  startsAt: "2026-09-17T18:00:00",
  location: "Biloxi Visitors Center",
  address: "1050 Beach Blvd, Biloxi, MS 39530",
  ctaLabel: "Learn More About the Event",
  ctaHref: "/gala",
};

/**
 * The Gala — full details for the dedicated /gala page.
 * Sponsor tiers + extras taken from the "Fishers of Men" sponsorship flyer.
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
  ticketNote: "Tickets, tables & sponsorships available",
  email: galaEmail,
};

export interface SponsorTier {
  name: string;
  subtitle?: string;
  price: string;
  availability?: string;
  benefits: string[];
  highlighted?: boolean;
}

/** Sponsorship levels — verbatim from the "Fishers of Men" sponsorship flyer. */
export const galaSponsorTiers: SponsorTier[] = [
  {
    name: "Presenting Sponsor",
    subtitle: "Fishers of Men presenting sponsor",
    price: "$10,000",
    availability: "1 available",
    highlighted: true,
    benefits: [
      'Exclusive "Presented By" recognition',
      "Largest logo placement on all event materials",
      "Welcome remarks opportunity",
      "Premium reserved table for eight",
      "Full-page program recognition",
      "Website & social media spotlight",
      "VIP recognition throughout the evening",
    ],
  },
  {
    name: "Lighthouse Sponsor",
    subtitle: "Guiding others to Christ",
    price: "$5,000",
    availability: "2 available",
    highlighted: true,
    benefits: [
      "Premier logo placement",
      "Premium reserved table for eight",
      "Half-page program recognition",
      "Website recognition",
      "Stage recognition during event",
      "Social media recognition",
    ],
  },
  {
    name: "Captain's Table Sponsor",
    subtitle: "Leading the mission",
    price: "$2,500",
    benefits: [
      "Reserved table for eight",
      "Quarter-page program recognition",
      "Event screen recognition",
      "Website recognition",
      "Sponsor recognition during program",
    ],
  },
  {
    name: "Nets of Harvest Sponsor",
    subtitle: "Gathering souls for the kingdom",
    price: "$1,000",
    benefits: [
      "Logo displayed during event",
      "Website recognition",
      "Event recognition",
      "Two reserved seats",
    ],
  },
  {
    name: "Crew Member Sponsor",
    price: "$500",
    benefits: [
      "Name recognition during event",
      "Website listing",
      "Program recognition",
    ],
  },
  {
    name: "Friends of the Mission",
    price: "$250",
    benefits: ["Program listing", "Website recognition"],
  },
];

/** Table & individual ticket options from the flyer. */
export const galaTickets = [
  {
    name: "Mission Table",
    price: "$800",
    note: "Reserved table for eight guests",
    includes: [
      "Preferred seating",
      "Dinner service",
      "Mission presentation",
      "Fellowship & networking",
    ],
  },
  {
    name: "Individual Ticket",
    price: "$100",
    note: "Per guest",
    includes: ["Event admission", "Dinner", "Program", "Mission presentation"],
  },
];

/** Weekly schedule shown in the top banner (RSVP opens Google Calendar). */
export interface ScheduleItem {
  title: string;
  day: string; // human label
  byDay: string; // iCal BYDAY code, e.g. "WE"
  time: string; // human label
  startTime: string; // "HH:MM" 24h
  endTime: string; // "HH:MM" 24h
  location: string;
}

export const schedule: ScheduleItem[] = [
  {
    title: "Men's Bible Study",
    day: "Wednesday",
    byDay: "WE",
    time: "12:00 PM",
    startTime: "12:00",
    endTime: "13:00",
    location: "1109 Cowan Road, Unit B9, Gulfport, MS 39507",
  },
  {
    title: "Men's Bible Study",
    day: "Friday",
    byDay: "FR",
    time: "12:00 PM",
    startTime: "12:00",
    endTime: "13:00",
    location: "1109 Cowan Road, Unit B9, Gulfport, MS 39507",
  },
  {
    title: "Men's Bible Study",
    day: "Saturday",
    byDay: "SA",
    time: "8:30 AM",
    startTime: "08:30",
    endTime: "09:30",
    location: "1109 Cowan Road, Unit B9, Gulfport, MS 39507",
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
    title: "Second Annual GC Underground Gala, “Fishers of Men”",
    date: "2026-09-17T18:00:00",
    endTime: "9:00 PM",
    location: "Biloxi Visitors Center",
    address: "Biloxi Visitors Center · Biloxi, MS",
    description:
      "A night of breaking bread and spreading the Gospel. Limited number of tickets available, text 228-669-3696 to lock in your spot now.",
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
      "Learn to read, obey, and share the Scriptures together. No experience needed, just open hands and an open heart.",
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
      "Small, family-sized communities living out the way of Jesus in everyday rhythms, a shared meal, the Word, and prayer.",
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
      "Serving our neighbors and sharing good news together. Families welcome, let's be the hands and feet of Jesus on the coast.",
    tag: "Outreach",
  },
];
