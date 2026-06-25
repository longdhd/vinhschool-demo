import Image from "next/image";
import ScrollReveal from "../components/ScrollReveal";
import { achievementLogos } from "../data/about";

const bioPhotoUrl =
  "https://static.wixstatic.com/media/e76541_d636490b5659401aa012c773e7407034~mv2.jpg";

const practicalPhotoUrl =
  "https://static.wixstatic.com/media/e76541_df93219fb1b642a0a02795a1d254b8e2~mv2.jpg/v1/crop/x_441,y_0,w_2999,h_2051/fill/w_795,h_544,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_4496.jpg";

export default function About() {
  return (
    <div className="min-h-full bg-slate-50">
      <section className="bg-cyan-950 text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Về Thầy Vinh</p>
          <h1 className="mt-6 text-4xl font-semibold sm:text-5xl">Người hướng dẫn luyện thi quốc tịch cho người Việt</h1>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-cyan-50">
        <div className="max-w-6xl mx-auto grid gap-8 rounded-[2rem] border border-cyan-200 bg-white p-6 shadow-[0_30px_60px_rgba(15,23,42,0.16)] sm:p-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="group relative aspect-3/4 overflow-hidden rounded-[1.25rem] border border-cyan-100 bg-cyan-950 shadow-xl">
            <Image
              src={bioPhotoUrl}
              alt="Vinh Nguyen"
              fill
              sizes="(max-width: 768px) 100vw, 360px"
              className="object-cover scale-150 object-scale object-center transition-transform duration-500 ease-out group-hover:scale-[1.75]"
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">Câu chuyện của Vinh</h2>
            <p className="mt-6 text-slate-700 leading-relaxed">
              Vinh Nguyễn sinh ra và lớn lên tại Hoa Kỳ với nền tảng song ngữ Anh-Việt. Từ nhỏ, Vinh đã sử dụng tiếng Anh như ngôn ngữ chính, đồng thời giữ vững kỹ năng tiếng Việt để thấu hiểu sâu sắc nhu cầu của người Việt khi học thi quốc tịch.
            </p>
            <p className="mt-5 text-slate-700 leading-relaxed">
              Nhờ nền tảng Mỹ, kinh nghiệm học thuật và kỹ năng giao tiếp, Vinh chuyển thành những phương pháp dạy thực tế, dễ hiểu và phù hợp với người Việt Nam.
            </p>
            <p className="mt-5 text-slate-700 leading-relaxed">
              VinhSchool hiện là nơi học viên tin tưởng bởi sự hướng dẫn rõ ràng, bài giảng thực tế và hỗ trợ tận tâm trước, trong và sau phỏng vấn quốc tịch.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          <ScrollReveal className="h-full" delay={0}>
            <div className="h-full rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-cyan-900">Giảng dạy civics</h3>
              <p className="mt-4 text-slate-700">
                Vinh trực tiếp giảng dạy civics, tiếng Anh và kỹ năng phỏng vấn cho học viên ở mọi trình độ.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="h-full" delay={90}>
            <div className="h-full rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-cyan-900">Hỗ trợ hồ sơ N-400</h3>
              <p className="mt-4 text-slate-700">
                Hướng dẫn học viên hoàn thành mẫu đơn N-400 chính xác, rõ ràng và đúng quy định USCIS.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="h-full" delay={0}>
            <div className="h-full rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-cyan-900">Thông dịch USCIS</h3>
              <p className="mt-4 text-slate-700">
                Vinh có kinh nghiệm thông dịch trong các buổi phỏng vấn USCIS, hiểu rõ quy trình và yêu cầu của viên chức di trú.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal className="h-full" delay={90}>
            <div className="h-full rounded-3xl border border-cyan-200 bg-cyan-50 p-8 shadow-xl">
              <h3 className="text-xl font-semibold text-cyan-900">Đồng hành học viên</h3>
              <p className="mt-4 text-slate-700">
                Hỗ trợ học viên từ luyện tập, hoàn thiện hồ sơ đến chuẩn bị tâm lý phỏng vấn để tăng cơ hội thành công.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-cyan-50">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-cyan-200 bg-white p-10 shadow-[0_30px_60px_rgba(15,23,42,0.16)]">
          <h2 className="text-3xl font-semibold text-slate-900">Thành tích & Nền tảng</h2>
          <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
            <p>
              Vinh xây dựng nền tảng học thuật và kỹ năng lãnh đạo sớm, giúp anh trở thành người hướng dẫn tư duy, giao tiếp và thi quốc tịch hiệu quả.
            </p>
            <div className="grid gap-5 sm:grid-cols-3">
              {achievementLogos.map(({ label, src }) => (
                <div
                  key={label}
                  className="flex flex-col items-center text-center"
                >
                  <div className="relative h-24 w-24 overflow-hidden sm:h-28 sm:w-28">
                    <Image
                      src={src}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-contain p-3 grayscale contrast-125 brightness-75 opacity-80 mix-blend-multiply"
                    />
                  </div>
                  <span className="mt-3 text-sm font-semibold leading-snug text-slate-700">
                    {label}
                  </span>
                </div>
              ))}
            </div>
            <ul className="list-disc space-y-3 pl-5">
              <li>Giải Nhất Cuộc thi Viết Toàn Quận do Target tổ chức khi 9 tuổi, mang về $500 tiền sách và kinh phí cải tạo thư viện cho trường.</li>
              <li>3 năm liên tiếp là một trong 4 học sinh giỏi Toán hàng đầu tại trường, đại diện dự thi Math Pentathlon cấp quận và đạt nhiều thành tích cho trường.</li>
              <li>Giải Nhất Elks Lodge Americanism Essay Contest với bài luận về quốc ca Hoa Kỳ.</li>
              <li>American Legion School Award: huy chương danh dự toàn quốc dành cho 1 nam sinh và 1 nữ sinh tiêu biểu nhất trong lớp tốt nghiệp.</li>
              <li>Huy chương Xuất sắc Môn Anh Văn dành cho học sinh đứng đầu môn Anh Văn toàn trường.</li>
              <li>Chủ tịch Hội Danh Dự Thiếu Niên Quốc Gia (National Junior Honor Society) với thành tích học tập xuất sắc và phẩm chất lãnh đạo.</li>
              <li>Danh hiệu &ldquo;Most Likely To Succeed&rdquo; do bạn bè bình chọn trong kỷ yếu, thể hiện sự tín nhiệm và kỳ vọng của học sinh cùng lớp.</li>
              <li>Cúp &ldquo;Học Sinh Xuất Sắc&rdquo; của Hội Cựu Nữ Sinh Trung Vương và giải thưởng học sinh giỏi nhất lớp tại các trường Việt ngữ ở California.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-white">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-slate-200 bg-cyan-50/80 p-10 shadow-[0_30px_60px_rgba(15,23,42,0.12)]">
          <div className="group relative mb-8 aspect-[16/10] overflow-hidden rounded-[1.5rem] border border-cyan-100 bg-cyan-950 shadow-xl">
            <Image
              src={practicalPhotoUrl}
              alt="Vinh Nguyen teaching and supporting students"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-110"
            />
          </div>
          <h2 className="text-3xl font-semibold text-slate-900">Kinh nghiệm thực tế</h2>
          <div className="mt-8 space-y-6 text-slate-700 leading-relaxed">
            <p>
              Vinh không chỉ có nền tảng học thuật, mà còn tích lũy kinh nghiệm thực tế thông qua công việc giáo dục, thông dịch và huấn luyện tiếng Anh.
            </p>
            <p>
              Anh từng là thông dịch viên trong các buổi phỏng vấn USCIS, hiểu rõ cách đặt câu hỏi và yêu cầu của viên chức di trú. Điều này giúp Vinh chuẩn bị học viên sát thực tế hơn.
            </p>
            <p>
              Ngoài học thuật, Vinh cũng rèn luyện kỷ luật và tinh thần đội nhóm khi tham gia 4 năm đấu vật và bóng bầu dục Mỹ, giúp anh có phương pháp giảng dạy kiên trì, rõ ràng và thực tế.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-cyan-50">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-cyan-200 bg-white p-10 shadow-[0_30px_60px_rgba(15,23,42,0.16)] text-center">
          <h2 className="text-3xl font-bold text-slate-900">Triết lý giảng dạy</h2>
          <div className="mt-8 space-y-6 text-slate-700">
            <div className="rounded-3xl border border-slate-200 bg-cyan-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Học để sử dụng</h3>
              <p className="mt-3">
                Không học thuộc vẹt, mà hiểu và biết cách trả lời câu hỏi trong kỳ thi.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-cyan-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Luyện nói liên tục</h3>
              <p className="mt-3">
                Học viên luyện nói mỗi buổi để xây dựng phản xạ và tự tin.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-cyan-50 p-6">
              <h3 className="text-xl font-semibold text-slate-900">Tập trung vào mục tiêu</h3>
              <p className="mt-3">
                Mọi nội dung đều bám sát mục tiêu vượt qua phỏng vấn và trở thành công dân Hoa Kỳ.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
