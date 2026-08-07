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
// SECTION 1.4: HƯỚNG DẪN & VỊ TRÍ (CÂU 1 - CÂU 35)
// ====================================================================
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The ball is on the right side of the fairway bunker.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə bɔːl ɪz ɒn ðə raɪt saɪd əv ðə ˈfeə.weɪ ˈbʌŋ.kər/</span> Bóng nằm ở phía bên phải của hố cát trên đường bóng lăn.",
        audioText: "The ball is on the right side of the fairway bunker.",
        options: [
            { en: "A. The ball is on the right side of the fairway bunker.", vi: "Bóng nằm ở phía bên phải của hố cát trên đường bóng lăn." },
            { en: "B. The ball is on the left side of the fairway bunker.", vi: "Bóng nằm ở phía bên trái của hố cát trên đường bóng lăn." },
            { en: "C. The ball is inside the fairway bunker.", vi: "Bóng nằm bên trong hố cát." },
            { en: "D. The ball is behind the fairway bunker.", vi: "Bóng nằm phía sau hố cát." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "It is between the palm trees and the bunker.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz bɪˈtwiːn ðə pɑːm triːz ænd ðə ˈbʌŋ.kər/</span> Nó nằm giữa những cây dừa và hố cát.",
        audioText: "It is between the palm trees and the bunker.",
        options: [
            { en: "A. It is next to the palm trees.", vi: "Nó ở bên cạnh những cây dừa." },
            { en: "B. It is between the palm trees and the bunker.", vi: "Nó nằm giữa những cây dừa và hố cát." },
            { en: "C. It is behind the bunker.", vi: "Nó ở phía sau hố cát." },
            { en: "D. It is in front of the trees.", vi: "Nó ở phía trước những cái cây." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "How do I get to the driving range?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/haʊ duː aɪ ɡet tuː ðə ˈdraɪ.vɪŋ reɪndʒ/</span> Làm thế nào để tôi đi đến sân tập đánh bóng?",
        audioText: "How do I get to the driving range?",
        options: [
            { en: "A. How do I get to the driving range?", vi: "Làm thế nào để tôi đi đến sân tập đánh bóng?" },
            { en: "B. Where is the clubhouse?", vi: "Nhà câu lạc bộ ở đâu?" },
            { en: "C. How far is the green?", vi: "Khoảng cách tới green là bao nhiêu?" },
            { en: "D. Can I go to the locker room?", vi: "Tôi có thể vào phòng đồ không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Please turn left at the corner of the clubhouse.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz tɜːn left æt ðə ˈkɔː.nər əv ðə ˈklʌb.haʊs/</span> Xin vui lòng rẽ trái tại góc của nhà câu lạc bộ.",
        audioText: "Please turn left at the corner of the clubhouse.",
        options: [
            { en: "A. Turn right at the clubhouse.", vi: "Rẽ phải ở nhà câu lạc bộ." },
            { en: "B. Go straight past the clubhouse.", vi: "Đi thẳng qua nhà câu lạc bộ." },
            { en: "C. Please turn left at the corner of the clubhouse.", vi: "Xin vui lòng rẽ trái tại góc của nhà câu lạc bộ." },
            { en: "D. Stop in front of the clubhouse.", vi: "Dừng lại trước nhà câu lạc bộ." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Go past the putting green and cross the cart path.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡəʊ pɑːst ðə ˈpʌt.ɪŋ ɡriːn ænd krɒs ðə kɑːt pɑːθ/</span> Đi qua khu vực tập gạt bóng và băng qua đường xe điện.",
        audioText: "Go past the putting green and cross the cart path.",
        options: [
            { en: "A. Stop at the putting green.", vi: "Dừng lại ở green tập gạt." },
            { en: "B. Go past the putting green and cross the cart path.", vi: "Đi qua khu vực tập gạt bóng và băng qua đường xe điện." },
            { en: "C. Turn right at the cart path.", vi: "Rẽ phải ở đường xe điện." },
            { en: "D. Turn left before the putting green.", vi: "Rẽ trái trước green tập gạt." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Is there any restroom near here?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪz ðeər ˈeni ˈrest.ruːm nɪər hɪər/</span> Có nhà vệ sinh nào gần đây không?",
        audioText: "Is there any restroom near here?",
        options: [
            { en: "A. Is there any restroom near here?", vi: "Có nhà vệ sinh nào gần đây không?" },
            { en: "B. Where is the pro shop?", vi: "Cửa hàng dụng cụ ở đâu?" },
            { en: "C. Can I have some water?", vi: "Tôi có thể xin chút nước không?" },
            { en: "D. Is the green open?", vi: "Green có mở cửa không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "It is opposite the starter station.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz ˈɒp.ə.zɪt ðə ˈstɑː.tər ˈsteɪ.ʃən/</span> Nó đối diện với trạm điều hành xuất phát (starter).",
        audioText: "It is opposite the starter station.",
        options: [
            { en: "A. It is next to the starter station.", vi: "Nó kế bên trạm xuất phát." },
            { en: "B. It is behind the starter station.", vi: "Nó ở sau trạm xuất phát." },
            { en: "C. It is opposite the starter station.", vi: "Nó đối diện với trạm điều hành xuất phát (starter)." },
            { en: "D. It is inside the starter station.", vi: "Nó ở trong trạm xuất phát." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The ball is in front of the water hazard.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə bɔːl ɪz ɪn frʌnt əv ðə ˈwɔː.tər ˈhæz.əd/</span> Bóng nằm ngay phía trước bẫy nước.",
        audioText: "The ball is in front of the water hazard.",
        options: [
            { en: "A. The ball is in front of the water hazard.", vi: "Bóng nằm ngay phía trước bẫy nước." },
            { en: "B. The ball is in the water hazard.", vi: "Bóng rơi vào bẫy nước." },
            { en: "C. The ball is behind the water hazard.", vi: "Bóng nằm phía sau bẫy nước." },
            { en: "D. The ball is on the green.", vi: "Bóng đã lên green." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "You should hit straight to the aim pole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ʃʊd hɪt streɪt tuː ðə eɪm pəʊl/</span> Anh nên đánh thẳng về phía cọc định hướng.",
        audioText: "You should hit straight to the aim pole.",
        options: [
            { en: "A. Hit to the left bunker.", vi: "Đánh vào hố cát bên trái." },
            { en: "B. You should hit straight to the aim pole.", vi: "Anh nên đánh thẳng về phía cọc định hướng." },
            { en: "C. Hit over the trees.", vi: "Đánh qua rặng cây." },
            { en: "D. Lay up before the pole.", vi: "Đánh ngắn trước cọc." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Your ball flies to the left side of the fairway.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl flaɪz tuː ðə left saɪd əv ðə ˈfeə.weɪ/</span> Bóng của anh bay sang phía bên trái của đường fairway.",
        audioText: "Your ball flies to the left side of the fairway.",
        options: [
            { en: "A. Your ball is in the right bunker.", vi: "Bóng của anh rơi vào hố cát bên phải." },
            { en: "B. Your ball goes Out of Bounds.", vi: "Bóng của anh ra ngoài biên." },
            { en: "C. Your ball flies to the left side of the fairway.", vi: "Bóng của anh bay sang phía bên trái của đường fairway." },
            { en: "D. Your ball is on the green.", vi: "Bóng của anh đã lên green." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Please aim to the right side of the pin to be safe.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz eɪm tuː ðə raɪt saɪd əv ðə pɪn tuː biː seɪf/</span> Xin hãy nhắm về phía bên phải cờ để an toàn.",
        audioText: "Please aim to the right side of the pin to be safe.",
        options: [
            { en: "A. Please aim to the right side of the pin to be safe.", vi: "Xin hãy nhắm về phía bên phải cờ để an toàn." },
            { en: "B. Aim directly at the water hazard.", vi: "Nhắm thẳng vào bẫy nước." },
            { en: "C. Aim to the left bunker.", vi: "Nhắm vào hố cát bên trái." },
            { en: "D. Hit it as hard as you can.", vi: "Đánh hết lực có thể." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The pin is tucked in the back right corner.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə pɪn ɪz tʌkt ɪn ðə bæk raɪt ˈkɔː.nər/</span> Cờ hôm nay nằm giấu ở góc sâu bên phải green.",
        audioText: "The pin is tucked in the back right corner.",
        options: [
            { en: "A. The pin is in the front center.", vi: "Cờ nằm ở phía trước chính giữa." },
            { en: "B. The pin is tucked in the back right corner.", vi: "Cờ hôm nay nằm giấu ở góc sâu bên phải green." },
            { en: "C. The pin is on the left edge.", vi: "Cờ nằm ở mép bên trái." },
            { en: "D. The pin is in the middle of green.", vi: "Cờ nằm ở giữa green." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "I recommend playing to the center of the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ ˌrek.əˈmend ˈpleɪ.ɪŋ tuː ðə ˈsen.tər əv ðə ɡriːn/</span> Em kiến nghị anh nên đánh vào chính giữa green.",
        audioText: "I recommend playing to the center of the green.",
        options: [
            { en: "A. Aim directly for the pin.", vi: "Nhắm thẳng vào cờ." },
            { en: "B. I recommend playing to the center of the green.", vi: "Em kiến nghị anh nên đánh vào chính giữa green." },
            { en: "C. Lay up short of the green.", vi: "Đánh an toàn trước green." },
            { en: "D. Hit towards the bunker.", vi: "Đánh hướng về hố cát." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Where is the nearest point of complete relief?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/weər ɪz ðə ˈnɪə.rɪst pɔɪnt əv kəmˈpliːt rɪˈliːf/</span> Điểm giải thoát hoàn toàn gần nhất ở đâu?",
        audioText: "Where is the nearest point of complete relief?",
        options: [
            { en: "A. Where is the nearest point of complete relief?", vi: "Điểm giải thoát hoàn toàn gần nhất ở đâu?" },
            { en: "B. Where is my golf ball?", vi: "Bóng của tôi ở đâu?" },
            { en: "C. How many penalty strokes do I get?", vi: "Tôi bị phạt bao nhiêu gậy?" },
            { en: "D. Is the ball playable?", vi: "Bóng này có đánh được không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Drop the ball within one club-length from the reference point.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/drɒp ðə bɔːl wɪˈðɪn wʌn klʌb leŋθ frɒm ðə ˈref.ər.əns pɔɪnt/</span> Thả bóng trong phạm vi một chiều dài gậy từ điểm tham chiếu.",
        audioText: "Drop the ball within one club-length from the reference point.",
        options: [
            { en: "A. Place the ball on the green.", vi: "Đặt bóng lên green." },
            { en: "B. Drop the ball within one club-length from the reference point.", vi: "Thả bóng trong phạm vi một chiều dài gậy từ điểm tham chiếu." },
            { en: "C. Drop two club-lengths away.", vi: "Thả bóng cách xa 2 chiều dài gậy." },
            { en: "D. Throw the ball onto fairway.", vi: "Ném bóng ra đường fairway." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The relief area is two club-lengths no closer to the hole.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə rɪˈliːf ˈeə.ri.ə ɪz tuː klʌb leŋθs nəʊ ˈkləʊ.sər tuː ðə həʊl/</span> Khu vực giải thoát là hai chiều dài gậy không gần lỗ hơn.",
        audioText: "The relief area is two club-lengths no closer to the hole.",
        options: [
            { en: "A. The relief area is inside the bunker.", vi: "Khu vực giải thoát ở trong hố cát." },
            { en: "B. The relief area is closer to the pin.", vi: "Khu vực giải thoát gần cờ hơn." },
            { en: "C. The relief area is two club-lengths no closer to the hole.", vi: "Khu vực giải thoát là hai chiều dài gậy không gần lỗ hơn." },
            { en: "D. You can drop anywhere on fairway.", vi: "Anh có thể thả bóng ở bất kỳ đâu trên fairway." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "You can take back-on-the-line relief with one penalty stroke.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː kæn teɪk bæk ɒn ðə laɪn rɪˈliːf wɪð wʌn ˈpen.əl.ti strəʊk/</span> Anh có thể giải thoát lùi trên đường kéo dài kèm 1 gậy phạt.",
        audioText: "You can take back-on-the-line relief with one penalty stroke.",
        options: [
            { en: "A. You can take back-on-the-line relief with one penalty stroke.", vi: "Anh có thể giải thoát lùi trên đường kéo dài kèm 1 gậy phạt." },
            { en: "B. You must play the ball as it lies.", vi: "Anh phải đánh bóng ở vị trí nguyên trạng." },
            { en: "C. Take free relief without penalty.", vi: "Giải thoát miễn phí không phạt gậy." },
            { en: "D. Drop the ball on the green.", vi: "Thả bóng trực tiếp lên green." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Please maintain a safe distance with the front buggy.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz meɪnˈteɪn ə seɪf ˈdɪs.təns wɪð ðə frʌnt ˈbʌɡ.i/</span> Xin giữ khoảng cách an toàn với xe điện phía trước.",
        audioText: "Please maintain a safe distance with the front buggy.",
        options: [
            { en: "A. Overtake the front buggy now.", vi: "Vượt xe điện phía trước ngay." },
            { en: "B. Please maintain a safe distance with the front buggy.", vi: "Xin giữ khoảng cách an toàn với xe điện phía trước." },
            { en: "C. Drive as fast as possible.", vi: "Lái xe nhanh nhất có thể." },
            { en: "D. Park the buggy on the green.", vi: "Đỗ xe điện trên mặt green." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Slow down and mind your speed around this bend.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/sləʊ daʊn ænd maɪnd jɔː spiːd əˈraʊnd ðɪs bend/</span> Giảm tốc độ và chú ý quan sát khi ôm khúc cua này.",
        audioText: "Slow down and mind your speed around this bend.",
        options: [
            { en: "A. Speed up on the curve.", vi: "Tăng tốc ở đoạn đường khúc cua." },
            { en: "B. Stop the cart immediately.", vi: "Dừng xe ngay lập tức." },
            { en: "C. Slow down and mind your speed around this bend.", vi: "Giảm tốc độ và chú ý quan sát khi ôm khúc cua này." },
            { en: "D. Turn off the cart light.", vi: "Tắt đèn xe điện." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Watch out! There is a cart path crossing ahead.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wɒtʃ aʊt ðeər ɪz ə kɑːt pɑːθ ˈkrɒs.ɪŋ əˈhed/</span> Coi chừng! Có lối giao cắt đường xe điện phía trước.",
        audioText: "Watch out! There is a cart path crossing ahead.",
        options: [
            { en: "A. Watch out! There is a cart path crossing ahead.", vi: "Coi chừng! Có lối giao cắt đường xe điện phía trước." },
            { en: "B. Drive fast across the green.", vi: "Lái xe nhanh qua green." },
            { en: "C. The fairway is completely clear.", vi: "Fairway hoàn toàn thông thoáng." },
            { en: "D. Stop and play from here.", vi: "Dừng lại và đánh bóng từ đây." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Hold on a moment, the ground ahead looks a bit slippery.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/həʊld ɒn ə ˈməʊ.mənt ðə ɡraʊnd əˈhed lʊks ə bɪt ˈslɪp.ər.i/</span> Chờ một chút ạ, mặt đường phía trước trông hơi trơn trượt.",
        audioText: "Hold on a moment, the ground ahead looks a bit slippery.",
        options: [
            { en: "A. Drive faster to cross quickly.", vi: "Lái nhanh hơn để qua cho lẹ." },
            { en: "B. Hold on a moment, the ground ahead looks a bit slippery.", vi: "Chờ một chút ạ, mặt đường phía trước trông hơi trơn trượt." },
            { en: "C. You can walk on the green.", vi: "Anh có thể đi bộ lên green." },
            { en: "D. The road is dry and clear.", vi: "Đường rất khô ráo và sạch sẽ." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Your ball is under the tree branches on the right.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl ɪz ˈʌn.dər ðə triː brɑːn.tʃɪz ɒn ðə raɪt/</span> Bóng của anh nằm dưới tán cành cây bên phải.",
        audioText: "Your ball is under the tree branches on the right.",
        options: [
            { en: "A. Your ball is on top of the green.", vi: "Bóng của anh nằm trên đỉnh green." },
            { en: "B. Your ball is under the tree branches on the right.", vi: "Bóng của anh nằm dưới tán cành cây bên phải." },
            { en: "C. Your ball is in the middle of fairway.", vi: "Bóng của anh nằm giữa fairway." },
            { en: "D. Your ball is in the water.", vi: "Bóng của anh ở dưới nước." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The ball lies behind a large stone in the rough.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə bɔːl laɪz bɪˈhaɪnd ə lɑːdʒ stəʊn ɪn ðə rʌf/</span> Bóng nằm phía sau một tảng đá lớn trong khu vực cỏ dại (rough).",
        audioText: "The ball lies behind a large stone in the rough.",
        options: [
            { en: "A. The ball lies behind a large stone in the rough.", vi: "Bóng nằm phía sau một tảng đá lớn trong khu vực cỏ dại (rough)." },
            { en: "B. The ball is resting on the fairway.", vi: "Bóng nằm đẹp trên đường fairway." },
            { en: "C. The ball is near the cup.", vi: "Bóng nằm sát miệng hố." },
            { en: "D. The ball is in the sand bunker.", vi: "Bóng nằm trong hố cát." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "It is next to the yardage marker post.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪt ɪz nekst tuː ðə ˈjɑː.dɪdʒ ˈmɑː.kər pəʊst/</span> Nó nằm ngay cạnh cột mốc khoảng cách.",
        audioText: "It is next to the yardage marker post.",
        options: [
            { en: "A. It is inside the bunker.", vi: "Nó nằm trong bẫy cát." },
            { en: "B. It is next to the yardage marker post.", vi: "Nó nằm ngay cạnh cột mốc khoảng cách." },
            { en: "C. It is far behind the green.", vi: "Nó nằm tít sau green." },
            { en: "D. It is in the water hazard.", vi: "Nó nằm trong bẫy nước." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The reference point is where the ball crossed the margin.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə ˈref.ər.əns pɔɪnt ɪz weər ðə bɔːl krɒst ðə ˈmɑː.dʒɪn/</span> Điểm tham chiếu là điểm giao cắt nơi bóng cắt qua ranh giới bẫy.",
        audioText: "The reference point is where the ball crossed the margin.",
        options: [
            { en: "A. The reference point is the pin location.", vi: "Điểm tham chiếu là vị trí cờ." },
            { en: "B. The reference point is where the ball crossed the margin.", vi: "Điểm tham chiếu là điểm giao cắt nơi bóng cắt qua ranh giới bẫy." },
            { en: "C. The reference point is the tee box.", vi: "Điểm tham chiếu là khu vực phát bóng." },
            { en: "D. The reference point is inside the hole.", vi: "Điểm tham chiếu nằm ở trong hố." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "You should aim left of the aim pole because of crosswind.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː ʃʊd eɪm left əv ðə eɪm pəʊl bɪˈkɒz əv ˈkrɒs.wɪnd/</span> Anh nên nhắm lệch sang trái cọc tiêu do có gió ngang.",
        audioText: "You should aim left of the aim pole because of crosswind.",
        options: [
            { en: "A. You should aim left of the aim pole because of crosswind.", vi: "Anh nên nhắm lệch sang trái cọc tiêu do có gió ngang." },
            { en: "B. Aim straight to the right bunker.", vi: "Nhắm thẳng vào hố cát bên phải." },
            { en: "C. Hit short to lay up.", vi: "Đánh ngắn để lay up." },
            { en: "D. Do not adjust for the wind.", vi: "Không cần điều chỉnh theo hướng gió." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The ball is embedded in its own pitch mark.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə bɔːl ɪz ɪmˈbed.ɪd ɪn ɪts əʊn pɪtʃ mɑːk/</span> Bóng bị lún vào vết lún do chính nó tạo ra.",
        audioText: "The ball is embedded in its own pitch mark.",
        options: [
            { en: "A. The ball is sitting up nicely on grass.", vi: "Bóng nổi rất đẹp trên mặt cỏ." },
            { en: "B. The ball is embedded in its own pitch mark.", vi: "Bóng bị lún vào vết lún do chính nó tạo ra." },
            { en: "C. The ball rolled into the water.", vi: "Bóng đã lăn xuống nước." },
            { en: "D. The ball is lost completely.", vi: "Bóng bị mất hoàn toàn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Please turn right at the intersection towards hole 10.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/pliːz tɜːn raɪt æt ðə ˌɪn.təˈsek.ʃən təˈwɔːdz həʊl ten/</span> Xin vui lòng rẽ phải tại ngã tư hướng về phía hố số 10.",
        audioText: "Please turn right at the intersection towards hole 10.",
        options: [
            { en: "A. Turn left at the intersection.", vi: "Rẽ trái tại ngã tư." },
            { en: "B. Go straight to clubhouse.", vi: "Đi thẳng về nhà câu lạc bộ." },
            { en: "C. Please turn right at the intersection towards hole 10.", vi: "Xin vui lòng rẽ phải tại ngã tư hướng về phía hố số 10." },
            { en: "D. Stop the cart here.", vi: "Dừng xe điện ở đây." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The ball stopped on the fringe, just off the green.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə bɔːl stɒpt ɒn ðə frɪndʒ dʒʌst ɒf ðə ɡriːn/</span> Bóng đã dừng trên mép fringe, ngay sát bên ngoài green.",
        audioText: "The ball stopped on the fringe, just off the green.",
        options: [
            { en: "A. The ball stopped on the fringe, just off the green.", vi: "Bóng đã dừng trên mép fringe, ngay sát bên ngoài green." },
            { en: "B. The ball is deep inside the bunker.", vi: "Bóng nằm sâu trong bẫy cát." },
            { en: "C. The ball is in the center of green.", vi: "Bóng nằm chính giữa green." },
            { en: "D. The ball is Out of Bounds.", vi: "Bóng nằm ngoài ranh giới cho phép." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Is the ball lying in an unplayable position?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪz ðə bɔːl ˈlaɪ.ɪŋ ɪn æn ʌnˈpleɪ.ə.bəl pəˈzɪʃ.ən/</span> Có phải bóng đang nằm ở vị trí không thể đánh được?",
        audioText: "Is the ball lying in an unplayable position?",
        options: [
            { en: "A. Is the ball lying in an unplayable position?", vi: "Có phải bóng đang nằm ở vị trí không thể đánh được?" },
            { en: "B. Is the ball on the fairway?", vi: "Bóng có ở trên fairway không?" },
            { en: "C. Did the ball go into the cup?", vi: "Bóng đã vào lỗ chưa?" },
            { en: "D. Can I change my golf club?", vi: "Tôi có thể đổi gậy đánh bóng không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The cart path is an immovable obstruction.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə kɑːt pɑːθ ɪz æn ɪˈmuː.və.bəl əbˈstrʌk.ʃən/</span> Đường xe điện là vật cản không thể di dời.",
        audioText: "The cart path is an immovable obstruction.",
        options: [
            { en: "A. The cart path is a loose impediment.", vi: "Đường xe điện là vật thể tự nhiên rời." },
            { en: "B. The cart path is an immovable obstruction.", vi: "Đường xe điện là vật cản không thể di dời." },
            { en: "C. The cart path is a penalty area.", vi: "Đường xe điện là khu vực bị phạt." },
            { en: "D. The cart path is part of green.", vi: "Đường xe điện là một phần của green." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "You have full relief from the cart path without penalty.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː hæv fʊl rɪˈliːf frɒm ðə kɑːt pɑːθ wɪˈðaʊt ˈpen.əl.ti/</span> Anh được giải thoát hoàn toàn khỏi đường xe điện mà không bị phạt.",
        audioText: "You have full relief from the cart path without penalty.",
        options: [
            { en: "A. You get 1 penalty stroke.", vi: "Anh bị phạt 1 gậy." },
            { en: "B. You must play off the cart path.", vi: "Anh phải đánh bóng trực tiếp trên đường xe điện." },
            { en: "C. You have full relief from the cart path without penalty.", vi: "Anh được giải thoát hoàn toàn khỏi đường xe điện mà không bị phạt." },
            { en: "D. Drop the ball inside bunker.", vi: "Thả bóng vào trong hố cát." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Where should I position myself to watch the ball?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/weər ʃʊd aɪ pəˈzɪʃ.ən maɪˈself tuː wɒtʃ ðə bɔːl/</span> Em nên đứng vị trí nào để quan sát hướng bóng tốt nhất?",
        audioText: "Where should I position myself to watch the ball?",
        options: [
            { en: "A. Where should I position myself to watch the ball?", vi: "Em nên đứng vị trí nào để quan sát hướng bóng tốt nhất?" },
            { en: "B. Where is the nearest ball washer?", vi: "Máy rửa bóng gần nhất ở đâu?" },
            { en: "C. How much is the caddie tip?", vi: "Tiền tip caddie là bao nhiêu?" },
            { en: "D. What time is our tee time?", vi: "Giờ xuất phát của chúng ta là mấy giờ?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "Always stand on the right side in a V shape to see well.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈɔːl.weɪz stænd ɒn ðə raɪt saɪd ɪn ə viː ʃeɪp tuː siː wel/</span> Luôn đứng phía bên phải xếp theo hình chữ V để quan sát tốt.",
        audioText: "Always stand on the right side in a V shape to see well.",
        options: [
            { en: "A. Stand directly behind the golfer.", vi: "Đứng trực tiếp ngay sau lưng golfer." },
            { en: "B. Always stand on the right side in a V shape to see well.", vi: "Luôn đứng phía bên phải xếp theo hình chữ V để quan sát tốt." },
            { en: "C. Stand close to the ball.", vi: "Đứng sát cạnh quả bóng." },
            { en: "D. Walk ahead while player swings.", vi: "Đi về phía trước trong lúc khách swing." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.4", sectionName: "Hướng dẫn & Vị trí", type: "mcq",
        title: "The ball is safe, it cleared the fairway bunker.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ðə bɔːl ɪz seɪf ɪt klɪərd ðə ˈfeə.weɪ ˈbʌŋ.kər/</span> Bóng an toàn rồi ạ, nó đã bay qua khỏi hố cát trên fairway.",
        audioText: "The ball is safe, it cleared the fairway bunker.",
        options: [
            { en: "A. The ball went into the water.", vi: "Bóng đã rơi xuống nước." },
            { en: "B. The ball is lost in the bush.", vi: "Bóng bị mất trong bụi cây." },
            { en: "C. The ball is safe, it cleared the fairway bunker.", vi: "Bóng an toàn rồi ạ, nó đã bay qua khỏi hố cát trên fairway." },
            { en: "D. The ball hit a tree and bounced back.", vi: "Bóng đập vào cây dội ngược lại." }
        ],
        correct: 2
    },

// ====================================================================
// SECTION 1.5: GIAO TIẾP & KHÍCH LỆ (CÂU 1 - CÂU 35)
// ====================================================================
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Would you like some sunscreen, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk sʌm ˈsʌn.skriːn sɜːr/</span> Anh có muốn dùng chút kem chống nắng không ạ?",
        audioText: "Would you like some sunscreen, Sir?",
        options: [
            { en: "A. Would you like some sunscreen, Sir?", vi: "Anh có muốn dùng chút kem chống nắng không ạ?" },
            { en: "B. Would you like some cold water?", vi: "Anh có muốn uống chút nước lạnh không?" },
            { en: "C. Do you need an umbrella?", vi: "Anh có cần ô/dù không?" },
            { en: "D. Can I clean your golf clubs?", vi: "Em lau gậy cho anh nhé?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
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
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Great swing! Keep it up, Mr. Evans!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡreɪt swɪŋ kiːp ɪt ʌp ˈmɪs.tər ˈev.ənz/</span> Cú swing tuyệt vời quá! Tiếp tục phát huy nhé anh Evans!",
        audioText: "Great swing! Keep it up, Mr. Evans!",
        options: [
            { en: "A. Great swing! Keep it up, Mr. Evans!", vi: "Cú swing tuyệt vời quá! Tiếp tục phát huy nhé anh Evans!" },
            { en: "B. Bad shot, try again next time.", vi: "Cú đánh tệ quá, lần sau thử lại nhé." },
            { en: "C. Be careful with your back swing.", vi: "Hãy cẩn thận với vòng swing của anh." },
            { en: "D. Take your time to swing.", vi: "Từ từ đánh thôi anh." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Stay focused, you've got this!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/steɪ ˈfəʊ.kəst juːv ɡɒt ðɪs/</span> Giữ tập trung nhé anh, anh làm được mà!",
        audioText: "Stay focused, you've got this!",
        options: [
            { en: "A. Give up on this hole.", vi: "Bỏ hố này đi anh." },
            { en: "B. Stay focused, you've got this!", vi: "Giữ tập trung nhé anh, anh làm được mà!" },
            { en: "C. You are playing too slow.", vi: "Anh chơi chậm quá." },
            { en: "D. Don't rush your shot.", vi: "Đừng vội vàng khi đánh." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
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
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Nice recovery shot from the bunker!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs rɪˈkʌv.ər.i ʃɒt frɒm ðə ˈbʌŋ.kər/</span> Cú đánh cứu bóng từ hố cát tuyệt vời quá!",
        audioText: "Nice recovery shot from the bunker!",
        options: [
            { en: "A. Nice recovery shot from the bunker!", vi: "Cú đánh cứu bóng từ hố cát tuyệt vời quá!" },
            { en: "B. The ball is still inside sand.", vi: "Bóng vẫn nằm trong cát." },
            { en: "C. Hit it harder next time.", vi: "Lần sau đánh mạnh tay hơn." },
            { en: "D. You hit the sand first.", vi: "Anh đánh trúng cát trước rồi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Perfect read on that putt, well played Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈpɜː.fekt riːd ɒn ðæt pʌt wel pleɪd sɜːr/</span> Đọc line gạt bóng chuẩn xác tuyệt đối, đánh xuất sắc lắm anh!",
        audioText: "Perfect read on that putt, well played Sir!",
        options: [
            { en: "A. You missed the line completely.", vi: "Anh đọc sai line hoàn toàn rồi." },
            { en: "B. Perfect read on that putt, well played Sir!", vi: "Đọc line gạt bóng chuẩn xác tuyệt đối, đánh xuất sắc lắm anh!" },
            { en: "C. The green is too fast.", vi: "Green này chạy nhanh quá." },
            { en: "D. Try to putt harder.", vi: "Hãy cố gạt bóng mạnh hơn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Nice Birdie, Mr. Evans! Excellent job!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs ˈbɜː.di ˈmɪs.tər ˈev.ənz ˈek.səl.ənt dʒɒb/</span> Thật là một điểm Birdie đẹp mắt anh Evans! Xuất sắc lắm ạ!",
        audioText: "Nice Birdie, Mr. Evans! Excellent job!",
        options: [
            { en: "A. Nice Par, good effort.", vi: "Điểm Par đẹp, cố gắng tốt lắm." },
            { en: "B. Nice Birdie, Mr. Evans! Excellent job!", vi: "Thật là một điểm Birdie đẹp mắt anh Evans! Xuất sắc lắm ạ!" },
            { en: "C. Too bad, that was a Bogey.", vi: "Tiếc quá, đó là điểm Bogey." },
            { en: "D. Good luck on the next tee.", vi: "Chúc may mắn ở tee tiếp theo." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I'm sorry Sir, I will be more concentrated.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪm ˈsɒr.i sɜːr aɪ wɪl biː mɔːr ˈkɒn.sn̩.treɪ.tɪd/</span> Em xin lỗi anh, em sẽ tập trung chú ý hơn ạ.",
        audioText: "I'm sorry Sir, I will be more concentrated.",
        options: [
            { en: "A. I'm sorry Sir, I will be more concentrated.", vi: "Em xin lỗi anh, em sẽ tập trung chú ý hơn ạ." },
            { en: "B. It is not my fault.", vi: "Đó không phải là lỗi của em." },
            { en: "C. Please pay attention to your game.", vi: "Anh hãy chú ý vào trận đấu đi." },
            { en: "D. I forgot your golf club.", vi: "Em quên gậy của anh rồi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I'm sorry Sir, I will be quicker next time.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪm ˈsɒr.i sɜːr aɪ wɪl biː ˈkwɪk.ər nekst taɪm/</span> Em xin lỗi anh, lần sau em sẽ thao tác nhanh nhẹn hơn ạ.",
        audioText: "I'm sorry Sir, I will be quicker next time.",
        options: [
            { en: "A. Why are you rushing me?", vi: "Sao anh lại hối giục em?" },
            { en: "B. I'm sorry Sir, I will be quicker next time.", vi: "Em xin lỗi anh, lần sau em sẽ thao tác nhanh nhẹn hơn ạ." },
            { en: "C. You are walking too fast.", vi: "Anh đi bộ nhanh quá." },
            { en: "D. Please wait for other players.", vi: "Xin vui lòng đợi các người chơi khác." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Today is weekend so it is crowded, we hope to have your understanding.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/təˈdeɪ ɪz ˌwiːkˈend səʊ ɪt ɪz ˈkraʊ.dɪd wiː həʊp tuː hæv jɔː ˌʌn.dəˈstænd.ɪŋ/</span> Hôm nay là cuối tuần nên sân hơi đông, rất mong anh thông cảm ạ.",
        audioText: "Today is weekend so it is crowded, we hope to have your understanding.",
        options: [
            { en: "A. The course is empty today.", vi: "Sân hôm nay vắng lắm." },
            { en: "B. Today is weekend so it is crowded, we hope to have your understanding.", vi: "Hôm nay là cuối tuần nên sân hơi đông, rất mong anh thông cảm ạ." },
            { en: "C. You should play faster.", vi: "Anh nên chơi nhanh hơn đi." },
            { en: "D. Please complain to the manager.", vi: "Anh hãy phàn nàn với quản lý đi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I'm sorry Sir, I will report this to the manager right away.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪm ˈsɒr.i sɜːr aɪ wɪl rɪˈpɔːt ðɪs tuː ðə ˈmæn.ɪ.dʒər raɪt əˈweɪ/</span> Em xin lỗi anh, em sẽ báo cáo điều này với quản lý ngay lập tức ạ.",
        audioText: "I'm sorry Sir, I will report this to the manager right away.",
        options: [
            { en: "A. I'm sorry Sir, I will report this to the manager right away.", vi: "Em xin lỗi anh, em sẽ báo cáo điều này với quản lý ngay lập tức ạ." },
            { en: "B. Please handle it yourself.", vi: "Anh tự giải quyết nhé." },
            { en: "C. It is normal on this golf course.", vi: "Chuyện này là bình thường ở sân golf này." },
            { en: "D. Do not worry about it.", vi: "Đừng lo lắng về nó." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Would you like to have some cold water, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk tuː hæv sʌm kəʊld ˈwɔː.tər sɜːr/</span> Anh có muốn uống một chút nước lạnh không ạ?",
        audioText: "Would you like to have some cold water, Sir?",
        options: [
            { en: "A. Would you like to have some cold water, Sir?", vi: "Anh có muốn uống một chút nước lạnh không ạ?" },
            { en: "B. Can you buy me a drink?", vi: "Anh mua cho em nước được không?" },
            { en: "C. Here is your bill for water.", vi: "Đây là hóa đơn nước của anh." },
            { en: "D. Do you have a water bottle?", vi: "Anh có chai nước nào không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Yes Sir, a moment please, I will get it for you right away.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jes sɜːr ə ˈməʊ.mənt pliːz aɪ wɪl ɡet ɪt fɔːr juː raɪt əˈweɪ/</span> Vâng thưa anh, xin chờ em một chút, em sẽ lấy ngay cho anh ạ.",
        audioText: "Yes Sir, a moment please, I will get it for you right away.",
        options: [
            { en: "A. Sorry, I don't have time now.", vi: "Xin lỗi, bây giờ em không rảnh." },
            { en: "B. Yes Sir, a moment please, I will get it for you right away.", vi: "Vâng thưa anh, xin chờ em một chút, em sẽ lấy ngay cho anh ạ." },
            { en: "C. You can get it from your cart.", vi: "Anh tự lấy trên xe điện đi ạ." },
            { en: "D. We don't have that service here.", vi: "Ở đây chúng em không có dịch vụ đó." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Thank you Mr. Evans, good bye and hope to serve you again!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/θæŋk juː ˈmɪs.tər ˈev.ənz ɡʊd baɪ ænd həʊp tuː sɜːv juː əˈɡen/</span> Cảm ơn anh Evans, chào tạm biệt và hy vọng được phục vụ anh lần sau ạ!",
        audioText: "Thank you Mr. Evans, good bye and hope to serve you again!",
        options: [
            { en: "A. Good luck for your game today.", vi: "Chúc anh may mắn trong trận đấu hôm nay." },
            { en: "B. Welcome to Golden Sands Resort.", vi: "Chào mừng anh đến với Golden Sands Resort." },
            { en: "C. Thank you Mr. Evans, good bye and hope to serve you again!", vi: "Cảm ơn anh Evans, chào tạm biệt và hy vọng được phục vụ anh lần sau ạ!" },
            { en: "D. Please pay your tip now.", vi: "Xin hãy trả tiền tip ngay." }
        ],
        correct: 2
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Take a deep breath before you swing, it will help you relax.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/teɪk ə diːp breθ bɪˈfɔːr juː swɪŋ ɪt wɪl help juː rɪˈlæks/</span> Anh hít một hơi thật sâu trước khi swing nhé, sẽ giúp anh thư giãn hơn đấy ạ.",
        audioText: "Take a deep breath before you swing, it will help you relax.",
        options: [
            { en: "A. Take a deep breath before you swing, it will help you relax.", vi: "Anh hít một hơi thật sâu trước khi swing nhé, sẽ giúp anh thư giãn hơn đấy ạ." },
            { en: "B. Swing faster and harder.", vi: "Swing nhanh hơn và mạnh hơn đi." },
            { en: "C. Do not pause at the top.", vi: "Đừng ngắt nhịp ở đỉnh swing." },
            { en: "D. Hurry up, the group behind is waiting.", vi: "Nhanh lên, nhóm sau đang chờ đấy." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "One shot at a time, stay patient Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʌn ʃɒt æt ə taɪm steɪ ˈpeɪ.ʃənt sɜːr/</span> Cứ giải quyết từng cú đánh một, kiên nhẫn lên anh ơi!",
        audioText: "One shot at a time, stay patient Sir!",
        options: [
            { en: "A. Play two balls at the same time.", vi: "Đánh hai bóng cùng một lúc." },
            { en: "B. One shot at a time, stay patient Sir!", vi: "Cứ giải quyết từng cú đánh một, kiên nhẫn lên anh ơi!" },
            { en: "C. You need to finish this hole fast.", vi: "Anh cần kết thúc hố này thật nhanh." },
            { en: "D. Give up this hole.", vi: "Bỏ hố này đi anh." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Focus on what you can control right now.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ˈfəʊ.kəs ɒn wɒt juː kæn kənˈtrəʊl raɪt naʊ/</span> Hãy tập trung vào những gì anh có thể kiểm soát lúc này.",
        audioText: "Focus on what you can control right now.",
        options: [
            { en: "A. Blame the wind for bad shot.", vi: "Đổ lỗi cho gió vì cú đánh tệ." },
            { en: "B. Focus on what you can control right now.", vi: "Hãy tập trung vào những gì anh có thể kiểm soát lúc này." },
            { en: "C. Look at the score of other players.", vi: "Nhìn vào điểm số của người chơi khác đi." },
            { en: "D. Think about the 18th hole.", vi: "Hãy nghĩ về hố thứ 18 đi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Cheer up Sir! You still have many holes ahead!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/tʃɪər ʌp sɜːr juː stɪl hæv ˈmen.i həʊlz əˈhed/</span> Vui lên anh ơi! Phía trước mình còn nhiều hố nữa mà!",
        audioText: "Cheer up Sir! You still have many holes ahead!",
        options: [
            { en: "A. Cheer up Sir! You still have many holes ahead!", vi: "Vui lên anh ơi! Phía trước mình còn nhiều hố nữa mà!" },
            { en: "B. Today is a bad day for golf.", vi: "Hôm nay là một ngày tồi tệ để đánh golf." },
            { en: "C. You played so poorly today.", vi: "Hôm nay anh chơi kém quá." },
            { en: "D. Stop playing now.", vi: "Dừng chơi ngay bây giờ đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "You nailed it! What a fantastic shot!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/juː neɪld ɪt wɒt ə fænˈtæs.tɪk ʃɒt/</span> Anh làm chuẩn đét luôn! Một cú đánh xuất thần!",
        audioText: "You nailed it! What a fantastic shot!",
        options: [
            { en: "A. You missed it completely.", vi: "Anh hụt hoàn toàn rồi." },
            { en: "B. You nailed it! What a fantastic shot!", vi: "Anh làm chuẩn đét luôn! Một cú đánh xuất thần!" },
            { en: "C. That was pure luck.", vi: "Quả đó chỉ là ăn may thôi." },
            { en: "D. Try not to shank it.", vi: "Cố gắng đừng đánh trúng cổ gậy." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Do you need any medical assistance, Sir?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/duː juː niːd ˈeni ˈmed.ɪ.kəl əˈsɪs.təns sɜːr/</span> Anh có cần hỗ trợ y tế gì không ạ?",
        audioText: "Do you need any medical assistance, Sir?",
        options: [
            { en: "A. Do you need any medical assistance, Sir?", vi: "Anh có cần hỗ trợ y tế gì không ạ?" },
            { en: "B. Do you want to buy new golf balls?", vi: "Anh có muốn mua bóng golf mới không?" },
            { en: "C. Are you ready to tee off?", vi: "Anh đã sẵn sàng phát bóng chưa?" },
            { en: "D. Would you like a cold towel?", vi: "Anh có muốn dùng khăn lạnh không?" }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I'll call the clubhouse to get help right away.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪl kɔːl ðə ˈklʌb.haʊs tuː ɡet help raɪt əˈweɪ/</span> Em sẽ gọi về nhà câu lạc bộ để xin hỗ trợ ngay lập tức ạ.",
        audioText: "I'll call the clubhouse to get help right away.",
        options: [
            { en: "A. We cannot do anything now.", vi: "Chúng em không thể làm gì bây giờ." },
            { en: "B. I'll call the clubhouse to get help right away.", vi: "Em sẽ gọi về nhà câu lạc bộ để xin hỗ trợ ngay lập tức ạ." },
            { en: "C. Please drive back to clubhouse yourself.", vi: "Anh tự lái xe về nhà câu lạc bộ nhé." },
            { en: "D. Wait here for two hours.", vi: "Chờ ở đây trong hai tiếng." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I'm sorry Sir, I will be more careful with your golf clubs.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪm ˈsɒr.i sɜːr aɪ wɪl biː mɔːr ˈkeə.fəl wɪð jɔː ɡɒlf klʌbz/</span> Em xin lỗi anh, em sẽ cẩn thận hơn nữa với bộ gậy của anh ạ.",
        audioText: "I'm sorry Sir, I will be more careful with your golf clubs.",
        options: [
            { en: "A. These clubs are already old.", vi: "Mấy cây gậy này cũ rồi mà." },
            { en: "B. I'm sorry Sir, I will be more careful with your golf clubs.", vi: "Em xin lỗi anh, em sẽ cẩn thận hơn nữa với bộ gậy của anh ạ." },
            { en: "C. You dropped the club yourself.", vi: "Chính anh làm rơi gậy đấy chứ." },
            { en: "D. I will leave your bag here.", vi: "Em sẽ để túi gậy của anh ở đây." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Nice Par, Mr. Evans! Great save!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs pɑːr ˈmɪs.tər ˈev.ənz ɡreɪt seɪv/</span> Điểm Par quá đẹp anh Evans! Cú cứu par tuyệt vời!",
        audioText: "Nice Par, Mr. Evans! Great save!",
        options: [
            { en: "A. Nice Par, Mr. Evans! Great save!", vi: "Điểm Par quá đẹp anh Evans! Cú cứu par tuyệt vời!" },
            { en: "B. Bad luck on that bogey.", vi: "Xui xẻo với điểm bogey đó." },
            { en: "C. You need to practice more.", vi: "Anh cần tập luyện nhiều hơn." },
            { en: "D. Put your putter back in bag.", vi: "Cất gậy gạt vào túi đi." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Good shot, Sir! It is right on the fairway!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɡʊd ʃɒt sɜːr ɪt ɪz raɪt ɒn ðə ˈfeə.weɪ/</span> Đánh tốt lắm anh! Bóng nằm đẹp ngay trên fairway rồi ạ!",
        audioText: "Good shot, Sir! It is right on the fairway!",
        options: [
            { en: "A. The ball went into OB.", vi: "Bóng đi ra ngoài biên rồi." },
            { en: "B. Good shot, Sir! It is right on the fairway!", vi: "Đánh tốt lắm anh! Bóng nằm đẹp ngay trên fairway rồi ạ!" },
            { en: "C. Your ball is in the deep rough.", vi: "Bóng anh nằm trong cỏ dày." },
            { en: "D. Try to hit higher next time.", vi: "Lần sau cố đánh bổng hơn." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Nice on, Mr. Evans! Beautiful approach shot!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs ɒn ˈmɪs.tər ˈev.ənz ˈbjuː.tɪ.fəl əˈprəʊtʃ ʃɒt/</span> On green đẹp tuyệt anh Evans! Cú đánh tiếp cận hoàn hảo!",
        audioText: "Nice on, Mr. Evans! Beautiful approach shot!",
        options: [
            { en: "A. You missed the green to the left.", vi: "Anh đánh trượt green sang bên trái rồi." },
            { en: "B. Nice on, Mr. Evans! Beautiful approach shot!", vi: "On green đẹp tuyệt anh Evans! Cú đánh tiếp cận hoàn hảo!" },
            { en: "C. The ball rolled off the back.", vi: "Bóng lăn khỏi phía sau green." },
            { en: "D. Short of green by 20 yards.", vi: "Thiếu gậy ngắn hơn green 20 yard." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Nice putt, Sir! That was a long distance putt!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/naɪs pʌt sɜːr ðæt wɒz ə lɒŋ ˈdɪs.təns pʌt/</span> Cú gạt bóng xuất sắc quá anh! Đó là một cú putt từ rất xa!",
        audioText: "Nice putt, Sir! That was a long distance putt!",
        options: [
            { en: "A. Nice putt, Sir! That was a long distance putt!", vi: "Cú gạt bóng xuất sắc quá anh! Đó là một cú putt từ rất xa!" },
            { en: "B. You putted too short.", vi: "Anh gạt thiếu lực rồi." },
            { en: "C. The ball hit the hole and lip out.", vi: "Bóng liếm miệng hố văng ra." },
            { en: "D. Don't use putter from here.", vi: "Đừng dùng gậy gạt từ vị trí này." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I'm sorry Sir, I will note it down carefully.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪm ˈsɒr.i sɜːr aɪ wɪl nəʊt ɪt daʊn ˈkeə.fəl.i/</span> Em xin lỗi anh, em sẽ ghi chép lại cẩn thận ạ.",
        audioText: "I'm sorry Sir, I will note it down carefully.",
        options: [
            { en: "A. I forgot what you said.", vi: "Em quên mất anh nói gì rồi." },
            { en: "B. I'm sorry Sir, I will note it down carefully.", vi: "Em xin lỗi anh, em sẽ ghi chép lại cẩn thận ạ." },
            { en: "C. Write it down yourself.", vi: "Anh tự ghi lại đi." },
            { en: "D. No need to note it.", vi: "Không cần ghi chép đâu." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Have a good game today, Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/hæv ə ɡʊd ɡeɪm təˈdeɪ sɜːr/</span> Chúc anh có một trận đấu thật hay hôm nay ạ!",
        audioText: "Have a good game today, Sir!",
        options: [
            { en: "A. Hope you finish soon.", vi: "Hy vọng anh đánh xong sớm." },
            { en: "B. Have a good game today, Sir!", vi: "Chúc anh có một trận đấu thật hay hôm nay ạ!" },
            { en: "C. Rain is coming soon.", vi: "Trời sắp mưa rồi đấy." },
            { en: "D. Pay for cart fee first.", vi: "Thanh toán phí xe trước đi ạ." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "It's my duty to help you, Sir.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/ɪts maɪ ˈdjuː.ti tuː help juː sɜːr/</span> Đó là trách nhiệm của em để hỗ trợ anh ạ.",
        audioText: "It's my duty to help you, Sir.",
        options: [
            { en: "A. It's my duty to help you, Sir.", vi: "Đó là trách nhiệm của em để hỗ trợ anh ạ." },
            { en: "B. You should pay extra for this.", "vi": "Anh phải trả thêm phí cho việc này." },
            { en: "C. Ask someone else to help.", "vi": "Nhờ người khác giúp đi ạ." },
            { en: "D. I am too tired to help.", "vi": "Em mệt quá không giúp được." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "My name is Van, I'm so happy to be your caddie today.<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/maɪ neɪm ɪz væn aɪm səʊ ˈhæp.i tuː biː jɔː ˈkæd.i təˈdeɪ/</span> Em tên là Vân, em rất hân hạnh được làm caddie cho anh hôm nay.",
        audioText: "My name is Van, I'm so happy to be your caddie today.",
        options: [
            { en: "A. I am busy with another bag.", vi: "Em đang bận với túi gậy khác." },
            { en: "B. My name is Van, I'm so happy to be your caddie today.", vi: "Em tên là Vân, em rất hân hạnh được làm caddie cho anh hôm nay." },
            { en: "C. What is your name Sir?", vi: "Tên anh là gì ạ?" },
            { en: "D. I want to change player.", vi: "Em muốn đổi người chơi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Your ball is ok, Sir! It stays safe on grass!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/jɔː bɔːl ɪz ˌəʊˈkeɪ sɜːr ɪt steɪz seɪf ɒn ɡrɑːs/</span> Bóng của anh ổn rồi ạ! Nó nằm an toàn trên mặt cỏ!",
        audioText: "Your ball is ok, Sir! It stays safe on grass!",
        options: [
            { en: "A. Your ball is lost in water.", vi: "Bóng của anh bị mất dưới nước rồi." },
            { en: "B. Your ball is ok, Sir! It stays safe on grass!", vi: "Bóng của anh ổn rồi ạ! Nó nằm an toàn trên mặt cỏ!" },
            { en: "C. You need to play provisional ball.", vi: "Anh cần đánh bóng dự phòng." },
            { en: "D. Out of bounds on the right.", vi: "Bóng ra ngoài biên bên phải." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "I hope your ball doesn't go into the bunker!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/aɪ həʊp jɔː bɔːl ˈdʌz.nt ɡəʊ ˈɪn.tuː ðə ˈbʌŋ.kər/</span> Em hy vọng bóng của anh không bị rơi vào hố cát!",
        audioText: "I hope your ball doesn't go into the bunker!",
        options: [
            { en: "A. I hope your ball doesn't go into the bunker!", vi: "Em hy vọng bóng của anh không bị rơi vào hố cát!" },
            { en: "B. Hit straight into the sand bunker.", vi: "Đánh thẳng vào hố cát đi." },
            { en: "C. The ball is definitely lost.", vi: "Bóng chắc chắn bị mất rồi." },
            { en: "D. Don't worry, sand is easy.", vi: "Đừng lo, cát dễ đánh mà." }
        ],
        correct: 0
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Stay in the moment, take it easy Sir!<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/steɪ ɪn ðə ˈməʊ.mənt teɪk ɪt ˈiː.zi sɜːr/</span> Hãy sống trọn khoảnh khắc này, cứ thong thả bình tĩnh anh nhé!",
        audioText: "Stay in the moment, take it easy Sir!",
        options: [
            { en: "A. Think about your handicap.", vi: "Hãy nghĩ về điểm chấp của anh đi." },
            { en: "B. Stay in the moment, take it easy Sir!", vi: "Hãy sống trọn khoảnh khắc này, cứ thong thả bình tĩnh anh nhé!" },
            { en: "C. You are playing badly.", vi: "Anh đang đánh rất dở." },
            { en: "D. We are running out of time.", vi: "Chúng ta đang sắp hết giờ rồi." }
        ],
        correct: 1
    },
    {
        lesson: 1, section: "1.5", sectionName: "Giao tiếp & Khích lệ", type: "mcq",
        title: "Would you like to go to our Driving Range for warm up first, Mr. Evans?<br><span style='color: #6c757d; font-style: italic; font-size: 0.95rem;'>/wʊd juː laɪk tuː ɡəʊ tuː aʊər ˈdraɪ.vɪŋ reɪndʒ fɔːr wɔːm ʌp fɜːst ˈmɪs.tər ˈev.ənz/</span> Anh Evans có muốn ra sân tập đánh bóng của chúng em để khởi động trước không ạ?",
        audioText: "Would you like to go to our Driving Range for warm up first, Mr. Evans?",
        options: [
            { en: "A. Go directly to tee box hole 1.", vi: "Ra thẳng khu vực phát bóng hố 1." },
            { en: "B. Would you like to go to our Driving Range for warm up first, Mr. Evans?", vi: "Anh Evans có muốn ra sân tập đánh bóng của chúng em để khởi động trước không ạ?" },
            { en: "C. Your tee time was 10 minutes ago.", vi: "Giờ xuất phát của anh đã qua 10 phút trước." },
            { en: "D. Please wait in the restaurant.", vi: "Xin vui lòng đợi ở nhà hàng." }
        ],
        correct: 1
    }
);
