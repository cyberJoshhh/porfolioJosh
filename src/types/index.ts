/** A heading: plain words in uppercase sans, the accent in italic serif. */
export interface Title {
  before?: string;
  accent: string;
  after?: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  /** One line: what it is. */
  summary: string;
  /** The business problem it answers. */
  problem: string;
  /** What was built, in plain language. */
  built: string;
  /** The author's honest role on the project. Leave out until confirmed: the row is hidden. */
  myPart?: string;
  /** The main tools used. */
  tools: string[];
  /** A 1280x800 screenshot in public/projects/. null shows a titled placeholder. */
  image: {
    src: string;
    alt: string;
  } | null;
  /** Skip any link whose href is "#" at render time. */
  links: ProjectLink[];
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  items: string[];
}

export interface Service {
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface ProcessStep {
  title: string;
  body: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface NavLink {
  label: string;
  href: string;
}
