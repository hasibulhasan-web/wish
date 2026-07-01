import './style.css';

// ═══════════════════════════════════════════════════════════════
// দৈনিক স্মৃতি — A Literary Birthday Newspaper
// ═══════════════════════════════════════════════════════════════

// Page Content Data
const pages = [
  // ─────────────────────────────────────────────────────────────
  // PAGE 1 — Opening (Dark, mysterious)
  // ─────────────────────────────────────────────────────────────
  {
    type: 'intro',
    content: `
      <div class="stagger-children" style="text-align: center; padding: var(--space-xl);">
        <p class="prose-large" style="font-size: clamp(1.1rem, 5vw, 1.5rem);">হাই...</p>
        <p class="prose-large" style="margin-top: var(--space-xl);">আমি তোমার বন্ধু।</p>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 2 — Friendly Hello (still on dark)
  // ─────────────────────────────────────────────────────────────
  {
    type: 'intro',
    content: `
      <div class="stagger-children" style="text-align: center; padding: var(--space-xl);">
        <p class="prose-large" style="opacity: 0.7; margin-bottom: var(--space-xl);">এবার একটু মনোযোগ দাও।</p>
        <p class="prose" style="font-size: clamp(1rem, 4vw, 1.2rem); opacity: 0.9;">আমার নামটা... থাক।</p>
        <p class="prose" style="margin-top: var(--space-md); font-size: clamp(1rem, 4vw, 1.2rem); opacity: 0.7;">তুমি আমাকে চিনবে না।</p>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 3 — The Reveal (transition to paper)
  // ─────────────────────────────────────────────────────────────
  {
    type: 'prose',
    content: `
      <p class="prose-large text-center" style="color: var(--ink-faded);">তোমার বন্ধু ঐশী</p>
      <p class="prose-large text-center" style="margin-top: var(--space-lg);">এই পুরো প্ল্যানটা করেছে।</p>
      <p class="prose text-center" style="margin-top: var(--space-xl); color: var(--ink-medium);">তাই গল্পটা এখন থেকে ঐশীই বলুক।</p>
      <p class="prose text-center" style="margin-top: var(--space-xl); color: var(--ink-faded);">চলো, আজ তোমার সম্পর্কে কিছু কথা বলা যাক।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 4 — Masthead / Cover (proper newspaper)
  // ─────────────────────────────────────────────────────────────
  {
    type: 'masthead',
    content: `
      <header class="masthead ink-reveal">
        <h1 class="masthead-title">দৈনিক স্মৃতি</h1>
        <div class="masthead-meta">
          <span>বিশেষ সংখ্যা</span>
          <span>অনলি সংকলন</span>
        </div>
      </header>
      <div class="prose-large text-center ink-reveal" style="margin-top: var(--space-2xl); color: var(--ink-medium);">
        <p>একটি ব্যক্তিগত সংবাদপত্র।</p>
        <p style="margin-top: var(--space-md); color: var(--ink-faded); font-size: var(--body-text);">একটি মানুষকে নিয়ে।</p>
      </div>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 5 — The Funny Beat
  // ─────────────────────────────────────────────────────────────
  {
    type: 'prose',
    content: `
      <p class="prose-large drop-cap">একটা কথা বলি? মাঝে মাঝে তোমাকে দেখি এমনভাবে মুচকি হাসছ— কিন্তু কি নিয়ে হাসছ, সেটা তুমি নিজেও জানো না। আর সেই হাসির রহস্য ভেদ করতে গিয়ে আমি যতবার ব্যর্থ হয়েছি, ততবার ভেবেছি— হয়তো কোনো গোপন জোকস আছে যা শুধু তুমি আর এই মহাবিশ্ব জানো।</p>
      <p class="prose" style="margin-top: var(--space-lg); color: var(--ink-faded);">এই দুনিয়ার সবচেয়ে বড় রহস্য নয়, তবু বেশ কৌতূহলের বিষয়।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 5 — First Photo / The Person
  // ─────────────────────────────────────────────────────────────
  {
    type: 'photo',
    photo: 1,
    caption: 'প্রথম অধ্যায়',
    content: `
      <p class="headline-large text-center" style="margin-bottom: var(--space-lg);">এই ছবিটা দেখছ?</p>
      <p class="prose text-center">চিনতে পেরেছ?</p>
      <p class="prose-large text-center" style="margin-top: var(--space-lg);">হ্যাঁ... এটাই সেই মানুষ, যাকে নিয়ে আজকের পুরো গল্পটা লেখা হয়েছে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 6 — The Story Begins
  // ─────────────────────────────────────────────────────────────
  {
    type: 'prose',
    content: `
      <p class="headline-medium">কোনো এক সময়ে, কোনো এক স্থানে, একটা মানুষ ছিল— যে নিজের অজান্তেই অনেক মানুষের জীবনে ঢুকে পড়ল।</p>
      <p class="prose-large" style="margin-top: var(--space-xl);">নাম সাদিয়া।</p>
      <p class="prose" style="margin-top: var(--space-md);">সহজ, ঠিক? কিন্তু সেই নামের পেছনের গল্পটা এতটাও সহজ নয়।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 7 — About That Smile
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০১',
    headline: 'একটা হাসি',
    content: `
      <p class="prose-large drop-cap">লোকেরা বলে হাসি সংক্রামক। কিন্তু তোমার হাসির কথা আলাদা। সেটা শুধু সংক্রামক নয়— সেটা একটা ছোটখাটো বিপ্লব। যখন তুমি হাসো, আশেপাশের সবকিছু এক মুহূর্তের জন্য থেমে যায়।</p>
      <p class="prose" style="margin-top: var(--space-lg);">ভাবো না এটা আমি একা লিখছি। এটা প্রায় সবাই বলে, যারা তোমাকে চেনে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 8 — Small Moments
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০২',
    headline: 'ছোট ছোট মুহূর্ত',
    content: `
      <p class="prose-large drop-cap">কোনো বড় ঘটনার কথা বলব না। বড় ঘটনাগুলো মানুষ মনে রাখে। আমি সেই ছোট ছোট মুহূর্তগুলোর কথা বলছি— যেগুলো মনের কোণে জমে থাকে, কিন্তু কেউ খেয়াল করে না।</p>
      <p class="prose" style="margin-top: var(--space-lg);">যেমন— কথা বলার সময়ে মাঝে মাঝে তুমি একটু থামো। কি ভাবো তখন? হয়তো কিছুই না। কিন্তু সেই থামাটা— সেই ছোট নীরবতা— সেটাই গল্পের উপাদান।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 9 — Memories
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০৩',
    headline: 'স্মৃতির স্তরে',
    content: `
      <p class="prose-large drop-cap">স্মৃতি বলে কিছু আছে কি? নাকি সব শুধুই বর্তমানের আয়নায় অতীতকে দেখার চেষ্টা? তোমাকে নিয়ে যা মনে আছে, সেগুলো একেবারে স্বচ্ছ নয়। কিছুটা ধোঁয়াটে, কিছুটা কুয়াশাচ্ছন্ন— কিন্তু সেই অস্পষ্টতার মধ্যেও কিছু একটা আছে যা কখনো ম্লান হয় না।</p>
      <p class="prose" style="margin-top: var(--space-lg);">তোমার উপস্থিতি— সেটাই সবচেয়ে বড় স্মৃতি।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 10 — Beautiful Observations
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০৪',
    headline: 'অনুভূতির জালে',
    content: `
      <p class="prose-large drop-cap">তুমি লোকজনকে দেখো— সেটা একটা কৌতূহল থেকে নয়, একটা আন্তরিকতা থেকে। যখন কারো কথা শোনো, শুধু শোনোই না— বোঝার চেষ্টা করো। এই সাধারণ বিষয়টা অনেকের মধ্যে নেই।</p>
      <p class="prose" style="margin-top: var(--space-lg);">তোমার মধ্যে আছে। এটাই তোমার অন্যতম বিশেষত্ব।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 11 — Personality
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০৫',
    headline: 'চরিত্রের ছাপ',
    content: `
      <p class="prose-large drop-cap">বলা কঠিন যে তুমি ঠিক কেমন। কখনো গাম্ভীর্যপূর্ণ, কখনো হালকা, কখনো ভাবুক, কখনো বাস্তববাদী। এই বিপরীতমুখী স্বভাবগুলো কোনোমতে একসাথে থাকে— আর সেই মিশ্রণটাই তোমাকে তুমি করে।</p>
      <p class="prose" style="margin-top: var(--space-lg);">সহজে বোঝা যায় না, কিন্তু যে বোঝে, সে আর ভুলে না।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 12 — Kindness
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০৬',
    headline: 'সহানুভূতি',
    content: `
      <p class="prose-large drop-cap">পৃথিবীতে দয়ালু মানুষের অভাব নেই, কিন্তু তোমার সহানুভূতি আলাদা। সেটা কোনো দায়িত্ব থেকে নয়— সেটা তোমার স্বভাবের গভীর থেকে আসে। যখন কেউ কষ্ট পায়, তুমি তা শুধু লক্ষ্য করোই না— সেই কষ্টকে ভাগ করার চেষ্টা করো।</p>
      <p class="prose" style="margin-top: var(--space-lg);">এটা সবার মধ্যে থাকে না। তোমার মধ্যে আছে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 13 — Habits
  // ─────────────────────────────────────────────────────────────
  {
    type: 'timeline',
    date: 'স্মৃতি সংকলন — ০৭',
    headline: 'ছোট ছোট অভ্যাস',
    content: `
      <p class="prose-large drop-cap">সবার কিছু না কিছু অভ্যাস থাকে। তোমারও আছে। কিছু অভ্যাস আছে যেগুলো তুমি হয়তো নিজেও খেয়াল করো না— কিন্তু আমি করি। যেমন, কিছু ভাবার সময়ে তুমি খানিকটা চুপ করো। কিংবা কোনো কিছু মনে পড়লে হঠাৎ হাসো।</p>
      <p class="prose" style="margin-top: var(--space-lg);">এই ছোট ছোট কথাগুলো— এগুলোই একটা মানুষকে মানুষ করে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 14 — Photo 1: Laughing
  // ─────────────────────────────────────────────────────────────
  {
    type: 'photo',
    photo: 2,
    caption: 'অধ্যায় — এক',
    content: `
      <p class="prose-large text-center drop-cap" style="text-indent: 0;">এই ছবিতে তুমি হাসছ।</p>
      <p class="prose text-center" style="margin-top: var(--space-lg);">কোনো একটা মুহূর্তে, এই হাসিটা কারো কাছে প্রিয় স্মৃতি হয়ে গেছে। হয়তো তুমি জানো না। হয়তো সেই মুহূর্তটা কারো জীবনের একটা উষ্ণ অধ্যায়।</p>
      <p class="prose text-center" style="margin-top: var(--space-md); color: var(--ink-faded);">একটা হাসি অনেক কিছু বলে— যা কথায় বলা যায় না।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 15 — Photo 2: Standing Together
  // ─────────────────────────────────────────────────────────────
  {
    type: 'photo',
    photo: 3,
    caption: 'অধ্যায় — দুই',
    content: `
      <p class="prose-large text-center">এই ছবিতে তুমি আছো— আর আছে একজন বন্ধু।</p>
      <p class="prose text-center" style="margin-top: var(--space-lg);">দুজনে পাশাপাশি। কোনো বড় গল্প নেই— শুধু একটা সাধারণ মুহূর্ত। কিন্তু সময়ের কোনো একটা স্থানে, এই সাধারণ মুহূর্তটাকে মনে রাখা হয়েছে।</p>
      <p class="prose text-center" style="margin-top: var(--space-md); color: var(--ink-faded);">বন্ধুত্বের গল্প কখনো বড় হয় না— সে শুধু থাকে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 16 — Photo 3: Hiding Face
  // ─────────────────────────────────────────────────────────────
  {
    type: 'photo',
    photo: 4,
    caption: 'অধ্যায় — তিন',
    content: `
      <p class="prose-large text-center">এই ছবিতে তুমি মুখ লুকাচ্ছ।</p>
      <p class="prose text-center" style="margin-top: var(--space-lg);">কিছু মানুষ আছে যারা নিজের সৌন্দর্য ধরে না। তারা লুকাতে চায়, কিন্তু লুকানোর সময়েও তারা কিছু একটা হারায় না— বরং আরও রহস্যময় হয়ে ওঠে।</p>
      <p class="prose text-center" style="margin-top: var(--space-md); color: var(--ink-faded);">লুকানোর মধ্যেও একটা আলাদা সৌন্দর্য আছে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 17 — Photo 4: Looking Left
  // ─────────────────────────────────────────────────────────────
  {
    type: 'photo',
    photo: 5,
    caption: 'অধ্যায় — চার',
    content: `
      <p class="prose-large text-center">এই ছবিতে তুমি বাম দিকে তাকিয়েছ।</p>
      <p class="prose text-center" style="margin-top: var(--space-lg);">কি দেখছ? আগামীর কোনো আভাস? নাকি অতীতের কোনো চিহ্ন? যা-ই হোক, সেই দৃষ্টি— সেই চাহনি— সেটা কিছু কিছু প্রশ্ন জাগায়।</p>
      <p class="prose text-center" style="margin-top: var(--space-md); color: var(--ink-faded);">যিনি অন্যদিকে তাকায়, তিনি হয়তো নতুন কিছুর সন্ধানে থাকেন।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 18 — Photo 5: Looking at Camera
  // ─────────────────────────────────────────────────────────────
  {
    type: 'photo',
    photo: 6,
    caption: 'অধ্যায় — পাঁচ',
    content: `
      <p class="prose-large text-center">এই ছবিতে তুমি সরাসরি তাকিয়েছ।</p>
      <p class="prose text-center" style="margin-top: var(--space-lg);">চোখে চোখ রাখা— সেটা সবার পক্ষে সম্ভব হয় না। কিন্তু যে করে, সে আর সহজে ভুলে যায় না।</p>
      <p class="prose text-center" style="margin-top: var(--space-xl);">এই পুরো গল্পটাই ছিল তোমাকে নিয়ে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 19 — The Reveal
  // ─────────────────────────────────────────────────────────────
  {
    type: 'prose',
    content: `
      <p class="headline-medium text-center">প্রতিটা বছর নতুন কিছু নিয়ে আসে।</p>
      <p class="prose-large text-center" style="margin-top: var(--space-xl);">নতুন গল্প, নতুন হাসি, নতুন স্মৃতি।</p>
      <p class="prose text-center" style="margin-top: var(--space-lg); color: var(--ink-faded);">আজকের এই দিনটাও কিছু নিয়ে এসেছে। কি এনেছে? সেটা সময়ই বলবে।</p>
    `
  },

  // ─────────────────────────────────────────────────────────────
  // PAGE 20 — Fading
  // ─────────────────────────────────────────────────────────────
  {
    type: 'ending',
    content: `
      <div class="final-message">
        <p class="prose fading-text text-center">প্রতিটা কাগজ একদিন পুরনো হয়।</p>
        <p class="prose fading-text text-center" style="margin-top: var(--space-md);">প্রতিটা পাতা হলুদ হয়।</p>
        <p class="prose fading-text text-center" style="margin-top: var(--space-md);">প্রতিটা কালি ম্লান হয়।</p>
        <p class="prose-large text-center" style="margin-top: var(--space-xl); color: var(--ink-medium);">কিন্তু কিছু মানুষ স্মৃতি হয়ে যায়— যারা কখনো ম্লান হয় না।</p>
        <div class="divider-line" style="margin-top: var(--space-2xl);"></div>
        <p class="final-name">শুভ জন্মদিন, সাদিয়া।</p>
        <p class="prose-small deeply-fading text-center" style="margin-top: var(--space-lg);">— ঐশী</p>
      </div>
    `
  }
];

// ─────────────────────────────────────────────────────────────
// Render Functions
// ─────────────────────────────────────────────────────────────

function createPageHTML(page, index) {
  let extraClasses = '';
  let contentHTML = '';

  switch (page.type) {
    case 'intro':
      extraClasses = 'page-intro';
      contentHTML = `
        <div class="intro-content" style="display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 100%; width: 100%; padding: var(--page-padding);">
          ${page.content}
        </div>
      `;
      break;

    case 'masthead':
      extraClasses = 'paper-texture';
      contentHTML = `<div class="page-content">${page.content}</div>`;
      break;

    case 'photo':
      extraClasses = 'paper-texture photo-page';
      contentHTML = `
        <div class="photo-frame">
          <div class="photo-inner">
            <div class="photo-placeholder">
              [ ছবি যোগ করুন ]
            </div>
          </div>
          <span class="photo-date">অ্যালবাম থেকে</span>
          <div class="photo-caption">${page.caption}</div>
        </div>
        <div class="page-content">
          ${page.content}
        </div>
      `;
      break;

    case 'timeline':
      extraClasses = 'paper-texture timeline-page';
      contentHTML = `
        <div class="page-content">
          <div class="timeline-date">${page.date}</div>
          ${page.headline ? `<p class="headline-medium">${page.headline}</p>` : ''}
          <div class="prose-large" style="margin-top: var(--space-lg);">
            ${page.content}
          </div>
        </div>
      `;
      break;

    case 'ending':
      extraClasses = 'paper-texture ending-page';
      contentHTML = `<div class="page-content">${page.content}</div>`;
      break;

    case 'full':
      extraClasses = 'paper-texture page-full';
      contentHTML = `<div class="page-content">${page.content}</div>`;
      break;

    case 'prose':
    default:
      extraClasses = 'paper-texture';
      contentHTML = `
        <div class="page-content">
          ${page.content}
        </div>
      `;
      break;
  }

  return `
    <section class="page ${extraClasses}" data-page="${index}" data-type="${page.type}">
      ${contentHTML}
      ${index < pages.length - 1 ? '<div class="next-cue">পরবর্তী</div>' : ''}
    </section>
  `;
}

function renderApp() {
  const appEl = document.getElementById('app');
  const pagesHTML = pages.map((page, i) => createPageHTML(page, i)).join('');

  appEl.innerHTML = `
    <div class="pages-container">
      ${pagesHTML}
    </div>
  `;
}

// ─────────────────────────────────────────────────────────────
// Typewriter Effect
// ─────────────────────────────────────────────────────────────

function typeWriter(element, text, speed = 40) {
  // Check for reduced motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    element.innerHTML = text;
    return Promise.resolve();
  }

  const chars = text.split('');
  element.innerHTML = '';

  return new Promise((resolve) => {
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.className = 'typewriter-char';
      span.textContent = char === ' ' ? '\u00A0' : char;
      element.appendChild(span);

      setTimeout(() => {
        span.classList.add('visible');
        if (i === chars.length - 1) {
          resolve();
        }
      }, i * speed);
    });
  });
}

// ─────────────────────────────────────────────────────────────
// Intersection Observer for Page Activation
// ─────────────────────────────────────────────────────────────

function observePages() {
  const pageElements = document.querySelectorAll('.page');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          const page = entry.target;
          if (!page.classList.contains('active')) {
            page.classList.add('active');

            // Trigger typewriter if needed
            const isTypewriterPage = page.dataset.type === 'prose' &&
              page.querySelector('[data-typewriter]') !== null;

            if (isTypewriterPage) {
              // Will implement if needed
            }
          }
        }
      });
    },
    {
      threshold: [0.5, 1],
      rootMargin: '0px'
    }
  );

  pageElements.forEach((page) => observer.observe(page));
}

// ─────────────────────────────────────────────────────────────
// Initialize
// ─────────────────────────────────────────────────────────────

function init() {
  renderApp();

  // Activate first page immediately
  setTimeout(() => {
    const firstPage = document.querySelector('.page');
    if (firstPage) {
      firstPage.classList.add('active');
    }

    observePages();
  }, 100);
}

// Run on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
