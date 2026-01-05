const BASE = import.meta.env.VITE_BASE_URL || "/";

/* =======================
   EDUCATION DATA
   ======================= */
export const education = [
  {
    institution: "International Multidisciplinary School, Tunisia",
    degree: "Engineer in Software Engineering",
    period: "2023 – 2026",
  },
  {
    institution:
      "Higher Institute of Computer Science and Communication Technologies (ISITCOM), Tunisia",
    degree: "Bachelor in Embedded Systems and Computer engineering",
    period: "2019 – 2023",
  },
];

/* =======================
   EXPÉRIENCES
   ======================= */
export const experiences = [
  {
    company: "Sastec Group",
    role: "Full stack developer",
    period: "Octobre 2024 – Present",
    description:
      "I contribute to the development of scalable, production-ready web applications on Othentis and Certeafiles using modern JavaScript and cloud technologies. I collaborate with cross-functional teams to design, develop, and deploy features that enhance user experience and meet business requirements.",
    tech: [
      "React.js",
      "Next.js",
      "Node.js",
      "Hono.js",
      "PostgreSQL",
      "Git",
      "Docker",
      "TypeScript",
      "Git",
      "ClickUp",
      "Cloudflare",
    ],
    logo: `${BASE}images/logo_placeholder.png`,
  },
  {
    company: "Macentrale",
    role: "Full Stack Developer",
    period: "November 2023 – May 2024",
    description:
      "Contributed to the improvement and maintenance of an existing web platform « AirwayBillData » by refactoring legacy React class components into modern functional components with hooks. Optimized backend database queries to enhance performance, reduce response time, and improve overall system efficiency.",
    tech: ["React.js", "Laravel", "Bootstrap", "MySQL", "Git", "Trello"],
    logo: `${BASE}images/logo_placeholder.png`,
  },
  {
    company: "3DWave",
    role: "Web Development Intern",
    period: "February 2023 – June 2023",
    description:
      "Developed a healthcare platform that connects patients with verified doctors, allowing users to find healthcare professionals, initiate direct contact, and securely share medical information. Implemented a real-time chat module to enable instant communication between patients and doctors.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io", "Git"],
    logo: `${BASE}images/logo_placeholder.png`,
  },
];
