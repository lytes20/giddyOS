import { create } from "zustand";

interface OSState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useLogin = create<OSState>((set) => ({
  isLoggedIn: false,
  login: () => set({ isLoggedIn: true }),
  logout: () => set({ isLoggedIn: false }),
}));

export default useLogin;
