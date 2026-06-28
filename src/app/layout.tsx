import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/custom/NavbarPublic';
import Footer from '@/components/custom/FooterPublic';
import CursorFollower from '@/components/custom/CursorFollower';
import LenisProvider from '@/components/custom/LenisProvider';

export const metadata: Metadata = {
  title: 'Mahesa Bagus Raditya',
  description: 'Mahesa Bagus Raditya Personal Portofolio Website',
  icons: {
    icon: [{ url: '/logo.svg', sizes: '200x200', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/mahestzy_nobg.webp" type="image/webp" />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <LenisProvider>
          <CursorFollower />
          <div className="bg-canvas relative z-10 flex min-h-screen flex-col transition-opacity duration-500">
            <Navbar className="items-center" />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </LenisProvider>
      </body>
    </html>
  );
}
