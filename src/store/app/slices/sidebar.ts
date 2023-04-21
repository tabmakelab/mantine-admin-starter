import { StateCreator } from "zustand";
const SIDEBAR_WIDTH_OPEN = 280;
const SIDEBAR_WIDTH_COLLAPSE = 80;
export interface SidebarConfigSlice {
  sidebarWidth: number;
  sidebarCollapse: boolean;
  toggleSidebarCollapse: () => void;
}
export const createSidebarSlice: StateCreator<SidebarConfigSlice> = (set) => ({
  sidebarWidth: SIDEBAR_WIDTH_OPEN,
  sidebarCollapse: false,
  toggleSidebarCollapse: () =>
    set((state) => ({
      sidebarCollapse: !state.sidebarCollapse,
      sidebarWidth: !state.sidebarCollapse
        ? SIDEBAR_WIDTH_COLLAPSE
        : SIDEBAR_WIDTH_OPEN,
    })),
});
