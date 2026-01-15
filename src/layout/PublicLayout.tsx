import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "@/components/NavbarPublic";
import Footer from "@/components/FooterPublic";
import LoadingScreen from "@/components/LoadingScreen";
import CursorFollower from "@/components/CursorFollower";

export default function MainLayout(): React.JSX.Element {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}

      <CursorFollower />

      <div
        className={`relative z-10 flex flex-col min-h-screen ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-500`}
      >
        <Navbar className=""></Navbar>
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
