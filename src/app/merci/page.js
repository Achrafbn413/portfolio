export default function Merci() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0f1a]">
      <div className="text-center px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 drop-shadow-[0_0_10px_#00eaff] mb-4">
          Merci pour votre message !
        </h1>

        <p className="text-gray-300 text-lg">
          Votre message a été envoyé avec succès.  
          Je vous répondrai dans les plus brefs délais.
        </p>

        <a
          href="/"
          className="
            inline-block mt-8 px-6 py-3
            bg-cyan-500 text-black font-semibold rounded-lg
            hover:bg-cyan-400 transition shadow-[0_0_12px_#00eaff]
          "
        >
          Retour à l'accueil
        </a>
      </div>
    </div>
  );
}
