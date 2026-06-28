'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
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
  const menuRef = useRef<HTMLElement>(null);

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
      window.lenis.scrollTo(el, { offset: -100 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav ref={menuRef} className={`sticky top-6 z-50 mx-auto my-6 w-fit ${className}`}>
      {/* Desktop floating pill */}
      <div className="bg-canvas/85 border-hairline hidden rounded-full border px-3 py-2.5 backdrop-blur-md sm:block">
        <div className="flex items-center gap-2">
          <a
            href="#home"
            onClick={e => scrollToSection(e, '#home')}
            className="mr-1 flex items-center gap-2 rounded-full px-2 transition-opacity hover:opacity-80"
          >
            <Image src="/logo.svg" alt="MBR Logo" width={40} height={40} className="h-9 w-9" />
          </a>
          {NavbarMenu.map(item => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={e => scrollToSection(e, item.href)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 ${
                  isActive ? 'text-ink bg-hairline-soft' : 'text-body hover:text-ink'
                }`}
              >
                {item.name}
              </a>
            );
          })}

          {/* CTA — scarce Cursor Orange */}
          <a
            href="#contact"
            onClick={e => scrollToSection(e, '#contact')}
            className="bg-brand hover:bg-brand-active text-on-brand ml-1 rounded-full px-6 py-2.5 text-sm font-medium transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>

      {/* Mobile pill + dropdown */}
      <div className="relative sm:hidden">
        <div className="bg-canvas/85 border-hairline flex items-center gap-2 rounded-full border p-2.5 backdrop-blur-md">
          <a
            href="#home"
            onClick={e => scrollToSection(e, '#home')}
            className="flex items-center gap-2 rounded-full px-1.5 transition-opacity hover:opacity-80"
          >
            <Image src="/logo.svg" alt="MBR Logo" width={28} height={28} className="h-7 w-7" />
            <span className="text-ink text-sm font-semibold tracking-tight">Mahestzy</span>
          </a>
          <div className="bg-hairline h-6 w-px" />
          <button
            onClick={() => setIsOpen(v => !v)}
            className="text-ink hover:bg-hairline-soft relative flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <Menu
              className={`absolute h-5 w-5 transition-all duration-300 ${isOpen ? 'scale-75 rotate-90 opacity-0' : 'scale-100 rotate-0 opacity-100'}`}
            />
            <X
              className={`absolute h-5 w-5 transition-all duration-300 ${isOpen ? 'scale-100 rotate-0 opacity-100' : 'scale-75 -rotate-90 opacity-0'}`}
            />
          </button>
        </div>

        {/* Animated dropdown */}
        <div
          className={`bg-canvas/95 border-hairline absolute left-1/2 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-2xl border backdrop-blur-md transition-all duration-300 ease-out ${
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <div className="flex flex-col py-2">
            {NavbarMenu.map(item => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => scrollToSection(e, item.href)}
                  className={`px-5 py-3 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-ink bg-hairline-soft' : 'text-body hover:text-ink'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="bg-hairline mx-4 my-2 h-px" />
            <a
              href="#contact"
              onClick={e => scrollToSection(e, '#contact')}
              className="bg-brand hover:bg-brand-active text-on-brand mx-3 mb-1 rounded-full px-4 py-2.5 text-center text-sm font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
