import React from "react";

const posts = [
  {
    title: "¡Ganamos el primer lugar!",
    date: "2025-05-10",
    excerpt:
      "Nuestro equipo logró el primer lugar en la competencia nacional...",
    url: "#",
  },
  {
    title: "Nuevo patrocinador",
    date: "2025-04-22",
    excerpt: "Damos la bienvenida a nuestro nuevo patrocinador...",
    url: "#",
  },
];

export const Blog = () => (
  <section className="min-h-screen bg-white py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl font-bold text-indigo-700 mb-8 text-center">
        Noticias y Actualizaciones
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <a
            key={post.title}
            href={post.url}
            className="block bg-indigo-50 rounded-xl shadow p-6 hover:bg-indigo-100 transition"
          >
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">
              {post.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
            <p className="text-gray-700">{post.excerpt}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
