import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message, subject, phone } = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Champs manquants" }),
        { status: 400 }
      );
    }

    // Transporteur SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // email Gmail
        pass: process.env.MAIL_PASS, // mot de passe d'application Gmail
      },
    });

    const mailOptions = {
      from: process.env.MAIL_USER,
      to: process.env.MAIL_USER,
      subject: `Portfolio - Nouveau message : ${subject || "Sans objet"}`,
      text: `
Nom : ${name}
Email : ${email}
Téléphone : ${phone || "Non renseigné"}

Message :
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background-color:#f4f7fa;">
          <div style="max-width:600px; margin:auto; background:white; border-radius:8px; padding:20px; border:1px solid #e1e4e8;">
            <h2 style="color:#0ea5e9; text-align:center; margin-bottom:20px;">
              📩 Nouveau message depuis votre Portfolio
            </h2>

            <div style="font-size:16px; color:#333; line-height:1.6;">
              <p><strong>👤 Nom :</strong> ${name}</p>
              <p><strong>📧 Email :</strong> ${email}</p>
              <p><strong>📱 Téléphone :</strong> ${phone || "Non renseigné"}</p>
              <p><strong>📌 Sujet :</strong> ${subject || "Sans objet"}</p>

              <hr style="margin:25px 0; border:0; border-top:1px solid #ddd;" />

              <p style="font-size:15px; color:#444;"><strong>💬 Message :</strong></p>
              <p style="white-space:pre-line; padding:12px; background:#f0f8ff; border-radius:6px; border:1px solid #d3eafd;">
                ${message}
              </p>
            </div>

            <p style="text-align:center; margin-top:30px; color:#777; font-size:12px;">
              Message envoyé depuis votre site portfolio.<br/>
              © ${new Date().getFullYear()}
            </p>
          </div>
        </div>
      `
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
