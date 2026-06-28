'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollFloat from '@/components/custom/ScrollFloat';
import { Calendar, MapPin, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';
import { experienceData, experienceCardVariants } from '@/constants/experience';

const INITIAL_LIMIT = 3;

export default function Experience(): React.JSX.Element {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? experienceData : experienceData.slice(0, INITIAL_LIMIT);
  const hasMore = experienceData.length > INITIAL_LIMIT;

  return (
    <section
      id="experience"
      className="pointer-events-none relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="space-y-8 sm:space-y-12">
        {/* Heading */}
        <div className="text-center">
          <p className="eyebrow text-subtle mb-3">Experience</p>
          <ScrollFloat
            containerClassName="mb-3"
            textClassName="text-ink sm:!text-5xl xl:!text-6xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            My Professional Journey
          </ScrollFloat>
        </div>

        {/* Cards */}
        <div className="relative flex flex-col gap-4 sm:gap-6">
          <AnimatePresence initial={false}>
            {visible.map((exp, index) => (
              <motion.div
                key={exp.company + index}
                className="pointer-events-auto relative z-10 h-full w-full"
                style={{ opacity: 0, transform: 'translateY(60px) scale(0.95)' }}
                custom={index}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: false, amount: 0.2 }}
                variants={experienceCardVariants}
                exit={{ opacity: 0, y: 30, scale: 0.95, transition: { duration: 0.25 } }}
              >
                <div className="bg-surface border-hairline hover:border-hairline-strong rounded-xl border p-6 transition-colors duration-300 sm:p-8">
                  {/* Header */}
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0 text-center sm:text-left">
                      <h3 className="text-ink mb-1 text-lg font-semibold sm:text-xl">
                        {exp.company}
                      </h3>
                      <p className="text-body text-sm font-medium">{exp.role}</p>
                    </div>
                    <div className="text-subtle flex shrink-0 flex-row justify-center gap-3 text-xs sm:flex-col sm:items-end sm:gap-1 sm:text-sm">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="border-hairline text-body border-t pt-3 text-sm leading-relaxed sm:text-base">
                    {exp.description}
                  </p>

                  {/* Project Links */}
                  {exp.links?.length && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {exp.links.map(({ text, href }) => (
                        <a
                          key={href}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border-hairline-strong text-body hover:border-ink hover:text-ink inline-flex items-center gap-1.5 rounded-md border bg-canvas-soft px-3 py-1 text-xs font-medium transition-colors duration-200"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* See More / See Less */}
        {hasMore && (
          <div className="pointer-events-auto flex justify-center">
            <button
              onClick={() => setShowAll(v => !v)}
              className="border-hairline-strong text-body hover:border-ink hover:text-ink inline-flex items-center gap-2 rounded-md border bg-surface px-5 py-2.5 text-sm font-medium transition-colors duration-200"
            >
              {showAll ? (
                <>
                  <ChevronUp className="h-4 w-4" />
                  See Less
                </>
              ) : (
                <>
                  <ChevronDown className="h-4 w-4" />
                  See More
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
