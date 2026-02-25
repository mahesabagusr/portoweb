import Photo from '@/assets/images/mahestzy_nobg.png';
import PhotoWebP from '@/assets/images/mahestzy_nobg.webp';
import { GlassButton } from '@/components/custom/glass-button';
import BlurText from '@/components/custom/BlurText';
import { Github, Linkedin, Instagram, Mail } from 'lucide-react';

export default function Jumbotron(): React.JSX.Element {
  return (
    <div className="pointer-events-none relative z-10 mx-auto flex max-w-5xl flex-col items-center justify-center gap-4 py-8 text-center sm:gap-6 sm:py-12 lg:gap-8">
      <div className="pointer-events-auto relative z-10 w-48 sm:w-56 md:w-72 lg:w-80">
        <picture>
          <source srcSet={PhotoWebP} type="image/webp" />
          <img
            src={Photo}
            alt="Mahesa Bagus Raditya"
            width={1536}
            height={1929}
            fetchPriority="high"
            decoding="async"
            className="h-auto w-full scale-110 object-contain drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)] grayscale transition-all duration-500 hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.5)] hover:grayscale-0"
            style={{ objectPosition: '50% 20%' }}
          />
        </picture>
      </div>

      <div className="relative z-20 -mt-6 flex w-full items-center justify-center sm:-mt-8 md:-mt-12 lg:-mt-20">
        <BlurText
          text="Mahesa Bagus Raditya"
          className="px-2 text-center text-[28px] font-black text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)] [text-shadow:2px_2px_12px_rgba(0,0,0,0.9)] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[79px]"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={() => {
            console.log('Animation Complete');
          }}
        />
      </div>

      <div className="relative z-20 w-full space-y-4 px-4 sm:space-y-6 sm:px-6">
        <p className="animate-fade-in text-sm leading-relaxed font-normal text-white opacity-0 [animation-delay:0.5s] [animation-fill-mode:forwards] sm:text-base md:text-lg lg:text-xl">
          Undergraduate Informatics Student <b className="font-bold">@ Telkom University Bandung</b>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> • </span>
          Core Team <b className="font-bold">@ GDGoC Telkom University Bandung</b>
        </p>

        <div className="animate-fade-in pointer-events-auto flex flex-wrap items-center justify-center gap-3 opacity-0 [animation-delay:0.7s] [animation-fill-mode:forwards] sm:gap-6">
          <a
            href="https://github.com/mahesabagusr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:text-gray-300"
            aria-label="GitHub"
          >
            <Github className="h-6 w-6 transition-all duration-500 ease-in-out sm:h-7 sm:w-7" />
            <span className="text-sm font-medium transition-all duration-500 ease-in-out sm:text-base">
              mahesabagusr
            </span>
          </a>
          <a
            href="https://linkedin.com/in/mahesabagusr"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:text-gray-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6 transition-all duration-500 ease-in-out sm:h-7 sm:w-7" />
            <span className="text-sm font-medium transition-all duration-500 ease-in-out sm:text-base">
              Mahesa Bagus Raditya
            </span>
          </a>
          <a
            href="https://instagram.com/mahesabagus.r"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:text-gray-300"
            aria-label="Instagram"
          >
            <Instagram className="h-6 w-6 transition-all duration-500 ease-in-out sm:h-7 sm:w-7" />
            <span className="text-sm font-medium transition-all duration-500 ease-in-out sm:text-base">
              @mahesabagus.r
            </span>
          </a>
          <a
            href="mailto:mahesabagusraditya1@gmail.com"
            className="group flex items-center gap-2 text-white transition-all duration-500 ease-in-out hover:scale-105 hover:text-gray-300"
            aria-label="Email"
          >
            <Mail className="h-6 w-6 transition-all duration-500 ease-in-out sm:h-7 sm:w-7" />
            <span className="text-sm font-medium transition-all duration-500 ease-in-out sm:text-base">
              mahesabagusraditya1@gmail.com
            </span>
          </a>
        </div>

        <div className="pointer-events-auto flex flex-col flex-wrap items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <GlassButton
            className="w-full max-w-xs px-6 py-4 text-base sm:w-auto sm:max-w-none sm:px-8 sm:py-6 sm:text-lg"
            onClick={() => {
              window.open(
                'https://drive.google.com/file/d/1wziYNuMleFB1bYYhiGrJX7DPc7HwXq1s/view?usp=sharingutn',
                '_blank'
              );
            }}
          >
            Download CV
          </GlassButton>
          <GlassButton className="w-full max-w-xs px-6 py-4 text-base sm:w-auto sm:max-w-none sm:px-8 sm:py-6 sm:text-lg">
            Contact Me
          </GlassButton>
        </div>
      </div>
    </div>
  );
}
