// src/context/ThemeContext.js
import React, { createContext, useContext, useState } from 'react';

const themes = {
  holographic: {
    primaryDark: '#070b1e',
    primaryLight: '#0f1635',
    accentBlue: '#4deeea',
    accentPurple: '#b362ff',
    accentSecondary: '#72f2eb',
    gridLines: 'rgba(77, 238, 234, 0.1)'
  },
  cyberpunk: {
    primaryDark: '#0a001f',
    primaryLight: '#1a0f3c',
    accentBlue: '#00ffff',
    accentPurple: '#ff00ff',
    accentSecondary: '#ffff00',
    gridLines: 'rgba(0, 255, 255, 0.1)'
  }
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState('holographic');

  const changeTheme = (themeName) => {
    const theme = themes[themeName];
    Object.entries(theme).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
    setCurrentTheme(themeName);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);