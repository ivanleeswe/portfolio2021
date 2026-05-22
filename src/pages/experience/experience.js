import React from "react";
import Container from "react-bootstrap/Container";
import "./experience.styles.css";

const experiences = [
  {
    company: "CIONIC",
    role: "Software Engineer",
    dates: "Oct 2022 - Jan 2025",
    stack: "React · TypeScript · JavaScript · jQuery · CSS · Python · Analytics",
    bullets: [
      "Owned front-end development for the company website and internal tools, including maintenance, feature development, bug fixes, UI improvements, and code quality.",
      "Rebuilt legacy JavaScript, jQuery, and CSS systems into React and TypeScript to improve maintainability, performance, and developer experience.",
      "Partnered with design and marketing teams to improve functionality, content, and analytics, contributing to a 50% traffic increase and 80% increase in new customer sign-ups.",
      "Collaborated with backend developers using Python to support integrations, validate API responses, reduce data errors, and improve reliability.",
    ],
  },
  {
    company: "FluffyPuppy",
    role: "Full-Stack Software Engineer / Founder Project",
    dates: "2025 - Present",
    stack: "React · TypeScript · Node · Express · PostgreSQL · pgvector · OpenAI · Vercel · Render · Supabase",
    bullets: [
      "Built a full-stack two-sided pet care marketplace with owner and sitter roles, authentication, listings, profiles, bookings, checkout-style flows, dashboards, photo uploads, and messaging.",
      "Designed Node, Express, and PostgreSQL backend systems to support users, dogs, appointments, payments, sitter profiles, photos, messages, and adoption records.",
      "Integrated RescueGroups adoption data and built ingestion pipelines for 30,000+ adoptable dog records with normalization, raw JSON storage, photo handling, and searchable relational fields.",
      "Implemented AI-powered adoption discovery using LLM intent parsing, embeddings, pgvector semantic search, structured filters, geographic ranking, and compatibility scoring.",
      "Deployed and debugged across Vercel, Render, PostgreSQL, and Supabase-related infrastructure while solving CORS, environment, API routing, and vector setup issues.",
    ],
  },
  {
    company: "PLUTOSHIFT",
    role: "Frontend Software Engineer",
    dates: "Apr 2021 - Nov 2021",
    stack: "React · Redux · React Hooks · Plotly.js · Figma · Balsamiq · Storybook",
    bullets: [
      "Developed a KPI platform using React, Redux, and React Hooks to visualize industrial process performance through reusable UI components.",
      "Built real-time data reporting interfaces with Plotly.js to display dynamic performance graphs for industrial operations.",
      "Designed wireframes in Balsamiq and Figma to support stakeholder use cases and improve customer engagement.",
      "Collaborated with backend and data science teams to design schemas, create API endpoints, and deploy the platform to customers.",
    ],
  },
  {
    company: "SHELTERTECH",
    role: "Frontend Software Engineer",
    dates: "Oct 2020 - Present",
    stack: "React · TypeScript · JavaScript · HTML · CSS · SCSS · Gatsby · Figma",
    bullets: [
      "Implemented pixel-perfect Figma designs using SCSS, including custom carousel behavior and responsive layouts.",
      "Built and launched a responsive magazine-style website using React, JavaScript, HTML, CSS, and media queries.",
      "Refactored React code into TypeScript to improve code quality, maintainability, and developer productivity.",
      "Integrated Gatsby to support faster static site generation, improved performance, and efficient production workflows.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <Container>
        <div className="experience-heading">
          <p className="section-kicker">EXPERIENCE</p>
          <h1>Engineering work across product, frontend, full-stack systems, and AI retrieval.</h1>
        </div>

        <div className="experience-timeline">
          {experiences.map((item, index) => (
            <article className="experience-row" key={index}>
              <div className="experience-meta">
                <span>{item.dates}</span>
              </div>

              <div className="experience-main">
                <div className="experience-title-line">
                  <h2>{item.company}</h2>
                  <p>{item.role}</p>
                </div>

                <div className="experience-stack">{item.stack}</div>

                <ul>
                  {item.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;