import React, { useEffect, useState } from 'react';

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`sticky top-8 z-50 mx-auto my-10 w-fit ${className}`}>
      <div className="bg-primary/10 border-primary/20 shadow-primary/20 relative overflow-hidden rounded-full border shadow-2xl backdrop-blur-xl">
        <div className="from-primary/5 to-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent"></div>

        <div className="relative mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center gap-1 sm:gap-2">
            <div className="flex items-center sm:space-x-2">
              {NavbarMenu.map((item: NavbarMenuItem) => {
                const isActive = activeSection === item.sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={e => scrollToSection(e, item.href)}
                    className={`hover:text-primary hover:bg-primary/10 group relative rounded-full px-2 py-2 text-xs transition-all duration-300 sm:px-4 sm:text-sm ${
                      isActive ? 'font-bold text-white' : 'text-foreground/80 font-medium'
                    }`}
                  >
                    {item.name}
                    <span className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
                  </a>
                );
              })}
            </div>

            <a
              href="#contact"
              onClick={e => scrollToSection(e, '#contact')}
              className="group relative overflow-hidden rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-white/20 hover:shadow-[0_0_16px_rgba(255,255,255,0.15)] sm:px-4 sm:py-2 sm:text-sm"
            >
              Get in Touch
              <span className="absolute inset-0 rounded-full opacity-0 ring-1 ring-white/30 transition-opacity duration-300 group-hover:opacity-100" />
            </a>
          </div>
        </div>

        <div className="via-primary/50 absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent"></div>
      </div>
    </nav>
  );
}
