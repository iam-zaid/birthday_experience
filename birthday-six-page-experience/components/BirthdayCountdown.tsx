"use client";

import { useEffect, useState } from "react";
import { SITE_CONTENT } from "@/content/siteContent";

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  complete: boolean;
};

function getCountdown(): Countdown {
  const difference = new Date(SITE_CONTENT.birthdayTarget).getTime() - Date.now();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, complete: true };
  }

  return {
    days: Math.floor(difference / 86_400_000),
    hours: Math.floor((difference / 3_600_000) % 24),
    minutes: Math.floor((difference / 60_000) % 60),
    seconds: Math.floor((difference / 1_000) % 60),
    complete: false,
  };
}

export function BirthdayCountdown() {
  const [countdown, setCountdown] = useState<Countdown | null>(null);

  useEffect(() => {
    setCountdown(getCountdown());
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  if (!countdown) return <div className="countdownLoading">Preparing the countdown…</div>;

  if (countdown.complete) {
    return (
      <div className="birthdayReached">
        <span>✦</span>
        <strong>Happy Birthday, beautiful!</strong>
        <small>Your birthday page is now waiting for you.</small>
      </div>
    );
  }

  const items = [
    [countdown.days, "Days"],
    [countdown.hours, "Hours"],
    [countdown.minutes, "Minutes"],
    [countdown.seconds, "Seconds"],
  ] as const;

  return (
    <div className="countdownGrid" aria-label={`Countdown to ${SITE_CONTENT.birthdayLabel}`}>
      {items.map(([value, label]) => (
        <div className="countdownUnit" key={label}>
          <strong>{String(value).padStart(2, "0")}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}
