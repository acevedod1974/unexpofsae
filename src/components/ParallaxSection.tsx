import React, { useEffect, useRef } from 'react';
import { useMouseParallax } from '../hooks/useMouseParallax';
import { ContactModal } from './ContactModal';

export const ParallaxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMouseParallax(0.03);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const scrolled = window.scrollY;
      const rate = scrolled * 0.5;
      sectionRef.current.style.transform = `translate3d(0, ${rate}px, 0)`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-red-900 via-indigo-900 to-blue-900 text-white">
      <div 
        ref={sectionRef}
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1504707748692-419802cf939d')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.25,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`
        }}
      />
      
      <div className="relative container mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="max-w-2xl animate-slide-up backdrop-blur-sm bg-gradient-to-br from-black/30 to-black/20 p-4 sm:p-6 md:p-8 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 gradient-animate bg-gradient-to-r from-red-400 via-white to-blue-400 bg-clip-text text-transparent">
            Objetivo General
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-indigo-200 mb-6 sm:mb-8">
            Diseñar y construir un vehículo universitario tipo Formula, según los lineamientos 
            de la Society of Automotive Engineers (SAE), para competir en São Paulo, Brasil, en 2026.
          </p>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="group px-6 sm:px-8 py-3 sm:py-4 bg-white text-indigo-900 rounded-lg font-medium hover:bg-indigo-50 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
          >
            Únete al Equipo
          </button>
        </div>
      </div>
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};