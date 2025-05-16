import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
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
import { Thanks } from "./pages/Thanks";

const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/about", label: "Sobre Nosotros" },
  { to: "/team", label: "Equipo" },
  { to: "/sponsors", label: "Patrocinadores" },
  { to: "/blog", label: "Noticias" },
  { to: "/gallery", label: "Galería" },
  { to: "/contact", label: "Contacto" },
];

function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-indigo-50 backdrop-blur sticky top-0 z-50 shadow-md rounded-b-2xl mx-auto max-w-5xl mt-2 mb-2 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="text-xl font-extrabold text-indigo-700 tracking-tight">
          UNEXPO FSAE
        </span>
      </div>
      <div className="flex gap-2 sm:gap-4">
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`px-3 py-2 rounded-lg font-medium transition-all duration-200
              ${
                location.pathname === link.to
                  ? "bg-indigo-600 text-white shadow"
                  : "text-indigo-700 hover:bg-indigo-100 hover:text-indigo-900"
              }
            `}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
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
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </Router>
  );
}

export default App;
