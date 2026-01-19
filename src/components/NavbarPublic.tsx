import React from "react";
import { Button } from "@/components/ui/button";

interface NavbarMenuItem {
  name: string;
  href: string;
}

const NavbarMenu: NavbarMenuItem[] = [
  { name: "Home", href: "#home" },
  { name: "Partner", href: "#partner" },
  { name: "Tournament", href: "#tournament" },
  { name: "Blog", href: "#blog" },
];

export default function Navbar(): React.JSX.Element {
  return (
    <nav className="bg-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              JadiJago
            </a>
          </div>

          {/* Desktop Menu Section */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-8">
            {NavbarMenu.map((item: NavbarMenuItem) => (
              <a
                key={item.name} // Lebih baik menggunakan item.name atau item.href sebagai key jika unik
                href={item.href}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Action Buttons Section */}
          <div className="hidden sm:flex items-center space-x-4 ml-6">
            <Button variant="outline" size="lg" className="px-4">
              Sign Up
            </Button>
            <Button size="lg" className="px-4">
              Login
            </Button>
          </div>

          {/* TODO: Add Mobile Menu (Hamburger) for smaller screens */}
        </div>
      </div>
    </nav>
  );
};

