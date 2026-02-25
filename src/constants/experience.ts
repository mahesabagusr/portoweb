import type { Variants } from 'framer-motion';

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  links?: { text: string; href: string }[];
}

export const experienceData: ExperienceItem[] = [
  {
    company: 'Humic (Human Centric Engineering)',
    location: 'Bandung, Indonesia',
    role: 'Backend Developer',
    period: 'Sept 2025 - Now',
    description:
      'Developing Internify as a backend developer, refactoring the codebase by establishing a clear code system and file structure, and migrating databases from raw SQL to Prisma ORM.',
    links: [{ text: 'Internify', href: 'https://internify.humicprototyping.com/' }],
  },
  {
    company: 'Google Developer Group on Campus - Telkom University Bandung',
    location: 'Bandung, Indonesia',
    role: 'Core Team - Head of Mentor & Curriculum',
    period: '2025 - Now',
    description:
      "Leading the mentor & curriculum division by teaching intermediate JavaScript and ReactJS with Tailwind 4, creating a PRD to guide the study group's major assignments, and assessing all major assignments alongside other mentors.",
  },
  {
    company: 'Google Developer Group on Campus - Telkom University Bandung',
    location: 'Bandung, Indonesia',
    role: 'Core Team - Mentor & Curriculum of Web Development',
    period: '2024 - 2025',
    description:
      "Served as a mentor teaching intermediate JavaScript and ReactJS with Tailwind 4, created a PRD to guide the study group's major assignments, and assessed all major assignments with other mentors.",
  },
  {
    company: 'Content Team Steamatel',
    location: 'Purwokerto, Indonesia',
    role: 'UI Designer',
    period: '2023 - 2024',
    description:
      'Designed promotional posters and congratulatory visuals for school events, created banners for school promotion, and produced Instagram feed content around tips and tricks.',
  },
  {
    company: 'Digital Business Technology - Telkom Indonesia',
    location: 'Jakarta, Indonesia',
    role: 'Internship Backend Developer',
    period: 'Apr 2023 - Oct 2023',
    description:
      'Built a user management system using Node.js and Express.js, and wrote unit tests to validate code quality using Mocha, Chai, and Sinon.',
  },
  {
    company: 'Teaching Factory - Telkom Indonesia',
    location: 'Purwokerto, Indonesia',
    role: 'Backend Developer Trainee',
    period: '2022 - 2023',
    description:
      'Built an application using Node.js with the Restify.js framework, learned SQL and NoSQL database implementation, and practiced code versioning and team collaboration.',
  },
];

export const experienceCardVariants: Variants = {
  offscreen: (index: number) => ({
    y: 60,
    opacity: 0,
    scale: 0.95,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.7,
      delay: index * 0.1,
    },
  }),
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.7,
      delay: index * 0.1,
    },
  }),
};
