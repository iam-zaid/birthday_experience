export const SITE_CONTENT = {
  wordmark: "A small present for you",
  greeting: "Hello, beautiful!",
  greetingMessage:
    "Welcome to this tiny experience for your special day. Now there will be few surprises that will unfold as the days will pass. So sit back, smile and most importantly be happy!",
  birthdayTarget: "2026-07-14T00:00:00+05:30",
  birthdayLabel: "ARZ KIYA HAI!",
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
  title: "Remember third wave?",
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
  dayLabel: "The one about you!",
  title: "Few Things About You!",
  teaser: "Today we will dive into the your cute little habits",
  message: [
    `Don't want to brag, but I'm pretty sure I come at the top of your favourites list. 😌`,

`Here are a few little things I've noticed about you over time:`,

`1. Your like fragrances. I specifically remember you mentioning about how you want to buy new ones and having the best ones always in collection.`,
`2. You like to plan for almost everything! Gosh I had no clue I would someone like you who plans even their next date, Exhausting but cute`,
`3. Your ability to turn every bad experience into a life lesson (wo baat alag hai you have a lot😂). And I kid you not, listening to you have changed my perspective towards a lot of things as well. `,
`4. When it comes to jewellery, you almost always prefer something customized because it feels more personal. I remember you buying one for Sakhaviya or be it about wedding planning. FYI I know what to gift you in jewellry now :)`,
`5. You always make sure I wake up on time. Aesa nahi hai ki I dont notice, so bohot bohot shukriya aapka ':)`,
`6. And of course, your wedding planning mode. I don't think I've met anyone who's thought about it as much as you have. 😄`,

`One thing I hope you know is how much I admire and respect your ambition. Aesa bohot rare hua hai mere saath ki itni Azeem shaksiyat se mulawat ho and I get so motivated by their presence! You put your heart into whatever you do, and that's something I really look up to. Thank you for being exactly who you are. Being around you makes me want to become a better version of myself, and that's one of the many things I appreciate about you.`,
`Lastly one line jo already tumhe pata hai `,

`Paani me patthar mat maaro`, 
`Usse bhhi koi peeta hai`,
`Jaane ki baat mat karo`,
`Tumhe dekh ke bhi koi jeeta hai`
  ],
  mediaType: "photo",
  mediaSrc: "/media/photos/day-3.png",
};

export const DAY_13_CONTENT: DayPageContent = {
  routeLabel: "13th Day",
  dayLabel: "The one with 70 beans",
  title: "70 beans, Viviana, Zudio and You ",
  teaser: "Ready to impress?",
  message: [
    `By now you must be expecting the same old note and details, par here is the twist. Aaj tum humari baatein padhoge nahi par apne shabdon me mujhe bataoge. Memories will be the same, details will also be the same but perspective and zubaan aapki rahegi. So here we go!`,

    `1. 70 beans cafe me what exactly happened and your reaction to the day.`,
    `2. What made us decide to go for shopping in Zudio`,
    `3. Did you or did you not help me pick clothes in Zudio?`,
    `4. Why did we decide to meet in Viviana again? (PS: jab hume pata tha AC nahi chal rha!!)`,
    `Well itna kuch sunke ke baad I dont think aur bhi lines sunna chahoge, isiliye aaj koi lines nahi. But just one day to go and really excited for everything eh? Well I am, but that day will have one of my originals mentioned for you. So stay tuned for tomorrow!`
  ],
  mediaType: "photo",
  mediaSrc: "/media/photos/day-2.png",
};

export const BIRTHDAY_CONTENT: DayPageContent = {
  routeLabel: "Birthday",
  dayLabel: "Its your Birthday!",
  title: "Happy birthday, Himna",
  teaser: "Every previous page is open, and the final one has been waiting for you.",
  message: [
    `This is the final page of this small gift and it is just a wish from me. I thought of writing a lot lekin maine already bohot likh diya hai yaha. 
    One thing I want to highlight today is this is your day, enjoy to your fullest! Whatever I wanted to say about you, I already have written it. And afterall 'Husn-e Jaana ki taarif mumkin nahi.. Afreen Afreen '
    Keeping this short here is last few lines from my end:`,

    `Apne Mubarak din ko Khushiyon se sarshaar kijiye`,
    `Apne aap me chupi khoobiyon ko Numayan kijiye`,
    `Aapki aamad ka manzar hi kuch aisa tha, ae Himna`,
    `Phoolon se hawaon ne kaha "Ab toh bahaar kar dijiye"`,
    `Thank you for being patient to go through everything Himna! You are one of a gem person and deserve the best in your life. I will always pray that you get the best of best in life (means me haha ;) jk). With that hum iss gift ko end karte hai and Happy Birthday!!!`
  ],
  mediaType: "photo",
  mediaSrc: "/media/photos/day-0.png"
};
