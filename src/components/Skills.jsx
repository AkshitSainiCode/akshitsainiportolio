import React, { useState, useEffect } from "react";
import "./Skills.css";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Technical Skills");
  const [animatedValues, setAnimatedValues] = useState({});

  const skillTabs = ["Technical Skills", "Personal Skills", "Tools"];

  const technicalSkills = [
    { name: "HTML", value: 75, color: "#f43f5e" },
    { name: "CSS", value: 80, color: "#0ea5e9" },
    { name: "Javascript", value: 71, color: "#facc15" },
    { name: "GitHub", value: 75, color: "#14b8a6" },
    { name: "MySQL", value: 68, color: "#ec4899" },
    { name: "NodeJS", value: 66, color: "#f97316" },
    { name: "React js", value: 78, color: "#06b6d4" },
    { name: "PHP", value: 75, color: "#ef4444" },
    { name: "JAVA", value: 75, color: "#22c55e" },
  ];

  const personalSkills = [
    { name: "Communication Skills", value: 75, color: "#f43f5e" },
    { name: "Project Management", value: 85, color: "#10b981" },
    { name: "Problem Solving", value: 81, color: "#f97316" },
    { name: "Analytical Abilities", value: 77, color: "#facc15" },
    { name: "Organization", value: 87, color: "#ec4899" },
    { name: "Creativity", value: 79, color: "#06b6d4" },
  ];

  const tools = [
    { name: "Visual Studio Code", icon: "💻", color: "#007acc" },
    { name: "PyCharm", icon: "🐍", color: "#21d789" },
    { name: "Git", icon: "🔀", color: "#f14e32" },
    { name: "GitHub", icon: "🐱", color: "#181717" },
    { name: "Windows", icon: "🪟", color: "#0078d4" },
    { name: "PostgreSQL", icon: "🐘", color: "#336791" },
    { name: "Figma", icon: "🎨", color: "#f24e1e" },
    { name: "Chrome", icon: "🌐", color: "#4285f4" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      const currentSkills =
        activeTab === "Technical Skills" ? technicalSkills : personalSkills;
      currentSkills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues((prev) => ({
            ...prev,
            [skill.name]: skill.value,
          }));
        }, index * 100);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [activeTab]);

  useEffect(() => {
    setAnimatedValues({});
  }, [activeTab]);

  const renderSkills = (skills) => (
    <div className="skills-grid">
      {skills.map((skill, idx) => (
        <div key={idx} className="skill-card">
          <div className="skill-percent" style={{ color: skill.color }}>
            {animatedValues[skill.name] || 0}%
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${animatedValues[skill.name] || 0}%`,
                backgroundColor: skill.color,
              }}
            />
          </div>
          <div className="skill-name" style={{ color: skill.color }}>
            {skill.name}
          </div>
        </div>
      ))}
    </div>
  );

  const renderTools = () => (
    <div className="skills-grid">
      {tools.map((tool, idx) => (
        <div key={idx} className="skill-card">
          <div className="tool-icon">{tool.icon}</div>
          <div className="skill-name" style={{ color: tool.color }}>
            {tool.name}
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "Technical Skills":
        return renderSkills(technicalSkills);
      case "Personal Skills":
        return renderSkills(personalSkills);
      case "Tools":
        return renderTools();
      default:
        return null;
    }
  };

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-header">
          <h1 className="skills-title">My Skills</h1>
        </div>

        <div className="skills-tabs">
          {skillTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`skill-tab ${activeTab === tab ? "active" : ""}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <h2 className="skills-heading">{activeTab}</h2>

        {renderContent()}

        <div className="skills-stats">
          <h3 className="skills-stats-title">Quick Stats</h3>
          <div className="stats-grid">
            <div>
              <div className="stat-number" style={{ color: "#3b82f6" }}>
                9+
              </div>
              <div className="stat-label">Technical Skills</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: "#10b981" }}>
                6+
              </div>
              <div className="stat-label">Personal Skills</div>
            </div>
            <div>
              <div className="stat-number" style={{ color: "#8b5cf6" }}>
                8+
              </div>
              <div className="stat-label">Tools & Platforms</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
