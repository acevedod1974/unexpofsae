import React from "react";

export const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="max-w-lg w-full bg-indigo-50 rounded-2xl shadow-xl p-8 border border-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Contáctanos</h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          action="/thanks"
          className="flex flex-col gap-4"
        >
          {/* Netlify hidden input for form name */}
          <input type="hidden" name="form-name" value="contact" />
          <input
            className="rounded-lg border border-indigo-200 px-4 py-2"
            placeholder="Nombre"
            name="name"
            required
          />
          <input
            className="rounded-lg border border-indigo-200 px-4 py-2"
            type="email"
            placeholder="Correo electrónico"
            name="email"
            required
          />
          <textarea
            className="rounded-lg border border-indigo-200 px-4 py-2"
            placeholder="Mensaje"
            name="message"
            rows={4}
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-lg px-6 py-3 font-medium hover:bg-indigo-700 transition"
          >
            Enviar
          </button>
        </form>
        <div className="mt-8 text-center">
          <p className="text-gray-700">
            O síguenos en{" "}
            <a
              href="https://www.instagram.com/unexpoformulasae/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 underline"
            >
              Instagram
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};
