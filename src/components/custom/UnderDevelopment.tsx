import { Github, Linkedin, Instagram, Mail } from 'lucide-react';
import MusicPlayer from '@/components/custom/MusicPlayer';
import Image from 'next/image';

export default function UnderDevelopment(): React.JSX.Element {
  return (
    <main className="bg-canvas text-ink relative flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <MusicPlayer />
      <div className="mb-4 flex items-center justify-center gap-2">
        <Image src="/logo.svg" alt="MBR Logo" width={60} height={60} />
        <p className="eyebrow text-sm font-semibold">Mahesa Bagus Raditya</p>
      </div>
      <h1 className="display-mega text-ink mb-5 text-4xl sm:text-6xl">Under Development</h1>
      <p className="text-body max-w-md text-base leading-relaxed sm:text-lg">
        This website is currently being built. Something great is on the way!
      </p>

      <div className="mt-10 flex items-center justify-center gap-6">
        <a
          href="https://github.com/mahesabagusr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-subtle hover:text-ink transition-colors duration-300"
        >
          <Github className="h-5 w-5" />
        </a>
        <a
          href="https://linkedin.com/in/mahesabagusr"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-subtle hover:text-ink transition-colors duration-300"
        >
          <Linkedin className="h-5 w-5" />
        </a>
        <a
          href="https://instagram.com/mahesabagus.r"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-subtle hover:text-ink transition-colors duration-300"
        >
          <Instagram className="h-5 w-5" />
        </a>
        <a
          href="mailto:mahesabagusraditya1@gmail.com"
          aria-label="Email"
          className="text-subtle hover:text-ink transition-colors duration-300"
        >
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </main>
  );
}
