import { Suspense } from 'react';
import Jumbotron from '@/pages/HomePage/Components/Jumbotron';
import ParticlesClient from '@/components/background/particles/ParticlesClient';
import EducationClient from '@/pages/HomePage/Components/EducationClient';
import ExperienceClient from '@/pages/HomePage/Components/ExperienceClient';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
      <div className="pointer-events-auto fixed inset-0 z-0 h-full w-full">
        <Suspense fallback={null}>
          <ParticlesClient />
        </Suspense>
      </div>

      <Jumbotron />
      <Suspense fallback={null}>
        <EducationClient />
      </Suspense>
      <Suspense fallback={null}>
        <ExperienceClient />
      </Suspense>
    </div>
  );
}
