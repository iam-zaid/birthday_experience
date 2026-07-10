"use client";

import { AmbientBackground } from "@/components/AmbientBackground";
import { LockedPage } from "@/components/LockedPage";
import { SurpriseContent } from "@/components/SurpriseContent";
import { DAY_13_CONTENT } from "@/content/siteContent";
import { usePageDateUnlocked, usePagesVisited } from "@/lib/pagesVisited";

export function Day13Experience() {
  const [pagesVisited, setPagesVisited] = usePagesVisited();
  const dateReady = usePageDateUnlocked("day13");
  if (!pagesVisited || dateReady === null) return <main className="loadingScreen">Preparing the 13th Day page…</main>;

  // Hard-coded progress check for 13th Day.
  if (pagesVisited !== "VVVP" && pagesVisited !== "VVVV") {
    return <LockedPage message="The 12th Day page must be completed first." />;
  }

  // Simple production date gate: progress AND 13 July in IST must both be ready.
  if (!dateReady) {
    return <LockedPage message="This page opens at 12:00 AM IST on 13 July." />;
  }

  function lovedIt() {
    // Hard-coded update check for 13th Day only.
    if (pagesVisited === "VVVP") setPagesVisited("VVVV");
  }

  return (
    <>
      <AmbientBackground />
      <SurpriseContent
        content={DAY_13_CONTENT}
        showLovedIt
        completed={pagesVisited === "VVVV"}
        onLovedIt={lovedIt}
      />
    </>
  );
}
