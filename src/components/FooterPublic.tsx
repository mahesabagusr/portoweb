import React from 'react';
import { techStack, socialLinks } from '@/constants/footer';

export default function Footer(): React.JSX.Element {
  return (
    <footer className="relative z-10 w-full border-t border-white/10 bg-white/5 backdrop-blur-md">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Grid: Social Links | Tech Stack */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-6">
          {/* Social Links */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="text-xs font-medium tracking-widest text-white/30 uppercase">Connect</p>
            <div className="flex flex-col gap-2.5">
              {socialLinks.map(({ label, href, icon: Icon, display }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 text-white/70 transition-all duration-300 hover:scale-105 hover:text-white"
                >
                  <Icon className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                  <span className="text-sm">{display}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Built With */}
          <div className="flex flex-col items-center gap-3 sm:items-start">
            <p className="text-xs font-medium tracking-widest text-white/30 uppercase">
              Built with
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:justify-start">
              {techStack.map(({ name, icon }) => (
                <div
                  key={name}
                  title={name}
                  className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 transition-all duration-300 hover:border-white/25 hover:bg-white/10"
                >
                  <img src={icon} alt={name} className="h-4 w-4" />
                  <span className="text-xs font-medium text-white/60">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 mb-5 h-px w-full bg-white/10" />

        <p className="text-center text-xs text-white/40 sm:text-sm">
          © {new Date().getFullYear()}{' '}
          <span className="font-semibold text-white/60">Mahesa Bagus Raditya</span>.
        </p>
      </div>
    </footer>
  );
}
