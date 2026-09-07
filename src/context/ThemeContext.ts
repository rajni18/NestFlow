import { createContext } from "react";
import type { themeType } from "../types/themeType";

export const ThemeContext = createContext<themeType>({
    theme : "light",
    toggleTheme : ()=>{}
});
