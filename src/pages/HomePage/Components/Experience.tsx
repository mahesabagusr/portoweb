import ScrollFloat from "@/components/ScrollFloat";
import GlareHover from "@/components/GlareHover";
import { Calendar } from "lucide-react";
import TelkomUni from "@/assets/images/telkomuni.png";
import TelkomSch from "@/assets/images/telkomsch.png";

interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  logo?: string;
}

const educationData: EducationItem[] = [
  {
    institution: "Telkom University Bandung",
    degree: "Bachelor of Informatics",
    period: "2024 - Now",
    logo: TelkomUni,
  },
  {
    institution: "SMK Telkom Purwokerto",
    degree: "Software Engineering",
    period: "Jul 2021 - Jul 2024",
    logo: TelkomSch,
  },
];

export default function Experience(): React.JSX.Element {
  return (
    <section className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 pointer-events-none">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 justify-items-start">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative animate-fade-in opacity-0 pointer-events-auto w-full h-full"
              style={{
                animationDelay: `${0.4 + index * 0.2}s`,
                animationFillMode: "forwards",
              }}
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
                  {/* Header with Logo */}
                  <div className="flex items-start gap-4 sm:gap-6">
                    {edu.logo && (
                      <div className="flex-shrink-0 w-16 h-16 sm:w-22 sm:h-22 bg-white/10 rounded-xl p-3 flex items-center justify-center backdrop-blur-sm">
                        <img
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          className="w-full h-full object-contain brightness-0 invert"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <h3 className="sm:text-xl font-bold text-white mb-2">
                        {edu.institution}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-300 font-medium mb-2 italic">
                        {edu.degree}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm sm:text-base justify-center">
                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                        <span className="font-medium">{edu.period}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </GlareHover>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
