"use client";

import { useEffect, useState } from "react";

export type PagesVisited = "PPPP" | "VPPP" | "VVPP" | "VVVP" | "VVVV";
export type DateGatedPage = "day11" | "day12" | "day13" | "birthday";
export type DateGateMode = "progress-only" | "date-test" | "production";

export const PAGES_VISITED_KEY = "pages_visited";

/**
 * DATE GATE MODES
 *
 * progress-only:
 *   Use while building and testing the complete page sequence. Dates are ignored.
 *
 * date-test:
 *   Use once before production. Change TEST_IST_DATE to impersonate each release day.
 *   Each different TEST_IST_DATE starts with a fresh PPPP test progression automatically.
 *
 * production:
 *   Uses the real date in Asia/Kolkata and unlocks pages at 12:00 AM IST.
 */
export const DATE_GATE_MODE: DateGateMode = "progress-only";
export const TEST_IST_DATE = "2026-07-13";

const PAGE_UNLOCK_DATES: Record<DateGatedPage, string> = {
  day11: "2026-07-11",
  day12: "2026-07-12",
  day13: "2026-07-13",
  birthday: "2026-07-14",
};

const VALID_VALUES: PagesVisited[] = ["PPPP", "VPPP", "VVPP", "VVVP", "VVVV"];
const STORAGE_CONTEXT_KEY = `${PAGES_VISITED_KEY}_context`;

/**
 * Browser localStorage survives npm rebuilds, dev-server restarts, and redeploys.
 * This context marker prevents an old test run from making buttons appear completed
 * when DATE_GATE_MODE or TEST_IST_DATE is changed.
 */
function getStorageContext(): string {
  if (DATE_GATE_MODE === "date-test") return `date-test:${TEST_IST_DATE}`;
  return DATE_GATE_MODE;
}

function ensureStorageContext(): void {
  if (typeof window === "undefined") return;

  const expectedContext = getStorageContext();
  const storedContext = window.localStorage.getItem(STORAGE_CONTEXT_KEY);

  if (storedContext !== expectedContext) {
    window.localStorage.setItem(PAGES_VISITED_KEY, "PPPP");
    window.localStorage.setItem(STORAGE_CONTEXT_KEY, expectedContext);
  }
}

export function readPagesVisited(): PagesVisited {
  if (typeof window === "undefined") return "PPPP";

  ensureStorageContext();
  const stored = window.localStorage.getItem(PAGES_VISITED_KEY);
  return VALID_VALUES.includes(stored as PagesVisited) ? (stored as PagesVisited) : "PPPP";
}

export function writePagesVisited(nextValue: PagesVisited): void {
  if (typeof window === "undefined") return;

  ensureStorageContext();
  window.localStorage.setItem(PAGES_VISITED_KEY, nextValue);
  window.dispatchEvent(new CustomEvent("pages-visited-change", { detail: nextValue }));
}

function getRealIstDate(): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Kolkata",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date());

  const year = parts.find((part) => part.type === "year")?.value;
  const month = parts.find((part) => part.type === "month")?.value;
  const day = parts.find((part) => part.type === "day")?.value;

  return `${year}-${month}-${day}`;
}

export function getCurrentAccessDate(): string {
  if (DATE_GATE_MODE === "date-test") return TEST_IST_DATE;
  return getRealIstDate();
}

export function isPageDateUnlocked(page: DateGatedPage): boolean {
  if (DATE_GATE_MODE === "progress-only") return true;
  return getCurrentAccessDate() >= PAGE_UNLOCK_DATES[page];
}

/**
 * Rechecks once per minute so a page left open across midnight IST can unlock
 * without requiring a browser restart. Refreshing the page also works.
 */
export function usePageDateUnlocked(page: DateGatedPage): boolean | null {
  // Start unresolved so static HTML never embeds a build-time date decision.
  const [unlocked, setUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    const refresh = () => setUnlocked(isPageDateUnlocked(page));
    refresh();

    if (DATE_GATE_MODE === "progress-only" || DATE_GATE_MODE === "date-test") return;

    const interval = window.setInterval(refresh, 60_000);
    return () => window.clearInterval(interval);
  }, [page]);

  return unlocked;
}

export function usePagesVisited(): [PagesVisited | null, (value: PagesVisited) => void] {
  const [value, setValue] = useState<PagesVisited | null>(null);

  useEffect(() => {
    setValue(readPagesVisited());

    const handleStorage = () => setValue(readPagesVisited());
    const handleCustom = (event: Event) => {
      const nextValue = (event as CustomEvent<PagesVisited>).detail;
      setValue(VALID_VALUES.includes(nextValue) ? nextValue : readPagesVisited());
    };

    window.addEventListener("storage", handleStorage);
    window.addEventListener("pages-visited-change", handleCustom);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("pages-visited-change", handleCustom);
    };
  }, []);

  function update(nextValue: PagesVisited) {
    writePagesVisited(nextValue);
    setValue(nextValue);
  }

  return [value, update];
}
