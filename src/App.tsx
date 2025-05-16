import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { ParallaxSection } from "./components/ParallaxSection";
import { Stats } from "./components/Stats";
import { About } from "./pages/About";
import { Team } from "./components/Team";
import { Sponsors } from "./pages/Sponsors";
import { Blog } from "./pages/Blog";
import { Gallery } from "./pages/Gallery";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="bg-white shadow px-4 py-3 flex gap-4">
        <Link to="/" className="text-indigo-700 font-bold">
          Inicio
        </Link>
        <Link to="/about" className="text-indigo-700">
          Sobre Nosotros
        </Link>
        <Link to="/team" className="text-indigo-700">
          Equipo
        </Link>
        <Link to="/sponsors" className="text-indigo-700">
          Patrocinadores
        </Link>
        <Link to="/blog" className="text-indigo-700">
          Noticias
        </Link>
        <Link to="/gallery" className="text-indigo-700">
          Galería
        </Link>
        <Link to="/contact" className="text-indigo-700">
          Contacto
        </Link>
      </nav>
      {/* Page Content */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-hidden">
              <Hero />
              <Features />
              <ParallaxSection />
              <Stats />
            </div>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/sponsors" element={<Sponsors />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
