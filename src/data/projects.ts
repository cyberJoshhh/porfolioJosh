import type { Project } from "@/types";

/*
 * DRAFT: reworded from the previous site's project list for business owners.
 * To confirm with Joshua before publishing:
 *  - "My part" for each project (solo, or with a team?).
 *  - A 1280x800 screenshot of each (save to public/projects/ and set `image`).
 *  - Live and code links (a link left as "#" is hidden on the page).
 * Left out on purpose until confirmed: "Piloted with 3 classrooms".
 */
export const projects: Project[] = [
  {
    // Facts from the live site. Joshua built the whole site (confirmed).
    id: "rpr-1030",
    title: "RPR 1030 Corporation",
    summary: "Company website for an ICT systems integrator in Tacurong City.",
    problem:
      "An ICT company serving local governments, schools and businesses across Region XII needed one place to show what it does and who it works with.",
    built:
      "A company profile site covering its services, from fire protection and solar power to AI, cyber security and cloud, plus its clients, partners and contact details, with a banner for its new Orange WiFi service.",
    myPart: "Design and development",
    tools: ["HTML", "CSS", "JavaScript"],
    image: {
      src: "/projects/rprprime.jpg",
      alt: "The RPR 1030 Corporation homepage: the company name and the line “Leading ICT System Integrator, Pioneering Digital Transformation” beside the RPR 1030 logo.",
    },
    links: [{ label: "Open the live site", href: "https://rprprime.com/" }],
  },
  {
    // Facts from the live site.
    // TODO: Joshua's part on this project is not confirmed yet, so "My part" is
    // left out (the row is hidden). Add `myPart` once known.
    id: "orange-wifi",
    title: "Orange WiFi",
    summary: "Voucher WiFi: pick a plan, pay, and connect.",
    problem:
      "People at a hotspot want to get online quickly, without a SIM card, a contract or waiting for someone to sell them access.",
    built:
      "The portal where customers choose a 1-, 7-, 15- or 30-day plan, pay with GCash, QR Ph or a card, and get a voucher code to connect. It also invites hotspot owners to join as partners.",
    tools: ["HTML", "Tailwind CSS", "JavaScript"],
    image: {
      src: "/projects/orange.jpg",
      alt: "The Orange WiFi homepage: the headline “The fastest voucher WiFi in the Philippines” beside a voucher card showing time left and connection speed.",
    },
    links: [{ label: "Open the live site", href: "https://orange-portal.net/" }],
  },
  {
    id: "teacher-parent",
    title: "Teacher–Parent Interaction System",
    summary: "One place for kindergarten teachers and parents to stay in touch.",
    problem:
      "Teachers kept parents informed with paper notebooks and group chats, and parents had little to go on between conferences.",
    built:
      "A web platform with separate dashboards for teachers and parents. Teachers record each child's performance and send reports; parents check in any time and message the teacher directly.",
    myPart: "Full stack",
    tools: ["HTML", "CSS", "Bootstrap", "MySQL"],
    image: null,
    links: [
      { label: "Open the live site", href: "#" },
      { label: "See the code", href: "#" },
    ],
  },
  {
    id: "captive-portal",
    title: "Captive Portal",
    summary: "Pay-to-connect WiFi, paid with GCash or Maya.",
    problem:
      "Selling WiFi access means taking payments and switching people on, and doing that by hand doesn't scale.",
    built:
      "A portal that appears when someone joins the WiFi. They choose a plan, pay with GCash or Maya, and get online as soon as the payment is confirmed. Behind it sit accounts, subscription plans and user management.",
    myPart: "Back-end and security",
    tools: ["React", "Node.js", "MongoDB", "PayMongo", "WifiDog"],
    image: null,
    links: [
      { label: "Open the live site", href: "#" },
      { label: "See the code", href: "#" },
    ],
  },
];
