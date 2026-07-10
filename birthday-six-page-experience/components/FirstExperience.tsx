"use client";

import Link from "next/link";
import { useState } from "react";
import { AmbientBackground } from "@/components/AmbientBackground";
import { SiteHeader } from "@/components/SiteHeader";
import { SITE_CONTENT } from "@/content/siteContent";
import { usePagesVisited } from "@/lib/pagesVisited";

type Offset = { x: number; y: number };

function MovingWrongOption({ label }: { label: string }) {
  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  function escape() {
    const mobile = typeof window !== "undefined" && window.innerWidth <= 680;
    const horizontal = mobile ? 38 : 105;
    const vertical = mobile ? 24 : 42;
    const nextX = Math.round((Math.random() * 2 - 1) * horizontal);
    const nextY = Math.round((Math.random() * 2 - 1) * vertical);
    setOffset({ x: nextX, y: nextY });
  }

  return (
    <button
      className="ghostButton runawayButton"
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      onPointerEnter={escape}
      onPointerDown={(event) => {
        event.preventDefault();
        escape();
      }}
      onClick={escape}
      type="button"
    >
      {label}
    </button>
  );
}

function CompletionPetals() {
  return (
    <div className="firstExperiencePetals" aria-hidden="true">
      {Array.from({ length: 26 }, (_, index) => (
        <span
          key={index}
          style={
            {
              left: `${(index * 37) % 100}%`,
              "--petal-delay": `${(index % 7) * 0.12}s`,
              "--petal-drift": `${((index % 7) - 3) * 24}px`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

export function FirstExperience() {
  const [pagesVisited, setPagesVisited] = usePagesVisited();
  const [questionOneAnswered, setQuestionOneAnswered] = useState(false);
  const [questionTwoAnswered, setQuestionTwoAnswered] = useState(false);
  const [saved, setSaved] = useState(false);

  if (!pagesVisited) return <main className="loadingScreen">Preparing the first experience…</main>;

  function lovedIt() {
    // Hard-coded update check for first_experience only.
    if (pagesVisited === "PPPP") {
      setPagesVisited("VPPP");
      setSaved(true);
    }
  }

  const alreadyCompleted = pagesVisited !== "PPPP";

  return (
    <>
      <AmbientBackground />
      <main className="siteMain firstExperienceMain">
        <section className="siteShell firstExperienceShell">
          <SiteHeader rightText="First experience" />

          <div className="firstExperienceContent">
            <section className="firstOpeningCard">
              <p className="kicker">Before everything else</p>
              <h2>{SITE_CONTENT.firstExperience.heading}</h2>
              <p className="lead">{SITE_CONTENT.firstExperience.openingMessage}</p>
            </section>

            <section className="questionCard">
              <span className="questionNumber">01</span>
              <p className="kicker">A very easy question</p>
              <h3>{SITE_CONTENT.firstExperience.questionOne.prompt}</h3>
              <div className="questionActions">
                <button className="luxButton" onClick={() => setQuestionOneAnswered(true)} type="button">
                  {SITE_CONTENT.firstExperience.questionOne.correct}
                </button>
                {!questionOneAnswered ? <MovingWrongOption label={SITE_CONTENT.firstExperience.questionOne.wrong} /> : null}
              </div>
              {questionOneAnswered ? <p className="answerAccepted">Correct answer. Obviously. ✦</p> : null}
            </section>

            {questionOneAnswered ? (
              <section className="questionCard questionReveal">
                <span className="questionNumber">02</span>
                <p className="kicker">One more</p>
                <h3>{SITE_CONTENT.firstExperience.questionTwo.prompt}</h3>
                <div className="questionActions">
                  <button className="luxButton" onClick={() => setQuestionTwoAnswered(true)} type="button">
                    {SITE_CONTENT.firstExperience.questionTwo.correct}
                  </button>
                  {!questionTwoAnswered ? <MovingWrongOption label={SITE_CONTENT.firstExperience.questionTwo.wrong} /> : null}
                </div>
                {questionTwoAnswered ? <p className="answerAccepted">That is exactly what I hoped you would say. ♡</p> : null}
              </section>
            ) : null}

            {questionTwoAnswered ? (
              <section className="firstFinale questionReveal">
                <CompletionPetals />
                <div className="finaleOrbit" aria-hidden="true"><span>✦</span></div>
                <p className="kicker">And now, we begin</p>
                <h3>{SITE_CONTENT.firstExperience.finalMessage}</h3>
                <p className="lead">The next page will unlock when you press the button below.</p>

                <button
                  className="lovedItButton"
                  disabled={alreadyCompleted || saved}
                  onClick={lovedIt}
                  type="button"
                >
                  {alreadyCompleted || saved ? "Loved it ♡" : "Loved it"}
                </button>

                {alreadyCompleted || saved ? (
                  <div className="completionMessage">
                    <strong>Your progress is saved.</strong>
                    <Link href="/">Return home — the 11th Day page opens on its scheduled date →</Link>
                  </div>
                ) : null}
              </section>
            ) : null}
          </div>
        </section>
      </main>
    </>
  );
}
