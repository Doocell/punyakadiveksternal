export const QUIZ_META = {
  id: 'kuis',
  kicker: '10 · Uji pemahaman',
  title: 'Seberapa jauh kamu mengenal biodiversitas?',
  lead: 'Yuk, cek pemahamanmu lewat 10 pertanyaan singkat dari materi yang sudah dipelajari. Pilih satu jawaban yang paling tepat di setiap soal, lalu tekan tombol periksa jawaban.',
  note: 'Tidak perlu terburu-buru. Baca kembali materi jika masih ada pertanyaan yang terasa sulit.',
};

export const QUIZ_QUESTIONS = [
  {
    id: 'q0',
    question: 'Keanekaragaman hayati mencakup variasi pada tingkat ...',
    options: [
      'Gen, jenis, dan ekosistem',
      'Individu, populasi, dan benua',
      'Iklim, tanah, dan batuan',
      'Desa, kota, dan provinsi',
    ],
    answer: 0,
    explanation: 'Biodiversitas dibedakan menjadi keanekaragaman gen, jenis, dan ekosistem.',
  },
  {
    id: 'q1',
    question:
      'Perbedaan warna dan ukuran pada varietas padi yang masih satu spesies menunjukkan keanekaragaman ...',
    options: ['Ekosistem', 'Gen', 'Jenis', 'Habitat'],
    answer: 1,
    explanation: 'Variasi sifat dalam satu spesies merupakan keanekaragaman gen.',
  },
  {
    id: 'q2',
    question:
      'Hutan mangrove, savana, dan terumbu karang merupakan contoh keanekaragaman ...',
    options: ['Gen', 'Populasi', 'Ekosistem', 'Individu'],
    answer: 2,
    explanation:
      'Ketiganya memiliki kondisi lingkungan dan komunitas makhluk hidup yang berbeda.',
  },
  {
    id: 'q3',
    question: 'Fauna Asiatis di Indonesia terutama ditemukan di wilayah ...',
    options: [
      'Papua dan Kepulauan Aru',
      'Sulawesi dan Nusa Tenggara',
      'Sumatra, Jawa, Kalimantan, dan Bali',
      'Maluku bagian timur saja',
    ],
    answer: 2,
    explanation: 'Zona Asiatis meliputi Sumatra, Jawa, Kalimantan, dan Bali.',
  },
  {
    id: 'q4',
    question: 'Komodo, anoa, dan babirusa merupakan contoh fauna khas zona ...',
    options: ['Asiatis', 'Peralihan (Wallacea)', 'Australis', 'Arktik'],
    answer: 1,
    explanation: 'Komodo, anoa, dan babirusa merupakan fauna khas kawasan peralihan.',
  },
  {
    id: 'q5',
    question: 'Garis Wallace menjadi penanda biogeografi antara ...',
    options: [
      'Asiatis dan peralihan',
      'Peralihan dan Australis',
      'Papua dan Australia',
      'Jawa dan Sumatra',
    ],
    answer: 0,
    explanation:
      'Garis Wallace memisahkan wilayah fauna bercorak Asiatis dengan kawasan peralihan.',
  },
  {
    id: 'q6',
    question: 'Garis Weber digunakan untuk menggambarkan kawasan tempat ...',
    options: [
      'Fauna Asia sepenuhnya mendominasi',
      'Fauna Australia sepenuhnya mendominasi',
      'Pengaruh fauna Asia dan Australia relatif berimbang',
      'Tidak terdapat kehidupan hewan',
    ],
    answer: 2,
    explanation:
      'Garis Weber berada di kawasan peralihan dengan pengaruh fauna Asia dan Australia yang relatif berimbang.',
  },
  {
    id: 'q7',
    question: 'Garis Lydekker berkaitan dengan batas kawasan peralihan menuju fauna ...',
    options: ['Asiatis', 'Australis', 'Eropa', 'Afrika'],
    answer: 1,
    explanation:
      'Garis Lydekker menandai sisi timur kawasan peralihan menuju wilayah bercorak Australis.',
  },
  {
    id: 'q8',
    question:
      'Apa yang dapat mendorong munculnya spesies endemik di pulau-pulau Indonesia?',
    options: [
      'Pulau terpisah oleh laut dalam waktu lama',
      'Semua pulau memiliki iklim yang sama',
      'Tidak ada perbedaan habitat',
      'Semua organisme berpindah setiap hari',
    ],
    answer: 0,
    explanation:
      'Keterpisahan pulau membuat populasi berkembang dalam kondisi berbeda dan dapat mendorong terbentuknya spesies endemik.',
  },
  {
    id: 'q9',
    question: 'Pelestarian in situ dilakukan dengan cara ...',
    options: [
      'Menyimpan benih di laboratorium',
      'Melindungi satwa dan tumbuhan di habitat alaminya',
      'Memindahkan semua satwa ke kebun binatang',
      'Mengoleksi tumbuhan sebagai hiasan rumah',
    ],
    answer: 1,
    explanation: 'In situ berarti pelestarian dilakukan di habitat alami organisme tersebut.',
  },
];
