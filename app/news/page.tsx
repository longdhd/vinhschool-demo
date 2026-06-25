import Link from "next/link";
import { announcements, announcementTypes } from "../data/news";

export default function News() {
  return (
    <div className="min-h-full">
      <section className="bg-cyan-950 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-800 bg-cyan-900/95 p-12 shadow-[0_40px_80px_rgba(0,0,0,0.28)]">
          <h1 className="mb-4 text-4xl font-bold">Tin Tức & Thông Báo</h1>
          <p className="text-xl text-cyan-200">
            Cập nhật về lớp học, thay đổi lịch, và tin vui từ học viên.
          </p>
        </div>
      </section>

      <section className="bg-stone-100 px-4 py-16">
        <div className="mx-auto max-w-4xl space-y-6">
          {announcements.map((announcement) => (
            <div
              key={`${announcement.date}-${announcement.title}`}
              className="rounded-[2rem] border border-slate-800 bg-white/95 p-6 shadow transition hover:shadow-lg"
            >
              <div className="mb-3 flex flex-col items-start justify-between gap-4 sm:flex-row">
                <div className="flex-1">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-sm font-semibold text-zinc-900">
                      {announcement.date}
                    </span>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        announcement.category === "Status"
                          ? "bg-[#1dd2d0]/10 text-[#1dd2d0]"
                          : "bg-green-500/10 text-green-700"
                      }`}
                    >
                      {announcement.category === "Status"
                        ? "Thông Báo"
                        : "Tin Vui"}
                    </span>
                  </div>
                  <h3 className="mb-3 text-xl font-semibold text-slate-900">
                    {announcement.title}
                  </h3>
                </div>
              </div>
              <p className="leading-relaxed text-slate-700">
                {announcement.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">
            Bạn Sẽ Thấy Những Thông Báo Nào?
          </h2>
          <div className="grid gap-8 md:grid-cols-2">
            {announcementTypes.map((type) => (
              <div
                key={type.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow"
              >
                <h3 className="mb-3 text-lg font-bold text-cyan-700">
                  {type.title}
                </h3>
                <p className="text-slate-700">{type.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Hãy Thường Xuyên Kiểm Tra Website
          </h2>
          <p className="mb-4 text-slate-700">
            Học viên hiện tại và học viên mới hãy kiểm tra website để cập nhật
            thông tin quan trọng.
          </p>
          <p className="font-semibold text-slate-700">
            Bookmark trang này để dễ dàng truy cập!
          </p>
        </div>
      </section>

      <section className="bg-slate-50 px-4 py-16">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-12 text-center shadow-xl">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">
            Quay Lại Trang Chủ
          </h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-8 py-3 text-base font-bold text-white transition hover:bg-cyan-600"
            >
              Trang Chủ
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-white px-8 py-3 text-base font-bold text-slate-900 transition hover:bg-slate-100"
            >
              Đăng Ký Ngay
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
