import { NextResponse } from "next/server";
import { leadFormSchema, flattenLeadFormErrors } from "@/lib/leadSchema";

export const runtime = "nodejs";

/**
 * Przyjmuje zgłoszenie z `BookingForm`, waliduje je autorytatywnie i —
 * jeśli skonfigurowano `LESSON_REQUEST_WEBHOOK_URL` — przekazuje je dalej
 * jako webhook (Make.com, Zapier, n8n, Slack, własny endpoint…).
 *
 * Bez skonfigurowanego webhooka zgłoszenie trafia wyłącznie do logów serwera
 * — celowo nie udajemy integracji, której nie ma (patrz `.env.example`).
 */
export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ success: false, error: "invalid_json" }, { status: 400 });
  }

  const result = leadFormSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { success: false, errors: flattenLeadFormErrors(result.error) },
      { status: 422 },
    );
  }

  const lead = { ...result.data, receivedAt: new Date().toISOString() };
  const webhookUrl = process.env.LESSON_REQUEST_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(lead),
      });

      if (!response.ok) {
        console.error(
          `[lesson-request] webhook odpowiedział statusem ${response.status}. Zgłoszenie:`,
          lead,
        );
        return NextResponse.json({ success: false, error: "webhook_failed" }, { status: 502 });
      }
    } catch (error) {
      console.error("[lesson-request] nie udało się wysłać webhooka. Zgłoszenie:", lead, error);
      return NextResponse.json({ success: false, error: "webhook_failed" }, { status: 502 });
    }
  } else {
    console.warn(
      "[lesson-request] LESSON_REQUEST_WEBHOOK_URL nie jest ustawiony — zgłoszenie NIE zostało nigdzie przekazane, tylko zalogowane:",
      lead,
    );
  }

  return NextResponse.json({ success: true });
}
