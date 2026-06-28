'use client';

import React from 'react';
import ScrollFloat from '@/components/custom/ScrollFloat';
import { ExternalLink } from 'lucide-react';
import { experienceData } from '@/constants/experience';

// Tech name -> Simple Icons logo. Names not listed fall back to a text pill.
const techIcons: Record<string, string> = {
  'Node.js': 'https://cdn.simpleicons.org/nodedotjs/5FA04E',
  'Express.js': 'https://cdn.simpleicons.org/express/26251e',
  Prisma: 'https://cdn.simpleicons.org/prisma/2D3748',
  JavaScript: 'https://cdn.simpleicons.org/javascript/F7DF1E',
  React: 'https://cdn.simpleicons.org/react/61DAFB',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/06B6D4',
  Figma: 'https://cdn.simpleicons.org/figma/F24E1E',
  Photoshop: 'https://cdn.simpleicons.org/adobephotoshop/31A8FF',
  Illustrator: 'https://cdn.simpleicons.org/adobeillustrator/FF9A00',
  Mocha: 'https://cdn.simpleicons.org/mocha/8D6748',
  Chai: 'https://cdn.simpleicons.org/chai/A30701',
  Git: 'https://cdn.simpleicons.org/git/F05032',
};

function ExperienceCard({ exp }: { exp: (typeof experienceData)[number] }) {
  return (
    <div className="bg-surface border-hairline hover:border-hairline-strong flex w-[300px] shrink-0 flex-col rounded-xl border p-5 transition-transform duration-300 ease-out hover:scale-[1.04] sm:w-[360px] sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <span className="text-subtle text-xs">{exp.period}</span>
        <h3 className="text-ink text-base font-semibold sm:text-lg">{exp.company}</h3>
        <p className="text-body text-sm font-medium">{exp.role}</p>
      </div>

      {/* Description */}
      <p className="text-body mt-3 line-clamp-3 text-sm leading-relaxed">{exp.description}</p>

      {/* Tools / languages as logos */}
      {exp.tech?.length && (
        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          {exp.tech.map(t =>
            techIcons[t] ? (
              <img
                key={t}
                src={techIcons[t]}
                alt={t}
                title={t}
                className="h-6 w-6"
                loading="lazy"
              />
            ) : (
              <span
                key={t}
                title={t}
                className="border-hairline bg-canvas-soft text-body rounded-md border px-2 py-0.5 text-xs font-medium"
              >
                {t}
              </span>
            )
          )}
        </div>
      )}

      {/* Project Links */}
      {exp.links?.length && (
        <div className="mt-4 flex flex-wrap gap-2">
          {exp.links.map(({ text, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand hover:text-brand-active inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {text}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Experience(): React.JSX.Element {
  // Duplicate the list so the marquee can loop seamlessly.
  const loop = [...experienceData, ...experienceData];

  return (
    <section
      id="experience"
      className="pointer-events-none relative z-10 w-full py-16 sm:py-20"
    >
      <div className="space-y-8 sm:space-y-12">
        {/* Heading */}
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <p className="eyebrow text-subtle mb-3">Experience</p>
          <ScrollFloat
            containerClassName="mb-3"
            textClassName="text-ink !text-3xl sm:!text-4xl xl:!text-5xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            My Professional Journey
          </ScrollFloat>
        </div>

        {/* Marquee — cards running to the left */}
        <div className="group pointer-events-auto relative overflow-hidden">
          {/* Edge fades */}
          <div className="from-canvas pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-24" />
          <div className="from-canvas pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-24" />

          <div className="animate-marquee flex w-max gap-4 py-4 group-hover:[animation-play-state:paused] sm:gap-6">
            {loop.map((exp, index) => (
              <ExperienceCard key={exp.company + index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
