import React from "react";

export const About = () => (
  <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-16">
    <div className="max-w-3xl w-full bg-white/90 rounded-3xl shadow-2xl p-10 border border-indigo-100 backdrop-blur-lg">
      <div className="flex flex-col items-center mb-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3201/3201663.png"
          alt="UNEXPO Fórmula SAE"
          className="w-24 h-24 mb-4 rounded-full shadow-lg border-4 border-indigo-100 bg-white"
        />
        <h1 className="text-4xl font-extrabold mb-2 text-indigo-700 tracking-tight text-center">
          Sobre Nosotros
        </h1>
        <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-1 rounded-full text-sm font-medium shadow mb-2">
          UNEXPO Fórmula SAE
        </span>
      </div>
      <p className="text-lg text-gray-700 mb-6 text-center leading-relaxed">
        UNEXPO Fórmula SAE es un equipo multidisciplinario de estudiantes de la
        Universidad Nacional Experimental Politécnica “Antonio José de Sucre”
        (UNEXPO), dedicado al diseño, desarrollo y construcción de vehículos
        tipo fórmula bajo los estándares de la Society of Automotive Engineers
        (SAE).
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
            <span>🎯</span> Misión
          </h2>
          <p className="text-gray-700 mb-4">
            Fomentar el desarrollo profesional, académico y personal de los
            estudiantes a través de la aplicación de conocimientos en
            ingeniería, trabajo en equipo y liderazgo, participando en
            competencias nacionales e internacionales de Fórmula SAE.
          </p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
            <span>🚀</span> Visión
          </h2>
          <p className="text-gray-700 mb-4">
            Ser un equipo de referencia nacional e internacional en el diseño y
            construcción de vehículos de competición, promoviendo la innovación,
            la excelencia y el espíritu colaborativo entre los futuros
            ingenieros de Venezuela.
          </p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-2 flex items-center gap-2">
          <span>🌟</span> Valores
        </h2>
        <ul className="list-disc pl-6 text-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
          <li>Innovación y creatividad</li>
          <li>Trabajo en equipo</li>
          <li>Responsabilidad y compromiso</li>
          <li>Excelencia académica y técnica</li>
          <li>Ética profesional</li>
          <li>Orgullo institucional</li>
        </ul>
      </div>
      <div className="bg-indigo-50 rounded-xl p-4 text-center shadow-inner border border-indigo-100">
        <p className="text-gray-700">
          Nuestro equipo representa a la UNEXPO en eventos de alto nivel,
          enfrentando retos técnicos y de gestión, y contribuyendo al desarrollo
          de la ingeniería automotriz en Venezuela.
        </p>
      </div>
    </div>
  </section>
);
