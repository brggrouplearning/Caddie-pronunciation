// =========================================================================
// LESSON 3: POSITION, DIRECTION & GOLF COURSE DESCRIPTION FOR CADDY
// File: lesson3.js
// =========================================================================

if (typeof window.masterQuizData === 'undefined') {
    window.masterQuizData = [];
}

window.masterQuizData.push(
    // -------------------------------------------------------------------------
    // SECTION 3.1: VOCABULARY OF POSITION, DIRECTION & BALL LIE PRONUNCIATION (40 CÂU)
    // -------------------------------------------------------------------------
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm xát /ft/ trong cụm từ chỉ vị trí 'left side':",
        "audioText": "Your ball is on the left side of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə left saɪd əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của ông nằm ở phía bên trái đường bóng ạ.",
        "options": [
                { "en": "A. Your ball is on the left side of the fairway, Sir.", "vi": "Phía bên trái (/left saɪd/)" },
                { "en": "B. Your ball is on the right side of the fairway, Sir.", "vi": "Phía bên phải (/raɪt saɪd/)" },
                { "en": "C. Your ball is straight ahead, Sir.", "vi": "Thẳng phía trước (/streɪt əˈhed/)" },
                { "en": "D. Your ball is behind the bunker, Sir.", "vi": "Phía sau bẫy cát (/bɪˈhaɪnd/)" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm bật /t/ đuôi trong cụm từ 'right side':",
        "audioText": "There is a big bunker on the right side, Sir.",
        "phonetic": "/ðer ɪz ə bɪɡ ˈbʌŋ.kɚ ɑːn ðə raɪt saɪd, sɜːr/",
        "translation": "Có một bẫy cát lớn ở phía bên phải thưa ông.",
        "options": [
                { "en": "A. There is a big bunker on the right side, Sir.", "vi": "Phía bên phải (/raɪt saɪd/)" },
                { "en": "B. There is a big bunker on the left side, Sir.", "vi": "Phía bên trái (/left saɪd/)" },
                { "en": "C. The bunker is straight ahead, Sir.", "vi": "Thẳng phía trước" },
                { "en": "D. The bunker is behind the green, Sir.", "vi": "Phía sau green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện phát âm cụm từ 'straight ahead' /streɪt əˈhed/:",
        "audioText": "The fairway is straight ahead, Sir.",
        "phonetic": "/ðə ˈfer.weɪ ɪz streɪt əˈhed, sɜːr/",
        "translation": "Đường bóng thẳng phía trước thưa ông.",
        "options": [
                { "en": "A. The fairway is straight ahead, Sir.", "vi": "Thẳng phía trước (/streɪt əˈhed/)" },
                { "en": "B. Turn right at the corner, Sir.", "vi": "Rẽ phải ở góc" },
                { "en": "C. The fairway is on the left side, Sir.", "vi": "Ở phía bên trái" },
                { "en": "D. Go backward please, Sir.", "vi": "Đi lùi lại ạ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm uốn lưỡi /əl/ trong từ 'middle' /ˈmɪd.əl/:",
        "audioText": "Your ball is right in the middle of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz raɪt ɪn ðə ˈmɪd.əl əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của ông nằm ngay chính giữa đường fairway ạ.",
        "options": [
                { "en": "A. Your ball is right in the middle of the fairway, Sir.", "vi": "Ở chính giữa (/ɪn ðə ˈmɪd.əl/)" },
                { "en": "B. Your ball is in the deep rough, Sir.", "vi": "Trong cỏ cao" },
                { "en": "C. Your ball is next to the tree, Sir.", "vi": "Cạnh cái cây" },
                { "en": "D. Your ball is behind the green, Sir.", "vi": "Phía sau green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện trọng âm âm tiết thứ 2 trong giới từ 'behind' /bɪˈhaɪnd/:",
        "audioText": "Please be careful, there is water behind the green, Sir.",
        "phonetic": "/pliːz biː ˈker.fəl, ðer ɪz ˈwɔː.tər bɪˈhaɪnd ðə ɡriːn, sɜːr/",
        "translation": "Xin ông cẩn thận, có hồ nước ở phía sau green ạ.",
        "options": [
                { "en": "A. Please be careful, there is water behind the green, Sir.", "vi": "Phía sau (/bɪˈhaɪnd/)" },
                { "en": "B. There is water in front of the green, Sir.", "vi": "Phía trước green" },
                { "en": "C. There is water next to the green, Sir.", "vi": "Bên cạnh green" },
                { "en": "D. There is water on the left side, Sir.", "vi": "Bên trái green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm bật đuôi /kt/ trong giới từ 'next to' /nekst tuː/:",
        "audioText": "I found your ball right here next to the tree, Sir.",
        "phonetic": "/aɪ faʊnd jʊər bɔːl raɪt hɪər nekst tuː ðə triː, sɜːr/",
        "translation": "Tôi tìm thấy bóng của ông ngay cạnh cái cây này rồi ạ.",
        "options": [
                { "en": "A. I found your ball right here next to the tree, Sir.", "vi": "Ngay cạnh (/nekst tuː/)" },
                { "en": "B. Your ball is under the tree, Sir.", "vi": "Dưới gốc cây" },
                { "en": "C. Your ball is behind the tree, Sir.", "vi": "Phía sau cây" },
                { "en": "D. Your ball is far from the tree, Sir.", "vi": "Xa cái cây" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm ngắn /ʌ/ trong danh từ 'bunker' /ˈbʌŋ.kɚ/:",
        "audioText": "Your ball is in the fairway bunker, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə ˈfer.weɪ ˈbʌŋ.kɚ, sɜːr/",
        "translation": "Bóng của ông đang ở trong bẫy cát trên đường bóng ạ.",
        "options": [
                { "en": "A. Your ball is in the fairway bunker, Sir.", "vi": "Bẫy cát (/ˈbʌŋ.kɚ/)" },
                { "en": "B. Your ball is on the green, Sir.", "vi": "Trên green" },
                { "en": "C. Your ball is in the water hazard, Sir.", "vi": "Dưới nước" },
                { "en": "D. Your ball is in the deep rough, Sir.", "vi": "Trong cỏ cao" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm /r/ uốn lưỡi trong thuật ngữ 'deep rough' /diːp rʌf/:",
        "audioText": "The rough here is very deep, Sir.",
        "phonetic": "/ðə rʌf hɪər ɪz ˈver.i diːp, sɜːr/",
        "translation": "Cỏ rough ở đây rất sâu thưa ông.",
        "options": [
                { "en": "A. The rough here is very deep, Sir.", "vi": "Cỏ rough sâu (/diːp rʌf/)" },
                { "en": "B. The fairway is very smooth, Sir.", "vi": "Fairway phẳng" },
                { "en": "C. The green is very fast, Sir.", "vi": "Green nhanh" },
                { "en": "D. The sand is soft, Sir.", "vi": "Cát mềm" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện phát âm trọng âm từ 'divot' /ˈdɪv.ət/:",
        "audioText": "Your ball is in a divot, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ə ˈdɪv.ət, sɜːr/",
        "translation": "Bóng của ông đang nằm trong một vết lõm cỏ ạ.",
        "options": [
                { "en": "A. Your ball is in a divot, Sir.", "vi": "Vết lõm cỏ (/ˈdɪv.ət/)" },
                { "en": "B. Your ball is on a tee, Sir.", "vi": "Trên tee" },
                { "en": "C. Your ball is in the hole, Sir.", "vi": "Trong lỗ" },
                { "en": "D. Your ball is safe, Sir.", "vi": "Bóng an toàn" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện đọc tính từ địa hình 'sloping uphill' /ˈsloʊ.pɪŋ ˌʌpˈhɪl/:",
        "audioText": "The fairway is sloping uphill, Sir.",
        "phonetic": "/ðə ˈfer.weɪ ɪz ˈsloʊ.pɪŋ ˌʌpˈhɪl, sɜːr/",
        "translation": "Đường bóng đang có địa hình dốc lên thưa ông.",
        "options": [
                { "en": "A. The fairway is sloping uphill, Sir.", "vi": "Dốc lên (/ˈsloʊ.pɪŋ ˌʌpˈhɪl/)" },
                { "en": "B. The fairway is sloping downhill, Sir.", "vi": "Dốc xuống (/ˌdaʊnˈhɪl/)" },
                { "en": "C. The fairway is flat, Sir.", "vi": "Bằng phẳng" },
                { "en": "D. The fairway is bumpy, Sir.", "vi": "Gồ gề" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện đọc chuẩn tính từ địa hình 'downhill' /ˌdaʊnˈhɪl/:",
        "audioText": "The cup is on a downhill slope, Sir. Please putt gently.",
        "phonetic": "/ðə kʌp ɪz ɑːn ə ˌdaʊnˈhɪl sloʊp, sɜːr. pliːz pʌt ˈdʒent.li/",
        "translation": "Lỗ gôn nằm trên dốc đổ xuống thưa ông. Xin vui lòng gạt bóng nhẹ nhàng ạ.",
        "options": [
                { "en": "A. The cup is on a downhill slope, Sir.", "vi": "Dốc xuống (/ˌdaʊnˈhɪl/)" },
                { "en": "B. The cup is on an uphill slope, Sir.", "vi": "Dốc lên" },
                { "en": "C. The green is completely flat, Sir.", "vi": "Bằng phẳng" },
                { "en": "D. The putt is straight, Sir.", "vi": "Thẳng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện phát âm idiom chuyên môn Caddy 'eagle eye' /ˈiː.ɡəl aɪ/:",
        "audioText": "Don't worry, Sir. I have an eagle eye, I will watch your ball.",
        "phonetic": "/doʊnt ˈwɜːr.i sɜːr. aɪ hæv æn ˈiː.ɡəl aɪ, aɪ wɪl wɑːtʃ jʊər bɔːl/",
        "translation": "Xin ông đừng lo, mắt tôi tinh lắm, tôi sẽ canh bóng cho ông.",
        "options": [
                { "en": "A. I have an eagle eye, I will watch your ball, Sir.", "vi": "Mắt đại bàng/canh bóng tinh (/ˈiː.ɡəl aɪ/)" },
                { "en": "B. I lost your ball in the rough, Sir.", "vi": "Em làm mất bóng" },
                { "en": "C. Please look for the ball yourself, Sir.", "vi": "Tự tìm bóng" },
                { "en": "D. The ball went into OB, Sir.", "vi": "Bóng vào OB" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm đôi /eɪ/ trong thuật ngữ 'safe zone' /seɪf zoʊn/:",
        "audioText": "Please aim to the safe zone on the right, Sir.",
        "phonetic": "/pliːz eɪm tə ðə seɪf zoʊn ɑːn ðə raɪt, sɜːr/",
        "translation": "Xin ông ngắm vào vùng an toàn bên phải ạ.",
        "options": [
                { "en": "A. Please aim to the safe zone on the right, Sir.", "vi": "Vùng an toàn (/seɪf zoʊn/)" },
                { "en": "B. Aim directly at the water hazard, Sir.", "vi": "Ngắm vào hồ nước" },
                { "en": "C. Aim at the left bunker, Sir.", "vi": "Ngắm vào bẫy cát" },
                { "en": "D. Hit as hard as possible, Sir.", "vi": "Đánh hết lực" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện ngữ điệu câu trấn an tinh thần 'Take your time':",
        "audioText": "Take your time, Sir. Relax before your swing.",
        "phonetic": "/teɪk jʊər taɪm sɜːr. rɪˈlæks bɪˈfɔːr jʊər swɪŋ/",
        "translation": "Cứ từ tốn thôi thưa ông. Hãy thư giãn trước khi vung gậy ạ.",
        "options": [
                { "en": "A. Take your time, Sir.", "vi": "Cứ từ tốn thôi thưa ông (/teɪk jʊər taɪm/)" },
                { "en": "B. Please play faster, Sir.", "vi": "Chơi nhanh lên" },
                { "en": "C. We are running out of time, Sir.", "vi": "Hết giờ rồi" },
                { "en": "D. Don't waste time, Sir.", "vi": "Đừng tốn thời gian" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm xát /s/ và /w/ trong câu 'Listen to the wind':",
        "audioText": "Listen to the wind, Sir. It is blowing from left to right.",
        "phonetic": "/ˈlɪs.ən tə ðə wɪnd sɜːr. ɪt ɪz ˈbloʊ.ɪŋ frəm left tə raɪt/",
        "translation": "Hãy chú ý tiếng gió thưa ông. Gió đang thổi từ trái qua phải ạ.",
        "options": [
                { "en": "A. Listen to the wind, Sir.", "vi": "Chú ý tiếng gió (/ˈlɪs.ən tə ðə wɪnd/)" },
                { "en": "B. Look at the flag, Sir.", "vi": "Nhìn vào lá cờ" },
                { "en": "C. Check your yardage, Sir.", "vi": "Kiểm tra khoảng cách" },
                { "en": "D. Ignore the weather, Sir.", "vi": "Bỏ qua thời tiết" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện phát âm danh từ ghép đường xe điện 'cart path' /kɑːrt pæθ/:",
        "audioText": "Please stay on the cart path, Sir.",
        "phonetic": "/pliːz steɪ ɑːn ðə kɑːrt pæθ, sɜːr/",
        "translation": "Vui lòng đi trên đường dành cho xe điện thưa ông.",
        "options": [
                { "en": "A. Please stay on the cart path, Sir.", "vi": "Đường xe điện (/kɑːrt pæθ/)" },
                { "en": "B. Drive on the fairway grass, Sir.", "vi": "Lái xe lên cỏ fairway" },
                { "en": "C. Park in the bunker, Sir.", "vi": "Đỗ xe trong bẫy cát" },
                { "en": "D. Cross the green area, Sir.", "vi": "Đi cắt ngang green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm tính từ cảnh báo nguy hiểm 'steep hill' /stiːp hɪl/:",
        "audioText": "Slow down, please. It's a steep hill ahead, Sir.",
        "phonetic": "/sloʊ daʊn pliːz. ɪts ə stiːp hɪl əˈhed, sɜːr/",
        "translation": "Đi chậm lại ạ. Phía trước là dốc cao thưa ông.",
        "options": [
                { "en": "A. Slow down, please. It's a steep hill ahead, Sir.", "vi": "Dốc cao (/stiːp hɪl/)" },
                { "en": "B. Drive fast, it is a flat road, Sir.", "vi": "Lái nhanh, đường bằng" },
                { "en": "C. Turn left at the bridge, Sir.", "vi": "Rẽ trái ở cầu" },
                { "en": "D. Stop the cart here, Sir.", "vi": "Dừng xe ở đây" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm bật /p/ trong cụm từ 'good spot' /ɡʊd spɑːt/:",
        "audioText": "You can stop here, Sir. This is a good spot.",
        "phonetic": "/juː kæn stɑːp hɪər sɜːr. ðɪs ɪz ə ɡʊd spɑːt/",
        "translation": "Ông có thể dừng ở đây ạ. Vị trí này rất tiện.",
        "options": [
                { "en": "A. You can stop here, Sir. This is a good spot.", "vi": "Vị trí thuận tiện (/ɡʊd spɑːt/)" },
                { "en": "B. Don't park here, Sir.", "vi": "Không đỗ xe ở đây" },
                { "en": "C. Drive to the next hole, Sir.", "vi": "Lái sang hố sau" },
                { "en": "D. The cart is broken, Sir.", "vi": "Xe bị hỏng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện phát âm từ chỉ thao tác phanh 'handbrake' /ˈhænd.breɪk/:",
        "audioText": "Please set the handbrake, Sir. It's a bit of a slope.",
        "phonetic": "/pliːz set ðə ˈhænd.breɪk sɜːr. ɪts ə bɪt əv ə sloʊp/",
        "translation": "Ông vui lòng cài phanh tay ạ. Chỗ này hơi dốc.",
        "options": [
                { "en": "A. Please set the handbrake, Sir.", "vi": "Cài phanh tay (/ˈhænd.breɪk/)" },
                { "en": "B. Release the brake, Sir.", "vi": "Nhả phanh" },
                { "en": "C. Press the gas pedal, Sir.", "vi": "Nhấn ga" },
                { "en": "D. Turn off the engine, Sir.", "vi": "Tắt máy" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện đọc từ chỉ sự cố bình điện 'battery' /ˈbæt̬.ɚ.i/:",
        "audioText": "Sir, the cart is moving slowly. I think the battery is low.",
        "phonetic": "/sɜːr, ðə kɑːrt ɪz ˈmuː.vɪŋ ˈsloʊ.li. aɪ θɪŋk ðə ˈbæt̬.ɚ.i ɪz loʊ/",
        "translation": "Ông ơi, xe đang chạy chậm lại. Tôi nghĩ là bình điện sắp hết rồi.",
        "options": [
                { "en": "A. I think the battery is low, Sir.", "vi": "Bình điện yếu (/ˈbæt̬.ɚ.i/)" },
                { "en": "B. The tire is flat, Sir.", "vi": "Xịt lốp" },
                { "en": "C. The cart is brand new, Sir.", "vi": "Xe mới" },
                { "en": "D. We have plenty of power, Sir.", "vi": "Còn nhiều điện" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện trọng âm tên bộ phận quản lý sân 'Marshal team' /ˈmɑːr.ʃəl tiːm/:",
        "audioText": "I will call the Marshal team for a new cart, Sir.",
        "phonetic": "/aɪ wɪl kɔːl ðə ˈmɑːr.ʃəl tiːm fɔːr ə nuː kɑːrt, sɜːr/",
        "translation": "Tôi sẽ gọi đội Điều hành Gôn đổi xe mới cho ông ạ.",
        "options": [
                { "en": "A. I will call the Marshal team for a new cart, Sir.", "vi": "Đội điều hành sân (/ˈmɑːr.ʃəl tiːm/)" },
                { "en": "B. I will call reception, Sir.", "vi": "Gọi lễ tân" },
                { "en": "C. I will call a taxi, Sir.", "vi": "Gọi taxi" },
                { "en": "D. I will fix the car myself, Sir.", "vi": "Tự sửa xe" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm ghép /ʃ/ trong từ 'sharp turn' /ʃɑːrp tɜːrn/:",
        "audioText": "Please slow down, Sir. There is a sharp turn ahead.",
        "phonetic": "/pliːz sloʊ daʊn sɜːr. ðer ɪz ə ʃɑːrp tɜːrn əˈhed/",
        "translation": "Vui lòng đi chậm lại. Phía trước là khúc cua gắt ạ.",
        "options": [
                { "en": "A. There is a sharp turn ahead, Sir.", "vi": "Khúc cua gắt (/ʃɑːrp tɜːrn/)" },
                { "en": "B. It is a straight road, Sir.", "vi": "Đường thẳng" },
                { "en": "C. There is a bridge ahead, Sir.", "vi": "Cây cầu phía trước" },
                { "en": "D. Stop at the kiosk, Sir.", "vi": "Dừng ở chòi" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm tính từ mô tả mặt đường 'bumpy' /ˈbʌm.pi/:",
        "audioText": "It's a bit bumpy here, please be careful, Sir.",
        "phonetic": "/ɪts ə bɪt ˈbʌm.pi hɪər, pliːz biː ˈker.fəl, sɜːr/",
        "translation": "Chỗ này hơi xóc, ông vui lòng cẩn thận ạ.",
        "options": [
                { "en": "A. It's a bit bumpy here, please be careful, Sir.", "vi": "Đường hơi xóc (/ˈbʌm.pi/)" },
                { "en": "B. The path is very smooth, Sir.", "vi": "Đường rất phẳng" },
                { "en": "C. The road is slippery, Sir.", "vi": "Đường trơn" },
                { "en": "D. The path is blocked, Sir.", "vi": "Đường bị chặn" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện ngữ điệu cấu trúc quan tâm an toàn 'For your safety':",
        "audioText": "For your safety, please keep your hands inside the cart, Sir.",
        "phonetic": "/fɔːr jʊər ˈseɪf.ti, pliːz kiːp jʊər hændz ɪnˈsaɪd ðə kɑːrt, sɜːr/",
        "translation": "Vì sự an toàn của ông, vui lòng giữ tay bên trong xe điện ạ.",
        "options": [
                { "en": "A. For your safety, please keep your hands inside the cart, Sir.", "vi": "Vì sự an toàn của ông (/fɔːr jʊər ˈseɪf.ti/)" },
                { "en": "B. You must obey the rules, Sir.", "vi": "Bắt buộc tuân thủ" },
                { "en": "C. Stop driving now, Sir.", "vi": "Dừng lái xe" },
                { "en": "D. Don't touch the wheel, Sir.", "vi": "Đừng chạm vô năng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Luyện phát âm] Luyện âm lùi xe điện 'reverse' /rɪˈvɜːrs/:",
        "audioText": "Going reverse now, please be careful, Sir.",
        "phonetic": "/ˈɡoʊ.ɪŋ rɪˈvɜːrs naʊ, pliːz biː ˈker.fəl, sɜːr/",
        "translation": "Xe chuẩn bị lùi lại, xin ông chú ý cẩn thận ạ.",
        "options": [
                { "en": "A. Going reverse now, please be careful, Sir.", "vi": "Đi lùi lại (/rɪˈvɜːrs/)" },
                { "en": "B. Going forward now, Sir.", "vi": "Đi thẳng tiến lên" },
                { "en": "C. Turning left now, Sir.", "vi": "Rẽ trái" },
                { "en": "D. Stopping here, Sir.", "vi": "Dừng lại" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /left saɪd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Your ball is on the left side of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə left saɪd əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của ông nằm ở phía bên trái đường bóng ạ.",
        "displaySentence": "Your ball is on the _______ of the fairway, Sir.",
        "targetWord": "left side",
        "hint": "💡 Gợi ý phiên âm: /left saɪd/ (8 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /streɪt əˈhed/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The next tee box is straight ahead, Sir.",
        "phonetic": "/ðə nekst tiː bɑːks ɪz streɪt əˈhed, sɜːr/",
        "translation": "Khu vực phát bóng tiếp theo ở ngay thẳng phía trước thưa ông.",
        "displaySentence": "The next tee box is _______, Sir.",
        "targetWord": "straight ahead",
        "hint": "💡 Gợi ý phiên âm: /streɪt əˈhed/ (13 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /bɪˈhaɪnd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "There is a water hazard behind the green, Sir.",
        "phonetic": "/ðer ɪz ə ˈwɔː.tər ˈhæz.ɚd bɪˈhaɪnd ðə ɡriːn, sɜːr/",
        "translation": "Có bẫy nước ở phía sau green thưa ông.",
        "displaySentence": "There is a water hazard _______ the green, Sir.",
        "targetWord": "behind",
        "hint": "💡 Gợi ý phiên âm: /bɪˈhaɪnd/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /ˈbʌŋ.kɚ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Your ball is in the fairway bunker, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɪn ðə ˈfer.weɪ ˈbʌŋ.kɚ, sɜːr/",
        "translation": "Bóng của ông nằm trong bẫy cát fairway ạ.",
        "displaySentence": "Your ball is in the fairway _______, Sir.",
        "targetWord": "bunker",
        "hint": "💡 Gợi ý phiên âm: /ˈbʌŋ.kɚ/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /diːp rʌf/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The ball is buried down in the deep rough, Sir.",
        "phonetic": "/ðə bɔːl ɪz ˈber.id daʊn ɪn ðə diːp rʌf, sɜːr/",
        "translation": "Bóng đang bị chìm sâu trong cỏ rough thưa ông.",
        "displaySentence": "The ball is buried down in the _______, Sir.",
        "targetWord": "deep rough",
        "hint": "💡 Gợi ý phiên âm: /diːp rʌf/ (10 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /ˈdɪv.ət/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Unluckily, your ball landed in a divot, Sir.",
        "phonetic": "/ʌnˈlʌk.əl.i, jʊər bɔːl ˈlæn.dɪd ɪn ə ˈdɪv.ət, sɜːr/",
        "translation": "Không may là bóng của ông rơi vào vết lõm cỏ ạ.",
        "displaySentence": "Unluckily, your ball landed in a _______, Sir.",
        "targetWord": "divot",
        "hint": "💡 Gợi ý phiên âm: /ˈdɪv.ət/ (5 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /kɑːrt pæθ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Please keep the vehicle on the cart path today, Sir.",
        "phonetic": "/pliːz kiːp ðə ˈviː.ə.kəl ɑːn ðə kɑːrt pæθ təˈdeɪ, sɜːr/",
        "translation": "Vui lòng giữ xe đi trên đường xe điện ngày hôm nay ạ.",
        "displaySentence": "Please keep the vehicle on the _______ today, Sir.",
        "targetWord": "cart path",
        "hint": "💡 Gợi ý phiên âm: /kɑːrt pæθ/ (9 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /stiːp hɪl/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Please slow down because there is a steep hill ahead, Sir.",
        "phonetic": "/pliːz sloʊ daʊn bɪˈkəz ðer ɪz ə stiːp hɪl əˈhed, sɜːr/",
        "translation": "Vui lòng đi chậm lại vì phía trước là dốc đứng ạ.",
        "displaySentence": "Please slow down because there is a _______ ahead, Sir.",
        "targetWord": "steep hill",
        "hint": "💡 Gợi ý phiên âm: /stiːp hɪl/ (10 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /ˈhænd.breɪk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Remember to set the handbrake when parking on a slope, Sir.",
        "phonetic": "/rɪˈmem.bɚ tə set ðə ˈhænd.breɪk wen ˈpɑːr.kɪŋ ɑːn ə sloʊp, sɜːr/",
        "translation": "Hãy nhớ cài phanh tay khi đỗ xe trên dốc thưa ông.",
        "displaySentence": "Remember to set the _______ when parking on a slope, Sir.",
        "targetWord": "handbrake",
        "hint": "💡 Gợi ý phiên âm: /ˈhænd.breɪk/ (9 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "fill",
        "title": "[3.1 Luyện phát âm - Điền từ] Nghe phiên âm /ˈbæt̬.ɚ.i/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The cart is running slow because the battery is low, Sir.",
        "phonetic": "/ðə kɑːrt ɪz ˈrʌn.ɪŋ sloʊ bɪˈkəz ðə ˈbæt̬.ɚ.i ɪz loʊ, sɜːr/",
        "translation": "Xe đang chạy chậm vì bình điện yếu thưa ông.",
        "displaySentence": "The cart is running slow because the _______ is low, Sir.",
        "targetWord": "battery",
        "hint": "💡 Gợi ý phiên âm: /ˈbæt̬.ɚ.i/ (7 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Tình huống phát âm] Đọc phát âm hướng dẫn rẽ và đi theo đường nhựa khi bắt đầu di chuyển:",
        "audioText": "Please turn right here and follow the cart path, Sir.",
        "phonetic": "/pliːz tɜːrn raɪt hɪər ænd ˈfɑː.loʊ ðə kɑːrt pæθ, sɜːr/",
        "translation": "Vui lòng rẽ phải ở đây và đi theo đường nhựa dành cho xe điện ạ.",
        "options": [
                { "en": "A. Please turn right here and follow the cart path, Sir.", "vi": "Rẽ phải và đi theo đường xe điện" },
                { "en": "B. Turn left on the grass, Sir.", "vi": "Rẽ trái lên cỏ" },
                { "en": "C. Drive straight into the bunker, Sir.", "vi": "Đâm thẳng bẫy cát" },
                { "en": "D. Stop the cart immediately, Sir.", "vi": "Dừng xe ngay" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Tình huống phát âm] Đọc phát âm thông báo khi cỏ ướt không được lái xe lên:",
        "audioText": "The grass is wet today. Please park here and I will bring the clubs to you, Sir.",
        "phonetic": "/ðə ɡræs ɪz wet təˈdeɪ. pliːz pɑːrk hɪər ænd aɪ wɪl brɪŋ ðə klʌbz tə juː, sɜːr/",
        "translation": "Hôm nay cỏ đang ướt. Ông vui lòng đỗ xe ở đây và tôi sẽ mang gậy lại cho ông ạ.",
        "options": [
                { "en": "A. The grass is wet today. Please park here and I will bring the clubs to you, Sir.", "vi": "Cỏ ướt, đỗ xe tại đây mang gậy lại" },
                { "en": "B. You can drive freely on the green today, Sir.", "vi": "Lái tự do trên green" },
                { "en": "C. Drive close to the hole, Sir.", "vi": "Lái sát lỗ" },
                { "en": "D. Leave your bag on the fairway, Sir.", "vi": "Để túi trên fairway" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Tình huống phát âm] Luyện đọc câu thông báo vị trí bóng bên trái và mời dừng xe:",
        "audioText": "Your ball is on the left. You can stop here, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ɑːn ðə left. juː kæn stɑːp hɪər, sɜːr/",
        "translation": "Bóng của ông ở bên trái. Ông có thể dừng xe ở đây ạ.",
        "options": [
                { "en": "A. Your ball is on the left. You can stop here, Sir.", "vi": "Bóng ở bên trái, dừng xe ở đây ạ" },
                { "en": "B. Your ball is lost, drive away, Sir.", "vi": "Bóng mất rồi" },
                { "en": "C. Keep driving forward, Sir.", "vi": "Cứ tiếp tục lái" },
                { "en": "D. Stop at hole 18, Sir.", "vi": "Dừng ở hố 18" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Tình huống phát âm] Đọc phát âm câu xin lỗi xử lý khi xe bị hết điện giữa đường:",
        "audioText": "Please stop the cart. I will call the Marshal team for a new one. I'm sorry for this, Sir.",
        "phonetic": "/pliːz stɑːp ðə kɑːrt. aɪ wɪl kɔːl ðə ˈmɑːr.ʃəl tiːm fɔːr ə nuː wʌn. aɪm ˈsɑː.ri fɔːr ðɪs, sɜːr/",
        "translation": "Vui lòng dừng xe lại. Tôi sẽ gọi đội Điều hành Gôn đổi xe mới. Tôi xin lỗi ông về sự cố này ạ.",
        "options": [
                { "en": "A. Please stop the cart. I will call the Marshal team for a new one. I'm sorry for this, Sir.", "vi": "Dừng xe, gọi Marshal đổi xe, xin lỗi khách" },
                { "en": "B. Push the cart yourself, Sir.", "vi": "Tự đẩy xe" },
                { "en": "C. Walk back to the clubhouse, Sir.", "vi": "Đi bộ về" },
                { "en": "D. The cart is totally fine, Sir.", "vi": "Xe bình thường" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.1",
        "type": "mcq",
        "title": "[3.1 Tình huống phát âm] Luyện đọc câu chỉ dẫn đi thẳng sau khi qua cầu:",
        "audioText": "Yes, Sir. Please go straight after the bridge to the next tee box.",
        "phonetic": "/jes sɜːr. pliːz ɡoʊ streɪt ˈæf.tər ðə brɪdʒ tə ðə nekst tiː bɑːks/",
        "translation": "Dạ đúng rồi. Mời ông đi thẳng qua cầu đến khu vực phát bóng tiếp theo ạ.",
        "options": [
                { "en": "A. Yes, Sir. Please go straight after the bridge to the next tee box.", "vi": "Đi thẳng qua cầu tới tee box tiếp" },
                { "en": "B. Turn back before the bridge, Sir.", "vi": "Quay lại trước cầu" },
                { "en": "C. Park on the bridge, Sir.", "vi": "Đỗ xe trên cầu" },
                { "en": "D. Turn right into the lake, Sir.", "vi": "Rẽ phải xuống hồ" }
        ],
        "correct": 0
    },

    // -------------------------------------------------------------------------
    // SECTION 3.2: PROACTIVE GUEST INQUIRY & DESCRIPTION SENTENCES PRONUNCIATION (40 CÂU)
    // -------------------------------------------------------------------------
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện đọc câu giới thiệu hố gôn chuẩn nhịp điệu tại Tee Box:",
        "audioText": "This is Hole number 3, Par 4, 380 yards, Sir.",
        "phonetic": "/ðɪs ɪz hoʊl ˈnʌm.bɚ θriː, pɑːr fɔːr, ˈθriː ˈhʌn.drəd eɪ.ti jɑːrdz, sɜːr/",
        "translation": "Đây là hố số 3, Par 4, dài 380 yard thưa ông.",
        "options": [
                { "en": "A. This is Hole number 3, Par 4, 380 yards, Sir.", "vi": "Hố 3, Par 4, 380 yard" },
                { "en": "B. This is Hole number 5, Par 3, 150 yards, Sir.", "vi": "Hố 5, Par 3" },
                { "en": "C. This is Hole number 18, Par 5, 500 yards, Sir.", "vi": "Hố 18, Par 5" },
                { "en": "D. This is the driving range, Sir.", "vi": "Sân tập" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm bật /p/ trong thuật ngữ vị trí cờ 'pin at the back':",
        "audioText": "The pin is at the back of the green today, Sir.",
        "phonetic": "/ðə pɪn ɪz æt ðə bæk əv ðə ɡriːn təˈdeɪ, sɜːr/",
        "translation": "Hôm nay cờ cắm ở phía cuối green thưa ông.",
        "options": [
                { "en": "A. The pin is at the back of the green today, Sir.", "vi": "Cờ ở cuối green (/pɪn æt ðə bæk/)" },
                { "en": "B. The pin is in the front today, Sir.", "vi": "Cờ phía trước" },
                { "en": "C. The pin is in the middle today, Sir.", "vi": "Cờ ở giữa" },
                { "en": "D. There is no pin on the green, Sir.", "vi": "Không có cờ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm gậy sắt số 8 '8-iron' /eɪt ˈaɪ.ən/:",
        "audioText": "You have 150 yards to the green. I think an 8-iron is good, Sir.",
        "phonetic": "/juː hæv ˈwʌn ˈhʌn.drəd ˈfɪf.ti jɑːrdz tə ðə ɡriːn. aɪ θɪŋk æn eɪt ˈaɪ.ən ɪz ɡʊd, sɜːr/",
        "translation": "Ông còn 150 yard để lên green. Tôi nghĩ cây gậy sắt số 8 là phù hợp thưa ông.",
        "options": [
                { "en": "A. You have 150 yards to the green. I think an 8-iron is good, Sir.", "vi": "Gậy sắt số 8 (/eɪt ˈaɪ.ən/)" },
                { "en": "B. Use a driver for 150 yards, Sir.", "vi": "Dùng gậy driver" },
                { "en": "C. Use a putter from here, Sir.", "vi": "Dùng gậy gạt" },
                { "en": "D. Take a Sand Wedge, Sir.", "vi": "Dùng gậy kỹ thuật SW" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm gió ngược và khuyên tăng gậy 'one club more':",
        "audioText": "The wind is against us. You should use one club more, Sir.",
        "phonetic": "/ðə wɪnd ɪz əˈɡenst ʌs. juː ʃʊd juːz wʌn klʌb mɔːr, sɜːr/",
        "translation": "Gió đang thổi ngược chiều. Ông nên tăng thêm 1 số gậy ạ.",
        "options": [
                { "en": "A. The wind is against us. You should use one club more, Sir.", "vi": "Gió ngược, tăng 1 số gậy" },
                { "en": "B. Wind is behind, use one club less, Sir.", "vi": "Gió xuôi, giảm gậy" },
                { "en": "C. No wind, use putter, Sir.", "vi": "Không gió" },
                { "en": "D. Change your golf ball, Sir.", "vi": "Đổi bóng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện câu hỏi khách chọn gậy lịch sự 'Which club would you like...':",
        "audioText": "Which club would you like to use for this shot, Sir?",
        "phonetic": "/wɪtʃ klʌb wʊd juː laɪk tə juːz fɔːr ðɪs ʃɑːt, sɜːr/",
        "translation": "Ông muốn sử dụng cây gậy nào cho cú đánh này ạ?",
        "options": [
                { "en": "A. Which club would you like to use for this shot, Sir?", "vi": "Ông muốn dùng gậy nào ạ?" },
                { "en": "B. Give me your club now, Sir.", "vi": "Đưa gậy đây" },
                { "en": "C. You picked the wrong club, Sir.", "vi": "Chọn sai gậy" },
                { "en": "D. I will hit the ball for you, Sir.", "vi": "Tôi đánh hộ ông" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện phát âm danh từ găng tay 'glove' /ɡlʌv/ và lời chúc may mắn:",
        "audioText": "Here is your driver and your glove, Sir. Good luck!",
        "phonetic": "/hɪər ɪz jʊər ˈdraɪ.vɚ ænd jʊər ɡlʌv, sɜːr. ɡʊd lʌk/",
        "translation": "Đây là gậy driver và găng tay của ông ạ. Chúc ông may mắn!",
        "options": [
                { "en": "A. Here is your driver and your glove, Sir. Good luck!", "vi": "Driver và găng tay (/ɡlʌv/)" },
                { "en": "B. Here is your towel and water, Sir.", "vi": "Khăn và nước" },
                { "en": "C. Here is your scorecard, Sir.", "vi": "Phiếu điểm" },
                { "en": "D. Here is your umbrella, Sir.", "vi": "Cây ô" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm tính từ bẫy khuất 'hidden lake' /ˈhɪd.ən leɪk/:",
        "audioText": "There is a hidden lake on the left side, please aim to the right, Sir.",
        "phonetic": "/ðer ɪz ə ˈhɪd.ən leɪk ɑːn ðə left saɪd, pliːz eɪm tə ðə raɪt, sɜːr/",
        "translation": "Có một hồ nước khuất ở phía bên trái, xin ông ngắm sang bên phải ạ.",
        "options": [
                { "en": "A. There is a hidden lake on the left side, please aim to the right, Sir.", "vi": "Hồ nước khuất (/ˈhɪd.ən leɪk/)" },
                { "en": "B. There is a bunker on the right side, aim left, Sir.", "vi": "Bẫy cát bên phải" },
                { "en": "C. Hit straight into the water, Sir.", "vi": "Đánh thẳng xuống nước" },
                { "en": "D. No hazards on this hole, Sir.", "vi": "Không có bẫy" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện câu tư vấn đưa bóng từ cỏ rough quay lại fairway:",
        "audioText": "The rough here is very deep, Sir. You should hit the ball back to the fairway.",
        "phonetic": "/ðə rʌf hɪər ɪz ˈver.i diːp, sɜːr. juː ʃʊd hɪt ðə bɔːl bæk tə ðə ˈfer.weɪ/",
        "translation": "Cỏ rough ở đây rất sâu thưa ông. Ông nên đánh bóng quay trở lại đường fairway ạ.",
        "options": [
                { "en": "A. You should hit the ball back to the fairway, Sir.", "vi": "Đánh bóng trở lại fairway" },
                { "en": "B. Try to hit 200 yards from this deep rough, Sir.", "vi": "Đánh xa 200 yard từ cỏ sâu" },
                { "en": "C. Use your driver from the rough, Sir.", "vi": "Dùng gậy gỗ trong cỏ" },
                { "en": "D. Leave the ball here, Sir.", "vi": "Bỏ bóng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm trạng từ 'strongly' /ˈstrɑːŋ.li/ mô tả gió thổi:",
        "audioText": "The wind is blowing strongly from left to right, Sir.",
        "phonetic": "/ðə wɪnd ɪz ˈbloʊ.ɪŋ ˈstrɑːŋ.li frəm left tə raɪt, sɜːr/",
        "translation": "Gió đang thổi rất mạnh từ trái qua phải thưa ông.",
        "options": [
                { "en": "A. The wind is blowing strongly from left to right, Sir.", "vi": "Gió thổi mạnh (/ˈstrɑːŋ.li/)" },
                { "en": "B. Light breeze today, Sir.", "vi": "Gió nhẹ" },
                { "en": "C. No wind at all, Sir.", "vi": "Lặng gió" },
                { "en": "D. Wind is blowing backward, Sir.", "vi": "Gió ngược" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện phát âm gậy kỹ thuật 'Pitching Wedge' /ˈpɪtʃ.ɪŋ wedʒ/:",
        "audioText": "You have 100 yards left to the pin. A Pitching Wedge is perfect for this shot, Sir.",
        "phonetic": "/juː hæv ˈwʌn ˈhʌn.drəd jɑːrdz left tə ðə pɪn. ə ˈpɪtʃ.ɪŋ wedʒ ɪz ˈpɜːr.fekt fɔːr ðɪs ʃɑːt, sɜːr/",
        "translation": "Ông còn 100 yard nữa là tới cờ. Một cây gậy kỹ thuật PW là hoàn hảo cho cú đánh này ạ.",
        "options": [
                { "en": "A. A Pitching Wedge is perfect for this shot, Sir.", "vi": "Gậy Pitching Wedge (/ˈpɪtʃ.ɪŋ wedʒ/)" },
                { "en": "B. Use driver for 100 yards, Sir.", "vi": "Dùng driver" },
                { "en": "C. Use putter, Sir.", "vi": "Dùng putter" },
                { "en": "D. Take a 3-wood, Sir.", "vi": "Dùng gậy gỗ 3" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm tính từ green trên cao 'elevated green' /ˈel.ə.veɪ.t̬ɪd/:",
        "audioText": "The green is elevated, Sir. You should use one club more.",
        "phonetic": "/ðə ɡriːn ɪz ˈel.ə.veɪ.t̬ɪd, sɜːr. juː ʃʊd juːz wʌn klʌb mɔːr/",
        "translation": "Khu vực hố gôn ở trên cao thưa ông. Ông nên tăng thêm một số gậy ạ.",
        "options": [
                { "en": "A. The green is elevated, Sir. You should use one club more.", "vi": "Green ở trên cao (/ˈel.ə.veɪ.t̬ɪd/)" },
                { "en": "B. The green is downhill, take less club, Sir.", "vi": "Green dốc xuống" },
                { "en": "C. The green is flat, Sir.", "vi": "Green bằng phẳng" },
                { "en": "D. The green is hidden, Sir.", "vi": "Green bị che khuất" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm tên gậy 'Hybrid' /ˈhaɪ.brɪd/ và gậy sắt 5 '5-iron':",
        "audioText": "I think a Hybrid or a 5-iron is safer than a Driver for this tee shot, Sir.",
        "phonetic": "/aɪ θɪŋk ə ˈhaɪ.brɪd ɔːr ə faɪv ˈaɪ.ən ɪz ˈseɪf.ɚ ðæn ə ˈdraɪ.vɚ fɔːr ðɪs tiː ʃɑːt, sɜːr/",
        "translation": "Tôi nghĩ một cây gậy Hybrid hoặc gậy sắt số 5 sẽ an toàn hơn gậy Driver cho cú phát bóng này thưa ông.",
        "options": [
                { "en": "A. A Hybrid or a 5-iron is safer than a Driver, Sir.", "vi": "Gậy Hybrid hoặc gậy sắt 5 (/ˈhaɪ.brɪd/)" },
                { "en": "B. Always use driver, Sir.", "vi": "Luôn dùng driver" },
                { "en": "C. Use putter on tee box, Sir.", "vi": "Dùng putter tại tee box" },
                { "en": "D. Take a Sand Wedge, Sir.", "vi": "Dùng Sand Wedge" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện đọc câu tư vấn độ lệch bóng trên green 'two balls to the right':",
        "audioText": "I read it as two balls to the right, Sir.",
        "phonetic": "/aɪ red ɪt æz tuː bɔːlz tə ðə raɪt, sɜːr/",
        "translation": "Tôi đọc đường bóng này là lệch hai quả bóng về phía bên phải thưa ông.",
        "options": [
                { "en": "A. I read it as two balls to the right, Sir.", "vi": "Lệch 2 quả bóng sang phải" },
                { "en": "B. Aim straight at the cup, Sir.", "vi": "Ngắm thẳng lỗ" },
                { "en": "C. Aim 5 cups to the left, Sir.", "vi": "Lệch 5 miệng lỗ sang trái" },
                { "en": "D. Hit as hard as you can, Sir.", "vi": "Đánh hết lực" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm tính từ 'fast' /fæst/ và dặn giữ bóng phía sườn thấp 'low side':",
        "audioText": "The green is very fast today, Sir. Keep it on the low side of the hole.",
        "phonetic": "/ðə ɡriːn ɪz ˈver.i fæst təˈdeɪ, sɜːr. kiːp ɪt ɑːn ðə loʊ saɪd əv ðə hoʊl/",
        "translation": "Green hôm nay rất chạy thưa ông. Hãy giữ bóng ở phía sườn thấp của lỗ gôn ạ.",
        "options": [
                { "en": "A. Keep it on the low side of the hole, Sir.", "vi": "Giữ bóng phía sườn thấp (/loʊ saɪd/)" },
                { "en": "B. Keep it on the high side, Sir.", "vi": "Phía sườn cao" },
                { "en": "C. Hit past the hole 10 feet, Sir.", "vi": "Đánh quá lỗ 10 feet" },
                { "en": "D. The green is slow, Sir.", "vi": "Green chậm" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm bật môi /p/ trong thuật ngữ 'penalty stroke' /ˈpen.əl.ti stroʊk/:",
        "audioText": "You can take relief with one penalty stroke, Sir.",
        "phonetic": "/juː kæn teɪk rɪˈliːf wɪð wʌn ˈpen.əl.ti stroʊk, sɜːr/",
        "translation": "Ông có thể giải thoát bóng với 1 phạt đền thưa ông.",
        "options": [
                { "en": "A. You can take relief with one penalty stroke, Sir.", "vi": "Gậy phạt đền (/ˈpen.əl.ti stroʊk/)" },
                { "en": "B. Take free relief without penalty, Sir.", "vi": "Giải thoát miễn phí" },
                { "en": "C. You get 5 penalty strokes, Sir.", "vi": "Phạt 5 gậy" },
                { "en": "D. Disqualified from the game, Sir.", "vi": "Tước quyền thi đấu" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện phát âm thuật ngữ vật cản tự do 'Loose Impediment' /luːs ɪmˈped.ə.mənt/:",
        "audioText": "Stones and leaves are loose impediments, Sir. You can remove them.",
        "phonetic": "/stoʊnz ænd liːvz ɑːr luːs ɪmˈped.ə.mənts, sɜːr. juː kæn rɪˈmuːv ðəm/",
        "translation": "Đá và lá cây là các vật cản tự do thưa ông. Ông có thể di dời chúng ạ.",
        "options": [
                { "en": "A. Stones and leaves are loose impediments, Sir.", "vi": "Vật cản tự do (/luːs ɪmˈped.ə.mənt/)" },
                { "en": "B. You cannot touch the stones, Sir.", "vi": "Không được chạm vào đá" },
                { "en": "C. Get 1 penalty stroke for moving leaves, Sir.", "vi": "Phạt 1 gậy vì nhặt lá" },
                { "en": "D. Move the cart path, Sir.", "vi": "Di dời đường nhựa" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm từ 'obstruction' /əbˈstrʌk.ʃən/ vật cản nhân tạo:",
        "audioText": "The cart path is an immovable obstruction, Sir.",
        "phonetic": "/ðə kɑːrt pæθ ɪz æn ɪ.məˈmuː.və.bəl əbˈstrʌk.ʃən, sɜːr/",
        "translation": "Đường xe điện là vật cản nhân tạo cố định thưa ông.",
        "options": [
                { "en": "A. The cart path is an immovable obstruction, Sir.", "vi": "Vật cản cố định (/əbˈstrʌk.ʃən/)" },
                { "en": "B. The cart path is a natural object, Sir.", "vi": "Vật thể tự nhiên" },
                { "en": "C. You must play from the cart path, Sir.", "vi": "Đánh trực tiếp trên đường nhựa" },
                { "en": "D. Move the cart path away, Sir.", "vi": "Nhấc đường nhựa đi" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện âm bật /k/ trong thuật ngữ 'unplayable lie' /ʌnˈpleɪ.ə.bəl laɪ/:",
        "audioText": "The ball is at an unplayable lie, Sir.",
        "phonetic": "/ðə bɔːl ɪz æt æn ʌnˈpleɪ.ə.bəl laɪ, sɜːr/",
        "translation": "Bóng đang ở vị trí không thể đánh được thưa ông.",
        "options": [
                { "en": "A. The ball is at an unplayable lie, Sir.", "vi": "Thế bóng không thể đánh (/ʌnˈpleɪ.ə.bəl laɪ/)" },
                { "en": "B. The ball has a perfect lie, Sir.", "vi": "Thế bóng hoàn hảo" },
                { "en": "C. The ball is in the hole, Sir.", "vi": "Bóng trong lỗ" },
                { "en": "D. The ball is on the tee, Sir.", "vi": "Bóng trên tee" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện phát âm động từ thả bóng 'drop' /drɑːp/ từ độ cao đầu gối:",
        "audioText": "Please drop the ball from knee height, Sir.",
        "phonetic": "/pliːz drɑːp ðə bɔːl frəm niː haɪt, sɜːr/",
        "translation": "Xin ông thả bóng từ độ cao ngang đầu gối ạ.",
        "options": [
                { "en": "A. Please drop the ball from knee height, Sir.", "vi": "Thả bóng từ độ cao đầu gối (/drɑːp/)" },
                { "en": "B. Throw the ball onto the green, Sir.", "vi": "Ném bóng lên green" },
                { "en": "C. Place the ball with your hand, Sir.", "vi": "Đặt bóng bằng tay" },
                { "en": "D. Drop the ball from shoulder height, Sir.", "vi": "Thả bóng từ ngang vai" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Luyện phát âm] Luyện phát âm từ chỉ cờ cắm bị gài góc khó 'tucked pin' /tʌkt pɪn/:",
        "audioText": "The pin is tucked in the back right corner, Sir.",
        "phonetic": "/ðə pɪn ɪz tʌkt ɪn ðə bæk raɪt ˈkɔːr.nɚ, sɜːr/",
        "translation": "Cờ hôm nay cắm ở vị trí hiểm góc sau bên phải thưa ông.",
        "options": [
                { "en": "A. The pin is tucked in the back right corner, Sir.", "vi": "Cờ cắm góc hiểm (/tʌkt pɪn/)" },
                { "en": "B. The pin is right in the center, Sir.", "vi": "Cờ cắm chính giữa" },
                { "en": "C. Easy pin position today, Sir.", "vi": "Vị trí cờ dễ" },
                { "en": "D. No pin on this green, Sir.", "vi": "Không có cờ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /eɪt ˈaɪ.ən/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "I think an 8-iron is the best club for this distance, Sir.",
        "phonetic": "/aɪ θɪŋk æn eɪt ˈaɪ.ən ɪz ðə best klʌb fɔːr ðɪs ˈdɪs.təns, sɜːr/",
        "translation": "Tôi nghĩ gậy sắt số 8 là cây gậy tốt nhất cho khoảng cách này thưa ông.",
        "displaySentence": "I think an _______ is the best club for this distance, Sir.",
        "targetWord": "8-iron",
        "hint": "💡 Gợi ý phiên âm: /eɪt ˈaɪ.ən/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /wʌn klʌb mɔːr/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Because of the headwind, you should take one club more, Sir.",
        "phonetic": "/bɪˈkəz əv ðə ˈhed.wɪnd, juː ʃʊd teɪk wʌn klʌb mɔːr, sɜːr/",
        "translation": "Vì có gió ngược, ông nên lấy tăng thêm 1 số gậy ạ.",
        "displaySentence": "Because of the headwind, you should take _______, Sir.",
        "targetWord": "one club more",
        "hint": "💡 Gợi ý phiên âm: /wʌn klʌb mɔːr/ (13 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /ˈhɪd.ən leɪk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Watch out, there is a hidden lake on the left side, Sir.",
        "phonetic": "/wɑːtʃ aʊt, ðer ɪz ə ˈhɪd.ən leɪk ɑːn ðə left saɪd, sɜːr/",
        "translation": "Cẩn thận ạ, có một hồ nước khuất ở bên trái thưa ông.",
        "displaySentence": "Watch out, there is a _______ on the left side, Sir.",
        "targetWord": "hidden lake",
        "hint": "💡 Gợi ý phiên âm: /ˈhɪd.ən leɪk/ (11 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /ˈpɪtʃ.ɪŋ wedʒ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "You have 100 yards left, a Pitching Wedge is ideal, Sir.",
        "phonetic": "/juː hæv ˈwʌn ˈhʌn.drəd jɑːrdz left, ə ˈpɪtʃ.ɪŋ wedʒ ɪz aɪˈdiː.əl, sɜːr/",
        "translation": "Ông còn 100 yard, một cây gậy Pitching Wedge là lý tưởng ạ.",
        "displaySentence": "You have 100 yards left, a _______ is ideal, Sir.",
        "targetWord": "Pitching Wedge",
        "hint": "💡 Gợi ý phiên âm: /ˈpɪtʃ.ɪŋ wedʒ/ (14 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /ˈel.ə.veɪ.t̬ɪd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The green is elevated, so the shot plays longer, Sir.",
        "phonetic": "/ðə ɡriːn ɪz ˈel.ə.veɪ.t̬ɪd, soʊ ðə ʃɑːt pleɪz ˈlɑːŋ.ɡɚ, sɜːr/",
        "translation": "Green ở trên cao, nên cú đánh sẽ tốn khoảng cách hơn thưa ông.",
        "displaySentence": "The green is _______, so the shot plays longer, Sir.",
        "targetWord": "elevated",
        "hint": "💡 Gợi ý phiên âm: /ˈel.ə.veɪ.t̬ɪd/ (8 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /ˈhaɪ.brɪd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Using a Hybrid is a safe option for this tee shot, Sir.",
        "phonetic": "/ˈjuː.zɪŋ ə ˈhaɪ.brɪd ɪz ə seɪf ˈɑːp.ʃən fɔːr ðɪs tiː ʃɑːt, sɜːr/",
        "translation": "Dùng gậy Hybrid là sự lựa chọn an toàn cho cú phát bóng này thưa ông.",
        "displaySentence": "Using a _______ is a safe option for this tee shot, Sir.",
        "targetWord": "Hybrid",
        "hint": "💡 Gợi ý phiên âm: /ˈhaɪ.brɪd/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /luːs ɪmˈped.ə.mənt/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "You can remove that loose impediment near your ball, Sir.",
        "phonetic": "/juː kæn rɪˈmuːv ðæt luːs ɪmˈped.ə.mənt nɪər jʊər bɔːl, sɜːr/",
        "translation": "Ông có thể nhặt vật cản tự do đó ở gần bóng của ông ạ.",
        "displaySentence": "You can remove that _______ near your ball, Sir.",
        "targetWord": "loose impediment",
        "hint": "💡 Gợi ý phiên âm: /luːs ɪmˈped.ə.mənt/ (16 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /ʌnˈpleɪ.ə.bəl laɪ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "If you cannot hit it, you may declare an unplayable lie, Sir.",
        "phonetic": "/ɪf juː ˈkæn.ɑːt hɪt ɪt, juː meɪ dɪˈkleər æn ʌnˈpleɪ.ə.bəl laɪ, sɜːr/",
        "translation": "Nếu ông không thể đánh được, ông có thể tuyên bố thế bóng không thể đánh ạ.",
        "displaySentence": "If you cannot hit it, you may declare an _______, Sir.",
        "targetWord": "unplayable lie",
        "hint": "💡 Gợi ý phiên âm: /ʌnˈpleɪ.ə.bəl laɪ/ (13 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /drɑːp/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "You should drop the ball within one club-length from reference point, Sir.",
        "phonetic": "/juː ʃʊd drɑːp ðə bɔːl wɪðˈɪn wʌn klʌb leŋkθ frəm ˈref.ɚ.əns poɪnt, sɜːr/",
        "translation": "Ông nên thả bóng trong phạm vi một chiều dài gậy từ điểm tham chiếu ạ.",
        "displaySentence": "You should _______ the ball within one club-length from reference point, Sir.",
        "targetWord": "drop",
        "hint": "💡 Gợi ý phiên âm: /drɑːp/ (4 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "fill",
        "title": "[3.2 Luyện phát âm - Điền từ] Nghe phiên âm /ˈpen.əl.ti stroʊk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Taking relief from the water hazard incurs one penalty stroke, Sir.",
        "phonetic": "/ˈteɪ.kɪŋ rɪˈliːf frəm ðə ˈwɔː.tər ˈhæz.ɚd ɪnˈkɜːrz wʌn ˈpen.əl.ti stroʊk, sɜːr/",
        "translation": "Giải thoát khỏi bẫy nước sẽ chịu 1 gậy phạt đền thưa ông.",
        "displaySentence": "Taking relief from the water hazard incurs one _______, Sir.",
        "targetWord": "penalty stroke",
        "hint": "💡 Gợi ý phiên âm: /ˈpen.əl.ti stroʊk/ (14 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Tình huống phát âm] Đọc phát âm lời khuyên chọn gậy khi có dốc nâng cao và gió ngược:",
        "audioText": "Please add two clubs to compensate for the uphill slope and headwind, Sir.",
        "phonetic": "/pliːz æd tuː klʌbz tə ˈkɑːm.pən.seɪt fɔːr ðə ˈʌp.hɪl sloʊp ænd ˈhed.wɪnd, sɜːr/",
        "translation": "Xin lấy tăng 2 gậy để bù dốc lên và gió ngược thưa ông.",
        "options": [
                { "en": "A. Please add two clubs to compensate for the uphill slope and headwind, Sir.", "vi": "Tăng 2 gậy bù dốc và gió ngược" },
                { "en": "B. Take two clubs less, Sir.", "vi": "Giảm 2 gậy" },
                { "en": "C. Use putter, Sir.", "vi": "Dùng putter" },
                { "en": "D. No need to change clubs, Sir.", "vi": "Không cần đổi gậy" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Tình huống phát âm] Luyện câu giải thích vị trí cờ bị chắn bởi bẫy cát:",
        "audioText": "Today's pin is in the front, but it's guarded by a bunker, Sir.",
        "phonetic": "/təˈdeɪz pɪn ɪz ɪn ðə frʌnt, bʌt ɪts ɡɑːr.dɪd baɪ ə ˈbʌŋ.kɚ, sɜːr/",
        "translation": "Cờ hôm nay ở phía trước, nhưng được bảo vệ bởi bẫy cát thưa ông.",
        "options": [
                { "en": "A. Today's pin is in the front, but it's guarded by a bunker, Sir.", "vi": "Cờ ở phía trước, bảo vệ bởi bẫy cát" },
                { "en": "B. Pin is easy to reach today, Sir.", "vi": "Cờ dễ đánh" },
                { "en": "C. Pin is at the back corner, Sir.", "vi": "Cờ ở góc sau" },
                { "en": "D. No bunker near the pin, Sir.", "vi": "Không có bẫy cát" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Tình huống phát âm] Đọc phát âm tư vấn đánh an toàn vào chính giữa green:",
        "audioText": "I would like to recommend playing to the center of the green, Sir.",
        "phonetic": "/aɪ wʊd laɪk tə ˌrek.əˈmend ˈpleɪ.ɪŋ tə ðə ˈsen.tɚ əv ðə ɡriːn, sɜːr/",
        "translation": "Tôi muốn gợi ý ông đánh an toàn vào chính giữa green ạ.",
        "options": [
                { "en": "A. I would like to recommend playing to the center of the green, Sir.", "vi": "Gợi ý đánh vào chính giữa green" },
                { "en": "B. Aim directly at the water hazard, Sir.", "vi": "Ngắm vào bẫy nước" },
                { "en": "C. Hit hard over the green, Sir.", "vi": "Đánh qua green" },
                { "en": "D. Try a risky shot, Sir.", "vi": "Thử cú đánh mạo hiểm" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Tình huống phát âm] Đọc phát âm dặn dò khách lực gạt bóng nhẹ tay khi green khô chạy nhanh:",
        "audioText": "The greens are running fast as the grass is dry. Please make a softer touch, Sir.",
        "phonetic": "/ðə ɡriːnz ɑːr ˈrʌn.ɪŋ fæst æz ðə ɡræs ɪz draɪ. pliːz meɪk ə ˈsɑːf.tɚ tʌtʃ, sɜːr/",
        "translation": "Green đang chạy rất nhanh vì cỏ khô. Vui lòng gạt bóng nhẹ tay thôi ạ.",
        "options": [
                { "en": "A. Please make a softer touch with your putts to control the speed, Sir.", "vi": "Gạt bóng nhẹ tay để kiểm soát tốc độ" },
                { "en": "B. Hit as hard as possible, Sir.", "vi": "Đánh hết lực" },
                { "en": "C. Green is very slow, hit firmer, Sir.", "vi": "Green chậm, gạt mạnh lên" },
                { "en": "D. Use an iron on green, Sir.", "vi": "Dùng gậy sắt trên green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.2",
        "type": "mcq",
        "title": "[3.2 Tình huống phát âm] Luyện câu báo khoảng cách giải thoát bóng trong 2 chiều dài gậy:",
        "audioText": "The relief area is within two-club-lengths from the reference point, Sir.",
        "phonetic": "/ðə rɪˈliːf ˈer.i.ə ɪz wɪðˈɪn tuː klʌb leŋkθs frəm ðə ˈref.ɚ.əns poɪnt, sɜːr/",
        "translation": "Khu vực giải thoát nằm trong phạm vi 2 chiều dài gậy tính từ điểm tham chiếu thưa ông.",
        "options": [
                { "en": "A. The relief area is within two-club-lengths from the reference point, Sir.", "vi": "Giải thoát trong phạm vi 2 chiều dài gậy" },
                { "en": "B. Drop the ball 10 meters away, Sir.", "vi": "Thả xa 10m" },
                { "en": "C. Place the ball in the hole, Sir.", "vi": "Đặt bóng vào lỗ" },
                { "en": "D. No relief allowed, Sir.", "vi": "Không được giải thoát" }
        ],
        "correct": 0
    },

    // -------------------------------------------------------------------------
    // SECTION 3.3: TWO-WAY INTERACTIVE ROLE-PLAY SCRIPT PRONUNCIATION (40 CÂU)
    // -------------------------------------------------------------------------
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 1] Đọc câu thoại Caddy thông báo hố 5 tại Tee box có bẫy OB bên trái:",
        "audioText": "Yes, Sir. This is Hole number 5, Par 4. It is 410 yards. The fairway is straight ahead, but there is an OB on the left side.",
        "phonetic": "/jes sɜːr. ðɪs ɪz hoʊl ˈnʌm.bɚ faɪv, pɑːr fɔːr. ɪt ɪz ˈfɔːr ˈhʌn.drəd ten jɑːrdz. ðə ˈfer.weɪ ɪz streɪt əˈhed, bʌt ðer ɪz æn oʊ-biː ɑːn ðə left saɪd/",
        "translation": "Vâng thưa ông. Đây là hố số 5, Par 4, dài 410 yard. Đường bóng thẳng phía trước, nhưng có bẫy tử địa OB ở phía bên trái ạ.",
        "options": [
                { "en": "A. Yes, Sir. This is Hole number 5, Par 4. It is 410 yards. Fairway straight ahead, OB on the left side.", "vi": "Thông tin hố 5: Par 4, 410 yards, có OB bên trái" },
                { "en": "B. Hole 5 is Par 3, 100 yards, Sir.", "vi": "Sai thông tin hố" },
                { "en": "C. Just hit anywhere you like, Sir.", "vi": "Đánh đại đi đâu cũng được" },
                { "en": "D. The hole is closed, Sir.", "vi": "Hố đóng cửa" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 1] Đọc câu thoại bàn giao gậy Driver lịch sự cho khách:",
        "audioText": "Here is your driver, Sir. Please hit when you are ready!",
        "phonetic": "/hɪər ɪz jʊər ˈdraɪ.vɚ, sɜːr. pliːz hɪt wen juː ɑːr ˈred.i/",
        "translation": "Gậy driver của ông đây ạ. Xin ông hãy đánh khi đã sẵn sàng!",
        "options": [
                { "en": "A. Here is your driver, Sir. Please hit when you are ready!", "vi": "Gậy driver đây ạ. Xin hãy đánh khi sẵn sàng!" },
                { "en": "B. Don't hit the ball yet, Sir.", "vi": "Chưa được đánh" },
                { "en": "C. I lost your driver, Sir.", "vi": "Mất gậy driver" },
                { "en": "D. Take your putter, Sir.", "vi": "Lấy putter" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 2] Đọc câu báo khoảng cách 135 yards đến cờ trước có gió thuận:",
        "audioText": "You have 135 yards left to the front pin, Sir. The wind is blowing from behind.",
        "phonetic": "/juː hæv ˈwʌn ˈhʌn.drəd ˈθɜːr.ti faɪv jɑːrdz left tə ðə frʌnt pɪn, sɜːr. ðə wɪnd ɪz ˈbloʊ.ɪŋ frəm bɪˈhaɪnd/",
        "translation": "Ông còn 135 yard nữa là tới cờ trước thưa ông. Gió đang thổi xuôi từ phía sau ạ.",
        "options": [
                { "en": "A. You have 135 yards left to the front pin, Sir. The wind is blowing from behind.", "vi": "Còn 135 yard tới cờ trước, gió xuôi phía sau" },
                { "en": "B. You have 300 yards left, headwind, Sir.", "vi": "Còn 300 yard, gió ngược" },
                { "en": "C. Distance is 50 yards, Sir.", "vi": "Còn 50 yard" },
                { "en": "D. I don't know the distance, Sir.", "vi": "Không biết khoảng cách" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 2] Đọc câu gợi ý gậy sắt số 9 '9-iron' bay đẹp thuận gió:",
        "audioText": "I recommend a 9-iron, Sir. It will fly perfectly with the wind.",
        "phonetic": "/aɪ ˌrek.əˈmend ə naɪn ˈaɪ.ən, sɜːr. ɪt wɪl flaɪ ˈpɜːr.fekt.li wɪð ðə wɪnd/",
        "translation": "Tôi gợi ý ông dùng gậy sắt số 9 ạ. Bóng sẽ bay rất đẹp nhờ thuận gió.",
        "options": [
                { "en": "A. I recommend a 9-iron, Sir. It will fly perfectly with the wind.", "vi": "Gợi ý gậy sắt số 9 (/naɪn ˈaɪ.ən/)" },
                { "en": "B. Use a 3-wood against the wind, Sir.", "vi": "Dùng gậy gỗ 3" },
                { "en": "C. Use a putter, Sir.", "vi": "Dùng putter" },
                { "en": "D. Take a driver, Sir.", "vi": "Dùng driver" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 3] Đọc câu thoại bàn giao gậy Sand Wedge và gậy gạt Putter cạnh Green:",
        "audioText": "Yes, Sir. Here is your Sand Wedge and your putter for the next shot.",
        "phonetic": "/jes sɜːr. hɪər ɪz jʊər sænd wedʒ ænd jʊər ˈpʌt.ɚ fɔːr ðə nekst ʃɑːt/",
        "translation": "Vâng thưa ông. Đây là cây Sand Wedge và gậy gạt putter của ông cho cú đánh tiếp theo ạ.",
        "options": [
                { "en": "A. Here is your Sand Wedge and your putter for the next shot, Sir.", "vi": "Gửi gậy Sand Wedge và putter ạ" },
                { "en": "B. I forgot your Sand Wedge on the cart, Sir.", "vi": "Quên gậy trên xe" },
                { "en": "C. Take your driver to the green, Sir.", "vi": "Mang driver lên green" },
                { "en": "D. Buy new clubs, Sir.", "vi": "Mua gậy mới" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 3] Luyện âm mô tả green dốc từ phải sang trái 'slopes down from right to left':",
        "audioText": "Yes, Sir. The green is quite fast and slopes down from right to left.",
        "phonetic": "/jes sɜːr. ðə ɡriːn ɪz kwaɪt fæst ænd sloʊps daʊn frəm raɪt tə left/",
        "translation": "Vâng thưa ông. Green khá nhanh và có độ dốc đổ từ phải sang trái ạ.",
        "options": [
                { "en": "A. The green is quite fast and slopes down from right to left, Sir.", "vi": "Green nhanh, dốc đổ từ phải sang trái" },
                { "en": "B. The green is flat and slow, Sir.", "vi": "Green phẳng và chậm" },
                { "en": "C. The green slopes up from left to right, Sir.", "vi": "Dốc lên từ trái sang phải" },
                { "en": "D. The green is bumpy and wet, Sir.", "vi": "Gồ gề và ướt" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 4] Đọc câu thoại trấn an khi bóng vào bẫy cát nhưng có 'good lie':",
        "audioText": "Yes, Sir. It is in the bunker, but it has a good lie. You have 160 yards left to the green.",
        "phonetic": "/jes sɜːr. ɪt ɪz ɪn ðə ˈbʌŋ.kɚ, bʌt ɪt hæz ə ɡʊd laɪ. juː hæv ˈwʌn ˈsɪks.ti jɑːrdz left tə ðə ɡriːn/",
        "translation": "Vâng thưa ông. Bóng ở trong cát nhưng vị trí nằm khá tốt ạ. Ông còn 160 yard nữa là lên green.",
        "options": [
                { "en": "A. It is in the bunker, but it has a good lie. You have 160 yards left, Sir.", "vi": "Bóng trong bẫy cát nhưng thế nằm tốt, còn 160 yards" },
                { "en": "B. The ball is lost in the water, Sir.", "vi": "Mất bóng dưới nước" },
                { "en": "C. The lie is terrible, unplayable, Sir.", "vi": "Thế bóng tồi tệ" },
                { "en": "D. Ball is on the green, Sir.", "vi": "Bóng trên green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 4] Luyện phát âm từ 'clear the lip' /klɪər ðə lɪp/ cứu bóng khỏi bẫy cát:",
        "audioText": "I recommend a 7-iron, Sir. Just focus on clean contact to clear the lip of the bunker.",
        "phonetic": "/aɪ ˌrek.əˈmend ə ˈsev.ən ˈaɪ.ən, sɜːr. dʒʌst ˈfoʊ.kəs ɑːn kliːn ˈkɑːn.tækt tə klɪər ðə lɪp əv ðə ˈbʌŋ.kɚ/",
        "translation": "Tôi gợi ý ông dùng gậy sắt số 7 ạ. Chỉ cần tập trung đánh trúng bóng để vượt qua thành bẫy cát ạ.",
        "options": [
                { "en": "A. Focus on clean contact to clear the lip of the bunker, Sir.", "vi": "Tập trung đánh trúng bóng vượt thành bẫy cát" },
                { "en": "B. Hit the sand hard behind the ball, Sir.", "vi": "Đánh cát" },
                { "en": "C. Use a driver to get out of the bunker, Sir.", "vi": "Dùng driver trong cát" },
                { "en": "D. Leave the ball in the bunker, Sir.", "vi": "Để bóng lại trong cát" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 5] Đọc câu tư vấn ngắm lệch trái bù gió ngang 'let the wind drift the ball back':",
        "audioText": "You should use the 8-iron, Sir. Aim slightly to the left of the pin and let the wind drift the ball back.",
        "phonetic": "/juː ʃʊd juːz ðə eɪt ˈaɪ.ən, sɜːr. eɪm ˈslaɪt.li tə ðə left əv ðə pɪn ænd let ðə wɪnd drɪft ðə bɔːl bæk/",
        "translation": "Ông nên dùng gậy sắt số 8 ạ. Hãy ngắm hơi lệch sang bên trái cột cờ một chút và để gió đẩy bóng lượn trở lại ạ.",
        "options": [
                { "en": "A. Aim slightly to the left of the pin and let the wind drift the ball back, Sir.", "vi": "Ngắm lệch trái cờ, để gió đẩy bóng lượn lại" },
                { "en": "B. Aim to the right hazard, Sir.", "vi": "Ngắm sang bẫy bên phải" },
                { "en": "C. Don't worry about the crosswind, Sir.", "vi": "Kệ gió ngang" },
                { "en": "D. Hit straight at the trees, Sir.", "vi": "Đánh thẳng vào cây" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 5] Đọc câu động viên niềm tin trước cú swing 'Trust your swing!':",
        "audioText": "Here is your 8-iron, Sir. Trust your swing!",
        "phonetic": "/hɪər ɪz jʊər eɪt ˈaɪ.ən, sɜːr. trʌst jʊər swɪŋ/",
        "translation": "Gậy sắt số 8 của ông đây ạ. Hãy tự tin vào cú vung gậy của mình nhé ông!",
        "options": [
                { "en": "A. Here is your 8-iron, Sir. Trust your swing!", "vi": "Hãy tự tin vào cú swing của mình! (/trʌst jʊər swɪŋ/)" },
                { "en": "B. Be careful, you will miss the shot, Sir.", "vi": "Cẩn thận đánh trượt" },
                { "en": "C. Your swing is bad today, Sir.", "vi": "Cú swing tệ" },
                { "en": "D. Change your posture, Sir.", "vi": "Đổi tư thế" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 6] Đọc câu báo tìm thấy bóng bị chìm sâu trong cỏ 'buried down in the deep rough':",
        "audioText": "Yes, Sir! I found it right here next to the tree. However, the ball is buried down in the deep rough.",
        "phonetic": "/jes sɜːr! aɪ faʊnd ɪt raɪt hɪər nekst tuː ðə triː. haʊˈev.ɚ, ðə bɔːl ɪz ˈber.id daʊn ɪn ðə diːp rʌf/",
        "translation": "Vâng thưa ông! Tôi tìm thấy nó ngay cạnh cái cây này rồi ạ. Tuy nhiên, bóng đang bị chìm sâu trong cỏ rough.",
        "options": [
                { "en": "A. I found it right here next to the tree. However, the ball is buried down in the deep rough, Sir.", "vi": "Tìm thấy bóng cạnh cây, nhưng chìm sâu trong cỏ rough" },
                { "en": "B. Ball is sitting nicely on the fairway, Sir.", "vi": "Bóng nằm đẹp trên fairway" },
                { "en": "C. Ball is in the middle of the lake, Sir.", "vi": "Bóng giữa hồ" },
                { "en": "D. I cannot find your ball anywhere, Sir.", "vi": "Không tìm thấy bóng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 6] Đọc câu cảnh báo rủi ro 'It is too risky' và khuyên chip bóng an toàn:",
        "audioText": "It is too risky, Sir. I think you should use a Sand Wedge to chip it out safely back to the fairway first.",
        "phonetic": "/ɪt ɪz tuː ˈrɪs.ki, sɜːr. aɪ θɪŋk juː ʃʊd juːz ə sænd wedʒ tə tʃɪp ɪt aʊt ˈseɪf.li bæk tə ðə ˈfer.weɪ fɜːrst/",
        "translation": "Quá rủi ro thưa ông. Tôi nghĩ ông nên dùng gậy kỹ thuật SW để chip nhẹ bóng ra vùng fairway an toàn trước ạ.",
        "options": [
                { "en": "A. It is too risky, Sir. Use a Sand Wedge to chip it out safely back to the fairway first.", "vi": "Quá rủi ro, nên dùng Sand Wedge chip ra fairway an toàn" },
                { "en": "B. Hit hard with a Driver to reach the green, Sir.", "vi": "Đánh hết lực bằng driver" },
                { "en": "C. Give up this hole, Sir.", "vi": "Bỏ hố này" },
                { "en": "D. Use putter from deep rough, Sir.", "vi": "Dùng putter trong cỏ cao" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 7] Luyện âm đọc đường dốc lượn 2 chiều phức tạp 'double break':",
        "audioText": "Actually, Sir, it is a double break. It goes slightly left first, then slopes down from right to left at the end.",
        "phonetic": "/ˈæk.tʃu.ə.li sɜːr, ɪt ɪz ə ˈdʌb.əl breɪk. ɪt ɡoʊz ˈslaɪt.li left fɜːrst, ðen sloʊps daʊn frəm raɪt tə left æt ðə end/",
        "translation": "Thực ra thưa ông, đây là dốc lượn hai chiều ạ. Bóng sẽ hơi qua trái trước, sau đó ở đoạn cuối dốc sẽ đổ từ phải sang trái ạ.",
        "options": [
                { "en": "A. Actually, Sir, it is a double break. It goes slightly left first, then right to left.", "vi": "Dốc lượn 2 chiều: qua trái trước, rồi đổ từ phải sang trái" },
                { "en": "B. It is a completely straight putt, Sir.", "vi": "Gạt thẳng" },
                { "en": "C. It is an easy downhill putt, Sir.", "vi": "Dốc xuống dễ" },
                { "en": "D. The green is flat here, Sir.", "vi": "Green bằng phẳng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Phát âm đóng vai 7] Đọc câu chỉ hướng ngắm gạt bóng 'one ball width to the right of the cup':",
        "audioText": "Please aim one ball width to the right of the cup, Sir. And keep the speed firm.",
        "phonetic": "/pliːz eɪm wʌn bɔːl wɪdθ tə ðə raɪt əv ðə kʌp, sɜːr. ænd kiːp ðə spiːd fɜːrm/",
        "translation": "Xin ông ngắm chệch về phía bên phải lỗ gôn khoảng một quả bóng ạ. Và hãy giữ lực gạt thật chắc tay.",
        "options": [
                { "en": "A. Please aim one ball width to the right of the cup, Sir. And keep the speed firm.", "vi": "Ngắm lệch bên phải 1 quả bóng, lực gạt chắc tay" },
                { "en": "B. Aim 3 feet to the left, Sir.", "vi": "Lệch trái 3 feet" },
                { "en": "C. Hit very softly, Sir.", "vi": "Gạt thật nhẹ" },
                { "en": "D. Aim straight at the flagstick, Sir.", "vi": "Ngắm thẳng cờ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc phát âm lời khen cú vung gậy xuất sắc 'Great swing! Keep it up!':",
        "audioText": "Great swing! Keep it up, Sir!",
        "phonetic": "/ɡreɪt swɪŋ! kiːp ɪt ʌp, sɜːr/",
        "translation": "Cú vung gậy tuyệt vời! Hãy tiếp tục duy trì phong độ nhé ông!",
        "options": [
                { "en": "A. Great swing! Keep it up, Sir!", "vi": "Cú vung gậy tuyệt vời! (/ɡreɪt swɪŋ/)" },
                { "en": "B. Bad swing, Sir.", "vi": "Swing tệ" },
                { "en": "C. Stop swinging like that, Sir.", "vi": "Dừng swing" },
                { "en": "D. You look tired, Sir.", "vi": "Trông mệt mỏi" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc phát âm lời khen đọc line gạt bóng chuẩn xác 'Perfect read on that putt!':",
        "audioText": "Perfect read on that putt, Sir! Nice Birdie!",
        "phonetic": "/ˈpɜːr.fekt riːd ɑːn ðæt pʌt, sɜːr! naɪs ˈbɜːr.di/",
        "translation": "Đọc đường gạt bóng chuẩn xác quá thưa ông! Birdie tuyệt vời ạ!",
        "options": [
                { "en": "A. Perfect read on that putt, Sir! Nice Birdie!", "vi": "Đọc line gạt bóng chuẩn xác (/ˈpɜːr.fekt riːd/)" },
                { "en": "B. Unlucky putt, Sir.", "vi": "Gạt may mắn" },
                { "en": "C. Wrong read, Sir.", "vi": "Đọc sai line" },
                { "en": "D. Bad luck today, Sir.", "vi": "Xui xẻo" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc câu xin lỗi chuyên nghiệp khi bị khách phàn nàn 'You are so slow':",
        "audioText": "I'm sorry, Sir. I will be quicker.",
        "phonetic": "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl biː ˈkwɪk.ɚ/",
        "translation": "Tôi xin lỗi ông ạ. Tôi sẽ nhanh nhện hơn ngay ạ.",
        "options": [
                { "en": "A. I'm sorry, Sir. I will be quicker.", "vi": "Tôi xin lỗi, tôi sẽ nhanh hơn ạ" },
                { "en": "B. I am not slow, Sir.", "vi": "Tôi không chậm" },
                { "en": "C. You walk too fast, Sir.", "vi": "Ông đi nhanh quá" },
                { "en": "D. Please wait for me, Sir.", "vi": "Thong thả chờ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc câu xin lỗi khi bị nhắc nhở mất tập trung 'You are not focusing':",
        "audioText": "I'm sorry, Sir. I will be more concentrated.",
        "phonetic": "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl biː mɔːr ˈkɑːn.sən.treɪ.t̬ɪd/",
        "translation": "Tôi xin lỗi ông ạ. Tôi sẽ tập trung hơn ạ.",
        "options": [
                { "en": "A. I'm sorry, Sir. I will be more concentrated.", "vi": "Tôi xin lỗi, tôi sẽ tập trung hơn ạ" },
                { "en": "B. I am focusing very well, Sir.", "vi": "Tôi đang tập trung mà" },
                { "en": "C. The game is boring, Sir.", "vi": "Trận đấu chán quá" },
                { "en": "D. Talk to someone else, Sir.", "vi": "Nói chuyện với người khác" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc phát âm câu giải thích lịch sự ngày cuối tuần đông khách:",
        "audioText": "Today is weekend, so it is crowded. We hope to have your understanding, Sir.",
        "phonetic": "/təˈdeɪ ɪz ˈwiːk.end, soʊ ɪt ɪz ˈkraʊ.dɪd. wiː hoʊp tə hæv jʊər ˌʌn.dɚˈstæn.dɪŋ, sɜːr/",
        "translation": "Hôm nay là cuối tuần nên sân khá đông ạ. Chúng tôi rất mong nhận được sự thông cảm của ông ạ.",
        "options": [
                { "en": "A. Today is weekend, so it is crowded. We hope to have your understanding, Sir.", "vi": "Hôm nay cuối tuần đông khách, mong ông thông cảm" },
                { "en": "B. The course is always empty, Sir.", "vi": "Sân luôn vắng" },
                { "en": "C. Don't play on weekends, Sir.", "vi": "Đừng chơi cuối tuần" },
                { "en": "D. Go home if it is crowded, Sir.", "vi": "Đông thì về nhà" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc phát âm thông báo quy định giới hạn tối đa 14 cây gậy:",
        "audioText": "Sir, I have counted your clubs. It seems that we have more than 14 clubs.",
        "phonetic": "/sɜːr, aɪ hæv ˈkaʊn.t̬ɪd jʊər klʌbz. ɪt siːmz ðæt wiː hæv mɔːr ðæn ˈfɔːr.tiːn klʌbz/",
        "translation": "Thưa ông, tôi đã kiểm đếm số gậy. Có vẻ như chúng ta đang có nhiều hơn 14 cây gậy ạ.",
        "options": [
                { "en": "A. It seems that we have more than 14 clubs, Sir.", "vi": "Có nhiều hơn 14 cây gậy (/mɔːr ðæn ˈfɔːr.tiːn klʌbz/)" },
                { "en": "B. You have only 5 clubs, Sir.", "vi": "Chỉ có 5 cây gậy" },
                { "en": "C. You can bring 20 clubs today, Sir.", "vi": "Mang 20 cây gậy" },
                { "en": "D. I didn't count your clubs, Sir.", "vi": "Không đếm gậy" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /trʌst jʊər swɪŋ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Here is your 8-iron, Sir. Trust your swing!",
        "phonetic": "/hɪər ɪz jʊər eɪt ˈaɪ.ən, sɜːr. trʌst jʊər swɪŋ/",
        "translation": "Gậy sắt số 8 của ông đây ạ. Hãy tự tin vào cú vung gậy của mình nhé ông!",
        "displaySentence": "Here is your 8-iron, Sir. _______!",
        "targetWord": "Trust your swing",
        "hint": "💡 Gợi ý phiên âm: /trʌst jʊər swɪŋ/ (15 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /diːp rʌf/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The ball is buried down in the deep rough, Sir.",
        "phonetic": "/ðə bɔːl ɪz ˈber.id daʊn ɪn ðə diːp rʌf, sɜːr/",
        "translation": "Bóng đang bị chìm sâu trong cỏ rough thưa ông.",
        "displaySentence": "The ball is buried down in the _______, Sir.",
        "targetWord": "deep rough",
        "hint": "💡 Gợi ý phiên âm: /diːp rʌf/ (10 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /ˈdʌb.əl breɪk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Be careful Sir, this line is a double break.",
        "phonetic": "/biː ˈker.fəl sɜːr, ðɪs laɪn ɪz ə ˈdʌb.əl breɪk/",
        "translation": "Cẩn thận thưa ông, line gạt này là dốc lượn 2 chiều ạ.",
        "displaySentence": "Be careful Sir, this line is a _______.",
        "targetWord": "double break",
        "hint": "💡 Gợi ý phiên âm: /ˈdʌb.əl breɪk/ (12 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /ɡreɪt swɪŋ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Great swing! Keep it up, Sir!",
        "phonetic": "/ɡreɪt swɪŋ! kiːp ɪt ʌp, sɜːr/",
        "translation": "Cú vung gậy tuyệt vời! Hãy tiếp tục duy trì nhé ông!",
        "displaySentence": "_______! Keep it up, Sir!",
        "targetWord": "Great swing",
        "hint": "💡 Gợi ý phiên âm: /ɡreɪt swɪŋ/ (11 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /ˈpɜːr.fekt riːd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Perfect read on that putt, Sir! Well played!",
        "phonetic": "/ˈpɜːr.fekt riːd ɑːn ðæt pʌt, sɜːr! wel pleɪd/",
        "translation": "Đọc đường gạt bóng chuẩn xác quá thưa ông! Đánh rất hay ạ!",
        "displaySentence": "_______ on that putt, Sir! Well played!",
        "targetWord": "Perfect read",
        "hint": "💡 Gợi ý phiên âm: /ˈpɜːr.fekt riːd/ (12 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /ˈkwɪk.ɚ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "I'm sorry, Sir. I will be quicker right now.",
        "phonetic": "/aɪm ˈsɑː.ri, sɜːr. aɪ wɪl biː ˈkwɪk.ɚ raɪt naʊ/",
        "translation": "Tôi xin lỗi ông ạ. Tôi sẽ nhanh nhẹn hơn ngay bây giờ ạ.",
        "displaySentence": "I'm sorry, Sir. I will be _______ right now.",
        "targetWord": "quicker",
        "hint": "💡 Gợi ý phiên âm: /ˈkwɪk.ɚ/ (7 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /ˈkɑːn.sən.treɪ.t̬ɪd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "I'm sorry for that, I will be more concentrated, Sir.",
        "phonetic": "/aɪm ˈsɑː.ri fɔːr ðæt, aɪ wɪl biː mɔːr ˈkɑːn.sən.treɪ.t̬ɪd, sɜːr/",
        "translation": "Tôi xin lỗi vì điều đó, tôi sẽ tập trung hơn thưa ông.",
        "displaySentence": "I'm sorry for that, I will be more _______, Sir.",
        "targetWord": "concentrated",
        "hint": "💡 Gợi ý phiên âm: /ˈkɑːn.sən.treɪ.t̬ɪd/ (12 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "fill",
        "title": "[3.3 Luyện phát âm - Điền từ] Nghe phiên âm /ˈfɔːr.tiːn klʌbz/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Under golf rules, a player cannot carry more than 14 clubs, Sir.",
        "phonetic": "/ˈʌn.dɚ ɡɑːlf ruːlz, ə ˈpleɪ.ɚ ˈkæn.ɑːt ˈkær.i mɔːr ðæn ˈfɔːr.tiːn klʌbz, sɜːr/",
        "translation": "Theo luật golf, người chơi không được mang quá 14 cây gậy thưa ông.",
        "displaySentence": "Under golf rules, a player cannot carry more than _______, Sir.",
        "targetWord": "14 clubs",
        "hint": "💡 Gợi ý phiên âm: /ˈfɔːr.tiːn klʌbz/ (8 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc phát âm dặn khách giữ khoảng cách an toàn với xe điện phía trước:",
        "audioText": "Please maintain a safe distance with the front buggy, Sir.",
        "phonetic": "/pliːz meɪnˈteɪn ə seɪf ˈdɪs.təns wɪð ðə frʌnt ˈbʌɡ.i, sɜːr/",
        "translation": "Vui lòng duy trì khoảng cách an toàn với xe điện phía trước thưa ông.",
        "options": [
                { "en": "A. Please maintain a safe distance with the front buggy, Sir.", "vi": "Duy trì khoảng cách an toàn với xe trước" },
                { "en": "B. Drive fast and hit the front buggy, Sir.", "vi": "Đâm xe trước" },
                { "en": "C. Pass the front buggy on the grass, Sir.", "vi": "Vượt xe trước trên cỏ" },
                { "en": "D. Turn off buggy lights, Sir.", "vi": "Tắt đèn xe" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.3",
        "type": "mcq",
        "title": "[3.3 Tình huống phát âm] Đọc phát âm câu hô cảnh báo khẩn cấp khi bóng bay nguy hiểm 'FORE!':",
        "audioText": "WATCH OUT! FORE! COVER YOUR HEAD, SIR!",
        "phonetic": "/wɑːtʃ aʊt! fɔːr! ˈkʌv.ɚ jʊər hed, sɜːr/",
        "translation": "COI CHỪNG! BÓNG BAY NGUY HIỂM! CHE ĐẦU LẠI THƯA ÔNG!",
        "options": [
                { "en": "A. WATCH OUT! FORE! COVER YOUR HEAD, SIR!", "vi": "Coi chừng! Bóng bay! Che đầu lại! (/fɔːr/)" },
                { "en": "B. Keep walking slowly, Sir.", "vi": "Cứ đi thong thả" },
                { "en": "C. Look at the sky, Sir.", "vi": "Nhìn lên trời" },
                { "en": "D. Catch the ball with your hand, Sir.", "vi": "Bắt bóng bằng tay" }
        ],
        "correct": 0
    },

    // -------------------------------------------------------------------------
    // SECTION 3.4: REVIEW & PRACTICE L3 (THỰC HÀNH TỔNG HỢP GIAI ĐOẠN 3 - 35 CÂU)
    // -------------------------------------------------------------------------
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập vị trí bóng ở fairway bên trái:",
        "audioText": "Your ball is safely on the left side of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ˈseɪf.li ɑːn ðə left saɪd əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của ông nằm an toàn ở phía bên trái đường fairway ạ.",
        "options": [
                { "en": "A. Your ball is safely on the left side of the fairway, Sir.", "vi": "Bóng nằm an toàn bên trái fairway" },
                { "en": "B. Your ball is in the deep rough, Sir.", "vi": "Bóng trong cỏ sâu" },
                { "en": "C. Your ball is in the water hazard, Sir.", "vi": "Bóng dưới nước" },
                { "en": "D. Your ball is out of bounds, Sir.", "vi": "Bóng ngoài biên" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập thông báo khoảng cách và gậy sắt số 8:",
        "audioText": "You have 140 yards left to the green. I recommend an 8-iron, Sir.",
        "phonetic": "/juː hæv ˈwʌn ˈhʌn.drəd ˈfɔːr.ti jɑːrdz left tə ðə ɡriːn. aɪ ˌrek.əˈmend æn eɪt ˈaɪ.ən, sɜːr/",
        "translation": "Ông còn 140 yard nữa là lên green. Tôi gợi ý dùng gậy sắt số 8 thưa ông.",
        "options": [
                { "en": "A. You have 140 yards left to the green. I recommend an 8-iron, Sir.", "vi": "Còn 140 yards, gợi ý gậy sắt 8" },
                { "en": "B. You have 250 yards, use a putter, Sir.", "vi": "Còn 250 yards, dùng putter" },
                { "en": "C. Distance is 50 yards, use a driver, Sir.", "vi": "Khoảng cách 50 yards, dùng driver" },
                { "en": "D. No distance check needed, Sir.", "vi": "Không cần kiểm tra" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập xử lý tình huống gió ngược chiều mạnh:",
        "audioText": "The headwind is blowing strongly today. Please take one club more, Sir.",
        "phonetic": "/ðə ˈhed.wɪnd ɪz ˈbloʊ.ɪŋ ˈstrɑːŋ.li təˈdeɪ. pliːz teɪk wʌn klʌb mɔːr, sɜːr/",
        "translation": "Gió ngược đang thổi mạnh hôm nay. Xin vui lòng tăng thêm 1 số gậy thưa ông.",
        "options": [
                { "en": "A. The headwind is blowing strongly today. Please take one club more, Sir.", "vi": "Gió ngược mạnh, xin tăng 1 số gậy" },
                { "en": "B. Tailwind is blowing, take less club, Sir.", "vi": "Gió xuôi, giảm gậy" },
                { "en": "C. No wind, use standard club, Sir.", "vi": "Không gió" },
                { "en": "D. Ignore the wind and hit hard, Sir.", "vi": "Bỏ qua gió" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập vị trí cờ cắm phía sau green:",
        "audioText": "The pin is placed at the back of the green today, Sir.",
        "phonetic": "/ðə pɪn ɪz pleɪst æt ðə bæk əv ðə ɡriːn təˈdeɪ, sɜːr/",
        "translation": "Hôm nay cờ được cắm ở phía cuối green thưa ông.",
        "options": [
                { "en": "A. The pin is placed at the back of the green today, Sir.", "vi": "Cờ cắm ở phía cuối green" },
                { "en": "B. The pin is in the front, Sir.", "vi": "Cờ ở phía trước" },
                { "en": "C. There is no pin on the green, Sir.", "vi": "Không có cờ" },
                { "en": "D. Pin is in the bunker, Sir.", "vi": "Cờ trong bẫy cát" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập cảnh báo dốc đường xe điện và cài phanh tay:",
        "audioText": "This is a steep slope. Please set the handbrake carefully when you park, Sir.",
        "phonetic": "/ðɪs ɪz ə stiːp sloʊp. pliːz set ðə ˈhænd.breɪk ˈker.fəl.i wen juː pɑːrk, sɜːr/",
        "translation": "Đây là đoạn dốc đứng. Xin vui lòng cài phanh tay cẩn thận khi đỗ xe thưa ông.",
        "options": [
                { "en": "A. This is a steep slope. Please set the handbrake carefully when you park, Sir.", "vi": "Dốc đứng, hãy cài phanh tay cẩn thận" },
                { "en": "B. Flat road, no need for brakes, Sir.", "vi": "Đường bằng không cần phanh" },
                { "en": "C. Release the brake on the slope, Sir.", "vi": "Nhả phanh trên dốc" },
                { "en": "D. Park in the middle of the fairway, Sir.", "vi": "Đỗ giữa fairway" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập đọc line gạt bóng dốc lượn 2 chiều (double break):",
        "audioText": "Be careful, Sir. This putt is a double break, it moves from left to right then right to left.",
        "phonetic": "/biː ˈker.fəl, sɜːr. ðɪs pʌt ɪz ə ˈdʌb.əl breɪk, ɪt muːvz frəm left tɔː raɪt ðen raɪt tɔː left/",
        "translation": "Cẩn thận thưa ông. Cú gạt này là dốc lượn hai chiều, bóng sẽ chạy từ trái sang phải rồi từ phải sang trái ạ.",
        "options": [
                { "en": "A. Be careful, Sir. This putt is a double break, it moves from left to right then right to left.", "vi": "Gạt dốc lượn 2 chiều trái sang phải rồi phải sang trái" },
                { "en": "B. It is a completely straight putt, Sir.", "vi": "Gạt thẳng hoàn toàn" },
                { "en": "C. Just hit straight at the cup firmly, Sir.", "vi": "Gạt thẳng mạnh tay" },
                { "en": "D. The green is flat, Sir.", "vi": "Green phẳng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập thông báo khoảng cách 150 yard và gậy sắt 7:",
        "audioText": "You have 150 yards to the flag, Sir. A 7-iron is recommended.",
        "phonetic": "/juː hæv ˈwʌn ˈhʌn.drəd ˈfɪf.ti jɑːrdz tə ðə flæɡ, sɜːr. ə ˈsev.ən ˈaɪ.ən ɪz ˈrek.ə.men.dɪd/",
        "translation": "Ông còn 150 yard nữa đến cờ thưa ông. Khuyên dùng gậy sắt số 7 ạ.",
        "options": [
                { "en": "A. You have 150 yards to the flag, Sir. A 7-iron is recommended.", "vi": "Còn 150 yard, gợi ý gậy sắt 7" },
                { "en": "B. Use a driver for 150 yards, Sir.", "vi": "Dùng driver" },
                { "en": "C. Use a putter, Sir.", "vi": "Dùng putter" },
                { "en": "D. Distance is 300 yards, Sir.", "vi": "Khoảng cách 300 yard" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập cảnh báo bẫy nước phía trước green:",
        "audioText": "Please watch out, there is a water hazard right in front of the green, Sir.",
        "phonetic": "/pliːz wɑːtʃ aʊt, ðer ɪz ə ˈwɔː.tər ˈhæz.ɚd raɪt ɪn frʌnt əv ðə ɡriːn, sɜːr/",
        "translation": "Xin chú ý cẩn thận, có bẫy nước ngay phía trước green thưa ông.",
        "options": [
                { "en": "A. Please watch out, there is a water hazard right in front of the green, Sir.", "vi": "Có bẫy nước ngay trước green" },
                { "en": "B. No water hazards on this hole, Sir.", "vi": "Không có bẫy nước" },
                { "en": "C. Water hazard is behind the green, Sir.", "vi": "Bẫy nước ở sau green" },
                { "en": "D. Hit hard directly into the lake, Sir.", "vi": "Đánh thẳng xuống hồ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập nhắc nhở khách sửa divot và cào cát:",
        "audioText": "Remember to replace your divot and rake the bunker after playing, Sir.",
        "phonetic": "/rɪˈmem.bɚ tɔː rɪˈpleɪs jʊər ˈdɪv.ət ænd reɪk ðə ˈbʌŋ.kɚ ˈæf.tər ˈpleɪ.ɪŋ, sɜːr/",
        "translation": "Hãy nhớ lấp lại vết lõm cỏ và cào bẫy cát sau khi chơi xong thưa ông.",
        "options": [
                { "en": "A. Remember to replace your divot and rake the bunker after playing, Sir.", "vi": "Lấp divot và cào cát sau khi chơi" },
                { "en": "B. Leave the course damaged, Sir.", "vi": "Để sân hỏng" },
                { "en": "C. Don't touch the bunker, Sir.", "vi": "Đừng chạm bẫy cát" },
                { "en": "D. Ignore the grass divots, Sir.", "vi": "Bỏ qua vết lõm" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập thông báo hướng gió thổi ngang từ phải sang trái:",
        "audioText": "The crosswind is blowing from right to left today, Sir.",
        "phonetic": "/ðə ˈkrɑːs.wɪnd ɪz ˈbloʊ.ɪŋ frəm raɪt tɔː left təˈdeɪ, sɜːr/",
        "translation": "Gió ngang đang thổi từ phải sang trái ngày hôm nay thưa ông.",
        "options": [
                { "en": "A. The crosswind is blowing from right to left today, Sir.", "vi": "Gió ngang thổi từ phải sang trái" },
                { "en": "B. Wind is blowing from left to right, Sir.", "vi": "Gió từ trái sang phải" },
                { "en": "C. No wind today, calm weather, Sir.", "vi": "Lặng gió" },
                { "en": "D. Headwind from behind, Sir.", "vi": "Gió ngược từ sau" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập báo cáo vị trí bóng nằm trên đường biên ngoài (OB):",
        "audioText": "I am sorry, Sir, your ball is out of bounds on the right.",
        "phonetic": "/aɪ æm ˈsɑː.ri, sɜːr, jʊər bɔːl ɪz aʊt əv baʊndz ɑːn ðə raɪt/",
        "translation": "Tôi rất tiếc thưa ông, bóng của ông đã vượt quá đường biên ngoài ở bên phải.",
        "options": [
                { "en": "A. I am sorry, Sir, your ball is out of bounds on the right.", "vi": "Bóng bay ra ngoài biên bên phải (OB)" },
                { "en": "B. Your ball is safe in the middle, Sir.", "vi": "Bóng an toàn ở giữa" },
                { "en": "C. Ball is on the green, Sir.", "vi": "Bóng trên green" },
                { "en": "D. Free drop from OB, Sir.", "vi": "Thả tự do không phạt từ OB" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập tư vấn chọn gậy Putter cho cú đánh trên green:",
        "audioText": "We are on the green now, Sir. Please take your putter.",
        "phonetic": "/wiː ɑːr ɑːn ðə ɡriːn naʊ, sɜːr. pliːz teɪk jʊər ˈpʌt.ɚ/",
        "translation": "Chúng ta đã lên green rồi thưa ông. Xin vui lòng lấy gậy gạt putter.",
        "options": [
                { "en": "A. We are on the green now, Sir. Please take your putter.", "vi": "Đã lên green, mời dùng gậy putter" },
                { "en": "B. Take your driver on the green, Sir.", "vi": "Dùng driver trên green" },
                { "en": "C. Use a 7-iron to putt, Sir.", "vi": "Dùng gậy 7 để gạt" },
                { "en": "D. Leave your bag in the cart, take nothing, Sir.", "vi": "Không cầm gì cả" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập câu thông báo thời gian nghỉ giải lao ở trạm dừng chân (Kiosk):",
        "audioText": "We have a 10-minute break at the kiosk ahead, Sir.",
        "phonetic": "/wiː hæv ə ten ˈmɪn.ɪt breɪk æt ðə ˈkiː.ɑːsk əˈhed, sɜːr/",
        "translation": "Chúng ta có 10 phút nghỉ giải lao tại chòi dừng chân phía trước thưa ông.",
        "options": [
                { "en": "A. We have a 10-minute break at the kiosk ahead, Sir.", "vi": "Nghỉ 10 phút tại trạm kiosk phía trước" },
                { "en": "B. No break today, keep playing fast, Sir.", "vi": "Không nghỉ ngơi" },
                { "en": "C. Kiosk is closed, go home, Sir.", "vi": "Kiosk đóng cửa" },
                { "en": "D. Sleep at the kiosk for 2 hours, Sir.", "vi": "Ngủ 2 tiếng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập xác nhận số gậy tối đa trong túi theo luật gôn:",
        "audioText": "Your bag has exactly fourteen clubs, Sir. Everything is legal.",
        "phonetic": "/jʊər bæɡ hæz ɪɡˈzæk.tli ˈfɔːr.tiːn klʌbz, sɜːr. ˈev.ri.θɪŋ ɪz ˈliː.ɡəl/",
        "translation": "Túi của ông có chính xác 14 cây gậy thưa ông. Mọi thứ hoàn toàn đúng luật.",
        "options": [
                { "en": "A. Your bag has exactly fourteen clubs, Sir. Everything is legal.", "vi": "Túi gậy có đúng 14 cây, hợp lệ" },
                { "en": "B. You have 20 clubs, penalty, Sir.", "vi": "Có 20 cây gậy, bị phạt" },
                { "en": "C. You only have 2 clubs, Sir.", "vi": "Chỉ có 2 cây gậy" },
                { "en": "D. Clubs were stolen, Sir.", "vi": "Gậy bị mất trộm" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập nhắc nhở khách chú ý cẩn thận khi xe điện qua cầu hẹp:",
        "audioText": "Please hold on tight. The bridge ahead is quite narrow, Sir.",
        "phonetic": "/pliːz hoʊld ɑːn taɪt. ðə brɪdʒ əˈhed ɪz kwaɪt ˈner.oʊ, sɜːr/",
        "translation": "Xin vui lòng bám chắc tay. Cây cầu phía trước khá hẹp thưa ông.",
        "options": [
                { "en": "A. Please hold on tight. The bridge ahead is quite narrow, Sir.", "vi": "Bám chắc tay, cầu phía trước hẹp" },
                { "en": "B. Drive as fast as possible across the bridge, Sir.", "vi": "Lái xe qua cầu thật nhanh" },
                { "en": "C. Jump out of the cart on the bridge, Sir.", "vi": "Nhảy khỏi xe trên cầu" },
                { "en": "D. The road is extremely wide, Sir.", "vi": "Đường cực kỳ rộng" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập phát âm câu đề nghị giúp khách cầm cờ khi họ gạt bóng:",
        "audioText": "Let me tend the flagstick for you while you putt, Sir.",
        "phonetic": "/let miː tend ðə ˈflæɡ.stɪk fɔːr juː waɪl juː pʌt, sɜːr/",
        "translation": "Để tôi cầm và rút cờ giúp ông trong lúc ông gạt bóng nhé thưa ông.",
        "options": [
                { "en": "A. Let me tend the flagstick for you while you putt, Sir.", "vi": "Để tôi cầm/rút cờ giúp khi ông gạt bóng" },
                { "en": "B. Leave the flag in the hole permanently, Sir.", "vi": "Để cờ trong lỗ luôn" },
                { "en": "C. Pull out the flag and throw it away, Sir.", "vi": "Nhổ cờ vứt đi" },
                { "en": "D. Put the flag on the fairway, Sir.", "vi": "Đặt cờ ra fairway" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập thông báo kết quả birdie xuất sắc của khách:",
        "audioText": "That is an amazing Birdie on this hole, fantastic job, Sir!",
        "phonetic": "/ðæt ɪz æn əˈmeɪ.zɪŋ ˈbɜːr.di ɑːn ðɪs hoʊl, fænˈtæs.tɪk dʒɑːb, sɜːr/",
        "translation": "Đó là một điểm Birdie tuyệt vời trên hố này, cú đánh quá xuất sắc thưa ông!",
        "options": [
                { "en": "A. That is an amazing Birdie on this hole, fantastic job, Sir!", "vi": "Điểm Birdie tuyệt vời, xuất sắc quá!" },
                { "en": "B. That is a double bogey, terrible, Sir.", "vi": "Điểm double bogey tệ" },
                { "en": "C. You missed the hole completely, Sir.", "vi": "Đánh trượt hố" },
                { "en": "D. Let's restart the hole, Sir.", "vi": "Chơi lại hố này" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập nhắc nhở cài phanh tay an toàn khi dừng xe trên dốc:",
        "audioText": "Please make sure the handbrake is securely set before stepping out, Sir.",
        "phonetic": "/pliːz meɪk ʃʊr ðə ˈhænd.breɪk ɪz sɪˈkjʊr.li set bɪˈfɔːr ˈstep.ɪŋ aʊt, sɜːr/",
        "translation": "Xin hãy chắc chắn rằng phanh tay đã được cài chặt trước khi bước ra khỏi xe thưa ông.",
        "options": [
                { "en": "A. Please make sure the handbrake is securely set before stepping out, Sir.", "vi": "Chắc chắn phanh tay đã cài trước khi bước xuống xe" },
                { "en": "B. Release the handbrake and step out, Sir.", "vi": "Nhả phanh tay rồi bước xuống" },
                { "en": "C. Leave the cart moving, Sir.", "vi": "Để xe tự chạy" },
                { "en": "D. Jump out while driving, Sir.", "vi": "Nhảy xuống khi đang lái" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập báo cáo khoảng cách ngắn 50 yard đến green:",
        "audioText": "You have only 50 yards left to the green, Sir. A gentle wedge is ideal.",
        "phonetic": "/juː hæv ˈoʊn.li ˈfɪf.ti jɑːrdz left tə ðə ɡriːn, sɜːr. ə ˈdʒen.təl wedʒ ɪz aɪˈdiː.əl/",
        "translation": "Ông chỉ còn 50 yard nữa là tới green thưa ông. Một cú wedge nhẹ nhàng là lý tưởng.",
        "options": [
                { "en": "A. You have only 50 yards left to the green, Sir. A gentle wedge is ideal.", "vi": "Còn 50 yard đến green, dùng wedge nhẹ nhàng" },
                { "en": "B. Distance is 500 yards, use a driver, Sir.", "vi": "Khoảng cách 500 yard, dùng driver" },
                { "en": "C. Use a putter from 50 yards, Sir.", "vi": "Dùng putter từ 50 yard" },
                { "en": "D. You are already in the hole, Sir.", "vi": "Đã ở trong lỗ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập thông báo quy định giữ xe điện trên đường nhựa khi cỏ ướt:",
        "audioText": "Due to wet grass conditions, please keep the cart on the path at all times, Sir.",
        "phonetic": "/duː tʊ wet ɡræs kənˈdɪʃ.ənz, pliːz kiːp ðə kɑːrt ɑːn ðə pæθ æt ɔːl taɪmz, sɜːr/",
        "translation": "Do điều kiện cỏ ướt, xin vui lòng giữ xe điện ở trên đường nhựa mọi lúc thưa ông.",
        "options": [
                { "en": "A. Due to wet grass conditions, please keep the cart on the path at all times, Sir.", "vi": "Cỏ ướt, vui lòng giữ xe trên đường nhựa (cart path)" },
                { "en": "B. Drive anywhere on the wet grass, Sir.", "vi": "Lái bất cứ đâu trên cỏ ướt" },
                { "en": "C. Park the cart in the water hazard, Sir.", "vi": "Đỗ xe xuống bẫy nước" },
                { "en": "D. No rules today, drive freely, Sir.", "vi": "Không có luật" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập nhắc nhở khách mặc áo mưa khi thời tiết chuyển mưa:",
        "audioText": "It looks like rain is starting. Would you like your umbrella and raincoat, Sir?",
        "phonetic": "/ɪt lʊks laɪk reɪn ɪz ˈstɑːr.tɪŋ. wʊd juː laɪk jʊər ʌmˈbrel.ə ænd ˈreɪn.koʊt, sɜːr/",
        "translation": "Có vẻ trời chuẩn bị mưa rồi. Ông có muốn dùng ô và áo mưa không thưa ông?",
        "options": [
                { "en": "A. It looks like rain is starting. Would you like your umbrella and raincoat, Sir?", "vi": "Trời sắp mưa, có cần ô và áo mưa không ạ?" },
                { "en": "B. The weather is sunny and hot, Sir.", "vi": "Thời tiết nắng nóng" },
                { "en": "C. Throw away your umbrella, Sir.", "vi": "Vứt ô đi" },
                { "en": "D. Swimming in the rain, Sir.", "vi": "Bơi trong mưa" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập nhắc nhở khách cẩn thận trơn trượt trên cầu gỗ:",
        "audioText": "The wooden bridge is quite slippery when wet. Please drive slowly, Sir.",
        "phonetic": "/ðə ˈwʊd.ən brɪdʒ ɪz kwaɪt ˈslɪp.ɚ.i wen wet. pliːz draɪv ˈsloʊ.li, sɜːr/",
        "translation": "Cây cầu gỗ khá trơn trượt khi bị ướt. Xin vui lòng lái xe thật chậm thưa ông.",
        "options": [
                { "en": "A. The wooden bridge is quite slippery when wet. Please drive slowly, Sir.", "vi": "Cầu gỗ trơn khi ướt, xin lái xe chậm" },
                { "en": "B. Drive fast across the slippery bridge, Sir.", "vi": "Lái nhanh qua cầu trơn" },
                { "en": "C. The bridge is dry and sticky, Sir.", "vi": "Cầu khô" },
                { "en": "D. Walk across without the cart, Sir.", "vi": "Đi bộ qua không cần xe" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập hướng dẫn khách tìm bóng bị khuất sau đồi:",
        "audioText": "Your ball landed over the crest of the hill, let us check together, Sir.",
        "phonetic": "/jʊər bɔːl ˈlæn.dɪd ˈoʊ.vɚ ðə krest əv ðə hɪl, let ʌs tʃek təˈɡeð.ɚ, sɜːr/",
        "translation": "Bóng của ông rơi qua phần đỉnh đồi rồi, để chúng ta cùng kiểm tra nhé thưa ông.",
        "options": [
                { "en": "A. Your ball landed over the crest of the hill, let us check together, Sir.", "vi": "Bóng rơi qua đỉnh đồi, cùng kiểm tra nào" },
                { "en": "B. Your ball is in the clubhouse, Sir.", "vi": "Bóng ở nhà câu lạc bộ" },
                { "en": "C. I am sure your ball is lost forever, Sir.", "vi": "Chắc chắn mất bóng" },
                { "en": "D. Go back to tee box, Sir.", "vi": "Quay lại tee box" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "mcq",
        "title": "[3.4 Thực hành tổng hợp] Ôn tập câu hỏi xác nhận khách đã sẵn sàng phát bóng chưa:",
        "audioText": "The tee box is all yours now. Are you ready to tee off, Sir?",
        "phonetic": "/ðə tiː bɑːks ɪz ɔːl jʊər naʊ. ɑːr juː ˈred.i tɔː tiː ɑːf, sɜːr/",
        "translation": "Khu vực phát bóng hoàn toàn là của ông lúc này. Ông đã sẵn sàng phát bóng chưa ạ?",
        "options": [
                { "en": "A. The tee box is all yours now. Are you ready to tee off, Sir?", "vi": "Tee box đã sẵn sàng, ông đã sẵn sàng phát bóng chưa ạ?" },
                { "en": "B. Stop playing immediately, Sir.", "vi": "Dừng chơi ngay" },
                { "en": "C. Let someone else hit first, Sir.", "vi": "Để người khác đánh trước" },
                { "en": "D. The hole is finished, Sir.", "vi": "Hố đã xong" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /left saɪd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Your ball is safely on the left side of the fairway, Sir.",
        "phonetic": "/jʊər bɔːl ɪz ˈseɪf.li ɑːn ðə left saɪd əv ðə ˈfer.weɪ, sɜːr/",
        "translation": "Bóng của ông nằm an toàn ở phía bên trái đường fairway ạ.",
        "displaySentence": "Your ball is safely on the _______ of the fairway, Sir.",
        "targetWord": "left side",
        "hint": "💡 Gợi ý phiên âm: /left saɪd/ (8 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /eɪt ˈaɪ.ən/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "I recommend an 8-iron for this distance, Sir.",
        "phonetic": "/aɪ ˌrek.əˈmend æn eɪt ˈaɪ.ən fɔːr ðɪs ˈdɪs.təns, sɜːr/",
        "translation": "Tôi gợi ý dùng gậy sắt số 8 cho khoảng cách này thưa ông.",
        "displaySentence": "I recommend an _______ for this distance, Sir.",
        "targetWord": "8-iron",
        "hint": "💡 Gợi ý phiên âm: /eɪt ˈaɪ.ən/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /ˈhænd.breɪk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Please set the handbrake when parking on this slope, Sir.",
        "phonetic": "/pliːz set ðə ˈhænd.breɪk wen ˈpɑːr.kɪŋ ɑːn ðɪs sloʊp, sɜːr/",
        "translation": "Xin vui lòng cài phanh tay khi đỗ xe trên dốc này thưa ông.",
        "displaySentence": "Please set the _______ when parking on this slope, Sir.",
        "targetWord": "handbrake",
        "hint": "💡 Gợi ý phiên âm: /ˈhænd.breɪk/ (9 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /trʌst jʊər swɪŋ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Here is your club, Sir. Trust your swing!",
        "phonetic": "/hɪər ɪz jʊər klʌb, sɜːr. trʌst jʊər swɪŋ/",
        "translation": "Gậy của ông đây ạ. Hãy tự tin vào cú vung gậy của mình!",
        "displaySentence": "Here is your club, Sir. _______!",
        "targetWord": "Trust your swing",
        "hint": "💡 Gợi ý phiên âm: /trʌst jʊər swɪŋ/ (15 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /ˈsev.ən ˈaɪ.ən/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "A 7-iron is recommended for this 150-yard shot, Sir.",
        "phonetic": "/ə ˈsev.ən ˈaɪ.ən ɪz ˈrek.ə.men.dɪd fɔːr ðɪs wʌn ˈhʌn.drəd ˈfɪf.ti jɑːrd ʃɑːt, sɜːr/",
        "translation": "Gậy sắt 7 được khuyên dùng cho cú đánh 150 yard này thưa ông.",
        "displaySentence": "A _______ is recommended for this 150-yard shot, Sir.",
        "targetWord": "7-iron",
        "hint": "💡 Gợi ý phiên âm: /ˈsev.ən ˈaɪ.ən/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /ˈwɔː.tər ˈhæz.ɚd/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "There is a water hazard right in front of the green, Sir.",
        "phonetic": "/ðer ɪz ə ˈwɔː.tər ˈhæz.ɚd raɪt ɪn frʌnt əv ðə ɡriːn, sɜːr/",
        "translation": "Có bẫy nước ngay ở phía trước green thưa ông.",
        "displaySentence": "There is a _______ right in front of the green, Sir.",
        "targetWord": "water hazard",
        "hint": "💡 Gợi ý phiên âm: /ˈwɔː.tər ˈhæz.ɚd/ (12 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /aʊt əv baʊndz/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Your ball is out of bounds on the right, Sir.",
        "phonetic": "/jʊər bɔːl ɪz aʊt əv baʊndz ɑːn ðə raɪt, sɜːr/",
        "translation": "Bóng của ông đã ra ngoài biên ở bên phải thưa ông.",
        "displaySentence": "Your ball is _______ on the right, Sir.",
        "targetWord": "out of bounds",
        "hint": "💡 Gợi ý phiên âm: /aʊt əv baʊndz/ (12 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /ˈpʌt.ɚ/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Please take your putter since we are on the green, Sir.",
        "phonetic": "/pliːz teɪk jʊər ˈpʌt.ɚ sɪns wiː ɑːr ɑːn ðə ɡriːn, sɜːr/",
        "translation": "Xin hãy lấy gậy putter vì chúng ta đã ở trên green thưa ông.",
        "displaySentence": "Please take your _______ since we are on the green, Sir.",
        "targetWord": "putter",
        "hint": "💡 Gợi ý phiên âm: /ˈpʌt.ɚ/ (6 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /ˈflæɡ.stɪk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Let me tend the flagstick for you, Sir.",
        "phonetic": "/let miː tend ðə ˈflæɡ.stɪk fɔːr juː, sɜːr/",
        "translation": "Để tôi cầm cờ giúp ông nhé thưa ông.",
        "displaySentence": "Let me tend the _______ for you, Sir.",
        "targetWord": "flagstick",
        "hint": "💡 Gợi ý phiên âm: /ˈflæɡ.stɪk/ (9 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.4",
        "type": "fill",
        "title": "[3.4 Thực hành tổng hợp - Điền từ] Nghe phiên âm /fɔːr.tiːn klʌbz/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Your bag has exactly fourteen clubs, Sir.",
        "phonetic": "/jʊər bæɡ hæz ɪɡˈzæk.tli ˈfɔːr.tiːn klʌbz, sɜːr/",
        "translation": "Túi gậy của ông có chính xác 14 cây gậy thưa ông.",
        "displaySentence": "Your bag has exactly _______, Sir.",
        "targetWord": "fourteen clubs",
        "hint": "💡 Gợi ý phiên âm: /ˈfɔːr.tiːn klʌbz/ (13 ký tự)."
    },

    // -------------------------------------------------------------------------
    // SECTION 3.5: ADVANCED ON-COURSE SITUATIONS & COMMUNICATION (20 CÂU BỔ SUNG)
    // -------------------------------------------------------------------------
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện phát âm thông báo khoảng cách nước và điểm thả bóng chuẩn xác:",
        "audioText": "The penalty area boundary is marked with red stakes, Sir. You can drop the ball here.",
        "phonetic": "/ðə ˈpen.əl.ti ˈer.i.ə ˈbaʊn.dər.i ɪz mɑːrkt wɪð red steɪks, sɜːr. juː kæn drɑːp ðə bɔːl hɪər/",
        "translation": "Ranh giới khu vực phạt được đánh dấu bằng các cọc đỏ thưa ông. Ông có thể thả bóng ở đây.",
        "options": [
                { "en": "A. The penalty area boundary is marked with red stakes, Sir. You can drop the ball here.", "vi": "Ranh giới cọc đỏ, thả bóng ở đây" },
                { "en": "B. There are yellow stakes, play from the water, Sir.", "vi": "Cọc vàng, đánh dưới nước" },
                { "en": "C. No stakes on this hole, Sir.", "vi": "Không có cọc" },
                { "en": "D. Out of bounds right, Sir.", "vi": "Ngoài biên bên phải" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện đọc câu nhắc nhở sửa vết bóng lún trên green (pitch mark):",
        "audioText": "Please repair your pitch mark on the green, Sir. Thank you.",
        "phonetic": "/pliːz rɪˈper jʊər pɪtʃ mɑːrk ɑːn ðə ɡriːn, sɜːr. θæŋk juː/",
        "translation": "Xin vui lòng sửa vết bóng lõm trên green giúp tôi thưa ông. Cảm ơn ông.",
        "options": [
                { "en": "A. Please repair your pitch mark on the green, Sir. Thank you.", "vi": "Sửa vết bóng lún trên green" },
                { "en": "B. Leave the green damaged, Sir.", "vi": "Để green hỏng" },
                { "en": "C. Step heavily on the green, Sir.", "vi": "Dẫm mạnh lên green" },
                { "en": "D. Don't touch the green surface, Sir.", "vi": "Đừng chạm mặt green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện phát âm thuật ngữ cào cát san bằng bẫy cát sau khi đánh (rake the bunker):",
        "audioText": "I will rake the bunker for you now, Sir.",
        "phonetic": "/aɪ wɪl reɪk ðə ˈbʌŋ.kɚ fɔːr juː naʊ, sɜːr/",
        "translation": "Tôi sẽ cào lại bẫy cát cho ông ngay bây giờ ạ.",
        "options": [
                { "en": "A. I will rake the bunker for you now, Sir.", "vi": "Cào lại bẫy cát cho khách (/rake the bunker/)" },
                { "en": "B. Leave the bunker footprints, Sir.", "vi": "Để lại dấu chân trong cát" },
                { "en": "C. Hit another ball from the sand, Sir.", "vi": "Đánh quả khác từ cát" },
                { "en": "D. Fill the bunker with water, Sir.", "vi": "Đổ nước vào bẫy cát" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện phát âm thông báo vị trí cờ cắm ở tâm giữa green:",
        "audioText": "The pin is right in the middle of the green today, Sir.",
        "phonetic": "/ðə pɪn ɪz raɪt ɪn ðə ˈmɪd.əl əv ðə ɡriːn təˈdeɪ, sɜːr/",
        "translation": "Hôm nay cờ cắm ngay ở chính giữa green thưa ông.",
        "options": [
                { "en": "A. The pin is right in the middle of the green today, Sir.", "vi": "Cờ cắm chính giữa green" },
                { "en": "B. The pin is at the front edge, Sir.", "vi": "Cờ ở mép trước" },
                { "en": "C. The pin is hidden behind trees, Sir.", "vi": "Cờ khuất sau cây" },
                { "en": "D. There is no flag today, Sir.", "vi": "Hôm nay không có cờ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện đọc câu nhắc nhở khách tránh dẫm lên đường line gạt bóng của người khác:",
        "audioText": "Please watch your step and avoid walking on other players' line of putts, Sir.",
        "phonetic": "/pliːz wɑːtʃ jʊər step ænd əˈvɔɪd ˈwɔː.kɪŋ ɑːn ˈʌð.ɚ ˈpleɪ.ɚz laɪ əv pʌts, sɜːr/",
        "translation": "Xin chú ý bước chân và tránh dẫm lên đường gạt bóng của người chơi khác thưa ông.",
        "options": [
                { "en": "A. Please watch your step and avoid walking on other players' line of putts, Sir.", "vi": "Tránh dẫm lên đường line gạt bóng của người khác" },
                { "en": "B. Walk directly on everyone's line, Sir.", "vi": "Đi thẳng lên line của mọi người" },
                { "en": "C. Run across the green quickly, Sir.", "vi": "Chạy nhanh qua green" },
                { "en": "D. Stand close to the cup, Sir.", "vi": "Đứng sát lỗ gôn" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện đọc câu tư vấn lực đánh khi green bị ướt buổi sáng sớm:",
        "audioText": "The morning dew makes the green a bit slow. You need a firmer stroke, Sir.",
        "phonetic": "/ðə ˈmɔːr.nɪŋ duː meɪks ðə ɡriːn ə bɪt sloʊ. juː niːd ə ˈfɜːr.mɚ stroʊk, sɜːr/",
        "translation": "Sương sớm làm cho green hơi chậm. Ông cần cú gạt dứt khoát và mạnh tay hơn thưa ông.",
        "options": [
                { "en": "A. The morning dew makes the green a bit slow. You need a firmer stroke, Sir.", "vi": "Sương sớm green chậm, cần gạt mạnh tay dứt khoát" },
                { "en": "B. Green is extremely fast, hit very softly, Sir.", "vi": "Green rất nhanh, gạt cực nhẹ" },
                { "en": "C. No dew today, perfect speed, Sir.", "vi": "Không có sương" },
                { "en": "D. Use a driver on the green, Sir.", "vi": "Dùng driver trên green" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện phát âm thông báo điểm số tốt sau khi kết thúc hố gôn:",
        "audioText": "That was a fantastic Par on this difficult hole, Sir!",
        "phonetic": "/ðæt wɪz ə fænˈtæs.tɪk pɑːr ɑːn ðɪs ˈdɪf.ə.kənt hoʊl, sɜːr/",
        "translation": "Đó là một điểm Par tuyệt vời trên hố đấu khó này thưa ông!",
        "options": [
                { "en": "A. That was a fantastic Par on this difficult hole, Sir!", "vi": "Điểm Par tuyệt vời trên hố khó!" },
                { "en": "B. That was a triple bogey, bad job, Sir.", "vi": "Điểm triple bogey tồi" },
                { "en": "C. You lost the ball here, Sir.", "vi": "Mất bóng ở đây" },
                { "en": "D. Let's quit the game, Sir.", "vi": "Bỏ chơi thôi" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện đọc câu nhắc nhở giữ nhịp độ chơi nhanh (Ready golf):",
        "audioText": "To keep up with the group ahead, we should play ready golf now, Sir.",
        "phonetic": "/tə kiːp ʌp wɪð ðə ɡruːp əˈhed, wiː ʃʊd pleɪ ˈred.i ɡɑːlf naʊ, sɜːr/",
        "translation": "Để theo kịp nhóm phía trước, chúng ta nên chơi theo nhịp độ nhanh linh hoạt thưa ông.",
        "options": [
                { "en": "A. To keep up with the group ahead, we should play ready golf now, Sir.", "vi": "Chơi nhanh linh hoạt để kịp nhóm trước (/ready golf/)" },
                { "en": "B. Slow down and take a long break, Sir.", "vi": "Đi chậm và nghỉ lâu" },
                { "en": "C. Wait for 15 minutes before every shot, Sir.", "vi": "Chờ 15 phút trước mỗi cú đánh" },
                { "en": "D. Skip all remaining holes, Sir.", "vi": "Bỏ tất cả các hố còn lại" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện phát âm câu thông báo cờ cắm ở góc trước bên trái green:",
        "audioText": "The pin is tucked in the front left corner today, Sir.",
        "phonetic": "/ðə pɪn ɪz tʌkt ɪn ðə frʌnt left ˈkɔːr.nɚ təˈdeɪ, sɜːr/",
        "translation": "Hôm nay cờ cắm ở vị trí hiểm góc trước bên trái green thưa ông.",
        "options": [
                { "en": "A. The pin is tucked in the front left corner today, Sir.", "vi": "Cờ cắm góc trước bên trái" },
                { "en": "B. The pin is at the back right, Sir.", "vi": "Cờ ở góc sau bên phải" },
                { "en": "C. Pin is right in the center, Sir.", "vi": "Cờ chính giữa" },
                { "en": "D. No pin on the green, Sir.", "vi": "Không có cờ" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "mcq",
        "title": "[3.5 Tình huống nâng cao] Luyện đọc câu hỗ trợ lau sạch bóng gôn cho khách:",
        "audioText": "Let me clean your golf ball for you, Sir. Here it is.",
        "phonetic": "/let miː kliːn jʊər ɡɑːlf bɔːl fɔːr juː, sɜːr. hɪər ɪt ɪz/",
        "translation": "Để tôi lau sạch bóng gôn giúp ông nhé. Bóng của ông đây ạ.",
        "options": [
                { "en": "A. Let me clean your golf ball for you, Sir. Here it is.", "vi": "Để tôi lau sạch bóng gôn giúp ông" },
                { "en": "B. Keep your dirty ball in the pocket, Sir.", "vi": "Giữ bóng bẩn trong túi" },
                { "en": "C. Clean it yourself, Sir.", "vi": "Tự lau đi" },
                { "en": "D. Throw away this ball, Sir.", "vi": "Vứt quả bóng này đi" }
        ],
        "correct": 0
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /red steɪks/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The penalty area is marked with red stakes, Sir.",
        "phonetic": "/ðə ˈpen.əl.ti ˈer.i.ə ɪz mɑːrkt wɪð red steɪks, sɜːr/",
        "translation": "Khu vực phạt được đánh dấu bằng các cọc đỏ thưa ông.",
        "displaySentence": "The penalty area is marked with _______, Sir.",
        "targetWord": "red stakes",
        "hint": "💡 Gợi ý phiên âm: /red steɪks/ (10 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /pɪtʃ mɑːrk/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Please repair your pitch mark on the green, Sir.",
        "phonetic": "/pliːz rɪˈper jʊər pɪtʃ mɑːrk ɑːn ðə ɡriːn, sɜːr/",
        "translation": "Xin vui lòng sửa vết bóng lún trên green thưa ông.",
        "displaySentence": "Please repair your _______ on the green, Sir.",
        "targetWord": "pitch mark",
        "hint": "💡 Gợi ý phiên âm: /pɪtʃ mɑːrk/ (10 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /rake the bunker/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "I will rake the bunker after your shot, Sir.",
        "phonetic": "/aɪ wɪl reɪk ðə ˈbʌŋ.kɚ ˈæf.tər jʊər ʃɑːt, sɜːr/",
        "translation": "Tôi sẽ cào lại bẫy cát sau cú đánh của ông ạ.",
        "displaySentence": "I will _______ after your shot, Sir.",
        "targetWord": "rake the bunker",
        "hint": "💡 Gợi ý phiên âm: /reɪk ðə ˈbʌŋ.kɚ/ (15 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /ready golf/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "We need to play ready golf today, Sir.",
        "phonetic": "/wiː niːd tɔː pleɪ ˈred.i ɡɑːlf təˈdeɪ, sɜːr/",
        "translation": "Chúng ta cần chơi nhanh linh hoạt (ready golf) ngày hôm nay ạ.",
        "displaySentence": "We need to play _______ today, Sir.",
        "targetWord": "ready golf",
        "hint": "💡 Gợi ý phiên âm: /ˈred.i ɡɑːlf/ (10 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /morning dew/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "The morning dew makes the green slower, Sir.",
        "phonetic": "/ðə ˈmɔːr.nɪŋ duː meɪks ðə ɡriːn ˈsloʊ.ɚ, sɜːr/",
        "translation": "Sương sớm làm cho green chậm hơn thưa ông.",
        "displaySentence": "The _______ makes the green slower, Sir.",
        "targetWord": "morning dew",
        "hint": "💡 Gợi ý phiên âm: /ˈmɔːr.nɪŋ duː/ (11 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /firmer stroke/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "You need a firmer stroke on this slow green, Sir.",
        "phonetic": "/juː niːd ə ˈfɜːr.mɚ stroʊk ɑːn ðɪs sloʊ ɡriːn, sɜːr/",
        "translation": "Ông cần một cú gạt dứt khoát mạnh tay hơn trên green chậm này ạ.",
        "displaySentence": "You need a _______ on this slow green, Sir.",
        "targetWord": "firmer stroke",
        "hint": "💡 Gợi ý phiên âm: /ˈfɜːr.mɚ stroʊk/ (13 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /line of putts/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Please avoid walking on other players' line of putts, Sir.",
        "phonetic": "/pliːz əˈvɔɪd ˈwɔː.kɪŋ ɑːn ˈʌð.ɚ ˈpleɪ.ɚz laɪ əv pʌts, sɜːr/",
        "translation": "Xin tránh dẫm lên đường line gạt bóng của người chơi khác thưa ông.",
        "displaySentence": "Please avoid walking on other players' _______, Sir.",
        "targetWord": "line of putts",
        "hint": "💡 Gợi ý phiên âm: /laɪ əv pʌts/ (12 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /clean your golf ball/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "Let me clean your golf ball, Sir.",
        "phonetic": "/let miː kliːn jʊər ɡɑːlf bɔːl, sɜːr/",
        "translation": "Để tôi lau sạch bóng gôn cho ông nhé thưa ông.",
        "displaySentence": "Let me _______, Sir.",
        "targetWord": "clean your golf ball",
        "hint": "💡 Gợi ý phiên âm: /kliːn jʊər ɡɑːlf bɔːl/ (20 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /difficult hole/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "That was a great par on this difficult hole, Sir.",
        "phonetic": "/ðæt wɪz ə ɡreɪt pɑːr ɑːn ðɪs ˈdɪf.ə.kənt hoʊl, sɜːr/",
        "translation": "Đó là điểm par tuyệt vời trên hố đấu khó này thưa ông.",
        "displaySentence": "That was a great par on this _______, Sir.",
        "targetWord": "difficult hole",
        "hint": "💡 Gợi ý phiên âm: /ˈdɪf.ə.kənt hoʊl/ (14 ký tự)."
    },
    {
        "lesson": "3",
        "section": "section3.5",
        "type": "fill",
        "title": "[3.5 Thực hành điền từ] Nghe phiên âm /group ahead/ và ĐIỀN TỪ CHUẨN:",
        "audioText": "We need to catch up with the group ahead, Sir.",
        "phonetic": "/wiː niːd tɔː kætʃ ʌp wɪð ðə ɡruːp əˈhed, sɜːr/",
        "translation": "Chúng ta cần bắt kịp nhóm phía trước thưa ông.",
        "displaySentence": "We need to catch up with the _______, Sir.",
        "targetWord": "group ahead",
        "hint": "💡 Gợi ý phiên âm: /ɡruːp əˈhed/ (11 ký tự)."
    }
);
