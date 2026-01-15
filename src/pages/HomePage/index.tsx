import Particles from "@/components/background/particles/Particles";

export default function HomePage(): React.JSX.Element {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen text-center">
      <div
        className="fixed inset-0 z-0"
        style={{ width: "100%", height: "600px" }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <div className="relative z-10 space-y-4">
        <h1 className="text-6xl font-bold text-foreground">
          Welcome to the Home Page
        </h1>
        <p className="text-xl text-muted-foreground">
          This is the main page of our application.
        </p>
      </div>
    </div>
  );
}
