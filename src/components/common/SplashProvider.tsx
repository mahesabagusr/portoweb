'use client';

import { createContext, useCallback, useContext, useState } from 'react';
import SplashScreen from './SplashScreen';

interface SplashContextValue {
  /** True once the splash animation has finished and the site may animate in. */
  splashDone: boolean;
}

const SplashContext = createContext<SplashContextValue>({ splashDone: false });

/** Read whether the splash screen has completed (gate entrance animations on this). */
export const useSplash = () => useContext(SplashContext);

export default function SplashProvider({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);
  const handleComplete = useCallback(() => setSplashDone(true), []);

  return (
    <SplashContext.Provider value={{ splashDone }}>
      <SplashScreen onComplete={handleComplete} />
      {children}
    </SplashContext.Provider>
  );
}
