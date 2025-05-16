import React from "react";
import { Car, ArrowRight } from "lucide-react";
import { useMouseParallax } from "../hooks/useMouseParallax";
import { useSmoothTransition } from "../hooks/useSmoothTransition";
import { useRevealEffect } from "../hooks/useRevealEffect";
import { AnimatedTitle } from "./AnimatedTitle";
import { ParallaxCard } from "./ParallaxCard";

export const Hero = () => {
  const mousePosition = useMouseParallax(0.05);
  const sectionRef = useSmoothTransition();
  const [titleRef, titleTransform] = useRevealEffect("right");
  const [contentRef, contentTransform] = useRevealEffect("left");

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden perspective-container"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50 to-white -z-10 gradient-animate" />
      <div
        className="absolute inset-0 -z-10 transition-transform duration-300 ease-out"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517846215422-f5f96806cf28')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          opacity: 0.2,
          transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`,
        }}
      />

      <div className="container mx-auto px-6 py-24">
        <ParallaxCard className="max-w-4xl mx-auto bg-gradient-to-br from-red-900/10 via-white/85 to-blue-900/10 backdrop-blur-lg rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/20">
          <div
            ref={titleRef}
            className="section-transition"
            style={{
              transform: titleTransform,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            <div className="inline-flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full mb-8 animate-float">
              <Car className="w-4 h-4 text-indigo-600" />
              <span className="text-xs sm:text-sm text-indigo-600 font-medium">
                UNEXPO Fórmula SAE
              </span>
            </div>

            <AnimatedTitle
              text="UNEXPO Fórmula SAE"
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8 reveal-text"
            />
          </div>

          <div
            ref={contentRef}
            className="section-transition"
            style={{
              transform: contentTransform,
              transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s",
            }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
              Un equipo multidisciplinario dedicado al diseño y construcción de
              vehículos de competición bajo los estándares de la "Society of
              Automotive Engineers".
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://www.instagram.com/unexpoformulasae/"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-all duration-300 flex items-center gap-2 hover:gap-4"
              >
                Conoce más
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </ParallaxCard>
      </div>
    </section>
  );
};
