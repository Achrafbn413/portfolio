"use client";

import { useState } from "react";
import SectionFade from "../components/SectionFade";

export default function Contact() {
  const [status, setStatus] = useState("idle"); 
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.target);

    // Construction du payload MLGS
    const payload = {
      to: "achrafbenchekroun0@gmail.com",
      subject: formData.get("subject"),
      text: `
Nom complet : ${formData.get("name")}
Email : ${formData.get("email")}
Téléphone : ${formData.get("phone")}
-------------------------------
Message :
${formData.get("message")}
      `,
    };

    try {
      const response = await fetch("https://api.mlgsender.com/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Erreur");
      }

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
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400 drop-shadow-[0_0_10px_#00eaff]">
          Me Contacter
        </h2>

        {status === "success" && (
          <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300 text-center">
            ✓ Message envoyé avec succès ! Je vous répondrai bientôt.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-300 text-center">
            ✗ {errorMsg}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="bg-[#0c1424] p-8 rounded-xl border border-cyan-500/20 shadow-[0_0_18px_#00eaff40] space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Nom complet
            </label>
            <input
              type="text"
              name="name"
              required
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white"
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
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white"
              placeholder="email@example.com"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-300 mb-2 font-medium">
              Téléphone (optionnel)
            </label>
            <input
              type="text"
              name="phone"
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white"
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
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white"
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
              className="w-full p-3 bg-[#0a0f1a] border border-cyan-500/20 rounded-lg text-white resize-none"
              placeholder="Votre message..."
            ></textarea>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 text-black font-semibold rounded-lg hover:bg-cyan-400 transition"
          >
            {status === "sending" ? "Envoi en cours..." : "Envoyer le message"}
          </button>
        </form>

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
