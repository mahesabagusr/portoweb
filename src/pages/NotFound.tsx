import { useNavigate } from "react-router-dom";
import Particles from "@/components/background/particles/Particles";
import FuzzyText from "@/components/FuzzyText";
import CursorFollower from "@/components/CursorFollower";
import { GlassButton } from "@/components/ui/glass-button";

export default function NotFound(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen text-center px-4">
      <CursorFollower />
      <div className="relative z-10 space-y-6 items-center flex flex-col">
        <div
          className="fixed inset-0 z-0 pointer-events-auto"
          style={{ width: "100vw", height: "100vh" }}
        >
          <Particles
            particleColors={["#ffffff", "#ffffff"]}
            particleCount={300}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={120}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <FuzzyText
          fps={30}
          fontSize={120}
          fontFamily="Times New Roman"
          className=" "
        >
          404
        </FuzzyText>
        <FuzzyText
          fps={30}
          fontSize={64}
          fontFamily="Times New Roman"
          className=" "
        >
          Page Not Found
        </FuzzyText>
        <GlassButton onClick={() => navigate("/")} className="mt-2">
          Back To Main Page
        </GlassButton>
      </div>
    </div>
  );
}
