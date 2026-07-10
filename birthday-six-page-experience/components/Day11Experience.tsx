"use client";

import { AmbientBackground } from "@/components/AmbientBackground";
import { LockedPage } from "@/components/LockedPage";
import { SurpriseContent } from "@/components/SurpriseContent";
import { DAY_11_CONTENT } from "@/content/siteContent";
import { usePageDateUnlocked, usePagesVisited } from "@/lib/pagesVisited";

export function Day11Experience() {
  const [pagesVisited, setPagesVisited] = usePagesVisited();
  const dateReady = usePageDateUnlocked("day11");
  if (!pagesVisited || dateReady === null) return <main className="loadingScreen">Preparing the 11th Day page…</main>;

  // Hard-coded progress check for 11th Day.
  if (pagesVisited === "PPPP") {
    return <LockedPage message="Complete the first experience and press ‘Loved it’ before opening this page." />;
  }

  // Simple production date gate: progress AND 11 July in IST must both be ready.
  if (!dateReady) {
    return <LockedPage message="This page opens at 12:00 AM IST on 11 July." />;
  }

  function lovedIt() {
    // Hard-coded update check for 11th Day only.
    if (pagesVisited === "VPPP") setPagesVisited("VVPP");
  }

  return (
    <>
      <AmbientBackground />
      <SurpriseContent
        content={DAY_11_CONTENT}
        showLovedIt
        completed={pagesVisited !== "VPPP"}
        onLovedIt={lovedIt}
      />
    </>
  );
}
