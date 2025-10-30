import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

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

    // TODO: Implement email sending with Resend
    // For now, just log and return success
    console.log("Email data:", { company, name, email, phone, message });

    return new Response(JSON.stringify({ 
      success: true, 
      message: "Demande enregistrée avec succès"
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
