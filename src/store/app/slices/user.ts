import { StateCreator } from "zustand";
import { UserInfo } from "../../../types/user";

export interface UserSlice {
  token: string;
  refreshToken: string;
  userInfo: UserInfo | null;
  logout: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  token: "",
  refreshToken: "",
  userInfo: null,
  logout: () => {},
});
