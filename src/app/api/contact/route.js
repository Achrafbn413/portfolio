import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Champs manquants" }),
        { status: 400 }
      );
    }

    // Transporteur SMTP Gmail (MLGS = ton Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // ton email MLGS
        pass: process.env.MAIL_PASS, // mot de passe application
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Portfolio - Nouveau message : ${subject || "Sans objet"}`,
      text: `
Nom : ${name}
Email : ${email}
Message :
${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur API :", error);
    return new Response(
      JSON.stringify({ error: "Erreur serveur" }),
      { status: 500 }
    );
  }
}
