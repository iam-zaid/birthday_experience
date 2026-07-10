export const SITE_CONTENT = {
  wordmark: "A small present for you",
  greeting: "Hello, beautiful!",
  greetingMessage:
    "Welcome to this tiny experience for your special day. Now there will be few surprises that will unfold as the days will pass. So sit back, smile and most importantly be happy!",
  birthdayTarget: "2026-07-14T00:00:00+05:30",
  birthdayLabel: "14 July · IST",
  footerText: "Designed and developed by Zaid Shaikh",
  firstExperience: {
    heading: "Before we begin, there is something I want you to know.",
    openingMessage:
      "This is just a small version of showing you how amazing of a person you are. There might be few moments when you would feel 'How can someone be this thoughtful ?' but don't worry because I HAVE THAT E...",
    questionOne: {
      prompt: "Do you know how special you are to me?",
      correct: "Of course I do ♡",
      wrong: "Not really",
    },
    questionTwo: {
      prompt: "Do you think this will be one of the best gifts you ever received?",
      correct: "Yes, absolutely",
      wrong: "Not really",
    },
    finalMessage:
      "Now that you have answered it correctly, you are locked in for one great experience!",
  },
};

export type DayPageContent = {
  routeLabel: string;
  dayLabel: string;
  title: string;
  teaser: string;
  message: string[];
  mediaType: "photo" | "video" | "audio" | "letter";
  mediaSrc?: string;
  posterSrc?: string;
};

export const DAY_11_CONTENT: DayPageContent = {
  routeLabel: "11th Day",
  dayLabel: "The one about Third Wave",
  title: "Remeber third wave?",
  teaser: "Haha! I bet you do. Read more to live it again",
  message: [
    "It was the evening of 20th April. You asked me to come to Viviana Mall, but I was honestly skeptical that you'd even show up (which you proved wrong almost instantly). To this day, I'm really glad I came to meet you. You decided we should sit at Third Wave because you had a work meeting, and there I was, wandering around the mall trying to figure out what 'Third Wave' even was!That day, we had a conversation that felt a little overwhelming at the time, but looking back now, it was actually very fitting. We had a trauma-dumping session, an intellectual debate session, and a dating-app bitching session. But my favourite part was definitely the coffee. You ordered one that tasted absolutely awful, and gosh, you were so disappointed.",
    "I wanted to highlight this because I still remember that day, I still even remember the conversation I had with the Uber guy! Anyways enough English, kuch humari language me arz kar dete hai. Ye bayan karta hai uss manzar ko jab aapse mulaqat hui:",
    "Jis waqt ki dastaan ban gaye",
    "Uss waqt ko bhi nhi pata," ,
    "Ki aapki maujudgi ne," ,
    "Uss waqt ko Anmol bana diya hai"
  ],
  mediaType: "photo",
  mediaSrc: "/media/photos/day-4.png",
};

export const DAY_12_CONTENT: DayPageContent = {
  routeLabel: "12th Day",
  dayLabel: "12 July",
  title: "A place that still feels like us.",
  teaser: "Today returns to a view, a walk, or one small moment that quietly became ours.",
  message: [
    "[Write the 12th Day memory here.]",
    "[You can mention Marine Drive, the sea, a walk, or another place connected to both of you.]",
  ],
  mediaType: "photo",
  mediaSrc: "/media/photos/day-3.svg",
};

export const DAY_13_CONTENT: DayPageContent = {
  routeLabel: "13th Day",
  dayLabel: "13 July",
  title: "Something I wanted you to hear.",
  teaser: "A voice note or a short video belongs behind today’s page.",
  message: [
    "[Introduce the recording or video here.]",
    "[Add the media file to public/media and update this object.]",
  ],
  mediaType: "video",
  mediaSrc: "",
  posterSrc: "/media/photos/day-2.svg",
};

export const BIRTHDAY_CONTENT: DayPageContent = {
  routeLabel: "Birthday",
  dayLabel: "14 July",
  title: "Happy birthday, my love.",
  teaser: "Every previous page is open, and the final one has been waiting for you.",
  message: [
    "[Place your complete birthday wish here.]",
    "[Add another paragraph about what you admire, value, or hope to celebrate together.]",
    "[Finish with your own sign-off.]",
  ],
  mediaType: "video",
  mediaSrc: "",
  posterSrc: "/media/photos/day-0.svg",
};
