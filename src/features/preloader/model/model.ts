import { create } from "zustand";
import { PreloaderStore } from "./types";

export const usePreloaderStore = create<PreloaderStore>((set) => ({
    show: true,
    setShow: (show) => set(() => ({ show }))
}));
