import { useNavigate } from 'react-router-dom';
import Particles from '@/components/background/particles/Particles';
import FuzzyText from '@/components/custom/FuzzyText';
import CursorFollower from '@/components/custom/CursorFollower';
import { GlassButton } from '@/components/custom/glass-button';

export default function NotFound(): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <CursorFollower />
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <div
          className="pointer-events-auto fixed inset-0 z-0"
          style={{ width: '100vw', height: '100vh' }}
        >
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={300}
            particleSpread={10}
            speed={0.15}
            particleBaseSize={120}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>
        <FuzzyText fps={30} fontSize={185} fontFamily="Times New Roman" className=" ">
          404
        </FuzzyText>
        <FuzzyText fps={30} fontSize={64} fontFamily="Times New Roman" className=" ">
          Page Not Found
        </FuzzyText>
        <GlassButton onClick={() => navigate('/')}>Back To Main Page</GlassButton>
      </div>
    </div>
  );
}
