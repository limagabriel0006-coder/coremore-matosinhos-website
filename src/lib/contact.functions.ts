import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  nome: z.string().trim().min(1, "O nome é obrigatório.").max(120),
  email: z.string().trim().email("Indica um email válido.").max(200),
  telefone: z.string().trim().max(30).optional().default(""),
  mensagem: z.string().trim().min(1, "A mensagem é obrigatória.").max(2000),
  empresa: z.string().optional().default(""),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .inputValidator((data) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // Honeypot: bots preenchem o campo invisível "empresa"; humanos não.
    if (data.empresa) {
      return { ok: true as const };
    }

    const { sendTemplateEmail } = await import("@/lib/email-templates/send-email");

    const submissionId = crypto.randomUUID();

    await sendTemplateEmail("contact-notification", "limagabriel.0006@gmail.com", {
      templateData: {
        name: data.nome,
        email: data.email,
        phone: data.telefone,
        message: data.mensagem,
      },
      idempotencyKey: `contact-notify-${submissionId}`,
      replyTo: data.email,
    });

    await sendTemplateEmail("contact-confirmation", data.email, {
      templateData: { name: data.nome },
      idempotencyKey: `contact-confirm-${submissionId}`,
    });

    return { ok: true as const };
  });
