import React from 'react';

interface SoundContextType {
  playSound: (sound: string) => void;
  setEnabled: (enabled: boolean) => void;
}

const SoundContext = React.createContext<SoundContextType | undefined>(undefined);

export function SoundProvider({ children }: { children: React.ReactNode }) {
  const playSound = React.useCallback((sound: string) => {
    // soundManager.play(sound as any);
  }, []);

  const setEnabled = React.useCallback((enabled: boolean) => {
    // soundManager.setEnabled(enabled);
  }, []);

  return (
    <SoundContext.Provider value={{ playSound, setEnabled }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = React.useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within SoundProvider');
  }
  return context;
}
