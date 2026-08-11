export type FaqItem = {
  question: string;
  answer: string;
};

/** Shared FAQ content for UI + FAQPage JSON-LD */
export const rentalFaqs: FaqItem[] = [
  {
    question: 'Apa saja syarat untuk menyewa motor?',
    answer:
      'Anda perlu mengirimkan foto E-KTP, SIM C yang masih aktif, dan salah satu dari dokumen berikut: ID Pegawai, Kartu Mahasiswa, tiket perjalanan, atau bukti menginap. Kirim semua ke WhatsApp admin. Saat serah terima motor, Anda juga perlu menitipkan satu identitas asli (E-KTP/SIM A) sebagai jaminan.',
  },
  {
    question: 'Bagaimana jika ada syarat yang kurang?',
    answer:
      'Tenang, Anda mungkin masih bisa menyewa. Jika ada persyaratan yang kurang, coba diskusikan dengan admin kami melalui WhatsApp. Kami akan coba mencari solusi atau syarat pengganti jika alasan Anda cukup kuat.',
  },
  {
    question: 'Apakah ada asuransi atau bantuan darurat?',
    answer:
      'Kami menyediakan bantuan darurat selama jam operasional kami (05:00 - 21:30). Jika motor mengalami kendala, tim kami akan segera membantu. Keamanan dan kenyamanan Anda adalah prioritas kami.',
  },
  {
    question: 'Bagaimana jika saya ingin membatalkan pesanan?',
    answer:
      'Untuk pembatalan pesanan, uang muka (DP) yang sudah dibayarkan tidak dapat dikembalikan (hangus). Kami sarankan untuk memastikan jadwal Anda sebelum melakukan pemesanan.',
  },
  {
    question: 'Bagaimana jika ingin reschedule (mengubah jadwal)?',
    answer:
      'Tentu bisa. Reschedule atau perubahan jadwal bisa dilakukan maksimal 1 kali. Mohon informasikan kepada admin kami sesegera mungkin agar kami bisa menyesuaikan ketersediaan unit.',
  },
  {
    question: 'Apakah bisa diantar ke lokasi saya?',
    answer:
      'Tentu! Kami menyediakan layanan antar-jemput ke hotel, stasiun, bandara, atau alamat lain di dalam kota Bandung. Biaya pengantaran akan disesuaikan tergantung jarak lokasi Anda.',
  },
  {
    question: 'Bagaimana kebijakan bahan bakarnya?',
    answer:
      'Setiap motor kami sediakan dengan bahan bakar sekitar 1 liter, cukup untuk Anda menuju SPBU terdekat. Jika Anda ingin motor diserahkan dengan tangki penuh, akan ada biaya tambahan.',
  },
  {
    question: 'Fasilitas apa saja yang saya dapatkan?',
    answer:
      'Setiap penyewaan sudah termasuk 2 helm SNI yang bersih dan 2 jas hujan. Beberapa unit motor kami juga sudah dilengkapi dengan phone holder untuk kemudahan navigasi Anda.',
  },
  {
    question: 'Apakah bisa sewa untuk jangka waktu panjang?',
    answer:
      'Tentu bisa! Kami memiliki paket sewa mingguan dan bulanan dengan harga yang jauh lebih hemat. Silakan lihat halaman harga kami atau hubungi admin untuk mendapatkan penawaran terbaik.',
  },
];
