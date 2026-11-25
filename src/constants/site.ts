import type { FaqItem, NavLink, ProcessStep, Service, Stat, Title } from "@/types";

/**
 * All page copy lives in this file so wording can be edited in one place.
 * Anything marked DRAFT is wording written on Joshua's behalf: confirm it is
 * true to how he actually works before publishing.
 */

export const SITE = {
  name: "Joshua Diploma",
  role: "Full-stack developer for small businesses and schools",
  tagline: "Sign-ins, payments and dashboards for small businesses and schools.",
  description:
    "Joshua Diploma is a full-stack developer who builds online payment portals, role-based dashboards and messaging tools for small businesses and schools.",
  // TODO: set this to the real production URL once the site is deployed.
  // It feeds the canonical tag, sitemap, robots.txt and structured data.
  url: "https://porfolio-josh.vercel.app",
} as const;

// Search and social metadata, drawn from wording that is already on the site.
export const SEO = {
  // Kept under 60 characters so search results don't truncate it.
  title: "Joshua Diploma | Full-Stack Developer",
  keywords: [
    "Joshua Diploma",
    "full stack developer",
    "web developer",
    "back-end developer",
    "web developer for small businesses",
    "online payment portal",
    "captive portal",
    "GCash payments",
    "school parent portal",
    "React",
    "Node.js",
    "portfolio",
  ],
} as const;

export const CONTACT = {
  email: "josh.waa000@gmail.com",
  // Leave both empty to hide the phone line in the contact section.
  phone: "",
  phoneHref: "",
  ctaLabel: "Talk to Joshua",
  // Web3Forms access key for the contact form. Get one free at https://web3forms.com
  // using the inbox that should receive messages. It is public by design (it is
  // sent from the visitor's browser). While it is empty, the form opens the
  // visitor's email app instead, so the site still works.
  // NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY in Vercel overrides this value.
  web3formsKey: "",
} as const;

export const NAV_LINKS: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

// DRAFT: "Full-Stack Developer" is from the previous site; the other two are
// drawn from the services it listed (back-end development, UI implementation).
export const ROLES = ["Full-Stack Developer", "Back-End Developer", "UI Developer"] as const;

export const HERO = {
  greeting: "Hi, I'm Joshua Diploma",
  title: { before: "A full-stack", accent: "& back-end developer" } satisfies Title,
  intro:
    "I build the sign-ins, online payments and dashboards that help small businesses and schools run themselves, and I explain every step in plain language.",
  primaryCta: CONTACT.ctaLabel,
  secondaryCta: "See my work",
  // The words that circle around the badge.
  badge: "Full-stack developer ✳ Joshua Diploma ✳ ",
} as const;

// DRAFT: the heading, checklist and stats are drawn from the previous site's
// About text, specialties and stats. Confirm them with Joshua.
export const ABOUT = {
  eyebrow: "About me",
  title: { before: "Turning manual work into", accent: "simple online tools" } satisfies Title,
  paragraphs: [
    "I'm a full-stack developer. I like turning a messy, manual process into a tool people actually enjoy using, from the database all the way to the screen.",
    "I own a feature end to end and explain it clearly along the way, so you always know what is being built and why.",
  ],
  checklist: [
    "Online payments with GCash and Maya",
    "Dashboards for each kind of user",
    "APIs and integrations",
    "Designs turned into working screens",
  ],
  cta: "Get in touch",
  // Only real numbers. The tools count is worked out from src/data/skills.ts.
  stats: [
    { value: "1+", label: "Year of experience" },
    { value: "4", label: "Projects built" },
    { value: "2", label: "E-wallets connected" },
  ] satisfies Stat[],
  toolsStatLabel: "Tools I work with",
  photoAlt: "Joshua Diploma, smiling, in a black blazer and a white shirt.",
} as const;

// From the previous site's services list.
export const SERVICES = {
  eyebrow: "What I do",
  title: { before: "Services I", accent: "provide" } satisfies Title,
  items: [
    {
      title: "Web development",
      description:
        "Responsive, modern websites and web apps, built with care for speed and accessibility.",
    },
    {
      title: "Full-stack development",
      description:
        "The whole application, from React on the screen to Node.js and the database behind it.",
    },
    {
      title: "Back-end development",
      description: "APIs, sign-in systems and payment integrations that keep running as you grow.",
    },
    {
      title: "UI implementation",
      description: "Design files turned into responsive, working screens.",
    },
  ] satisfies Service[],
} as const;

export const SKILLS = {
  eyebrow: "My skills",
  title: { before: "Tools I", accent: "work with" } satisfies Title,
  intro:
    "The languages, frameworks and tools I use day to day. You don't need to know any of them: they're here for the developers on your team.",
  cta: "Start a project",
} as const;

export const WORK = {
  eyebrow: "Projects",
  title: { before: "Projects I've", accent: "built" } satisfies Title,
  intro: "Each project started with a real problem, not a technology.",
  labels: {
    problem: "The problem",
    built: "What I built",
    myPart: "My part",
  },
} as const;

// DRAFT: these steps are promises on Joshua's behalf (written scope, staged
// builds, support after launch). Edit to match his real process.
export const PROCESS = {
  eyebrow: "How it works",
  title: { before: "How we", accent: "work together" } satisfies Title,
  steps: [
    {
      title: "We talk",
      body: "You tell me how your business runs and what's slowing it down. You don't need to know anything technical.",
    },
    {
      title: "I send a plan",
      body: "A written plan in plain language: what I'll build, what you'll get, and what it costs, before any work starts.",
    },
    {
      title: "I build it in stages",
      body: "You see working versions along the way instead of one big reveal at the end.",
    },
    {
      title: "We launch together",
      body: "I help your team get started and fix what needs fixing after launch.",
    },
  ] satisfies ProcessStep[],
} as const;

// DRAFT: every answer below is a commitment on Joshua's behalf.
export const FAQ = {
  eyebrow: "Questions",
  title: { before: "Questions owners", accent: "ask first" } satisfies Title,
  items: [
    {
      question: "Do I need to understand technology?",
      answer:
        "No. I explain each choice in plain language and you make the decisions. If something is technical and it doesn't affect your business, I'll just handle it.",
    },
    {
      question: "How much will it cost?",
      answer:
        "It depends on what you need. After we talk, you get a written quote before any work starts.",
    },
    {
      question: "Can you work with what I already have?",
      answer:
        "Often, yes. A current website, a payment account or a spreadsheet can usually be the starting point. If starting fresh would be cheaper for you, I'll say so.",
    },
    {
      question: "Who will actually do the work?",
      answer: "I will. I'm the person you talk to, and I'm responsible for the result.",
    },
  ] satisfies FaqItem[],
} as const;

export const CONTACT_SECTION = {
  eyebrow: "Contact",
  title: { before: "Get in touch", accent: "today" } satisfies Title,
  formTitle: "Leave a message",
  emailLabel: "Email",
  phoneLabel: "Call or text",
  intro:
    "Write a few lines about your business and the problem. I'll reply with a few questions and what I think would help.",
  fields: {
    name: "Your name",
    business: "Your business",
    businessHint: "Optional",
    message: "What needs fixing?",
    messagePlaceholder: "For example: customers pay by message and I lose track of who has paid.",
    reach: "Best way to reach you",
    reachPlaceholder: "Email, phone number or Messenger name",
  },
  // Shown when no Web3Forms key is set: the form opens the visitor's email app.
  submit: "Email this to Joshua",
  submitHint: "This opens your email app with your message ready to send.",
  // Shown when the form sends the message itself.
  send: "Send my message",
  sending: "Sending...",
  sendHint:
    "Your message goes straight to Joshua's inbox, passed on by the form service Web3Forms.",
  success: "Thank you. Your message is on its way to Joshua.",
  error: "That didn't go through. Please try again, or use your email app instead.",
  fallbackCta: "Open my email app instead",
  mailOpened: "Your email app should have opened. Press send there to finish.",
  directLead: "Prefer to write it yourself?",
  phoneLead: "Or call or text:",
  subject: "A project for my business",
} as const;

export const FOOTER = {
  navHeading: "On this page",
  github: { label: "GitHub", href: "https://github.com/cyberJoshhh" },
} as const;
