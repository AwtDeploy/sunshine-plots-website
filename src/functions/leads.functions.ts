import { createServerFn } from "@tanstack/react-start";

import { enquiryFormSchema, type EnquiryFormInput } from "@/lib/enquiry-schema";
import { insertLead } from "@/lib/mongodb";
import { sendLeadNotification } from "@/lib/mail";

export const submitEnquiry = createServerFn({ method: "POST" })
  .inputValidator((data: EnquiryFormInput) => enquiryFormSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.website?.trim()) {
      return { ok: true as const };
    }

    const email = data.email?.trim() || undefined;
    const lead = {
      name: data.name.trim(),
      phone: data.phone.trim(),
      email,
      budget: data.budget?.trim() || undefined,
      message: data.message?.trim() || undefined,
      source: data.source,
    };

    await insertLead(lead);

    try {
      await sendLeadNotification(lead);
    } catch (emailError) {
      console.error("Lead saved but email failed:", emailError);
    }

    return { ok: true as const };
  });
