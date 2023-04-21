import { findLastKey } from "lodash";

import { UserInfo } from "../../types/user";
import { create, StateCreator } from "zustand";
import { persist } from "zustand/middleware";
import { UserSlice, createUserSlice } from "./slices/user";
import { createSidebarSlice, SidebarConfigSlice } from "./slices/sidebar";
import { AppConfigSlice, createAppConfigSlice } from "./slices/config";

export interface IAppState {
  token: string;
  refreshToken: string;
  userInfo: UserInfo | null;

  updateLoginInfo: (tk: string, rtk: string, userInfo: UserInfo | null) => void;
  updateAddress: (addressId: number) => void;
  updateTokens: (tk: string, rtk: string) => void;
  logout: () => void;
}

const useAppState = create<UserSlice & SidebarConfigSlice & AppConfigSlice>()(
  persist(
    (...p) => ({
      ...createUserSlice(...p),
      ...createSidebarSlice(...p),
      ...createAppConfigSlice(...p)
    }),
    {
      name: "app-state",
      partialize: (state) =>
      Object.fromEntries(
        Object.entries(state).filter(([key]) => !['config'].includes(key))
      ),
    }
  )
);

export default useAppState;
