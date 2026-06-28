'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollFloat from '@/components/custom/ScrollFloat';
import { Calendar } from 'lucide-react';
import { educationData, cardVariants } from '@/constants/education';

export default function Education(): React.JSX.Element {
  return (
    <section
      id="education"
      className="pointer-events-none relative z-10 mx-auto w-full max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <p className="eyebrow text-subtle mb-3">Education</p>
          <ScrollFloat
            containerClassName="mb-3"
            textClassName="text-ink !text-3xl sm:!text-4xl xl:!text-5xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            My Learning Journey
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="pointer-events-auto relative h-full w-full"
              style={{ opacity: 0, transform: 'translateY(50px) scale(0.9)' }}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }}
              variants={cardVariants}
            >
              <div className="bg-surface border-hairline hover:border-hairline-strong h-full rounded-xl border p-6 transition-colors duration-300 sm:p-8">
                <div className="flex items-start gap-4 sm:gap-6">
                  {edu.logo && (
                    <div className="bg-canvas-soft border-hairline flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border p-3 sm:h-20 sm:w-20">
                      <Image
                        src={edu.logo}
                        alt={`${edu.institution} logo`}
                        width={80}
                        height={80}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="min-w-0 flex-1 text-left">
                    <h3 className="text-ink mb-1 text-lg font-semibold sm:text-xl">
                      {edu.institution}
                    </h3>
                    <p className="text-body mb-3 text-sm font-medium sm:text-base">{edu.degree}</p>
                    <div className="text-subtle flex items-center gap-2 text-sm">
                      <Calendar className="h-4 w-4 shrink-0" />
                      <span className="font-medium">{edu.period}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
