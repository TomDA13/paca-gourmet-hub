
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

    // Envoyer l'email à contact@localizz.fr
    const emailResponse = await resend.emails.send({
      from: "Localizz Pro <noreply@localizz.fr>",
      to: ["contact@localizz.fr"],
      subject: `Nouvelle demande de contact - ${company}`,
      html: `
        <h2>Nouvelle demande de contact</h2>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Nom & Prénom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        ${phone ? `<p><strong>Téléphone :</strong> ${phone}</p>` : ''}
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        
        <hr>
        <p><em>Ce message a été envoyé depuis le formulaire de contact du site professionnel Localizz.</em></p>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    // Envoyer un email de confirmation au client
    const confirmationResponse = await resend.emails.send({
      from: "Localizz Pro <noreply@localizz.fr>",
      to: [email],
      subject: "Confirmation de réception de votre demande - Localizz",
      html: `
        <h2>Merci pour votre message, ${name} !</h2>
        <p>Nous avons bien reçu votre demande de contact concernant <strong>${company}</strong>.</p>
        
        <p>Notre équipe vous répondra dans les plus brefs délais, généralement sous 24h.</p>
        
        <p>En attendant, n'hésitez pas à découvrir notre gamme de produits locaux sur notre site boutique.</p>
        
        <p>Cordialement,<br>
        L'équipe Localizz</p>
        
        <hr>
        <p><em>Ceci est un message automatique, merci de ne pas y répondre.</em></p>
      `,
    });

    console.log("Confirmation email sent:", confirmationResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Emails envoyés avec succès",
      emailId: emailResponse.data?.id 
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
