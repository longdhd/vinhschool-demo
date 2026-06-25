import Image from "next/image";
import ClassCalendar from "./components/ClassCalendar";
import HeroCarousel from "./components/HeroCarousel";
import RevealCard from "./components/RevealCard";
import SectionCard from "./components/SectionCard";
import { scheduleItems } from "./data/classes";
import {
  gettingStartedSteps,
  heroCards,
  heroImages,
  programCards,
  testimonials,
} from "./data/home";

export default function Home() {
  return (
    <div className="min-h-full bg-stone-100 text-zinc-900">
      <section className="relative overflow-hidden bg-stone-200 px-4 py-24 text-zinc-900 sm:px-6 lg:px-8">
        <HeroCarousel images={heroImages} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(29,210,208,0.18),transparent_35%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl">
            <p className="text-xl font-bold uppercase tracking-[0.35em] text-cyan-700/80">
              Chào mừng quý vị đến với VinhSchool
            </p>
            <h1 className="mt-6 text-5xl font-semibold tracking-wide sm:text-6xl">
              Giúp người Việt <br /> thi đậu quốc tịch Hoa Kỳ
            </h1>
            <p className="mt-6 text-3xl text-zinc-800 sm:text-4xl">
              Từ 100 câu hỏi phỏng vấn, luyện nói, phản xạ đến hỗ trợ hồ sơ
              N-400 cùng người thầy tận tâm
            </p>
          </div>

          <div className="mt-24 grid gap-4 sm:grid-cols-3">
            {heroCards.map((card, index) => (
              <RevealCard
                key={card.label}
                className="rounded-[2rem] border border-stone-300 bg-white p-6 hover:shadow-lg"
                delay={index * 90}
              >
                <p className="text-md font-semibold uppercase text-zinc-600">
                  {card.label}
                </p>
                <p className="mt-4 whitespace-pre-line text-xl font-semibold text-zinc-900">
                  {card.href ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:underline"
                    >
                      {card.body}
                    </a>
                  ) : (
                    card.body
                  )}
                </p>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionCard className="border-stone-300 shadow-[0_30px_60px_rgba(15,23,42,0.08)]">
            <div className="max-w-3xl">
              <p className="text-lg font-bold uppercase tracking-wide text-cyan-600">
                Bạn cần biết
              </p>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-900 sm:text-4xl">
                Tôi muốn thi quốc tịch. Tôi phải làm gì?
              </h2>
              <p className="mt-4 text-2xl leading-8 text-zinc-700">
                Bắt đầu bằng việc chọn lớp phù hợp, ôn civics, luyện kỹ năng
                phỏng vấn và chuẩn bị hồ sơ đúng yêu cầu USCIS.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {gettingStartedSteps.map((step, index) => (
                <RevealCard
                  key={step.label}
                  className="rounded-3xl border border-stone-300 bg-stone-50 p-8 transition-shadow hover:shadow-xl"
                  delay={index * 90}
                >
                  <p className="text-md font-semibold uppercase text-zinc-700">
                    {step.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-zinc-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-xl text-zinc-700">{step.body}</p>
                </RevealCard>
              ))}
            </div>
          </SectionCard>
        </div>
      </section>

      <section className="relative overflow-hidden px-4 py-16 sm:px-6">
        <Image
          src="/confetti.png"
          alt=""
          fill
          quality={75}
          sizes="100vw"
          className="pointer-events-none -z-0 object-cover"
        />
        <div className="relative mx-auto max-w-5xl">
          <div className="grid grid-cols-1 items-center justify-items-center gap-10 md:grid-cols-[1fr_auto]">
            <div>
              <h3 className="text-4xl font-semibold text-[#1dd2d0] md:text-7xl">
                Congratulations
                <br />
                Phuong Thi Dao!
              </h3>
            </div>

            <iframe
              className="aspect-9/16 w-full rounded-2xl"
              src="https://video.wixstatic.com/video/e76541_75e16bab1d5f48059dc29271e423c460/1080p/mp4/file.mp4"
              title="Video"
              loading="lazy"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />
          </div>
        </div>
      </section>

      <ClassCalendar />

      <section className="bg-stone-100 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <SectionCard className="rounded-4xl border-stone-300">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl p-8">
                <h3 className="mb-6 text-2xl font-semibold text-zinc-900">
                  Học Trực Tiếp
                </h3>
                <div className="space-y-3">
                  {scheduleItems.map(([day, time]) => (
                    <div
                      key={day}
                      className="rounded-2xl border border-stone-100 bg-stone-50 p-4 transition-shadow hover:shadow-lg"
                    >
                      <p className="text-2xl font-semibold text-cyan-600">
                        {day}
                      </p>
                      <p className="text-lg font-semibold">{time}</p>
                    </div>
                  ))}
                  <div className="mt-4 rounded-2xl border border-stone-100 bg-stone-50 p-4 transition-shadow hover:shadow-lg">
                    <p className="text-sm text-zinc-600">
                      <span className="text-2xl font-semibold text-cyan-600">
                        9042 Garden Grove Blvd #230 Garden Grove, CA 92844
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8">
                <h3 className="mb-6 text-2xl font-semibold text-zinc-900">
                  Học Qua Zoom
                </h3>
                <div className="space-y-3">
                  {scheduleItems.map(([day, time]) => (
                    <div
                      key={day}
                      className="rounded-2xl border border-stone-100 bg-stone-50 p-4 transition-shadow hover:shadow-lg"
                    >
                      <p className="text-2xl font-semibold text-[#1dd2d0]">
                        {day}
                      </p>
                      <p className="text-lg font-semibold">{time}</p>
                    </div>
                  ))}
                  <div className="mt-4 rounded-2xl border border-stone-100 bg-stone-50 p-4 transition-shadow hover:shadow-lg">
                    <p className="text-lg text-zinc-600">
                      Meeting ID:{" "}
                      <span className="text-2xl font-semibold text-[#1dd2d0]">
                        350 311 0626
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionCard>
        </div>
      </section>

      <section className="bg-stone-100 px-4 py-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-semibold text-zinc-900">
            Chương Trình Học Toàn Diện
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-2xl text-zinc-600">
            Tất cả những gì bạn cần để tự tin bước vào kỳ thi quốc tịch
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {programCards.map((program, index) => (
              <RevealCard
                key={program.title}
                className={`group relative rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${program.className}`}
                delay={index * 90}
              >
                <h3 className="mt-6 text-2xl font-bold text-zinc-900">
                  {program.title}
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-zinc-800">
                  {program.body}
                </p>
                <div className="mt-6 border-t border-current/20 pt-4">
                  <p className={`text-lg font-semibold ${program.pointClassName}`}>
                    {program.points.map((point) => (
                      <span key={point} className="block">
                        ✓ {point}
                      </span>
                    ))}
                  </p>
                </div>
              </RevealCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-4xl font-semibold text-zinc-900">
            Học Viên Nói Gì
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-2xl text-zinc-600">
            Những câu chuyện thành công từ những người đã tin tưởng VinhSchool
          </p>

          <div className="grid gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-3xl border border-stone-300 bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div
                    className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.gradient} text-2xl font-bold text-white`}
                  >
                    {testimonial.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-zinc-900">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-zinc-600">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
                <div className="mb-4 flex gap-1" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="mb-3 text-lg font-semibold text-zinc-900">
                  {testimonial.title}
                </p>
                <p className="text-xl italic text-zinc-700">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
