import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { EventPopup } from "@/components/EventPopup";
import { CountdownBar } from "@/components/CountdownBar";

export const metadata: Metadata = {
  title: {
    default: "Gulf Coast Underground | A Mission Hub on the Gulf Coast",
    template: "%s | Gulf Coast Underground",
  },
  description:
    "Gulf Coast Underground is a mission hub on the Mississippi Gulf Coast advancing the Missio Dei — equipping everyday people to live in missional rhythms through discipleship, community, and gospel transformation.",
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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Navbar />
        {/* pb gives clearance for the fixed countdown bar */}
        <main className="flex-1 pb-12">{children}</main>
        <Footer />
        <EventPopup />
        <CountdownBar />
      </body>
    </html>
  );
}
