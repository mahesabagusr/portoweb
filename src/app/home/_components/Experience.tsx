'use client';

import React, { useEffect, useRef } from 'react';
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const periodRef = useRef(0);

  // Keep scrollLeft inside the middle copies -> seamless infinite wrap.
  const normalize = (el: HTMLDivElement) => {
    const p = periodRef.current;
    if (p <= 0) return;
    while (el.scrollLeft < p) el.scrollLeft += p;
    while (el.scrollLeft >= 2 * p) el.scrollLeft -= p;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Exact repeat distance = distance between the start of two identical copies.
    const computePeriod = () => {
      const a = el.children[0] as HTMLElement | undefined;
      const b = el.children[1] as HTMLElement | undefined;
      if (!a || !b) return;
      periodRef.current = b.offsetLeft - a.offsetLeft;
      el.scrollLeft = periodRef.current; // start in the middle copy
    };
    computePeriod();
    window.addEventListener('resize', computePeriod);

    // Auto-scroll left; pauses on hover/drag.
    let raf = 0;
    const tick = () => {
      if (!pausedRef.current && !draggingRef.current) {
        el.scrollLeft += 0.5;
        normalize(el);
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    // Wheel -> horizontal (non-passive so we can prevent vertical page scroll).
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;
      e.preventDefault();
      el.scrollLeft += delta;
      normalize(el);
    };
    el.addEventListener('wheel', onWheel, { passive: false });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', computePeriod);
      el.removeEventListener('wheel', onWheel);
    };
  }, []);

  // Drag to scroll (mouse), tracked on the document for reliability.
  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    draggingRef.current = true;
    const startX = e.clientX;
    const startLeft = el.scrollLeft;

    const onMove = (ev: MouseEvent) => {
      el.scrollLeft = startLeft - (ev.clientX - startX);
      normalize(el);
    };
    const onUp = () => {
      draggingRef.current = false;
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onUp);
    };
    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onUp);
  };

  return (
    <section id="experience" className="relative z-10 w-full py-16 sm:py-20">
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

        {/* Scrollable strip — drag with mouse or scroll wheel, loops infinitely */}
        <div className="relative">
          {/* Edge fades */}
          <div className="from-canvas pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r to-transparent sm:w-24" />
          <div className="from-canvas pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l to-transparent sm:w-24" />

          <div
            ref={scrollRef}
            onMouseDown={onMouseDown}
            onMouseEnter={() => (pausedRef.current = true)}
            onMouseLeave={() => (pausedRef.current = false)}
            className="no-scrollbar flex w-full cursor-grab gap-4 overflow-x-auto overscroll-x-contain py-4 [scroll-behavior:auto] [touch-action:pan-x] select-none active:cursor-grabbing sm:gap-6"
          >
            {[0, 1, 2, 3].map(copy => (
              <div key={copy} className="flex shrink-0 gap-4 sm:gap-6" aria-hidden={copy !== 0}>
                {experienceData.map((exp, index) => (
                  <ExperienceCard key={exp.company + index} exp={exp} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
