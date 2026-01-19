import Particles from '@/components/background/particles/Particles';
import Jumbotron from './Components/Jumbotron';
import Education from './Components/Education';

export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-auto fixed inset-0 z-0 h-full w-full">
        <Particles
          particleColors={['#1d175c', '#1d285c', '#1d5c8c']}
          particleCount={500}
          particleSpread={15}
          speed={0.09}
          particleBaseSize={150}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      <Jumbotron />
      <Education />
    </div>
  );
}
