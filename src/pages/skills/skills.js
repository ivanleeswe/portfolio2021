import React from "react";
import Container from "react-bootstrap/Container";
import "./skills.styles.css";

const skillGroups = [
  {
    title: "Languages",
    skills: [
      "JavaScript",
      "TypeScript",
      "Python",
      "HTML",
      "CSS",
      "Sass",
      "SCSS",
      "LESS",
    ],
  },
  {
    title: "Frontend",
    skills: [
      "React",
      "Redux",
      "React Hooks",
      "Responsive UI",
      "Styled Components",
      "Bootstrap",
      "jQuery",
      "Gatsby",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express",
      "REST APIs",
      "JWT Authentication",
      "API Integration",
      "Stripe Integration",
      "Backend Workflow Design",
    ],
  },
  {
    title: "Databases",
    skills: [
      "PostgreSQL",
      "pgvector",
      "MongoDB",
      "MySQL",
      "Relational Modeling",
      "Vector Search",
      "Data Normalization",
    ],
  },
  {
    title: "AI / Search Systems",
    skills: [
      "OpenAI API",
      "OpenAI Embeddings",
      "LLM Intent Parsing",
      "Semantic Search",
      "Hybrid Retrieval",
      "AI Enrichment",
      "Recommendation Logic",
      "Compatibility Ranking",
    ],
  },
  {
    title: "AI Developer Tooling",
    skills: [
      "OpenAI Codex",
      "Claude Code",
      "Cursor",
      "GitHub Copilot",
      "Prompt Engineering",
      "AI-Assisted Development",
    ],
  },
  {
    title: "Cloud / Deployment",
    skills: [
      "Vercel",
      "Render",
      "Supabase",
      "AWS EC2",
      "AWS S3",
      "Docker",
      "NGINX",
      "Deployment Debugging",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Bitbucket",
      "Babel",
      "Webpack",
      "Firebase",
      "Freshdesk",
      "ClickUp",
    ],
  },
  {
    title: "Design / Product",
    skills: [
      "Figma",
      "Balsamiq",
      "Wireframing",
      "UI Systems",
      "Responsive Design",
      "Design Handoff",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <div className="skills-heading">
          <p className="section-kicker">TECHNICAL SKILLS</p>

          <h1>
            Tools I use to build polished interfaces, reliable systems, and
            AI-powered products.
          </h1>
        </div>

        <div className="skills-list">
          {skillGroups.map((group, index) => (
            <div className="skill-row" key={index}>
              <h2>{group.title}</h2>

              <div className="skill-tags">
                {group.skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;