import RevealCard from "../components/RevealCard";
import { classHeroCards, scheduleItems } from "../data/classes";

export default function Classes() {
  return (
    <div className="min-h-full">
      <section className="bg-cyan-900 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] p-18">
            <h1 className="text-5xl font-semibold tracking-tight text-white">
              Lớp Luyện Thi Quốc Tịch
            </h1>
            <p className="mt-4 max-w-2xl text-3xl text-slate-200">
              Chuẩn bị tự tin cho kỳ thi quốc tịch Hoa Kỳ với lộ trình rõ ràng,
              tài liệu thực tiễn và luyện phỏng vấn.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {classHeroCards.map((card, index) => (
                <RevealCard
                  key={card.eyebrow}
                  className="rounded-3xl border border-cyan-200 bg-white p-6 shadow-sm"
                  delay={index * 90}
                >
                  <p className="text-lg font-semibold uppercase tracking-wider text-cyan-600">
                    {card.eyebrow}
                  </p>
                  <p className="mt-3 text-xl text-slate-900">{card.body}</p>
                </RevealCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="in-person" className="px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="rounded-[2rem] border border-purple-200 bg-white p-10 shadow-xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Học Trực Tiếp
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Đến lớp tại Garden Grove để luyện nói, luyện phỏng vấn và trao
              đổi trực tiếp cùng Vinh.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-purple-200 bg-purple-100 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Địa điểm
                </h3>
                <p className="mt-3 text-xl text-slate-700">
                  9042 Garden Grove Blvd #230, <br /> Garden Grove, CA 92844
                </p>
              </div>
              <div className="rounded-3xl border border-purple-200 bg-purple-100 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Lịch học
                </h3>
                {scheduleItems.map(([day, time]) => (
                  <p key={day} className="mt-3 text-xl text-slate-700">
                    {day}: {time}
                  </p>
                ))}
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-slate-900">
                Ai phù hợp với lớp trực tiếp?
              </h3>
              <ul className="mt-8 grid gap-8 text-lg text-slate-700 sm:grid-cols-2">
                {[
                  "Muốn phản xạ tiếng Anh tự nhiên trong lớp",
                  "Thích không gian học tập tập trung",
                  "Muốn nhận phản hồi trực tiếp từ giáo viên",
                  "Sống gần Garden Grove / Orange County",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-3xl bg-purple-100 p-5 shadow-sm"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="zoom" className="px-4 py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          <div className="rounded-[2rem] border border-amber-200 bg-white p-10 shadow-xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Học Qua Zoom
            </h2>
            <p className="mt-4 text-xl text-slate-600">
              Lớp Zoom giúp bạn học từ xa với chất lượng giảng dạy tương đương,
              bài tập và kiểm tra định kỳ.
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Vào lớp qua Zoom
                </h3>
                <p className="mt-3 text-xl text-slate-700">
                  với Meeting ID 350 311 0626
                </p>
              </div>
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">
                  Lịch học
                </h3>
                {scheduleItems.map(([day, time]) => (
                  <p key={day} className="mt-3 text-xl text-slate-700">
                    {day}: {time}
                  </p>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-semibold text-slate-900">
                Phù hợp cho ai?
              </h3>
              <ul className="mt-8 grid gap-8 text-lg text-slate-700 sm:grid-cols-2">
                {[
                  "Người không thể đến lớp trực tiếp",
                  "Lịch làm việc bận rộn",
                  "Muốn học tập linh hoạt tại nhà",
                  "Muốn tiếp tục luyện thi dù ở xa",
                ].map((item) => (
                  <li
                    key={item}
                    className="rounded-3xl bg-amber-50 p-5 shadow-sm"
                  >
                    ✓ {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <a
              href="https://us06web.zoom.us/j/3503110626"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-amber-100 px-8 py-3 text-xl font-semibold text-slate-900! transition hover:bg-amber-200"
            >
              Tham Gia Zoom Ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
