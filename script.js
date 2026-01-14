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
    gambar: {
        anak: [
            {q: "Gambar apakah ini?", img: "https://cdn.pixabay.com/photo/2017/01/29/13/11/kaaba-2017983_1280.jpg", a: ["Rumah", "Ka'bah", "Masjid", "Tugu"], c: 1},
            {q: "Dzikir pakai benda ini, namanya?", img: "https://cdn.pixabay.com/photo/2017/08/02/16/09/tasbih-2572244_1280.jpg", a: ["Mainan", "Tasbih", "Kalung", "Gelang"], c: 1},
            {q: "Ini kitab suci kita, namanya?", img: "https://cdn.pixabay.com/photo/2017/04/05/22/02/quran-2206514_1280.jpg", a: ["Buku", "Al-Qur'an", "Koran", "Majalah"], c: 1},
            {q: "Nabi terakhir...", a: ["Adam", "Muhammad SAW", "Musa", "Isa"], c: 1},
            {q: "Shalat ... kali sehari.", a: ["3", "4", "5", "6"], c: 2},
            {q: "Posisi ini disebut...", img: "https://cdn.pixabay.com/photo/2015/07/13/11/56/muslim-843076_1280.jpg", a: ["Sujud", "Rukuk", "Berdiri", "Duduk"], c: 0},
            {q: "Masjid Nabawi di...", a: ["Makkah", "Madinah", "Yaman", "Turki"], c: 1},
            {q: "Rukun Islam ada...", a: ["4", "5", "6", "10"], c: 1},
            {q: "Setelah puasa kita lebaran...", a: ["Idul Fitri", "Idul Adha", "Tahun Baru", "Maulid"], c: 0},
            {q: "Ibadah di masjid adalah...", a: ["Makan", "Shalat", "Tidur", "Main"], c: 1},
            {q: "Sahur dilakukan waktu...", a: ["Pagi sekali", "Siang", "Sore", "Malam"], c: 0},
            {q: "Quran surat Al-Fil tentang...", a: ["Gajah", "Burung", "Kucing", "Semut"], c: 0},
            {q: "Siapa pencipta kita?", a: ["Manusia", "Allah", "Malaikat", "Nabi"], c: 1},
            {q: "Lawan dari jujur adalah...", a: ["Baik", "Bohong", "Sabar", "Pintar"], c: 1},
            {q: "Malaikat Jibril bawa...", a: ["Wahyu", "Hujan", "Rezeki", "Maut"], c: 0},
            {q: "Hukum curi barang teman...", a: ["Boleh", "Dosa/Haram", "Pahala", "Hebat"], c: 1},
            {q: "Surah Al-Ikhlas ada ... ayat.", a: ["3", "4", "5", "6"], c: 1},
            {q: "Ibu Nabi Muhammad...", a: ["Aminah", "Khadijah", "Aisyah", "Halimah"], c: 0},
            {q: "Kita baca ... sebelum makan.", a: ["Puisi", "Doa", "Koran", "Majalah"], c: 1},
            {q: "Wudhu cuci muka ... kali.", a: ["1", "2", "3", "10"], c: 2}
        ],
        dewasa: [
            {q: "Tempat wukuf haji adalah...", img: "https://cdn.pixabay.com/photo/2016/02/19/11/47/mount-arafat-1209939_1280.jpg", a: ["Uhud", "Arafah", "Nur", "Tsur"], c: 1},
            {q: "Kubah emas di Palestina...", img: "https://cdn.pixabay.com/photo/2018/11/14/20/06/jerusalem-3815962_1280.jpg", a: ["Dome of the Rock", "Nabawi", "Quba", "Masjid Haram"], c: 0},
            {q: "Nabi menerima wahyu pertama di...", img: "https://cdn.pixabay.com/photo/2019/08/21/05/29/mountain-4420235_1280.jpg", a: ["Goa Tsur", "Goa Hira", "Masjid", "Rumah Khadijah"], c: 1},
            {q: "Berapa rakaat shalat fardhu sehari?", a: ["15", "17", "20", "12"], c: 1},
            {q: "Pakaian haji pria...", a: ["Ihram", "Jubah", "Koko", "Sarung"], c: 0},
            {q: "Mata air Makkah...", a: ["Nil", "Zamzam", "Euphrat", "Kautsar"], c: 1},
            {q: "Hukum khamr...", a: ["Halal", "Haram", "Makruh", "Mubah"], c: 1},
            {q: "Nishab emas...", a: ["85 gr", "100 gr", "50 gr", "200 gr"], c: 0},
            {q: "Shalat Jumat hukumnya...", a: ["Wajib bagi pria", "Sunnah", "Mubah", "Makruh"], c: 0},
            {q: "Malaikat peniup sangkakala...", a: ["Jibril", "Israfil", "Mikail", "Izrail"], c: 1},
            {q: "Rukun iman ke-5...", a: ["Malaikat", "Kiamat", "Kitab", "Nabi"], c: 1},
            {q: "Thawaf keliling Ka'bah ... kali.", a: ["3", "5", "7", "10"], c: 2},
            {q: "Surah Al-Alaq tentang...", a: ["Wahyu 1", "Zakat", "Haji", "Puasa"], c: 0},
            {q: "Zakat fitrah dibayar saat...", a: ["Ramadhan", "Syawal", "Haji", "Maulid"], c: 0},
            {q: "Ibadah haji rukun Islam ke...", a: ["3", "4", "5", "2"], c: 2},
            {q: "Nabi Muhammad wafat usia...", a: ["60", "63", "65", "70"], c: 1},
            {q: "Kitab Nabi Isa...", a: ["Taurat", "Zabur", "Injil", "Quran"], c: 2},
            {q: "Gelar Abu Bakar...", a: ["Al-Faruq", "Ash-Shiddiq", "Dzun Nurain", "Saifullah"], c: 1},
            {q: "Puasa wajib bulan...", a: ["Rajab", "Ramadhan", "Syawal", "Sya'ban"], c: 1},
            {q: "Aurat wanita kecuali...", a: ["Kaki", "Wajah & Telapak", "Rambut", "Leher"], c: 1}
        ]
    }
};

function selectCategory(cat) {
    currentCategory = cat;
    document.getElementById('menu-screen').classList.add('hidden');
    document.getElementById('setup-screen').classList.remove('hidden');
    document.getElementById('cat-display').innerText = "Kategori: " + cat.toUpperCase();
}

function startGame() {
    let limitInput = parseInt(document.getElementById('limit-input').value) || 10;
    // Mengambil level yang dipilih dari radio button
    let levelElement = document.querySelector('input[name="level"]:checked');
    let selectedLevel = levelElement.value;
    
    // Ambil data soal
    let source = bankSoal[currentCategory][selectedLevel];
    
    curIdx = 0;
    score = 0;
    document.getElementById('score-val').innerText = score;
    
    // Acak soal
    let limit = Math.min(limitInput, source.length);
    activeQuestions = [...source].sort(() => Math.random() - 0.5).slice(0, limit);
    
    // Tampilkan layar game
    document.getElementById('setup-screen').classList.add('hidden');
    document.getElementById('game-screen').classList.remove('hidden');
    document.getElementById('total-num').innerText = activeQuestions.length;
    loadQuestion();
}

function loadQuestion() {
    let q = activeQuestions[curIdx];
    document.getElementById('current-num').innerText = curIdx + 1;
    document.getElementById('q-text').innerText = q.q;
    document.getElementById('result-msg').innerText = "";
    
    let imgCont = document.getElementById('image-container');
    if(q.img) {
        document.getElementById('q-img').src = q.img;
        imgCont.classList.remove('hidden');
    } else {
        imgCont.classList.add('hidden');
    }

    let box = document.getElementById('options-box');
    box.innerHTML = "";
    q.a.forEach((opt, idx) => {
        let btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
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
        document.getElementById('snd-right').play();
    } else {
        document.getElementById('result-msg').innerHTML = "<span style='color:red'>❌ Kurang Tepat!</span>";
        document.getElementById('snd-wrong').play();
    }

    setTimeout(() => {
        curIdx++;
        if(curIdx < activeQuestions.length) loadQuestion();
        else showFinal();
    }, 1200);
}

function showFinal() {
    document.getElementById('game-screen').classList.add('hidden');
    document.getElementById('end-screen').classList.remove('hidden');
    document.getElementById('final-score').innerText = score;
    
    let ratio = score / activeQuestions.length;
    let msg = ratio === 1 ? "Sempurna! Kamu cerdas sekali." : (ratio >= 0.7 ? "Bagus! Terus tingkatkan." : "Ayo belajar lagi!");
    document.getElementById('final-msg').innerText = msg;
}