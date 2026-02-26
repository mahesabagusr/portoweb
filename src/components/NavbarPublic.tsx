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
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={menuRef}
      className={`sticky top-8 z-50 my-10 ml-4 w-fit sm:mr-auto sm:ml-auto ${className}`}
    >
      {/* Desktop pill */}
      <div className="bg-primary/10 border-primary/20 shadow-primary/20 relative hidden overflow-hidden rounded-full border shadow-2xl backdrop-blur-xl sm:block">
        <div className="from-primary/5 to-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
        <div className="relative mx-auto px-6 lg:px-8">
          <div className="flex h-16 items-center gap-2">
            <div className="flex items-center space-x-2">
              {NavbarMenu.map(item => {
                const isActive = activeSection === item.sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => scrollToSection(e, item.href)}
                    className={`hover:text-primary hover:bg-primary/10 group relative rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                      isActive ? 'font-bold text-white' : 'text-foreground/80 font-medium'
                    }`}
                  >
                    {item.name}
                    <span className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>
            <a
              href="#contact"
              onClick={e => scrollToSection(e, '#contact')}
              className="group relative overflow-hidden rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)]"
            >
              Get in Touch
              <span className="absolute inset-0 rounded-full opacity-0 ring-1 ring-white/30 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>
        <div className="via-primary/50 absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent" />
      </div>

      {/* Mobile hamburger */}
      <div className="relative sm:hidden">
        <div className="bg-primary/10 border-primary/20 shadow-primary/20 relative overflow-hidden rounded-full border shadow-2xl backdrop-blur-xl">
          <div className="from-primary/5 to-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
          <button
            onClick={() => setIsOpen(v => !v)}
            className="relative flex h-12 w-12 items-center justify-center text-white transition-colors duration-200 hover:bg-white/10"
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

        {/* Animated dropdown */}
        <div
          className={`bg-primary/10 border-primary/20 shadow-primary/20 absolute left-0 mt-2 w-48 overflow-hidden rounded-2xl border shadow-2xl backdrop-blur-xl transition-all duration-300 ease-out ${
            isOpen
              ? 'pointer-events-auto translate-y-0 opacity-100'
              : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <div className="from-primary/5 to-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent" />
          <div className="relative flex flex-col py-2">
            {NavbarMenu.map(item => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={e => scrollToSection(e, item.href)}
                  className={`px-5 py-3 text-sm transition-colors duration-200 hover:bg-white/10 ${
                    isActive ? 'font-bold text-white' : 'font-medium text-white/70'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
            <div className="mx-4 my-2 h-px bg-white/10" />
            <a
              href="#contact"
              onClick={e => scrollToSection(e, '#contact')}
              className="mx-3 mb-1 rounded-full bg-white/10 px-4 py-2 text-center text-sm font-semibold text-white transition-colors duration-200 hover:bg-white/20"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
