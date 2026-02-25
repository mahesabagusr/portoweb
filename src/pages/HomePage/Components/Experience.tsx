import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from '@/components/custom/ScrollFloat';
import GlareHover from '@/components/custom/GlareHover';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experienceData, experienceCardVariants } from '@/constants/experience';

export default function Experience(): React.JSX.Element {
  return (
    <section className="pointer-events-none relative z-10 mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="space-y-8 sm:space-y-12">
        {/* Heading */}
        <div className="text-center">
          <ScrollFloat
            containerClassName="mb-4"
            textClassName="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] !text-5xl xl:!text-6xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            Experience
          </ScrollFloat>
          <ScrollFloat
            containerClassName="mb-4"
            textClassName="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] !text-sm sm:!text-base md:!text-lg !font-medium"
            animationDuration={1}
            ease="back.inOut(1)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.03}
          >
            My Professional Journey
          </ScrollFloat>
        </div>

        {/* Timeline */}
        <div className="relative flex flex-col gap-6 sm:gap-8">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              className="pointer-events-auto relative z-10 h-full w-full sm:pl-14"
              style={{ opacity: 0, transform: 'translateY(60px) scale(0.95)' }}
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.2 }}
              variants={experienceCardVariants}
            >
              <span className="absolute top-22 left-[13px] hidden h-3 w-3 rounded-full border-2 border-white/40 bg-white/20 sm:left-[19px] sm:block" />

              <GlareHover
                width="100%"
                height="auto"
                background="rgba(255, 255, 255, 0.05)"
                borderRadius="16px"
                borderColor="rgba(255, 255, 255, 0.1)"
                glareColor="#ffffff"
                glareOpacity={0.15}
                glareAngle={-45}
                glareSize={200}
                transitionDuration={650}
                className="backdrop-blur-sm transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
              >
                <div className="p-6 sm:p-8">
                  {/* Header */}
                  <div className="mb-3 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div className="min-w-0">
                      <h3 className="text-md mb-2 text-center font-bold text-white sm:text-left sm:text-xl">
                        {exp.company}
                      </h3>
                      <p className="mb-2 text-center text-sm font-medium text-gray-300 italic sm:text-left sm:text-sm">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex shrink-0 flex-row justify-center gap-3 text-xs text-gray-400 sm:flex-col sm:items-end sm:gap-1 sm:text-base">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="border-t border-white/10 pt-3 text-sm leading-relaxed text-gray-300 sm:text-base">
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
                          className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 transition-all duration-300 hover:border-white/40 hover:bg-white/20 hover:text-white"
                        >
                          <ExternalLink className="h-3 w-3" />
                          {text}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
