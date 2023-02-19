import { createContext } from "react";
import { ColorConstant } from "../../constants/ColorConstant";

export interface Theme {
	name: string;
	color: string;
}

export interface ThemeContextProps {
	theme: Theme;
	updateTheme: (isDarkMode: boolean) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: { name: "dark", color: ColorConstant.dark },
	updateTheme: () => {},
});
