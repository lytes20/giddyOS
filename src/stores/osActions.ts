import { create } from "zustand";

interface OSState {
  open: boolean;
  diskExplorerOpen: boolean;
  giddyStoreOpen: boolean;
  chatOpen: boolean;
  trashOpen: boolean;
  contextMenuVisible: boolean;
  contextMenuPosition: { x: number; y: number };
  selectedApp: string | null;
  closeComputerInfo: () => void;
  openComputerInfo: () => void;
  closeDiskExplorer: () => void;
  openDiskExplorer: () => void;
  closeGiddyStore: () => void;
  openGiddyStore: () => void;
  closeChat: () => void;
  openChat: () => void;
  closeTrash: () => void;
  openTrash: () => void;
  showContextMenu: (
    appName: string,
    position: { x: number; y: number }
  ) => void;
  hideContextMenu: () => void;
}

const useBear = create<OSState>((set) => ({
  open: false,
  diskExplorerOpen: false,
  giddyStoreOpen: false,
  chatOpen: false,
  trashOpen: false,
  contextMenuVisible: false,
  contextMenuPosition: { x: 0, y: 0 },
  selectedApp: null,
  closeComputerInfo: () => set({ open: false }),
  openComputerInfo: () => set({ open: true }),
  closeDiskExplorer: () => set({ diskExplorerOpen: false }),
  openDiskExplorer: () => set({ diskExplorerOpen: true }),
  closeGiddyStore: () => set({ giddyStoreOpen: false }),
  openGiddyStore: () => set({ giddyStoreOpen: true }),
  closeChat: () => set({ chatOpen: false }),
  openChat: () => set({ chatOpen: true }),
  closeTrash: () => set({ trashOpen: false }),
  openTrash: () => set({ trashOpen: true }),
  showContextMenu: (appName: string, position: { x: number; y: number }) =>
    set({
      contextMenuVisible: true,
      contextMenuPosition: position,
      selectedApp: appName,
    }),
  hideContextMenu: () =>
    set({
      contextMenuVisible: false,
      selectedApp: null,
    }),
}));

export default useBear;
