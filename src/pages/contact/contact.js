import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import "./contact.styles.css";

const ContactForm = () => {
  return (
    <section id="contact" className="contact-section">
      <Container>
        <div className="contact-content">
          <p className="contact-kicker">CONTACT</p>

          <h1>Let&apos;s build something meaningful together.</h1>

          <p className="contact-description">
            I enjoy working on ambitious products, full-stack systems,
            AI-powered applications, and polished user experiences.
            Whether it&apos;s engineering, product collaboration,
            freelance opportunities, or startup ideas - feel free to reach out.
          </p>

          <div className="contact-actions">
            <a
              href="mailto:ivanleeswe@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="contact-btn">
                <i className="fas fa-envelope"></i>
                Email
              </Button>
            </a>

            <a
              href="https://www.linkedin.com/in/ivanleeswe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="contact-btn">
                <i className="fab fa-linkedin-in"></i>
                LinkedIn
              </Button>
            </a>

            <a
              href="https://github.com/ivanleeswe"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="contact-btn">
                <i className="fab fa-github"></i>
                GitHub
              </Button>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;