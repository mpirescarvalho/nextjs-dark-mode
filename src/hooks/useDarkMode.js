import React, { createContext, useContext, useState, useEffect } from 'react';

import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from '../styles/theme/colors';

const DarkModeContext = createContext({});

export const DarkModeProvider = ({ children }) => {
  const [darkMode, rawSetDarkMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetDarkMode(initialColorValue);
  }, []);

  const contextValue = React.useMemo(() => {
    function toggleDarkMode() {
      const root = window.document.documentElement;

      const newMode = darkMode === 'light' ? 'dark' : 'light';
      localStorage.setItem(COLOR_MODE_KEY, newMode);

      Object.entries(COLORS).forEach(([name, value]) => {
        const cssVarName = `--${name}`;
        const color = typeof value === 'object' ? value[newMode] : value;
        root.style.setProperty(cssVarName, color);
      });

      rawSetDarkMode(newMode);
    }

    return [darkMode, toggleDarkMode];
  }, [darkMode, rawSetDarkMode]);

  return (
    <DarkModeContext.Provider value={contextValue}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default function useDarkMode() {
  const context = useContext(DarkModeContext);
  return context;
}
