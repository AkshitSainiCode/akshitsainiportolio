import React from "react";
import "./projects.css";
import { Code } from "lucide-react";
import MyPortfolioImg from "../assets/My_Portfolio_project.png";
import VoiceAssistant from "../assets/VoiceAssistant.png";

const projects = [
  {
    id: 1,
    title: "My Portfolio ",
    description:
      "A personal portfolio website to showcase my projects, skills, certifications, and resume with a modern UI and dark/light theme support.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    image: MyPortfolioImg,
  },
  {
    id: 2,
    title: "Voice Assistant App for Visually Impaired",
    description:
      "A voice-activated assistant built with React Native and Node.js to help visually impaired users perform tasks like sending emails, reading messages, and accessing information using speech recognition and text-to-speech.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    image: VoiceAssistant,
  },
  // {
  //   id: 3,
  //   title: "Online Payroll Management System",
  //   description:
  //     "An online payroll system that tracks attendance, leave, and generates reports.",
  //   technologies: ["React", "Node.js", "Express", "MongoDB"],
  //   image:
  //     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
  // },
  // {
  //   id: 4,
  //   title: "Shoppy Ecommerce",
  //   description:
  //     "An e-commerce dashboard built using modern UI and charting libraries.",
  //   technologies: ["React", "Syncfusion", "Chart.js"],
  //   image:
  //     "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=250&fit=crop",
  // },
  // {
  //   id: 5,
  //   title: "Personal Portfolio",
  //   description:
  //     "My personal portfolio showcasing projects, skills, resume and contact.",
  //   technologies: ["React", "Tailwind", "EmailJS"],
  //   image:
  //     "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=250&fit=crop",
  // },
  // {
  //   id: 6,
  //   title: "Amazing Meal",
  //   description:
  //     "A recipe finder website that fetches meals from a public API with filters.",
  //   technologies: ["React", "API", "CSS"],
  //   image:
  //     "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=400&h=250&fit=crop",
  // },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <h1 className="projects-title">PROJECTS</h1>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-icon">
                <Code size={18} />
              </div>
            </div>
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tech-stack">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
