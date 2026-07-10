# A Little World for You

A lightweight six-page birthday website built with Next.js, React, TypeScript, and plain CSS. It keeps the original premium marine, botanical, champagne, pearl, and muted-rose visual direction.

## Page structure

1. `/` — landing page
2. `/first_experience/` — opening message, two playful questions, and the first progression button
3. `/11th-day/` — first day page
4. `/12th-day/` — second day page
5. `/13th-day/` — third day page
6. `/birthday/` — final birthday page with continuous background confetti

## Progression model

There is no date-based page unlocking.

The browser stores one local-storage value:

```text
pages_visited
```

Possible values:

```text
PPPP
VPPP
VVPP
VVVP
VVVV
```

Progression:

```text
First experience: PPPP -> VPPP
11th Day:        VPPP -> VVPP
12th Day:        VVPP -> VVVP
13th Day:        VVVP -> VVVV
Birthday:        unlocked at VVVV
```

Each page contains its own explicit route check and its own exact `Loved it` update check. Revisiting an older page never reduces or overwrites later progress.

## Run locally

Use Node.js 22:

```bash
nvm use 22
npm install
npm run dev
```

Open:

```text
http://localhost:3000
```

## Reset and test the complete flow

Open the browser console while viewing the site and run:

```js
localStorage.setItem("pages_visited", "PPPP");
location.href = "/";
```

You can also jump to a specific state:

```js
localStorage.setItem("pages_visited", "VPPP"); // 11th Day unlocked
localStorage.setItem("pages_visited", "VVPP"); // 12th Day unlocked
localStorage.setItem("pages_visited", "VVVP"); // 13th Day unlocked
localStorage.setItem("pages_visited", "VVVV"); // Birthday unlocked
location.reload();
```

To completely remove the value:

```js
localStorage.removeItem("pages_visited");
location.reload();
```

An absent or invalid value is treated as `PPPP`.

## Edit all messages and media

Use:

```text
content/siteContent.ts
```

It contains:

- Landing greeting and welcome message
- Birthday countdown target
- First-experience opening message
- Both questions and answer labels
- First-experience ending message
- 11th, 12th, and 13th Day content
- Birthday content
- Photo, audio, and video file paths

## Birthday countdown

The landing page countdown targets:

```ts
birthdayTarget: "2026-07-14T00:00:00+05:30"
```

The `+05:30` offset is Indian Standard Time. The countdown does not control page unlocking.

## Add personal media

Place media under:

```text
public/media/photos/
public/media/audio/
public/media/video/
```

Then update the related path in `content/siteContent.ts`.

Example video entry:

```ts
mediaType: "video",
mediaSrc: "/media/video/13th-day.mp4",
posterSrc: "/media/photos/13th-day.webp",
```

Recommended formats:

- Images: WebP or AVIF
- Video: MP4/H.264
- Audio: M4A or MP3

## Important UI files

```text
components/LandingExperience.tsx    Landing page and navigation
components/FirstExperience.tsx      Questions and moving wrong options
components/Day11Experience.tsx      Hard-coded 11th Day checks
components/Day12Experience.tsx      Hard-coded 12th Day checks
components/Day13Experience.tsx      Hard-coded 13th Day checks
components/BirthdayPageExperience.tsx
components/SurpriseContent.tsx      Shared day-page visual layout
lib/pagesVisited.ts                 Local-storage read/write hook
app/globals.css                     All styling and animations
```

## Desktop and mobile sizing

The day-page card layout is approximately 90% of the previous desktop size at widths above 920px. Existing mobile sizing remains unchanged.

## Build

```bash
npm run build
```

The project uses static export. The generated site is placed in:

```text
out/
```

The included `netlify.toml` publishes that directory.
