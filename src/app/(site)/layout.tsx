import Navbar from '@/components/custom/NavbarPublic';
import Footer from '@/components/custom/FooterPublic';
import CursorFollower from '@/components/custom/CursorFollower';
import LenisProvider from '@/components/custom/LenisProvider';
import UnderDevelopment from '@/components/custom/UnderDevelopment';

const underDevelopment = process.env.NEXT_PUBLIC_UNDER_DEVELOPMENT === 'true';

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  if (underDevelopment) {
    return <UnderDevelopment />;
  }

  return (
    <LenisProvider>
      <CursorFollower />
      <div className="bg-canvas relative z-10 flex min-h-screen flex-col transition-opacity duration-500">
        <Navbar className="items-center" />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </LenisProvider>
  );
}
