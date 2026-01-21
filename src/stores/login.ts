import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => {
  return {
    isLoggedIn: true,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
  };
});

export default useAuthStore;
