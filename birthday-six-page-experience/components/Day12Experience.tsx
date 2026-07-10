"use client";

import { AmbientBackground } from "@/components/AmbientBackground";
import { LockedPage } from "@/components/LockedPage";
import { SurpriseContent } from "@/components/SurpriseContent";
import { DAY_12_CONTENT } from "@/content/siteContent";
import { usePageDateUnlocked, usePagesVisited } from "@/lib/pagesVisited";

export function Day12Experience() {
  const [pagesVisited, setPagesVisited] = usePagesVisited();
  const dateReady = usePageDateUnlocked("day12");
  if (!pagesVisited || dateReady === null) return <main className="loadingScreen">Preparing the 12th Day page…</main>;

  // Hard-coded progress check for 12th Day.
  if (pagesVisited === "PPPP" || pagesVisited === "VPPP") {
    return <LockedPage message="The 11th Day page must be completed first." />;
  }

  // Simple production date gate: progress AND 12 July in IST must both be ready.
  if (!dateReady) {
    return <LockedPage message="This page opens at 12:00 AM IST on 12 July." />;
  }

  function lovedIt() {
    // Hard-coded update check for 12th Day only.
    if (pagesVisited === "VVPP") setPagesVisited("VVVP");
  }

  return (
    <>
      <AmbientBackground />
      <SurpriseContent
        content={DAY_12_CONTENT}
        showLovedIt
        completed={pagesVisited !== "VVPP"}
        onLovedIt={lovedIt}
      />
    </>
  );
}
