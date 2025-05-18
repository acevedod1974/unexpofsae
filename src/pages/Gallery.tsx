import React from "react";

const images = [
  "https://images.unsplash.com/photo-1517846215422-f5f96806cf28",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  // Agrega más URLs de imágenes aquí
];

export const Gallery = () => (
  <section className="min-h-screen bg-indigo-50 py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Galería
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="rounded-xl overflow-hidden shadow-lg bg-white"
          >
            <img
              src={src}
              alt={`Galería ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);
