// Semua isi teks portofolio ada di sini — edit file ini untuk mengganti konten.
import * as art from './art/fragments';
import logoCanva from './assets/logos/canva.svg';
import logoCapcut from './assets/logos/capcut.svg';
import logoFigma from './assets/logos/figma.svg';
import logoIllustrator from './assets/logos/illustrator.svg';
import logoPhotoshop from './assets/logos/photoshop.svg';
import logoPremiere from './assets/logos/premiere.svg';

export const C = {
  ink: '#1B1B1B',
  ground: '#DDF3EF',
  yellow: '#EEF15A',
  orange: '#F4A73E',
  green: '#7DDB8A',
  teal: '#8FE0D8',
  peach: '#F7CDB6',
  white: '#FFFFFF',
} as const;

export const links = {
  email: 'ricoprediansyah@gmail.com',
  linkedin: 'https://linkedin.com/in/RicoPrediansyah',
};

export const socials = [
  { name: 'Instagram', handle: '@predi.rco', url: 'https://instagram.com/predi.rco', icon: 'instagram', bg: C.peach },
  { name: 'TikTok', handle: '@predi.rco', url: 'https://tiktok.com/@predi.rco', icon: 'tiktok', bg: C.teal },
  { name: 'LinkedIn', handle: 'RicoPrediansyah', url: 'https://linkedin.com/in/RicoPrediansyah', icon: 'linkedin', bg: C.orange },
  { name: 'Threads', handle: '@predi.rco', url: 'https://www.threads.com/@predi.rco', icon: 'threads', bg: C.white },
  { name: 'Facebook', handle: 'rico.prediansyah', url: 'https://facebook.com/rico.prediansyah', icon: 'facebook', bg: C.green },
] as const;

export const nav = [
  { id: 'kampus', label: 'Kampus' },
  { id: 'kerja', label: 'Kerja' },
  { id: 'drone', label: 'Drone & IoT' },
  { id: 'kreatif', label: 'Kreatif' },
  { id: 'webdev', label: 'Web Dev' },
  { id: 'sekilas', label: 'Statistik' },
  { id: 'kontak', label: 'Kontak', accent: true },
];

export const hangTags = [
  { label: 'IoT', icon: 'wifi', w: 18, h: 16, bg: C.peach, len: 26 },
  { label: 'Drone', icon: 'minidrone', w: 26, h: 13, bg: C.yellow, len: 40 },
  { label: 'AI', icon: 'chip', w: 18, h: 18, bg: C.teal, len: 20 },
  { label: '</> IT', icon: '', w: 0, h: 0, bg: C.white, len: 34, mono: true },
  { label: 'Desain', icon: 'star', w: 16, h: 16, bg: C.green, len: 24 },
  { label: 'Listrik', icon: 'bolt', w: 12, h: 18, bg: C.orange, len: 38 },
];

export const marquee: Array<{ face: 'head' | 'head-happy'; bg: string } | { text: string; icon: string; w: number; h: number }> = [
  { face: 'head-happy', bg: C.teal },
  { text: 'IoT', icon: 'star', w: 28, h: 28 },
  { text: 'DRONE', icon: 'wifi', w: 34, h: 34 },
  { face: 'head', bg: C.orange },
  { text: 'AI', icon: 'star', w: 28, h: 28 },
  { text: 'WEB DEV', icon: 'chip', w: 30, h: 30 },
  { face: 'head-happy', bg: C.green },
  { text: 'DESAIN', icon: 'star', w: 28, h: 28 },
  { text: 'LISTRIK', icon: 'bolt', w: 22, h: 34 },
  { face: 'head', bg: C.peach },
];

// Kartu "Sekilas" sebelum Bab 1. Angka = perkiraan, silakan disesuaikan (0–100).
// Urutan peta skill = searah jarum jam mulai dari atas.
export const skillMap = [
  { label: 'IoT', value: 80 },
  { label: 'Drone', value: 60 },
  { label: 'AI/ML', value: 70 },
  { label: 'IT', value: 55 },
  { label: 'Desain', value: 90 },
  { label: 'Kelistrikan', short: 'Listrik', value: 50 },
];

// Pembagian waktu (total 100%). Warna sudah divalidasi aman buta warna — urutannya jangan ditukar.
export const timeSplit = [
  { label: 'Edukasi', value: 30, color: '#1FA394' },
  { label: 'Kerja / Magang', value: 30, color: '#E07B00' },
  { label: 'Organisasi', value: 17, color: '#7C4DDB' },
  { label: 'Penelitian', value: 14, color: '#3E9E4C' },
  { label: 'Mengajar', value: 9, color: '#D9A400' },
];

export const kampus = [
  { pose: 'pose-toga', label: 'Rico wisuda memegang ijazah', bg: C.yellow, tilt: '', fx: 'fx-tilt', big: 'IPK 3.81/4.00', small: 'Lulus Cumlaude' },
  { pose: 'rk-p-point', label: 'Rico melangkah cepat', bg: C.peach, tilt: 'tilt-r', fx: 'fx-dash', big: '3,48', unit: 'Tahun', small: 'masa studi' },
  { pose: 'rk-p-sit', label: 'Rico duduk belajar dengan tablet', bg: C.teal, tilt: '', fx: 'fx-tilt', title: 'UNESCO Summer Course', small: 'Modern Optics — serat optik, fotonika, sel surya (2023)' },
  { pose: 'pose-helmet', label: 'Rico dengan helm dan kunci pas', bg: C.green, tilt: 'tilt-l', fx: 'fx-tilt', title: 'Asisten Lab Telekomunikasi', small: 'Membimbing praktikum sistem komunikasi, MATLAB & Cisco' },
];

export const jobs = [
  { when: 'Mar 2025 – Feb 2026', org: 'Fana Kreatif Produksi', role: 'IT Support & Designer — Starlink, elektronika, desain brand klien', pose: 'pose-idea', label: 'Maskot Rico mendapat ide desain', bg: C.yellow, tilt: 'tilt-l' },
  { when: 'Apr – Jun 2026', org: 'Matra Digital Group', role: 'Technician Engineer — maintenance & memperbaiki alat elektronika', pose: 'pose-helmet-b', label: 'Maskot Rico memperbaiki perangkat', bg: C.green, tilt: 'tilt-r' },
  { when: 'Jun – Aug 2026', org: 'Byte Beyond Persona', role: 'Electrical Engineering — SLD, perencanaan listrik, smart IoT gedung', pose: 'pose-helmet', label: 'Rico sebagai teknisi listrik', bg: C.teal, tilt: 'tilt-l', bolt: true },
  { when: 'Sep 2026 – sekarang', org: 'Bank Mandiri', role: 'Officer Information Technology — ODP, kini tahap OJT', pose: 'pose-laptop', label: 'Maskot Rico bekerja dengan laptop', bg: C.orange, tilt: 'tilt-r', now: true, coins: true },
];

export const droneMini = [
  { art: art.dronila, label: 'Rico memetakan kebun dengan drone dan tank rover mini', bg: C.peach, tilt: 'tilt-l', title: 'DRONILA — pemetaan drone & rover' },
  { art: art.rubus, label: 'Rico memantau perangkat RUBUS bertenaga surya', bg: C.yellow, tilt: '', title: 'RUBUS — monitoring IoT & gateway surya' },
  { art: art.udang, label: 'Rico memantau tambak udang dengan IoT', bg: C.green, tilt: 'tilt-r', title: 'Smart Tambak Udang' },
];

export const kreatifStats = [
  { big: '30+', text: 'event digital kreatif sebagai speaker & juri', bg: C.white, tilt: 'tilt-r', icon: 'ic-mic', label: 'Mikrofon panggung' },
  { big: '150K', text: 'followers @official_unila — Gendong sosmed desain grafis 2023', bg: C.white, tilt: '', icon: 'ic-likes', label: 'HP dengan notifikasi like' },
  { big: '50K', text: 'followers @bem_unila — Dirjen Desain Grafis BEM 2023', bg: C.white, tilt: '', icon: 'ic-pen', label: 'Pen tool desain grafis' },
  { big: '80', text: 'anggota dipimpin — Kadep Kominfo HIMATRO 2023', bg: C.white, tilt: 'tilt-l', icon: 'ic-team', label: 'Tim yang dipimpin' },
];

// Logo asli aplikasi (src/assets/logos). Sumber: Wikimedia Commons, Devicon (MIT), Iconify Logos (CC0).
export const tools = [
  { name: 'Photoshop', logo: logoPhotoshop },
  { name: 'Illustrator', logo: logoIllustrator },
  { name: 'Premiere', logo: logoPremiere },
  { name: 'Figma', logo: logoFigma },
  { name: 'Canva', logo: logoCanva },
  { name: 'CapCut', logo: logoCapcut },
];

// Urutan = urutan tampil. Kosongkan `link` kalau proyek belum punya web.
export const projects = [
  {
    title: 'eommy.id',
    desc: 'Marketplace persiapan CPNS: tryout SKD, e-book, dan data formasi CPNS dalam satu tempat.',
    tags: ['Marketplace', 'Tryout', 'E-book'], tagBg: '#FFD93B', screen: '#E4EEFC',
    art: art.projEommy, label: 'Ilustrasi tryout CPNS, e-book, dan formasi di eommy.id',
    link: 'https://eommy.id', cta: 'Kunjungi eommy.id', tilt: 'tilt-l',
  },
  {
    title: 'MoneyMi',
    desc: 'Web pencatat cashflow: catat pemasukan & pengeluaran harian, lalu lihat ke mana uang pergi lewat grafik.',
    tags: ['Web App', 'Cashflow'], tagBg: C.peach, screen: '#FDE3D6',
    art: art.projMoneymi, label: 'Ilustrasi aplikasi pencatat pengeluaran MoneyMi',
    link: 'https://moneymi.web.id', cta: 'Kunjungi moneymi.web.id', tilt: 'tilt-r',
  },
  {
    title: 'Dashboard Smart Greenhouse',
    desc: 'Web & aplikasi untuk memantau 20+ sensor greenhouse secara real-time: suhu, kelembapan, irigasi, dan fertigasi.',
    tags: ['Web', 'Android', 'IoT'], tagBg: C.green, screen: '#E4F7E8',
    art: art.projGreenhouse, label: 'Ilustrasi dashboard IoT greenhouse',
    link: '', cta: '', tilt: 'tilt-l',
  },
  {
    title: 'Web Deteksi Sawit',
    desc: 'Unggah foto drone, AI mendeteksi dan menilai kualitas pohon sawit secara otomatis.',
    tags: ['YOLOv8', 'Computer Vision', 'Web'], tagBg: C.yellow, screen: '#FFF8D6',
    art: art.projSawit, label: 'Ilustrasi deteksi pohon sawit dengan kotak AI',
    link: '', cta: '', tilt: 'tilt-r',
  },
  {
    title: 'Cassava Circular Economy',
    // TODO: ganti deskripsi ini
    desc: 'Web ekonomi sirkular singkong: mengubah limbah singkong jadi produk yang bernilai.',
    tags: ['Web', 'Ekonomi Sirkular'], tagBg: C.green, screen: '#F3E9D2',
    art: art.projCassava, label: 'Ilustrasi singkong dengan panah daur ulang',
    link: 'https://cassavatelti.netlify.app/', cta: 'Kunjungi cassavatelti.netlify.app', tilt: 'tilt-l',
  },
  {
    title: 'Reminder',
    // TODO: ganti deskripsi ini
    desc: 'Web pengingat jadwal & to-do dengan notifikasi, biar nggak ada tugas yang kelewat.',
    tags: ['Web App', 'Produktivitas'], tagBg: C.yellow, screen: '#FFF1C2',
    art: art.projReminder, label: 'Ilustrasi aplikasi pengingat dengan lonceng dan daftar tugas',
    link: '', cta: '', tilt: 'tilt-r',
  },
];

export const sideQuests = [
  { title: 'Studi Independen AI', text: 'YOLOv8 untuk kualitas pohon sawit — Juara 3 Best Project', bg: C.teal, tilt: 'tilt-l', icon: 'ic-ai' },
  { title: 'Ahli K3 Umum', text: 'Sertifikasi BNSP, Mei 2026', bg: C.yellow, tilt: '', icon: 'ic-k3' },
  { title: 'Proyek elektro', text: 'Single line GI Tarahan, amplifier, kontrol PID', bg: C.green, tilt: 'tilt-r', icon: 'ic-elektro' },
  { title: 'PPK Ormawa 2023', text: 'Lolos pendanaan Kemendikbudristek', bg: C.orange, tilt: 'tilt-l', icon: 'ic-grant' },
];

export const skills = [
  'Arduino & RasPi',
  'AutoCAD · ETAP · Visio',
  'Python · JS · Kotlin · C++',
  'Computer Vision · ML',
  'Figma · HTML · CSS',
  'Photoshop · Illustrator · Premiere',
  'Laravel · React',
];

// Ukuran disamakan dari jarak mata→kaki (bukan bingkai gambar, karena topi/drone/konfeti ikut terhitung).
// cx = posisi tengah badan (kaki) dalam lebar gambar, dipakai supaya jarak antar karakter rata.
export const roles = [
  { pose: 'pose-drone', label: 'Rico pilot drone', w: 126, h: 187, cx: 0.295 },
  { pose: 'pose-wave', label: 'Rico melambai', w: 96, h: 183, cx: 0.375 },
  { pose: 'pose-toga', label: 'Rico wisuda', w: 107, h: 192, cx: 0.534 },
  { pose: 'pose-mic', label: 'Rico pembicara', w: 103, h: 184, cx: 0.359 },
  { pose: 'pose-helmet', label: 'Rico teknisi', w: 102, h: 190, cx: 0.433 },
  { pose: 'pose-laptop', label: 'Rico programmer', w: 90, h: 187, cx: 0.407 },
  { pose: 'pose-idea', label: 'Rico punya ide', w: 112, h: 190, cx: 0.372 },
  { pose: 'pose-yeay', label: 'Rico bersorak', w: 120, h: 184, cx: 0.494 },
];
