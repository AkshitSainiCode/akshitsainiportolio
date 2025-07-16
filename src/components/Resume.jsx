import React from "react";
import "./Resume.css";

function Resume() {
  return (
    <section className="resume-section" id="resume">
      <h1 className="resume-title">Resume</h1>
      <div className="resume-container"></div>
      <div className="resume-buttons">
        <a href="/your-resume.pdf" className="download-button" download>
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default Resume;
