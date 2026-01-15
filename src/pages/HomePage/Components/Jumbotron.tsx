import Photo from "@/assets/images/mahestzy_nobg.png";
import { GlassButton } from "@/components/ui/glass-button";
import BlurText from "@/components/BlurText";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function Jumbotron(): React.JSX.Element {
  return (
    <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 max-w-5xl mx-auto text-center justify-center py-8 sm:py-12 pointer-events-none ">
      <div className="relative z-10 w-48 sm:w-56 md:w-72 lg:w-80 pointer-events-auto">
        <img
          src={Photo}
          alt="Mahesa Bagus Raditya"
          className="w-full h-auto object-contain scale-110 grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.5)]"
          style={{ objectPosition: "50% 20%" }}
        />
      </div>

      <div className="relative z-20 w-full flex items-center justify-center -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-20">
        <BlurText
          text="Mahesa Bagus Raditya"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[79px] font-black text-white text-center px-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_12px_rgba(0,0,0,0.9)]"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => {
            console.log("Animation Complete");
          }}
        />
      </div>

      <div className="space-y-4 sm:space-y-6 relative z-20 w-full px-4 sm:px-6">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed font-normal animate-fade-in opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards]">
          Undergraduate Informatics Student{" "}
          <b className="font-bold">@ Telkom University Bandung</b>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> • </span>
          Core Team{" "}
          <b className="font-bold">@ GDGoC Telkom University Bandung</b>
        </p>

        <div className="flex flex-wrap gap-3 sm:gap-6 justify-center items-center pointer-events-auto animate-fade-in opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards]">
          <a
            href="https://github.com/mahesabagusr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-500 ease-in-out hover:scale-105 group"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-500 ease-in-out" />
            <span className="text-sm sm:text-base font-medium transition-all duration-500 ease-in-out">
              mahesabagusr
            </span>
          </a>
          <a
            href="https://linkedin.com/in/mahesabagusr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-500 ease-in-out hover:scale-105 group"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-500 ease-in-out" />
            <span className="text-sm sm:text-base font-medium transition-all duration-500 ease-in-out">
              Mahesa Bagus Raditya
            </span>
          </a>
          <a
            href="https://instagram.com/mahesabagus.r"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-500 ease-in-out hover:scale-105 group"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-500 ease-in-out" />
            <span className="text-sm sm:text-base font-medium transition-all duration-500 ease-in-out">
              @mahesabagus.r
            </span>
          </a>
          <a
            href="mailto:mahesabagusraditya1@gmail.com"
            className="flex items-center gap-2 text-white hover:text-gray-300 transition-all duration-500 ease-in-out hover:scale-105 group"
            aria-label="Email"
          >
            <Mail className="w-6 h-6 sm:w-7 sm:h-7 transition-all duration-500 ease-in-out" />
            <span className="text-sm sm:text-base font-medium transition-all duration-500 ease-in-out">
              mahesabagusraditya1@gmail.com
            </span>
          </a>
        </div>

        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center pointer-events-auto">
          <GlassButton className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none">
            View Projects
          </GlassButton>
          <GlassButton className="px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg w-full sm:w-auto max-w-xs sm:max-w-none">
            Contact Me
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
