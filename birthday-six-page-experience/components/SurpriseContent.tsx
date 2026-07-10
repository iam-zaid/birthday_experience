import Link from "next/link";
import type { DayPageContent } from "@/content/siteContent";

type SurpriseContentProps = {
  content: DayPageContent;
  showLovedIt?: boolean;
  completed?: boolean;
  onLovedIt?: () => void;
  birthday?: boolean;
};

function MediaBlock({ content }: { content: DayPageContent }) {
  if (content.mediaType === "photo") {
    return content.mediaSrc ? (
      <img className="surpriseImage" src={content.mediaSrc} alt={`${content.dayLabel} memory`} />
    ) : (
      <div className="uploadPlaceholder">Add a photo path in content/siteContent.ts</div>
    );
  }

  if (content.mediaType === "video") {
    return content.mediaSrc ? (
      <video className="surpriseVideo" controls playsInline poster={content.posterSrc} preload="metadata">
        <source src={content.mediaSrc} />
        Your browser does not support this video.
      </video>
    ) : (
      <div className="videoPlaceholder" style={content.posterSrc ? { backgroundImage: `url(${content.posterSrc})` } : undefined}>
        <div>
          <span>▶</span>
          <strong>Video placeholder</strong>
          <small>Add the MP4 path in content/siteContent.ts</small>
        </div>
      </div>
    );
  }

  if (content.mediaType === "audio") {
    return (
      <div className="audioKeepsake">
        {content.posterSrc ? <img src={content.posterSrc} alt="Audio keepsake artwork" /> : null}
        {content.mediaSrc ? <audio controls src={content.mediaSrc} preload="metadata" /> : <p>Add the audio path in content/siteContent.ts.</p>}
      </div>
    );
  }

  return (
    <div className="letterArtwork" style={content.mediaSrc ? { backgroundImage: `url(${content.mediaSrc})` } : undefined}>
      <span>A little letter, saved for this page</span>
    </div>
  );
}

export function SurpriseContent({ content, showLovedIt = false, completed = false, onLovedIt, birthday = false }: SurpriseContentProps) {
  return (
    <main className={`surprisePage dayExperience${birthday ? " birthdayExperience" : ""}`}>
      <div className="surprisePageInner">
        <Link className="backLink" href="/">
          ← Back to home
        </Link>

        <article className="surpriseStory">
          <div className="surpriseStoryMedia">
            <MediaBlock content={content} />
          </div>

          <div className="surpriseStoryCopy">
            <p className="kicker">{content.dayLabel}</p>
            <h1>{content.title}</h1>
            <p className="surpriseTeaser">{content.teaser}</p>
            <div className="messageDivider"><span>✦</span></div>
            <div className="messageBody">
              {content.message.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
            <p className="signature">Your Cutie Zaid</p>

            {showLovedIt ? (
              <div className="lovedItSection">
                <button className="lovedItButton" disabled={completed} onClick={onLovedIt} type="button">
                  {completed ? "Loved it ♡" : "Loved it"}
                </button>
                {completed ? <small>Your reaction is noted! The next one opens tomorrow at 12:00 AM IST.</small> : <small>Pressing this completes today’s page; the next page still waits for its scheduled date.</small>}
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </main>
  );
}
