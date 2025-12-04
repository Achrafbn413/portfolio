"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
        className="relative flex flex-col items-center justify-start text-center px-4 pt-28 pb-20"
      >
        {/* Glow */}
        <div className="absolute top-16 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

        {/* Photo */}
        <div className="opacity-0">
          <Image
            src="/profile.jpg"
            width={160}
            height={160}
            alt="Photo de profil"
            className="relative w-40 h-40 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] mb-6"
            priority
          />
        </div>

        {/* Titre */}
        <h1 className="opacity-0 text-4xl md:text-5xl font-bold text-cyan-300 drop-shadow-[0_0_14px_#22d3ee]">
          Mohamed Achraf Benchekroun
        </h1>

        {/* Sous-titre */}
        <p className="opacity-0 mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
          Ingénieur Informatique & Réseaux — Développeur Full Stack
        </p>

        {/* Boutons */}
        <div className="opacity-0 mt-10 flex flex-wrap gap-4 justify-center">
          <a
            href="/cv.pdf"
            download
            className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition shadow-lg"
          >
            Télécharger CV
          </a>

          <a
            href="#contact"
            className="px-6 py-3 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition shadow-lg"
          >
            Me Contacter
          </a>
        </div>
      </section>
    );
  }

  // Une fois monté, afficher avec animations
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-start text-center px-4 pt-28 pb-20"
    >
      {/* Glow */}
      <div className="absolute top-16 w-60 h-60 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none" />

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src="/profile.jpg"
          width={160}
          height={160}
          alt="Photo de profil"
          className="relative w-40 h-40 rounded-full object-cover border-2 border-cyan-400 shadow-[0_0_40px_rgba(34,211,238,0.6)] mb-6"
          priority
        />
      </motion.div>

      {/* Titre */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-cyan-300 drop-shadow-[0_0_14px_#22d3ee]"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        Mohamed Achraf Benchekroun
      </motion.h1>

      {/* Sous-titre */}
      <motion.p
        className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Ingénieur Informatique & Réseaux — Développeur Full Stack
      </motion.p>

      {/* Boutons */}
      <motion.div
        className="mt-10 flex flex-wrap gap-4 justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <a
          href="/cv.pdf"
          download
          className="px-6 py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition shadow-lg"
        >
          Télécharger CV
        </a>

        <a
          href="#contact"
          className="px-6 py-3 border border-cyan-400 text-cyan-300 rounded-lg hover:bg-cyan-400 hover:text-black transition shadow-lg"
        >
          Me Contacter
        </a>
      </motion.div>
    </section>
  );
}