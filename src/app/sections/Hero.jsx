"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Pendant le SSR, afficher une version statique
  if (!mounted) {
    return (
      <section
        id="hero"
        className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20"
      >
        {/* Animated Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 opacity-0">
          {/* Photo */}
          <div className="mb-8">
            <div className="relative w-48 h-48 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-60"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop"
                alt="Photo de profil"
                className="relative w-full h-full rounded-full object-cover border-4 border-cyan-400/50 shadow-[0_0_60px_rgba(34,211,238,0.8)]"
              />
            </div>
          </div>

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-cyan-300 text-sm font-medium">Disponible pour de nouvelles opportunités</span>
          </div>

          {/* Titre */}
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_#22d3ee]">
            Mohamed Achraf Benchekroun
          </h1>

          {/* Sous-titre avec animation de typing */}
          <div className="mb-6">
            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Ingénieur Informatique & Réseaux
            </p>
            <p className="text-xl md:text-2xl text-cyan-400 font-semibold mt-2">
              Développeur Full Stack
            </p>
          </div>

          {/* Description courte */}
          <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed">
            Passionné par la création d'applications innovantes et performantes.
            Spécialisé en architecture logicielle moderne et systèmes distribués.
          </p>

          {/* Boutons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <a
              href="/cv.pdf"
              download
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-[0_0_30px_#00eaff60] hover:shadow-[0_0_50px_#00eaff80] transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger CV
              </span>
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Me Contacter
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center">
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#0c1424]/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#0c1424]/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#0c1424]/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group">
              <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0">
          <div className="flex flex-col items-center gap-2 text-cyan-400">
            <span className="text-sm font-medium">Scroll</span>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>
    );
  }

  // Une fois monté, afficher avec animations
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center min-h-screen text-center px-4 py-20"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-10 animate-fade-in">
        {/* Photo */}
        <div className="mb-8 animate-scale-in">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-60 animate-pulse"></div>
            <img
              src="/profile.jpg"
              alt="Photo de profil"
              className="relative w-full h-full rounded-full object-cover border-4 border-cyan-400/50 shadow-[0_0_60px_rgba(34,211,238,0.8)]"
            />
          </div>
        </div>

        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full backdrop-blur-sm animate-slide-down">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          <span className="text-cyan-300 text-sm font-medium">Disponible pour de nouvelles opportunités</span>
        </div>

        {/* Titre */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_#22d3ee] animate-slide-up">
          Mohamed Achraf Benchekroun
        </h1>

        {/* Sous-titre avec animation de typing */}
        <div className="mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-2xl md:text-3xl text-gray-300 font-light">
            Ingénieur Informatique & Réseaux
          </p>
          <p className="text-xl md:text-2xl text-cyan-400 font-semibold mt-2">
            Développeur Full Stack
          </p>
        </div>

        {/* Description courte */}
        <p className="max-w-2xl mx-auto text-gray-400 text-lg mb-10 leading-relaxed animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Passionné par la création d'applications innovantes et performantes.
          Spécialisé en architecture logicielle moderne et systèmes distribués.
        </p>

        {/* Boutons */}
        <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a
            href="/cv.pdf"
            download
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-[0_0_30px_#00eaff60] hover:shadow-[0_0_50px_#00eaff80] transition-all duration-300 overflow-hidden transform hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Télécharger CV
            </span>
          </a>

          <a
            href="#contact"
            className="group px-8 py-4 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-xl hover:bg-cyan-400 hover:text-black transition-all duration-300 shadow-lg backdrop-blur-sm flex items-center gap-2 transform hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Me Contacter
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#0c1424]/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group transform hover:scale-110">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#0c1424]/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group transform hover:scale-110">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="#" className="w-12 h-12 flex items-center justify-center bg-[#0c1424]/80 border border-cyan-500/30 rounded-xl hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 group transform hover:scale-110">
            <svg className="w-5 h-5 text-gray-400 group-hover:text-cyan-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
        <div className="flex flex-col items-center gap-2 text-cyan-400">
          <span className="text-sm font-medium">Scroll</span>
          <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-down {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
        }
        .animate-slide-down {
          animation: slide-down 0.8s ease-out forwards;
        }
        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}