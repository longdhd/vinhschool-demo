export type Resource = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  intro: string;
  quickFacts: string[];
  sections: {
    heading: string;
    body: string[];
  }[];
  checklist: string[];
  sources: {
    label: string;
    href: string;
  }[];
};

export const resources: Resource[] = [
  {
    slug: "100-cau-hoi-quoc-tich-my",
    title: "100 Câu Hỏi Quốc Tịch Mỹ",
    eyebrow: "Civics test",
    summary:
      "Hiểu 100 câu hỏi civics theo cách dễ nhớ, dễ nói, và đúng trọng tâm buổi phỏng vấn USCIS.",
    intro:
      "Phần civics không nên học thuộc một cách máy móc. Điều quan trọng là hiểu câu hỏi, biết câu trả lời chính, và luyện nói thành tiếng để khi vào phòng phỏng vấn bạn không bị khựng lại.",
    quickFacts: [
      "Nếu nộp N-400 trước ngày 20/10/2025, USCIS cho biết bạn sẽ thi bài civics 2008.",
      "Bài civics 2008 hỏi tối đa 10 câu trong danh sách 100 câu; cần trả lời đúng 6 câu.",
      "Nếu nộp N-400 từ ngày 20/10/2025 trở đi, USCIS cho biết bạn sẽ thi bài civics 2025.",
      "Bài civics 2025 hỏi 20 câu trong danh sách 128 câu; cần trả lời đúng 12 câu.",
    ],
    sections: [
      {
        heading: "Học để trả lời được, không chỉ để nhớ",
        body: [
          "Nhiều học viên có thể đọc đáp án nhưng khi viên chức hỏi trực tiếp lại không phản xạ kịp. Vì vậy, cách học tốt nhất là nghe câu hỏi, hiểu ý chính, rồi tự nói câu trả lời bằng giọng của mình.",
          "VinhSchool tập trung vào cách giải thích ngắn gọn, rõ ràng, và đi thẳng vào trọng tâm để học viên biết câu nào cần trả lời chính xác, câu nào có nhiều đáp án đúng, và câu nào thay đổi theo tiểu bang hoặc thời điểm.",
        ],
      },
      {
        heading: "Những câu dễ bị nhầm",
        body: [
          "Một số câu hỏi có nhiều đáp án hợp lệ, nhưng không phải đáp án nào cũng dễ nhớ. Khi luyện, nên chọn một đáp án đơn giản nhất và dùng nhất quán.",
          "Các câu về dân biểu, thượng nghị sĩ, thống đốc, thủ phủ tiểu bang, và đảng phái hiện tại cần được kiểm tra lại gần ngày phỏng vấn vì thông tin có thể thay đổi.",
        ],
      },
      {
        heading: "Cách luyện tại nhà",
        body: [
          "Mỗi ngày nên luyện một nhóm nhỏ, đọc to câu hỏi và trả lời bằng miệng. Khi đã quen, nhờ người khác hỏi ngẫu nhiên để tập phản xạ như trong buổi phỏng vấn thật.",
          "Nếu tiếng Anh còn yếu, đừng chỉ nhìn bản tiếng Việt. Hãy nghe và nhận diện câu hỏi tiếng Anh để khi viên chức hỏi, bạn biết họ đang hỏi phần nào.",
        ],
      },
    ],
    checklist: [
      "Tải đúng bộ câu hỏi USCIS áp dụng cho ngày nộp N-400 của mình.",
      "Đánh dấu các câu có đáp án thay đổi theo tiểu bang hoặc theo thời điểm.",
      "Luyện nói thành tiếng, không chỉ đọc thầm.",
      "Làm mock interview để kiểm tra phản xạ trước ngày thi.",
    ],
    sources: [
      {
        label: "USCIS Study for the Test",
        href: "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test",
      },
      {
        label: "USCIS Naturalization Interview and Test",
        href: "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test",
      },
    ],
  },
  {
    slug: "dien-don-n400",
    title: "Điền Đơn N-400",
    eyebrow: "Hồ sơ quốc tịch",
    summary:
      "Chuẩn bị đơn N-400 rõ ràng, chính xác, và hiểu từng phần trước khi bước vào phỏng vấn.",
    intro:
      "Đơn N-400 không chỉ là giấy tờ để nộp. Đây cũng là nền tảng cho buổi phỏng vấn quốc tịch, vì viên chức USCIS sẽ hỏi về thông tin trong đơn và lý lịch của bạn.",
    quickFacts: [
      "N-400 là đơn xin nhập tịch Hoa Kỳ dành cho người đủ điều kiện naturalization.",
      "Có thể nộp online hoặc bằng giấy, nhưng một số trường hợp xin giảm phí hoặc miễn phí phải nộp giấy.",
      "USCIS khuyên người nộp đọc kỹ hướng dẫn và chuẩn bị giấy tờ theo diện của mình.",
      "Tài liệu tiếng nước ngoài thường cần bản dịch tiếng Anh đầy đủ và chứng nhận của người dịch.",
    ],
    sections: [
      {
        heading: "Điền đúng để phỏng vấn dễ hơn",
        body: [
          "Một đơn N-400 điền vội hoặc không hiểu rõ từng câu có thể làm học viên lúng túng khi viên chức hỏi lại. Vì vậy, khi điền đơn, cần hiểu tại sao trả lời như vậy và thông tin đó có liên quan gì đến buổi phỏng vấn.",
          "VinhSchool dùng cách làm trực tiếp, rõ từng mục, giúp học viên theo dõi toàn bộ quá trình và biết những điểm dễ gây nhầm lẫn trước khi nộp.",
        ],
      },
      {
        heading: "Những phần cần chú ý",
        body: [
          "Các phần về địa chỉ, việc làm, chuyến đi ra khỏi Hoa Kỳ, hôn nhân, con cái, thuế, án tích, Selective Service, và các câu hỏi yes/no cần được rà soát kỹ.",
          "Nếu có chuyến đi dài, hồ sơ đặc biệt, hoặc câu trả lời yes trong phần đạo đức và pháp lý, nên chuẩn bị giấy tờ và lời giải thích rõ ràng trước buổi phỏng vấn.",
        ],
      },
      {
        heading: "Không đoán khi không chắc",
        body: [
          "Nếu không nhớ ngày tháng hoặc chi tiết cũ, nên kiểm tra lại giấy tờ thay vì đoán. Một thông tin nhỏ sai có thể làm buổi phỏng vấn mất thời gian giải thích.",
          "Mục tiêu là nộp một bộ hồ sơ gọn, đúng, và giúp học viên yên tâm vì mình hiểu nội dung đã khai.",
        ],
      },
    ],
    checklist: [
      "Chuẩn bị thẻ xanh, ID, passport cũ/mới, địa chỉ và lịch sử việc làm.",
      "Liệt kê tất cả chuyến đi ra khỏi Hoa Kỳ theo ngày đi và ngày về.",
      "Rà soát hôn nhân, con cái, thuế, án tích, và Selective Service nếu có liên quan.",
      "Lưu bản copy đơn đã nộp để luyện phỏng vấn theo đúng hồ sơ.",
    ],
    sources: [
      {
        label: "USCIS Form N-400",
        href: "https://www.uscis.gov/n-400",
      },
      {
        label: "USCIS Naturalization Interview and Test",
        href: "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test",
      },
    ],
  },
  {
    slug: "mien-thi-tieng-anh",
    title: "Miễn Thi Tiếng Anh",
    eyebrow: "Ngoại lệ và hỗ trợ",
    summary:
      "Hiểu các diện 50/20, 55/15, 65/20 và trường hợp N-648 để chuẩn bị đúng ngay từ đầu.",
    intro:
      "Miễn thi tiếng Anh không có nghĩa là miễn toàn bộ phỏng vấn. Người đủ điều kiện thường vẫn phải thi civics, nhưng có thể được thi bằng ngôn ngữ của mình và cần thông dịch viên phù hợp.",
    quickFacts: [
      "Diện 50/20: từ 50 tuổi trở lên khi nộp đơn và đã là thường trú nhân ít nhất 20 năm.",
      "Diện 55/15: từ 55 tuổi trở lên khi nộp đơn và đã là thường trú nhân ít nhất 15 năm.",
      "Diện 65/20 được special consideration cho civics và thường học bộ câu hỏi rút gọn được USCIS đánh dấu.",
      "N-648 là diện y tế cho người không thể đáp ứng yêu cầu tiếng Anh/civics vì khuyết tật hoặc suy giảm đủ điều kiện.",
    ],
    sections: [
      {
        heading: "Miễn tiếng Anh nhưng vẫn cần chuẩn bị",
        body: [
          "Nếu bạn thuộc diện 50/20 hoặc 55/15, USCIS cho phép thi civics bằng ngôn ngữ của bạn. Tuy nhiên, bạn vẫn cần hiểu quy trình, giấy tờ, và nội dung căn bản trong hồ sơ N-400.",
          "Thông dịch viên phải thông thạo cả tiếng Anh và ngôn ngữ của bạn. Không nên để đến sát ngày phỏng vấn mới tìm người thông dịch.",
        ],
      },
      {
        heading: "65/20 khác gì?",
        body: [
          "Nếu từ 65 tuổi trở lên và đã là thường trú nhân ít nhất 20 năm vào lúc nộp đơn, bạn được special consideration cho phần civics. USCIS cho biết bạn có thể học các câu được đánh dấu trong bộ câu hỏi áp dụng cho trường hợp của mình.",
          "Dù câu hỏi ít hơn, vẫn nên luyện nghe, luyện trả lời, và làm thử phỏng vấn để tránh căng thẳng trong ngày thi.",
        ],
      },
      {
        heading: "N-648 cần làm cẩn thận",
        body: [
          "N-648 không phải là giấy tự khai. Mẫu này phải do bác sĩ, bác sĩ osteopathic, hoặc clinical psychologist đủ điều kiện hoàn thành.",
          "Nếu dùng N-648, nội dung y tế cần giải thích rõ vì sao tình trạng đó làm bạn không thể đáp ứng yêu cầu tiếng Anh hoặc civics. Hồ sơ yếu hoặc mơ hồ có thể gây khó khăn khi phỏng vấn.",
        ],
      },
    ],
    checklist: [
      "Xác định tuổi và số năm thường trú tại thời điểm nộp N-400.",
      "Chuẩn bị thông dịch viên nếu được thi bằng tiếng Việt.",
      "Nếu thuộc 65/20, học đúng bộ câu hỏi rút gọn USCIS áp dụng.",
      "Nếu dùng N-648, làm việc sớm với bác sĩ đủ điều kiện.",
    ],
    sources: [
      {
        label: "USCIS Exceptions and Accommodations",
        href: "https://www.uscis.gov/citizenship/exceptions-and-accommodations",
      },
      {
        label: "USCIS Form N-400",
        href: "https://www.uscis.gov/n-400",
      },
    ],
  },
  {
    slug: "rot-phong-van-quoc-tich",
    title: "Rớt Phỏng Vấn Quốc Tịch",
    eyebrow: "Sau buổi phỏng vấn",
    summary:
      "Biết điều gì xảy ra sau khi rớt English hoặc civics, và cách chuẩn bị cho lần thi lại.",
    intro:
      "Rớt phỏng vấn không có nghĩa là hết cơ hội. Điều quan trọng là phải biết mình rớt phần nào, đọc kỹ giấy USCIS đưa, và luyện lại đúng điểm yếu trước ngày hẹn tiếp theo.",
    quickFacts: [
      "USCIS cho biết đương đơn có hai cơ hội để thi English và civics.",
      "Nếu rớt một phần ở buổi đầu, bạn sẽ được thi lại phần đã rớt.",
      "USCIS thường hẹn thi lại trong khoảng 60 đến 90 ngày từ ngày phỏng vấn đầu.",
      "Nếu vấn đề nằm ở hồ sơ N-400, cần chuẩn bị giải thích và giấy tờ bổ sung theo yêu cầu.",
    ],
    sections: [
      {
        heading: "Trước hết phải biết rớt phần nào",
        body: [
          "Có người rớt civics, có người rớt reading hoặc writing, có người không trả lời được phần N-400 bằng tiếng Anh. Mỗi trường hợp cần cách luyện khác nhau.",
          "Sau buổi phỏng vấn, hãy giữ giấy kết quả USCIS đưa và đọc kỹ phần nào cần làm tiếp. Đừng chỉ nghe truyền miệng rồi luyện sai trọng tâm.",
        ],
      },
      {
        heading: "Luyện lại đúng điểm yếu",
        body: [
          "Nếu rớt civics, cần luyện hỏi đáp ngẫu nhiên, không học theo thứ tự cố định. Nếu rớt reading/writing, cần luyện mẫu câu USCIS và cách nghe từ khóa.",
          "Nếu bị khựng ở phần N-400, cần luyện lại câu hỏi cá nhân, lịch sử đi lại, việc làm, hôn nhân, thuế, và các câu yes/no bằng cách nói thành tiếng.",
        ],
      },
      {
        heading: "Giữ bình tĩnh cho lần sau",
        body: [
          "Nhiều học viên rớt lần đầu vì run, không phải vì không biết. Lần thi lại nên tập phỏng vấn thử nhiều lần để quen áp lực và trả lời ngắn gọn hơn.",
          "Mục tiêu không phải nói tiếng Anh hay như người bản xứ, mà là hiểu câu hỏi, trả lời đúng, và thể hiện rằng mình đã chuẩn bị nghiêm túc.",
        ],
      },
    ],
    checklist: [
      "Giữ giấy kết quả USCIS và xác định phần cần thi lại.",
      "Lập lịch luyện đều trong 60 đến 90 ngày trước buổi hẹn mới.",
      "Làm mock interview để sửa lỗi phản xạ.",
      "Chuẩn bị giấy tờ bổ sung nếu USCIS yêu cầu.",
    ],
    sources: [
      {
        label: "USCIS Naturalization Interview and Test",
        href: "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test",
      },
    ],
  },
  {
    slug: "kinh-nghiem-thi-quoc-tich-my",
    title: "Kinh Nghiệm Thi Quốc Tịch Mỹ",
    eyebrow: "Chuẩn bị thực tế",
    summary:
      "Những điều nên chuẩn bị trước, trong, và sau buổi phỏng vấn để tự tin hơn khi gặp USCIS.",
    intro:
      "Thi quốc tịch là một buổi phỏng vấn quan trọng, nhưng không nên để nỗi lo làm mình mất bình tĩnh. Chuẩn bị đúng cách sẽ giúp bạn biết mình cần làm gì từ lúc nhận thư hẹn đến khi bước ra khỏi văn phòng USCIS.",
    quickFacts: [
      "Buổi phỏng vấn thường gồm câu hỏi về N-400, kiểm tra tiếng Anh, và kiểm tra civics nếu không được miễn.",
      "Speaking được đánh giá trong lúc viên chức hỏi về hồ sơ và lý lịch.",
      "Reading và writing thường dùng câu đơn giản xoay quanh chủ đề civics và lịch sử.",
      "Giấy tờ cá nhân, thư hẹn, thẻ xanh, ID, passport và tài liệu liên quan nên được chuẩn bị gọn trước ngày đi.",
    ],
    sections: [
      {
        heading: "Trước ngày phỏng vấn",
        body: [
          "Hãy ôn theo lịch đều đặn, ngủ đủ, và kiểm tra giấy tờ trước ít nhất một ngày. Đừng để sáng hôm phỏng vấn mới đi tìm passport, thẻ xanh, hoặc thư hẹn.",
          "Nên luyện một buổi mock interview sát thực tế: viên chức hỏi, bạn trả lời ngắn gọn, không giải thích lan man, và tập nghe lại câu hỏi nếu chưa hiểu.",
        ],
      },
      {
        heading: "Trong phòng phỏng vấn",
        body: [
          "Trả lời rõ ràng, vừa đủ, và đúng câu hỏi. Nếu không nghe rõ, bạn có thể xin viên chức lặp lại. Đừng đoán nếu câu hỏi liên quan đến hồ sơ cá nhân quan trọng.",
          "Khi bị run, hãy chậm lại. Viên chức cần biết bạn hiểu và trả lời được, không cần bạn nói quá nhanh hoặc dùng câu phức tạp.",
        ],
      },
      {
        heading: "Sau buổi phỏng vấn",
        body: [
          "Nếu đậu, hãy đọc kỹ hướng dẫn tiếp theo về lễ tuyên thệ. Nếu cần bổ sung giấy tờ hoặc thi lại, làm theo giấy USCIS đưa và chuẩn bị ngay.",
          "Điều quan trọng nhất là không bỏ qua thông báo USCIS. Kiểm tra mail, tài khoản online nếu có, và giữ bản copy mọi giấy tờ.",
        ],
      },
    ],
    checklist: [
      "Mang thư hẹn, thẻ xanh, ID, passport, và giấy tờ liên quan.",
      "Ôn N-400 cá nhân, civics, reading, writing, và speaking.",
      "Đi sớm để có thời gian qua an ninh và ổn định tinh thần.",
      "Giữ tất cả giấy USCIS đưa sau phỏng vấn.",
    ],
    sources: [
      {
        label: "USCIS Naturalization Interview and Test",
        href: "https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test",
      },
      {
        label: "USCIS Study for the Test",
        href: "https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test",
      },
    ],
  },
];

export function getResource(slug: string) {
  return resources.find((resource) => resource.slug === slug);
}
