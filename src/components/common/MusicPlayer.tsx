'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
const BG_SOUND_URL = '/music/bg_sound.mp3';

export default function MusicPlayer({ src = BG_SOUND_URL }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.5;

    // Only DISCRETE gestures grant "user activation" for audible playback.
    // mousemove / scroll / wheel do NOT qualify in Chrome/Safari/Firefox.
    const events: (keyof DocumentEventMap)[] = [
      'pointerdown',
      'click',
      'keydown',
      'touchstart',
    ];

    const cleanup = () => {
      events.forEach(e => document.removeEventListener(e, onGesture));
    };

    // On a real gesture: unmute + play. Only tear down listeners once
    // playback has ACTUALLY started audibly — otherwise keep waiting.
    const onGesture = () => {
      audio.muted = false;
      audio
        .play()
        .then(() => {
          if (!audio.muted && !audio.paused) {
            setPlaying(true);
            cleanup();
          }
        })
        .catch(() => {
          /* keep listeners attached for the next gesture */
        });
    };

    audio.muted = true;
    audio.play().catch(() => {});

    events.forEach(e => document.addEventListener(e, onGesture));

    return cleanup;
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    // Audible == actually playing AND not muted.
    const audible = !audio.paused && !audio.muted;
    if (audible) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.muted = false;
      audio.play().then(() => setPlaying(true)).catch(() => {});
    }
  };

  return (
    <>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button
        onClick={toggle}
        aria-label={playing ? 'Mute music' : 'Play music'}
        aria-pressed={playing}
        className="bg-canvas/90 border-hairline text-subtle hover:text-ink hover:border-hairline-strong fixed right-5 bottom-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition-colors duration-200"
      >
        {playing ? <Volume2 className="h-5 w-5" /> : <VolumeX className="h-5 w-5" />}
      </button>
    </>
  );
}
