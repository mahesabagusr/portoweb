import React from "react";

interface NavbarMenuItem {
  name: string;
  href: string;
}

const NavbarMenu: NavbarMenuItem[] = [
  { name: "Home", href: "#home" },
  { name: "Education", href: "#tournament" },
  { name: "Experience", href: "#partner" },
  { name: "Projects", href: "#tournament" },
  { name: "Contact", href: "#blog" },
];

interface NavbarProps {
  className?: string;
}

export default function Navbar({
  className = "",
}: NavbarProps): React.JSX.Element {
  return (
    <nav
      className={`sticky top-8 z-50 mx-4 sm:mx-10 lg:mx-110 my-10 ${className}`}
    >
      <div className="relative backdrop-blur-xl bg-primary/10 border border-primary/20 rounded-full shadow-2xl shadow-primary/20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>

        <div className="relative mx-auto px-2 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-16">
            <div className="flex items-center space-x-1 sm:space-x-2">
              {NavbarMenu.map((item: NavbarMenuItem) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="relative text-foreground/80 hover:text-primary px-2 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 hover:bg-primary/10 group"
                >
                  {item.name}
                  <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm bg-primary/20"></span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      </div>
    </nav>
  );
}
