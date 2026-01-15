import Particles from "@/components/background/particles/Particles";
import Photo from "@/assets/images/mahestzy_nobg.png";
import { GlassButton } from "@/components/ui/glass-button";
import BlurText from "@/components/BlurText";

export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
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

      <div className="relative z-10 flex flex-col items-center gap-6 max-w-4xl mx-auto text-center sm:px-2 justify-center">
        <div className="w-64 md:w-80">
          <img
            src={Photo}
            alt="Mahesa Bagus Raditya"
            className="w-full h-auto object-contain scale-110 grayscale hover:grayscale-0 transition-all duration-500 drop-shadow-[0_4px_12px_rgba(255,255,255,0.3)] hover:drop-shadow-[0_4px_16px_rgba(255,255,255,0.5)]"
            style={{ objectPosition: "50% 20%" }}
          />
        </div>

        <div className="absolute bottom-36 w-fit h-fit flex items-center justify-center">
          <BlurText
            text="Mahesa Bagus Raditya"
            className="text-5xl md:text-[72px] font-black text-white text-center"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={() => {
              console.log("Animation Complete");
            }}
          />
        </div>

        <div className="space-y-6 mt-12">
          <p className="text-base md:text-lg text-white ">
            Undergraduate Informatics Student @ <b>Telkom University Bandung</b>
            <br></br>| Core Team @ <b>GDGoC Telkom University Bandung</b>
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <GlassButton className="px-8 py-6 text-lg">
              View Projects
            </GlassButton>
            <GlassButton className="px-8 py-6 text-lg">Contact Me</GlassButton>
          </div>
        </div>
      </div>
    </div>
  );
}
