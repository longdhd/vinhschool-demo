import Link from "next/link";
import ScrollReveal from "../components/ScrollReveal";
import { resources } from "./resources";

export const metadata = {
  title: "Cẩm Nang Thi Quốc Tịch Hoa Kỳ | VinhSchool",
  description:
    "Tổng hợp bài viết, hướng dẫn và tài liệu tham khảo về thi quốc tịch Hoa Kỳ. Tìm hiểu quy trình nhập quốc tịch, đơn N-400, phỏng vấn USCIS, diện miễn thi tiếng Anh và các thông tin cập nhật từ VinhSchool.",
  keywords: [
    "thi quốc tịch Mỹ",
    "thi quốc tịch Hoa Kỳ",
    "đơn N-400",
    "phỏng vấn USCIS",
    "100 câu hỏi quốc tịch",
    "miễn thi tiếng Anh quốc tịch",
    "USCIS",
    "VinhSchool",
  ],
};

export default function ResourcePage() {
  return (
    <div className="min-h-full bg-stone-100 text-zinc-900">
      <section className="bg-cyan-950 px-4 py-16 text-white sm:px-6">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-cyan-300">
            Cẩm nang
          </p>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold sm:text-5xl">
            Thông tin và hướng dẫn dành cho người chuẩn bị thi quốc tịch Hoa Kỳ
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-cyan-100">
            Tổng hợp các bài viết, hướng dẫn và tài liệu tham khảo từ VinhSchool và USCIS, giúp bạn hiểu rõ hơn về hồ sơ, quy trình và kỳ thi quốc tịch Hoa Kỳ.
          </p>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2">
          {resources.map((resource, index) => (
            <ScrollReveal
              key={resource.slug}
              className="h-full"
              delay={(index % 2) * 90}
            >
              <Link
                href={`/resource/${resource.slug}`}
                className="group block h-full rounded-[1.5rem] border border-stone-300 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700">
                  {resource.eyebrow}
                </p>
                <h2 className="mt-4 text-2xl font-semibold text-zinc-950 group-hover:text-cyan-800">
                  {resource.title}
                </h2>
                <p className="mt-4 text-lg leading-8 text-zinc-700">
                  {resource.summary}
                </p>
                <span className="mt-6 inline-flex text-sm font-bold text-cyan-800">
                  Đọc hướng dẫn
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
                Cách học
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-950">
                Rõ ràng, dễ nhớ, và áp dụng được trong phòng phỏng vấn
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-8 text-zinc-700">
              <p>
                VinhSchool tập trung giúp học viên hiểu bài, tự tin trả lời và chuẩn bị đúng trọng tâm. Những gì bạn học không chỉ để đậu phỏng vấn quốc tịch, mà còn giúp bạn sử dụng tiếng Anh và hồ sơ của mình vững vàng hơn trong thực tế.
              </p>
              <p>
                Nội dung trên các trang tài nguyên được viết để học viên có thể đọc nhanh, biết mình cần chuẩn bị gì, và quay lại luyện tập từng phần khi cần.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
