import type { Metadata } from 'next';
import './globals.css';

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
      <body className="bg-canvas text-ink antialiased">{children}</body>
    </html>
  );
}
