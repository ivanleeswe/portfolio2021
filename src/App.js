import React from "react";
import MyNavbar from "./components/navbar/navbar";
import MainBlock from "./components/mainblock/mainblock";
import MyTitleMessage from "./components/title-message/title-message";
import About from "./pages/about/about";
import Skills from "./pages/skills/skills";
import TimeLine from "./components/timeline/timeline";
import Experience from "./pages/experience/experience";
import ContactForm from "./pages/contact/contact";
import Projects from "./components/projects/projects"

const App = () => {
  return (
    <div style={{ position: "relative" }}>
      <MyNavbar />
      <MyTitleMessage />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ContactForm /> 
    </div>
  );
};

export default App;