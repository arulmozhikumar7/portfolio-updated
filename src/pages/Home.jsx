import React from "react";
import Hero from "../components/Hero";
import Education from "../components/Education";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import { useState } from "react";
const Home = () => {
  const [themeIndex, setThemeIndex] = useState(0);
  const themes = ["lofi", "retro", "black", "dark", "light", "night", "luxury"];

  const toggleTheme = () => {
    // Calculate the index of the next theme
    const nextIndex = (themeIndex + 1) % themes.length;
    setThemeIndex(nextIndex);
  };
  const currentTheme = themes[themeIndex];
  return (
    <div data-theme={currentTheme}>
      <Navbar toggleTheme={toggleTheme} />
      <div id="Home">
        <Hero />
      </div>
      <div id="Education">
        <Education />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </div>
  );
};

export default Home;
