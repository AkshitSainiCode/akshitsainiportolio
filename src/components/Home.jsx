import React, { useEffect, useState } from "react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import "./home.css";
import About from "./About";
import Projects from "./Projects";
import Resume from "./Resume";
import Certifications from "./Certifications";
import Blogs from "./Blogs";

const Home = () => {
  const { isDarkMode } = useTheme();
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "Hi There! 👋";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const socialLinks = [
    {
      icon: <Github size={24} />,
      url: "https://github.com/AkshitSainiCode",
      label: "GitHub",
      color: "#333",
    },
    {
      icon: <Linkedin size={24} />,
      url: "https://linkedin.com/",
      label: "LinkedIn",
      color: "#0077b5",
    },
    {
      icon: <Instagram size={24} />,
      url: "https://www.instagram.com/",
      label: "Instagram",
      color: "#e4405f",
    },
    {
      icon: <Facebook size={24} />,
      url: "https://facebook.com/",
      label: "Facebook",
      color: "#1877f2",
    },
  ];

  return (
    <>
      <section id="home" className="home-section">
        <div className="home-container">
          <div className="home-content">
            <div className="greeting-section">
              <h1 className="greeting">
                {displayText}
                {isTyping && <span className="cursor">|</span>}
              </h1>

              <div className="intro-text">
                <p className="intro-line">
                  I'M <span className="name-highlight">AKSHIT SAINI</span>
                </p>
                <p className="role-text">Full Stack Developer</p>
                {/* <Typed
                className="role-text"
                strings={[
                  "Full Stack Developer",
                  "MERN Stack Engineer",
                  "UI/UX Enthusiast",
                ]}
                typeSpeed={50}
                backSpeed={30}
                loop
              /> */}
              </div>

              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ "--hover-color": social.color }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
                <a
                  href="https://google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link google-link"
                  style={{ "--hover-color": "#4285f4" }}
                  aria-label="Google"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-ring">
                <div className="profile-ring-inner">
                  <img
                    src="photo.jpg"
                    // src="/api/placeholder/300/300"
                    alt="Akshit Saini"
                    className="profile-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="animated-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
            <div className="shape shape-4"></div>
            <div className="shape shape-5"></div>
          </div>
        </div>
      </section>
      <About />
      <Projects />
      <Resume />
      <Certifications />
      <Blogs />
    </>
  );
};

export default Home;
