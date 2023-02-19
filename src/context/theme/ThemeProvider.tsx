import React, { useState } from 'react';
import { ColorConstant } from '../../constants/ColorConstant';
import { ThemeContext, Theme } from './ThemeContext';

interface ThemeProviderProps {
    children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>({
        name: "dark",
        color: "#111d2c",
    });

    const updateTheme = (isDarkMode: boolean) => {
        const newTheme = isDarkMode ? {
            name: "dark",
            color: ColorConstant.dark,
        } : {
            name: "light",
            color: ColorConstant.light,
        }
        setTheme(newTheme);
    };

    return (
        <ThemeContext.Provider value={{ theme, updateTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
