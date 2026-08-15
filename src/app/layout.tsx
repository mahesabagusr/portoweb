import type { Metadata } from 'next';
import './globals.css';
import TRPCReactProvider from '@/lib/trpc/Provider';
import SplashProvider from '@/components/common/SplashProvider';

export const metadata: Metadata = {
  title: 'Mahesa Bagus Raditya',
  description: 'Mahesa Bagus Raditya Personal Portofolio Website',
  icons: {
    icon: [{ url: '/logo.svg', sizes: '200x200', type: 'image/png' }],
  },
  other: {
    'google-adsense-account': 'ca-pub-9647783114393793',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" as="image" href="/mahestzy_nobg.webp" type="image/webp" />
      </head>
      <body className="bg-canvas text-ink antialiased">
        <TRPCReactProvider>
          <SplashProvider>{children}</SplashProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
