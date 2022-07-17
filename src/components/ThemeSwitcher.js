import React, { useState } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../utils/useDarkSide';

const ThemeSwitcher = () => {
  const [colorTheme, setTheme] = useDarkSide();
  const [darkSide, setDarkSide] = useState(colorTheme === 'light' ? true : false);
  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkSide(checked);
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2 px-2">
        <DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={32} />
        <p className="text-base font-Oxygen-Mono text-black dark:text-white">
          {darkSide ? 'Dark Mode' : 'Light Mode'}
        </p>
      </div>
    </>
  );
};

export default ThemeSwitcher;
