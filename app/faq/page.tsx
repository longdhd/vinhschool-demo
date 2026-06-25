import FAQAccordion from "../components/FAQAccordion";

const contactOptions = [
  {
    title: "Liên Hệ",
    body: "Gửi câu hỏi qua form liên hệ để được trả lời nhanh.",
  },
  {
    title: "Zoom Meeting",
    body: "Tham gia Zoom để hỏi trực tiếp và nhận giải đáp ngay.",
  },
  {
    title: "Form Liên Hệ",
    body: "Đi tới trang đăng ký để để lại thông tin và câu hỏi.",
  },
];

export default function FAQ() {
  return (
    <div className="min-h-full bg-slate-50">
      <section className="bg-cyan-950 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-800 bg-cyan-900/95 p-12 shadow-[0_40px_80px_rgba(0,0,0,0.28)]">
          <h1 className="mb-4 text-4xl font-semibold">
            Câu Hỏi Thường Gặp
          </h1>
          <p className="text-xl text-cyan-200">
            Tìm hiểu thêm về VinhSchool và quá trình thi quốc tịch.
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <FAQAccordion />
        </div>
      </section>

      <section className="px-4 py-30">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-10 shadow-xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">
            Vẫn Còn Câu Hỏi?
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {contactOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-slate-200 bg-cyan-50 p-6 text-center"
              >
                <h3 className="mb-3 text-xl font-bold text-slate-900">
                  {option.title}
                </h3>
                <p className="text-slate-700">{option.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
