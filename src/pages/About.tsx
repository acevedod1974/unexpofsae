import React from "react";

export const About = () => (
  <section className="min-h-screen flex items-center justify-center bg-indigo-50 py-16">
    <div className="max-w-3xl bg-white rounded-2xl shadow-xl p-8 border border-indigo-100">
      <h1 className="text-3xl font-bold mb-4 text-indigo-700">
        Sobre Nosotros
      </h1>
      <p className="text-lg text-gray-700 mb-4">
        UNEXPO Fórmula SAE es un equipo multidisciplinario de estudiantes de la
        Universidad Nacional Experimental Politécnica “Antonio José de Sucre”
        (UNEXPO), dedicado al diseño, desarrollo y construcción de vehículos
        tipo fórmula bajo los estándares de la Society of Automotive Engineers
        (SAE).
      </p>
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">
        Misión
      </h2>
      <p className="text-gray-700 mb-4">
        Fomentar el desarrollo profesional, académico y personal de los
        estudiantes a través de la aplicación de conocimientos en ingeniería,
        trabajo en equipo y liderazgo, participando en competencias nacionales e
        internacionales de Fórmula SAE.
      </p>
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">
        Visión
      </h2>
      <p className="text-gray-700 mb-4">
        Ser un equipo de referencia nacional e internacional en el diseño y
        construcción de vehículos de competición, promoviendo la innovación, la
        excelencia y el espíritu colaborativo entre los futuros ingenieros de
        Venezuela.
      </p>
      <h2 className="text-2xl font-semibold text-indigo-600 mt-6 mb-2">
        Valores
      </h2>
      <ul className="list-disc pl-6 text-gray-700 mb-4">
        <li>Innovación y creatividad</li>
        <li>Trabajo en equipo</li>
        <li>Responsabilidad y compromiso</li>
        <li>Excelencia académica y técnica</li>
        <li>Ética profesional</li>
        <li>Orgullo institucional</li>
      </ul>
      <p className="text-gray-600">
        Nuestro equipo representa a la UNEXPO en eventos de alto nivel,
        enfrentando retos técnicos y de gestión, y contribuyendo al desarrollo
        de la ingeniería automotriz en Venezuela.
      </p>
    </div>
  </section>
);
