// import { useState } from "react";
import { Outlet } from 'react-router-dom';
import Navbar from '@/components/NavbarPublic';
import Footer from '@/components/FooterPublic';
// import LoadingScreen from "@/components/custom/LoadingScreen";
import CursorFollower from '@/components/custom/CursorFollower';

export default function MainLayout(): React.JSX.Element {
  // const [isLoading, setIsLoading] = useState(true);

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
