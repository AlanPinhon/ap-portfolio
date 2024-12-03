import React, { useEffect, useState } from 'react';
import { ThemeContext } from './ThemeContext';
import { prefersDarkTheme } from '../helpers/prefersDarkTheme';

interface ProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider:React.FC<ProviderProps> = ({children}) => {

  const preferDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

  const initialTheme = localStorage.getItem('themeMode') === 'system'
      ? prefersDarkTheme()
      : localStorage.getItem('theme') || prefersDarkTheme();

  const [theme, setTheme] = useState<string>(initialTheme);
  const [themeMode, setThemeMode] = useState(localStorage.getItem('themeMode') || 'system');

  useEffect(() => {
    if(themeMode === 'system') {

      const handleChange = () => {
        const newTheme = prefersDarkTheme();
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
      };
      preferDarkTheme.addEventListener('change', handleChange);
    
      return () => preferDarkTheme.removeEventListener('change', handleChange);
    }
  }, [themeMode]);

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{theme, setTheme, themeMode, setThemeMode}}>
      {children}
    </ThemeContext.Provider>
  )
}