import React from "react";

const board = [
  {
    name: "Juan Pérez",
    role: "Presidente",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Ing. Luis Rodríguez",
    role: "Asesor Técnico",
    img: "https://randomuser.me/api/portraits/men/33.jpg",
  },
  {
    name: "María Gómez",
    role: "Vicepresidente",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Carlos Ruiz",
    role: "Tesorero",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Ana Torres",
    role: "Secretario",
    img: "https://randomuser.me/api/portraits/women/46.jpg",
  },
  {
    name: "Pedro Sánchez",
    role: "Vocal 1",
    img: "https://randomuser.me/api/portraits/men/47.jpg",
  },
  {
    name: "Lucía Fernández",
    role: "Vocal 2",
    img: "https://randomuser.me/api/portraits/women/48.jpg",
  },
];

const departments = [
  { name: "Logística", lead: "María Gómez" },
  { name: "Motor", lead: "María Gómez" },
  { name: "Chasis", lead: "María Gómez" },
  { name: "Carrocería", lead: "María Gómez" },
  { name: "Frenos", lead: "María Gómez" },
  { name: "Electrónica", lead: "María Gómez" },
  { name: "Suspensión", lead: "María Gómez" },
  { name: "Escape", lead: "María Gómez" },
  { name: "Transmisión", lead: "María Gómez" },
];

const genericImg = "https://randomuser.me/api/portraits/lego/1.jpg";

export const Team = () => (
  <section className="min-h-screen bg-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Junta Directiva
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-12">
        {board.map((m) => (
          <div
            key={m.name}
            className="bg-indigo-50 rounded-xl shadow p-6 flex flex-col items-center"
          >
            <img
              src={m.img}
              alt={m.name}
              className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-indigo-200"
            />
            <h3 className="text-xl font-semibold text-indigo-800">{m.name}</h3>
            <p className="text-indigo-600">{m.role}</p>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-indigo-700 mb-6 text-center">
        Departamentos
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {departments.map((d) => (
          <div
            key={d.name}
            className="bg-indigo-50 rounded-xl shadow p-4 flex flex-col items-center"
          >
            <img
              src={genericImg}
              alt={d.name}
              className="w-20 h-20 rounded-full mb-3 object-cover border-4 border-indigo-200"
            />
            <span className="text-lg font-semibold text-indigo-800">
              {d.name}
            </span>
            <span className="text-indigo-600 text-sm">Líder: {d.lead}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);
