import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 flex items-center justify-center bg-gray-200 dark:bg-gray-800 text-black dark:text-white">
      <span className="text-sm">
        © 2022{' '}
        <a
          href="https://github.com/amanuela97/React-AccuWeather"
          className="hover:underline"
          target="_blank">
          Amanuel Zewdie
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
