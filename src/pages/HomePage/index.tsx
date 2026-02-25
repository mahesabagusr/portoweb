import { lazy, Suspense } from 'react';
import Jumbotron from './Components/Jumbotron';

const Particles = lazy(() => import('@/components/background/particles/Particles'));
const Education = lazy(() => import('./Components/Education'));
const Experience = lazy(() => import('./Components/Experience'));

export default function HomePage(): React.JSX.Element {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-auto fixed inset-0 z-0 h-full w-full">
        <Suspense fallback={null}>
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
        </Suspense>
      </div>

      <Jumbotron />
      <Suspense fallback={null}><Education /></Suspense>
      <Suspense fallback={null}><Experience /></Suspense>
    </div>
  );
}
