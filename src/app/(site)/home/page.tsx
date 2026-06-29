import { Suspense } from 'react';
import Jumbotron from './_components/Jumbotron';
import Education from './_components/Education';
import Experience from './_components/Experience';
import ParticlesClient from '@/components/background/particles/ParticlesClient';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-none fixed inset-0 z-0 h-full w-full">
        <Suspense fallback={null}>
          <ParticlesClient />
        </Suspense>
      </div>

      <Jumbotron />
      <Suspense fallback={null}>
        <Education />
      </Suspense>
      <Suspense fallback={null}>
        <Experience />
      </Suspense>
    </div>
  );
}
