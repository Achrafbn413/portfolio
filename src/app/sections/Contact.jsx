"use client";

import { useState } from "react";
import SectionFade from "../components/SectionFade";

export default function Contact() {
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.target);
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/achrafbenchekroun0@gmail.com", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          subject: formData.get("subject"),
          message: formData.get("message"),
        }),
      });

      if (response.ok) {
        setStatus("success");
        e.target.reset();
        
        // Reset après 5 secondes
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error("Erreur lors de l'envoi");
      }
    } catch (error) {
      setStatus("error");
      setErrorMsg("Le service est temporairement indisponible. Envoyez-moi un email directement à achrafbenchekroun0@gmail.com");
    }
  };

  return (
    <SectionFade>
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_10px_#00eaff]">
          Me Contacter
        </h2>

        {/* Success Message */}
        {status === "success" && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
            ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
            ✗ {errorMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-[#0c1424] p-8 rounded-xl border border-cyan-500/20 shadow-[0_0_18px_#00eaff40] space-y-6"
        >
          {/* Full Name */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              required
              disabled={status === "sending"}
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition disabled:opacity-50"
              placeholder="Votre nom"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Adresse email
            </label>
            <input
              type="email"
              name="email"
              required
              disabled={status === "sending"}
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition disabled:opacity-50"
              placeholder="email@example.com"
            />
          </div>

          {/* Phone (optional) */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Téléphone (optionnel)
            </label>
            <input
              type="text"
              name="phone"
              disabled={status === "sending"}
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition disabled:opacity-50"
              placeholder="+212 6 00 00 00 00"
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Objet du message
            </label>
            <input
              type="text"
              name="subject"
              required
              disabled={status === "sending"}
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition disabled:opacity-50"
              placeholder="Ex: Demande de collaboration"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Message
            </label>
            <textarea
              name="message"
              required
              rows="6"
              disabled={status === "sending"}
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white focus:border-cyan-400 focus:outline-none transition disabled:opacity-50 resize-none"
              placeholder="Votre message..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition shadow-[0_0_12px_#00eaff] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {status === "sending" ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Envoi en cours...
              </>
            ) : (
              "Envoyer le message"
            )}
          </button>
        </form>

        {/* Alternative contact */}
        <div className="mt-8 text-center text-gray-400 text-sm">
          <p>Vous pouvez aussi me contacter directement :</p>
          <a 
            href="mailto:achrafbenchekroun0@gmail.com" 
            className="text-cyan-400 hover:text-cyan-300 transition font-medium"
          >
            achrafbenchekroun0@gmail.com
          </a>
        </div>
      </section>
    </SectionFade>
  );
}