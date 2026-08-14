// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP ĐẦY ĐỦ 175 CÂU HỎI ĐỘC BẢN CHO LESSON 1 VÀO MẢNG CHUNG (MỖI SECTION 35 CÂU)
window.masterQuizData.push(
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI & ĐÁNH VẦN (35 CÂU)
    // =========================================================================
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Titleist is spelled T-I-T-L-E-I-S-T.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈtaɪ.təl.ɪst/</span> Titleist được đánh vần là T-I-T-L-E-I-S-T.",
        audioText: "Titleist is spelled T - I - T - L - E - I - S - T.",
        options: [{ en: "A. /aɪ/", vi: "Phát âm /aɪ/" }, { en: "B. /iː/", vi: "Phát âm /iː/" }, { en: "C. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "D. /ɛ/", vi: "Phát âm /ɛ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "P as in Papa, B as in Bravo.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/piː æz ɪn ˈpɑː.pə, biː æz ɪn ˈbrɑː.voʊ/</span> P như Papa, B như Bravo.",
        audioText: "P as in Papa, B as in Bravo.",
        options: [{ en: "A. Papa", vi: "Từ Papa (Chữ P)" }, { en: "B. Peter", vi: "Từ Peter" }, { en: "C. Paul", vi: "Từ Paul" }, { en: "D. Pink", vi: "Từ Pink" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Hybrid starts with letter H.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈhaɪ.brɪd stɑːrts wɪð ˈlet.ər eɪtʃ/</span> Từ Hybrid bắt đầu bằng chữ H.",
        audioText: "Hybrid starts with letter H.",
        options: [{ en: "A. /eɪtʃ/", vi: "Phát âm chuẩn /eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "Phát âm /heɪtʃ/" }, { en: "C. /eɪdʒ/", vi: "Phát âm /eɪdʒ/" }, { en: "D. /ætʃ/", vi: "Phát âm /ætʃ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "B as in Bravo, P as in Papa.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/biː æz ɪn ˈbrɑː.voʊ, piː æz ɪn ˈpɑː.pə/</span> B như Bravo, P như Papa.",
        audioText: "B as in Bravo, P as in Papa.",
        options: [{ en: "A. B và P", vi: "Cặp chữ B và P" }, { en: "B. A và Z", vi: "Cặp chữ A và Z" }, { en: "C. K và L", vi: "Cặp chữ K và L" }, { en: "D. H và O", vi: "Cặp chữ H và O" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Good morning! My name is Arthur, spelled A-R-T-H-U-R.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd ˈmɔːr.nɪŋ! maɪ neɪm ɪz ˈɑːr.θər, spelt/</span> Chào buổi sáng! Tên tôi là Arthur, đánh vần là A-R-T-H-U-R.",
        audioText: "Good morning! My name is Arthur, spelled A - R - T - H - U - R.",
        options: [{ en: "A. ARTHUR", vi: "Tên Arthur" }, { en: "B. AUTHOR", vi: "Tên Author" }, { en: "C. ARCHER", vi: "Tên Archer" }, { en: "D. MARK", vi: "Tên Mark" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My name is Harrison, spelled H-A-R-R-I-S-O-N.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz ˈher.ɪ.sən, spelt/</span> Tên tôi là Harrison, đánh vần là H-A-R-R-I-S-O-N.",
        audioText: "My name is Harrison, spelled H - A - R - R - I - S - O - N.",
        options: [{ en: "A. HARRISON", vi: "Tên Harrison" }, { en: "B. HARRIS", vi: "Tên Harris" }, { en: "C. HARISON", vi: "Tên Harison" }, { en: "D. HARRYS", vi: "Tên Harrys" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "Hello Sir, my name is Rose, R-O-S-E.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/həˈloʊ sɜːr, maɪ neɪm ɪz roʊz/</span> Xin chào anh, tên em là Rose, R-O-S-E.",
        audioText: "Hello Sir, my name is Rose, R - O - S - E.",
        displaySentence: "Caddie's name is _______.", translation: "Tên của Caddie là _______.",
        targetWord: "rose", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I am playing a Callaway ball, C-A-L-L-A-W-A-Y.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈpleɪ.ɪŋ ə ˈkæl.ə.weɪ bɔːl/</span> Tôi đang đánh bóng Callaway, C-A-L-L-A-W-A-Y.",
        audioText: "I am playing a Callaway ball, C - A - L - L - A - W - A - Y.",
        options: [{ en: "A. Callaway", vi: "Bóng hãng Callaway" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Srixon", vi: "Bóng hãng Srixon" }, { en: "D. Honma", vi: "Bóng hãng Honma" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "You got a Par on this hole, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ɡɒt ə pɑːr ɒn ðɪs hoʊl, sɜːr/</span> Anh đạt điểm chuẩn (Par) ở hố này rồi thưa anh.",
        audioText: "You got a Par on this hole, sir.",
        options: [
            { en: "A. Mím môi bật hơi mạnh vô thanh", vi: "Mím môi bật hơi mạnh (vô thanh), tránh nhầm với Bar" },
            { en: "B. Đọc rung dây thanh quản", vi: "Đọc rung dây thanh quản (giống âm /b/)" },
            { en: "C. Đọc thành âm /f/", vi: "Đọc kéo dài thành âm /f/" },
            { en: "D. Uốn lưỡi chạm vòm miệng", vi: "Uốn lưỡi chạm vòm miệng trên" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Here is your putter, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪr ɪz jʊər ˈpʌt.ər, sɜːr/</span> Gậy gạt của anh đây thưa anh.",
        audioText: "Here is your putter, Sir.",
        options: [
            { en: "A. Bật hơi mạnh vô thanh ở âm /p/ đầu từ", vi: "Tránh nhầm với Butter" },
            { en: "B. Đọc rung dây thanh quản", vi: "Đọc thành Butter" },
            { en: "C. Đọc thành âm /f/ nhẹ", vi: "Đọc thành Futter" },
            { en: "D. Bỏ qua âm đầu", vi: "Đọc là utter" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Booking number G-8-0.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈbʊk.ɪŋ ˈnʌm.bər ʒiː eɪt oʊ/</span> Số booking G-8-0.",
        audioText: "Booking number G-8-0.",
        options: [{ en: "A. Oh /əʊ/", vi: "Đọc tắt là 'Oh'" }, { en: "B. Zero", vi: "Đọc là Zero" }, { en: "C. Null", vi: "Đọc là Null" }, { en: "D. Nil", vi: "Đọc là Nil" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Welcome to our golf course.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwel.kʌm tuː ˈaʊər ɡɒlf kɔːrs/</span> Chào mừng đến với sân gôn của chúng tôi.",
        audioText: "Welcome to our golf course.",
        options: [{ en: "A. /ɔːr/ dài", vi: "Phát âm nguyên âm /ɔːr/" }, { en: "B. /ɑːr/", vi: "Phát âm nguyên âm /ɑːr/" }, { en: "C. /ʊər/", vi: "Phát âm nguyên âm /ʊər/" }, { en: "D. /ɒ/ ngắn", vi: "Phát âm nguyên âm /ɒ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Welcome to Tee box hole 1.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwel.kʌm tuː tiː bɒks hoʊl wʌn/</span> Chào mừng đến khu phát bóng (Tee box) hố số 1.",
        audioText: "Welcome to Tee box hole 1.",
        options: [{ en: "A. /tiː bɑːks/", vi: "Phát âm chuẩn /tiː bɑːks/" }, { en: "B. /teɪ bɑːks/", vi: "Phát âm /teɪ bɑːks/" }, { en: "C. /tɪ bɒks/", vi: "Phát âm /tɪ bɒks/" }, { en: "D. /tiː bɔːks/", vi: "Phát âm /tiː bɔːks/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "60 degree.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈsɪk.sti dɪˈɡriː wedʒ/</span> Gậy wedge độ loft 60 độ.",
        audioText: "60 degree.",
        options: [{ en: "A. /dʒ/", vi: "Bật phụ âm cuối /dʒ/" }, { en: "B. /ʒ/", vi: "Bật phụ âm /ʒ/" }, { en: "C. /tʃ/", vi: "Bật phụ âm /tʃ/" }, { en: "D. /ɡ/", vi: "Bật phụ âm /ɡ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Here is your Hybrid club.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈhɪr ɪz jʊər ˈhaɪ.brɪd klʌb/</span> Gậy hybrid của anh đây.",
        audioText: "Here is your Hybrid club.",
        options: [{ en: "A. /aɪ/", vi: "Nguyên âm đôi /aɪ/" }, { en: "B. /eɪ/", vi: "Nguyên âm đôi /eɪ/" }, { en: "C. /oʊ/", vi: "Nguyên âm đôi /oʊ/" }, { en: "D. /aʊ/", vi: "Nguyên âm đôi /aʊ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My ball brand is Srixon, S-R-I-X-O-N.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ bɔːl brænd ɪz ˈsrɪk.sən/</span> Hãng bóng của tôi là Srixon, S-R-I-X-O-N.",
        audioText: "My ball brand is Srixon, S - R - I - X - O - N.",
        options: [{ en: "A. Srixon", vi: "Bóng hãng Srixon" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. TaylorMade", vi: "Bóng hãng TaylorMade" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "My name is Mike, spelled M-I-K-E.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz maɪk/</span> Tên tôi là Mike, đánh vần là M-I-K-E.",
        audioText: "My name is Mike, spelled M - I - K - E.",
        displaySentence: "Golfer's name is _______.", translation: "Tên của Golfer là _______.",
        targetWord: "mike", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Mark is spelled M-A-R-K.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/mɑːrk ɪz spelt/</span> Mark được đánh vần là M-A-R-K.",
        audioText: "Mark is spelled M - A - R - K.",
        options: [{ en: "A. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "B. /ɑːr/", vi: "Phát âm /ɑːr/" }, { en: "C. /æ/", vi: "Phát âm /æ/" }, { en: "D. /e/", vi: "Phát âm /e/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "My putter model is P-I-N-G.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ˈpʌt.ər ˈmɒd.əl ɪz pɪŋ/</span> Dòng gậy gạt của tôi là PING, P-I-N-G.",
        audioText: "My putter model is P - I - N - G.",
        displaySentence: "Putter brand is _______.", translation: "Hãng gậy gạt là _______.",
        targetWord: "ping", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter Z in American English.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər ziː ɪn əˈmer.ɪ.kən ˈɪŋ.ɡlɪʃ/</span> Chữ cái Z trong tiếng Anh-Mỹ.",
        audioText: "Letter Z in American English.",
        options: [{ en: "A. /ziː/", vi: "Đọc là Zee (/ziː/)" }, { en: "B. /zed/", vi: "Đọc là Zed (/zed/)" }, { en: "C. /zaɪ/", vi: "Đọc là Zai" }, { en: "D. /zoʊ/", vi: "Đọc là Zo" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Wedge starts with Double U.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwedʒ stɑːrts wɪð ˈdʌb.əl.juː/</span> Từ Wedge bắt đầu bằng chữ Double U.",
        audioText: "Wedge starts with Double U.",
        options: [{ en: "A. Double U /ˈdʌb.əl.juː/", vi: "Đọc là Double U" }, { en: "B. Triple U", vi: "Đọc là Triple U" }, { en: "C. Way", vi: "Đọc là Way" }, { en: "D. Ve", vi: "Đọc là Ve" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter R in English.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər ɑːr ɪn ˈɪŋ.ɡlɪʃ/</span> Chữ R trong tiếng Anh.",
        audioText: "Letter R in English.",
        options: [{ en: "A. Uốn cong đầu lưỡi về phía sau", vi: "Phát âm uốn lưỡi /ɑːr/" }, { en: "B. Rung đầu lưỡi mạnh", vi: "Rung đầu lưỡi giống tiếng Việt" }, { en: "C. Bật môi vô thanh", vi: "Bật môi không uốn lưỡi" }, { en: "D. Đọc giống chữ L", vi: "Đọc giống chữ L" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I am David, D-A-V-I-D.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈdeɪ.vɪd/</span> Tôi là David, D-A-V-I-D.",
        audioText: "I am David, D - A - V - I - D.",
        options: [{ en: "A. DAVID", vi: "Tên David" }, { en: "B. DAVIS", vi: "Tên Davis" }, { en: "C. DANIEL", vi: "Tên Daniel" }, { en: "D. DAVIN", vi: "Tên Davin" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter K sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər keɪ saʊnd/</span> Phát âm chữ K.",
        audioText: "Letter K sound.",
        options: [{ en: "A. /keɪ/", vi: "Phát âm /keɪ/" }, { en: "B. /kaɪ/", vi: "Phát âm /kaɪ/" }, { en: "C. /kiː/", vi: "Phát âm /kiː/" }, { en: "D. /kɛ/", vi: "Phát âm /kɛ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Honma club, H-O-N-M-A.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈhɒn.mɑː klʌb/</span> Gậy Honma, H-O-N-M-A.",
        audioText: "Honma club, H - O - N - M - A.",
        options: [{ en: "A. Honma", vi: "Gậy hãng Honma" }, { en: "B. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "C. Miura", vi: "Gậy hãng Miura" }, { en: "D. Majesty", vi: "Gậy hãng Majesty" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter E sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər iː saʊnd/</span> Phát âm chữ E.",
        audioText: "Letter E sound.",
        options: [{ en: "A. /iː/", vi: "Phát âm /iː/" }, { en: "B. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "C. /e/", vi: "Phát âm /e/" }, { en: "D. /aɪ/", vi: "Phát âm /aɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter J sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər dʒeɪ saʊnd/</span> Phát âm chữ J.",
        audioText: "Letter J sound.",
        options: [{ en: "A. /dʒeɪ/", vi: "Phát âm /dʒeɪ/" }, { en: "B. /ʒeɪ/", vi: "Phát âm /ʒeɪ/" }, { en: "C. /dʒaɪ/", vi: "Phát âm /dʒaɪ/" }, { en: "D. /jeɪ/", vi: "Phát âm /jeɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter G as in Golf.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər dʒiː æz ɪn ɡɒlf/</span> Chữ G như trong Golf.",
        audioText: "Letter G as in Golf.",
        options: [{ en: "A. /dʒiː/ (kết thúc bằng âm iː dài)", vi: "Đọc là /dʒiː/" }, { en: "B. /dʒeɪ/", vi: "Đọc giống chữ J" }, { en: "C. /ɡiː/", vi: "Đọc là Gi" }, { en: "D. /dʒe/", vi: "Đọc là Ge" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My name is John, J-O-H-N.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz dʒɒn/</span> Tên tôi là John, J-O-H-N.",
        audioText: "My name is John, J - O - H - N.",
        options: [{ en: "A. JOHN", vi: "Tên John" }, { en: "B. JACK", vi: "Tên Jack" }, { en: "C. JIM", vi: "Tên Jim" }, { en: "D. JOE", vi: "Tên Joe" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter Y sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər waɪ saʊnd/</span> Phát âm chữ Y.",
        audioText: "Letter Y sound.",
        options: [{ en: "A. /waɪ/", vi: "Phát âm /waɪ/" }, { en: "B. /jaɪ/", vi: "Phát âm /jaɪ/" }, { en: "C. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "D. /yeɪ/", vi: "Phát âm /yeɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My driver is TaylorMade, T-A-Y-L-O-R-M-A-D-E.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ˈdraɪ.vər ɪz ˈteɪ.lər.meɪd/</span> Gậy driver của tôi là TaylorMade, T-A-Y-L-O-R-M-A-D-E.",
        audioText: "My driver is TaylorMade, T - A - Y - L - O - R - M - A - D - E.",
        options: [{ en: "A. TaylorMade", vi: "Gậy hãng TaylorMade" }, { en: "B. Titleist", vi: "Gậy hãng Titleist" }, { en: "C. Callaway", vi: "Gậy hãng Callaway" }, { en: "D. Ping", vi: "Gậy hãng Ping" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "My name is Anna, A-N-N-A.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz ˈæn.ə/</span> Tên tôi là Anna, A-N-N-A.",
        audioText: "My name is Anna, A - N - N - A.",
        displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "anna", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I am Alex, A-L-E-X.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈæl.eks/</span> Tôi là Alex, A-L-E-X.",
        audioText: "I am Alex, A - L - E - X.",
        options: [{ en: "A. ALEX", vi: "Tên Alex" }, { en: "B. ALAN", vi: "Tên Alan" }, { en: "C. ADAM", vi: "Tên Adam" }, { en: "D. ALEC", vi: "Tên Alec" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter X sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər eks saʊnd/</span> Phát âm chữ X.",
        audioText: "Letter X sound.",
        options: [{ en: "A. /eks/", vi: "Phát âm /eks/" }, { en: "B. /egz/", vi: "Phát âm /egz/" }, { en: "C. /z/", vi: "Phát âm /z/" }, { en: "D. /s/", vi: "Phát âm /s/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I play Volvik ball, V-O-L-V-I-K.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ pleɪ ˈvɒl.vɪk bɔːl/</span> Tôi đánh bóng Volvik, V-O-L-V-I-K.",
        audioText: "I play Volvik ball, V - O - L - V - I - K.",
        options: [{ en: "A. Volvik", vi: "Bóng hãng Volvik" }, { en: "B. Vice", vi: "Bóng hãng Vice" }, { en: "C. Wilson", vi: "Bóng hãng Wilson" }, { en: "D. Bridgestone", vi: "Bóng hãng Bridgestone" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "Call me Paul, P-A-U-L.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/kɔːl miː pɔːl/</span> Hãy gọi tôi là Paul, P-A-U-L.",
        audioText: "Call me Paul, P - A - U - L.",
        displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "paul", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },

    // =========================================================================
    // SECTION 1.2: GIỚI THIỆU BẢN THÂN (35 CÂU)
    // =========================================================================
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "Hello Sir, my name is Lan. I am your caddie today.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/həˈloʊ sɜːr maɪ neɪm ɪz læn/</span> Xin chào anh, em tên là Lan. Em là caddie của anh hôm nay.",
        audioText: "Hello Sir, my name is Lan. I am your caddie today.",
        options: [
            { en: "A. Hello Sir, my name is Lan. I am your caddie today.", vi: "Xin chào anh, em tên là Lan. Em là caddie của anh hôm nay." },
            { en: "B. Goodbye Sir, see you again.", vi: "Chào tạm biệt anh, hẹn gặp lại." },
            { en: "C. Welcome to the restaurant.", vi: "Chào mừng đến với nhà hàng." },
            { en: "D. What is your name Sir?", vi: "Anh tên là gì ạ?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "Nice to meet you, Mr. Evans!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs tuː miːt juː ˈmɪs.tər ˈev.ənz/</span> Rất hân hạnh được gặp anh Evans!",
        audioText: "Nice to meet you, Mr. Evans!",
        options: [
            { en: "A. Nice to meet you, Mr. Evans!", vi: "Rất hân hạnh được gặp anh Evans!" },
            { en: "B. I am busy right now.", vi: "Bây giờ em đang bận." },
            { en: "C. Where are you going?", vi: "Anh đang đi đâu thế?" },
            { en: "D. Thank you very much.", vi: "Cảm ơn anh rất nhiều." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I have been working as a caddie for two years.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ hæv biːn ˈwɜːk.ɪŋ æz ə ˈkæd.i fɔːr tuː jɪəz/</span> Em làm công việc caddie được hai năm rồi ạ.",
        audioText: "I have been working as a caddie for two years.",
        options: [
            { en: "A. I am a new golfer.", vi: "Em là người chơi golf mới." },
            { en: "B. I have been working as a caddie for two years.", vi: "Em làm công việc caddie được hai năm rồi ạ." },
            { en: "C. I work in the kitchen.", vi: "Em làm việc trong bếp." },
            { en: "D. I don't like this job.", vi: "Em không thích công việc này." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am happy to assist you during this round.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈhæp.i tuː əˈsɪst juː ˈdjʊə.rɪŋ ðɪs raʊnd/</span> Em rất vui được hỗ trợ anh trong vòng đấu hôm nay.",
        audioText: "I am happy to assist you during this round.",
        options: [
            { en: "A. I am happy to assist you during this round.", vi: "Em rất vui được hỗ trợ anh trong vòng đấu hôm nay." },
            { en: "B. I am tired today.", vi: "Hôm nay em rất mệt." },
            { en: "C. Please play faster.", vi: "Anh hãy đánh nhanh hơn." },
            { en: "D. Do you want to go home?", vi: "Anh có muốn về nhà không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "My caddie number is 123.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ˈkæd.i ˈnʌm.bər ɪz wʌn tuː θriː/</span> Số hiệu caddie của em là 123.",
        audioText: "My caddie number is 1 2 3.",
        options: [
            { en: "A. My caddie number is 123.", vi: "Số hiệu caddie của em là 123." },
            { en: "B. My phone number is 123.", vi: "Số điện thoại của em là 123." },
            { en: "C. I have 123 clubs.", vi: "Em có 123 cây gậy." },
            { en: "D. Today is 123.", vi: "Hôm nay là 123." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I know this golf course very well.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ nəʊ ðɪs ɡɒlf kɔːs ˈver.i wel/</span> Em rất am hiểu và thuộc địa hình sân golf này.",
        audioText: "I know this golf course very well.",
        options: [
            { en: "A. I am lost on the course.", vi: "Em bị lạc trên sân." },
            { en: "B. I know this golf course very well.", vi: "Em rất am hiểu và thuộc địa hình sân golf này." },
            { en: "C. This is my first day here.", vi: "Hôm nay là ngày đầu em làm ở đây." },
            { en: "D. I don't know the rules.", vi: "Em không biết luật." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "Welcome to Golden Sands Golf Resort!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwel.kəm tuː ˈɡəʊl.dən sændz ɡɒlf rɪˈzɔːt/</span> Chào mừng anh đến với Golden Sands Golf Resort!",
        audioText: "Welcome to Golden Sands Golf Resort!",
        options: [
            { en: "A. Welcome to Golden Sands Golf Resort!", vi: "Chào mừng anh đến với Golden Sands Golf Resort!" },
            { en: "B. Welcome to the airport!", vi: "Chào mừng đến sân bay!" },
            { en: "C. Welcome to my house!", vi: "Chào mừng đến nhà em!" },
            { en: "D. Welcome to the hotel!", vi: "Chào mừng đến khách sạn!" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will do my best to support your game today.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl duː maɪ best tuː səˈpɔːt jɔː ɡeɪm təˈdeɪ/</span> Em sẽ cố gắng hết sức để hỗ trợ trận đấu của anh hôm nay ạ.",
        audioText: "I will do my best to support your game today.",
        options: [
            { en: "A. I will do my best to support your game today.", vi: "Em sẽ cố gắng hết sức để hỗ trợ trận đấu của anh hôm nay ạ." },
            { en: "B. I cannot help you today.", vi: "Em không thể giúp anh hôm nay." },
            { en: "C. You should play by yourself.", vi: "Anh nên tự chơi một mình." },
            { en: "D. I want to rest now.", vi: "Em muốn nghỉ ngơi bây giờ." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "Please let me know if you need anything, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz let miː nəʊ ɪf juː niːd ˈen.i.θɪŋ sɜːr/</span> Anh cần gì xin cứ nói cho em biết nhé ạ.",
        audioText: "Please let me know if you need anything, Sir.",
        options: [
            { en: "A. Please let me know if you need anything, Sir.", vi: "Anh cần gì xin cứ nói cho em biết nhé ạ." },
            { en: "B. Don't ask me any questions.", vi: "Đừng hỏi em câu nào." },
            { en: "C. I don't have anything for you.", vi: "Em không có gì cho anh cả." },
            { en: "D. Talk to the manager.", vi: "Hãy nói chuyện với quản lý." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "It's my honor to be your caddie today.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪts maɪ ˈɒn.ər tuː biː jɔː ˈkæd.i təˈdeɪ/</span> Được làm caddie cho anh hôm nay là vinh hạnh của em ạ.",
        audioText: "It's my honor to be your caddie today.",
        options: [
            { en: "A. It's my honor to be your caddie today.", vi: "Được làm caddie cho anh hôm nay là vinh hạnh của em ạ." },
            { en: "B. I am forced to be your caddie.", vi: "Em bị bắt làm caddie cho anh." },
            { en: "C. I am not ready.", vi: "Em chưa sẵn sàng." },
            { en: "D. See you tomorrow.", vi: "Hẹn gặp lại ngày mai." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am from Da Nang, Vietnam.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm frɒm đɑː næŋ vjetˈnæm/</span> Em đến từ Đà Nẵng, Việt Nam.",
        audioText: "I am from Da Nang, Vietnam.",
        options: [
            { en: "A. I am from Da Nang, Vietnam.", vi: "Em đến từ Đà Nẵng, Việt Nam." },
            { en: "B. I am traveling to America.", vi: "Em đang đi du lịch Mỹ." },
            { en: "C. I live in Tokyo.", vi: "Em sống ở Tokyo." },
            { en: "D. I come from London.", vi: "Em đến từ Luân Đôn." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I can speak basic English to communicate with you.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ kæn spiːk ˈbeɪ.sɪk ˈɪŋ.ɡlɪʃ/</span> Em có thể nói tiếng Anh giao tiếp cơ bản với anh ạ.",
        audioText: "I can speak basic English to communicate with you.",
        options: [
            { en: "A. I can speak basic English to communicate with you.", vi: "Em có thể nói tiếng Anh giao tiếp cơ bản với anh ạ." },
            { en: "B. I don't understand English.", vi: "Em không hiểu tiếng Anh." },
            { en: "C. I speak fluent French.", vi: "Em nói thạo tiếng Pháp." },
            { en: "D. Please speak Vietnamese.", vi: "Xin hãy nói tiếng Việt." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am ready when you are, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈred.i wen juː ɑːr sɜːr/</span> Em đã sẵn sàng bất cứ khi nào anh sẵn sàng ạ!",
        audioText: "I am ready when you are, Sir!",
        options: [
            { en: "A. I am ready when you are, Sir!", vi: "Em đã sẵn sàng bất cứ khi nào anh sẵn sàng ạ!" },
            { en: "B. Please wait 30 minutes.", vi: "Xin vui lòng đợi 30 phút." },
            { en: "C. I am not ready yet.", vi: "Em vẫn chưa sẵn sàng." },
            { en: "D. Let's go home now.", vi: "Chúng ta về nhà thôi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will carry your umbrella when it rains.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl ˈkær.i jɔː ʌmˈbrel.ə wen ɪt reɪnz/</span> Em sẽ che ô cho anh khi trời mưa ạ.",
        audioText: "I will carry your umbrella when it rains.",
        options: [
            { en: "A. I will carry your umbrella when it rains.", vi: "Em sẽ che ô cho anh khi trời mưa ạ." },
            { en: "B. I don't have an umbrella.", vi: "Em không có ô." },
            { en: "C. You should hold the umbrella yourself.", vi: "Anh tự cầm ô nhé." },
            { en: "D. Leave the umbrella in the buggy.", vi: "Để ô lại trên xe điện." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "Have a great game today, Mr. Evans!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hæv ə ɡreɪt ɡeɪm təˈdeɪ/</span> Chúc anh Evans có một trận đấu thật tuyệt vời hôm nay ạ!",
        audioText: "Have a great game today, Mr. Evans!",
        options: [
            { en: "A. Have a great game today, Mr. Evans!", vi: "Chúc anh Evans có một trận đấu thật tuyệt vời hôm nay ạ!" },
            { en: "B. Today is a bad day.", vi: "Hôm nay là một ngày tồi tệ." },
            { en: "C. Don't play golf today.", vi: "Đừng chơi golf hôm nay." },
            { en: "D. See you next year.", vi: "Hẹn gặp lại năm sau." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will clean your golf ball before every putt.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl kliːn jɔː ɡɒlf bɔːl bɪˈfɔːr ˈev.ri pʌt/</span> Em sẽ lau sạch bóng cho anh trước mỗi cú gạt ạ.",
        audioText: "I will clean your golf ball before every putt.",
        options: [
            { en: "A. I will clean your golf ball before every putt.", vi: "Em sẽ lau sạch bóng cho anh trước mỗi cú gạt ạ." },
            { en: "B. Clean the ball yourself.", vi: "Anh tự lau bóng đi." },
            { en: "C. Your ball is too dirty to clean.", vi: "Bóng bẩn quá không lau được." },
            { en: "D. Don't touch the ball.", vi: "Đừng chạm vào bóng." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am trained to read green lines for you.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm treɪnd tuː riːd ɡriːn laɪnz fɔːr juː/</span> Em đã được đào tạo bài bản để đọc line green cho anh.",
        audioText: "I am trained to read green lines for you.",
        options: [
            { en: "A. I am trained to read green lines for you.", vi: "Em đã được đào tạo bài bản để đọc line green cho anh." },
            { en: "B. I don't know how to read the green.", vi: "Em không biết đọc line green." },
            { en: "C. Read the green yourself, Sir.", vi: "Anh tự đọc green nhé." },
            { en: "D. The green is too difficult.", vi: "Green này khó quá." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will help you find your ball in the rough.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl help juː faɪnd jɔː bɔːl ɪn ðə rʌf/</span> Em sẽ hỗ trợ anh tìm bóng nếu rơi vào cỏ dày ạ.",
        audioText: "I will help you find your ball in the rough.",
        options: [
            { en: "A. I will help you find your ball in the rough.", vi: "Em sẽ hỗ trợ anh tìm bóng nếu rơi vào cỏ dày ạ." },
            { en: "B. The ball is lost forever.", vi: "Bóng mất luôn rồi." },
            { en: "C. Search for the ball alone.", vi: "Tự đi tìm bóng nhé." },
            { en: "D. Buy new balls in pro shop.", vi: "Vào cửa hàng mua bóng mới đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will keep track of your score accurately.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl kiːp træk əv jɔː skɔːr ˈæk.jə.rət.li/</span> Em sẽ ghi chép số điểm của anh thật chính xác ạ.",
        audioText: "I will keep track of your score accurately.",
        options: [
            { en: "A. I will keep track of your score accurately.", vi: "Em sẽ ghi chép số điểm của anh thật chính xác ạ." },
            { en: "B. I forgot your score.", vi: "Em quên điểm của anh rồi." },
            { en: "C. Scorecard is missing.", vi: "Bảng điểm bị mất rồi." },
            { en: "D. Write your score yourself.", vi: "Anh tự ghi điểm đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am always focused on your game.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈɔːl.weɪz ˈfəʊ.kəst ɒn jɔː ɡeɪm/</span> Em luôn luôn tập trung vào đường bóng và trận đấu của anh ạ.",
        audioText: "I am always focused on your game.",
        options: [
            { en: "A. I am always focused on your game.", vi: "Em luôn luôn tập trung vào đường bóng và trận đấu của anh ạ." },
            { en: "B. I am using my mobile phone.", vi: "Em đang bấm điện thoại." },
            { en: "C. I am talking to other caddies.", vi: "Em đang buôn chuyện với caddie khác." },
            { en: "D. I am sleepy.", vi: "Em buồn ngủ quá." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will take care of all your golf equipment.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl teɪk keər əv ɔːl jɔː ɡɒlf ɪˈkwɪp.mənt/</span> Em sẽ bảo quản cẩn thận toàn bộ gậy và dụng cụ của anh.",
        audioText: "I will take care of all your golf equipment.",
        options: [
            { en: "A. I will take care of all your golf equipment.", vi: "Em sẽ bảo quản cẩn thận toàn bộ gậy và dụng cụ của anh." },
            { en: "B. Be careful with your bag yourself.", vi: "Anh tự giữ đồ đi." },
            { en: "C. Your clubs are too old.", vi: "Gậy của anh cũ quá." },
            { en: "D. Leave your equipment here.", vi: "Vứt dụng cụ ở đây." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "My goal is to make your golf round comfortable.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ɡəʊl ɪz tuː meɪk jɔː ɡɒlf raʊnd ˈkʌm.fə.tə.bəl/</span> Mục tiêu của em là mang lại cho anh một trải nghiệm chơi thoải mái nhất.",
        audioText: "My goal is to make your golf round comfortable.",
        options: [
            { en: "A. My goal is to make your golf round comfortable.", vi: "Mục tiêu của em là mang lại cho anh một trải nghiệm chơi thoải mái nhất." },
            { en: "B. I want to finish as fast as possible.", vi: "Em muốn làm cho nhanh để về." },
            { en: "C. Golf is boring.", vi: "Golf chán lắm." },
            { en: "D. You should play faster.", vi: "Anh nên chơi nhanh lên." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am polite, professional, and punctual.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm pəˈlaɪt prəˈfeʃ.ən.əl ænd ˈpʌŋk.tʃu.əl/</span> Em làm việc lịch sự, chuyên nghiệp và luôn đúng giờ ạ.",
        audioText: "I am polite, professional, and punctual.",
        options: [
            { en: "A. I am polite, professional, and punctual.", vi: "Em làm việc lịch sự, chuyên nghiệp và luôn đúng giờ ạ." },
            { en: "B. I am late today.", vi: "Hôm nay em đến muộn." },
            { en: "C. I am rude.", vi: "Em bất lịch sự." },
            { en: "D. I don't care about time.", vi: "Em không quan tâm giờ giấc." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am honored to serve BRG Group members.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈɒn.ərd tuː sɜːv/</span> Em rất vinh dự được phục vụ các hội viên của Tập đoàn BRG ạ.",
        audioText: "I am honored to serve BRG Group members.",
        options: [
            { en: "A. I am honored to serve BRG Group members.", vi: "Em rất vinh dự được phục vụ các hội viên của Tập đoàn BRG ạ." },
            { en: "B. I don't like BRG Group.", vi: "Em không thích BRG Group." },
            { en: "C. Who is the member?", vi: "Ai là hội viên?" },
            { en: "D. I am not a caddie.", vi: "Em không phải caddie." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will make sure you have all required clubs.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl meɪk ʃʊər juː hæv ɔːr rɪˈkwaɪərd klʌbz/</span> Em sẽ đảm bảo anh có đầy đủ những cây gậy cần thiết trước cú đánh.",
        audioText: "I will make sure you have all required clubs.",
        options: [
            { en: "A. I will make sure you have all required clubs.", vi: "Em sẽ đảm bảo anh có đầy đủ những cây gậy cần thiết trước cú đánh." },
            { en: "B. Select your club yourself.", vi: "Anh tự đi mà chọn gậy." },
            { en: "C. I forgot your driver.", vi: "Em quên gậy driver của anh rồi." },
            { en: "D. You don't need any clubs.", vi: "Anh không cần gậy đâu." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am trained in first aid for emergency cases.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm treɪnd ɪn fɜːst eɪd/</span> Em đã được tập huấn kỹ năng sơ cứu cho các trường hợp khẩn cấp ạ.",
        audioText: "I am trained in first aid for emergency cases.",
        options: [
            { en: "A. I am trained in first aid for emergency cases.", vi: "Em đã được tập huấn kỹ năng sơ cứu cho các trường hợp khẩn cấp ạ." },
            { en: "B. I don't know medical help.", vi: "Em không biết hỗ trợ y tế." },
            { en: "C. Call an ambulance yourself.", vi: "Anh tự gọi xe cấp cứu đi." },
            { en: "D. I am afraid of emergencies.", vi: "Em sợ trường hợp khẩn cấp lắm." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I always keep a positive attitude on course.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ˈɔːl.weɪz kiːp ə ˈpɒz.ə.tɪv ˈæt.ɪ.tʃuːd/</span> Em luôn luôn giữ thái độ tích cực trên sân ạ.",
        audioText: "I always keep a positive attitude on course.",
        options: [
            { en: "A. I always keep a positive attitude on course.", vi: "Em luôn luôn giữ thái độ tích cực trên sân ạ." },
            { en: "B. I am angry today.", vi: "Hôm nay em rất tức giận." },
            { en: "C. I feel sad and negative.", vi: "Em cảm thấy buồn và tiêu cực." },
            { en: "D. Don't talk to me.", vi: "Đừng nói chuyện với em." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will handle your golf bag with great care.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl ˈhæn.dəl jɔː ɡɒlf bæɡ wɪð ɡreɪt keər/</span> Em sẽ nâng niu và bảo quản túi gậy của anh rất cẩn thận.",
        audioText: "I will handle your golf bag with great care.",
        options: [
            { en: "A. I will handle your golf bag with great care.", vi: "Em sẽ nâng niu và bảo quản túi gậy của anh rất cẩn thận." },
            { en: "B. Drop the bag on ground.", vi: "Vứt túi gậy xuống đất." },
            { en: "C. I don't care about your bag.", vi: "Em không quan tâm đến túi gậy." },
            { en: "D. Carry your bag yourself.", vi: "Anh tự xách túi đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I respect all golf etiquette and rules.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ rɪˈspekt ɔːl ɡɒlf ˈet.ɪ.ket ænd ruːlz/</span> Em luôn tuân thủ nguyên tắc ứng xử và luật golf ạ.",
        audioText: "I respect all golf etiquette and rules.",
        options: [
            { en: "A. I respect all golf etiquette and rules.", vi: "Em luôn tuân thủ nguyên tắc ứng xử và luật golf ạ." },
            { en: "B. I break all golf rules.", vi: "Em vi phạm mọi luật golf." },
            { en: "C. Etiquette is not important.", vi: "Văn hóa ứng xử không quan trọng." },
            { en: "D. I don't know golf rules.", vi: "Em không biết luật golf." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am ready to answer any questions about distance.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈred.i tuː ˈɑːn.sər ˈen.i ˈkwes.tʃənz/</span> Em sẵn sàng giải đáp mọi thắc mắc về khoảng cách cho anh.",
        audioText: "I am ready to answer any questions about distance.",
        options: [
            { en: "A. I am ready to answer any questions about distance.", vi: "Em sẵn sàng giải đáp mọi thắc mắc về khoảng cách cho anh." },
            { en: "B. Don't ask me about distance.", vi: "Đừng hỏi em về khoảng cách." },
            { en: "C. I don't know the yardage.", vi: "Em không biết số yard." },
            { en: "D. Guess the distance yourself.", vi: "Anh tự đoán khoảng cách đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will rake the bunker neatly after your shot.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl reɪk ðə ˈbʌŋ.kər ˈniːt.li/</span> Em sẽ cào phẳng bẫy cát gọn gàng sau cú đánh của anh ạ.",
        audioText: "I will rake the bunker neatly after your shot.",
        options: [
            { en: "A. I will rake the bunker neatly after your shot.", vi: "Em sẽ cào phẳng bẫy cát gọn gàng sau cú đánh của anh ạ." },
            { en: "B. Leave the bunker messy.", vi: "Để bẫy cát bừa bộn." },
            { en: "C. Rake the bunker yourself, Sir.", vi: "Anh tự cào cát đi." },
            { en: "D. Don't hit into sand.", vi: "Đừng đánh vào cát." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I will fix your pitch marks on the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪl fɪks jɔː pɪtʃ mɑːks ɒn ðə ɡriːn/</span> Em sẽ sửa lại các vết bóng lún trên mặt green giúp anh ạ.",
        audioText: "I will fix your pitch marks on the green.",
        options: [
            { en: "A. I will fix your pitch marks on the green.", vi: "Em sẽ sửa lại các vết bóng lún trên mặt green giúp anh ạ." },
            { en: "B. Leave pitch marks unfixed.", vi: "Mặc kệ vết lún không sửa." },
            { en: "C. Fix pitch marks yourself.", vi: "Tự đi mà sửa vết bóng lún." },
            { en: "D. Don't land on green.", vi: "Đừng đánh bóng lên green." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I am energetic and passionate about my caddie role.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˌen.əˈdʒet.ɪk ænd ˈpæʃ.ən.ət/</span> Em luôn tràn đầy năng lượng và nhiệt huyết với công việc caddie.",
        audioText: "I am energetic and passionate about my caddie role.",
        options: [
            { en: "A. I am energetic and passionate about my caddie role.", vi: "Em luôn tràn đầy năng lượng và nhiệt huyết với công việc caddie." },
            { en: "B. I am lazy and slow.", vi: "Em lười biếng và chậm chạp." },
            { en: "C. I hate being a caddie.", vi: "Em ghét làm caddie." },
            { en: "D. I want to quit.", vi: "Em muốn nghỉ việc." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "I wish you a very successful and enjoyable round!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ wɪʃ juː ə ˈver.i səkˈses.fəl ænd ɪnˈdʒɔɪ.ə.bəl raʊnd/</span> Em chúc anh có một vòng đấu thật thành công và nhiều niềm vui ạ!",
        audioText: "I wish you a very successful and enjoyable round!",
        options: [
            { en: "A. I wish you a very successful and enjoyable round!", vi: "Em chúc anh có một vòng đấu thật thành công và nhiều niềm vui ạ!" },
            { en: "B. You will play badly today.", vi: "Hôm nay anh sẽ đánh dở." },
            { en: "C. Hope you lose the game.", vi: "Hy vọng anh thua trận." },
            { en: "D. Goodbye, go home now.", vi: "Tạm biệt, về nhà đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Giới thiệu bản thân", type: "mcq",
        title: "Thank you for choosing Golden Sands Golf Resort!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/θæŋk juː fɔːr ˈtʃuː.zɪŋ/</span> Cảm ơn anh đã tin tưởng lựa chọn sân Golden Sands Golf Resort ạ!",
        audioText: "Thank you for choosing Golden Sands Golf Resort!",
        options: [
            { en: "A. Thank you for choosing Golden Sands Golf Resort!", vi: "Cảm ơn anh đã tin tưởng lựa chọn sân Golden Sands Golf Resort ạ!" },
            { en: "B. Why did you choose this course?", vi: "Tại sao anh chọn sân này?" },
            { en: "C. Don't come here again.", vi: "Đừng quay lại đây nữa." },
            { en: "D. The course is closed today.", vi: "Hôm nay sân đóng cửa." }
        ],
        correct: 0
    },

    // =========================================================================
    // SECTION 1.3: SỐ ĐẾM (35 CÂU)
    // =========================================================================
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "It is 150 yards to the pin, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz wʌn ˈhʌn.drəd ænd ˈfɪf.ti jɑːdz tuː ðə pɪn sɜːr/</span> Từ vị trí này tới cờ còn 150 yard nữa anh ạ.",
        audioText: "It is 150 yards to the pin, Sir.",
        options: [
            { en: "A. 150 yards", vi: "Khoảng cách 150 yard" },
            { en: "B. 115 yards", vi: "Khoảng cách 115 yard" },
            { en: "C. 50 yards", vi: "Khoảng cách 50 yard" },
            { en: "D. 500 yards", vi: "Khoảng cách 500 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Your ball is 200 yards away from the tee box.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl ɪz tuː ˈhʌn.drəd jɑːdz əˈweɪ/</span> Quả bóng của anh đang cách khu phát bóng 200 yard.",
        audioText: "Your ball is 200 yards away from the tee box.",
        options: [
            { en: "A. 200 yards", vi: "Khoảng cách 200 yard" },
            { en: "B. 20 yards", vi: "Khoảng cách 20 yard" },
            { en: "C. 2000 yards", vi: "Khoảng cách 2000 yard" },
            { en: "D. 120 yards", vi: "Khoảng cách 120 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "There are 14 clubs in your golf bag.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðeər ɑːr ˌfɔːˈtiːn klʌbz ɪn jɔː ɡɒlf bæɡ/</span> Có đầy đủ 14 cây gậy trong túi gậy của anh.",
        audioText: "There are 14 clubs in your golf bag.",
        options: [
            { en: "A. 14 clubs", vi: "Số lượng 14 cây gậy" },
            { en: "B. 40 clubs", vi: "Số lượng 40 cây gậy" },
            { en: "C. 4 clubs", vi: "Số lượng 4 cây gậy" },
            { en: "D. 12 clubs", vi: "Số lượng 12 cây gậy" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "This hole is Par 4, length 410 yards.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðɪs həʊl ɪz pɑːr fɔːr leŋθ fɔː hʌn.drəd ænd ten jɑːdz/</span> Hố này là Par 4, chiều dài 410 yard.",
        audioText: "This hole is Par 4, length 410 yards.",
        options: [
            { en: "A. Par 4, 410 yards", vi: "Hố Par 4, dài 410 yard" },
            { en: "B. Par 3, 140 yards", vi: "Hố Par 3, dài 140 yard" },
            { en: "C. Par 5, 510 yards", vi: "Hố Par 5, dài 510 yard" },
            { en: "D. Par 4, 401 yards", vi: "Hố Par 4, dài 401 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You have 3 putts on this green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv θriː pʌts ɒn ðɪs ɡriːn/</span> Anh tốn 3 cú gạt bóng trên green này.",
        audioText: "You have 3 putts on this green.",
        options: [
            { en: "A. 3 putts", vi: "Số lượng 3 cú gạt" },
            { en: "B. 13 putts", vi: "Số lượng 13 cú gạt" },
            { en: "C. 30 putts", vi: "Số lượng 30 cú gạt" },
            { en: "D. 1 putt", vi: "Số lượng 1 cú gạt" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The front bunker is 120 yards away.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə frʌnt ˈbʌŋ.kər ɪz wʌn.hʌn.drəd ænd ˈtwen.ti jɑːdz əˈweɪ/</span> Bẫy cát phía trước cách vị trí này 120 yard.",
        audioText: "The front bunker is 120 yards away.",
        options: [
            { en: "A. 120 yards", vi: "Khoảng cách 120 yard" },
            { en: "B. 210 yards", vi: "Khoảng cách 210 yard" },
            { en: "C. 102 yards", vi: "Khoảng cách 102 yard" },
            { en: "D. 20 yards", vi: "Khoảng cách 20 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You need 80 yards to carry the water hazard.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː niːd ˈeɪ.ti jɑːdz tuː ˈkær.i ðə ˈwɔː.tər ˈhæz.əd/</span> Anh cần đánh bóng qua bẫy nước tối thiểu 80 yard.",
        audioText: "You need 80 yards to carry the water hazard.",
        options: [
            { en: "A. 80 yards", vi: "Khoảng cách 80 yard" },
            { en: "B. 18 yards", vi: "Khoảng cách 18 yard" },
            { en: "C. 800 yards", vi: "Khoảng cách 800 yard" },
            { en: "D. 88 yards", vi: "Khoảng cách 88 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "It's 18 holes in total for today's match.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪts ˌeɪˈtiːn həʊlz ɪn ˈtəʊ.təl/</span> Tổng cộng hôm nay chúng ta chơi 18 hố ạ.",
        audioText: "It's 18 holes in total for today's match.",
        options: [
            { en: "A. 18 holes", vi: "Số lượng 18 hố" },
            { en: "B. 80 holes", vi: "Số lượng 80 hố" },
            { en: "C. 8 holes", vi: "Số lượng 8 hố" },
            { en: "D. 9 holes", vi: "Số lượng 9 hố" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Your total score for front 9 is 42.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː ˈtəʊ.təl skɔːr fɔːr frʌnt naɪn ɪz ˈfɔː.ti tuː/</span> Tổng điểm 9 hố đầu của anh là 42 gậy ạ.",
        audioText: "Your total score for front 9 is 42.",
        options: [
            { en: "A. 42 strokes", vi: "Điểm số 42 gậy" },
            { en: "B. 24 strokes", vi: "Điểm số 24 gậy" },
            { en: "C. 52 strokes", vi: "Điểm số 52 gậy" },
            { en: "D. 32 strokes", vi: "Điểm số 32 gậy" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "We have 5 minutes left before tee time.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wiː hæv faɪv ˈmɪn.ɪts left bɪˈfɔːr tiː taɪm/</span> Chúng ta còn 5 phút nữa tới giờ xuất phát ạ.",
        audioText: "We have 5 minutes left before tee time.",
        options: [
            { en: "A. 5 minutes", vi: "Thời gian 5 phút" },
            { en: "B. 15 minutes", vi: "Thời gian 15 phút" },
            { en: "C. 50 minutes", vi: "Thời gian 50 phút" },
            { en: "D. 1 minute", vi: "Thời gian 1 phút" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Please give me iron number 7.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz ɡɪv miː ˈaɪ.ən ˈnʌm.bər ˈsev.ən/</span> Lấy giúp tôi cây gậy sắt số 7.",
        audioText: "Please give me iron number 7.",
        options: [
            { en: "A. Iron 7", vi: "Gậy sắt số 7" },
            { en: "B. Iron 6", vi: "Gậy sắt số 6" },
            { en: "C. Iron 8", vi: "Gậy sắt số 8" },
            { en: "D. Iron 9", vi: "Gậy sắt số 9" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You hit 250 yards with driver.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hɪt tuː.hʌn.drəd ænd ˈfɪf.ti jɑːdz/</span> Anh đánh phát bóng bằng driver được 250 yard.",
        audioText: "You hit 250 yards with driver.",
        options: [
            { en: "A. 250 yards", vi: "Khoảng cách 250 yard" },
            { en: "B. 215 yards", vi: "Khoảng cách 215 yard" },
            { en: "C. 150 yards", vi: "Khoảng cách 150 yard" },
            { en: "D. 350 yards", vi: "Khoảng cách 350 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The green speed today is 9.5.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ɡriːn spiːd təˈdeɪ ɪz naɪn pɔɪnt faɪv/</span> Tốc độ green hôm nay đạt mốc 9.5.",
        audioText: "The green speed today is 9.5.",
        options: [
            { en: "A. 9.5", vi: "Tốc độ 9.5" },
            { en: "B. 8.5", vi: "Tốc độ 8.5" },
            { en: "C. 10.5", vi: "Tốc độ 10.5" },
            { en: "D. 9.0", vi: "Tốc độ 9.0" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You are player number 1 in this group.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ɑːr ˈpleɪ.ər ˈnʌm.bər wʌn/</span> Anh là người phát bóng vị trí số 1 trong nhóm.",
        audioText: "You are player number 1 in this group.",
        options: [
            { en: "A. Number 1", vi: "Vị trí số 1" },
            { en: "B. Number 2", vi: "Vị trí số 2" },
            { en: "C. Number 3", vi: "Vị trí số 3" },
            { en: "D. Number 4", vi: "Vị trí số 4" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The handicap for this hole is 2.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ˈhæn.dɪ.kæp fɔːr ðɪs həʊl ɪz tuː/</span> Độ khó handicap của hố này là 2.",
        audioText: "The handicap for this hole is 2.",
        options: [
            { en: "A. Index 2", vi: "Handicap index 2" },
            { en: "B. Index 12", vi: "Handicap index 12" },
            { en: "C. Index 20", vi: "Handicap index 20" },
            { en: "D. Index 1", vi: "Handicap index 1" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "There are 4 players in our flight.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðeər ɑːr fɔːr ˈpleɪ.ərz ɪn aʊər flaɪt/</span> Có 4 người chơi trong nhóm của chúng ta.",
        audioText: "There are 4 players in our flight.",
        options: [
            { en: "A. 4 players", vi: "Số lượng 4 người chơi" },
            { en: "B. 3 players", vi: "Số lượng 3 người chơi" },
            { en: "C. 5 players", vi: "Số lượng 5 người chơi" },
            { en: "D. 2 players", vi: "Số lượng 2 người chơi" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You get 1 penalty stroke for water hazard.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ɡet wʌn ˈpen.əl.ti strəʊk/</span> Anh nhận 1 gậy phạt vì bóng rơi vào bẫy nước.",
        audioText: "You get 1 penalty stroke for water hazard.",
        options: [
            { en: "A. 1 penalty stroke", vi: "Phạt 1 gậy" },
            { en: "B. 2 penalty strokes", vi: "Phạt 2 gậy" },
            { en: "C. No penalty", vi: "Không phạt gậy" },
            { en: "D. 3 penalty strokes", vi: "Phạt 3 gậy" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "It is 60 yards pitch shot.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz ˈsɪk.sti jɑːdz pɪtʃ ʃɒt/</span> Đây là cú pitch bóng cự cự ngắn 60 yard.",
        audioText: "It is 60 yards pitch shot.",
        options: [
            { en: "A. 60 yards", vi: "Khoảng cách 60 yard" },
            { en: "B. 16 yards", vi: "Khoảng cách 16 yard" },
            { en: "C. 600 yards", vi: "Khoảng cách 600 yard" },
            { en: "D. 6 yards", vi: "Khoảng cách 6 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The hole is Par 3, 165 yards.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə həʊl ɪz pɑːr θriː wʌn.hʌn.drəd ænd ˈsɪk.sti faɪv jɑːdz/</span> Hố này là Par 3, dài 165 yard.",
        audioText: "The hole is Par 3, 165 yards.",
        options: [
            { en: "A. Par 3, 165 yards", vi: "Par 3, dài 165 yard" },
            { en: "B. Par 3, 156 yards", vi: "Par 3, dài 156 yard" },
            { en: "C. Par 4, 165 yards", vi: "Par 4, dài 165 yard" },
            { en: "D. Par 3, 265 yards", vi: "Par 3, dài 265 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Your ball is 10 feet from the hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl ɪz ten fiːt frɒm ðə həʊl/</span> Bóng của anh cách cờ 10 feet (khoảng 3 mét).",
        audioText: "Your ball is 10 feet from the hole.",
        options: [
            { en: "A. 10 feet", vi: "Khoảng cách 10 feet" },
            { en: "B. 10 yards", vi: "Khoảng cách 10 yard" },
            { en: "C. 10 meters", vi: "Khoảng cách 10 mét" },
            { en: "D. 1 foot", vi: "Khoảng cách 1 foot" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You have 2 balls left in your bag.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv tuː bɔːlz left ɪn jɔː bæɡ/</span> Anh còn 2 quả bóng dự phòng trong túi.",
        audioText: "You have 2 balls left in your bag.",
        options: [
            { en: "A. 2 balls", vi: "Số lượng 2 quả bóng" },
            { en: "B. 12 balls", vi: "Số lượng 12 quả bóng" },
            { en: "C. 20 balls", vi: "Số lượng 20 quả bóng" },
            { en: "D. No balls", vi: "Không còn quả bóng nào" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The wind speed is 15 miles per hour.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə wɪnd spiːd ɪz ˌfɪfˈtiːn maɪlz pɜːr aʊər/</span> Tốc độ gió khoảng 15 dặm một giờ.",
        audioText: "The wind speed is 15 miles per hour.",
        options: [
            { en: "A. 15 mph", vi: "Tốc độ gió 15 mph" },
            { en: "B. 50 mph", vi: "Tốc độ gió 50 mph" },
            { en: "C. 5 mph", vi: "Tốc độ gió 5 mph" },
            { en: "D. 25 mph", vi: "Tốc độ gió 25 mph" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You played 72 strokes today, par round!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː pleɪd ˈsev.ən.ti tuː strəʊks/</span> Anh đánh 72 gậy hôm nay, đạt mốc điểm Par!",
        audioText: "You played 72 strokes today, par round!",
        options: [
            { en: "A. 72 strokes", vi: "Tổng điểm 72 gậy" },
            { en: "B. 27 strokes", vi: "Tổng điểm 27 gậy" },
            { en: "C. 82 strokes", vi: "Tổng điểm 82 gậy" },
            { en: "D. 62 strokes", vi: "Tổng điểm 62 gậy" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Drop the ball within 1 club-length.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/drɒp ðə bɔːl wɪˈðɪn wʌn klʌb leŋθ/</span> Thả bóng trong khoảng cách 1 chiều dài gậy.",
        audioText: "Drop the ball within 1 club-length.",
        options: [
            { en: "A. 1 club-length", vi: "Phạm vi 1 chiều dài gậy" },
            { en: "B. 2 club-lengths", vi: "Phạm vi 2 chiều dài gậy" },
            { en: "C. 3 club-lengths", vi: "Phạm vi 3 chiều dài gậy" },
            { en: "D. Half club-length", vi: "Nửa chiều dài gậy" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Drop the ball within 2 club-lengths for lateral relief.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/drɒp ðə bɔːl wɪˈðɪn tuː klʌb leŋθs/</span> Thả bóng trong phạm vi 2 chiều dài gậy giải thoát.",
        audioText: "Drop the ball within 2 club-lengths for lateral relief.",
        options: [
            { en: "A. 2 club-lengths", vi: "Phạm vi 2 chiều dài gậy" },
            { en: "B. 1 club-length", vi: "Phạm vi 1 chiều dài gậy" },
            { en: "C. 4 club-lengths", vi: "Phạm vi 4 chiều dài gậy" },
            { en: "D. Unlimited", vi: "Thả tự do không giới hạn" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Your group is on hole number 18.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː ɡruːp ɪz ɒn həʊl ˈnʌm.bər ˌeɪˈtiːn/</span> Nhóm của anh đang thi đấu tại hố số 18.",
        audioText: "Your group is on hole number 18.",
        options: [
            { en: "A. Hole 18", vi: "Hố số 18" },
            { en: "B. Hole 8", vi: "Hố số 8" },
            { en: "C. Hole 10", vi: "Hố số 10" },
            { en: "D. Hole 9", vi: "Hố số 9" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Please carry 3 clubs for the next shot.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz ˈkær.i θriː klʌbz/</span> Xin hãy mang 3 cây gậy tới vị trí bóng.",
        audioText: "Please carry 3 clubs for the next shot.",
        options: [
            { en: "A. 3 clubs", vi: "Số lượng 3 cây gậy" },
            { en: "B. 13 clubs", vi: "Số lượng 13 cây gậy" },
            { en: "C. 1 club", vi: "Số lượng 1 cây gậy" },
            { en: "D. All clubs", vi: "Tất cả các cây gậy" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The green is 30 yards wide.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ɡriːn ɪz ˈθɜː.ti jɑːdz waɪd/</span> Chiều rộng của green là khoảng 30 yard.",
        audioText: "The green is 30 yards wide.",
        options: [
            { en: "A. 30 yards", vi: "Bề rộng 30 yard" },
            { en: "B. 13 yards", vi: "Bề rộng 13 yard" },
            { en: "C. 300 yards", vi: "Bề rộng 300 yard" },
            { en: "D. 3 yards", vi: "Bề rộng 3 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You are 10 yards short of the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ɑːr ten jɑːdz ʃɔːt əv ðə ɡriːn/</span> Bóng của anh còn thiếu 10 yard nữa mới tới green.",
        audioText: "You are 10 yards short of the green.",
        options: [
            { en: "A. 10 yards short", vi: "Thiếu 10 yard" },
            { en: "B. 100 yards short", vi: "Thiếu 100 yard" },
            { en: "C. 20 yards short", vi: "Thiếu 20 yard" },
            { en: "D. On the green", vi: "Đã lên green" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "It is 170 yards to carry the bunker.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz wʌn.hʌn.drəd ænd ˈsev.ən.ti jɑːdz/</span> Cần đánh 170 yard để bóng vượt qua hố cát.",
        audioText: "It is 170 yards to carry the bunker.",
        options: [
            { en: "A. 170 yards", vi: "Khoảng cách 170 yard" },
            { en: "B. 117 yards", vi: "Khoảng cách 117 yard" },
            { en: "C. 70 yards", vi: "Khoảng cách 70 yard" },
            { en: "D. 270 yards", vi: "Khoảng cách 270 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "We played 9 holes in 2 hours.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wiː pleɪd naɪn həʊlz ɪn tuː aʊərz/</span> Chúng ta đã đánh 9 hố trong 2 tiếng đồng hồ.",
        audioText: "We played 9 holes in 2 hours.",
        options: [
            { en: "A. 9 holes in 2 hours", vi: "9 hố trong 2 tiếng" },
            { en: "B. 18 holes in 2 hours", vi: "18 hố trong 2 tiếng" },
            { en: "C. 9 holes in 4 hours", vi: "9 hố trong 4 tiếng" },
            { en: "D. 18 holes in 5 hours", vi: "18 hố trong 5 tiếng" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "The temperature is 32 degrees Celsius today.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ˈtem.prə.tʃər ɪz ˈθɜː.ti tuː dɪˈɡriːz/</span> Nhiệt độ ngoài sân hôm nay là 32 độ C.",
        audioText: "The temperature is 32 degrees Celsius today.",
        options: [
            { en: "A. 32 degrees", vi: "Nhiệt độ 32 độ" },
            { en: "B. 23 degrees", vi: "Nhiệt độ 23 độ" },
            { en: "C. 42 degrees", vi: "Nhiệt độ 42 độ" },
            { en: "D. 30 degrees", vi: "Nhiệt độ 30 độ" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "You are 5 yards past the pin.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ɑːr faɪv jɑːdz pɑːst ðə pɪn/</span> Bóng của anh đi thừa qua cờ 5 yard.",
        audioText: "You are 5 yards past the pin.",
        options: [
            { en: "A. 5 yards past", vi: "Thừa qua cờ 5 yard" },
            { en: "B. 15 yards past", vi: "Thừa qua cờ 15 yard" },
            { en: "C. 50 yards past", vi: "Thừa qua cờ 50 yard" },
            { en: "D. 5 yards short", vi: "Thiếu 5 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "There are 2 bunkers guarding the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðeər ɑːr tuː ˈbʌŋ.kərz ɡɑːd.ɪŋ ðə ɡriːn/</span> Có 2 bẫy cát bảo vệ xung quanh green.",
        audioText: "There are 2 bunkers guarding the green.",
        options: [
            { en: "A. 2 bunkers", vi: "Số lượng 2 bẫy cát" },
            { en: "B. 12 bunkers", vi: "Số lượng 12 bẫy cát" },
            { en: "C. 3 bunkers", vi: "Số lượng 3 bẫy cát" },
            { en: "D. No bunkers", vi: "Không có bẫy cát" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Số đếm", type: "mcq",
        title: "Your tee time is 8:30 AM.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː tiː taɪm ɪz eɪt ˈθɜː.ti eɪ em/</span> Giờ xuất phát của anh là 8 giờ 30 phút sáng.",
        audioText: "Your tee time is 8:30 AM.",
        options: [
            { en: "A. 8:30 AM", vi: "Thời gian 8:30 sáng" },
            { en: "B. 8:13 AM", vi: "Thời gian 8:13 sáng" },
            { en: "C. 9:30 AM", vi: "Thời gian 9:30 sáng" },
            { en: "D. 7:30 AM", vi: "Thời gian 7:30 sáng" }
        ],
        correct: 0
    },

    // ====================================================================
    // SECTION 1.4: SỞ THÍCH (35 CÂU)
    // ====================================================================
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you play golf every weekend, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː pleɪ ɡɒlf ˈev.ri ˌwiːkˈend sɜːr/</span> Anh có hay chơi golf vào mỗi cuối tuần không ạ?",
        audioText: "Do you play golf every weekend, Sir?",
        options: [
            { en: "A. Do you play golf every weekend, Sir?", vi: "Anh có hay chơi golf vào mỗi cuối tuần không ạ?" },
            { en: "B. Do you like playing tennis?", vi: "Anh có thích chơi quần vợt không?" },
            { en: "C. Are you free this afternoon?", vi: "Buổi chiều nay anh có rảnh không?" },
            { en: "D. How long have you been driving?", vi: "Anh lái xe được bao lâu rồi?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Golf is my favorite sport to relax after work.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡɒlf ɪz maɪ ˈfeɪ.vər.ət spɔːt tuː rɪˈlæks ˈɑːf.tər wɜːk/</span> Golf là môn thể thao yêu thích của tôi để thư giãn sau giờ làm việc.",
        audioText: "Golf is my favorite sport to relax after work.",
        options: [
            { en: "A. Swimming is my favorite sport.", vi: "Bơi lội là môn thể thao yêu thích của tôi." },
            { en: "B. Golf is my favorite sport to relax after work.", vi: "Golf là môn thể thao yêu thích của tôi để thư giãn sau giờ làm việc." },
            { en: "C. I prefer watching football.", vi: "Tôi thích xem bóng đá hơn." },
            { en: "D. I don't like outdoor activities.", vi: "Tôi không thích các hoạt động ngoài trời." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "How often do you practice at the driving range?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/haʊ ˈɒf.ən duː juː ˈpræk.tɪs æt ðə ˈdraɪ.vɪŋ reɪndʒ/</span> Bao lâu thì anh đi tập ở sân tập phát bóng một lần ạ?",
        audioText: "How often do you practice at the driving range?",
        options: [
            { en: "A. How often do you practice at the driving range?", vi: "Bao lâu thì anh đi tập ở sân tập phát bóng một lần ạ?" },
            { en: "B. What club do you want to practice with?", vi: "Anh muốn tập với cây gậy nào?" },
            { en: "C. Where do you buy your golf clubs?", vi: "Anh mua gậy đánh golf ở đâu?" },
            { en: "D. Do you know the rules of golf?", vi: "Anh có biết luật golf không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I enjoy playing golf on sunny mornings.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ɪnˈdʒɔɪ ˈpleɪ.ɪŋ ɡɒlf ɒn ˈsʌn.i ˈmɔː.nɪŋz/</span> Tôi rất thích chơi golf vào những buổi sáng nắng đẹp.",
        audioText: "I enjoy playing golf on sunny mornings.",
        options: [
            { en: "A. I hate playing golf in the heat.", vi: "Tôi ghét chơi golf dưới trời nắng nóng." },
            { en: "B. I enjoy playing golf on sunny mornings.", vi: "Tôi rất thích chơi golf vào những buổi sáng nắng đẹp." },
            { en: "C. I only play golf when it rains.", vi: "Tôi chỉ chơi golf khi trời mưa." },
            { en: "D. I prefer playing indoor games.", vi: "Tôi thích chơi các trò chơi trong nhà hơn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "What other hobbies do you have besides golf, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wɒt ˈʌð.ər ˈhɒb.iz duː juː hæv bɪˈsaɪdz ɡɒlf sɜːr/</span> Ngoài golf ra thì anh còn có sở thích nào khác không ạ?",
        audioText: "What other hobbies do you have besides golf, Sir?",
        options: [
            { en: "A. What other hobbies do you have besides golf, Sir?", vi: "Ngoài golf ra thì anh còn có sở thích nào khác không ạ?" },
            { en: "B. How long have you been playing golf?", vi: "Anh chơi golf được bao lâu rồi?" },
            { en: "C. Do you want to try another golf course?", vi: "Anh có muốn thử sân golf khác không?" },
            { en: "D. What is your favorite golf brand?", vi: "Thương hiệu golf yêu thích của anh là gì?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I like traveling and playing different golf courses.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ laɪk ˈtræv.əl.ɪŋ ænd ˈpleɪ.ɪŋ ˈdɪf.ər.ənt ɡɒlf kɔːs.ɪz/</span> Tôi thích đi du lịch và trải nghiệm nhiều sân golf khác nhau.",
        audioText: "I like traveling and playing different golf courses.",
        options: [
            { en: "A. I stay at home all weekend.", vi: "Tôi ở nhà suốt cả cuối tuần." },
            { en: "B. I like traveling and playing different golf courses.", vi: "Tôi thích đi du lịch và trải nghiệm nhiều sân golf khác nhau." },
            { en: "C. I only play at this local course.", vi: "Tôi chỉ chơi duy nhất ở sân địa phương này." },
            { en: "D. I don't like traveling at all.", vi: "Tôi không thích đi du lịch chút nào." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Is golf popular in your country, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪz ɡɒlf ˈpɒp.jə.lər ɪn jɔː ˈkʌn.tri sɜːr/</span> Bộ môn golf có phổ biến ở đất nước của anh không ạ?",
        audioText: "Is golf popular in your country, Sir?",
        options: [
            { en: "A. Is golf popular in your country, Sir?", vi: "Bộ môn golf có phổ biến ở đất nước của anh không ạ?" },
            { en: "B. Is it going to rain in your country?", vi: "Ở đất nước anh trời có sắp mưa không?" },
            { en: "C. Where are you traveling to next?", vi: "Anh sắp đi du lịch ở đâu tiếp theo?" },
            { en: "D. How many golf courses are there in your city?", vi: "Thành phố anh có bao nhiêu sân golf?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I love practicing my short game on weekends.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ lʌv ˈpræk.tɪs.ɪŋ maɪ ʃɔːt ɡeɪm ɒn ˌwiːkˈendz/</span> Tôi rất thích tập luyện kỹ năng short game vào cuối tuần.",
        audioText: "I love practicing my short game on weekends.",
        options: [
            { en: "A. I prefer hitting long drives only.", vi: "Tôi thích tập đánh bóng xa hơn." },
            { en: "B. I love practicing my short game on weekends.", vi: "Tôi rất thích tập luyện kỹ năng short game vào cuối tuần." },
            { en: "C. I never practice putting.", vi: "Tôi không bao giờ tập gạt bóng." },
            { en: "D. I dislike spending time on golf.", vi: "Tôi không thích dành thời gian cho golf." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you like playing golf with your friends or colleagues?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk ˈpleɪ.ɪŋ ɡɒlf wɪð jɔː frendz ɔːr ˈkɒl.iːɡz/</span> Anh thích đi đánh golf cùng bạn bè hay đồng nghiệp hơn ạ?",
        audioText: "Do you like playing golf with your friends or colleagues?",
        options: [
            { en: "A. Do you like playing golf with your friends or colleagues?", vi: "Anh thích đi đánh golf cùng bạn bè hay đồng nghiệp hơn ạ?" },
            { en: "B. Are you playing in a big tournament today?", vi: "Hôm nay anh có tham gia giải đấu lớn nào không?" },
            { en: "C. Who is your caddie today?", vi: "Caddie của anh hôm nay là ai?" },
            { en: "D. Do you need a golf cart?", vi: "Anh có cần dùng xe điện không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I enjoy watching professional golf tournaments on TV.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ɪnˈdʒɔɪ ˈwɒtʃ.ɪŋ prəˈfeʃ.ən.əl ɡɒlf ˈtʊə.nə.mənts ɒn ˌtiːˈviː/</span> Tôi rất thích xem các giải golf chuyên nghiệp trên truyền hình.",
        audioText: "I enjoy watching professional golf tournaments on TV.",
        options: [
            { en: "A. I never watch sports on television.", vi: "Tôi không bao giờ xem thể thao trên TV." },
            { en: "B. I enjoy watching professional golf tournaments on TV.", vi: "Tôi rất thích xem các giải golf chuyên nghiệp trên truyền hình." },
            { en: "C. I only watch football matches.", vi: "Tôi chỉ xem các trận đấu bóng đá." },
            { en: "D. I prefer playing games on my phone.", vi: "Tôi thích chơi game trên điện thoại hơn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Who is your favorite professional golfer, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/huː ɪz jɔː ˈfeɪ.vər.ət prəˈfeʃ.ən.əl ˈɡɒl.fər sɜːr/</span> Golfer chuyên nghiệp yêu thích nhất của anh là ai ạ?",
        audioText: "Who is your favorite professional golfer, Sir?",
        options: [
            { en: "A. Who is your favorite professional golfer, Sir?", vi: "Golfer chuyên nghiệp yêu thích nhất của anh là ai ạ?" },
            { en: "B. Who is playing in your flight today?", vi: "Ai đang chơi cùng nhóm với anh hôm nay?" },
            { en: "C. What is the name of your golf club?", vi: "Tên bộ gậy của anh là gì?" },
            { en: "D. Do you know the golf manager?", vi: "Anh có quen quản lý sân golf không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "My hobby is collecting unique golf ball markers.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ˈhɒb.i ɪz kəˈlek.tɪŋ juːˈniːk ɡɒlf bɔːl ˈmɑː.kərz/</span> Sở thích của tôi là sưu tầm các đồng xu mark bóng độc lạ.",
        audioText: "My hobby is collecting unique golf ball markers.",
        options: [
            { en: "A. I lose my ball markers very often.", vi: "Tôi rất hay làm mất mark bóng." },
            { en: "B. My hobby is collecting unique golf ball markers.", vi: "Sở thích của tôi là sưu tầm các đồng xu mark bóng độc lạ." },
            { en: "C. I don't use ball markers when putting.", vi: "Tôi không dùng mark bóng khi gạt." },
            { en: "D. I buy cheap golf balls only.", vi: "Tôi chỉ mua bóng golf rẻ tiền." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you like playing golf early in the morning?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk ˈpleɪ.ɪŋ ɡɒlf ˈɜː.li ɪn ðə ˈmɔː.nɪŋ/</span> Anh có thích đánh golf vào sáng sớm không ạ?",
        audioText: "Do you like playing golf early in the morning?",
        options: [
            { en: "A. Do you like playing golf early in the morning?", vi: "Anh có thích đánh golf vào sáng sớm không ạ?" },
            { en: "B. Why do you play golf so late?", vi: "Tại sao anh lại chơi golf muộn thế?" },
            { en: "C. Did you wake up early today?", vi: "Hôm nay anh dậy sớm đúng không?" },
            { en: "D. Is the morning weather cold?", vi: "Thời tiết buổi sáng có lạnh không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Playing golf helps me stay healthy and active.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈpleɪ.ɪŋ ɡɒlf helps miː steɪ ˈhel.θi ænd ˈæk.tɪv/</span> Chơi golf giúp tôi rèn luyện sức khỏe và năng động hơn.",
        audioText: "Playing golf helps me stay healthy and active.",
        options: [
            { en: "A. Golf makes me feel very tired.", vi: "Golf làm tôi cảm thấy rất mệt mỏi." },
            { en: "B. Playing golf helps me stay healthy and active.", vi: "Chơi golf giúp tôi rèn luyện sức khỏe và năng động hơn." },
            { en: "C. I don't think golf is good for health.", vi: "Tôi không nghĩ golf tốt cho sức khỏe." },
            { en: "D. I prefer sitting at home.", vi: "Tôi thích ngồi ở nhà hơn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you enjoy walking the course or using a golf cart?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː ɪnˈdʒɔɪ ˈwɔː.kɪŋ ðə kɔːs ɔːr ˈjuː.zɪŋ ə ɡɒlf kɑːt/</span> Anh thích đi bộ trải nghiệm sân hơn hay đi xe điện ạ?",
        audioText: "Do you enjoy walking the course or using a golf cart?",
        options: [
            { en: "A. Do you enjoy walking the course or using a golf cart?", vi: "Anh thích đi bộ trải nghiệm sân hơn hay đi xe điện ạ?" },
            { en: "B. Is the golf cart clean and safe?", vi: "Xe điện có sạch sẽ và an toàn không?" },
            { en: "C. How many carts do we need today?", vi: "Chúng ta cần bao nhiêu xe điện hôm nay?" },
            { en: "D. Can I drive the cart for you?", vi: "Em lái xe điện giúp anh nhé?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I prefer walking when the weather is cool and breezy.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ prɪˈfɜːr ˈwɔː.kɪŋ wen ðə ˈweð.ər ɪz kuːl ænd ˈbriː.zi/</span> Tôi thích đi bộ hơn khi thời tiết mát mẻ và có gió nhẹ.",
        audioText: "I prefer walking when the weather is cool and breezy.",
        options: [
            { en: "A. I always drive the buggy regardless of weather.", vi: "Lúc nào tôi cũng đi xe điện bất kể thời tiết." },
            { en: "B. I prefer walking when the weather is cool and breezy.", vi: "Tôi thích đi bộ hơn khi thời tiết mát mẻ và có gió nhẹ." },
            { en: "C. I never walk on the golf course.", vi: "Tôi không bao giờ đi bộ trên sân golf." },
            { en: "D. I dislike cool breeze.", vi: "Tôi không thích gió mát." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "How long have you had a passion for golf, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/haʊ lɒŋ hæv juː hæd ə ˈpæʃ.ən fɔːr ɡɒlf sɜːr/</span> Anh đã có niềm đam mê với bộ môn golf này lâu chưa ạ?",
        audioText: "How long have you had a passion for golf, Sir?",
        options: [
            { en: "A. How long have you had a passion for golf, Sir?", vi: "Anh đã có niềm đam mê với bộ môn golf này lâu chưa ạ?" },
            { en: "B. How much did you pay for this golf bag?", vi: "Anh mua túi gậy này bao nhiêu tiền?" },
            { en: "C. When will we finish 18 holes?", vi: "Khi nào chúng ta sẽ đánh xong 18 hố?" },
            { en: "D. Is golf your primary job?", vi: "Golf có phải là nghề chính của anh không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I started playing golf five years ago in Hanoi.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ˈstɑː.tɪd ˈpleɪ.ɪŋ ɡɒlf faɪv jɪəz əˈɡəʊ ɪn hæˈnɔɪ/</span> Tôi bắt đầu tập chơi golf từ năm năm trước ở Hà Nội.",
        audioText: "I started playing golf five years ago in Hanoi.",
        options: [
            { en: "A. I just started playing golf yesterday.", vi: "Tôi mới bắt đầu chơi golf ngày hôm qua." },
            { en: "B. I started playing golf five years ago in Hanoi.", vi: "Tôi bắt đầu tập chơi golf từ năm năm trước ở Hà Nội." },
            { en: "C. I have played golf for 20 years in Da Nang.", vi: "Tôi đã chơi golf 20 năm ở Đà Nẵng." },
            { en: "D. I will learn golf next month.", vi: "Tôi sẽ học chơi golf vào tháng sau." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you like buying new golf apparel and equipment?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk ˈbaɪ.ɪŋ njuː ɡɒlf əˈpær.əl ænd ɪˈkwɪp.mənt/</span> Anh có thích mua sắm thời trang và trang thiết bị golf mới không ạ?",
        audioText: "Do you like buying new golf apparel and equipment?",
        options: [
            { en: "A. Do you like buying new golf apparel and equipment?", vi: "Anh có thích mua sắm thời trang và trang thiết bị golf mới không ạ?" },
            { en: "B. Where is the nearest pro shop?", vi: "Cửa hàng đồ golf gần nhất ở đâu?" },
            { en: "C. Is your golf bag heavy?", vi: "Túi gậy của anh có nặng không?" },
            { en: "D. Do you wear golf shoes at home?", vi: "Anh có đi giày golf ở nhà không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I enjoy trying out different brands of golf drivers.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ɪnˈdʒɔɪ ˈtraɪ.ɪŋ aʊt ˈdɪf.ər.ənt brændz əv ɡɒlf ˈdraɪ.vərz/</span> Tôi rất thích trải nghiệm nhiều thương hiệu gậy driver khác nhau.",
        audioText: "I enjoy trying out different brands of golf drivers.",
        options: [
            { en: "A. I only use one driver forever.", vi: "Tôi chỉ dùng duy nhất 1 gậy driver mãi mãi." },
            { en: "B. I enjoy trying out different brands of golf drivers.", vi: "Tôi rất thích trải nghiệm nhiều thương hiệu gậy driver khác nhau." },
            { en: "C. Drivers are not necessary for golf.", vi: "Gậy driver không cần thiết khi đánh golf." },
            { en: "D. I don't know how to swing a driver.", vi: "Tôi không biết swing gậy driver." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "What is your favorite resort golf course in Vietnam?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wɒt ɪz jɔː ˈfeɪ.vər.ət rɪˈzɔːt ɡɒlf kɔːs ɪn ˌvjetˈnæm/</span> Sân golf nghỉ dưỡng yêu thích nhất của anh ở Việt Nam là sân nào ạ?",
        audioText: "What is your favorite resort golf course in Vietnam?",
        options: [
            { en: "A. What is your favorite resort golf course in Vietnam?", vi: "Sân golf nghỉ dưỡng yêu thích nhất của anh ở Việt Nam là sân nào ạ?" },
            { en: "B. How many resorts are there in Vietnam?", vi: "Ở Việt Nam có bao nhiêu khu nghỉ dưỡng?" },
            { en: "C. Do you want to stay at our resort hotel?", vi: "Anh có muốn ở lại khách sạn resort của chúng em không?" },
            { en: "D. Is golf expensive in Vietnam?", vi: "Chơi golf ở Việt Nam có đắt không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Golden Sands Golf Resort is my absolute favorite.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈɡəʊl.dən sændz ɡɒlf rɪˈzɔːt ɪz maɪ ˈæb.sə.luːt ˈfeɪ.vər.ət/</span> Golden Sands Golf Resort tuyệt đối là sân golf yêu thích nhất của tôi.",
        audioText: "Golden Sands Golf Resort is my absolute favorite.",
        options: [
            { en: "A. I don't like Golden Sands Resort.", vi: "Tôi không thích Golden Sands Resort." },
            { en: "B. Golden Sands Golf Resort is my absolute favorite.", vi: "Golden Sands Golf Resort tuyệt đối là sân golf yêu thích nhất của tôi." },
            { en: "C. I have never heard of Golden Sands.", vi: "Tôi chưa bao giờ nghe nói đến Golden Sands." },
            { en: "D. All golf courses look the same to me.", vi: "Tất cả các sân golf đối với tôi đều giống nhau." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you like participating in amateur golf tournaments?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk pɑːˈtɪs.ɪ.peɪt.ɪŋ ɪn ˈæm.ə.tər ɡɒlf ˈtʊə.nə.mənts/</span> Anh có thích tham gia các giải đấu golf phong trào không ạ?",
        audioText: "Do you like participating in amateur golf tournaments?",
        options: [
            { en: "A. Do you like participating in amateur golf tournaments?", vi: "Anh có thích tham gia các giải đấu golf phong trào không ạ?" },
            { en: "B. Did you win the first prize today?", vi: "Hôm nay anh có giành giải nhất không?" },
            { en: "C. How much is the tournament entry fee?", vi: "Phí tham dự giải đấu là bao nhiêu?" },
            { en: "D. Can I register for the tournament?", vi: "Em đăng ký tham gia giải đấu được không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I enjoy the competitive atmosphere of golf events.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ɪnˈdʒɔɪ ðə kəmˈpet.ə.tɪv ˈæt.məs.fɪər əv ɡɒlf ɪˈvents/</span> Tôi rất thích bầu không khí cạnh tranh nảy lửa của các sự kiện golf.",
        audioText: "I enjoy the competitive atmosphere of golf events.",
        options: [
            { en: "A. I get nervous during golf competitions.", vi: "Tôi rất lo lắng trong các cuộc thi golf." },
            { en: "B. I enjoy the competitive atmosphere of golf events.", vi: "Tôi rất thích bầu không khí cạnh tranh nảy lửa của các sự kiện golf." },
            { en: "C. I hate loud crowds during games.", vi: "Tôi ghét đám đông ồn ào khi chơi." },
            { en: "D. I prefer playing alone without pressure.", vi: "Tôi thích chơi một mình không áp lực hơn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you like taking photos on the golf course, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk ˈteɪk.ɪŋ ˈfəʊ.təʊz ɒn ðə ɡɒlf kɔːs sɜːr/</span> Anh có thích chụp ảnh kỷ niệm trên sân golf không ạ?",
        audioText: "Do you like taking photos on the golf course, Sir?",
        options: [
            { en: "A. Do you like taking photos on the golf course, Sir?", vi: "Anh có thích chụp ảnh kỷ niệm trên sân golf không ạ?" },
            { en: "B. Can you take a photo for me?", vi: "Anh chụp hộ em một bức ảnh được không?" },
            { en: "C. Where is your camera?", vi: "Máy ảnh của anh để ở đâu?" },
            { en: "D. Is taking photos allowed here?", vi: "Ở đây có cho phép chụp ảnh không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "The scenery here is beautiful; I want to take a picture.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ˈsiː.nər.i hɪər ɪz ˈbjuː.tɪ.fəl aɪ wɒnt tuː teɪk ə ˈpɪk.tʃər/</span> Phong cảnh ở đây đẹp quá, tôi muốn chụp một tấm hình.",
        audioText: "The scenery here is beautiful; I want to take a picture.",
        options: [
            { en: "A. The landscape is quite plain.", vi: "Cảnh quan ở đây khá bình thường." },
            { en: "B. The scenery here is beautiful; I want to take a picture.", vi: "Phong cảnh ở đây đẹp quá, tôi muốn chụp một tấm hình." },
            { en: "C. I don't care about the view.", vi: "Tôi không quan tâm đến cảnh đẹp." },
            { en: "D. Please don't take photos of me.", vi: "Xin vui lòng đừng chụp ảnh tôi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you enjoy playing golf under the afternoon sun?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː ɪnˈdʒɔɪ ˈpleɪ.ɪŋ ɡɒlf ˈʌn.dər ðə ˌɑːf.təˈnuːn sʌn/</span> Anh có thích chơi golf dưới ánh nắng buổi chiều không ạ?",
        audioText: "Do you enjoy playing golf under the afternoon sun?",
        options: [
            { en: "A. Do you enjoy playing golf under the afternoon sun?", vi: "Anh có thích chơi golf dưới ánh nắng buổi chiều không ạ?" },
            { en: "B. Is it going to be hot this afternoon?", vi: "Chiều nay trời có hot nắng không?" },
            { en: "C. What time does the sun set?", vi: "Mặt trời lặn lúc mấy giờ?" },
            { en: "D. Do you have a sunhat?", vi: "Anh có mang mũ chống nắng không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I prefer playing in the late afternoon to watch sunset.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ prɪˈfɜːr ˈpleɪ.ɪŋ ɪn ðə leɪt ˌɑːf.təˈnuːn tuː wɒtʃ ˈsʌn.set/</span> Tôi thích chơi vào chiều muộn hơn để ngắm hoàng hôn.",
        audioText: "I prefer playing in the late afternoon to watch sunset.",
        options: [
            { en: "A. I dislike playing late in the evening.", vi: "Tôi không thích chơi muộn vào buổi tối." },
            { en: "B. I prefer playing in the late afternoon to watch sunset.", vi: "Tôi thích chơi vào chiều muộn hơn để ngắm hoàng hôn." },
            { en: "C. Sunset is too dark for playing golf.", vi: "Hoàng hôn tối quá không chơi golf được." },
            { en: "D. I only play early at dawn.", vi: "Tôi chỉ chơi duy nhất lúc hửng sáng." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you like listening to music while driving the cart?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk ˈlɪs.ən.ɪŋ tuː ˈmjuː.zɪk waɪl ˈdraɪv.ɪŋ ðə kɑːt/</span> Anh có thích nghe nhạc thư giãn khi ngồi xe điện không ạ?",
        audioText: "Do you like listening to music while driving the cart?",
        options: [
            { en: "A. Do you like listening to music while driving the cart?", vi: "Anh có thích nghe nhạc thư giãn khi ngồi xe điện không ạ?" },
            { en: "B. Can you turn off the music please?", vi: "Anh tắt nhạc giúp em được không ạ?" },
            { en: "C. What kind of music is playing?", vi: "Đang phát thể loại nhạc gì vậy?" },
            { en: "D. Is it too noisy on the course?", vi: "Trên sân có quá ồn ào không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Soft music helps me stay calm before hitting.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/sɒft ˈmjuː.zɪk helps miː steɪ kɑːm bɪˈfɔːr ˈhɪt.ɪŋ/</span> Âm nhạc nhẹ nhàng giúp tôi giữ bình tĩnh trước khi đánh bóng.",
        audioText: "Soft music helps me stay calm before hitting.",
        options: [
            { en: "A. Loud music makes me hit better.", vi: "Nhạc sôi động làm tôi đánh tốt hơn." },
            { en: "B. Soft music helps me stay calm before hitting.", vi: "Âm nhạc nhẹ nhàng giúp tôi giữ bình tĩnh trước khi đánh bóng." },
            { en: "C. Music distracts my concentration.", vi: "Âm nhạc làm tôi xao nhãng sự tập trung." },
            { en: "D. I don't listen to music at all.", vi: "Tôi hoàn toàn không nghe nhạc." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Do you enjoy trying local food after playing 18 holes?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː ɪnˈdʒɔɪ ˈtraɪ.ɪŋ ˈləʊ.kəl fuːd ˈɑːf.tər ˈpleɪ.ɪŋ eɪˈtiːn həʊlz/</span> Anh có thích thưởng thức đặc sản địa phương sau khi chơi xong 18 hố không ạ?",
        audioText: "Do you enjoy trying local food after playing 18 holes?",
        options: [
            { en: "A. Do you enjoy trying local food after playing 18 holes?", vi: "Anh có thích thưởng thức đặc sản địa phương sau khi chơi xong 18 hố không ạ?" },
            { en: "B. Where is the clubhouse restaurant?", vi: "Nhà hàng nhà câu lạc bộ ở đâu?" },
            { en: "C. What time do you eat lunch?", vi: "Mấy giờ anh dùng bữa trưa?" },
            { en: "D. Are you feeling hungry right now?", vi: "Anh có đang cảm thấy đói bụng không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I love having a cold beer and seafood at the clubhouse.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ lʌv ˈhæv.ɪŋ ə kəʊld bɪər ænd ˈsiː.fuːd æt ðə ˈklʌb.haʊs/</span> Tôi rất thích uống bia lạnh và ăn hải sản tại nhà câu lạc bộ.",
        audioText: "I love having a cold beer and seafood at the clubhouse.",
        options: [
            { en: "A. I don't eat seafood or drink alcohol.", vi: "Tôi không ăn hải sản cũng không uống rượu bia." },
            { en: "B. I love having a cold beer and seafood at the clubhouse.", vi: "Tôi rất thích uống bia lạnh và ăn hải sản tại nhà câu lạc bộ." },
            { en: "C. I go straight home after playing.", vi: "Tôi về thẳng nhà ngay sau khi chơi." },
            { en: "D. Clubhouse food is not good.", vi: "Đồ ăn ở nhà câu lạc bộ không ngon." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Is golf your favorite way to socialize with business partners?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪz ɡɒlf jɔː ˈfeɪ.vər.ət weɪ tuː ˈsəʊ.ʃəl.aɪz wɪð ˈbɪz.nɪs ˈpɑːt.nərz/</span> Golf có phải là cách yêu thích nhất của anh để giao lưu với đối tác kinh doanh không ạ?",
        audioText: "Is golf your favorite way to socialize with business partners?",
        options: [
            { en: "A. Is golf your favorite way to socialize with business partners?", vi: "Golf có phải là cách yêu thích nhất của anh để giao lưu với đối tác kinh doanh không ạ?" },
            { en: "B. Do you do business on the telephone?", vi: "Anh có làm ăn qua điện thoại không?" },
            { en: "C. Who is your business partner today?", vi: "Đối tác kinh doanh của anh hôm nay là ai?" },
            { en: "D. How often do you hold business meetings?", vi: "Bao lâu anh tổ chức họp kinh doanh một lần?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "Yes, golf helps us build strong trust and friendship.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jes ɡɒlf helps ʌs bɪld strɒŋ trʌst ænd ˈfrend.ʃɪp/</span> Vâng, chơi golf giúp chúng tôi xây dựng sự tin tưởng và tình bạn khăng khít.",
        audioText: "Yes, golf helps us build strong trust and friendship.",
        options: [
            { en: "A. Golf causes many arguments.", vi: "Golf gây ra nhiều sự tranh cãi." },
            { en: "B. Yes, golf helps us build strong trust and friendship.", vi: "Vâng, chơi golf giúp chúng tôi xây dựng sự tin tưởng và tình bạn khăng khít." },
            { en: "C. I prefer doing business in office.", vi: "Tôi thích bàn công việc ở văn phòng hơn." },
            { en: "D. Trust is not important in golf.", vi: "Sự tin tưởng không quan trọng trong golf." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Sở thích", type: "mcq",
        title: "I hope you have a wonderful and memorable golf round today, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ həʊp juː hæv ə ˈwʌn.də.fəl ænd ˈmem.ər.ə.bəl ɡɒlf raʊnd təˈdeɪ sɜːr/</span> Em chúc anh có một vòng golf thật tuyệt vời và nhiều kỷ niệm đẹp hôm nay ạ!",
        audioText: "I hope you have a wonderful and memorable golf round today, Sir!",
        options: [
            { en: "A. I hope you have a wonderful and memorable golf round today, Sir!", vi: "Em chúc anh có một vòng golf thật tuyệt vời và nhiều kỷ niệm đẹp hôm nay ạ!" },
            { en: "B. Hope you finish the game quickly.", vi: "Hy vọng anh kết thúc trận đấu thật nhanh." },
            { en: "C. Don't forget your personal belongings.", vi: "Đừng quên đồ đạc cá nhân của anh." },
            { en: "D. Please pay your tip now.", vi: "Xin hãy trả tiền tip ngay." }
        ],
        correct: 0
    },

    // ====================================================================
    // SECTION 1.5: THỰC HÀNH & LUYỆN TẬP (35 CÂU)
    // ====================================================================
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Good morning Sir, welcome to Golden Sands Golf Resort.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd ˈmɔː.nɪŋ sɜːr ˈwel.kəm tuː ˈɡəʊl.dən sændz ɡɒlf rɪˈzɔːt/</span> Chào buổi sáng anh, chào mừng anh đến với Golden Sands Golf Resort.",
        audioText: "Good morning Sir, welcome to Golden Sands Golf Resort.",
        options: [
            { en: "A. Good afternoon Sir, see you again.", vi: "Chào buổi chiều anh, hẹn gặp lại." },
            { en: "B. Good morning Sir, welcome to Golden Sands Golf Resort.", vi: "Chào buổi sáng anh, chào mừng anh đến với Golden Sands Golf Resort." },
            { en: "C. Goodbye Sir, have a safe trip home.", vi: "Tạm biệt anh, chúc anh về thượng lộ bình an." },
            { en: "D. Welcome to the locker room.", vi: "Chào mừng anh đến phòng thay đồ." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "My name is Van, I am very happy to be your caddie today.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz væn aɪ æm ˈver.i ˈhæp.i tuː biː jɔː ˈkæd.i təˈdeɪ/</span> Em tên là Vân, em rất hân hạnh được phục vụ caddie cho anh hôm nay.",
        audioText: "My name is Van, I am very happy to be your caddie today.",
        options: [
            { en: "A. I am busy with another bag.", vi: "Em đang bận với túi gậy khác." },
            { en: "B. My name is Van, I am very happy to be your caddie today.", vi: "Em tên là Vân, em rất hân hạnh được phục vụ caddie cho anh hôm nay." },
            { en: "C. What is your name Sir?", vi: "Tên anh là gì ạ?" },
            { en: "D. I want to change player.", vi: "Em muốn đổi người chơi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Let me help you carry your golf bag, Sir. It's my duty.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/let miː help juː ˈkær.i jɔː ɡɒlf bæɡ sɜːr ɪts maɪ ˈdjuː.ti/</span> Để em xách túi gậy giúp anh ạ. Đó là trách nhiệm của em.",
        audioText: "Let me help you carry your golf bag, Sir. It's my duty.",
        options: [
            { en: "A. Let me help you carry your golf bag, Sir. It's my duty.", vi: "Để em xách túi gậy giúp anh ạ. Đó là trách nhiệm của em." },
            { en: "B. Carry your bag yourself.", vi: "Anh tự xách túi gậy đi." },
            { en: "C. Your bag is too heavy.", vi: "Túi gậy của anh nặng quá." },
            { en: "D. Leave the bag in the car.", vi: "Để túi gậy lại trong xe đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "This is your golf bag receipt, please keep it to check out.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðɪs ɪz jɔː ɡɒlf bæɡ rɪˈsiːt pliːz kiːp ɪt tuː tʃek aʊt/</span> Đây là thẻ gửi túi gậy của anh, xin anh giữ cẩn thận để nhận lại gậy khi về ạ.",
        audioText: "This is your golf bag receipt, please keep it to check out.",
        options: [
            { en: "A. Please throw away this receipt.", vi: "Xin anh vứt tấm thẻ này đi." },
            { en: "B. This is your golf bag receipt, please keep it to check out.", vi: "Đây là thẻ gửi túi gậy của anh, xin anh giữ cẩn thận để nhận lại gậy khi về ạ." },
            { en: "C. Give me your money now.", vi: "Đưa tiền cho em ngay." },
            { en: "D. Here is your scorecard.", vi: "Đây là bảng ghi điểm của anh." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "This way please, Sir, to check in at reception.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðɪs weɪ pliːz sɜːr tuː tʃek ɪn æt rɪˈsep.ʃən/</span> Mời anh đi hướng này để làm thủ tục check-in tại quầy lễ tân ạ.",
        audioText: "This way please, Sir, to check in at reception.",
        options: [
            { en: "A. Go straight to the restaurant.", vi: "Đi thẳng tới nhà hàng." },
            { en: "B. This way please, Sir, to check in at reception.", vi: "Mời anh đi hướng này để làm thủ tục check-in tại quầy lễ tân ạ." },
            { en: "C. Turn back to the parking lot.", vi: "Quay lại bãi đỗ xe." },
            { en: "D. Wait in the golf cart.", vi: "Đợi ở trên xe điện." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Your golf bag has 13 clubs, 1 cover, and 1 umbrella.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː ɡɒlf bæɡ hæz ˈθɜː.tiːn klʌbz wʌn ˈkʌv.ər ænd wʌn ʌmˈbrel.ə/</span> Trong túi của anh có tổng cộng 13 cây gậy, 1 bao bọc và 1 cái ô ạ.",
        audioText: "Your golf bag has 13 clubs, 1 cover, and 1 umbrella.",
        options: [
            { en: "A. Your golf bag has 13 clubs, 1 cover, and 1 umbrella.", vi: "Trong túi của anh có tổng cộng 13 cây gậy, 1 bao bọc và 1 cái ô ạ." },
            { en: "B. You lost all your golf clubs.", vi: "Anh làm mất hết gậy rồi." },
            { en: "C. There are 15 clubs in your bag.", vi: "Có 15 cây gậy trong túi anh." },
            { en: "D. You forgot your umbrella at home.", vi: "Anh quên ô ở nhà rồi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Please check your clubs and sign the bag tag, Mr. Evans.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz tʃek jɔː klʌbz ænd saɪn ðə bæɡ tæɡ ˈmɪs.tər ˈev.ənz/</span> Xin anh Evans kiểm tra lại số gậy và ký nhận vào thẻ túi gậy giúp em ạ.",
        audioText: "Please check your clubs and sign the bag tag, Mr. Evans.",
        options: [
            { en: "A. Please throw away the bag tag.", vi: "Xin anh vứt thẻ túi gậy đi." },
            { en: "B. Please check your clubs and sign the bag tag, Mr. Evans.", vi: "Xin anh Evans kiểm tra lại số gậy và ký nhận vào thẻ túi gậy giúp em ạ." },
            { en: "C. Sign your name on the golf ball.", vi: "Ký tên anh lên quả bóng golf." },
            { en: "D. Put your signature on the scorecard.", vi: "Ký tên vào bảng điểm." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "May I borrow your locker key to check the number, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/meɪ aɪ ˈbɒr.əʊ jɔː ˈlɒk.ər kiː tuː tʃek ðə ˈnʌm.bər sɜːr/</span> Em xin phép mượn chìa khóa tủ đồ của anh để đối chiếu số thẻ được không ạ?",
        audioText: "May I borrow your locker key to check the number, Sir?",
        options: [
            { en: "A. May I borrow your locker key to check the number, Sir?", vi: "Em xin phép mượn chìa khóa tủ đồ của anh để đối chiếu số thẻ được không ạ?" },
            { en: "B. Give me your personal wallet.", vi: "Đưa ví cá nhân cho em." },
            { en: "C. Where did you leave your room key?", vi: "Anh để chìa khóa phòng ở đâu?" },
            { en: "D. Do you need a new locker?", vi: "Anh có cần tủ đồ mới không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Here is your locker key back. Thank you so much, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪər ɪz jɔː ˈlɒk.ər kiː bæk θæŋk juː səʊ mʌtʃ sɜːr/</span> Em xin gửi lại chìa khóa tủ đồ cho anh ạ. Em cảm ơn anh nhiều.",
        audioText: "Here is your locker key back. Thank you so much, Sir.",
        options: [
            { en: "A. I lost your locker key.", vi: "Em làm mất chìa khóa tủ đồ của anh rồi." },
            { en: "B. Here is your locker key back. Thank you so much, Sir.", vi: "Em xin gửi lại chìa khóa tủ đồ cho anh ạ. Em cảm ơn anh nhiều." },
            { en: "C. Keep the key yourself.", vi: "Anh tự giữ chìa khóa đi." },
            { en: "D. Leave the key on the table.", vi: "Để chìa khóa trên bàn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Would you like to go to our Driving Range for warm up first?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk tuː ɡəʊ tuː aʊər ˈdraɪ.vɪŋ reɪndʒ fɔːr wɔːm ʌp fɜːst/</span> Anh có muốn ra sân tập đánh bóng của chúng em để khởi động trước không ạ?",
        audioText: "Would you like to go to our Driving Range for warm up first?",
        options: [
            { en: "A. Go directly to tee box hole 1.", vi: "Ra thẳng khu vực phát bóng hố 1." },
            { en: "B. Would you like to go to our Driving Range for warm up first?", vi: "Anh có muốn ra sân tập đánh bóng của chúng em để khởi động trước không ạ?" },
            { en: "C. Your tee time was 10 minutes ago.", vi: "Giờ xuất phát của anh đã qua 10 phút trước." },
            { en: "D. Please wait in the restaurant.", vi: "Xin vui lòng đợi ở nhà hàng." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "This is hole number 10, par 4, 408 yards, index 10.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðɪs ɪz həʊl ˈnʌm.bər ten pɑːr fɔːr fɔː.hʌn.drəd ænd eɪt jɑːdz ˈɪn.deks ten/</span> Đây là hố số 10, par 4, độ dài 408 yard, độ khó index 10 ạ.",
        audioText: "This is hole number 10, par 4, 408 yards, index 10.",
        options: [
            { en: "A. This is hole number 10, par 4, 408 yards, index 10.", vi: "Đây là hố số 10, par 4, độ dài 408 yard, độ khó index 10 ạ." },
            { en: "B. This is hole number 1, par 3, 150 yards.", vi: "Đây là hố số 1, par 3, độ dài 150 yard." },
            { en: "C. We are playing on hole number 18.", vi: "Chúng ta đang chơi ở hố số 18." },
            { en: "D. This hole is par 5, 500 yards.", vi: "Hố này là par 5, độ dài 500 yard." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Out of Bounds is on the right side of this hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aʊt əv baʊndz ɪz ɒn ðə raɪt saɪd əv ðɪs həʊl/</span> Ranh giới ngoài biên (OB) nằm ở phía bên phải của hố này ạ.",
        audioText: "Out of Bounds is on the right side of this hole.",
        options: [
            { en: "A. The fairway is very wide and safe.", vi: "Đường fairway rất rộng và an toàn." },
            { en: "B. Out of Bounds is on the right side of this hole.", vi: "Ranh giới ngoài biên (OB) nằm ở phía bên phải của hố này ạ." },
            { en: "C. Water hazard is on the left.", vi: "Bẫy nước nằm ở bên trái." },
            { en: "D. There are no hazards on this hole.", vi: "Không có chướng ngại vật nào trên hố này." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "You should hit straight to the aim pole, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ʃʊd hɪt streɪt tuː ðə eɪm pəʊl sɜːr/</span> Anh nên đánh phát bóng thẳng về phía cọc định hướng ạ.",
        audioText: "You should hit straight to the aim pole, Sir.",
        options: [
            { en: "A. Aim directly for the water.", vi: "Nhắm thẳng vào bẫy nước." },
            { en: "B. You should hit straight to the aim pole, Sir.", vi: "Anh nên đánh phát bóng thẳng về phía cọc định hướng ạ." },
            { en: "C. Hit the ball over the trees.", vi: "Đánh bóng vượt qua rặng cây." },
            { en: "D. Lay up before the fairway.", vi: "Đánh ngắn trước đường fairway." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Good shot, Sir! Your ball is right on the fairway!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd ʃɒt sɜːr jɔː bɔːl ɪz raɪt ɒn ðə ˈfeə.weɪ/</span> Đánh tốt lắm anh ơi! Bóng nằm rất đẹp ngay trên fairway rồi ạ!",
        audioText: "Good shot, Sir! Your ball is right on the fairway!",
        options: [
            { en: "A. Your ball went into Out of Bounds.", vi: "Bóng của anh đi ra ngoài biên rồi." },
            { en: "B. Good shot, Sir! Your ball is right on the fairway!", vi: "Đánh tốt lắm anh ơi! Bóng nằm rất đẹp ngay trên fairway rồi ạ!" },
            { en: "C. Your ball is deep inside the bunker.", vi: "Bóng của anh nằm sâu trong hố cát." },
            { en: "D. Your ball is lost in the lake.", vi: "Bóng của anh bị mất dưới hồ nước." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Your ball flies to the left bunker of the fairway.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl flaɪz tuː ðə left ˈbʌŋ.kər əv ðə ˈfeə.weɪ/</span> Bóng của anh bay vào hố cát bên trái đường fairway rồi ạ.",
        audioText: "Your ball flies to the left bunker of the fairway.",
        options: [
            { en: "A. Your ball is on top of the green.", vi: "Bóng của anh nằm trên đỉnh green." },
            { en: "B. Your ball flies to the left bunker of the fairway.", vi: "Bóng của anh bay vào hố cát bên trái đường fairway rồi ạ." },
            { en: "C. Your ball is safe on grass.", vi: "Bóng của anh an toàn trên mặt cỏ." },
            { en: "D. Beautiful drive straight down the middle.", vi: "Cú drive tuyệt đẹp thẳng giữa đường." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Your ball is about 150 yards to the pin, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl ɪz əˈbaʊt wʌn.hʌn.drəd ænd ˈfɪf.ti jɑːdz tuː ðə pɪn sɜːr/</span> Từ vị trí bóng tới cờ còn khoảng 150 yard nữa anh ạ.",
        audioText: "Your ball is about 150 yards to the pin, Sir.",
        options: [
            { en: "A. Your ball is about 150 yards to the pin, Sir.", vi: "Từ vị trí bóng tới cờ còn khoảng 150 yard nữa anh ạ." },
            { en: "B. The distance is 300 yards.", vi: "Khoảng cách là 300 yard." },
            { en: "C. You are 50 yards away from tee box.", vi: "Anh đang cách khu vực phát bóng 50 yard." },
            { en: "D. The pin is only 10 yards away.", vi: "Cờ chỉ cách 10 yard thôi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "It's crosswind from left to right, please aim slightly left.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪts ˈkrɒs.wɪnd frɒm left tuː raɪt pliːz eɪm ˈslaɪt.li left/</span> Đang có gió tạt ngang từ trái sang phải, anh nhắm lệch trái một chút nhé.",
        audioText: "It's crosswind from left to right, please aim slightly left.",
        options: [
            { en: "A. The wind is completely calm.", vi: "Trời hoàn toàn không có gió." },
            { en: "B. It's crosswind from left to right, please aim slightly left.", vi: "Đang có gió tạt ngang từ trái sang phải, anh nhắm lệch trái một chút nhé." },
            { en: "C. It is strong headwind, hit harder.", vi: "Gió ngược rất mạnh, đánh mạnh lên." },
            { en: "D. Aim to the right bunker to be safe.", vi: "Nhắm vào hố cát bên phải cho an toàn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Which club would you like to use, Mr. Evans?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wɪtʃ klʌb wʊd juː laɪk tuː juːz ˈmɪs.tər ˈev.ənz/</span> Anh Evans muốn chọn dùng cây gậy nào cho cú này ạ?",
        audioText: "Which club would you like to use, Mr. Evans?",
        options: [
            { en: "A. Which club would you like to use, Mr. Evans?", vi: "Anh Evans muốn chọn dùng cây gậy nào cho cú này ạ?" },
            { en: "B. Put your driver back in the bag.", vi: "Cất gậy driver của anh vào túi đi." },
            { en: "C. Do you want to use the putter now?", vi: "Anh có muốn dùng gậy gạt ngay bây giờ không?" },
            { en: "D. Here is your iron 7, Sir.", vi: "Gậy sắt số 7 của anh đây ạ." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Nice on, Mr. Evans! Great approach shot!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs ɒn ˈmɪs.tər ˈev.ənz ɡreɪt əˈprəʊtʃ ʃɒt/</span> On green đẹp tuyệt anh Evans! Cú tiếp cận hoàn hảo quá ạ!",
        audioText: "Nice on, Mr. Evans! Great approach shot!",
        options: [
            { en: "A. You missed the green to the right.", vi: "Anh đánh trượt green sang bên phải rồi." },
            { en: "B. Nice on, Mr. Evans! Great approach shot!", vi: "On green đẹp tuyệt anh Evans! Cú tiếp cận hoàn hảo quá ạ!" },
            { en: "C. The ball rolled off the green.", vi: "Bóng bị lăn khỏi mặt green." },
            { en: "D. Short of green by 10 yards.", vi: "Thiếu gậy ngắn hơn green 10 yard." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Here is your putter, Sir. Let me mark your ball.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪər ɪz jɔː ˈpʌt.ər sɜːr let miː mɑːk jɔː bɔːl/</span> Em xin gửi gậy gạt cho anh ạ. Để em đánh dấu vị trí bóng giúp anh.",
        audioText: "Here is your putter, Sir. Let me mark your ball.",
        options: [
            { en: "A. Here is your putter, Sir. Let me mark your ball.", vi: "Em xin gửi gậy gạt cho anh ạ. Để em đánh dấu vị trí bóng giúp anh." },
            { en: "B. Pick up your ball without marking.", vi: "Nhặt bóng lên không cần đánh dấu." },
            { en: "C. Give me your putter back.", vi: "Đưa lại gậy gạt cho em." },
            { en: "D. Clean your shoes before putting.", vi: "Lau sạch giày trước khi putt." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "The green is slightly downhill, please hit a touch softer.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ɡriːn ɪz ˈslaɪt.li ˌdaʊnˈhɪl pliːz hɪt ə tʌtʃ ˈsɒf.tər/</span> Mặt green hơi dốc xuống, anh gạt nương tay nhẹ lực một chút nhé.",
        audioText: "The green is slightly downhill, please hit a touch softer.",
        options: [
            { en: "A. The green is uphill, hit harder.", vi: "Green dốc lên, đánh mạnh tay hơn." },
            { en: "B. The green is slightly downhill, please hit a touch softer.", vi: "Mặt green hơi dốc xuống, anh gạt nương tay nhẹ lực một chút nhé." },
            { en: "C. The green is completely flat.", vi: "Mặt green hoàn toàn bằng phẳng." },
            { en: "D. Green speed is very slow today.", vi: "Tốc độ green hôm nay rất chậm." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Break is from left to right, about two cups, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/breɪk ɪz frɒm left tuː raɪt əˈbaʊt tuː kʌps sɜːr/</span> Đường bóng gạt bị lượn từ trái sang phải khoảng hai miệng hố anh ạ.",
        audioText: "Break is from left to right, about two cups, Sir.",
        options: [
            { en: "A. Break is from right to left, one club.", vi: "Đường lượn từ phải sang trái khoảng 1 chiều dài gậy." },
            { en: "B. Break is from left to right, about two cups, Sir.", vi: "Đường bóng gạt bị lượn từ trái sang phải khoảng hai miệng hố anh ạ." },
            { en: "C. The line is completely straight to the pin.", vi: "Đường gạt thẳng tắp vào cờ." },
            { en: "D. Don't worry about the break.", vi: "Đừng lo lắng về đường lượn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Nice putt, Mr. Evans! Beautiful Birdie!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs pʌt ˈmɪs.tər ˈev.ənz ˈbjuː.tɪ.fəl ˈbɜː.di/</span> Cú gạt tuyệt vời quá anh Evans! Điểm Birdie quá đẹp mắt ạ!",
        audioText: "Nice putt, Mr. Evans! Beautiful Birdie!",
        options: [
            { en: "A. Too bad, the ball missed the hole.", vi: "Tiếc quá, bóng trượt hố rồi." },
            { en: "B. Nice putt, Mr. Evans! Beautiful Birdie!", vi: "Cú gạt tuyệt vời quá anh Evans! Điểm Birdie quá đẹp mắt ạ!" },
            { en: "C. That was a bogey putt.", vi: "Đó là cú gạt cứu điểm bogey." },
            { en: "D. You putted too hard.", vi: "Anh gạt thừa lực quá." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Please check your personal belongings on the buggy, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz tʃek jɔː ˈpɜː.sən.əl bɪˈlɒŋ.ɪŋz ɒn ðə ˈbʌɡ.i sɜːr/</span> Xin anh kiểm tra lại đồ đạc cá nhân trên xe điện giúp em ạ.",
        audioText: "Please check your personal belongings on the buggy, Sir.",
        options: [
            { en: "A. Leave your phone in the buggy.", vi: "Để điện thoại lại trên xe điện." },
            { en: "B. Please check your personal belongings on the buggy, Sir.", vi: "Xin anh kiểm tra lại đồ đạc cá nhân trên xe điện giúp em ạ." },
            { en: "C. Forget your sunglasses in the locker.", vi: "Quên kính mát trong tủ đồ." },
            { en: "D. Clean the buggy seat.", vi: "Lau sạch ghế xe điện." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "You have 13 clubs and 1 umbrella. Rangefinder is in the right pocket.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv ˈθɜː.tiːn klʌbz ænd wʌn ʌmˈbrel.ə/</span> Anh có đủ 13 gậy và 1 cái ô. Ống đo khoảng cách em để ngăn túi bên phải ạ.",
        audioText: "You have 13 clubs and 1 umbrella. Rangefinder is in the right pocket.",
        options: [
            { en: "A. You have 13 clubs and 1 umbrella. Rangefinder is in the right pocket.", vi: "Anh có đủ 13 gậy và 1 cái ô. Ống đo khoảng cách em để ngăn túi bên phải ạ." },
            { en: "B. Your rangefinder is missing.", vi: "Ống đo khoảng cách của anh bị mất rồi." },
            { en: "C. All clubs are left on the fairway.", vi: "Tất cả gậy bị bỏ quên trên fairway." },
            { en: "D. Put your gloves in the locker.", vi: "Để găng tay vào tủ đồ." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Thank you so much Mr. Evans. Hope to serve you again!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/θæŋk juː səʊ mʌtʃ ˈmɪs.tər ˈev.ənz həʊp tuː sɜːv juː əˈɡen/</span> Em cảm ơn anh Evans rất nhiều. Hy vọng được phục vụ anh lần sau ạ!",
        audioText: "Thank you so much Mr. Evans. Hope to serve you again!",
        options: [
            { en: "A. Welcome to Golden Sands Resort.", vi: "Chào mừng anh đến với Golden Sands Resort." },
            { en: "B. Thank you so much Mr. Evans. Hope to serve you again!", vi: "Em cảm ơn anh Evans rất nhiều. Hy vọng được phục vụ anh lần sau ạ!" },
            { en: "C. Please pay your bill now.", vi: "Xin anh thanh toán hóa đơn ngay." },
            { en: "D. See you at the driving range.", vi: "Hẹn gặp lại anh ở sân tập." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Would you like some sunscreen or a cold towel, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk sʌm ˈsʌn.skriːn ɔːr ə kəʊld taʊəl sɜːr/</span> Anh có muốn dùng chút kem chống nắng hoặc khăn lạnh không ạ?",
        audioText: "Would you like some sunscreen or a cold towel, Sir?",
        options: [
            { en: "A. Would you like some sunscreen or a cold towel, Sir?", vi: "Anh có muốn dùng chút kem chống nắng hoặc khăn lạnh không ạ?" },
            { en: "B. Do you want to buy new golf balls?", vi: "Anh có muốn mua bóng golf mới không?" },
            { en: "C. Where is your towel?", vi: "Khăn lau của anh ở đâu?" },
            { en: "D. Is it too cold today?", vi: "Trời hôm nay có quá lạnh không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Great swing! Keep it up, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡreɪt swɪŋ kiːp ɪt ʌp sɜːr/</span> Cú swing tuyệt vời quá ạ! Tiếp tục phát huy nhé anh ơi!",
        audioText: "Great swing! Keep it up, Sir!",
        options: [
            { en: "A. Bad swing, try again.", vi: "Swing hỏng rồi, thử lại đi." },
            { en: "B. Great swing! Keep it up, Sir!", vi: "Cú swing tuyệt vời quá ạ! Tiếp tục phát huy nhé anh ơi!" },
            { en: "C. Swing slower next time.", vi: "Swing chậm hơn lần sau." },
            { en: "D. Be careful with your stance.", vi: "Cẩn thận với tư thế đứng của anh." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Stay focused, you've got this, Mr. Evans!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/steɪ ˈfəʊ.kəst juːv ɡɒt ðɪs ˈmɪs.tər ˈev.ənz/</span> Giữ tập trung nhé anh Evans, anh nhất định làm được mà!",
        audioText: "Stay focused, you've got this, Mr. Evans!",
        options: [
            { en: "A. Give up on this hole.", vi: "Bỏ hố này đi anh." },
            { en: "B. Stay focused, you've got this, Mr. Evans!", vi: "Giữ tập trung nhé anh Evans, anh nhất định làm được mà!" },
            { en: "C. You are playing too slow.", vi: "Anh chơi chậm quá." },
            { en: "D. Don't rush your shot.", vi: "Đừng vội vàng khi đánh." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Don't worry about the last shot, focus on this one.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/dəʊnt ˈwʌr.i əˈbaʊt ðə lɑːst ʃɒt ˈfəʊ.kəs ɒn ðɪs wʌn/</span> Đừng bận tâm về cú đánh vừa rồi, hãy tập trung vào cú này ạ.",
        audioText: "Don't worry about the last shot, focus on this one.",
        options: [
            { en: "A. That was a terrible shot.", vi: "Đó là một cú đánh thật tồi tệ." },
            { en: "B. Don't worry about the last shot, focus on this one.", vi: "Đừng bận tâm về cú đánh vừa rồi, hãy tập trung vào cú này ạ." },
            { en: "C. You lost your ball in water.", vi: "Anh làm mất bóng dưới nước rồi." },
            { en: "D. You got a double bogey.", vi: "Anh bị điểm double bogey rồi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "I am sorry Sir, I will be more concentrated.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈsɒr.i sɜːr aɪ wɪl biː mɔːr ˈkɒn.sn̩.treɪ.tɪd/</span> Em xin lỗi anh, em sẽ tập trung chú ý hơn nữa ạ.",
        audioText: "I am sorry Sir, I will be more concentrated.",
        options: [
            { en: "A. I am sorry Sir, I will be more concentrated.", vi: "Em xin lỗi anh, em sẽ tập trung chú ý hơn nữa ạ." },
            { en: "B. It is not my fault.", vi: "Đó không phải lỗi của em." },
            { en: "C. Pay attention to your ball.", vi: "Chú ý vào quả bóng của anh đi." },
            { en: "D. I forgot your club.", vi: "Em quên gậy của anh rồi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "I am sorry Sir, I will be quicker next time.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈsɒr.i sɜːr aɪ wɪl biː ˈkwɪk.ər nekst taɪm/</span> Em xin lỗi anh, lần sau em sẽ thao tác nhanh nhẹn hơn ạ.",
        audioText: "I am sorry Sir, I will be quicker next time.",
        options: [
            { en: "A. Why are you rushing me?", vi: "Sao anh lại hối giục em?" },
            { en: "B. I am sorry Sir, I will be quicker next time.", vi: "Em xin lỗi anh, lần sau em sẽ thao tác nhanh nhẹn hơn ạ." },
            { en: "C. You walk too fast.", vi: "Anh đi bộ nhanh quá." },
            { en: "D. Wait for other players.", vi: "Chờ người chơi khác." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "I am sorry Sir, I will report this to the manager right away.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈsɒr.i sɜːr aɪ wɪl rɪˈpɔːt ðɪs tuː ðə ˈmæn.ɪ.dʒər raɪt əˈweɪ/</span> Em xin lỗi anh, em sẽ báo cáo sự việc này tới quản lý ngay lập tức ạ.",
        audioText: "I am sorry Sir, I will report this to the manager right away.",
        options: [
            { en: "A. I am sorry Sir, I will report this to the manager right away.", vi: "Em xin lỗi anh, em sẽ báo cáo sự việc này tới quản lý ngay lập tức ạ." },
            { en: "B. Solve it yourself.", vi: "Anh tự giải quyết đi." },
            { en: "C. It is normal here.", vi: "Ở đây chuyện này là bình thường." },
            { en: "D. Don't worry about it.", vi: "Đừng lo lắng làm gì." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "Sir/Madam, I counted your clubs. It seems we have 15 clubs.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/sɜːr ˈmæd.əm aɪ ˈkaʊn.tɪd jɔː klʌbz/</span> Anh/Chị ơi, em đã đếm số gậy. Có vẻ như bộ gậy đang bị thừa thành 15 cây gậy ạ.",
        audioText: "Sir or Madam, I counted your clubs. It seems we have 15 clubs.",
        options: [
            { en: "A. You have 10 clubs only.", vi: "Anh chỉ có 10 cây gậy thôi." },
            { en: "B. Sir/Madam, I counted your clubs. It seems we have 15 clubs.", vi: "Anh/Chị ơi, em đã đếm số gậy. Có vẻ như bộ gậy đang bị thừa thành 15 cây gậy ạ." },
            { en: "C. All clubs are missing.", vi: "Tất cả gậy đều bị mất." },
            { en: "D. You can play with 20 clubs.", vi: "Anh có thể đánh với 20 cây gậy." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Thực hành & Luyện tập", type: "mcq",
        title: "To avoid penalties, I suggest removing the excess club before we start.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/tuː əˈvɔɪd ˈpen.əl.tiz aɪ səˈdʒest rɪˈmuːv.ɪŋ ðə ɪkˈses klʌb/</span> Để tránh bị phạt gậy, em xuất xuất bỏ bớt 1 cây thừa trước khi bắt đầu ạ.",
        audioText: "To avoid penalties, I suggest removing the excess club before we start.",
        options: [
            { en: "A. To avoid penalties, I suggest removing the excess club before we start.", vi: "Để tránh bị phạt gậy, em xuất xuất bỏ bớt 1 cây thừa trước khi bắt đầu ạ." },
            { en: "B. Play with extra clubs.", vi: "Cứ đánh tiếp với số gậy thừa." },
            { en: "C. Hide the club in the car.", vi: "Giấu gậy trong xe." },
            { en: "D. Throw the club away.", vi: "Vứt gậy đi." }
        ],
        correct: 0
    }
);
