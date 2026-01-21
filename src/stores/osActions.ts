import { create } from "zustand";

interface OSState {
  open: boolean;
  diskExplorerOpen: boolean;
  giddyStoreOpen: boolean;
  closeComputerInfo: () => void;
  openComputerInfo: () => void;
  closeDiskExplorer: () => void;
  openDiskExplorer: () => void;
  closeGiddyStore: () => void;
  openGiddyStore: () => void;
}

const useBear = create<OSState>((set) => ({
  open: false,
  diskExplorerOpen: false,
  giddyStoreOpen: false,
  closeComputerInfo: () => set({ open: false }),
  openComputerInfo: () => set({ open: true }),
  closeDiskExplorer: () => set({ diskExplorerOpen: false }),
  openDiskExplorer: () => set({ diskExplorerOpen: true }),
  closeGiddyStore: () => set({ giddyStoreOpen: false }),
  openGiddyStore: () => set({ giddyStoreOpen: true }),
}));

export default useBear;
