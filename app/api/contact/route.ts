import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const resendApiKey = process.env.RESEND_API_KEY;
        if (!resendApiKey) {
            return NextResponse.json(
                { error: "Service email non configure." },
                { status: 500 }
            );
        }

        const resend = new Resend(resendApiKey);
        const body = await req.json();
        const { name, email, message } = body;

        console.log("Données reçues:", { name, email, message });

        if (!name || !email || !message) {
            console.error("Champs manquants:", { name: !!name, email: !!email, message: !!message });
            return NextResponse.json(
                { error: "Tous les champs sont obligatoires." },
                { status: 400 }
            );
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: "Adresse email invalide." },
                { status: 400 }
            );
        }

        console.log("Envoi email avec Resend...");
        console.log("RESEND_API_KEY configurée:", !!process.env.RESEND_API_KEY);
        console.log("CONTACT_TO_EMAIL:", process.env.CONTACT_TO_EMAIL);

        await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: process.env.CONTACT_TO_EMAIL || "tonadresse@gmail.com",
            subject: `Nouveau message de ${name}`,
            replyTo: email,
            text: `
Nom : ${name}
Email : ${email}

Message :
${message}
      `,
            html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${escapeHtml(name)}</p>
        <p><strong>Email :</strong> ${escapeHtml(email)}</p>
        <p><strong>Message :</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
        });

        console.log("Email envoyé avec succès!");
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Erreur envoi email :", error);
        return NextResponse.json(
            { error: "Erreur lors de l'envoi du message. Vérifiez les logs serveur." },
            { status: 500 }
        );
    }
}

function escapeHtml(str: string) {
    return str
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}
