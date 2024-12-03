import { Dispatch, SetStateAction, createContext } from 'react';

export type ThemeContextType = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>
  themeMode: string;
  setThemeMode: Dispatch<SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: '', setTheme: () => {}, themeMode: '', setThemeMode: () => {}
});