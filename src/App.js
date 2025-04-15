import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import React Router components
import Home from './Home';
import About from './components/About'; // Import the new About component
import Act from './activ/Act'
import Res from './activ/Research'
import Pro from './activ/Projects'
import Oth from './activ/Others'
import Art from './gallery/Art'
import Con from './Contact'
import './index.css';

function useGlobalTracking() {
  useEffect(() => {
    console.log("[Analytics] Page viewed:", window.location.pathname);
    const clickHandler = (e) => {
      let target = e.target;
      const path = [];

      // Build a path of tag names and classes/IDs
      while (target && target !== document.body) {
        let className = '';

        // Ensure className is a string, if not log it
        if (target.className) {
          if (typeof target.className === 'string') {
            className = target.className.trim() ? `.${target.className.trim().replace(/\s+/g, '.')}` : ''; // handle spaces gracefully
          } else {
            console.warn("Non-string className detected", target.className); // Log non-string className for debugging
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
  // Call the global tracking hook to enable tracking for all pages
  useGlobalTracking();

  return (
    <Router>
      <Routes>
        {/* Route for the Home page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* Route for the About page */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Con />} />
        <Route path="/art" element={<Art />} />        
        {/* Add other routes here if necessary */}
        <Route path="/activities" element={<Act />} />
        <Route path="/activities/research" element={<Res />} />
        <Route path="/activities/projects" element={<Pro />} />
        <Route path="/activities/others" element={<Oth />} />
      </Routes>
    </Router>
  );
}

export default App;
