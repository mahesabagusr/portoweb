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
  particleColors = ['#1d175c', '#1d285c', '#1d5c8c'],
  particleCount = 500,
  particleSpread = 15,
  speed = 0.09,
  particleBaseSize = 150,
  moveParticlesOnHover = true,
  alphaParticles = false,
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
