import type { Metadata } from "next";
import { Raleway, Open_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventPopup } from "@/components/EventPopup";
import { CountdownBar } from "@/components/CountdownBar";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-raleway",
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
  variable: "--font-opensans",
  display: "swap",
});

export const metadata: Metadata = {
  // Used to build absolute URLs for the favicon, Open Graph and Twitter
  // share images. On Vercel this resolves to the live production domain
  // automatically; falls back to the ministry's domain otherwise.
  metadataBase: new URL(
    process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://gulfcoastunderground.org",
  ),
  title: {
    default: "Gulf Coast Underground | A Mission Hub on the Gulf Coast",
    template: "%s | Gulf Coast Underground",
  },
  description:
    "Gulf Coast Underground is a mission hub on the Mississippi Gulf Coast advancing the Missio Dei, equipping everyday people to live in missional rhythms through discipleship, community, and gospel transformation.",
  keywords: [
    "Gulf Coast Underground",
    "Gulfport ministry",
    "Mississippi Gulf Coast church",
    "discipleship",
    "microchurch",
    "Discovery Bible Study",
    "Missio Dei",
  ],
  openGraph: {
    title: "Gulf Coast Underground",
    description:
      "A mission hub on the Mississippi Gulf Coast equipping everyday people to live in missional rhythms.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gulf Coast Underground",
    description:
      "A mission hub on the Mississippi Gulf Coast equipping everyday people to live in missional rhythms.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${raleway.variable} ${openSans.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        {/* pb gives clearance for the fixed countdown bar */}
        <main className="flex-1 pb-12">{children}</main>
        <Footer />
        <EventPopup />
        <CountdownBar />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
