import Particles from "@/components/background/particles/Particles";
import Photo from "@/assets/images/mahestzy_nobg.png";
import { GlassButton } from "@/components/ui/glass-button";
import BlurText from "@/components/BlurText";

export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
      <div
        className="fixed inset-0 z-0 pointer-events-auto"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Particles
          particleColors={["#FFFFFF"]}
          particleCount={300}
          particleSpread={10}
          speed={0.15}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto text-center justify-center py-8 sm:py-12 pointer-events-none">
        <div className="relative z-10 w-48 sm:w-56 md:w-72 lg:w-80">
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
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white leading-relaxed">
            Undergraduate Informatics Student @ <b>Telkom University Bandung</b>
            <br className="hidden sm:block" />
            <span className="sm:hidden"> • </span>
            Core Team @ <b>GDGoC Telkom University Bandung</b>
          </p>

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
    </div>
  );
}
