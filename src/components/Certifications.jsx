import React from "react";
import "./Certifications.css";

const certificates = [
  {
    id: 1,
    title: "Problem Solving Basic : Programming Fundamentals",
    platform: "HackerRank",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    link: "#", // Replace with actual certificate link
  },
  {
    id: 2,
    title: "React (Basic) Certificate : Programming Fundamentals",
    platform: "HackerRank",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    link: "#",
  },
  {
    id: 3,
    title: "Problem Solving Basic : Programming Fundamentals",
    platform: "HackerRank",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
    link: "#", // Replace with actual certificate link
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h1 className="certificates-title">Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <img
              src={cert.image}
              alt={cert.title}
              className="certificate-img"
            />
            <div className="certificate-info">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-link"
              >
                View Certificate
              </a>
              <h3 className="certificate-title">{cert.title}</h3>
              <p className="certificate-platform">- {cert.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
