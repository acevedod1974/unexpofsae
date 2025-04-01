import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const stats = [
  { value: '4', label: 'Especialidades' },
  { value: '2026', label: 'Meta' },
  { value: '30+', label: 'Estudiantes' },
  { value: '1', label: 'Equipo' }
];


export const Stats = () => {
  const [ref, isVisible] = useIntersectionObserver();

  return (
    <section className="py-20 bg-gradient-to-br from-red-900 via-indigo-900 to-blue-900 relative" ref={ref}>
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1526550905121-3d3a7b35f081')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          mixBlendMode: 'overlay'
        }}
      />
      <div className="container mx-auto px-4 sm:px-6 text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center transform transition-all duration-500 delay-${index * 100} ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};