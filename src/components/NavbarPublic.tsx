import React from 'react';

interface NavbarMenuItem {
  name: string;
  href: string;
}

const NavbarMenu: NavbarMenuItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Education', href: '#tournament' },
  { name: 'Experience', href: '#partner' },
  { name: 'Projects', href: '#tournament' },
  { name: 'Contact', href: '#blog' },
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className = '' }: NavbarProps): React.JSX.Element {
  return (
    <nav className={`sticky top-8 z-50 mx-4 my-10 sm:mx-10 lg:mx-110 ${className}`}>
      <div className="bg-primary/10 border-primary/20 shadow-primary/20 relative overflow-hidden rounded-full border shadow-2xl backdrop-blur-xl">
        <div className="from-primary/5 to-accent/5 pointer-events-none absolute inset-0 bg-gradient-to-br via-transparent"></div>

        <div className="relative mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-center">
            <div className="flex items-center sm:space-x-2">
              {NavbarMenu.map((item: NavbarMenuItem) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary hover:bg-primary/10 group relative rounded-full px-2 py-2 text-xs font-medium transition-all duration-300 sm:px-4 sm:text-sm"
                >
                  {item.name}
                  <span className="bg-primary/20 absolute inset-0 rounded-full opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="via-primary/50 absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent to-transparent"></div>
      </div>
    </nav>
  );
}
