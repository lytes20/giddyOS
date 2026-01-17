import { create } from 'zustand'

const useBear = create((set) => ({
  open: false,
  closeComputerInfo: () => set({ open: false }),
  openComputerInfo: () => set({ open: true }),
}))

export default useBear