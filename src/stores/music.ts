import { create } from "zustand";

interface MusicState {
  open: boolean;
  openMusicPlayer: () => void;
  closeMusicPlayer: () => void;
}

const useMusic = create<MusicState>((set) => {
  return {
    open: false,
    openMusicPlayer: () => set({ open: true }),
    closeMusicPlayer: () => set({ open: false }),
  };
});

export default useMusic;
