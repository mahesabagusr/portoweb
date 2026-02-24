import { Github, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon | IconType;
  display: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

export const techStack: TechItem[] = [
  { name: 'React', icon: 'https://cdn.simpleicons.org/react/61DAFB' },
  { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript/3178C6' },
  { name: 'Vite', icon: 'https://cdn.simpleicons.org/vite/646CFF' },
  { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
  { name: 'ReactBits', icon: 'https://cdn.simpleicons.org/react/ffffff' },
  { name: 'ExpressJs', icon: 'https://cdn.simpleicons.org/express/ffffff' },
];

export const socialLinks: SocialLink[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/mahesabagusr',
    icon: Github,
    display: 'mahesabagusr',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/mahesabagusr',
    icon: Linkedin,
    display: 'Mahesa Bagus Raditya',
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com/mahesabagus.r',
    icon: FaInstagram,
    display: '@mahesabagus.r',
  },
  {
    label: 'Email',
    href: 'mailto:mahesabagusraditya1@gmail.com',
    icon: Mail,
    display: 'mahesabagusraditya1@gmail.com',
  },
];
