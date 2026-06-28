'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarMenuItem {
  name: string;
  href: string;
  sectionId: string;
}

const NavbarMenu: NavbarMenuItem[] = [
  { name: 'Home', href: '#home', sectionId: 'home' },
  { name: 'Education', href: '#education', sectionId: 'education' },
  { name: 'Experience', href: '#experience', sectionId: 'experience' },
  { name: 'Projects', href: '#projects', sectionId: 'projects' },
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps): React.JSX.Element {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionIds = NavbarMenu.map(m => m.sectionId);

    const getActive = () => {
      const scrollY = window.scrollY + window.innerHeight * 0.4;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
      }
      setActiveSection(current);
    };

    getActive();
    window.addEventListener('scroll', getActive, { passive: true });
    return () => window.removeEventListener('scroll', getActive);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -80 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={menuRef}
      className={`bg-canvas/85 border-hairline sticky top-0 z-50 w-full border-b backdrop-blur-md ${className}`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Wordmark — brand orange dot + ink text */}
        <a
          href="#home"
          onClick={e => scrollToSection(e, '#home')}
          className="flex items-center gap-2"
          aria-label="MahesTzy home"
        >
          <span className="bg-brand inline-block h-2.5 w-2.5 rounded-full" />
          <span className="text-ink text-[15px] font-semibold tracking-tight">MahesTzy</span>
        </a>

        {/* Desktop menu */}
        <div className="hidden items-center gap-1 sm:flex">
          {NavbarMenu.map(item => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={e => scrollToSection(e, item.href)}
                className={`rounded-md px-3 py-2 text-sm transition-colors duration-200 ${
                  isActive
                    ? 'text-ink font-medium'
                    : 'text-body hover:text-ink font-medium'
                }`}
              >
                {item.name}
              </a>
            );
          })}
        </div>

        {/* Right CTA — scarce Cursor Orange */}
        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="#contact"
            onClick={e => scrollToSection(e, '#contact')}
            className="bg-brand hover:bg-brand-active text-on-brand rounded-md px-[18px] py-2.5 text-sm font-medium transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(v => !v)}
          className="text-ink relative flex h-10 w-10 items-center justify-center sm:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            className={`absolute h-5 w-5 transition-all duration-300 ${isOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
          />
          <X
            className={`absolute h-5 w-5 transition-all duration-300 ${isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'}`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`bg-canvas border-hairline overflow-hidden border-t transition-all duration-300 ease-out sm:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-4 py-2">
          {NavbarMenu.map(item => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={e => scrollToSection(e, item.href)}
                className={`rounded-md px-3 py-3 text-sm transition-colors duration-200 ${
                  isActive ? 'text-ink font-medium' : 'text-body hover:text-ink font-medium'
                }`}
              >
                {item.name}
              </a>
            );
          })}
          <a
            href="#contact"
            onClick={e => scrollToSection(e, '#contact')}
            className="bg-brand hover:bg-brand-active text-on-brand mt-2 mb-2 rounded-md px-4 py-2.5 text-center text-sm font-medium transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </nav>
  );
}
