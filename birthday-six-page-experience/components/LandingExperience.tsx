"use client";

import Link from "next/link";
import { AmbientBackground } from "@/components/AmbientBackground";
import { BirthdayCountdown } from "@/components/BirthdayCountdown";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_CONTENT } from "@/content/siteContent";
import { usePageDateUnlocked, usePagesVisited } from "@/lib/pagesVisited";

type NavigationItem = {
  number: string;
  label: string;
  subtitle: string;
  href: string;
  unlocked: boolean;
};

export function LandingExperience() {
  const [pagesVisited] = usePagesVisited();
  const day11DateReady = usePageDateUnlocked("day11");
  const day12DateReady = usePageDateUnlocked("day12");
  const day13DateReady = usePageDateUnlocked("day13");
  const birthdayDateReady = usePageDateUnlocked("birthday");

  if (
    !pagesVisited ||
    day11DateReady === null ||
    day12DateReady === null ||
    day13DateReady === null ||
    birthdayDateReady === null
  ) {
    return <main className="loadingScreen">Preparing your little world…</main>;
  }

  const day11ProgressReady = pagesVisited !== "PPPP";
  const day12ProgressReady = ["VVPP", "VVVP", "VVVV"].includes(pagesVisited);
  const day13ProgressReady = ["VVVP", "VVVV"].includes(pagesVisited);
  const birthdayProgressReady = pagesVisited === "VVVV";

  const navigation: NavigationItem[] = [
    { number: "01", label: "Home", subtitle: "You are here", href: "/", unlocked: true },
    {
      number: "02",
      label: "Here we go!",
      subtitle: "The beginning",
      href: "/first_experience/",
      unlocked: true,
    },
    {
      number: "03",
      label: "Remember the Third Wave?",
      subtitle: !day11ProgressReady
        ? "Complete the first experience"
        : !day11DateReady
          ? "Opens 11 July · 12:00 AM IST"
          : "A memory is waiting",
      href: "/11th-day/",
      unlocked: day11ProgressReady && day11DateReady,
    },
    {
      number: "04",
      label: "Things you like!",
      subtitle: !day12ProgressReady
        ? "Complete the 11th Day page"
        : !day12DateReady
          ? "Opens 12 July · 12:00 AM IST"
          : "A memory is waiting",
      href: "/12th-day/",
      unlocked: day12ProgressReady && day12DateReady,
    },
    {
      number: "05",
      label: "13th Day",
      subtitle: !day13ProgressReady
        ? "Complete the 12th Day page"
        : !day13DateReady
          ? "Opens 13 July · 12:00 AM IST"
          : "A memory is waiting",
      href: "/13th-day/",
      unlocked: day13ProgressReady && day13DateReady,
    },
    {
      number: "06",
      label: "Birthday",
      subtitle: !birthdayProgressReady
        ? "Complete the 13th Day page"
        : !birthdayDateReady
          ? "Opens 14 July · 12:00 AM IST"
          : "The final page",
      href: "/birthday/",
      unlocked: birthdayProgressReady && birthdayDateReady,
    },
  ];

  return (
    <>
      <AmbientBackground />
      <main className="siteMain">
        <section className="siteShell landingShell" aria-label="Birthday website home">
          <SiteHeader rightText={SITE_CONTENT.birthdayLabel} />

          <section className="dashboardView landingDashboard">
            <div className="dashboardGrid landingGrid">
              <article className="panel heroPanel landingHero">
                <div className="heroImageWrap">
                  <img src="/media/photos/opening-memory.png" alt="Opening memory placeholder" />
                  <div className="heroImageShade" />
                  <div className="heroDateMark">Made for you</div>
                </div>

                <div className="heroCopy landingHeroCopy">
                  <p className="kicker">Welcome to your little corner</p>
                  <h1>{SITE_CONTENT.greeting}</h1>
                  <p className="lead">{SITE_CONTENT.greetingMessage}</p>
                  <Link className="giftAction ready" href="/first_experience/">
                    <span>✦</span> Begin the experience
                  </Link>
                </div>
              </article>

              <aside className="sideColumn landingSideColumn">
                <section className="panel countPanel homeCountdownPanel">
                  <p className="kicker">Countdown to your birthday</p>
                  <BirthdayCountdown />
                  <p className="finePrint">The countdown is calculated against midnight on 14 July in Indian Standard Time.</p>
                </section>

                <section className="panel timelinePanel pageNavigationPanel">
                  <div className="timelineTitle">
                    <div>
                      <p className="kicker">The journey</p>
                      <h3>Your six pages</h3>
                    </div>
                    <span>6 pages</span>
                  </div>

                  <nav className="timeline" aria-label="Experience pages">
                    {navigation.map((item) => {
                      const content = (
                        <>
                          <span className="timelineIndex">{item.number}</span>
                          <span className="timelineCopy">
                            <strong>{item.unlocked ? item.label : "Still wrapped"}</strong>
                            <small>{item.subtitle}</small>
                          </span>
                          <span className="timelineState">{item.unlocked ? "open" : "locked"}</span>
                        </>
                      );

                      return item.unlocked ? (
                        <Link className="timelineItem" href={item.href} key={item.href}>
                          {content}
                        </Link>
                      ) : (
                        <div className="timelineItem locked" key={item.href} aria-label={`${item.label} locked`}>
                          {content}
                        </div>
                      );
                    })}
                  </nav>
                </section>
              </aside>
            </div>
          </section>
        </section>
      </main>
    </>
  );
}
