import Link from "next/link";
import { SITE_CONTENT } from "@/content/siteContent";

export function SiteHeader({ rightText }: { rightText?: string }) {
  return (
    <header className="topbar">
      <Link className="wordmark" href="/">
        <span className="monogram">14</span>
        {SITE_CONTENT.wordmark}
      </Link>
      {rightText ? <div className="dateChip">{rightText}</div> : null}
    </header>
  );
}
