import { StateCreator } from "zustand";

export interface AppConfigSlice {
  colorScheme: "dark" | "light";
  toggleColorScheme: () => void;
}
export const createAppConfigSlice: StateCreator<AppConfigSlice> = (set) => ({
  colorScheme: "light",
  toggleColorScheme: () =>
    set((state) => ({
      colorScheme: state.colorScheme == "dark" ? "light" : "dark",
    }))
});
