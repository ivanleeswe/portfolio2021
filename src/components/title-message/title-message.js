import React from "react";
import Typewriter from "typewriter-effect";
import "./title-message.styles.css";

const TitleMessage = () => (
  <section className="title-message">
    <div className="title-message-content">
      <p className="title-kicker">IVAN LEE</p>

      <h1>
        Full-Stack Software Engineer
        <span> Portfolio</span>
      </h1>

      <p className="title-subtitle">
        Product-minded engineer building polished interfaces, reliable systems,
        and AI-powered full-stack applications.
      </p>

      <div className="title-typewriter">
        <Typewriter
          options={{
            strings: [
              "React <span>•</span> TypeScript <span>•</span> Node <span>•</span> PostgreSQL <span>•</span> Python",
              "AI Search <span>•</span> Semantic Retrieval <span>•</span> Product Engineering",
              "Frontend <span>•</span> Backend <span>•</span> Full-Stack Systems",
            ],
            autoStart: true,
            loop: true,
            delay: 70,
            deleteSpeed: 35,
          }}
        />
      </div>
    </div>
  </section>
);

export default TitleMessage;