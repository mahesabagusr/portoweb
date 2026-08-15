'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUp } from 'lucide-react';
import { socialLinks, footerNav } from '@/constants/footer';

export default function Footer(): React.JSX.Element {
  const year = new Date().getFullYear();

  /** Smooth-scroll to an in-page section, mirroring the navbar behaviour. */
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.getElementById(href.replace('#', ''));
    if (!el) return;
    if (window.lenis) {
      window.lenis.scrollTo(el, { offset: -100 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="border-hairline bg-canvas relative z-10 w-full border-t">
      <div className="mx-auto max-w-[1200px] px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center gap-4 text-center sm:col-span-2 sm:items-start sm:text-left lg:col-span-5">
            <a
              href="#home"
              onClick={e => scrollToSection(e, '#home')}
              className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
              aria-label="Back to top"
            >
              <Image src="/logo.svg" alt="MBR Logo" width={36} height={36} className="h-9 w-9" />
              <span className="text-ink text-lg font-semibold tracking-tight">Mahesa Bagus Raditya</span>
            </a>
            <p className="text-body max-w-xs text-sm leading-relaxed">
              Full-stack developer crafting clean, performant, and thoughtfully designed web
              experiences.
            </p>
            <a
              href="#contact"
              onClick={e => scrollToSection(e, '#contact')}
              className="bg-brand hover:bg-brand-active text-on-brand mt-1 rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200"
            >
              Get in Touch
            </a>
          </div>

          {/* Navigate */}
          <nav
            aria-label="Footer"
            className="flex flex-col items-center gap-3.5 sm:items-start lg:col-span-3"
          >
            <p className="eyebrow text-subtle">Navigate</p>
            <ul className="flex flex-col gap-2.5">
              {footerNav.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    onClick={e => scrollToSection(e, href)}
                    className="text-body hover:text-ink text-sm transition-colors duration-200"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="flex flex-col items-center gap-3.5 sm:items-start lg:col-span-4">
            <p className="eyebrow text-subtle">Connect</p>
            <ul className="flex flex-col gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, display }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="text-body hover:text-ink group flex items-center gap-2.5 transition-colors duration-200"
                  >
                    <Icon className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]" />
                    <span className="text-sm break-all">{display}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-hairline mt-12 mb-6 border-t" />

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-subtle text-center text-xs sm:text-left sm:text-sm">
            © {year} <span className="text-ink font-medium">Mahesa Bagus Raditya</span>. All rights
            reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-subtle hidden text-xs sm:inline">
              Built with Next.js &amp; Tailwind CSS
            </span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="border-hairline text-subtle hover:text-ink hover:border-hairline-strong flex h-9 w-9 items-center justify-center rounded-full border transition-colors duration-200"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
