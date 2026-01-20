import { create } from "zustand";

interface AuthState {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
}

const useAuthStore = create<AuthState>((set) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return {
    isLoggedIn: isLoggedIn === "true" ? true : false,
    login: () => set({ isLoggedIn: true }),
    logout: () => set({ isLoggedIn: false }),
  };
});

export default useAuthStore;
