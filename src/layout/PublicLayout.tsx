import { useEffect } from 'react';
// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from '@/components/NavbarPublic';
import Footer from '@/components/FooterPublic';
// import LoadingScreen from "@/components/custom/LoadingScreen";
import CursorFollower from '@/components/custom/CursorFollower';

export default function MainLayout(): React.JSX.Element {
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <>
      {/* {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />} */}

      <CursorFollower />

      <div className={`relative z-10 flex min-h-screen flex-col transition-opacity duration-500`}>
        <Navbar className=""></Navbar>
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
