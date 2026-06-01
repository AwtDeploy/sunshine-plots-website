import nodemailer from "nodemailer";

import type { LeadDocument } from "./enquiry-schema";
import { getSmtpConfig } from "./env";

function formatLeadBody(lead: Omit<LeadDocument, "status" | "createdAt">): {
  text: string;
  html: string;
} {
  const lines = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "—"],
    ["Budget", lead.budget || "—"],
    ["Message", lead.message || "—"],
    ["Source", lead.source],
  ];

  const text = lines.map(([k, v]) => `${k}: ${v}`).join("\n");
  const html = `
    <h2>New site visit enquiry</h2>
    <table style="border-collapse:collapse;font-family:sans-serif">
      ${lines
        .map(
          ([k, v]) =>
            `<tr><td style="padding:6px 12px 6px 0;font-weight:600">${k}</td><td style="padding:6px 0">${String(v).replace(/</g, "&lt;")}</td></tr>`,
        )
        .join("")}
    </table>
  `;

  return { text, html };
}

export async function sendLeadNotification(
  lead: Omit<LeadDocument, "status" | "createdAt">,
): Promise<void> {
  const smtp = getSmtpConfig();
  const { text, html } = formatLeadBody(lead);

  const transporter = nodemailer.createTransport({
    host: smtp.host,
    port: smtp.port,
    secure: smtp.port === 465,
    auth: {
      user: smtp.user,
      pass: smtp.pass,
    },
  });

  await transporter.sendMail({
    from: smtp.from,
    to: smtp.notifyTo,
    subject: `New enquiry: ${lead.name} — Sunshine Plots`,
    text,
    html,
  });
}
