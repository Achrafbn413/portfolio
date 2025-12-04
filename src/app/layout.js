import "./tailwind.css";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio — Mohamed Achraf Benchekroun",
  description: "Ingénieur Informatique & Réseaux — Développeur Full Stack",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`
          relative 
          overflow-x-hidden 
          text-gray-200 
          antialiased
          ${inter.className}
        `}
        style={{
          backgroundImage: "url('/bg-tech.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
        }}
      >
        {/* GRID OVERLAY */}
        <div
          className="fixed inset-0 pointer-events-none z-0 opacity-20"
          style={{
            backgroundImage: "url('/grid.svg')",
            backgroundRepeat: "repeat",
          }}
        ></div>

        {/* NAVBAR + CONTENT ABOVE GRID */}
        <div className="relative z-10">
          <Navbar />
          <main className="pt-24">{children}</main>
        </div>
      </body>
    </html>
  );
}
