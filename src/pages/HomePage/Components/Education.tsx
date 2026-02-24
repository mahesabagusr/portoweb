import React from 'react';
import { motion } from 'framer-motion';
import ScrollFloat from '@/components/custom/ScrollFloat';
import GlareHover from '@/components/custom/GlareHover';
import { Calendar } from 'lucide-react';
import { educationData, cardVariants } from '@/constants/education';

export default function Education(): React.JSX.Element {
  return (
    <section className="pointer-events-none relative z-10 mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="space-y-8 sm:space-y-12">
        <div className="text-center">
          <ScrollFloat
            containerClassName="mb-4 "
            textClassName="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] !text-6xl"
            scrollStart="top bottom"
            scrollEnd="center center"
          >
            Education
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
            My Learning Journey
          </ScrollFloat>
        </div>

        <div className="grid grid-cols-1 justify-items-start gap-4 sm:gap-6 md:grid-cols-2">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="pointer-events-auto relative h-full w-full"
              custom={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: false, amount: 0.4 }}
              variants={cardVariants}
            >
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
                  <div className="flex items-start gap-4 sm:gap-6">
                    {edu.logo && (
                      <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 p-4 backdrop-blur-sm sm:h-24 sm:w-24">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="h-full w-full object-contain brightness-0 invert"
                        />
                      </div>
                    )}
                    <div className="min-w-0 flex-1">
                      <h3 className="mb-2 font-bold text-white sm:text-xl">{edu.institution}</h3>
                      <p className="mb-2 text-base font-medium text-gray-300 italic sm:text-lg">
                        {edu.degree}
                      </p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-400 sm:text-base">
                        <Calendar className="h-4 w-4 flex-shrink-0 sm:h-5 sm:w-5" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
