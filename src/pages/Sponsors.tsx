import React from "react";
import { Link } from "react-router-dom";

const sponsors = [
  {
    name: "Sponsor 1",
    logo: "https://via.placeholder.com/120x60?text=Logo+1",
    url: "#",
  },
  {
    name: "Sponsor 2",
    logo: "https://via.placeholder.com/120x60?text=Logo+2",
    url: "#",
  },
  {
    name: "Sponsor 3",
    logo: "https://via.placeholder.com/120x60?text=Logo+3",
    url: "#",
  },
];

export const Sponsors = () => (
  <section className="min-h-screen bg-indigo-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Nuestros Patrocinadores
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {sponsors.map((s) => (
          <a
            key={s.name}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-xl shadow p-6 flex items-center justify-center border border-indigo-100 hover:shadow-lg transition"
          >
            <img src={s.logo} alt={s.name} className="h-16 object-contain" />
          </a>
        ))}
      </div>
      <div className="text-center mt-12">
        <p className="text-gray-700 mb-2">¿Quieres ser patrocinador?</p>
        <Link
          to="/contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Contáctanos
        </Link>
      </div>
    </div>
  </section>
);
