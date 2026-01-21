import { create } from "zustand";

interface MusicState {
  open: boolean;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  audioRef: HTMLAudioElement | null;
  openMusicPlayer: () => void;
  closeMusicPlayer: () => void;
  setIsPlaying: (playing: boolean) => void;
  setCurrentTime: (time: number) => void;
  setDuration: (duration: number) => void;
  setVolume: (volume: number) => void;
  setAudioRef: (ref: HTMLAudioElement | null) => void;
}

const useMusic = create<MusicState>((set) => {
  return {
    open: false,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 99,
    audioRef: null,
    openMusicPlayer: () => set({ open: true }),
    closeMusicPlayer: () => set({ open: false }),
    setIsPlaying: (isPlaying) => set({ isPlaying }),
    setCurrentTime: (currentTime) => set({ currentTime }),
    setDuration: (duration) => set({ duration }),
    setVolume: (volume) => set({ volume }),
    setAudioRef: (audioRef) => set({ audioRef }),
  };
});

export default useMusic;
