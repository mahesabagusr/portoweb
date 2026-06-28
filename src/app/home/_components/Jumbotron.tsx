'use client';

import { GlassButton } from '@/components/custom/glass-button';
import BlurText from '@/components/custom/BlurText';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Jumbotron(): React.JSX.Element {
  return (
    <div
      id="home"
      className="pointer-events-none relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 pt-2 pb-12 text-center sm:gap-3 sm:pt-4 sm:pb-16 lg:gap-4 lg:pt-6 lg:pb-20"
    >
      <div className="animate-float group pointer-events-auto relative z-10 w-44 sm:w-52 md:w-64 lg:w-72">
        <img
          src="/mahestzy_nobg.webp"
          alt="Mahesa Bagus Raditya"
          width={1536}
          height={1929}
          fetchPriority="high"
          decoding="async"
          className="mask-fade-bottom h-auto w-full object-contain grayscale transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
        />
      </div>

      <div className="relative z-20 -mt-4 flex w-full items-center justify-center sm:-mt-6 md:-mt-8 lg:-mt-16">
        <BlurText
          text="Mahesa Bagus Raditya"
          className="display-mega text-ink justify-center px-2 text-center text-[34px] font-medium sm:text-5xl md:text-6xl lg:text-[64px] xl:text-[80px]"
          delay={150}
          animateBy="words"
          direction="top"
        />
      </div>

      <div className="relative z-20 w-full  space-y-6 px-4 sm:px-6">
        <p className="animate-fade-in text-body fill-mode-[forwards] text-base leading-relaxed font-normal opacity-0 [animation-delay:0.5s] sm:text-lg">
          Undergraduate Informatics Student{' '}
          <span className="text-ink font-medium">@ Telkom University Bandung</span>
        </p>

        <div className="animate-fade-in fill-mode-[forwards] pointer-events-auto flex flex-wrap items-center justify-center gap-x-5 gap-y-3 opacity-0 [animation-delay:0.7s]">
          <a
            href="https://github.com/mahesabagusr"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-body hover:text-ink flex items-center gap-2 transition-colors duration-300"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
            <span className="text-sm font-medium">mahesabagusr</span>
          </a>
          <a
            href="https://linkedin.com/in/mahesabagusr"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-body hover:text-ink flex items-center gap-2 transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
            <span className="text-sm font-medium">Mahesa Bagus Raditya</span>
          </a>
          <a
            href="https://instagram.com/mahesabagus.r"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-body hover:text-ink flex items-center gap-2 transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
            <span className="text-sm font-medium">@mahesabagus.r</span>
          </a>
          <a
            href="mailto:mahesabagusraditya1@gmail.com"
            className="group text-body hover:text-ink flex items-center gap-2 transition-colors duration-300"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
            <span className="text-sm font-medium">mahesabagusraditya1@gmail.com</span>
          </a>
        </div>

        <div className="pointer-events-auto flex flex-col flex-wrap items-center justify-center gap-3 pt-2 sm:flex-row sm:gap-4">
          <GlassButton
            variant="download"
            className="w-full sm:w-auto"
            onClick={() => {
              window.open(
                'https://drive.google.com/file/d/1wziYNuMleFB1bYYhiGrJX7DPc7HwXq1s/view?usp=sharingutn',
                '_blank'
              );
            }}
          >
            Download CV
          </GlassButton>
          <GlassButton variant="secondary" className="w-full sm:w-auto">
            Get in Touch
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
