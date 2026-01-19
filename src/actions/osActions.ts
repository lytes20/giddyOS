import { create } from "zustand";

interface OSState {
  open: boolean;
  diskExplorerOpen: boolean;
  closeComputerInfo: () => void;
  openComputerInfo: () => void;
  closeDiskExplorer: () => void;
  openDiskExplorer: () => void;
}

const useBear = create<OSState>((set) => ({
  open: false,
  diskExplorerOpen: false,
  closeComputerInfo: () => set({ open: false }),
  openComputerInfo: () => set({ open: true }),
  closeDiskExplorer: () => set({ diskExplorerOpen: false }),
  openDiskExplorer: () => set({ diskExplorerOpen: true }),
}));

export default useBear;
