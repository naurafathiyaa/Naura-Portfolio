import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "../Router/navigation";
import About from "../component/Pages/About";
import Skills from "../component/Pages/Skills";
import History from "../component/Pages/History";
import Tools from "../component/Pages/Tools";

const RouterConfig = () => (
    <Router>
      <Navigation>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/history" element={<History />} />
          <Route path="/tools" element={<Tools />} />
        </Routes>
      </Navigation>
    </Router>
  );

  export default RouterConfig;