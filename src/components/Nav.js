import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-4 shadow-lg min-h-[50px] bg-gray-200 dark:bg-gray-800">
      <a className="flex items-center p-2 gap-2 cursor-pointer" href="/">
        <img src="/icon-192x192.png" alt="app logo" className="h-12 w-12" />
        <span className="self-center font-Oxygen-Mono text-2xl font-semibold">Weather App</span>
      </a>

      <ThemeSwitcher />
    </nav>
  );
};

export default Nav;
