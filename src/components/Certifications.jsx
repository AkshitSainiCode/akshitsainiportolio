import React from "react";
import "./certifications.css";

const certificates = [
  {
    id: 1,
    title: "SOFTWARE TESTING IN SQL",
    platform: "Daily_E-Learning_Training",
    image: "/06FEB2022.png",
    link: "/06FEB2022.png",
  },
  {
    id: 2,
    title: "HTML CSS JAVASCRIPT",
    platform: "Daily_E-Learning_Training",
    image: "/27FEB2022.png",
    link: "/27FEB2022.png",
  },
  {
    id: 3,
    title: "HTML CSS JAVASCRIPT",
    platform: "Daily_E-Learning_Training",
    image: "/12JUNE2022.png",
    link: "/12JUNE2022.png",
  },
  {
    id: 4,
    title: "GOVERNMENT CERTIFICATE",
    platform: "Skill India",
    image: "/Governmentcertificate.png",
    link: "/Governmentcertificate.png",
  },
  // {
  //   id: 5,
  //   title: "HTML CSS JAVASCRIPT",
  //   platform: "Daily_E-Learning_Training",
  //   image: "/12JUNE2022.png",
  //   link: "/12JUNE2022.png",
  // },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <h1 className="certificates-title">Certificates</h1>
      <div className="certificates-grid">
        {certificates.map((cert) => (
          <div className="certificate-card" key={cert.id}>
            <a href={cert.link} target="_blank" rel="noopener noreferrer">
              <img
                src={cert.image}
                alt={cert.title}
                className="certificate-img"
              />
            </a>
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
              <p className="certificate-platform">{cert.platform}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
