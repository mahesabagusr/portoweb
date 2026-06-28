import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface SocialLink {
  label: string;
  href: string;
  icon: LucideIcon;
  display: string;
}

export interface TechItem {
  name: string;
  icon: string;
}

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
    icon: Instagram,
    display: '@mahesabagus.r',
  },
  {
    label: 'Email',
    href: 'mailto:mahesabagusraditya1@gmail.com',
    icon: Mail,
    display: 'mahesabagusraditya1@gmail.com',
  },
];
