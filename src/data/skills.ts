import type { SkillCategory } from "@/types";

// From the previous site's skills list.
export const skills: SkillCategory[] = [
  {
    id: "frontend",
    title: "Front-End",
    description: "Responsive interfaces built with React and styled with Tailwind or Bootstrap.",
    items: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"],
  },
  {
    id: "backend",
    title: "Back-End",
    description: "REST APIs, sign-ins and payment integrations.",
    items: ["Node.js", "Express.js", "Python", "PayMongo"],
  },
  {
    id: "database",
    title: "Database",
    description: "Data models for the tools behind the interface.",
    items: ["MongoDB", "MySQL"],
  },
  {
    id: "tools",
    title: "Tools",
    description: "Day-to-day tools for building and testing.",
    items: ["GitHub", "VS Code", "Postman"],
  },
];
