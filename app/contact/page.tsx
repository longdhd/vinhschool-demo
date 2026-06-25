"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    courseType: "in-person",
    preferredTime: "evening",
    message: "",
    website: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [startedAt, setStartedAt] = useState(() => Date.now());

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitted(false);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          startedAt,
        }),
      });
      const result = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(result.error || "Chưa thể gửi. Vui lòng thử lại sau.");
        return;
      }

      setFormData({
        name: "",
        phone: "",
        courseType: "in-person",
        preferredTime: "evening",
        message: "",
        website: "",
      });
      setStartedAt(Date.now());
      setSubmitted(true);
    } catch {
      setError("Chưa thể gửi. Vui lòng kiểm tra kết nối và thử lại.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-full">
      <section className="bg-cyan-950 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-cyan-800 bg-cyan-900/95 p-10 shadow-xl">
          <h1 className="text-4xl font-bold mb-4">Liên Hệ & Đăng Ký</h1>
          <p className="text-xl text-cyan-200">Sẵn sàng bắt đầu hành trình thi đậu quốc tịch?</p>
        </div>
      </section>

      <section className="py-12 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto rounded-[2rem]">
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl bg-stone-100/95 p-6 border border-slate-800">
              <p className="text-lg uppercase tracking-[0.18em] text-zinc-900">Địa điểm</p>
              <p className="mt-3 text-xl">Garden Grove, CA</p>
            </div>
            <div className="rounded-3xl bg-stone-100/95 p-6 border border-slate-800">
              <p className="text-lg uppercase tracking-[0.18em] text-zinc-900">Zoom</p>
              <p className="mt-3 text-xl">Meeting ID: 350 311 0626</p>
            </div>
            <div className="rounded-3xl bg-stone-100/95 p-6 border border-slate-800">
              <p className="text-lg uppercase tracking-[0.18em] text-zinc-900">Giờ học</p>
              <p className="mt-3 text-xl">Thứ 2 & Thứ 4, Thứ 7 & Chủ Nhật</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50 ">
        <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl text-slate-900 font-semibold mb-8">Thông Tin Liên Hệ</h2>
            <div className="space-y-8">
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">📍 Địa Chỉ</h3>
                <p className="text-slate-700">9042 Garden Grove Blvd #230<br />Garden Grove, CA 92844</p>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">💻 Zoom Meeting</h3>
                <p className="text-slate-700 mb-2">Meeting ID: 350 311 0626</p>
                <a
                  href="https://us06web.zoom.us/j/3503110626"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 font-semibold hover:underline"
                >
                  Tham gia Zoom →
                </a>
              </div>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg text-slate-900 font-semibold mb-2">🕐 Giờ Học</h3>
                <p className="text-slate-700">Thứ 2, Thứ 4: 6:30 PM - 8:30 PM<br />Thứ 7, Chủ Nhật: 10:00 AM - 12:00 PM</p>
              </div>
              <div className="rounded-[2rem] border border-cyan-200 bg-cyan-50/80 p-6">
                <h3 className="text-lg font-semibold mb-3 text-cyan-900">📌 Học Viên Mới</h3>
                <p className="text-slate-700">Vui lòng đến trước giờ học ít nhất 15 phút hoặc sau khi lớp kết thúc.</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl text-slate-900 font-semibold mb-8">Đăng Ký & Hỏi Thêm</h2>
            {submitted && (
              <div className="rounded-[2rem] border border-green-600/20 bg-[#0d211f]/95 text-green-200 p-4 mb-6">
                <p className="font-semibold">✓ Cảm ơn bạn!</p>
                <p>Chúng tôi sẽ liên hệ bạn trong thời gian sớm nhất.</p>
              </div>
            )}
            {error && (
              <div className="rounded-[2rem] border border-red-600/20 bg-red-50 p-4 mb-6 text-red-800">
                <p className="font-semibold">{error}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="hidden" aria-hidden="true">
                <label>
                  Website
                  <input
                    type="text"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </label>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2 ">Tên Của Bạn *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-3xl border border-slate-700 text-slate-800 focus:border-[#1dd2d0] focus:outline-none"
                  placeholder="Nhập tên của bạn"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2 ">Số Điện Thoại *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-3xl border border-slate-700 text-slate-800 focus:border-[#1dd2d0] focus:outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2 ">Phương Thức Học *</label>
                <select
                  name="courseType"
                  value={formData.courseType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-3xl border border-slate-700 text-slate-800 focus:border-[#1dd2d0] focus:outline-none"
                >
                  <option value="in-person">Học Trực Tiếp</option>
                  <option value="zoom">Học Qua Zoom</option>
                  <option value="both">Cả Hai</option>
                  <option value="not-sure">Chưa Quyết Định</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2 ">Thời Gian Ưa Thích *</label>
                <select
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-3xl border border-slate-700 text-slate-800 focus:border-[#1dd2d0] focus:outline-none"
                >
                  <option value="morning">Sáng (10 AM - 12 PM)</option>
                  <option value="evening">Tối (6:30 PM - 8:30 PM)</option>
                  <option value="flexible">Tùy Thuộc</option>
                </select>
              </div>
              <div>
                <label className="block text-lg font-semibold mb-2 ">Câu Hỏi Hoặc Ghi Chú</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-3xl border border-slate-700 text-slate-800 focus:border-[#1dd2d0] focus:outline-none"
                  placeholder="Bạn muốn nói gì với Vinh?"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-3xl bg-[#1dd2d0] py-4 text-lg font-bold text-slate-950 transition hover:bg-[#16b4ae] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Đang gửi..." : "Gửi Đơn Đăng Ký"}
              </button>
            </form>
            <p className="text-sm text-zinc-900 mt-4 text-center">*Bắt buộc điền</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-slate-800 bg-white/95 p-10 shadow-xl">
          <h2 className="text-3xl font-semibold mb-12 text-center">Điều Bạn Cần Biết</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-800 bg-stone-100/95 p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#1dd2d0]">📌 Quy Trình Đăng Ký</h3>
              <p className="text-slate-800">Gửi thông tin, chọn lớp và VinhSchool sẽ xác nhận lại với bạn.</p>
            </div>
            <div className="rounded-[2rem] border border-slate-800 bg-stone-100/95 p-6">
              <h3 className="text-xl font-semibold mb-3 text-[#1dd2d0]">💡 Hỏi Thêm</h3>
              <p className="text-slate-800">Nếu bạn có câu hỏi về học phí, lịch học hay quy trình, đừng ngại hỏi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-slate-800 bg-white/95 p-12 text-center shadow-xl">
          <h2 className="text-3xl font-semibold mb-6">Sẵn Sàng Đăng Ký?</h2>
          <p className="text-xl mb-8 text-slate-800">Gửi thông tin và Vinh sẽ liên hệ bạn để hoàn tất đăng ký.</p>
          <a
            href="mailto:example@example.com"
            className="inline-block rounded-full bg-[#1dd2d0] px-8 py-3 text-base font-bold text-white! transition hover:bg-[#16b4ae]"
          >
            Gửi Email Ngay
          </a>
        </div>
      </section> */}
    </div>
  );
}
