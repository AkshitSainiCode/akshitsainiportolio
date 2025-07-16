import React, { useState } from "react";
import { Github, Linkedin, Instagram, Facebook } from "lucide-react";
import Skills from "./Skills";
import Journey from "./Journey";
import "./about.css";
import Ranking from "./Ranking";

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return (
          <div className="about-text">
            <p>
              My name is <span className="highlight">AKSHIT SAINI</span> and I
              am a{" "}
              <span className="highlight">
                Computer Science and Engineering
              </span>{" "}
              student at <span className="highlight">Shobhit University</span>{" "}
              in Gangoh, Saharanpur, Uttar Pradesh 247341.
            </p>
            <p>
              I am proficient in various programming languages such as{" "}
              <span className="highlight">
                HTML, CSS, JavaScript, Bootstrap, React.js, Tailwind CSS ,
                MySQl, GitHub.
              </span>
            </p>
            <p>
              I also have experience working with frameworks and libraries such
              as <span className="highlight">NodeJS, ReactJS .</span>
            </p>
            <p>
              Whenever possible, I apply my passion for developing products with{" "}
              <span className="highlight">
                Modern Javascript Library and Frameworks.
              </span>
            </p>
            <p>
              In my free time, I enjoy learning new technologies and{" "}
              <span className="highlight">
                building new web technologies and products.
              </span>
            </p>
          </div>
        );
      case "skills":
        return <Skills />;
      case "journey":
        return <Journey />;
      case "ranking":
        return <Ranking />;
      case "social":
        return (
          <div className="social-media">
            <h2>Connect with me</h2>
            <div className="social-icons">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={48} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={48} strokeWidth={1.5} />
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={48} strokeWidth={1.5} />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={48} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="about-section" id="about">
      <h1 className="about-title">About me</h1>

      <div className="tab-buttons">
        {["about", "skills", "journey", "ranking", "social"].map((tab) => (
          <button
            key={tab}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="tab-content">{renderContent()}</div>
    </section>
  );
};

export default About;
