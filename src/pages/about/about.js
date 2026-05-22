import React from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import Profile from "../../assets/img/profile/MyProfilePhoto.JPG";
import Resume from "../../assets/Ivan_Lee_resume.pdf"
import "./about.styles.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <Container>
        <div className="about-heading">
          <div className="section-kicker">ABOUT ME</div>
          <h1>Full-stack software engineer with a product-first mindset.</h1>
        </div>

        <div className="about-layout">
          <div className="about-meta">
            <div className="about-image-wrap">
              <Image src={Profile} alt="Ivan Lee" className="about-image" fluid />
            </div>
          </div>

          <div className="about-main">
            <p>
              I’m Ivan Lee, a software engineer who enjoys building complete,
              user-focused products from polished interfaces to reliable backend
              systems. My work spans customer-facing websites, internal tools,
              data-driven dashboards, marketplace workflows, and production web
              applications.
            </p>

            <p>
              I care about more than just writing code. I think through how
              systems should behave, how users move through a product, how data
              should be structured, and how each part of an application connects
              into a reliable experience.
            </p>

            <p>
              Recently, I’ve been building FluffyPuppy, a full-stack pet care
              and adoption platform with marketplace workflows, booking logic,
              sitter and owner communication, real adoption data pipelines,
              intelligent matching, search relevance, and production deployment.
            </p>

            <p>
              I’m strongest in environments where product, engineering, design,
              data, and systems thinking all come together to solve real
              problems.
            </p>

            <div className="about-actions">
              <a href="#contact">
                <Button className="portfolio-btn primary">Let&apos;s Talk</Button>
              </a>

              <a href={Resume} target="_blank" rel="noopener noreferrer">
                <Button className="portfolio-btn">Resume</Button>
              </a>

              <a
                href="https://github.com/ivanleeswe"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="portfolio-btn">GitHub</Button>
              </a>

              <a
                href="https://www.linkedin.com/in/ivanleeswe/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="portfolio-btn">LinkedIn</Button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;