'use client';

import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import FuzzyText from '@/components/custom/FuzzyText';
import { GlassButton } from '@/components/custom/glass-button';
import ParticlesClient from '@/components/background/particles/ParticlesClient';

export default function NotFound() {
  const router = useRouter();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <div className="pointer-events-auto fixed inset-0 z-0 h-full w-full">
        <Suspense fallback={null}>
          <ParticlesClient
            particleColors={['#ffffff', '#ffffff']}
            particleCount={300}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={120}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </Suspense>
      </div>
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <FuzzyText fps={30} fontSize={185} fontFamily="Times New Roman" className=" ">
          404
        </FuzzyText>
        <FuzzyText fps={30} fontSize={64} fontFamily="Times New Roman" className=" ">
          Page Not Found
        </FuzzyText>
        <GlassButton onClick={() => router.push('/')}>Back To Main Page</GlassButton>
      </div>
    </div>
  );
}
