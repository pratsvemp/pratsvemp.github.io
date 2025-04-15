import React, { useEffect } from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './components/About';
import Act from './activ/Act';
import Res from './activ/Research';
import Pro from './activ/Projects';
import Oth from './activ/Others';
import Art from './gallery/Art';
import Con from './Contact';
import './index.css';

function useGlobalTracking() {
  useEffect(() => {
    console.log("[Analytics] Page viewed:", window.location.pathname);
    const clickHandler = (e) => {
      let target = e.target;
      const path = [];

      while (target && target !== document.body) {
        let className = '';
        if (target.className) {
          if (typeof target.className === 'string') {
            className = target.className.trim() ? `.${target.className.trim().replace(/\s+/g, '.')}` : '';
          } else {
            console.warn("Non-string className detected", target.className);
          }
        }
        const desc = `${target.tagName.toLowerCase()}${target.id ? `#${target.id}` : ''}${className}`;
        path.unshift(desc);
        target = target.parentElement;
      }

      console.log("[Analytics] Clicked:", path.join(" > "));
    };

    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  }, []);
}

function App() {
  useGlobalTracking();

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#/home" element={<Home />} />
        <Route path="/#/about" element={<About />} />
        <Route path="/#/contact" element={<Con />} />
        <Route path="/#/art" element={<Art />} />
        <Route path="/#/activities" element={<Act />} />
        <Route path="/#/activities/research" element={<Res />} />
        <Route path="/#/activities/projects" element={<Pro />} />
        <Route path="/#/activities/others" element={<Oth />} />
      </Routes>
    </Router>
  );
}

export default App;
