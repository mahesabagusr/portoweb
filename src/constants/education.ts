import type { Variants } from 'framer-motion';
import TelkomUni from '@/assets/images/telkomuni.webp';
import TelkomSch from '@/assets/images/telkomsch.webp';

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  logo?: string;
}

export const educationData: EducationItem[] = [
  {
    institution: 'Telkom University Bandung',
    degree: 'Bachelor of Informatics',
    period: '2024 - Now',
    logo: TelkomUni,
  },
  {
    institution: 'SMK Telkom Purwokerto',
    degree: 'Software Engineering',
    period: '2021 - 2024',
    logo: TelkomSch,
  },
];

export const cardVariants: Variants = {
  offscreen: (index: number) => ({
    y: 50,
    opacity: 0,
    scale: 0.9,
    transition: {
      type: 'inertia',
      bounce: 0.3,
      duration: 0.7,
      delay: index * 0.2,
    },
  }),
  onscreen: (index: number) => ({
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'keyframes',
      bounce: 0.3,
      duration: 0.7,
      delay: index * 0.2,
    },
  }),
};
