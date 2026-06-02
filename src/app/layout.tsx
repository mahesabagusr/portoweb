import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/custom/NavbarPublic';
import Footer from '@/components/custom/FooterPublic';
import CursorFollower from '@/components/custom/CursorFollower';
import LenisProvider from '@/components/custom/LenisProvider';

export const metadata: Metadata = {
  title: 'MahesTzy Portofolio',
  description: 'Mahesa Bagus Raditya Personal Portofolio Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link
          rel="preload"
          as="image"
          href="/mahestzy_nobg.webp"
          type="image/webp"
        />
        <link
          rel="preload"
          href="/fonts/plus-jakarta-sans.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <LenisProvider>
          <CursorFollower />
          <div className="relative z-10 flex min-h-screen flex-col transition-opacity duration-500">
            <Navbar className="items-center" />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
