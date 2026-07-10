import Link from "next/link";
import { AmbientBackground } from "@/components/AmbientBackground";

export function LockedPage({ message }: { message: string }) {
  return (
    <>
      <AmbientBackground />
      <main className="lockedPage">
        <section className="lockedCard">
          <p className="kicker">Still wrapped</p>
          <h1>This page is waiting for the page before it.</h1>
          <p className="lead">{message}</p>
          <Link className="luxButton" href="/">
            Return home
          </Link>
        </section>
      </main>
    </>
  );
}
