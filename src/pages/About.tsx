import React from "react";

export const About = () => (
  <section className="min-h-screen flex items-center justify-center bg-indigo-50 py-16">
    <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        Sobre Nosotros
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        Somos el equipo UNEXPO Fórmula SAE, un grupo multidisciplinario dedicado
        al diseño y construcción de vehículos de competición bajo los estándares
        de la Society of Automotive Engineers (SAE).
      </p>
      <p className="text-gray-600">
        Nuestra misión es fomentar la innovación, el trabajo en equipo y el
        desarrollo profesional de nuestros miembros, representando a la UNEXPO
        en competencias nacionales e internacionales.
      </p>
    </div>
  </section>
);
