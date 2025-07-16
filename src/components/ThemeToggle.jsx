import React from "react";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./themeToggle.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      <div className="theme-toggle-track">
        <div className="theme-toggle-thumb">
          {isDarkMode ? (
            <Moon size={14} className="theme-icon" />
          ) : (
            <Sun size={14} className="theme-icon" />
          )}
        </div>
        <div className="theme-toggle-background">
          <Sun size={12} className="sun-icon" />
          <Moon size={12} className="moon-icon" />
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
