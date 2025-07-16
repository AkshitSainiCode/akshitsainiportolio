import React from "react";
import "./journey.css";
import { GraduationCap } from "lucide-react";

const Journey = () => {
  const qualifications = [
    {
      id: 1,
      title: "Bachelor of Science(Computer Science)",
      institution: "Shobhit University Gangoh",
      description:
        "Completed a Three-year undergraduate program focused on core areas of Computer Science including  Artificial Intelligence, Database management system, and Software Engineering. Developed strong problem-solving skills and participated in various academic and technical activities.",
      year: "2019-2022",
    },
    {
      id: 2,
      title: "Master of Computer Applications",
      institution: "Shobhit University Gangoh",
      description:
        "Pursued a Postgraduate program specializing in advanced topics of Computer Science, including Software Development, Web Technologies, Advanced DBMS, and Artificial Intelligence. Gained practical experience through project work and research-oriented learning.",
      year: "2022-2024",
    },
    {
      id: 3,
      title: "Tranining",
      institution: "Software training institute in Ghaziabad, Uttar Pradesh",
      description:
        "Completed hands-on training in Full Stack Web Development, covering technologies like HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Gained practical experience through live projects and real-world problem solving.",
      year: "2024",
    },
    {
      id: 3,
      title: "Company",
      institution: "Knoqlogico IT Solutions Private Limited",
      description:
        "Employed as a Software Developer responsible for building and maintaining web applications using the MERN stack. Collaborating with cross-functional teams, managing project timelines, and delivering high-quality software solutions.",
      year: "2024-2025",
    },
  ];

  return (
    <section className="journey-section">
      <div className="journey-wrapper">
        <div className="journey-header">
          <h1 className="journey-title">Qualification Journey</h1>
          <div className="journey-underline"></div>
        </div>

        <div className="journey-timeline">
          <div className="journey-line"></div>

          {qualifications.map((item, index) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-dot">
                <GraduationCap className="icon" />
              </div>

              <div
                className={`timeline-content ${
                  index % 2 === 0 ? "left" : "right"
                }`}
              >
                <div className="card">
                  <div
                    className={`arrow ${
                      index % 2 === 0 ? "arrow-left" : "arrow-right"
                    }`}
                  ></div>

                  <div className="year-badge">{item.year}</div>
                  <h3 className="card-title">{item.title}</h3>
                  <h4 className="card-institution">{item.institution}</h4>
                  <p className="card-description">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
