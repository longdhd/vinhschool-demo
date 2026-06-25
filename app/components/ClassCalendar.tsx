import { scheduleItems } from "../data/classes";

const calendarEmbedUrl = process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL;
const calendarIcsUrl = process.env.GOOGLE_CALENDAR_ICS_URL;

function getCalendarTimeZone(embedUrl: string) {
  try {
    const url = new URL(embedUrl);
    return url.searchParams.get("ctz") || "America/Los_Angeles";
  } catch {
    return "America/Los_Angeles";
  }
}

function parseGoogleCalendarDate(value: string) {
  const match = value.match(
    /^(\d{4})(\d{2})(\d{2})T(\d{2})(\d{2})(\d{2})Z$/,
  );

  if (!match) return null;

  const [, year, month, day, hour, minute, second] = match;
  return new Date(
    Date.UTC(
      Number(year),
      Number(month) - 1,
      Number(day),
      Number(hour),
      Number(minute),
      Number(second),
    ),
  );
}

function getLatestCalendarDate(ics: string): Date | null {
  const unfolded = ics.replace(/\r?\n[ \t]/g, "");

  const dates = [...unfolded.matchAll(/LAST-MODIFIED:(\d{8}T\d{6}Z)/g)]
    .map(([, value]) => parseGoogleCalendarDate(value))
    .filter((date): date is Date => date !== null);

  if (dates.length === 0) return null;

  return new Date(Math.max(...dates.map((date) => date.getTime())));
}

async function getLastUpdated() {
  if (!calendarIcsUrl) return null;

  try {
    const response = await fetch(calendarIcsUrl, {
      next: { revalidate: 300 },
    });

    if (!response.ok) return null;

    return getLatestCalendarDate(await response.text());
  } catch {
    return null;
  }
}

function formatLastUpdated(date: Date, timeZone: string) {
  return new Intl.DateTimeFormat("vi-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone,
  }).format(date);
}

function getUpdateText(lastUpdated: Date | null, timeZone: string) {
  if (lastUpdated) {
    return `Cập nhật lần cuối: ${formatLastUpdated(lastUpdated, timeZone)}`;
  }

  if (calendarEmbedUrl) {
    return "Cập nhật lần cuối: chưa có dữ liệu từ Google Calendar";
  }

  return "Cập nhật lần cuối: sẽ hiển thị sau khi kết nối Google Calendar";
}

export default async function ClassCalendar() {
  const lastUpdated = await getLastUpdated();
  const timeZone = calendarEmbedUrl
    ? getCalendarTimeZone(calendarEmbedUrl)
    : "America/Los_Angeles";

  return (
    <section className="bg-slate-50 px-4 py-16 sm:px-6">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl sm:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Lịch Lớp Học
          </h2>
          <p className="mt-3 text-base font-semibold text-slate-500">
            {getUpdateText(lastUpdated, timeZone)}
          </p>
        </div>

        {calendarEmbedUrl ? (
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50">
            <iframe
              src={calendarEmbedUrl}
              title="Lịch lớp học VinhSchool"
              className="h-155 w-full"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2">
            {scheduleItems.map(([day, time]) => (
              <div
                key={day}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <p className="text-2xl font-semibold text-cyan-700">{day}</p>
                <p className="mt-2 text-xl text-slate-700">{time}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
