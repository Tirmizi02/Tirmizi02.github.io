let currentCategory = '';
let activeQuestions = [];
let curIdx = 0;
let score = 0;

const bankSoal = {
    sejarah: {
        anak: [
            {q: "Siapa nama ayah Nabi Muhammad SAW?", a: ["Abu Thalib", "Abdullah", "Abdul Muthalib", "Hamzah"], c: 1},
            {q: "Nabi yang membangun kapal besar adalah...", a: ["Nuh", "Hud", "Luth", "Shalih"], c: 0},
            {q: "Nabi yang selamat dari api adalah...", a: ["Musa", "Ibrahim", "Isa", "Nuh"], c: 1},
            {q: "Ibu Nabi Muhammad SAW bernama...", a: ["Khadijah", "Aminah", "Halimah", "Fathimah"], c: 1},
            {q: "Nabi yang memiliki tongkat jadi ular adalah...", a: ["Musa", "Isa", "Adam", "Sulaiman"], c: 0},
            {q: "Berapa jumlah Nabi yang wajib diketahui?", a: ["10", "25", "50", "99"], c: 1},
            {q: "Malaikat yang membawa wahyu adalah...", a: ["Jibril", "Mikail", "Ridwan", "Malik"], c: 0},
            {q: "Burung yang menghancurkan pasukan gajah...", a: ["Garuda", "Ababil", "Pipit", "Elang"], c: 1},
            {q: "Nabi Muhammad lahir di kota...", a: ["Madinah", "Makkah", "Mesir", "Yaman"], c: 1},
            {q: "Nabi pertama adalah...", a: ["Adam", "Idris", "Nuh", "Ibrahim"], c: 0},
            {q: "Raja yang mengejar Nabi Musa adalah...", a: ["Namrud", "Firaun", "Abrahah", "Jalut"], c: 1},
            {q: "Nabi yang ditelan ikan paus adalah...", a: ["Yunus", "Ilyas", "Zakaria", "Yahya"], c: 0},
            {q: "Sahabat Nabi dari kalangan anak-anak...", a: ["Bilal", "Ali bin Abi Thalib", "Umar", "Zaid"], c: 1},
            {q: "Nabi yang bisa bicara dengan hewan...", a: ["Daud", "Sulaiman", "Yusuf", "Ayyub"], c: 1},
            {q: "Istri pertama Rasulullah SAW...", a: ["Aisyah", "Khadijah", "Hafshah", "Saudah"], c: 1},
            {q: "Masjid pertama yang dibangun Nabi...", a: ["Nabawi", "Quba", "Haram", "Aqsa"], c: 1},
            {q: "Nabi Muhammad dijuluki Al-Amin, artinya...", a: ["Cerdas", "Dapat Dipercaya", "Sabar", "Berani"], c: 1},
            {q: "Nabi Ibrahim ayah dari Nabi...", a: ["Ismail & Ishaq", "Musa & Harun", "Yusuf", "Yahya"], c: 0},
            {q: "Malaikat Ridwan menjaga...", a: ["Neraka", "Surga", "Langit", "Bumi"], c: 1},
            {q: "Kitab Nabi Daud AS adalah...", a: ["Taurat", "Zabur", "Injil", "Al-Quran"], c: 1}
        ],
        dewasa: [
            {q: "Siapa Khalifah yang dijuluki Dzun Nurain?", a: ["Abu Bakar", "Umar", "Utsman bin Affan", "Ali"], c: 2},
            {q: "Perang dengan strategi parit disebut...", a: ["Badar", "Uhud", "Khandaq", "Tabuk"], c: 2},
            {q: "Penakluk Konstantinopel adalah...", a: ["Salahuddin", "Muhammad Al-Fatih", "Thariq", "Khalid"], c: 1},
            {q: "Perjanjian damai tahun 6 H...", a: ["Hudaibiyah", "Aqabah", "Piagam Madinah", "Fathul Makkah"], c: 0},
            {q: "Masa kekhalifahan Abu Bakar...", a: ["2 Tahun", "5 Tahun", "10 Tahun", "12 Tahun"], c: 0},
            {q: "Ibu kota Daulah Umayyah...", a: ["Baghdad", "Damaskus", "Kairo", "Madinah"], c: 1},
            {q: "Penulis wahyu utama Rasulullah...", a: ["Zaid bin Tsabit", "Umar", "Bilal", "Hamzah"], c: 0},
            {q: "Perang Yarmuk melawan...", a: ["Persia", "Romawi", "Majusi", "Mongol"], c: 1},
            {q: "Gelar Al-Faruq milik...", a: ["Abu Bakar", "Umar bin Khattab", "Utsman", "Ali"], c: 1},
            {q: "Singa Allah yang syahid di Uhud...", a: ["Ali", "Hamzah", "Khalid", "Ja'far"], c: 1},
            {q: "Nama asli Abu Bakar Ash-Shiddiq...", a: ["Abdullah", "Abdurrahman", "Zaid", "Ubaidillah"], c: 0},
            {q: "Tahun kesedihan Nabi disebut...", a: ["Amul Gajah", "Amul Huzni", "Hijrah", "Fathul Makkah"], c: 1},
            {q: "Perang Hunain melawan suku...", a: ["Quraisy", "Hawazin & Thaqif", "Yahudi", "Gassan"], c: 1},
            {q: "Masa keemasan Abbasiyah dipimpin oleh...", a: ["Harun Ar-Rasyid", "Muawiyah", "Al-Mansur", "Yazid"], c: 0},
            {q: "Baitul Hikmah berada di kota...", a: ["Damaskus", "Baghdad", "Kairo", "Cordoba"], c: 1},
            {q: "Istri Nabi anak Abu Bakar...", a: ["Khadijah", "Aisyah", "Hafshah", "Zainab"], c: 1},
            {q: "Siapa yang mengumpulkan Quran pertama kali?", a: ["Abu Bakar", "Umar", "Utsman", "Ali"], c: 0},
            {q: "Tujuan hijrah pertama sahabat...", a: ["Madinah", "Habasyah", "Thaif", "Yaman"], c: 1},
            {q: "Panglima penakluk Mesir...", a: ["Amru bin Ash", "Khalid bin Walid", "Saad", "Zaid"], c: 0},
            {q: "Rasulullah wafat pada usia...", a: ["60 Tahun", "63 Tahun", "65 Tahun", "70 Tahun"], c: 1}
        ]
    },
    fikih: {
        anak: [
            {q: "Berapa rakaat shalat Maghrib?", a: ["2", "3", "4", "5"], c: 1},
            {q: "Membersihkan diri setelah buang air...", a: ["Wudhu", "Mandi", "Istinja", "Tayamum"], c: 2},
            {q: "Rukun Islam pertama...", a: ["Shalat", "Syahadat", "Zakat", "Puasa"], c: 1},
            {q: "Wudhu menggunakan...", a: ["Tanah", "Air", "Susu", "Minyak"], c: 1},
            {q: "Shalat 5 waktu hukumnya...", a: ["Boleh", "Wajib", "Sunnah", "Hebat"], c: 1},
            {q: "Makan saat puasa sengaja...", a: ["Boleh", "Membatalkan", "Sunnah", "Hebat"], c: 1},
            {q: "Berapa rakaat shalat Subuh?", a: ["2", "3", "4", "5"], c: 0},
            {q: "Arah kiblat adalah...", a: ["Barat", "Ka'bah", "Masjid", "Langit"], c: 1},
            {q: "Berapa rakaat shalat Isya?", a: ["2", "3", "4", "5"], c: 2},
            {q: "Zakat fitrah di bulan...", a: ["Syawal", "Ramadhan", "Rajab", "Maulud"], c: 1},
            {q: "Shalat berjamaah dipimpin oleh...", a: ["Makmum", "Imam", "Ustadz", "Khatib"], c: 1},
            {q: "Ganti wudhu tanpa air...", a: ["Tayamum", "Lap kain", "Mandi", "Cuci"], c: 0},
            {q: "Membungkuk dalam shalat...", a: ["Sujud", "Rukuk", "Iktidal", "Duduk"], c: 1},
            {q: "Takbiratul Ihram dilakukan di...", a: ["Awal shalat", "Tengah", "Akhir", "Selesai"], c: 0},
            {q: "Puasa artinya menahan...", a: ["Lapar & Haus", "Bicara", "Lari", "Tidur"], c: 0},
            {q: "Mencatat amal baik adalah malaikat...", a: ["Atid", "Raqib", "Munkar", "Nakir"], c: 1},
            {q: "Anak sholeh berbakti kepada...", a: ["Teman", "Orang Tua", "Guru", "Pohon"], c: 1},
            {q: "Quran kitab suci umat...", a: ["Kristen", "Islam", "Yahudi", "Budha"], c: 1},
            {q: "Shalat malam di bulan Ramadhan...", a: ["Dhuha", "Tarawih", "Witir", "Tahajud"], c: 1},
            {q: "Selesai shalat kita melakukan...", a: ["Sujud", "Salam", "Rukuk", "Lari"], c: 1}
        ],
        dewasa: [
            {q: "Nishab emas wajib zakat...", a: ["85 gram", "100 gram", "50 gram", "93 gram"], c: 0},
            {q: "Darah setelah melahirkan...", a: ["Haid", "Istihadhah", "Nifas", "Wiladah"], c: 2},
            {q: "Cuci najis liur anjing...", a: ["3 Kali", "7 Kali (1 tanah)", "5 Kali", "1 Kali"], c: 1},
            {q: "Hukum shalat jenazah...", a: ["Fardhu Ain", "Fardhu Kifayah", "Sunnah", "Mubah"], c: 1},
            {q: "Wukuf dilakukan di...", a: ["Mina", "Muzdalifah", "Arafah", "Uhud"], c: 2},
            {q: "Batas minimal wajib zakat...", a: ["Haul", "Nishab", "Kadar", "Infaq"], c: 1},
            {q: "Shalat minta hujan...", a: ["Kusuf", "Istisqa", "Istikharah", "Hajat"], c: 1},
            {q: "Pakaian ihram lelaki ada ... kain.", a: ["1", "2", "3", "5"], c: 1},
            {q: "Dikerjakan pahala, ditinggal dosa...", a: ["Sunnah", "Wajib", "Mubah", "Makruh"], c: 1},
            {q: "Jarak minimal jamak qashar...", a: ["40 km", "81 km", "100 km", "10 km"], c: 1},
            {q: "Thawaf sebanyak ... putaran.", a: ["3", "5", "7", "10"], c: 2},
            {q: "Shalat Gerhana Matahari...", a: ["Khusuf", "Kusuf", "Istisqa", "Witir"], c: 1},
            {q: "Rukun haji yang utama...", a: ["Wukuf", "Mabit", "Lempar Jumrah", "Tahallul"], c: 0},
            {q: "Zakat mal sebesar...", a: ["2,5%", "5%", "10%", "20%"], c: 0},
            {q: "Niat puasa Ramadhan paling lambat...", a: ["Sebelum Fajar", "Setelah Subuh", "Siang", "Sore"], c: 0},
            {q: "Al-Fatihah dalam shalat adalah...", a: ["Syarat", "Rukun", "Sunnah", "Makruh"], c: 1},
            {q: "Idul Adha tanggal 10...", a: ["Syawal", "Dzulhijjah", "Ramadhan", "Muharram"], c: 1},
            {q: "Mandi wajib karena...", a: ["Mimpi basah", "Wudhu", "Makan", "Lari"], c: 0},
            {q: "Aurat laki-laki...", a: ["Pusar-Lutut", "Dada-Kaki", "Seluruh", "Wajah"], c: 0},
            {q: "Duduk akhir shalat...", a: ["Tahiyat", "Tasyahud Akhir", "Iktidal", "Sujud"], c: 1}
        ]
    },
    juzamma: {
        anak: [
            {q: "Surah Al-Fil tentang...", a: ["Kucing", "Gajah", "Burung", "Semut"], c: 1},
            {q: "An-Nas artinya...", a: ["Manusia", "Subuh", "Tolong", "Matahari"], c: 0},
            {q: "Al-Ikhlas tentang...", a: ["Siksa", "Keesaan Allah", "Bersih", "Baik"], c: 1},
            {q: "Al-Falaq artinya...", a: ["Subuh", "Fajar", "Manusia", "Malam"], c: 0},
            {q: "Al-Kautsar ada ... ayat.", a: ["3", "4", "5", "6"], c: 0},
            {q: "Surah terakhir di Quran...", a: ["Al-Fatihah", "Al-Falaq", "An-Nas", "Al-Baqarah"], c: 2},
            {q: "Al-Ashr artinya...", a: ["Waktu", "Tolong", "Buka", "Gajah"], c: 0},
            {q: "An-Nasr artinya...", a: ["Manusia", "Pertolongan", "Matahari", "Kuda"], c: 1},
            {q: "Iqra artinya...", a: ["Tulis", "Baca", "Dengar", "Lari"], c: 1},
            {q: "Al-Maun artinya...", a: ["Barang berguna", "Dusta", "Yatim", "Shalat"], c: 0},
            {q: "At-Tin artinya...", a: ["Buah Tin", "Zaitun", "Matahari", "Bulan"], c: 0},
            {q: "Al-Qariah tentang...", a: ["Kiamat", "Gajah", "Kuda", "Bintang"], c: 0},
            {q: "Humazah artinya...", a: ["Pencela", "Dusta", "Curi", "Bohong"], c: 0},
            {q: "Zalzalah artinya...", a: ["Goncangan", "Belah", "Gulung", "Lihat"], c: 0},
            {q: "Ikhlas ada ... ayat.", a: ["3", "4", "5", "6"], c: 1},
            {q: "Quraisy tentang...", a: ["Suku Quraisy", "Aus", "Yaman", "Mesir"], c: 0},
            {q: "Adiyat artinya...", a: ["Kuda perang", "Unta", "Gajah", "Burung"], c: 0},
            {q: "Nasr ada ... ayat.", a: ["3", "4", "5", "6"], c: 0},
            {q: "Al-Kafirun tentang...", a: ["Toleransi", "Siksa", "Zakat", "Haji"], c: 0},
            {q: "Maun sebut pendusta...", a: ["Yatim", "Kaya", "Guru", "Teman"], c: 0}
        ],
        dewasa: [
            {q: "An-Naba artinya...", a: ["Berita Besar", "Malaikat", "Kiamat", "Fajar"], c: 0},
            {q: "Abasa turun tegur Nabi soal...", a: ["Abdullah bin Ummi Maktum", "Zaid", "Abu Bakar", "Bilal"], c: 0},
            {q: "At-Takwir artinya...", a: ["Menggulung", "Terbelah", "Goncangan", "Kiamat"], c: 0},
            {q: "Al-Infitar tentang...", a: ["Bumi Belah", "Langit Belah", "Gunung", "Matahari"], c: 1},
            {q: "Al-Alaq 1-5 adalah...", a: ["Wahyu pertama", "Terakhir", "Hukum", "Kisah"], c: 0},
            {q: "Al-Ghashiyah artinya...", a: ["Kiamat", "Berita", "Membelah", "Pagi"], c: 0},
            {q: "Al-Fajr artinya...", a: ["Malam", "Waktu Fajar", "Siang", "Sore"], c: 1},
            {q: "Al-Qadr tentang malam...", a: ["Isra Mi'raj", "Lailatul Qadr", "Jumat", "Nuzulul"], c: 1},
            {q: "Mutaffifin adalah orang...", a: ["Curang timbangan", "Pelit", "Sombong", "Musyrik"], c: 0},
            {q: "An-Naziat artinya...", a: ["Malaikat Cabut", "Berita", "Goncangan", "Belah"], c: 0},
            {q: "Inshiqaq artinya...", a: ["Terbelah", "Gulung", "Goncang", "Jadi"], c: 0},
            {q: "Thariq tentang...", a: ["Bintang malam", "Matahari", "Bulan", "Kiamat"], c: 0},
            {q: "Al-Balad artinya...", a: ["Negeri", "Matahari", "Bulan", "Bintang"], c: 0},
            {q: "Al-Lail artinya...", a: ["Siang", "Malam", "Sore", "Pagi"], c: 1},
            {q: "Insyirah artinya...", a: ["Lapang", "Sempit", "Menang", "Tolong"], c: 0},
            {q: "Bayyinah artinya...", a: ["Bukti Nyata", "Berita", "Kiamat", "Zakat"], c: 0},
            {q: "Asy-Syams artinya...", a: ["Matahari", "Bulan", "Bintang", "Langit"], c: 0},
            {q: "Ad-Duha turun saat...", a: ["Wahyu berhenti", "Perang", "Lahir", "Wafat"], c: 0},
            {q: "Buruj artinya...", a: ["Gugusan Bintang", "Kiamat", "Langit", "Bumi"], c: 0},
            {q: "Tattwir artinya...", a: ["Menggulung", "Belah", "Hancur", "Gelap"], c: 0}
        ]
    },
    sambungayat: {
        anak: [
            { q: "قُلْ هُوَ اللَّهُ أَحَدٌ", a: ["اللَّهُ الصَّمَدُ", "لَمْ يَلِدْ وَلَمْ يُولَدْ", "وَلَمْ يَكُن لَّهُ كُفُوًا أَحَدٌ"], c: 0 },
            { q: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ", a: ["فَسَبِّحْ بِحَمْدِ رَبِّكَ", "وَرَأَيْتَ النَّاسَ يَدْخُلُونَ", "إِنَّهُ كَانَ تَوَّابًا"], c: 1 },
            { q: "أَرَأَيْتَ الَّذِي يُكَذِّبُ بِالدِّينِ", a: ["فَوَيْلٌ لِّلْمُصَلِّينَ", "وَلَا يَحُضُّ عَلَىٰ طَعَامِ", "فَذَٰلِكَ الَّذِي يَدُعُّ الْيَتِيمَ"], c: 2 },
            { q: "إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ", a: ["فَصَلِّ لِرَبِّكَ وَانْحَرْ", "إِنَّ شَانِئَكَ هُوَ الْأَبْتَرُ", "لِيَعْبُدُوا رَبَّ هَٰذَا"], c: 0 },
            { q: "لِيَعْبُدُوا رَبَّ هَٰذَا الْبَيْتِ", a: ["إِيلَافِهِمْ رِحْلَةَ الشِّتَاءِ", "الَّذِي أَطْعَمَهُم مِّن جُوعٍ", "لِإِيلَافِ قُرَيْشٍ"], c: 1 },
            { q: "وَمِن شَرِّ غَاسِقٍ إِذَا ...", a: ["وَقَبَ", "حَسَدَ", "نَفَثَ"], c: 0 },
            { q: "إِذَا زُلْزِلَتِ الْأَرْضُ ...", a: ["أَثْقَالَهَا", "زِلْزَالَهَا", "أَخْبَارَهَا"], c: 1 },
            { q: "تَبَّتْ يَدَا أَبِي لَهَبٍ ...", a: ["مَا أَغْنَىٰ عَنْهُ", "سَيَصْلَىٰ نَارًا", "وَتَبَّ"], c: 2 },
            { q: "فِي جِيدِهَا حَبْلٌ مِّن ...", a: ["حَطَبٍ", "مَّسَدٍ", "لَهَبٍ"], c: 1 },
            { q: "أَلَمْ يَجْعَلْ كَيْدَهُمْ فِي ...", a: ["تَضْلِيلٍ", "سِجِّيلٍ", "أَبَابِيلَ"], c: 0 }
        ],
        dewasa: [
            { q: "عَمَّ يَتَسَاءَلُونَ", a: ["عَنِ النَّبَإِ الْعَظِيمِ", "الَّذِي هُمْ فِيهِ مُخْتَلِفُونَ", "كَلَّا سَيَعْلَمُونَ"], c: 0 },
            { q: "وَالتِّينِ وَالزَّيْتُونِ", a: ["وَهَٰذَا الْبَلَدِ الْأَمِينِ", "وَطُورِ سِينِينَ", "لَقَدْ خَلَقْنَا الْإِنسَانَ"], c: 1 },
            { q: "أَلَمْ نَشْرَحْ لَكَ ...", a: ["وِزْرَكَ", "ذِكْرَكَ", "صَدْرَكَ"], c: 2 },
            { q: "إِذَا السَّمَاءُ انشَقَّتْ", a: ["وَأَذِنَتْ لِرَبِّهَا وَحُقَّتْ", "وَإِذَا الْأَرْضُ مُدَّتْ", "وَأَلْقَتْ مَا فِيهَا"], c: 0 },
            { q: "وَالسَّمَاءِ وَالطَّارِقِ", a: ["النَّجْمُ الثَّاقِبُ", "وَمَا أَدْرَاكَ مَا الطَّارِقُ", "إِن كُلُّ نَفْسٍ لَّمَّا"], c: 1 },
            { q: "سَبِّحِ اسْمَ رَبِّكَ الْأَعْلَى", a: ["الَّذِي خَلَقَ فَسَوَّىٰ", "وَالَّذِي قَدَّرَ فَهَدَىٰ", "فَجَعَلَهُ غُثَاءً"], c: 0 },
            { q: "لَا أُقْسِمُ بِهَٰذَا الْبَلَدِ", a: ["وَوَالِدٍ وَمَا وَلَدَ", "لَقَدْ خَلَقْنَا الْإِنسَانَ", "وَأَنتَ حِلٌّ بِهَٰذَا الْبَلَدِ"], c: 2 },
            { q: "وَالشَّمْسِ وَضُحَاهَا", a: ["وَالْقَمَرِ إِذَا تَلَاهَا", "وَالنَّهارِ إِذَا جَلَّاهَا", "وَاللَّيْلِ إِذَا يَغْشَاهَا"], c: 0 },
            { q: "إِنَّ الْإِنسَانَ لِرَبِّهِ لَكَنُودٌ", a: ["وَإِنَّهُ لِحُبِّ الْخَيْرِ", "وَإِنَّهُ عَلَىٰ ذَٰلِكَ لَشَهِيدٌ", "أَفَلَا يَعْلَمُ"], c: 1 },
            { q: "وَمَا أَدْرَاكَ مَا لَيْلَةُ ...", a: ["الْقَارِعَةُ", "الْفَجْرِ", "الْقَدْرِ"], c: 2 }
        ]
    }
};

// --- LOGIKA PERMAINAN ---

function selectCategory(cat) {
    currentCategory = cat;
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    let displayTitle = cat === 'sambungayat' ? "SAMBUNG AYAT" : cat.toUpperCase();
    document.getElementById('cat-display').innerText = "Kategori: " + displayTitle;
}

function startGame() {
    let limitInput = parseInt(document.getElementById('limit-input').value) || 10;
    let selectedLevel = document.querySelector('input[name="level"]:checked').value;
    
    let source = bankSoal[currentCategory][selectedLevel];
    if (!source || source.length === 0) {
        alert("Soal belum tersedia untuk kategori ini.");
        return;
    }

    curIdx = 0;
    score = 0;
    document.getElementById('score-val').innerText = score;
    
    // Acak soal dan ambil sesuai limit (maksimal 20)
    let limit = Math.min(limitInput, source.length);
    activeQuestions = [...source].sort(() => Math.random() - 0.5).slice(0, limit);
    
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('total-num').innerText = activeQuestions.length;
    loadQuestion();
}

function loadQuestion() {
    let q = activeQuestions[curIdx];
    let qTextElement = document.getElementById('q-text');
    
    document.getElementById('current-num').innerText = curIdx + 1;
    qTextElement.innerText = q.q;
    document.getElementById('result-msg').innerText = "";
    
    // Styling khusus Arab untuk Sambung Ayat
    if(currentCategory === 'sambungayat') {
        qTextElement.style.direction = "rtl";
        qTextElement.style.fontSize = "2rem";
        qTextElement.style.textAlign = "right";
    } else {
        qTextElement.style.direction = "ltr";
        qTextElement.style.fontSize = "1.2rem";
        qTextElement.style.textAlign = "center";
    }

    let box = document.getElementById('options-box');
    box.innerHTML = "";
    q.a.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        if(currentCategory === 'sambungayat') {
            btn.style.direction = "rtl";
            btn.style.textAlign = "right";
            btn.style.fontSize = "1.2rem";
        }
        btn.onclick = () => checkAnswer(idx);
        box.appendChild(btn);
    });
}

function checkAnswer(idx) {
    let correct = activeQuestions[curIdx].c;
    let btns = document.getElementsByClassName('option-btn');
    for(let b of btns) b.disabled = true;

    if(idx === correct) {
        score++;
        document.getElementById('score-val').innerText = score;
        document.getElementById('result-msg').innerHTML = "<span style='color:green'>✅ Benar! Masya Allah</span>";
        if(document.getElementById('snd-right')) document.getElementById('snd-right').play();
    } else {
        document.getElementById('result-msg').innerHTML = "<span style='color:red'>❌ Kurang Tepat!</span>";
        if(document.getElementById('snd-wrong')) document.getElementById('snd-wrong').play();
    }

    setTimeout(() => {
        curIdx++;
        if(curIdx < activeQuestions.length) loadQuestion();
        else showFinal();
    }, 1500);
}

function showFinal() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    
    let ratio = score / activeQuestions.length;
    let msg = "";
    if(ratio === 1) msg = "Sempurna! Hafalanmu luar biasa.";
    else if(ratio >= 0.7) msg = "Bagus! Terus muraja'ah ya.";
    else msg = "Semangat! Perbanyak lagi hafalannya.";
    
    document.getElementById('final-msg').innerText = msg;
}
