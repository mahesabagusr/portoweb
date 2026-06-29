'use client';

import React from 'react';
import { socialLinks } from '@/constants/footer';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="border-hairline bg-canvas relative z-10 w-full border-t">
      <div className="mx-auto max-w-[1200px] px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid: Social Links | Tech Stack */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:gap-6">
          {/* Social Links */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="eyebrow text-subtle">Connect</p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-body hover:text-ink flex items-center gap-2 transition-colors duration-200"
                >
                  <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-sm">{display}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-hairline mt-10 mb-5 border-t" />

        {/* Copyright */}
        <p className="text-subtle text-center text-xs sm:text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="text-ink font-medium">Mahesa Bagus Raditya</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
