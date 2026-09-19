export type FaqItem = {
  question: string;
  answer: string;
};

/** Shared FAQ content for UI + FAQPage JSON-LD */
export const rentalFaqs: FaqItem[] = [
  {
    question: 'Apa saja syarat untuk menyewa mobil?',
    answer:
      'Anda perlu mengirimkan foto E-KTP dan SIM A yang masih aktif. Kirim semua dokumen ke WhatsApp admin. Saat serah terima mobil, Anda juga perlu menitipkan identitas asli sebagai jaminan.',
  },
  {
    question: 'Bagaimana jika ada syarat yang kurang?',
    answer:
      'Tenang, Anda mungkin masih bisa menyewa. Jika ada persyaratan yang kurang, coba diskusikan dengan admin kami melalui WhatsApp. Kami akan coba mencari solusi atau syarat pengganti jika alasan Anda cukup kuat.',
  },
  {
    question: 'Apakah ada asuransi atau bantuan darurat?',
    answer:
      'Kami menyediakan bantuan darurat selama jam operasional kami (05:00 - 21:30). Jika mobil mengalami kendala, tim kami akan segera membantu. Keamanan dan kenyamanan Anda adalah prioritas kami.',
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
    question: 'Apakah sistem sewanya tanpa supir?',
    answer:
      'Ya, kami hanya melayani sistem lepas kunci (tanpa supir). Anda mengemudi sendiri dan bebas mengatur perjalanan sesuai keinginan.',
  },
  {
    question: 'Fasilitas apa saja yang saya dapatkan?',
    answer:
      'Setiap penyewaan sudah termasuk mobil dalam kondisi terawat, bersih, dan ber-AC. Bahan bakar diserahkan sesuai kesepakatan dan pajak kendaraan selalu lengkap.',
  },
  {
    question: 'Apakah bisa sewa untuk jangka waktu panjang?',
    answer:
      'Tentu bisa! Kami memiliki paket sewa mingguan dan bulanan dengan harga yang jauh lebih hemat. Silakan lihat halaman harga kami atau hubungi admin untuk mendapatkan penawaran terbaik.',
  },
];