import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-black/10 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-3">
            <Logo className="h-11 w-11" />
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-mist">
              Gulf Coast Underground
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-mist-soft">
            A mission hub on the Mississippi Gulf Coast, advancing the Missio Dei
            by equipping everyday people to live in missional rhythms right where
            they are.
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-teal">
            Explore
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-mist-soft">
            <li><Link href="/who-we-are" className="hover:text-mist">Who We Are</Link></li>
            <li><Link href="/connect" className="hover:text-mist">Connect</Link></li>
            <li><Link href="/events" className="hover:text-mist">Events</Link></li>
            <li><Link href="/discover-your-part" className="hover:text-mist">Discover Your Part</Link></li>
            <li><Link href="/support" className="hover:text-mist">Give</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-widest text-teal">
            Visit & Connect
          </h3>
          <address className="mt-4 space-y-2 text-sm not-italic text-mist-soft">
            <p>1109 Cowan Road, Unit B9<br />Gulfport, MS 39507</p>
            <p>
              <a href="mailto:gcundergroundmission@gmail.com" className="hover:text-mist">
                gcundergroundmission@gmail.com
              </a>
            </p>
          </address>
          <Link
            href="/contact"
            className="mt-4 inline-block rounded-full border border-black/10 px-4 py-2 text-xs font-semibold text-mist transition-colors hover:bg-black/[0.04]"
          >
            Get in touch
          </Link>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-mist-soft sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Gulf Coast Underground. All rights reserved.</p>
          <p>Advancing the Missio Dei on the Gulf Coast.</p>
        </div>
      </div>
    </footer>
  );
}
