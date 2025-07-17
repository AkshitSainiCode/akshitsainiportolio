import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
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
  const elRef = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: [
        "Front-End Developer",
        "Back-End Developer",
        "Full Stack Developer",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    typedRef.current = typed;

    return () => {
      typed.destroy();
    };
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
              <h1 className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-label="wave">
                  👋🏻
                </span>
              </h1>

              <div className="intro-text">
                <p className="intro-line">
                  I'M <span className="name-highlight">AKSHIT SAINI</span>
                </p>
                <span className="role-text" ref={elRef}></span>
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
              </div>
            </div>
          </div>

          <div className="profile-section">
            <div className="profile-image-container">
              <div className="profile-ring">
                <div className="profile-ring-inner">
                  <img
                    src="photo.jpg"
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
