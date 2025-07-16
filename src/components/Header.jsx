import React, { useState } from "react";
import {
  Home,
  User,
  Settings,
  Menu,
  X,
  FolderOpen,
  Award,
  BookOpen,
  Github,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { path: "/", label: "Home", icon: <Home size={20} /> },
    { path: "/projects", label: "Projects", icon: <FolderOpen size={20} /> },
    { path: "/resume", label: "Resume", icon: <User size={20} /> },
    {
      path: "/certifications",
      label: "Certifications",
      icon: <Award size={20} />,
    },
    { path: "/blogs", label: "Blogs", icon: <BookOpen size={20} /> },
    { path: "/github", label: "GitHub", icon: <Github size={20} /> },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-section">
          <h1 className="logo-text">AKSHIT SAINI</h1>
        </div>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul className="nav-list">
            {navItems.map(({ path, label, icon }) => (
              <li key={label} className="nav-item">
                <Link to={path} className="nav-link">
                  {icon}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="theme-toggle">
          <ThemeToggle />
        </div>

        {/* Hamburger Button */}
        <button className="mobile-menu-btn" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <ul className="mobile-nav-list">
            {navItems.map(({ path, label, icon }) => (
              <li key={label}>
                <Link to={path} onClick={toggleMenu}>
                  {React.cloneElement(icon, { size: 18 })}
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mobile-theme-toggle">
            <ThemeToggle />
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
