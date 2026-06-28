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
    company: 'Teaching Factory - Telkom Indonesia',
    location: 'Purwokerto, Indonesia',
    role: 'Backend Developer Trainee',
    period: '2022 - 2023',
    description:
      'Built an application with Node.js and Restify.js, learned SQL and NoSQL implementation, and practiced code versioning and team collaboration.',
  },
  {
    company: 'Digital Business Technology - Telkom Indonesia',
    location: 'Jakarta, Indonesia',
    role: 'Internship Backend Developer',
    period: 'Apr 2023 - Oct 2023',
    description:
      'Built a user management system with Node.js and Express.js, and wrote unit tests with Mocha, Chai, and Sinon.',
  },
  {
    company: 'Content Team Steamatel',
    location: 'Purwokerto, Indonesia',
    role: 'UI Designer',
    period: '2023 - 2024',
    description:
      'Designed promotional posters and event visuals, created banners for school promotion, and produced Instagram feed content with tips and tricks.',
  },
  {
    company: 'Google Developer Group on Campus - Telkom University Bandung',
    location: 'Bandung, Indonesia',
    role: 'Mentor & Curriculum of Web Development',
    period: '2024 - 2025',
    description:
      'Mentored intermediate JavaScript and ReactJS with Tailwind, authored a PRD to guide study-group assignments, and assessed them with other mentors.',
  },
  {
    company: 'Google Developer Group on Campus - Telkom University Bandung',
    location: 'Bandung, Indonesia',
    role: 'Head of Mentor & Curriculum',
    period: '2025 - Now',
    description:
      'Led the Mentor & Curriculum division for 800+ members, overseeing educational strategy across 4 technical divisions and designing the "Grand Task" framework and evaluation metrics.',
  },
  {
    company: 'Humic (Human Centric Engineering)',
    location: 'Bandung, Indonesia',
    role: 'Backend Developer',
    period: 'Sept 2025 - Now',
    description:
      'Backend developer for Internify — refactored the codebase with a clear code system and file structure, and migrated databases from raw SQL to Prisma ORM.',
    links: [{ text: 'Internify', href: 'https://internify.humicprototyping.com/' }],
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
