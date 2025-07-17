import React from "react";
import "./resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      {/* Background Gradient Layer */}
      <div className="resume-background" />

      {/* Section Title */}
      <h1 className="resume-title">Resume</h1>

      {/* Top Download Button */}
      <div className="resume-buttons">
        <a href="/AKSHIT_SAINI.pdf" className="download-button" download>
          Download Resume
        </a>
      </div>

      {/* Resume Preview */}
      <div className="resume-container">
        <img
          src="/Akshit-resume.png"
          alt="Akshit Saini Resume Preview"
          className="resume-image"
        />
        {/* PDF Embed Option (commented out) */}
        {/*
        <iframe
          src="/AKSHIT_SAINI.pdf"
          title="Akshit Saini Resume"
          className="resume-iframe"
        ></iframe>
        */}
      </div>

      {/* Bottom Download Button */}
      <div className="resume-buttons">
        <a href="/AKSHIT_SAINI.pdf" className="download-button" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
