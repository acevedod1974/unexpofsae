import React, { useState } from "react";

export const Contact = () => {
  const [sent, setSent] = useState(false);

  return (
    <section className="min-h-screen flex items-center justify-center bg-white py-16">
      <div className="max-w-lg w-full bg-indigo-50 rounded-2xl shadow-xl p-8 border border-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6">Contáctanos</h2>
        {sent ? (
          <div className="text-green-600 font-semibold text-center">
            ¡Mensaje enviado! Pronto nos pondremos en contacto.
          </div>
        ) : (
          <form
            className="flex flex-col gap-4"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <input
              className="rounded-lg border border-indigo-200 px-4 py-2"
              placeholder="Nombre"
              required
            />
            <input
              className="rounded-lg border border-indigo-200 px-4 py-2"
              type="email"
              placeholder="Correo electrónico"
              required
            />
            <textarea
              className="rounded-lg border border-indigo-200 px-4 py-2"
              placeholder="Mensaje"
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
        )}
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
