import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const BREVO_API_KEY = Deno.env.get("BREVO_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  company: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { company, name, email, phone, message }: ContactEmailRequest = await req.json();

    console.log("Sending contact email from:", email, "Name:", name, "Company:", company);

    // Envoi de l'email à Localizz
    const emailResponse = await resend.emails.send({
      from: "Localizz <contact@localizz.fr>",
      to: ["contact@localizz.fr"],
      subject: `Nouvelle demande de contact - ${company}`,
      html: `
        <h2>Nouvelle demande de contact depuis le site Localizz</h2>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || 'Non renseigné'}</p>
        <h3>Message :</h3>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log("Email sent to team:", emailResponse);

    // Envoi de l'email de confirmation au visiteur
    const confirmationEmail = await resend.emails.send({
      from: "Localizz <contact@localizz.fr>",
      to: [email],
      subject: "Votre message a bien été envoyé - Localizz",
      html: `
        <h2>Bonjour ${name},</h2>
        <p>Nous avons bien reçu votre message.</p>
        <p>Notre équipe vous répondra dans les plus brefs délais.</p>
        <br>
        <p>À très bientôt,</p>
        <p><strong>L'équipe Localizz</strong></p>
        <p>📞 07 82 35 21 27</p>
      `,
    });

    console.log("Confirmation email sent to visitor:", confirmationEmail);

    // Ajout du contact dans Brevo
    let brevoResponse = null;
    if (BREVO_API_KEY) {
      try {
        const brevoResult = await fetch("https://api.brevo.com/v3/contacts", {
          method: "POST",
          headers: {
            "accept": "application/json",
            "content-type": "application/json",
            "api-key": BREVO_API_KEY,
          },
          body: JSON.stringify({
            email: email,
            attributes: {
              NOM: name,
              ENTREPRISE: company,
              TELEPHONE: phone || "",
            },
            updateEnabled: true, // Met à jour si le contact existe déjà
          }),
        });

        brevoResponse = await brevoResult.json();
        console.log("Contact added to Brevo:", brevoResponse);
      } catch (brevoError) {
        console.error("Erreur Brevo (non bloquante):", brevoError);
      }
    }

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Demande envoyée avec succès",
      emailId: emailResponse.data?.id,
      brevoContact: brevoResponse
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message || "Erreur lors de l'envoi de l'email" 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
