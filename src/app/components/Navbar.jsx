"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/60 backdrop-blur-sm border-b border-cyan-500/20 shadow-lg">
      <div className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* Logo */}
        <a href="#hero" className="select-none">
          <h1 className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition">
            Développeur Full Stack
          </h1>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center gap-6 text-gray-300 text-sm">
          <li className="hover:text-cyan-400 transition">
            <a href="#about">À propos</a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#projects">Projets</a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#skills">Skills</a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#certif">Certifs</a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* Menu Mobile - Burger Icon */}
        <button
          className="md:hidden text-cyan-400 hover:text-cyan-300 transition"
          aria-label="Menu"
          onClick={() => {
            const menu = document.getElementById('mobile-menu');
            menu?.classList.toggle('hidden');
          }}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

      </div>

      {/* Menu Mobile Dropdown */}
      <div id="mobile-menu" className="hidden md:hidden bg-black/90 border-t border-cyan-500/20">
        <ul className="flex flex-col py-4 px-6 gap-4 text-gray-300 text-sm">
          <li className="hover:text-cyan-400 transition">
            <a href="#about" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>
              À propos
            </a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#projects" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>
              Projets
            </a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#skills" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>
              Skills
            </a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#certif" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>
              Certifs
            </a>
          </li>
          <li className="hover:text-cyan-400 transition">
            <a href="#contact" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}