// src/components/ThemeSwitcher.js
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ThemeSwitcher = () => {
  const { changeTheme } = useTheme();

  return (
    <div className="theme-switcher">
      <button onClick={() => changeTheme('holographic')}>Holographic</button>
      <button onClick={() => changeTheme('cyberpunk')}>Cyberpunk</button>
    </div>
  );
};

export default ThemeSwitcher;