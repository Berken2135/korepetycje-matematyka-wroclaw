import { z } from "zod";
import { weekdaySlugs, timeSlotSlugs } from "@/content/availability";
import { availableLessonFormats, lessonFormatSlugs } from "@/content/formats";
import { studentLevelSlugs } from "@/content/levels";

/**
 * Jedno źródło prawdy dla walidacji zgłoszenia — używane zarówno w
 * `BookingForm` (walidacja po stronie klienta, natychmiastowy feedback) jak
 * i w `POST /api/lesson-request` (walidacja autorytatywna, po stronie serwera).
 */

const availableFormatSlugs = availableLessonFormats.map((format) => format.slug);

const phoneDigitsPattern = /\d/g;

export const leadFormSchema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().min(1).email().max(254),
  phone: z
    .string()
    .trim()
    .max(30)
    .optional()
    .or(z.literal(""))
    .refine((value) => !value || (value.match(phoneDigitsPattern)?.length ?? 0) >= 9),
  level: z.enum(studentLevelSlugs),
  format: z
    .enum(lessonFormatSlugs)
    .refine((value) => (availableFormatSlugs as readonly string[]).includes(value)),
  days: z.array(z.enum(weekdaySlugs)).min(1),
  time: z.enum(timeSlotSlugs),
  message: z.string().trim().max(1500).optional().or(z.literal("")),
  consent: z.literal(true),
});

export type LeadFormValues = z.infer<typeof leadFormSchema>;

/** Klucz błędu na pole — mapowany wprost na `dict.form.errors.*`. */
export type LeadFormErrorKey =
  | "name"
  | "nameTooLong"
  | "email"
  | "phone"
  | "level"
  | "format"
  | "formatUnavailable"
  | "days"
  | "time"
  | "messageTooLong"
  | "consent";

export type LeadFormFieldErrors = Partial<Record<keyof LeadFormValues, LeadFormErrorKey>>;

/** Mapuje błąd zoda na klucz `dict.form.errors.*` właściwy dla danego pola. */
function errorKeyFor(field: keyof LeadFormValues, issue: z.ZodIssue): LeadFormErrorKey {
  if (field === "name" && issue.code === "too_big") return "nameTooLong";
  if (field === "message" && issue.code === "too_big") return "messageTooLong";
  if (field === "format" && issue.code === "custom") return "formatUnavailable";
  return field as LeadFormErrorKey;
}

export function flattenLeadFormErrors(error: z.ZodError<LeadFormValues>): LeadFormFieldErrors {
  const errors: LeadFormFieldErrors = {};
  for (const issue of error.issues) {
    const field = issue.path[0] as keyof LeadFormValues | undefined;
    if (!field || errors[field]) continue;
    errors[field] = errorKeyFor(field, issue);
  }
  return errors;
}
