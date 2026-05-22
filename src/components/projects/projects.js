import React from "react";
import Container from "react-bootstrap/Container";

import restaurantVid from "../../../src/assets/img/projects/restaurant.mp4";
import shelterTechVid from "../../../src/assets/img/projects/shelterTech.mp4";

import "./projects.css";

const projectGroups = [
  {
    title: "FluffyPuppy",
    label: "AI-Powered Pet Care & Adoption Platform",
    tech: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "pgvector",
      "OpenAI",
      "Vercel",
      "Render",
    ],
    description:
      "A full-stack platform for dog boarding, sitter booking, owner profiles, adoption discovery, semantic search, AI-powered matching, and real adoption data ingestion.",
    link: "https://fluffypuppy.xyz.com",
    featured: true,
  },
  {
    title: "ShelterTech",
    label: "Open-Source Nonprofit Website",
    tech: [
      "React",
      "TypeScript",
      "Storybook",
      "Figma",
      "Responsive UI",
      "Open Source",
    ],
    description:
      "Contributed to a production nonprofit website helping underserved communities access important resources through technology.",
    link: "https://github.com/ShelterTechSF/sheltertech.org",
    video: shelterTechVid,
  },
  {
    title: "Restaurant Website",
    label: "Responsive Business Website",
    tech: ["JavaScript", "React", "HTML", "CSS", "Responsive Design"],
    description:
      "Built a responsive restaurant website so customers could access menu information and business resources across desktop and mobile devices.",
    link: "https://github.com/ivanleeswe/newasianpearlwebsite",
    video: restaurantVid,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <Container>
        <div className="projects-heading">
          <p className="section-kicker">SELECTED WORK</p>

          <h1>
            Projects that show product thinking, full-stack systems, and
            real-world execution.
          </h1>
        </div>

        <div className="projects-grid">
          {projectGroups.map((project, index) => (
            <article
              className={`project-card ${project.featured ? "featured-project" : ""}`}
              key={index}
            >
              {project.video ? (
                <video className="project-video" controls>
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <div className="project-placeholder">
                  <span>AI</span>
                </div>
              )}

              <div className="project-content">
                <p className="project-label">{project.label}</p>

                <h2>{project.title}</h2>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((item, techIndex) => (
                    <span key={techIndex}>{item}</span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    className="project-link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Project
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;