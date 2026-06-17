/* eslint-disable @next/next/no-img-element */

/**
 * The shared inner-page hero used across the live site: the Gulf Coast banner
 * with a teal wash and the white GC Underground wordmark. Matches the home
 * hero treatment but shorter.
 */
export function BannerHero() {
  return (
    <section className="relative isolate flex min-h-[200px] items-center justify-center overflow-hidden sm:min-h-[260px]">
      <img
        src="/images/quadrant-3.jpg"
        alt=""
        aria-hidden
        className="absolute inset-0 -z-20 h-full w-full object-cover brightness-105 saturate-[1.15]"
      />
      <div className="absolute inset-0 -z-10 bg-teal/45" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-teal-darkest/20 via-transparent to-teal-darkest/40" />
      <img
        src="/images/logo-06.png"
        alt="Gulf Coast Underground, Missio Dei"
        className="mx-auto w-[88%] max-w-2xl px-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]"
      />
    </section>
  );
}
