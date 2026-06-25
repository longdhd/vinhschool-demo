import Image from "next/image";

export default function Pricing() {
  return (
    <div className="min-h-full">
      <section className="bg-cyan-950 text-white py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto rounded-[2rem] border border-cyan-800 bg-cyan-900/95 p-12 shadow-[0_40px_80px_rgba(0,0,0,0.28)]">
          <h1 className="text-4xl font-semibold mb-4">Học Phí</h1>
          <p className="text-xl text-cyan-200">
            Tìm hiểu thêm về chi phí học nhóm, học online, kèm riêng tại nhà hay tại lớp, hỗ trợ & phiên dịch phỏng vấn USCIS
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-slate-100">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="rounded-3xl border border-slate-300 bg-white shadow-xl p-8">
            <h2 className="text-3xl font-semibold text-slate-900">Học nhóm</h2>
            <p className="mt-3 text-xl text-slate-600">
              Lớp nhóm với chi phí tiết kiệm, phù hợp cho học viên cần môi trường luyện tập đều đặn.
            </p>
            <div className="mt-8 overflow-x-auto rounded-3xl border border-slate-200 bg-slate-50">
              <table className="min-w-full text-left text-slate-700 text-xl">
                <thead className="border-b border-slate-200 bg-slate-100 text-slate-900">
                  <tr>
                    <th className="px-6 py-4 font-medium">Số buổi/tuần</th>
                    <th className="px-6 py-4 font-medium">Gói 1 tháng</th>
                    <th className="px-6 py-4 font-medium">Gói ưu đãi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-6 py-4">1 buổi/tuần</td>
                    <td className="px-6 py-4">$50</td>
                    <td className="px-6 py-4">$120 / 3 tháng</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4">2 buổi/tuần</td>
                    <td className="px-6 py-4">$90</td>
                    <td className="px-6 py-4">$240 / 3 tháng</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4">3 buổi/tuần</td>
                    <td className="px-6 py-4">$130</td>
                    <td className="px-6 py-4">$245 / 2 tháng</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="px-6 py-4">4 buổi/tuần</td>
                    <td className="px-6 py-4">$160</td>
                    <td className="px-6 py-4">$300 / 2 tháng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <section className="py-16 sm:px-6">
            <div className="mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  className="h-auto w-full object-cover"
                  src="https://static.wixstatic.com/media/e76541_65e4c7aba5b247bb816ba0b5dbebb6f7~mv2.jpg/v1/fill/w_1160,h_803,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e76541_65e4c7aba5b247bb816ba0b5dbebb6f7~mv2.jpg"
                  alt="Học phí và lớp học quốc tịch"
                  width={1160}
                  height={803}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 1160px"
                />
              </div>
            </div>
          </section>

          <div className="rounded-3xl border border-slate-300 bg-white shadow-xl p-8">
            <h2 className="text-3xl font-semibold text-slate-900">Dạy kèm riêng - Quốc tịch</h2>
            <p className="mt-3 text-slate-600 text-xl">
              Học kèm 1-1 với Vinh hoặc giáo viên chuyên môn, tập trung vào phần thi quốc tịch và N-400
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-semibold text-slate-900">Trực tiếp tại VinhSchool</h3>
                <div className="mt-4 space-y-3 text-slate-700">
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>30 phút</span>
                    <span className="font-semibold text-right text-slate-900">$30</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>45 phút</span>
                    <span className="font-semibold text-right text-slate-900">$45</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>4 buổi 45 phút</span>
                    <span className="font-semibold text-right text-slate-900">$160</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>60 phút</span>
                    <span className="font-semibold text-right text-slate-900">$55</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>3 buổi 60 phút</span>
                    <span className="font-semibold text-right text-slate-900">$150</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>120 phút</span>
                    <span className="font-semibold text-right text-slate-900">$100</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-semibold text-slate-900">Online</h3>
                <div className="mt-4 space-y-3 text-slate-700 text-sm">
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>30 phút</span>
                    <span className="font-semibold text-right text-slate-900">$25</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>45 phút</span>
                    <span className="font-semibold text-right text-slate-900">$40</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>4 buổi 45 phút</span>
                    <span className="font-semibold text-right text-slate-900">$150</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>60 phút</span>
                    <span className="font-semibold text-right text-slate-900">$50</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>3 buổi 60 phút</span>
                    <span className="font-semibold text-right text-slate-900">$135</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>120 phút</span>
                    <span className="font-semibold text-right text-slate-900">$90</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-semibold text-slate-900">Tại nhà (dưới 3 dặm)</h3>
                <div className="mt-4 space-y-3 text-slate-700 text-xl">
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>60 phút</span>
                    <span className="font-semibold text-slate-900">$75</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>3 buổi 60 phút</span>
                    <span className="font-semibold text-slate-900">$210</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>120 phút</span>
                    <span className="font-semibold text-slate-900">$140</span>
                  </div>
                </div>
                <p className="mt-4 text-slate-500 text-lg">
                  Nếu cách trường hơn 3 dặm, vui lòng liên hệ để báo giá cụ thể.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-300 bg-white shadow-xl p-8 mt-32">
            <h2 className="text-3xl font-semibold text-slate-900">Dạy kèm riêng - Tiếng Anh giao tiếp</h2>
            <p className="mt-3 text-slate-600 text-xl">
              Luyện giao tiếp thực tế, nói rõ ràng, tự tin và ứng dụng tiếng Anh hàng ngày
            </p>
            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-semibold text-slate-900">Trực tiếp tại VinhSchool</h3>
                <div className="mt-4 space-y-3 text-slate-700 text-xl">
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>30 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$25</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>45 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$40</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>4 buổi 45 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$150</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>60 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$50</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>3 buổi 60 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$135</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>120 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$90</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Online</h3>
                <div className="mt-4 space-y-3 text-slate-700 text-xl">
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>30 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$20</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>45 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$35</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>4 buổi 45 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$100</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>60 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$45</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>3 buổi 60 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$120</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>120 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$80</span>
                  </div>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-lg font-semibold text-slate-900">Tại nhà (dưới 3 dặm)</h3>
                <div className="mt-4 space-y-3 text-slate-700 text-xl">
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>60 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$70</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-500 shadow-sm">
                    <span>3 buổi 60 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$190</span>
                  </div>
                  <div className="grid grid-cols-[1fr_1fr] gap-3 rounded-xl bg-white p-3 text-xl text-slate-700 shadow-sm">
                    <span>120 phút</span>
                    <span className="font-semibold text-slate-900 text-right">$120</span>
                  </div>
                </div>
                <p className="mt-4 text-slate-500 text-lg">
                  Nếu cách trường hơn 3 dặm, vui lòng liên hệ để thỏa thuận lịch và chi phí.
                </p>
              </div>
            </div>
          </div>

          <section className="py-16 sm:px-6">
            <div className="mx-auto">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  className="h-auto w-full object-cover"
                  src="https://static.wixstatic.com/media/e76541_6a0d4d661ff54008b2e68a542b7a3c4e~mv2.png/v1/fill/w_1070,h_803,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e76541_6a0d4d661ff54008b2e68a542b7a3c4e~mv2.png"
                  alt="Học phí và lớp học quốc tịch"
                  width={1070}
                  height={803}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 1070px"
                />
              </div>
            </div>
          </section>

          <div className="rounded-3xl border border-slate-300 bg-white shadow-xl p-8">
            <h2 className="text-3xl font-semibold text-slate-900">Dịch vụ hồ sơ & hỗ trợ</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-semibold text-slate-900">Điền đơn</h3>
                <ul className="mt-4 space-y-2 text-slate-700 text-xl">
                  <li>N-400: $120 – $150</li>
                  <li>N-600: $150</li>
                </ul>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="text-xl font-semibold text-slate-900">Hỗ trợ phỏng vấn</h3>
                <ul className="mt-4 space-y-2 text-slate-700 text-xl">
                  <li>Hỗ trợ phỏng vấn quốc tịch: $130 – $160</li>
                  <li>Đưa đi thi & phiên dịch (miễn thi tiếng Anh): $220</li>
                  <li>Phiên dịch (miễn thi tiếng Anh): $160</li>
                </ul>
              </div>
            </div>
          </div>

          <section className="py-16 sm:px-6">
            <div className="mx-auto">
              <div className="mt-8 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  className="h-auto w-full object-cover"
                  src="https://static.wixstatic.com/media/e76541_f3f57a0cc66e4e7f9be617ace4c7dc16~mv2.jpg/v1/fill/w_1650,h_803,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e76541_f3f57a0cc66e4e7f9be617ace4c7dc16~mv2.jpg"
                  alt="Học phí và lớp học quốc tịch"
                  width={1650}
                  height={803}
                  quality={80}
                  sizes="(max-width: 768px) 100vw, 1160px"
                />
              </div>
            </div>
          </section>

          <div className="rounded-[2rem] border border-slate-300 px-8 py-10 text-center shadow-[0_30px_60px_rgba(15,23,42,0.24)]">
            <h2 className="text-3xl font-semibold">Chuẩn bị sẵn sàng cho hành trình của bạn</h2>
            <p className="mt-4">
              Giá gói là mức tham khảo theo thông tin trên VinhSchool. Vui lòng liên hệ trực tiếp để nhận tư vấn, kiểm tra lịch và chọn gói phù hợp nhất.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-cyan-400 px-8 py-3 text-lg text-white! font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Liên hệ tư vấn ngay
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
