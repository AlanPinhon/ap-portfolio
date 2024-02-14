import React, { useState } from 'react';
import { ThemeContext } from './ThemeContext';

interface ProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider:React.FC<ProviderProps> = ({children}) => {

  const prefersDarkThemeMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  const [theme, setTheme] = useState<string>(localStorage.getItem('theme') || (prefersDarkThemeMode ? 'dark' : 'light'));

  const contextValue = {theme, setTheme};

  return (

    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>

  )
}