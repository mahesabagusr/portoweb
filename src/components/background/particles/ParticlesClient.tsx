'use client';

import Particles from './Particles';

interface ParticlesClientProps {
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleBaseSize?: number;
  moveParticlesOnHover?: boolean;
  alphaParticles?: boolean;
  disableRotation?: boolean;
}

export default function ParticlesClient({
  particleColors = ['#cfcdc4'],
  particleCount = 200,
  particleSpread = 15,
  speed = 0.07,
  particleBaseSize = 100,
  moveParticlesOnHover = false,
  alphaParticles = true,
  disableRotation = false,
}: ParticlesClientProps) {
  return (
    <Particles
      particleColors={particleColors}
      particleCount={particleCount}
      particleSpread={particleSpread}
      speed={speed}
      particleBaseSize={particleBaseSize}
      moveParticlesOnHover={moveParticlesOnHover}
      alphaParticles={alphaParticles}
      disableRotation={disableRotation}
    />
  );
}
