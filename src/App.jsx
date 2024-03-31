import React from "react";

import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ScrollToTopButton from "./components/ScrollToTopButton";
const App = () => {
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
        <Home />
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default App;
