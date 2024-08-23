import React from 'react';

const ToggleThemeButton = () => {
  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute('data-theme');
    htmlElement.setAttribute('data-theme', currentTheme === 'light' ? 'dark' : 'light');
  };

  return <button onClick={toggleTheme}>Alternar Tema</button>;
};

export default ToggleThemeButton;
