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
   EXPERIENCES DATA
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

/* =======================
   Skills DATA
   ======================= */
export const skills = {
  Langages: ["Java", "Python", "JavaScript", "TypeScript", "Dart"],
  Frontend: ["React.js", "Next.js", "Flutter", "HTML/CSS"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "Flask", "Hono.js"],
  "Bases de données": ["MongoDB", "PostgreSQL", "MySQL", "Firebase"],
  "Outils & DevOps": ["Git", "Docker", "Kubernetes", "CI/CD", "Cloudflare"],
};

export const projects = [
  {
    title: "Othentis",
    description:
      "Legal compliance platform enabling companies to collect, authenticate, and track administrative documents from their service providers, with automated reminders.",
    tech: [
      "React.js",
      "Prisma",
      "Go",
      "PostgreSQL",
      "Stripe",
      "Zustand",
      "TanStack Query",
    ],
    category: "Full Stack",
    media: {
      type: "carousel",
      images: [
        `${BASE}images/othentis-1.png`,
        `${BASE}images/othentis-2.png`,
        `${BASE}images/othentis-3.png`,
        `${BASE}images/othentis-4.png`,
        `${BASE}images/othentis-5.png`,
        `${BASE}images/othentis-6.png`,
        `${BASE}images/othentis-7.png`,
      ],
    },
  },
  {
    title: "Certeafiles",
    description:
      "Platform for simplifying and automating the assembly, verification, and maintenance of CE technical documentation for medical devices.",
    tech: [
      "React.js",
      "Prisma",
      "Hono.js",
      "PostgreSQL",
      "Stripe",
      "Zustand",
      "TanStack Query",
      "Tiny-MCE",
    ],
    category: "Full Stack",
    media: {
      type: "carousel",
      images: [
        `${BASE}images/certeafiles-1.png`,
        `${BASE}images/certeafiles-2.png`,
        `${BASE}images/certeafiles-3.png`,
        `${BASE}images/certeafiles-4.png`,
        `${BASE}images/certeafiles-5.png`,
        `${BASE}images/certeafiles-6.png`,
        `${BASE}images/certeafiles-7.png`,
        `${BASE}images/certeafiles-8.png`,
        `${BASE}images/certeafiles-9.png`,
        `${BASE}images/certeafiles-10.png`,
      ],
    },
  },
  {
    title: "E-Commerce Platform",
    description:
      "Production-ready e-commerce platform leveraging Next.js App Router, Prisma ORM, Firebase Authentication, and Stripe for secure online payments.",
    tech: ["Next.js", "Prisma", "Firebase", "MongoDB", "Stripe"],
    category: "Full Stack",
    media: {
      type: "carousel",
      images: [
        `${BASE}images/e-shop-1.png`,
        `${BASE}images/e-shop-2.png`,
        `${BASE}images/e-shop-3.png`,
        `${BASE}images/e-shop-4.png`,
        `${BASE}images/e-shop-5.png`,
        `${BASE}images/e-shop-6.png`,
        `${BASE}images/e-shop-7.png`,
        `${BASE}images/e-shop-8.png`,
        `${BASE}images/e-shop-9.png`,
        `${BASE}images/e-shop-10.png`,
      ],
    },
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Real-time chat application with user authentication, enabling instant communication with sound notifications.",
    tech: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.io"],
    category: "Full Stack",
    media: {
      type: "carousel",
      images: [
        `${BASE}images/chat-1.png`,
        `${BASE}images/chat-2.png`,
        `${BASE}images/chat-3.png`,
        `${BASE}images/chat-4.png`,
      ],
    },
  },
  {
    title: "Social Network – X Clone",
    description:
      "Functional clone of X (Twitter) featuring authentication, news feed, social interactions, and real-time notifications.",
    tech: ["Node.js", "React.js", "MongoDB"],
    media: {
      type: "carousel",
      images: [
        `${BASE}images/twitter-1.png`,
        `${BASE}images/twitter-2.png`,
        `${BASE}images/twitter-3.png`,
        `${BASE}images/twitter-4.png`,
        `${BASE}images/twitter-5.png`,
        `${BASE}images/twitter-6.png`,
      ],
    },
  },
];
