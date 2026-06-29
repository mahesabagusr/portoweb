import Navbar from '@/components/layout/NavbarPublic';
import Footer from '@/components/layout/FooterPublic';
import CursorFollower from '@/components/common/CursorFollower';
import LenisProvider from '@/components/providers/LenisProvider';
import UnderDevelopment from '@/components/common/UnderDevelopment';

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
