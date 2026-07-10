"use client";

import { AmbientBackground } from "@/components/AmbientBackground";
import { BirthdayConfetti } from "@/components/BirthdayConfetti";
import { LockedPage } from "@/components/LockedPage";
import { SurpriseContent } from "@/components/SurpriseContent";
import { BIRTHDAY_CONTENT } from "@/content/siteContent";
import { usePageDateUnlocked, usePagesVisited } from "@/lib/pagesVisited";

export function BirthdayPageExperience() {
  const [pagesVisited] = usePagesVisited();
  const dateReady = usePageDateUnlocked("birthday");
  if (!pagesVisited || dateReady === null) return <main className="loadingScreen">Preparing the birthday page…</main>;

  // Hard-coded progress check for Birthday page.
  if (pagesVisited !== "VVVV") {
    return <LockedPage message="Complete the 13th Day page and press ‘Loved it’ before opening the birthday page." />;
  }

  // Simple production date gate: progress AND 14 July in IST must both be ready.
  if (!dateReady) {
    return <LockedPage message="The birthday page opens at 12:00 AM IST on 14 July." />;
  }

  return (
    <>
      <AmbientBackground />
      <BirthdayConfetti />
      <SurpriseContent content={BIRTHDAY_CONTENT} birthday />
    </>
  );
}
