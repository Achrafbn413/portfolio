"use client";

import { useState } from "react";

// Composant SectionFade simulé
const SectionFade = ({ children }) => (
  <div className="animate-fade-in">{children}</div>
);

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.target);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error("Erreur");

      setStatus("success");
      e.target.reset();
      setTimeout(() => setStatus("idle"), 5000);

    } catch (err) {
      setStatus("error");
      setErrorMsg(
        "Impossible d'envoyer le message. Contactez-moi directement : achrafbenchekroun0@gmail.com"
      );
    }
  };

  return (
    <SectionFade>
      <section className="py-20 px-6 max-w-5xl mx-auto relative">
        
        <div className="relative z-10">
          {/* Header avec animation */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00eaff80]">
              Me Contacter
            </h2>
            <p className="text-gray-400 text-lg">
              Une question ? Un projet ? Envoyez-moi un message
            </p>
          </div>

          {/* Success Message avec animation */}
          {status === "success" && (
            <div className="mb-8 p-5 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/50 rounded-2xl text-green-300 text-center backdrop-blur-sm shadow-lg shadow-green-500/20 animate-fade-in">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="font-medium">Message envoyé avec succès ! Je vous répondrai bientôt.</span>
              </div>
            </div>
          )}

          {/* Error Message */}
          {status === "error" && (
            <div className="mb-8 p-5 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-400/50 rounded-2xl text-red-300 text-center backdrop-blur-sm shadow-lg shadow-red-500/20 animate-fade-in">
              <div className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                <span className="font-medium">{errorMsg}</span>
              </div>
            </div>
          )}

          {/* Form avec glassmorphism */}
          <form
            onSubmit={handleSubmit}
            className="bg-gradient-to-br from-[#0c1424]/80 to-[#0a0f1a]/80 backdrop-blur-xl p-10 rounded-3xl border border-cyan-500/30 shadow-[0_0_40px_#00eaff20,inset_0_0_20px_#00eaff10] space-y-7 hover:shadow-[0_0_60px_#00eaff30,inset_0_0_30px_#00eaff15] transition-all duration-500"
          >
            <div className="grid md:grid-cols-2 gap-7">
              {/* Name */}
              <div className="group">
                <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Nom complet
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full p-4 bg-[#0a0f1a]/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 group-hover:border-cyan-500/50"
                  placeholder="Votre nom"
                />
              </div>

              {/* Email */}
              <div className="group">
                <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Adresse email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full p-4 bg-[#0a0f1a]/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 group-hover:border-cyan-500/50"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-7">
              {/* Phone */}
              <div className="group">
                <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Téléphone
                  <span className="text-gray-500 text-sm">(optionnel)</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  className="w-full p-4 bg-[#0a0f1a]/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 group-hover:border-cyan-500/50"
                  placeholder="+212 6 00 00 00 00"
                />
              </div>

              {/* Subject */}
              <div className="group">
                <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                  </svg>
                  Objet du message
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  className="w-full p-4 bg-[#0a0f1a]/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 group-hover:border-cyan-500/50"
                  placeholder="Ex: Demande de collaboration"
                />
              </div>
            </div>

            {/* Message */}
            <div className="group">
              <label className="block text-gray-300 mb-3 font-medium flex items-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Message
              </label>
              <textarea
                name="message"
                required
                rows="6"
                className="w-full p-4 bg-[#0a0f1a]/50 border border-cyan-500/30 rounded-xl text-white placeholder-gray-500 resize-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:outline-none transition-all duration-300 group-hover:border-cyan-500/50"
                placeholder="Votre message..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 shadow-[0_0_20px_#00eaff40] hover:shadow-[0_0_30px_#00eaff60] disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Envoyer le message
                </>
              )}
            </button>
          </form>

          {/* Contact Direct */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-[#0c1424]/60 to-[#0a0f1a]/60 backdrop-blur-lg px-8 py-6 rounded-2xl border border-cyan-500/20 shadow-lg">
              <p className="text-gray-400 mb-3 flex items-center justify-center gap-2">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Vous pouvez aussi me contacter directement
              </p>
              <a
                href="mailto:achrafbenchekroun0@gmail.com"
                className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 font-medium text-lg inline-flex items-center gap-2 hover:gap-3 group"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                achrafbenchekroun0@gmail.com
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </SectionFade>
  );
}