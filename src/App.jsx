import { HashRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Research from './pages/Research';
import Resources from './pages/Resources';
import Personal from './pages/Personal';
import Contact from './pages/Contact';

function App() {
  return (
    <HashRouter>
      <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/research" element={<Research />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
