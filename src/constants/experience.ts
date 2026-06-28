import type { Variants } from 'framer-motion';

export interface ExperienceItem {
  company: string;
  location: string;
  role: string;
  period: string;
  description: string;
  points?: string[];
  tech?: string[];
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
    points: [
      'Develop Internify as a backend developer',
      'Refactor the codebase with a clear code system & file structure',
      'Migrate databases from raw SQL to Prisma ORM',
    ],
    tech: ['Node.js', 'Express.js', 'Prisma', 'SQL'],
    links: [{ text: 'Internify', href: 'https://internify.humicprototyping.com/' }],
  },
  {
    company: 'Google Developer Group on Campus - Telkom University Bandung',
    location: 'Bandung, Indonesia',
    role: 'Core Team - Head of Mentor & Curriculum',
    period: '2025 - Now',
    description:
      'Led the Mentor & Curriculum division for 800+ members, overseeing the educational strategy and specialized Study Groups across 4 technical divisions. designed the "Grand Task" project framework and evaluation metrics to ensure high-quality learning outcomes for all participants.',
    points: [
      'Lead the Mentor & Curriculum division for 800+ members',
      'Oversee educational strategy across 4 technical divisions',
      'Design the "Grand Task" framework & evaluation metrics',
    ],
    tech: ['Leadership', 'Curriculum Design', 'Mentoring'],
  },
  {
    company: 'Google Developer Group on Campus - Telkom University Bandung',
    location: 'Bandung, Indonesia',
    role: 'Core Team - Mentor & Curriculum of Web Development',
    period: '2024 - 2025',
    description:
      "Served as a mentor teaching intermediate JavaScript and ReactJS with Tailwind 4, created a PRD to guide the study group's major assignments, and assessed all major assignments with other mentors.",
    points: [
      'Mentor intermediate JavaScript & ReactJS with Tailwind',
      'Create a PRD to guide study group assignments',
      'Assess major assignments with other mentors',
    ],
    tech: ['JavaScript', 'React', 'Tailwind CSS'],
  },
  {
    company: 'Content Team Steamatel',
    location: 'Purwokerto, Indonesia',
    role: 'UI Designer',
    period: '2023 - 2024',
    description:
      'Designed promotional posters and congratulatory visuals for school events, created banners for school promotion, and produced Instagram feed content around tips and tricks.',
    points: [
      'Design promotional posters & event visuals',
      'Create banners for school promotion',
      'Produce Instagram feed content (tips & tricks)',
    ],
    tech: ['Figma', 'Photoshop', 'Illustrator'],
  },
  {
    company: 'Digital Business Technology - Telkom Indonesia',
    location: 'Jakarta, Indonesia',
    role: 'Internship Backend Developer',
    period: 'Apr 2023 - Oct 2023',
    description:
      'Built a user management system using Node.js and Express.js, and wrote unit tests to validate code quality using Mocha, Chai, and Sinon.',
    points: [
      'Build a user management system with Node.js & Express.js',
      'Write unit tests with Mocha, Chai, and Sinon',
    ],
    tech: ['Node.js', 'Express.js', 'Mocha', 'Chai', 'Sinon'],
  },
  {
    company: 'Teaching Factory - Telkom Indonesia',
    location: 'Purwokerto, Indonesia',
    role: 'Backend Developer Trainee',
    period: '2022 - 2023',
    description:
      'Built an application using Node.js with the Restify.js framework, learned SQL and NoSQL database implementation, and practiced code versioning and team collaboration.',
    points: [
      'Build an application with Node.js & Restify.js',
      'Learn SQL & NoSQL database implementation',
      'Practice code versioning & team collaboration',
    ],
    tech: ['Node.js', 'Restify.js', 'SQL', 'NoSQL', 'Git'],
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
