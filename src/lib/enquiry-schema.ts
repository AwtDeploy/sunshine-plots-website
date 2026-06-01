import { z } from "zod";

export const enquiryFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z
    .string()
    .optional()
    .refine((val) => !val || z.string().email().safeParse(val).success, {
      message: "Invalid email",
    }),
  budget: z.string().optional(),
  message: z.string().optional(),
  source: z.string().default("contact_page"),
  /** Honeypot — must stay empty */
  website: z.string().optional(),
});

export type EnquiryFormInput = z.infer<typeof enquiryFormSchema>;

export type LeadDocument = {
  name: string;
  phone: string;
  email?: string;
  budget?: string;
  message?: string;
  source: string;
  status: "new";
  createdAt: Date;
};
