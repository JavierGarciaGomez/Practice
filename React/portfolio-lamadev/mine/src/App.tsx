import React, { useState } from "react";
import { Contact } from "./components/contact/Contact";
import { Intro } from "./components/intro/Intro";
import { Menu } from "./components/menu/Menu";
import { Portfolio } from "./components/portfolio/Portfolio";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Topbar } from "./components/topbar/Topbar";
import { Works } from "./components/works/Works";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar isMenuOpen={isMenuOpen} onChangeMenu={setIsMenuOpen} />
      <Menu isMenuOpen={isMenuOpen} onChangeMenu={setIsMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
