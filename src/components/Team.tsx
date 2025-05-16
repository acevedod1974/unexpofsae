import React from "react";

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

const members = [
  {
    name: "Juan Pérez",
    role: "Capitán",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "María Gómez",
    role: "Ingeniera de Diseño",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Ruiz",
    role: "Mecánico",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  // Agrega más miembros aquí
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
        <a
          href="/contact"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Contáctanos
        </a>
      </div>
    </div>
  </section>
);

export const Team = () => (
  <section className="min-h-screen bg-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Nuestro Equipo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {members.map((m) => (
          <div
            key={m.name}
            className="bg-indigo-50 rounded-xl shadow p-6 flex flex-col items-center"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-200"
            />
            <h3 className="text-xl font-semibold text-indigo-800">
              {m.name}
            </h3>
            <p className="text-indigo-600">{m.role}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
