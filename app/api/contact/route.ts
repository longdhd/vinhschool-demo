import { NextResponse, type NextRequest } from "next/server";

export const runtime = "nodejs";

const COURSE_TYPES = new Set(["in-person", "zoom", "both", "not-sure"]);
const PREFERRED_TIMES = new Set(["morning", "evening", "flexible"]);
const MAX_MESSAGE_LENGTH = 1200;
const MAX_NAME_LENGTH = 80;
const MAX_PHONE_LENGTH = 32;
const MIN_SUBMIT_MS = 2500;
const WINDOW_MS = 60 * 60 * 1000;
const MAX_SUBMISSIONS_PER_WINDOW = 5;

type RateBucket = {
  count: number;
  resetAt: number;
};

type ContactPayload = {
  name?: unknown;
  phone?: unknown;
  courseType?: unknown;
  preferredTime?: unknown;
  message?: unknown;
  website?: unknown;
  startedAt?: unknown;
};

const rateBuckets = new Map<string, RateBucket>();

function getClientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || "unknown";
}

function isRateLimited(ip: string) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);

  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > MAX_SUBMISSIONS_PER_WINDOW;
}

function cleanText(value: unknown, maxLength: number) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    .replace(/\r\n/g, "\n")
    .trim()
    .slice(0, maxLength);
}

function cleanHeaderText(value: unknown, maxLength: number) {
  return cleanText(value, maxLength).replace(/[\r\n]/g, " ");
}

function validatePayload(payload: ContactPayload) {
  const name = cleanHeaderText(payload.name, MAX_NAME_LENGTH);
  const phone = cleanHeaderText(payload.phone, MAX_PHONE_LENGTH);
  const courseType = cleanHeaderText(payload.courseType, 24);
  const preferredTime = cleanHeaderText(payload.preferredTime, 24);
  const message = cleanText(payload.message, MAX_MESSAGE_LENGTH);
  const startedAt = Number(payload.startedAt);

  if (cleanText(payload.website, 200)) {
    return { ok: true as const, spam: true as const };
  }

  if (!Number.isFinite(startedAt) || Date.now() - startedAt < MIN_SUBMIT_MS) {
    return { ok: true as const, spam: true as const };
  }

  if (!name || !phone) {
    return { ok: false as const, error: "Vui lòng nhập tên và số điện thoại." };
  }

  if (!COURSE_TYPES.has(courseType) || !PREFERRED_TIMES.has(preferredTime)) {
    return { ok: false as const, error: "Thông tin lớp học không hợp lệ." };
  }

  return {
    ok: true as const,
    spam: false as const,
    data: {
      name,
      phone,
      courseType,
      preferredTime,
      message,
    },
  };
}

async function sendEmail(data: {
  name: string;
  phone: string;
  courseType: string;
  preferredTime: string;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "VinhSchool <onboarding@resend.dev>";

  if (!apiKey || !to) {
    throw new Error("Email is not configured.");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to,
      subject: `VinhSchool contact: ${data.name}`,
      text: [
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        `Course type: ${data.courseType}`,
        `Preferred time: ${data.preferredTime}`,
        "",
        "Message:",
        data.message || "(No message)",
      ].join("\n"),
    }),
  });

  if (!response.ok) {
    throw new Error("Email delivery failed.");
  }
}

export async function POST(request: NextRequest) {
  const contentLength = Number(request.headers.get("content-length") || 0);

  if (contentLength > 8_000) {
    return NextResponse.json(
      { error: "Nội dung gửi quá dài." },
      { status: 413 },
    );
  }

  const ip = getClientIp(request);
  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Bạn đã gửi quá nhiều lần. Vui lòng thử lại sau." },
      { status: 429 },
    );
  }

  let payload: ContactPayload;

  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json(
      { error: "Nội dung gửi không hợp lệ." },
      { status: 400 },
    );
  }

  const validation = validatePayload(payload);

  if (!validation.ok) {
    return NextResponse.json({ error: validation.error }, { status: 400 });
  }

  if (validation.spam) {
    return NextResponse.json({ ok: true });
  }

  try {
    await sendEmail(validation.data);
  } catch {
    return NextResponse.json(
      { error: "Chưa thể gửi email. Vui lòng thử lại sau." },
      { status: 503 },
    );
  }

  return NextResponse.json({ ok: true });
}
