import React, { useState, useEffect } from "react";

const ToggleThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const htmlElement = document.documentElement;
    const currentTheme = htmlElement.getAttribute("data-theme");
    setIsDarkMode(currentTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const htmlElement = document.documentElement;
    const newTheme = isDarkMode ? "light" : "dark";
    htmlElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="flex items-center gap-2">
      {" "}
      {/* Alinhamento horizontal com gap */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
      </svg>
      <input
        type="checkbox"
        checked={isDarkMode}
        onChange={toggleTheme}
        className="toggle theme-controller"
        aria-label="Toggle dark mode"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </div>
  );
};

export default ToggleThemeButton;
