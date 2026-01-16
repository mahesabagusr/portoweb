import Particles from "@/components/background/particles/Particles";
import Jumbotron from "./Components/Jumbotron";
import Experience from "./Components/Experience";

export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4 sm:px-6 lg:px-8">
      <div
        className="fixed inset-0 z-0 pointer-events-auto"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Particles
          particleColors={["#1d175c", "#1d285c", "#1d5c8c"]}
          particleCount={500}
          particleSpread={15}
          speed={0.1}
          particleBaseSize={120}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Jumbotron />
      <Experience />
    </div>
  );
}
