// Đảm bảo mảng masterQuizData luôn được khởi tạo an toàn
if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

// NẠP ĐẦY ĐỦ 150 CÂU HỎI ĐỘC BẢN CHO LESSON 1 VÀO MẢNG CHUNG (MỖI SECTION 50 CÂU)
window.masterQuizData.push(
    // =========================================================================
    // SECTION 1.1: BẢNG CHỮ CÁI & ĐÁNH VẦN (CÂU 1 - CÂU 50)
    // =========================================================================
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Titleist is spelled T-I-T-L-E-I-S-T.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈtaɪ.təl.ɪst/<br>Titleist được đánh vần là T-I-T-L-E-I-S-T.</span>",
        audioText: "Titleist is spelled T - I - T - L - E - I - S - T.",
        options: [{ en: "A. /aɪ/", vi: "Phát âm /aɪ/" }, { en: "B. /iː/", vi: "Phát âm /iː/" }, { en: "C. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "D. /ɛ/", vi: "Phát âm /ɛ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "P as in Papa, B as in Bravo.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/piː æz ɪn ˈpɑː.pə, biː æz ɪn ˈbrɑː.voʊ/<br>P như Papa, B như Bravo.</span>",
        audioText: "P as in Papa, B as in Bravo.",
        options: [{ en: "A. Papa", vi: "Từ Papa (Chữ P)" }, { en: "B. Peter", vi: "Từ Peter" }, { en: "C. Paul", vi: "Từ Paul" }, { en: "D. Pink", vi: "Từ Pink" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Hybrid starts with letter H.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈhaɪ.brɪd stɑːrts wɪð ˈlet.ər eɪtʃ/<br>Từ Hybrid bắt đầu bằng chữ H.</span>",
        audioText: "Hybrid starts with letter H.",
        options: [{ en: "A. /eɪtʃ/", vi: "Phát âm chuẩn /eɪtʃ/" }, { en: "B. /heɪtʃ/", vi: "Phát âm /heɪtʃ/" }, { en: "C. /eɪdʒ/", vi: "Phát âm /eɪdʒ/" }, { en: "D. /ætʃ/", vi: "Phát âm /ætʃ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "B as in Bravo, P as in Papa.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/biː æz ɪn ˈbrɑː.voʊ, piː æz ɪn ˈpɑː.pə/<br>B như Bravo, P như Papa.</span>",
        audioText: "B as in Bravo, P as in Papa.",
        options: [{ en: "A. B và P", vi: "Cặp chữ B và P" }, { en: "B. A và Z", vi: "Cặp chữ A và Z" }, { en: "C. K và L", vi: "Cặp chữ K và L" }, { en: "D. H và O", vi: "Cặp chữ H và O" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Good morning! My name is Arthur, spelled A-R-T-H-U-R.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd ˈmɔːr.nɪŋ! maɪ neɪm ɪz ˈɑːr.θər, spelt.../<br>Chào buổi sáng! Tên tôi là Arthur, đánh vần là A-R-T-H-U-R.</span>",
        audioText: "Good morning! My name is Arthur, spelled A - R - T - H - U - R.",
        options: [{ en: "A. ARTHUR", vi: "Tên Arthur" }, { en: "B. AUTHOR", vi: "Tên Author" }, { en: "C. ARCHER", vi: "Tên Archer" }, { en: "D. MARK", vi: "Tên Mark" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My name is Harrison, spelled H-A-R-R-I-S-O-N.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz ˈher.ɪ.sən, spelt.../<br>Tên tôi là Harrison, đánh vần là H-A-R-R-I-S-O-N.</span>",
        audioText: "My name is Harrison, spelled H - A - R - R - I - S - O - N.",
        options: [{ en: "A. HARRISON", vi: "Tên Harrison" }, { en: "B. HARRIS", vi: "Tên Harris" }, { en: "C. HARISON", vi: "Tên Harison" }, { en: "D. HARRYS", vi: "Tên Harrys" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "Hello Sir, my name is Rose, R-O-S-E.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/həˈloʊ sɜːr, maɪ neɪm ɪz roʊz/<br>Xin chào anh, tên em là Rose, R-O-S-E.</span>",
        audioText: "Hello Sir, my name is Rose, R - O - S - E.",
        displaySentence: "Caddie's name is _______.", translation: "Tên của Caddie là _______.",
        targetWord: "rose", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I am playing a Callaway ball, C-A-L-L-A-W-A-Y.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈpleɪ.ɪŋ ə ˈkæl.ə.weɪ bɔːl/<br>Tôi đang đánh bóng Callaway, C-A-L-L-A-W-A-Y.</span>",
        audioText: "I am playing a Callaway ball, C - A - L - L - A - W - A - Y.",
        options: [{ en: "A. Callaway", vi: "Bóng hãng Callaway" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Srixon", vi: "Bóng hãng Srixon" }, { en: "D. Honma", vi: "Bóng hãng Honma" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "You got a Par on this hole, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ɡɒt ə pɑːr ɒn ðɪs hoʊl, sɜːr/<br>Anh đạt điểm chuẩn (Par) ở hố này rồi thưa anh.</span>",
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
        title: "Here is your putter, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪr ɪz jʊər ˈpʌt.ər, sɜːr/<br>Gậy gạt của anh đây thưa anh.</span>",
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
        title: "Booking number G-8-0.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈbʊk.ɪŋ ˈnʌm.bər ʒiː eɪt oʊ/<br>Số booking G-8-0.</span>",
        audioText: "Booking number G-8-0.",
        options: [{ en: "A. Oh /əʊ/", vi: "Đọc tắt là 'Oh'" }, { en: "B. Zero", vi: "Đọc là Zero" }, { en: "C. Null", vi: "Đọc là Null" }, { en: "D. Nil", vi: "Đọc là Nil" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Welcome to our golf course.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwel.kʌm tuː ˈaʊər ɡɒlf kɔːrs/<br>Chào mừng đến với sân gôn của chúng tôi.</span>",
        audioText: "Welcome to our golf course.",
        options: [{ en: "A. /ɔːr/ dài", vi: "Phát âm nguyên âm /ɔːr/" }, { en: "B. /ɑːr/", vi: "Phát âm nguyên âm /ɑːr/" }, { en: "C. /ʊər/", vi: "Phát âm nguyên âm /ʊər/" }, { en: "D. /ɒ/ ngắn", vi: "Phát âm nguyên âm /ɒ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Welcome to Tee box hole 1.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwel.kʌm tuː tiː bɒks hoʊl wʌn/<br>Chào mừng đến khu phát bóng (Tee box) hố số 1.</span>",
        audioText: "Welcome to Tee box hole 1.",
        options: [{ en: "A. /tiː bɑːks/", vi: "Phát âm chuẩn /tiː bɑːks/" }, { en: "B. /teɪ bɑːks/", vi: "Phát âm /teɪ bɑːks/" }, { en: "C. /tɪ bɒks/", vi: "Phát âm /tɪ bɒks/" }, { en: "D. /tiː bɔːks/", vi: "Phát âm /tiː bɔːks/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "60 degree wedge.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈsɪk.sti dɪˈɡriː wedʒ/<br>Gậy wedge độ loft 60 độ.</span>",
        audioText: "60 degree wedge.",
        options: [{ en: "A. /dʒ/", vi: "Bật phụ âm cuối /dʒ/" }, { en: "B. /ʒ/", vi: "Bật phụ âm /ʒ/" }, { en: "C. /tʃ/", vi: "Bật phụ âm /tʃ/" }, { en: "D. /ɡ/", vi: "Bật phụ âm /ɡ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Here is your Hybrid club.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈhɪr ɪz jʊər ˈhaɪ.brɪd klʌb/<br>Gậy hybrid của anh đây.</span>",
        audioText: "Here is your Hybrid club.",
        options: [{ en: "A. /aɪ/", vi: "Nguyên âm đôi /aɪ/" }, { en: "B. /eɪ/", vi: "Nguyên âm đôi /eɪ/" }, { en: "C. /oʊ/", vi: "Nguyên âm đôi /oʊ/" }, { en: "D. /aʊ/", vi: "Nguyên âm đôi /aʊ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My ball brand is Srixon, S-R-I-X-O-N.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ bɔːl brænd ɪz ˈsrɪk.sən/<br>Hãng bóng của tôi là Srixon, S-R-I-X-O-N.</span>",
        audioText: "My ball brand is Srixon, S - R - I - X - O - N.",
        options: [{ en: "A. Srixon", vi: "Bóng hãng Srixon" }, { en: "B. Titleist", vi: "Bóng hãng Titleist" }, { en: "C. Callaway", vi: "Bóng hãng Callaway" }, { en: "D. TaylorMade", vi: "Bóng hãng TaylorMade" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "My name is Mike, spelled M-I-K-E.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz maɪk/<br>Tên tôi là Mike, đánh vần là M-I-K-E.</span>",
        audioText: "My name is Mike, spelled M - I - K - E.",
        displaySentence: "Golfer's name is _______.", translation: "Tên của Golfer là _______.",
        targetWord: "mike", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Mark is spelled M-A-R-K.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/mɑːrk ɪz spelt.../<br>Mark được đánh vần là M-A-R-K.</span>",
        audioText: "Mark is spelled M - A - R - K.",
        options: [{ en: "A. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "B. /ɑːr/", vi: "Phát âm /ɑːr/" }, { en: "C. /æ/", vi: "Phát âm /æ/" }, { en: "D. /e/", vi: "Phát âm /e/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "My putter model is P-I-N-G.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ˈpʌt.ər ˈmɒd.əl ɪz pɪŋ/<br>Dòng gậy gạt của tôi là PING, P-I-N-G.</span>",
        audioText: "My putter model is P - I - N - G.",
        displaySentence: "Putter brand is _______.", translation: "Hãng gậy gạt là _______.",
        targetWord: "ping", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter Z in American English.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər ziː ɪn əˈmer.ɪ.kən ˈɪŋ.ɡlɪʃ/<br>Chữ cái Z trong tiếng Anh-Mỹ.</span>",
        audioText: "Letter Z in American English.",
        options: [{ en: "A. /ziː/", vi: "Đọc là Zee (/ziː/)" }, { en: "B. /zed/", vi: "Đọc là Zed (/zed/)" }, { en: "C. /zaɪ/", vi: "Đọc là Zai" }, { en: "D. /zoʊ/", vi: "Đọc là Zo" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Wedge starts with Double U.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwedʒ stɑːrts wɪð ˈdʌb.əl.juː/<br>Từ Wedge bắt đầu bằng chữ Double U.</span>",
        audioText: "Wedge starts with Double U.",
        options: [{ en: "A. Double U /ˈdʌb.əl.juː/", vi: "Đọc là Double U" }, { en: "B. Triple U", vi: "Đọc là Triple U" }, { en: "C. Way", vi: "Đọc là Way" }, { en: "D. Ve", vi: "Đọc là Ve" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter R in English.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər ɑːr ɪn ˈɪŋ.ɡlɪʃ/<br>Chữ R trong tiếng Anh.</span>",
        audioText: "Letter R in English.",
        options: [{ en: "A. Uốn cong đầu lưỡi về phía sau", vi: "Phát âm uốn lưỡi /ɑːr/" }, { en: "B. Rung đầu lưỡi mạnh", vi: "Rung đầu lưỡi giống tiếng Việt" }, { en: "C. Bật môi vô thanh", vi: "Bật môi không uốn lưỡi" }, { en: "D. Đọc giống chữ L", vi: "Đọc giống chữ L" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I am David, D-A-V-I-D.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈdeɪ.vɪd/<br>Tôi là David, D-A-V-I-D.</span>",
        audioText: "I am David, D - A - V - I - D.",
        options: [{ en: "A. DAVID", vi: "Tên David" }, { en: "B. DAVIS", vi: "Tên Davis" }, { en: "C. DANIEL", vi: "Tên Daniel" }, { en: "D. DAVIN", vi: "Tên Davin" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter K sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər keɪ saʊnd/<br>Phát âm chữ K.</span>",
        audioText: "Letter K sound.",
        options: [{ en: "A. /keɪ/", vi: "Phát âm /keɪ/" }, { en: "B. /kaɪ/", vi: "Phát âm /kaɪ/" }, { en: "C. /kiː/", vi: "Phát âm /kiː/" }, { en: "D. /kɛ/", vi: "Phát âm /kɛ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Honma club, H-O-N-M-A.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈhɒn.mɑː klʌb/<br>Gậy Honma, H-O-N-M-A.</span>",
        audioText: "Honma club, H - O - N - M - A.",
        options: [{ en: "A. Honma", vi: "Gậy hãng Honma" }, { en: "B. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "C. Miura", vi: "Gậy hãng Miura" }, { en: "D. Majesty", vi: "Gậy hãng Majesty" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter E sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər iː saʊnd/<br>Phát âm chữ E.</span>",
        audioText: "Letter E sound.",
        options: [{ en: "A. /iː/", vi: "Phát âm /iː/" }, { en: "B. /eɪ/", vi: "Phát âm /eɪ/" }, { en: "C. /e/", vi: "Phát âm /e/" }, { en: "D. /aɪ/", vi: "Phát âm /aɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter J sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər dʒeɪ saʊnd/<br>Phát âm chữ J.</span>",
        audioText: "Letter J sound.",
        options: [{ en: "A. /dʒeɪ/", vi: "Phát âm /dʒeɪ/" }, { en: "B. /ʒeɪ/", vi: "Phát âm /ʒeɪ/" }, { en: "C. /dʒaɪ/", vi: "Phát âm /dʒaɪ/" }, { en: "D. /jeɪ/", vi: "Phát âm /jeɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter G as in Golf.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər dʒiː æz ɪn ɡɒlf/<br>Chữ G như trong Golf.</span>",
        audioText: "Letter G as in Golf.",
        options: [{ en: "A. /dʒiː/ (kết thúc bằng âm iː dài)", vi: "Đọc là /dʒiː/" }, { en: "B. /dʒeɪ/", vi: "Đọc giống chữ J" }, { en: "C. /ɡiː/", vi: "Đọc là Gi" }, { en: "D. /dʒe/", vi: "Đọc là Ge" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My name is John, J-O-H-N.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz dʒɒn/<br>Tên tôi là John, J-O-H-N.</span>",
        audioText: "My name is John, J - O - H - N.",
        options: [{ en: "A. JOHN", vi: "Tên John" }, { en: "B. JACK", vi: "Tên Jack" }, { en: "C. JIM", vi: "Tên Jim" }, { en: "D. JOE", vi: "Tên Joe" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter Y sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər waɪ saʊnd/<br>Phát âm chữ Y.</span>",
        audioText: "Letter Y sound.",
        options: [{ en: "A. /waɪ/", vi: "Phát âm /waɪ/" }, { en: "B. /jaɪ/", vi: "Phát âm /jaɪ/" }, { en: "C. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "D. /yeɪ/", vi: "Phát âm /yeɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My driver is TaylorMade, T-A-Y-L-O-R-M-A-D-E.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ ˈdraɪ.vər ɪz ˈteɪ.lər.meɪd/<br>Gậy driver của tôi là TaylorMade, T-A-Y-L-O-R-M-A-D-E.</span>",
        audioText: "My driver is TaylorMade, T - A - Y - L - O - R - M - A - D - E.",
        options: [{ en: "A. TaylorMade", vi: "Gậy hãng TaylorMade" }, { en: "B. Titleist", vi: "Gậy hãng Titleist" }, { en: "C. Callaway", vi: "Gậy hãng Callaway" }, { en: "D. Ping", vi: "Gậy hãng Ping" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "My name is Anna, A-N-N-A.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz ˈæn.ə/<br>Tên tôi là Anna, A-N-N-A.</span>",
        audioText: "My name is Anna, A - N - N - A.",
        displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "anna", hint: "💡 Gợi ý: Tên đơn giản gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I am Alex, A-L-E-X.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈæl.eks/<br>Tôi là Alex, A-L-E-X.</span>",
        audioText: "I am Alex, A - L - E - X.",
        options: [{ en: "A. ALEX", vi: "Tên Alex" }, { en: "B. ALAN", vi: "Tên Alan" }, { en: "C. ADAM", vi: "Tên Adam" }, { en: "D. ALEC", vi: "Tên Alec" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter X sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər eks saʊnd/<br>Phát âm chữ X.</span>",
        audioText: "Letter X sound.",
        options: [{ en: "A. /eks/", vi: "Phát âm /eks/" }, { en: "B. /egz/", vi: "Phát âm /egz/" }, { en: "C. /z/", vi: "Phát âm /z/" }, { en: "D. /s/", vi: "Phát âm /s/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I play Volvik ball, V-O-L-V-I-K.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ pleɪ ˈvɒl.vɪk bɔːl/<br>Tôi đánh bóng Volvik, V-O-L-V-I-K.</span>",
        audioText: "I play Volvik ball, V - O - L - V - I - K.",
        options: [{ en: "A. Volvik", vi: "Bóng hãng Volvik" }, { en: "B. Vice", vi: "Bóng hãng Vice" }, { en: "C. Wilson", vi: "Bóng hãng Wilson" }, { en: "D. Bridgestone", vi: "Bóng hãng Bridgestone" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "Call me Paul, P-A-U-L.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/kɔːl miː pɔːl/<br>Hãy gọi tôi là Paul, P-A-U-L.</span>",
        audioText: "Call me Paul, P - A - U - L.",
        displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "paul", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter U sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər juː saʊnd/<br>Phát âm chữ U.</span>",
        audioText: "Letter U sound.",
        options: [{ en: "A. /juː/", vi: "Phát âm /juː/" }, { en: "B. /uː/", vi: "Phát âm /uː/" }, { en: "C. /ʌ/", vi: "Phát âm /ʌ/" }, { en: "D. /aʊ/", vi: "Phát âm /aʊ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter Q sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər kjuː saʊnd/<br>Phát âm chữ Q.</span>",
        audioText: "Letter Q sound.",
        options: [{ en: "A. /kjuː/", vi: "Phát âm /kjuː/" }, { en: "B. /kuː/", vi: "Phát âm /kuː/" }, { en: "C. /kwɑː/", vi: "Phát âm /kwɑː/" }, { en: "D. /kju/", vi: "Phát âm /kju/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My name is Tom, T-O-M.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz tɒm/<br>Tên tôi là Tom, T-O-M.</span>",
        audioText: "My name is Tom, T - O - M.",
        options: [{ en: "A. TOM", vi: "Tên Tom" }, { en: "B. TIM", vi: "Tên Tim" }, { en: "C. TED", vi: "Tên Ted" }, { en: "D. TODD", vi: "Tên Todd" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "I am Mary, M-A-R-Y.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈmer.i/<br>Tôi là Mary, M-A-R-Y.</span>",
        audioText: "I am Mary, M - A - R - Y.",
        displaySentence: "Caddie's name is _______.", translation: "Tên Caddie là _______.",
        targetWord: "mary", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter O sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər oʊ saʊnd/<br>Phát âm chữ O.</span>",
        audioText: "Letter O sound.",
        options: [{ en: "A. /oʊ/", vi: "Phát âm /oʊ/" }, { en: "B. /ɒ/", vi: "Phát âm /ɒ/" }, { en: "C. /ɔː/", vi: "Phát âm /ɔː/" }, { en: "D. /uː/", vi: "Phát âm /uː/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Iron starts with I.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈaɪ.ən stɑːrts wɪð aɪ/<br>Từ Iron bắt đầu bằng chữ I.</span>",
        audioText: "Iron starts with I.",
        options: [{ en: "A. /aɪ/", vi: "Phát âm /aɪ/" }, { en: "B. /iː/", vi: "Phát âm /iː/" }, { en: "C. /ɪ/", vi: "Phát âm /ɪ/" }, { en: "D. /eɪ/", vi: "Phát âm /eɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "I use Cobra iron, C-O-B-R-A.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ juːz ˈkoʊ.brə ˈaɪ.ən/<br>Tôi dùng gậy sắt Cobra, C-O-B-R-A.</span>",
        audioText: "I use Cobra iron, C - O - B - R - A.",
        options: [{ en: "A. Cobra", vi: "Gậy hãng Cobra" }, { en: "B. Cleveland", vi: "Gậy hãng Cleveland" }, { en: "C. Callaway", vi: "Gậy hãng Callaway" }, { en: "D. Honma", vi: "Gậy hãng Honma" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter V sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər viː saʊnd/<br>Phát âm chữ V.</span>",
        audioText: "Letter V sound.",
        options: [{ en: "A. /viː/", vi: "Phát âm /viː/" }, { en: "B. /weɪ/", vi: "Phát âm /weɪ/" }, { en: "C. /vɑː/", vi: "Phát âm /vɑː/" }, { en: "D. /vɛ/", vi: "Phát âm /vɛ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "fill",
        title: "I am Mark, M-A-R-K.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm mɑːrk/<br>Tôi là Mark, M-A-R-K.</span>",
        audioText: "I am Mark, M - A - R - K.",
        displaySentence: "Golfer's name is _______.", translation: "Tên Golfer là _______.",
        targetWord: "mark", hint: "💡 Gợi ý: Tên gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "My name is Eric, E-R-I-C.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz ˈer.ɪk/<br>Tên tôi là Eric, E-R-I-C.</span>",
        audioText: "My name is Eric, E - R - I - C.",
        options: [{ en: "A. ERIC", vi: "Tên Eric" }, { en: "B. EVAN", vi: "Tên Evan" }, { en: "C. EDEN", vi: "Tên Eden" }, { en: "D. EARL", vi: "Tên Earl" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter S sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər es saʊnd/<br>Phát âm chữ S.</span>",
        audioText: "Letter S sound.",
        options: [{ en: "A. /es/", vi: "Phát âm /es/" }, { en: "B. /sɪ/", vi: "Phát âm /sɪ/" }, { en: "C. /ʃiː/", vi: "Phát âm /ʃiː/" }, { en: "D. /z/", vi: "Phát âm /z/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter L sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər el saʊnd/<br>Phát âm chữ L.</span>",
        audioText: "Letter L sound.",
        options: [{ en: "A. /el/", vi: "Phát âm /el/" }, { en: "B. /laɪ/", vi: "Phát âm /laɪ/" }, { en: "C. /leɪ/", vi: "Phát âm /leɪ/" }, { en: "D. /luː/", vi: "Phát âm /luː/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Mizuno club, M-I-Z-U-N-O.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/mɪˈzuː.noʊ klʌb/<br>Gậy Mizuno, M-I-Z-U-N-O.</span>",
        audioText: "Mizuno club, M - I - Z - U - N - O.",
        options: [{ en: "A. Mizuno", vi: "Gậy hãng Mizuno" }, { en: "B. Miura", vi: "Gậy hãng Miura" }, { en: "C. Maruman", vi: "Gậy hãng Maruman" }, { en: "D. Honma", vi: "Gậy hãng Honma" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.1", sectionName: "Bảng chữ cái & Đánh vần", type: "mcq",
        title: "Letter N sound.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlet.ər en saʊnd/<br>Phát âm chữ N.</span>",
        audioText: "Letter N sound.",
        options: [{ en: "A. /en/ (nguyên âm e ngắn kết thúc âm mũi n)", vi: "Phát âm /en/ (kết thúc âm mũi n)" }, { en: "B. /em/", vi: "Phát âm /em/ (mím môi)" }, { en: "C. /enː/", vi: "Phát âm kéo dài" }, { en: "D. /an/", vi: "Phát âm /an/" }],
        correct: 0
    },

    // =========================================================================
    // SECTION 1.2: SỐ ĐẾM & KHOẢNG CÁCH (CÂU 51 - CÂU 100)
    // =========================================================================
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "It is one hundred and fifteen yards to the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz wʌn ˈhʌn.drəd ənd ˌfɪfˈtiːn jɑːrds tuː ðə ɡriːn/<br>Còn 115 yard nữa là tới green.</span>",
        audioText: "It is one hundred and fifteen yards to the green.",
        options: [
            { en: "A. Nhấn mạnh vào âm tiết thứ hai (-teen)", vi: "Nhấn trọng âm vào âm tiết thứ hai (-teen)" },
            { en: "B. Nhấn mạnh vào âm tiết đầu (Fif-)", vi: "Nhấn mạnh vào âm tiết đầu (Fif-)" },
            { en: "C. Đọc lướt cả hai âm tiết", vi: "Đọc lướt cả hai âm tiết giọng trầm" },
            { en: "D. Nhấn âm vào từ 'yards'", vi: "Nhấn âm vào đơn vị đo yards" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "It is one hundred and fifty yards to the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz wʌn ˈhʌn.drəd ənd ˈfɪf.ti jɑːrds tuː ðə ɡriːn/<br>Còn 150 yard nữa là tới green.</span>",
        audioText: "It is one hundred and fifty yards to the green.",
        options: [
            { en: "A. One hundred and fifty yards", vi: "Đọc là 150 yard (One hundred and fifty yards)" },
            { en: "B. Fifteen zero yards", vi: "Đọc là 15 0 yard" },
            { en: "C. One five zero yards", vi: "Đọc là 1 5 0 yard" },
            { en: "D. One hundred fifteen yards", vi: "Đọc là 115 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "I need a 60 degree wedge.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ niːd ə ˈsɪk.sti dɪˈɡriː wedʒ/<br>Tôi cần gậy wedge 60 độ.</span>",
        audioText: "I need a 60 degree wedge.",
        options: [{ en: "A. Âm tiết đầu (Six-)", vi: "Nhấn âm đầu (SIX-ty)" }, { en: "B. Âm tiết cuối (-ty)", vi: "Nhấn âm cuối (Six-TY)" }, { en: "C. Cả hai âm bằng nhau", vi: "Cả hai âm bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Three iron, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/θriː ˈaɪ.ən, sɜːr/<br>Gậy sắt số 3 thưa anh.</span>",
        audioText: "Three iron, sir.",
        options: [{ en: "A. /θriː/", vi: "Phát âm /θriː/" }, { en: "B. /triː/", vi: "Phát âm /triː/" }, { en: "C. /free/", vi: "Phát âm /free/" }, { en: "D. /driː/", vi: "Phát âm /driː/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Hole number 13.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hoʊl ˈnʌm.bər ˌθɜːrˈtiːn/<br>Hố số 13.</span>",
        audioText: "Hole number 13.",
        options: [{ en: "A. /ˌθɜːrˈtiːn/", vi: "Phát âm /ˌθɜːrˈtiːn/" }, { en: "B. /ˈθɜːr.ti/", vi: "Phát âm /ˈθɜːr.ti/" }, { en: "C. /θriː.tiːn/", vi: "Phát âm /θriː.tiːn/" }, { en: "D. /θɜːr.ten/", vi: "Phát âm /θɜːr.ten/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "You have fourteen golf clubs, sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv ˌfɔːrˈtiːn ɡɒlf klʌbz, sɜːr/<br>Anh có 14 cây gậy gôn thưa anh!</span>",
        audioText: "You have fourteen golf clubs, sir!",
        options: [{ en: "A. Fourteen /ˌfɔːrˈtiːn/", vi: "Đọc là 14 (Fourteen)" }, { en: "B. Forty /ˈfɔːr.ti/", vi: "Đọc là 40 (Forty)" }, { en: "C. Four /fɔːr/", vi: "Đọc là 4 (Four)" }, { en: "D. Fourteenth /ˌfɔːrˈtiːnθ/", vi: "Đọc là Thứ 14 (Fourteenth)" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "One hundred yards.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʌn ˈhʌn.drəd jɑːrds/<br>100 yard.</span>",
        audioText: "One hundred yards.",
        options: [{ en: "A. /ˈhʌn.drəd/", vi: "Phát âm /ˈhʌn.drəd/" }, { en: "B. /ˈhʊn.dred/", vi: "Phát âm /ˈhʊn.dred/" }, { en: "C. /ˈhæn.drɪd/", vi: "Phát âm /ˈhæn.drɪd/" }, { en: "D. /ˈhɒn.drəd/", vi: "Phát âm /ˈhɒn.drəd/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "5-iron, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/faɪv ˈaɪ.ən, sɜːr/<br>Gậy sắt số 5 thưa anh.</span>",
        audioText: "5-iron, sir.",
        options: [{ en: "A. /faɪv/", vi: "Phát âm /faɪv/" }, { en: "B. /fɪf/", vi: "Phát âm /fɪf/" }, { en: "C. /faɪf/", vi: "Phát âm /faɪf/" }, { en: "D. /faɪ/", vi: "Phát âm /faɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "We have twelve buggy cars.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wiː hæv twelv ˈbʌɡ.i kɑːrz/<br>Chúng tôi có 12 chiếc xe điện.</span>",
        audioText: "We have twelve buggy cars.",
        options: [{ en: "A. /twelv/", vi: "Phát âm /twelv/" }, { en: "B. /twelf/", vi: "Phát âm /twelf/" }, { en: "C. /twerv/", vi: "Phát âm /twerv/" }, { en: "D. /twelvθ/", vi: "Phát âm /twelvθ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Twenty yards to the fringe.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈtwen.ti jɑːrds tuː ðə frɪndʒ/<br>Còn 20 yard nữa là tới vùng viền green.</span>",
        audioText: "Twenty yards to the fringe.",
        options: [{ en: "A. /ˈtwen.ti/", vi: "Phát âm /ˈtwen.ti/" }, { en: "B. /twenˈtiːn/", vi: "Phát âm /twenˈtiːn/" }, { en: "C. /ˈtwen.ty/", vi: "Phát âm /ˈtwen.ty/" }, { en: "D. /two.ty/", vi: "Phát âm /two.ty/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "One thousand members.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʌn ˈθaʊ.zənd ˈmem.bərz/<br>Một ngàn hội viên.</span>",
        audioText: "One thousand members.",
        options: [{ en: "A. /ˈθaʊ.zənd/", vi: "Phát âm /ˈθaʊ.zənd/" }, { en: "B. /ˈsaʊ.zənd/", vi: "Phát âm /ˈsaʊ.zənd/" }, { en: "C. /ˈtoʊ.zənd/", vi: "Phát âm /ˈtoʊ.zənd/" }, { en: "D. /ˈθoʊ.zænd/", vi: "Phát âm /ˈθoʊ.zænd/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Forty yards to the bunker.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈfɔːr.ti jɑːrds tuː ðə ˈbʌŋ.kər/<br>Còn 40 yard nữa tới bẫy cát.</span>",
        audioText: "Forty yards to the bunker.",
        options: [{ en: "A. Forty /ˈfɔːr.ti/", vi: "Viết là Forty (không u), phát âm /ˈfɔːr.ti/" }, { en: "B. Fourty /ˈfɔːr.tiːn/", vi: "Viết là Fourty, phát âm /ˈfɔːr.tiːn/" }, { en: "C. Forth /ˈfɔːrθ/", vi: "Viết là Forth" }, { en: "D. Four-ty /fɔːrˈti/", vi: "Viết là Four-ty" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Hole number 9.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hoʊl ˈnʌm.bər naɪn/<br>Hố số 9.</span>",
        audioText: "Hole number 9.",
        options: [{ en: "A. /naɪn/", vi: "Phát âm /naɪn/" }, { en: "B. /nɪn/", vi: "Phát âm /nɪn/" }, { en: "C. /neɪn/", vi: "Phát âm /neɪn/" }, { en: "D. /naɪ/", vi: "Phát âm /naɪ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "8-iron, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/eɪt ˈaɪ.ən, sɜːr/<br>Gậy sắt số 8 thưa anh.</span>",
        audioText: "8-iron, sir.",
        options: [{ en: "A. Ate", vi: "Từ Ate (/eɪt/)" }, { en: "B. Eat", vi: "Từ Eat (/iːt/)" }, { en: "C. At", vi: "Từ At (/æt/)" }, { en: "D. Height", vi: "Từ Height (/haɪt/)" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "7-iron.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈsev.ən ˈaɪ.ən/<br>Gậy sắt số 7.</span>",
        audioText: "7-iron.",
        options: [{ en: "A. /ˈsev.ən/", vi: "Phát âm /ˈsev.ən/" }, { en: "B. /ˈseɪ.vən/", vi: "Phát âm /ˈseɪ.vən/" }, { en: "C. /ˈsev.en/", vi: "Phát âm /ˈsev.en/" }, { en: "D. /sɪv.ən/", vi: "Phát âm /sɪv.ən/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Par 4 hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pɑːr fɔːr hoʊl/<br>Hố Par 4.</span>",
        audioText: "Par 4 hole.",
        options: [{ en: "A. /fɔːr/", vi: "Phát âm /fɔːr/" }, { en: "B. /fɑːr/", vi: "Phát âm /fɑːr/" }, { en: "C. /fʊər/", vi: "Phát âm /fʊər/" }, { en: "D. /fəʊr/", vi: "Phát âm /fəʊr/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "6-iron.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/sɪks ˈaɪ.ən/<br>Gậy sắt số 6.</span>",
        audioText: "6-iron.",
        options: [{ en: "A. /ks/", vi: "Kết thúc bằng cụm phụ âm /ks/" }, { en: "B. /s/", vi: "Kết thúc bằng âm /s/" }, { en: "C. /z/", vi: "Kết thúc bằng âm /z/" }, { en: "D. /ʃ/", vi: "Kết thúc bằng âm /ʃ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Thirty yards short.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈθɜːr.ti jɑːrds ʃɔːrt/<br>Còn thiếu 30 yard.</span>",
        audioText: "Thirty yards short.",
        options: [{ en: "A. /ˈθɜːr.ti/", vi: "Phát âm /ˈθɜːr.ti/" }, { en: "B. /ˌθɜːrˈtiːn/", vi: "Phát âm /ˌθɜːrˈtiːn/" }, { en: "C. /ˈtriː.ti/", vi: "Phát âm /ˈtriː.ti/" }, { en: "D. /ˈθɜːr.ten/", vi: "Phát âm /ˈθɜːr.ten/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Fifty yards to the pin.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈfɪf.ti jɑːrds tuː ðə pɪn/<br>Còn 50 yard nữa tới cờ.</span>",
        audioText: "Fifty yards to the pin.",
        options: [{ en: "A. Âm tiết đầu (Fif-)", vi: "Nhấn âm đầu (FIF-ty)" }, { en: "B. Âm tiết cuối (-ty)", vi: "Nhấn âm cuối (Fif-TY)" }, { en: "C. Cả hai âm tiết", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Hole 1.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hoʊl wʌn/<br>Hố số 1.</span>",
        audioText: "Hole 1.",
        options: [{ en: "A. /wʌn/", vi: "Phát âm /wʌn/" }, { en: "B. /oʊn/", vi: "Phát âm /oʊn/" }, { en: "C. /wɒn/", vi: "Phát âm /wɒn/" }, { en: "D. /vʌn/", vi: "Phát âm /vʌn/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "2 shots.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/tuː ʃɒts/<br>2 cú đánh.</span>",
        audioText: "2 shots.",
        options: [{ en: "A. /tuː/", vi: "Phát âm nguyên âm /tuː/" }, { en: "B. /tʊ/", vi: "Phát âm nguyên âm /tʊ/" }, { en: "C. /toʊ/", vi: "Phát âm nguyên âm /toʊ/" }, { en: "D. /tʌ/", vi: "Phát âm nguyên âm /tʌ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Ten yards.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ten jɑːrds/<br>10 yard.</span>",
        audioText: "Ten yards.",
        options: [{ en: "A. /e/", vi: "Chứa nguyên âm ngắn /e/" }, { en: "B. /æ/", vi: "Chứa nguyên âm /æ/" }, { en: "C. /ɪ/", vi: "Chứa nguyên âm /ɪ/" }, { en: "D. /ʌ/", vi: "Chứa nguyên âm /ʌ/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "11th hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪˈlev.ənθ hoʊl/<br>Hố số 11.</span>",
        audioText: "11th hole.",
        options: [{ en: "A. Âm tiết 2 (-lev-)", vi: "Nhấn âm thứ hai (e-LEV-en)" }, { en: "B. Âm tiết 1 (E-)", vi: "Nhấn âm thứ nhất (E-lev-en)" }, { en: "C. Âm tiết 3 (-en)", vi: "Nhấn âm thứ ba (e-lev-EN)" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "3rd hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/θɜːrd hoʊl/<br>Hố số 3.</span>",
        audioText: "3rd hole.",
        options: [{ en: "A. /θɜːrd/", vi: "Phát âm /θɜːrd/" }, { en: "B. /θriːθ/", vi: "Phát âm /θriːθ/" }, { en: "C. /θɜːrt/", vi: "Phát âm /θɜːrt/" }, { en: "D. /triːd/", vi: "Phát âm /triːd/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "The distance to the green is 150 yards.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ˈdɪs.təns tuː ðə ɡriːn ɪz wʌn ˈhʌn.drəd ənd ˈfɪf.ti jɑːrds/<br>Khoảng cách đến green là 150 yard.</span>",
        audioText: "The distance to the green is 150 yards.",
        displaySentence: "The distance to the green is _______ yards.", translation: "Khoảng cách đến green là _______ yard.",
        targetWord: "150", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "You have 100 yards left to the pin, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv wʌn ˈhʌn.drəd jɑːrds left tuː ðə pɪn, sɜːr/<br>Anh còn 100 yard nữa là tới cờ thưa anh.</span>",
        audioText: "You have 100 yards left to the pin, sir.",
        displaySentence: "You have _______ yards left to the pin.", translation: "Anh còn _______ yard nữa là tới cờ.",
        targetWord: "100", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "7-iron, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈsev.ən ˈaɪ.ən, sɜːr/<br>Gậy sắt số 7 thưa anh.</span>",
        audioText: "7-iron, sir.",
        options: [{ en: "A. /ˈaɪ.ən/", vi: "Phát âm chuẩn /ˈaɪ.ən/" }, { en: "B. /ˈaɪ.rən/", vi: "Phát âm /ˈaɪ.rən/" }, { en: "C. /ˈiː.rɒn/", vi: "Phát âm /ˈiː.rɒn/" }, { en: "D. /ˈaɪ.roʊn/", vi: "Phát âm /ˈaɪ.roʊn/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Let me check with my rangefinder.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/let miː tʃek wɪð maɪ ˈreɪndʒˌfaɪn.dər/<br>Để tôi kiểm tra bằng máy đo khoảng cách.</span>",
        audioText: "Let me check with my rangefinder.",
        options: [{ en: "A. Rangefinder /ˈreɪndʒˌfaɪn.dər/", vi: "Máy đo khoảng cách Rangefinder" }, { en: "B. Laser Watch", vi: "Đồng hồ laser" }, { en: "C. Meter", vi: "Thước đo" }, { en: "D. Distance Binocular", vi: "Ống nhòm đo khoảng cách" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Excuse me Sir, there are only 13 clubs in your bag. Please check.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪkˈskuːz miː sɜːr, ðer ɑːr ˈoʊn.li ˈθɜːrˈtiːn klʌbz ɪn jʊər bæɡ/<br>Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em.</span>",
        audioText: "Excuse me Sir, there are only 13 clubs in your bag. Please check.",
        options: [
            { en: "A. Excuse me Sir, there are only 13 clubs in your bag. Please check.", vi: "Xin lỗi anh, trong túi chỉ có 13 cây gậy thôi ạ. Anh kiểm tra giúp em." },
            { en: "B. You lost one club already!", vi: "Anh làm mất 1 gậy rồi đấy!" },
            { en: "C. Where is your club? You forgot it.", vi: "Gậy đâu rồi? Anh quên à." },
            { en: "D. Bad bag, only 13 clubs.", vi: "Túi chán thế có 13 gậy." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Checking the distance.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈtʃek.ɪŋ ðə ˈdɪs.təns/<br>Đang kiểm tra khoảng cách.</span>",
        audioText: "Checking the distance.",
        options: [{ en: "A. Âm tiết 1 (Dis-)", vi: "Nhấn âm thứ nhất (DIS-tance)" }, { en: "B. Âm tiết 2 (-tance)", vi: "Nhấn âm thứ hai (Dis-TANCE)" }, { en: "C. Cả hai âm tiết", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "It is one hundred and eighty yards to the pin, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz wʌn ˈhʌn.drəd ənd ˈeɪ.ti jɑːrds tuː ðə pɪn, sɜːr/<br>Còn 180 yard nữa tới cờ thưa anh.</span>",
        audioText: "It is one hundred and eighty yards to the pin, sir.",
        options: [{ en: "A. 180 yards", vi: "Khoảng cách 180 yard" }, { en: "B. 108 yards", vi: "Khoảng cách 108 yard" }, { en: "C. 80 yards", vi: "Khoảng cách 80 yard" }, { en: "D. 118 yards", vi: "Khoảng cách 118 yard" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "This is hole number 5, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðɪs ɪz hoʊl ˈnʌm.bər faɪv, sɜːr/<br>Đây là hố số 5 thưa anh.</span>",
        audioText: "This is hole number 5, sir.",
        displaySentence: "This is hole number _______.", translation: "Đây là hố số _______.",
        targetWord: "5", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Hole 16, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hoʊl ˌsɪkˈstiːn, sɜːr/<br>Hố số 16 thưa anh.</span>",
        audioText: "Hole 16, sir.",
        options: [{ en: "A. /ˌsɪkˈstiːn/", vi: "Phát âm /ˌsɪkˈstiːn/" }, { en: "B. /ˈsɪk.sti/", vi: "Phát âm /ˈsɪk.sti/" }, { en: "C. /sɪks.ten/", vi: "Phát âm Siksten" }, { en: "D. /sɪks.tiːnθ/", vi: "Phát âm Sixteenth" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "You have seventy yards left.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv ˈsev.ən.ti jɑːrds left/<br>Anh còn 70 yard nữa.</span>",
        audioText: "You have seventy yards left.",
        options: [{ en: "A. /ˈsev.ən.ti/", vi: "Phát âm /ˈsev.ən.ti/" }, { en: "B. /ˌsev.ənˈtiːn/", vi: "Phát âm /ˌsev.ənˈtiːn/" }, { en: "C. /seven.tiːn/", vi: "Phát âm Seventeen" }, { en: "D. /sev.ti/", vi: "Phát âm Sevti" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "This is a Par 4 hole, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðɪs ɪz ə pɑːr fɔːr hoʊl/<br>Đây là một hố Par 4.</span>",
        audioText: "This is a Par 4 hole, sir.",
        displaySentence: "This is a Par _______ hole.", translation: "Đây là hố Par _______.",
        targetWord: "4", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Eighty yards to the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈeɪ.ti jɑːrds tuː ðə ɡriːn/<br>Còn 80 yard nữa tới green.</span>",
        audioText: "Eighty yards to the green.",
        options: [{ en: "A. Âm tiết 1 (Eigh-)", vi: "Nhấn âm thứ nhất (EIGH-ty)" }, { en: "B. Âm tiết 2 (-ty)", vi: "Nhấn âm thứ hai (Eigh-TY)" }, { en: "C. Bằng nhau", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "It is two hundred yards from the tee, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz tuː ˈhʌn.drəd jɑːrds frɒm ðə tiː, sɜːr/<br>Cách tee 200 yard thưa anh.</span>",
        audioText: "It is two hundred yards from the tee, sir.",
        options: [{ en: "A. 200 yards", vi: "Khoảng cách 200 yard" }, { en: "B. 120 yards", vi: "Khoảng cách 120 yard" }, { en: "C. 20 yards", vi: "Khoảng cách 20 yard" }, { en: "D. 220 yards", vi: "Khoảng cách 220 yard" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "Here is your 8 iron, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪr ɪz jʊər eɪt ˈaɪ.ən, sɜːr/<br>Gậy sắt số 8 của anh đây thưa anh.</span>",
        audioText: "Here is your 8 iron, sir.",
        displaySentence: "Here is your _______ iron, sir.", translation: "Đây là gậy sắt số _______ của anh.",
        targetWord: "8", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Seventeen yards short.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˌsev.ənˈtiːn jɑːrds ʃɔːrt/<br>Còn thiếu 17 yard.</span>",
        audioText: "Seventeen yards short.",
        options: [{ en: "A. Âm tiết 3 (-teen)", vi: "Nhấn âm thứ ba (Seven-TEEN)" }, { en: "B. Âm tiết 1 (Sev-)", vi: "Nhấn âm thứ nhất (SEVen-teen)" }, { en: "C. Âm tiết 2 (-en-)", vi: "Nhấn âm thứ hai (sev-EN-teen)" }, { en: "D. Không trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Ninety yards to the flag.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈnaɪn.ti jɑːrds tuː ðə flæɡ/<br>Còn 90 yard nữa tới cờ.</span>",
        audioText: "Ninety yards to the flag.",
        options: [{ en: "A. /ˈnaɪn.ti/", vi: "Phát âm /ˈnaɪn.ti/" }, { en: "B. /ˌnaɪnˈtiːn/", vi: "Phát âm /ˌnaɪnˈtiːn/" }, { en: "C. /nin.ti/", vi: "Phát âm Ninti" }, { en: "D. /naɪn.ten/", vi: "Phát âm Nineten" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "It is 125 yards to the pin.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz wʌn ˈhʌn.drəd ənd ˈtwen.ti faɪv jɑːrds tuː ðə pɪn/<br>Còn 125 yard nữa tới cờ.</span>",
        audioText: "It is 125 yards to the pin.",
        options: [
            { en: "A. One hundred and twenty-five yards", vi: "Đọc đầy đủ là 125 yard" },
            { en: "B. Twelve five yards", vi: "Đọc tắt là Twelve five yards" },
            { en: "C. One twenty yards", vi: "Đọc sai là 120 yard" },
            { en: "D. Two hundred yards", vi: "Đọc sai là 200 yard" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "That was 2 shots, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðæt wɒz tuː ʃɒts, sɜːr/<br>Đó là 2 cú đánh thưa anh.</span>",
        audioText: "That was 2 shots, sir.",
        displaySentence: "That was _______ shots, sir.", translation: "Đó là _______ cú đánh ạ.",
        targetWord: "2", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Hole 18 is Par 5.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hoʊl ˌeɪˈtiːn ɪz pɑːr faɪv/<br>Hố số 18 là hố Par 5.</span>",
        audioText: "Hole 18 is Par 5.",
        options: [{ en: "A. /ˌeɪˈtiːn/", vi: "Phát âm /ˌeɪˈtiːn/" }, { en: "B. /ˈeɪ.ti/", vi: "Phát âm /ˈeɪ.ti/" }, { en: "C. /eɪt.ten/", vi: "Phát âm Eitten" }, { en: "D. /eɪ.tiːnθ/", vi: "Phát âm Eighteenth" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Nineteen yards left.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˌnaɪnˈtiːn jɑːrds left/<br>Còn lại 19 yard.</span>",
        audioText: "Nineteen yards left.",
        options: [{ en: "A. /ˌnaɪnˈtiːn/", vi: "Phát âm /ˌnaɪnˈtiːn/" }, { en: "B. /ˈnaɪn.ti/", vi: "Phát âm /ˈnaɪn.ti/" }, { en: "C. /nin.tiːn/", vi: "Phát âm Nintien" }, { en: "D. /naɪn.ten/", vi: "Phát âm Nineten" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Distance in yards.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈdɪs.təns ɪn jɑːrds/<br>Khoảng cách tính bằng yard.</span>",
        audioText: "Distance in yards.",
        options: [{ en: "A. /jɑːrd/", vi: "Phát âm /jɑːrd/" }, { en: "B. /jærd/", vi: "Phát âm /jærd/" }, { en: "C. /jɔːrd/", vi: "Phát âm /jɔːrd/" }, { en: "D. /jʊərd/", vi: "Phát âm /jʊərd/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "fill",
        title: "Here is your 3 wood, sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪr ɪz jʊər θriː wʊd, sɜːr/<br>Gậy gỗ số 3 của anh đây thưa anh.</span>",
        audioText: "Here is your 3 wood, sir.",
        displaySentence: "Here is your _______ wood, sir.", translation: "Đây là gậy gỗ số _______ của anh.",
        targetWord: "3", hint: "💡 Gợi ý: Nhập số."
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "160 yards to the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʌn ˈhʌn.drəd ənd ˈsɪk.sti jɑːrds tuː ðə ɡriːn/<br>Còn 160 yard nữa tới green.</span>",
        audioText: "160 yards to the green.",
        options: [{ en: "A. 160 yards", vi: "Khoảng cách 160 yard" }, { en: "B. 116 yards", vi: "Khoảng cách 116 yard" }, { en: "C. 60 yards", vi: "Khoảng cách 60 yard" }, { en: "D. 610 yards", vi: "Khoảng cách 610 yard" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "1st hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/fɜːrst hoʊl/<br>Hố thứ nhất.</span>",
        audioText: "1st hole.",
        options: [{ en: "A. First hole /fɜːrst həʊl/", vi: "Đọc là Hố thứ nhất (First hole)" }, { en: "B. One hole", vi: "Đọc là Hố một" }, { en: "C. Single hole", vi: "Đọc là Hố đơn" }, { en: "D. Initial hole", vi: "Đọc là Hố đầu" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "2nd hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈsek.ənd hoʊl/<br>Hố thứ hai.</span>",
        audioText: "2nd hole.",
        options: [{ en: "A. Second hole /ˈsek.ənd həʊl/", vi: "Đọc là Hố thứ hai (Second hole)" }, { en: "B. Two hole", vi: "Đọc là Hố hai" }, { en: "C. Double hole", vi: "Đọc là Hố kép" }, { en: "D. Twice hole", vi: "Đọc là Hố gấp đôi" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.2", sectionName: "Số đếm & Khoảng cách", type: "mcq",
        title: "Score is 72.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/skɔːr ɪz ˈsev.ən.ti tuː/<br>Điểm số là 72.</span>",
        audioText: "Score is 72.",
        options: [{ en: "A. Seventy-two", vi: "Đọc là Seventy-two (72)" }, { en: "B. Seven two", vi: "Đọc rời Seven two" }, { en: "C. Seventeen two", vi: "Đọc nhầm Seventeen two" }, { en: "D. Seventy second", vi: "Đọc sai thứ tự Seventy second" }],
        correct: 0
    },

    // =========================================================================
    // SECTION 1.3: LỜI CHÀO, CHĂM SÓC & TRÒ CHUYỆN SỞ THÍCH (CÂU 101 - CÂU 150)
    // =========================================================================
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd ˈmɔːr.nɪŋ, sɜːr! ˈwel.kʌm tuː ˈaʊər ɡɒlf klʌb.../<br>Chào buổi sáng anh! Chào mừng anh tới câu lạc bộ gôn. Em là Caddie của anh hôm nay. Em ở đây để hỗ trợ anh.</span>",
        audioText: "Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.",
        options: [
            { en: "A. Good morning, Sir! Welcome to our golf club. I am your Caddie today. I am here to assist you.", vi: "Chào buổi sáng anh! Chào mừng anh tới sân gôn. Em là Caddie của anh hôm nay. Em ở đây để hỗ trợ anh ạ." },
            { en: "B. Hello Sir! Give me your bag now.", vi: "Chào anh! Đưa túi gậy đây." },
            { en: "C. Hi! Are you ready to play now?", vi: "Chào! Sẵn sàng chơi chưa?" },
            { en: "D. Morning, let's go quickly!", vi: "Chào buổi sáng, đi nhanh lên!" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Is this your first time playing at our course, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪz ðɪs jʊər fɜːrst taɪm ˈpleɪ.ɪŋ æt ˈaʊər kɔːrs, sɜːr/<br>Đây có phải lần đầu anh chơi ở sân của chúng tôi không thưa anh?</span>",
        audioText: "Is this your first time playing at our course, Sir?",
        options: [
            { en: "A. Is this your first time playing at our course, Sir?", vi: "Đây có phải lần đầu anh chơi tại sân của chúng chúng em không ạ?" },
            { en: "B. Did you play here before or never?", vi: "Anh chơi ở đây bao giờ chưa hay chưa từng?" },
            { en: "C. Have you ever seen this course in your life?", vi: "Anh đã từng thấy sân này bao giờ chưa?" },
            { en: "D. Why do you come to our course today?", vi: "Tại sao hôm nay anh lại đến sân này?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "The sun is strong today, Sir. Would you like some cold water?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə sʌn ɪz strɒŋ təˈdeɪ, sɜːr. wʊd juː laɪk sʌm koʊld ˈwɔː.tər/<br>Trời hôm nay nắng gắt thưa anh. Anh có muốn uống chút nước lạnh không?</span>",
        audioText: "The sun is strong today, Sir. Would you like some cold water?",
        options: [
            { en: "A. The sun is strong today, Sir. Would you like some cold water?", vi: "Trời nắng gắt quá anh ạ. Anh có muốn uống chút nước lạnh không ạ?" },
            { en: "B. Drink water now, it is hot.", vi: "Uống nước đi, nóng lắm." },
            { en: "C. Do you have water in your bag?", vi: "Trong túi có nước không?" },
            { en: "D. You look thirsty, go buy water.", vi: "Trông khát đấy, đi mua nước đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "fill",
        title: "The weather is very hot. Would you like a wet towel, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk ə wet ˈtaʊ.əl, sɜːr/<br>Anh có muốn dùng khăn lạnh không thưa anh?</span>",
        audioText: "The weather is very hot. Would you like a wet towel, Sir?",
        displaySentence: "Would you like a wet _______, Sir?", translation: "Anh có muốn dùng một chiếc _______ lạnh không ạ?",
        targetWord: "towel", hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "That is a great shot, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðæt ɪz ə ɡreɪt ʃɒt, sɜːr/<br>Đó là một cú đánh tuyệt vời thưa anh!</span>",
        audioText: "That is a great shot, Sir!",
        options: [
            { en: "A. That is a great shot, Sir!", vi: "Cú đánh tuyệt vời quá anh ơi!" },
            { en: "B. You hit luckily, Sir!", vi: "Anh đánh may mắn thôi ạ!" },
            { en: "C. The ball went fine.", vi: "Bóng đi tạm ổn." },
            { en: "D. Not bad for you.", vi: "Cũng không tệ lắm với anh." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Do you play golf to relax or for business, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː pleɪ ɡɒlf tuː rɪˈlæks ɔːr fɔːr ˈbɪz.nɪs, sɜːr/<br>Anh chơi gôn để thư giãn hay vì công việc thưa anh?</span>",
        audioText: "Do you play golf to relax or for business, Sir?",
        options: [
            { en: "A. Do you play golf to relax or for business, Sir?", vi: "Anh chơi gôn để thư giãn hay cho công việc ạ?" },
            { en: "B. Why do you play golf here?", vi: "Tại sao anh chơi gôn ở đây?" },
            { en: "C. Is golf your work or fun?", vi: "Golf là công việc hay cuộc vui?" },
            { en: "D. Do you make money from golf?", vi: "Anh có kiếm tiền từ golf không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Jogging in the morning.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈdʒɑː.ɡɪŋ ɪn ðə ˈmɔːr.nɪŋ/<br>Chạy bộ buổi sáng.</span>",
        audioText: "Jogging in the morning.",
        options: [{ en: "A. Jogging /ˈdʒɑː.ɡɪŋ/", vi: "Sở thích Chạy bộ thể dục" }, { en: "B. Running", vi: "Chạy nhanh" }, { en: "C. Walking", vi: "Đi bộ" }, { en: "D. Jog", vi: "Chạy nhẹ" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Travelling around the world.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈtræv.əl.ɪŋ əˈraʊnd ðə wɜːrld/<br>Du lịch vòng quanh thế giới.</span>",
        audioText: "Travelling around the world.",
        options: [{ en: "A. Travelling /ˈtræv.əl.ɪŋ/", vi: "Sở thích Đi du lịch" }, { en: "B. Shopping", vi: "Mua sắm" }, { en: "C. Cooking", vi: "Nấu ăn" }, { en: "D. Sleeping", vi: "Ngủ nghỉ" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "What are your hobbies in your free time, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʌt ɑːr jʊər ˈhɒb.iz ɪn jʊər friː taɪm, sɜːr/<br>Sở thích của anh lúc rảnh rỗi là gì thưa anh?</span>",
        audioText: "What are your hobbies in your free time, Sir?",
        options: [
            { en: "A. What are your hobbies in your free time, Sir?", vi: "Sở thích lúc rảnh rỗi của anh là gì ạ?" },
            { en: "B. What do you do when you are lazy?", vi: "Anh làm gì khi lười biếng?" },
            { en: "C. Why don't you work at weekend?", vi: "Sao cuối tuần anh không làm việc?" },
            { en: "D. Tell me your secret hobbies.", vi: "Kể em nghe sở thích bí mật đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "I like travelling too, Sir! I also like cooking.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ laɪk ˈtræv.əl.ɪŋ tuː, sɜːr! aɪ ˈɔːl.soʊ laɪk ˈkʊk.ɪŋ/<br>Em cũng thích du lịch thưa anh! Em còn thích nấu ăn nữa.</span>",
        audioText: "I like travelling too, Sir! I also like cooking.",
        options: [
            { en: "A. I like travelling too, Sir! I also like cooking.", vi: "Em cũng thích du lịch ạ! Em còn thích nấu ăn nữa." },
            { en: "B. I hate travelling, it costs money.", vi: "Em ghét du lịch, tốn tiền." },
            { en: "C. I don't have free time like you.", vi: "Em không có thời gian rảnh như anh." },
            { en: "D. I only like staying at home.", vi: "Em chỉ thích ở nhà thôi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Watching TV.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈwɑːtʃ.ɪŋ ˌtiːˈviː/<br>Xem TV.</span>",
        audioText: "Watching TV.",
        options: [{ en: "A. Watching TV /ˈwɑːtʃ.ɪŋ ˌtiːˈviː/", vi: "Sở thích Xem TV" }, { en: "B. Looking TV", vi: "Nhìn TV" }, { en: "C. Seeing TV", vi: "Thấy TV" }, { en: "D. Listen TV", vi: "Nghe TV" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Shopping on weekends.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈʃɑː.pɪŋ ɒn ˈwiːkˌɛndz/<br>Mua sắm vào cuối tuần.</span>",
        audioText: "Shopping on weekends.",
        options: [{ en: "A. Shopping /ˈʃɑː.pɪŋ/", vi: "Sở thích Mua sắm" }, { en: "B. Buying", vi: "Mua hàng" }, { en: "C. Selling", vi: "Bán hàng" }, { en: "D. Market", vi: "Đi chợ" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Cooking for my family.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈkʊk.ɪŋ fɔːr maɪ ˈfæm.əl.i/<br>Nấu ăn cho gia đình.</span>",
        audioText: "Cooking for my family.",
        options: [{ en: "A. Cooking /ˈkʊk.ɪŋ/", vi: "Sở thích Nấu ăn" }, { en: "B. Cooked", vi: "Đã nấu" }, { en: "C. Kitchen", vi: "Nhà bếp" }, { en: "D. Chef", vi: "Đầu bếp" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Do you like travelling or watching TV, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː laɪk ˈtræv.əl.ɪŋ ɔːr ˈwɑːtʃ.ɪŋ ˌtiːˈviː, sɜːr/<br>Anh thích đi du lịch hay xem TV thưa anh?</span>",
        audioText: "Do you like travelling or watching TV, Sir?",
        options: [
            { en: "A. Do you like travelling or watching TV, Sir?", vi: "Anh thích đi du lịch hay xem TV hơn ạ?" },
            { en: "B. Are you travelling and watching TV standard?", vi: "Anh du lịch và xem TV đúng chuẩn chứ?" },
            { en: "C. Why you travel or watch TV?", vi: "Tại sao du lịch hay xem TV?" },
            { en: "D. You choose travel or TV now?", vi: "Chọn du lịch hay TV ngay?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Maintaining eye contact and smiling.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈmeɪn.teɪ.nɪŋ aɪ ˈkɑːn.tækt ənd ˈsmaɪ.lɪŋ/<br>Duy trì giao tiếp bằng mắt và mỉm cười.</span>",
        audioText: "Maintaining eye contact and smiling.",
        options: [
            { en: "A. Giữ giao tiếp bằng mắt và nụ cười thân thiện", vi: "Giao tiếp mắt & nụ cười thân thiện (Eye contact & smiling)" },
            { en: "B. Đứng quay lưng lại phía khách", vi: "Đứng quay lưng lại phía khách" },
            { en: "C. Nhìn xuống đất đọc kịch bản", vi: "Nhìn xuống đất đọc kịch bản" },
            { en: "D. Nói thật nhanh không ngắt nghỉ", vi: "Nói quá nhanh không ngắt nghỉ" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Do you need more sunscreen, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː niːd mɔːr ˈsʌn.skriːn, sɜːr/<br>Anh có cần thêm kem chống nắng không thưa anh?</span>",
        audioText: "Do you need more sunscreen, Sir?",
        options: [
            { en: "A. Do you need more sunscreen, Sir?", vi: "Anh có cần thêm kem chống nắng không ạ?" },
            { en: "B. Do you want to buy a new hat?", vi: "Anh có muốn mua mũ mới không?" },
            { en: "C. Should I call an ambulance?", vi: "Em có nên gọi cấp cứu không?" },
            { en: "D. Please go under the tree and stay there.", vi: "Trú dưới cây và ở yên đó." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Is golf your favorite sport, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪz ɡɒlf jʊər ˈfeɪ.vər.ɪt spɔːrt, sɜːr/<br>Golf có phải môn thể thao yêu thích của anh không thưa anh?</span>",
        audioText: "Is golf your favorite sport, Sir?",
        options: [
            { en: "A. Is golf your favorite sport, Sir?", vi: "Golf có phải môn thể thao yêu thích của anh không ạ?" },
            { en: "B. Do you play golf best in the world?", vi: "Anh chơi golf giỏi nhất thế giới phải không?" },
            { en: "C. Why golf is favorite for you?", vi: "Tại sao golf lại được yêu thích?" },
            { en: "D. Is golf the only sport you know?", vi: "Golf là môn duy nhất anh biết à?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Yes, Sir. Thank you, Ma'am.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jes, sɜːr. ðæŋk juː, mæm/<br>Vâng thưa ông. Cảm ơn thưa bà.</span>",
        audioText: "Yes, Sir. Thank you, Ma'am.",
        options: [{ en: "A. Sir / Ma'am", vi: "Cách xưng hô Sir (Nam) / Ma'am (Nữ)" }, { en: "B. Mister / Missis", vi: "Cách xưng hô Mister / Missis" }, { en: "C. Mister / Lady", vi: "Cách xưng hô Mister / Lady" }, { en: "D. Bro / Sister", vi: "Cách xưng hô Bro / Sister" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "It was my pleasure serving you today, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt wɒz maɪ ˈpleʒ.ər ˈsɜːr.vɪŋ juː təˈdeɪ, sɜːr/<br>Đó là niềm vinh hạnh được phục vụ anh hôm nay thưa anh!</span>",
        audioText: "It was my pleasure serving you today, Sir!",
        options: [
            { en: "A. It was my pleasure serving you today, Sir!", vi: "Rất hân hạnh được phục vụ anh hôm nay ạ!" },
            { en: "B. I know I am very good.", vi: "Em biết em giỏi mà." },
            { en: "C. Give me more tip then.", vi: "Thế thì cho em thêm tiền tip đi." },
            { en: "D. You are welcome, bye.", vi: "Không có gì, tạm biệt." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Play golf to relax.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pleɪ ɡɒlf tuː rɪˈlæks/<br>Chơi gôn để thư giãn.</span>",
        audioText: "Play golf to relax.",
        options: [{ en: "A. Âm tiết thứ 2 (-lax)", vi: "Nhấn âm thứ hai (re-LAX)" }, { en: "B. Âm tiết thứ 1 (Re-)", vi: "Nhấn âm thứ nhất (RE-lax)" }, { en: "C. Cả hai âm tiết", vi: "Nhấn bằng nhau" }, { en: "D. Không có trọng âm", vi: "Không có trọng âm" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "I am very well, thank you, Sir! How are you today?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm ˈver.i wel, ðæŋk juː, sɜːr! haʊ ɑːr juː təˈdeɪ/<br>Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào?</span>",
        audioText: "I am very well, thank you, Sir! How are you today?",
        options: [
            { en: "A. I am very well, thank you, Sir! How are you today?", vi: "Em rất khỏe, cảm ơn anh! Hôm nay anh thế nào ạ?" },
            { en: "B. I am tired because I walk a lot.", vi: "Em mệt vì đi bộ nhiều." },
            { en: "C. Normal, nothing special.", vi: "Bình thường, chẳng có gì đặc biệt." },
            { en: "D. So so, ready to go home.", vi: "Tàm tạm, sẵn sàng về nhà." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Play golf for business.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pleɪ ɡɒlf fɔːr ˈbɪz.nɪs/<br>Chơi gôn vì mục đích kinh doanh/công việc.</span>",
        audioText: "Play golf for business.",
        options: [{ en: "A. 2 âm tiết (/ˈbɪz.nɪs/)", vi: "Đọc 2 âm tiết (/ˈbɪz.nɪs/)" }, { en: "B. 3 âm tiết (/ˈbɪ.zɪ.nəs/)", vi: "Đọc 3 âm tiết" }, { en: "C. 4 âm tiết", vi: "Đọc 4 âm tiết" }, { en: "D. 1 âm tiết", vi: "Đọc 1 âm tiết" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Please get on the buggy, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz ɡet ɒn ðə ˈbʌɡ.i, sɜːr/<br>Mời anh lên xe điện thưa anh.</span>",
        audioText: "Please get on the buggy, Sir.",
        options: [
            { en: "A. Please get on the buggy, Sir.", vi: "Mời anh lên xe điện ạ." },
            { en: "B. Sit down buggy now.", vi: "Ngồi xuống xe ngay." },
            { en: "C. Jump in car quickly.", vi: "Nhảy vào xe nhanh lên." },
            { en: "D. Drive buggy yourself, Sir.", vi: "Tự lái xe đi anh." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Thank you very much, Sir! Have a great day and hope to see you again!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðæŋk juː ˈver.i mʌtʃ, sɜːr! hæv ə ɡreɪt deɪ ənd hoʊp tuː siː juː əˈɡen/<br>Cảm ơn anh rất nhiều thưa anh! Chúc anh một ngày tuyệt vời và hy vọng gặp lại anh!</span>",
        audioText: "Thank you very much, Sir! Have a great day and hope to see you again!",
        options: [
            { en: "A. Thank you very much, Sir! Have a great day and hope to see you again!", vi: "Cảm ơn anh rất nhiều ạ! Chúc anh một ngày tuyệt vời và hẹn gặp lại anh!" },
            { en: "B. Bye bye, give me money.", vi: "Tạm biệt, đưa tiền đây." },
            { en: "C. Finished, go home now.", vi: "Xong rồi, về nhà đi." },
            { en: "D. See you never.", vi: "Không bao giờ gặp lại." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Don't worry, Sir! We can recover on the next shot.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/doʊnt ˈwɜːr.i, sɜːr! wiː kən rɪˈkʌv.ər ɒn ðə nekst ʃɒt/<br>Đừng lo lắng thưa anh! Chúng ta có thể gỡ lại ở cú đánh tiếp theo.</span>",
        audioText: "Don't worry, Sir! We can recover on the next shot.",
        options: [
            { en: "A. Don't worry, Sir! We can recover on the next shot.", vi: "Anh đừng lo lắng ạ! Cú đánh sau chúng ta sẽ gỡ lại được ạ." },
            { en: "B. That was a terrible shot!", vi: "Cú đánh tệ quá!" },
            { en: "C. You lost this game.", vi: "Anh thua trận này rồi." },
            { en: "D. Why did you hit like that?", vi: "Sao anh lại đánh như thế?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Here is your 5-iron, Sir. Is this the club you need?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪr ɪz jʊər faɪv ˈaɪ.ən, sɜːr. ɪz ðɪs ðə klʌb juː niːd/<br>Đây là gậy sắt số 5 của anh thưa anh. Có đúng cây gậy anh cần không?</span>",
        audioText: "Here is your 5-iron, Sir. Is this the club you need?",
        options: [
            { en: "A. Here is your 5-iron, Sir. Is this the club you need?", vi: "Đây là gậy sắt số 5 của anh ạ. Có đúng cây gậy anh cần không ạ?" },
            { en: "B. Take this 5-iron now.", vi: "Cầm lấy gậy số 5 này đi." },
            { en: "C. Is 5-iron okay or not?", vi: "Gậy 5 được hay không?" },
            { en: "D. 5-iron here, hit it.", vi: "Gậy 5 đây, đánh đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Please aim to the left, Sir. There is a bunker on the right.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz eɪm tuː ðə left, sɜːr. ðer ɪz ə ˈbʌŋ.kər ɒn ðə raɪt/<br>Mời anh ngắm sang bên trái thưa anh. Có bẫy cát ở bên phải.</span>",
        audioText: "Please aim to the left, Sir. There is a bunker on the right.",
        options: [
            { en: "A. Please aim to the left, Sir. There is a bunker on the right.", vi: "Anh ngắm sang bên trái giúp em nhé, có bẫy cát bên phải ạ." },
            { en: "B. Hit right into the sand bunker.", vi: "Đánh thẳng vào bẫy cát bên phải." },
            { en: "C. Left is bad, right is sand.", vi: "Trái là xấu, phải là cát." },
            { en: "D. Don't look left or right.", vi: "Đừng nhìn sang trái hay phải." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Watch out for the bunker, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wɒtʃ aʊt fɔːr ðə ˈbʌŋ.kər, sɜːr/<br>Cẩn thận bẫy cát thưa anh.</span>",
        audioText: "Watch out for the bunker, Sir.",
        options: [
            { en: "A. Watch out for the bunker, Sir.", vi: "Anh chú ý bẫy cát nhé ạ." },
            { en: "B. Look at the sand, Sir.", vi: "Nhìn vào cát đi." },
            { en: "C. Bunker is coming to you.", vi: "Bẫy cát đang đến kìa." },
            { en: "D. Danger sand here.", vi: "Cát nguy hiểm ở đây." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Which club do you prefer, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wɪtʃ klʌb duː juː prɪˈfɜːr, sɜːr/<br>Anh thích cây gậy nào hơn thưa anh?</span>",
        audioText: "Which club do you prefer, Sir?",
        options: [
            { en: "A. Anh chọn/muốn cây gậy nào ạ?", vi: "Hỏi nhu cầu gậy: Anh chọn/muốn cây gậy nào ạ?" },
            { en: "B. Gậy này của ai ạ?", vi: "Gậy này của ai ạ?" },
            { en: "C. Anh có thích túi gậy này không?", vi: "Anh có thích túi gậy này không?" },
            { en: "D. Gậy này bao nhiêu tiền ạ?", vi: "Gậy này bao nhiêu tiền ạ?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Here is your golf bag, Sir. All clubs are clean and verified. Thank you!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hɪr ɪz jʊər ɡɒlf bæɡ, sɜːr. ɔːl klʌbz ɑːr kliːn ənd ˈver.ɪ.faɪd/<br>Túi gậy của anh đây thưa anh. Tất cả gậy đã được làm sạch và kiểm tra. Cảm ơn anh!</span>",
        audioText: "Here is your golf bag, Sir. All clubs are clean and verified. Thank you!",
        options: [
            { en: "A. Here is your golf bag, Sir. All clubs are clean and verified. Thank you!", vi: "Túi gậy của anh đây ạ. Tất cả gậy đã được lau sạch và xác minh đủ. Cảm ơn anh!" },
            { en: "B. Take your bag and go.", vi: "Cầm lấy túi rồi đi đi." },
            { en: "C. Finished bag, goodbye.", vi: "Túi xong rồi, tạm biệt." },
            { en: "D. Your bag is heavy, pay tip now.", vi: "Túi nặng quá, đưa tip đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "I play golf for networking.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ pleɪ ɡɒlf fɔːr ˈnetˌwɜːr.kɪŋ/<br>Tôi chơi gôn để kết nối mở rộng mối quan hệ.</span>",
        audioText: "I play golf for networking.",
        options: [
            { en: "A. Tôi chơi golf để giao lưu kết nối đối tác", vi: "Mục đích: Tôi chơi golf để giao lưu kết nối đối tác" },
            { en: "B. Tôi chơi golf để tập thể dục", vi: "Tôi chơi golf để tập thể dục" },
            { en: "C. Tôi chơi golf vì bạn bè rủ", vi: "Tôi chơi golf vì bạn bè rủ" },
            { en: "D. Tôi chơi golf để thi đấu chuyên nghiệp", vi: "Tôi chơi golf để thi đấu chuyên nghiệp" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Besides golf, I love playing tennis.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/bɪˈsaɪdz ɡɒlf, aɪ lʌv ˈpleɪ.ɪŋ ˈten.ɪs/<br>Bên cạnh gôn, tôi thích chơi tennis.</span>",
        audioText: "Besides golf, I love playing tennis.",
        options: [
            { en: "A. Oh tennis too? You must be very active, Sir!", vi: "Ồ cả tennis nữa ạ? Anh chắc hẳn rất năng động ạ!" },
            { en: "B. Tennis is boring.", vi: "Tennis chán lắm." },
            { en: "C. Don't play tennis, play golf only.", vi: "Đừng chơi tennis, chỉ chơi golf thôi." },
            { en: "D. I don't know tennis.", vi: "Em không biết tennis." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Would you like an umbrella, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk ən ˈʌm.brə.lə, sɜːr/<br>Anh có muốn dùng ô không thưa anh?</span>",
        audioText: "Would you like an umbrella, Sir?",
        options: [
            { en: "A. Would you like an umbrella, Sir?", vi: "Anh có muốn dùng ô che không ạ?" },
            { en: "B. Take umbrella yourself.", vi: "Tự lấy ô đi." },
            { en: "C. Do you buy an umbrella?", vi: "Anh có mua ô không?" },
            { en: "D. Umbrella is heavy.", vi: "Ô nặng lắm." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "fill",
        title: "Would you like some cold water, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk sʌm koʊld ˈwɔː.tər, sɜːr/<br>Anh có muốn dùng chút nước lạnh không thưa anh?</span>",
        audioText: "Would you like some cold water, Sir?",
        displaySentence: "Would you like some cold _______, Sir?", translation: "Anh có muốn dùng chút _______ lạnh không ạ?",
        targetWord: "water", hint: "💡 Gợi ý: Từ gồm 5 ký tự."
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Beautiful day, isn't it, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈbjuː.tɪ.fəl deɪ, ˈɪz.ənt ɪt, sɜːr/<br>Ngày đẹp trời phải không thưa anh?</span>",
        audioText: "Beautiful day, isn't it, Sir?",
        options: [
            { en: "A. Beautiful day, isn't it, Sir?", vi: "Một ngày thời tiết tuyệt vời phải không anh?" },
            { en: "B. Weather is terrible today.", vi: "Thời tiết hôm nay tệ quá." },
            { en: "C. Why are you playing today?", vi: "Sao hôm nay anh lại chơi?" },
            { en: "D. Rain is coming soon.", vi: "Trời sắp mưa rồi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "I am here for business.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ æm hɪr fɔːr ˈbɪz.nɪs/<br>Tôi đến đây vì công việc.</span>",
        audioText: "I am here for business.",
        options: [
            { en: "A. I see! Do you often play golf to network, Sir?", vi: "Em hiểu rồi ạ! Anh có thường chơi golf để kết nối đối tác không ạ?" },
            { en: "B. Business is boring.", vi: "Kinh doanh chán lắm." },
            { en: "C. Don't talk about business here.", vi: "Đừng bàn công việc ở đây." },
            { en: "D. You are very rich.", vi: "Anh giàu quá." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Swimming in summer.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈswɪm.ɪŋ ɪn ˈsʌm.ər/<br>Bơi lội vào mùa hè.</span>",
        audioText: "Swimming in summer.",
        options: [{ en: "A. Swimming /ˈswɪm.ɪŋ/", vi: "Sở thích Bơi lội" }, { en: "B. Diving", vi: "Lặn" }, { en: "C. Running", vi: "Chạy" }, { en: "D. Walking", vi: "Đi bộ" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Reading books.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈriː.dɪŋ bʊks/<br>Đọc sách.</span>",
        audioText: "Reading books.",
        options: [{ en: "A. Reading /ˈriː.dɪŋ/", vi: "Sở thích Đọc sách" }, { en: "B. Writing", vi: "Viết sách" }, { en: "C. Listening", vi: "Lắng nghe" }, { en: "D. Speaking", vi: "Nói chuyện" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Congratulations on your birdie, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/kənˌɡrætʃ.əˈleɪ.ʃənz ɒn jʊər ˈbɜːr.di, sɜːr/<br>Chúc mừng anh đã đạt điểm birdie thưa anh!</span>",
        audioText: "Congratulations on your birdie, Sir!",
        options: [
            { en: "A. Congratulations on your birdie, Sir!", vi: "Chúc mừng anh đã đạt điểm Birdie ạ!" },
            { en: "B. Birdie is easy.", vi: "Birdie dễ mà." },
            { en: "C. Lucky shot only.", vi: "Đánh may thôi." },
            { en: "D. You can do better next time.", vi: "Lần sau anh làm tốt hơn." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Please be careful, there is water behind the green, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz biː ˈker.fəl, ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/<br>Xin hãy cẩn thận, có nước ở phía sau green thưa anh.</span>",
        audioText: "Please be careful, there is water behind the green, Sir.",
        options: [
            { en: "A. Please be careful, there is water behind the green, Sir.", vi: "Anh cẩn thận giúp em, có nước ở phía sau green ạ." },
            { en: "B. Hit straight into the water.", vi: "Đánh thẳng xuống nước đi." },
            { en: "C. Water is clean and safe.", vi: "Nước sạch và an toàn." },
            { en: "D. Don't worry about water.", vi: "Đừng lo về nước." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Your ball is clean now, Sir. Good luck with your putt!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jʊər bɔːl ɪz kliːn naʊ, sɜːr. ɡʊd lʌk wɪð jʊər pʌt/<br>Bóng của anh đã sạch rồi thưa anh. Chúc anh gạt bóng thành công!</span>",
        audioText: "Your ball is clean now, Sir. Good luck with your putt!",
        options: [
            { en: "A. Your ball is clean now, Sir. Good luck with your putt!", vi: "Bóng của anh đã được lau sạch rồi ạ. Chúc anh gạt bóng may mắn ạ!" },
            { en: "B. Take your dirty ball.", vi: "Cầm lấy bóng bẩn này." },
            { en: "C. Clean ball yourself next time.", vi: "Lần sau tự lau bóng." },
            { en: "D. Ball is too old.", vi: "Bóng cũ quá." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "fill",
        title: "Good luck with your shot, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd lʌk wɪð jʊər ʃɒt, sɜːr/<br>Chúc may mắn với cú đánh của anh thưa anh!</span>",
        audioText: "Good luck with your shot, Sir!",
        displaySentence: "Good _______ with your shot, Sir!", translation: "Chúc anh _______ mắn với cú đánh ạ!",
        targetWord: "luck", hint: "💡 Gợi ý: Từ gồm 4 ký tự."
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Listening to music.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈlɪs.ən.ɪŋ tuː ˈmjuː.zɪk/<br>Nghe nhạc.</span>",
        audioText: "Listening to music.",
        options: [{ en: "A. /ˈmjuː.zɪk/", vi: "Phát âm /ˈmjuː.zɪk/" }, { en: "B. /ˈmuː.zɪk/", vi: "Phát âm /ˈmuː.zɪk/" }, { en: "C. /ˈmjuː.sɪk/", vi: "Phát âm /ˈmjuː.sɪk/" }, { en: "D. /muː.sɪk/", vi: "Phát âm /muː.sɪk/" }],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Please hit straight ahead, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz hɪt streɪt əˈhed, sɜːr/<br>Xin hãy đánh thẳng về phía trước thưa anh.</span>",
        audioText: "Please hit straight ahead, Sir.",
        options: [
            { en: "A. Please hit straight ahead, Sir.", vi: "Anh đánh thẳng phía trước giúp em nhé ạ." },
            { en: "B. Aim left side only.", vi: "Ngắm bên trái thôi." },
            { en: "C. Aim right side only.", vi: "Ngắm bên phải thôi." },
            { en: "D. Hit backward, Sir.", vi: "Đánh ngược về sau." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "The storm is coming near. Let's go back to the clubhouse, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə stɔːrm ɪz ˈkʌm.ɪŋ nɪr. lets ɡoʊ bæk tuː ðə ˈklʌbˌhʌb, sɜːr/<br>Cơn bão đang tiến đến gần. Chúng ta hãy quay về nhà câu lạc bộ thưa anh.</span>",
        audioText: "The storm is coming near. Let's go back to the clubhouse, Sir.",
        options: [
            { en: "A. The storm is coming near. Let's go back to the clubhouse, Sir.", vi: "Cơn bão đang đến gần rồi ạ. Chúng ta nên quay về nhà câu lạc bộ cho an toàn thưa anh." },
            { en: "B. Keep playing in the rain.", vi: "Cứ tiếp tục chơi trong mưa." },
            { en: "C. Sit under the tall tree.", vi: "Ngồi dưới cây to." },
            { en: "D. Lightning is not dangerous.", vi: "Sấm sét không nguy hiểm." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "I play golf with my family.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ pleɪ ɡɒlf wɪð maɪ ˈfæm.əl.i/<br>Tôi chơi gôn cùng với gia đình.</span>",
        audioText: "I play golf with my family.",
        options: [
            { en: "A. Tôi chơi golf cùng với gia đình", vi: "Ý nghĩa: Tôi chơi golf cùng với gia đình" },
            { en: "B. Tôi chơi golf một mình", vi: "Tôi chơi golf một mình" },
            { en: "C. Tôi chơi golf với đồng nghiệp", vi: "Tôi chơi golf với đồng nghiệp" },
            { en: "D. Tôi chơi golf với Caddie", vi: "Tôi chơi golf với Caddie" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Don't worry, Sir. I will find your ball.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/doʊnt ˈwɜːr.i, sɜːr. aɪ wɪl faɪnd jʊər bɔːl/<br>Đừng lo lắng thưa anh. Em sẽ tìm bóng giúp anh.</span>",
        audioText: "Don't worry, Sir. I will find your ball.",
        options: [
            { en: "A. Don't worry, Sir. I will find your ball.", vi: "Anh đừng lo lắng ạ. Em sẽ tìm bóng giúp anh ngay." },
            { en: "B. Ball is lost, buy new ball.", vi: "Mất bóng rồi, mua bóng mới đi." },
            { en: "C. Find it yourself, Sir.", vi: "Tự đi mà tìm." },
            { en: "D. You hit very bad.", vi: "Anh đánh tệ quá." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Take your time, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/teɪk jʊər taɪm, sɜːr/<br>Cứ từ tốn bình tĩnh thôi thưa anh.</span>",
        audioText: "Take your time, Sir.",
        options: [
            { en: "A. Take your time, Sir.", vi: "Anh cứ từ tốn bình tĩnh thôi ạ." },
            { en: "B. Hit quickly and go.", vi: "Đánh nhanh lên rồi đi." },
            { en: "C. Hurry up, we are slow.", vi: "Nhanh lên, chúng ta chậm rồi." },
            { en: "D. Don't think too much.", vi: "Đừng suy nghĩ." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Would you like to sit and rest for a moment, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk tuː sɪt ənd rest fɔːr ə ˈmoʊ.mənt, sɜːr/<br>Anh có muốn ngồi xuống nghỉ ngơi một chút không thưa anh?</span>",
        audioText: "Would you like to sit and rest for a moment, Sir?",
        options: [
            { en: "A. Would you like to sit and rest for a moment, Sir?", vi: "Anh có muốn ngồi nghỉ ngơi một chút không ạ?" },
            { en: "B. Keep running, Sir.", vi: "Tiếp tục chạy đi anh." },
            { en: "C. You are too weak.", vi: "Anh yếu quá." },
            { en: "D. Walk faster, Sir.", vi: "Đi nhanh lên anh." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.3", sectionName: "Lời chào & Trò chuyện", type: "mcq",
        title: "Have a great game today, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hæv ə ɡreɪt ɡeɪm təˈdeɪ, sɜːr/<br>Chúc anh có một trận đấu tuyệt vời hôm nay thưa anh!</span>",
        audioText: "Have a great game today, Sir!",
        options: [
            { en: "A. Have a great game today, Sir!", vi: "Chúc anh có một trận đấu tuyệt vời hôm nay ạ!" },
            { en: "B. You will lose today.", vi: "Hôm nay anh sẽ thua." },
            { en: "C. Pay money now.", vi: "Trả tiền ngay." },
            { en: "D. Bye bye, Sir.", vi: "Tạm biệt anh." }
        ],
        correct: 0
    }
  // ====================================================================
// SECTION 1.4: SỞ THÍCH (CÂU 1 - CÂU 35)
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
// SECTION 1.5: THỰC HÀNH & LUYỆN TẬP (CÂU 1 - CÂU 35)
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
        title: "You have 13 clubs and 1 umbrella. Rangefinder is in the right pocket.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv ˈθɜː.tiːn klʌbz ænd wʌn ʌmˈbrel.ə reɪndʒˌfaɪn.dər ɪz ɪn ðə raɪt ˈpɒk.ɪt/</span> Anh có đủ 13 gậy và 1 cái ô. Ông ống đo khoảng cách em để ngăn túi bên phải ạ.",
        audioText: "You have 13 clubs and 1 umbrella. Rangefinder is in the right pocket.",
        options: [
            { en: "A. You have 13 clubs and 1 umbrella. Rangefinder is in the right pocket.", vi: "Anh có đủ 13 gậy và 1 cái ô. Ông ống đo khoảng cách em để ngăn túi bên phải ạ." },
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
        title: "Sir/Madam, I counted your clubs. It seems we have 15 clubs.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/sɜːr ˈmæd.əm aɪ ˈkaʊn.tɪd jɔː klʌbz ɪt siːmz wiː hæv ˈfɪf.tiːn klʌbz/</span> Anh/Chị ơi, em đã đếm số gậy. Có vẻ như bộ gậy đang bị thừa thành 15 cây gậy ạ.",
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
        title: "To avoid penalties, I suggest removing the excess club before we start.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/tuː əˈvɔɪd ˈpen.əl.tiz aɪ səˈdʒest rɪˈmuːv.ɪŋ ðə ɪkˈses klʌb bɪˈfɔːr wiː stɑːt/</span> Để tránh bị phạt gậy, em xuất xuất bỏ bớt 1 cây thừa trước khi bắt đầu ạ.",
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
