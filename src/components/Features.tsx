import React from 'react';
import { Target, Users, Lightbulb, Rocket } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useSmoothTransition } from '../hooks/useSmoothTransition';
import { AnimatedTitle } from './AnimatedTitle';
import { ParallaxCard } from './ParallaxCard';

const features = [
  {
    icon: <Target className="w-6 h-6" />,
    title: 'Visión',
    description: 'Ser un equipo multidisciplinario altamente unido y organizado dentro de la UNEXPO, con un estrecho nexo estudiante-profesor.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Misión',
    description: 'Organización multidisciplinaria que trabaja en pro de fomentar una dinámica empresarial y desarrollo profesional.'
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Equipo',
    description: 'Estudiantes unidos en el diseño y construcción de vehículos de competición Formula SAE.'
  },
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: 'Innovación',
    description: 'Desarrollo e innovación tecnológica en el sector automotriz a través de investigación y diseño.'
  }
];

export const Features = () => {
  const [ref, isVisible] = useIntersectionObserver();
  const sectionRef = useSmoothTransition();

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-br from-red-50 via-white to-blue-50 relative scroll-reveal">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <AnimatedTitle 
            text="Nuestros Pilares Fundamentales"
            className="text-3xl sm:text-4xl font-bold mb-4 reveal-text"
          />
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Comprometidos con la excelencia académica y el desarrollo tecnológico automotriz.
          </p>
        </div>
        
        <div 
          ref={ref}
          className="stagger-animate perspective-container"
          data-visible={isVisible}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <ParallaxCard
                key={index}
                className="p-4 sm:p-6 rounded-xl bg-gradient-to-br from-white/90 to-white/80 backdrop-blur-sm border border-white/30 hover:shadow-xl transition-all duration-500 hover:bg-white group"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-red-500/10 to-blue-500/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-red-600 transition-all duration-300 group-hover:rotate-12 group-hover:text-blue-600 group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </ParallaxCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};