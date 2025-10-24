// data.js

// Data dummy untuk login (6 pengguna berbeda)
const users = [
  {
    nama: "Admin Tamam",
    email: "admin@ut.ac.id",
    password: "1901",
    role: "Administrator",
    lokasi: "Universitas Terbuka Jakarta",
    gambarProfil: "https://github.com/tams1901/trackingbahanajar/blob/main/img/esber.jpg"
  },
  {
    nama: "Devira Cantik",
    email: "devira@putri.com",
    password: "3105",
    role: "Istri masa depan",
    lokasi: "Masih Disini",
    gambarProfil: "https://github.com/tams1901/trackingbahanajar/blob/main/img/lala.jpg"
  },
  {
    nama: "Rina Wulandari",
    email: "rina@ut.ac.id",
    password: "rina123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Jakarta",
    gambarProfil: "https://via.placeholde.com/100x100?text=Pengajar"
  },
  {
    nama: "Agus Pranoto",
    email: "agus@ut.ac.id",
    password: "agus123",
    role: "UPBJJ-UT",
    lokasi: "UPBJJ Makassar",
    gambarProfil: "https://via.placeholder.com/100x100?text=Pengajar"
  },
  {
    nama: "Siti Marlina",
    email: "siti@ut.ac.id",
    password: "siti123",
    role: "Puslaba",
    lokasi: "Pusat",
    gambarProfil: "https://via.placeholder.com/100x00?text=Pengajar"
  },
  {
    nama: "Doni Setiawan",
    email: "doni@ut.ac.id",
    password: "doni123",
    role: "Fakultas",
    lokasi: "FISIP",
    gambarProfil: "https://via.placeholder.com/100x100?text=Pengaar"
  },
  {
    nama: "Admin SITTA",
    email: "admin@ut.ac.id",
    password: "admin123",
    role: "Administrator",
    lokasi: "Pusat",
    gambarProfil: "https://via.placeholder.com/100x100?tex=Pengajar"
  }
];

// Data dummy untuk bahan ajar (tetap sama)
const dataBahanAjar = [
  {
    kodeLokasi: "0SBY02",
    kodeBarang: "EKMA4310",
    namaBarang: "Kepemimpinan",
    jenisBarang: "BMP",
    edisi: "1",
    stok: 278,
    gambarCover: "./img/kepemimpinan.jpg"
  },
  {
    kodeLokasi: "0TMP01",
    kodeBarang: "ASIP4301",
    namaBarang: "Pengantar Ilmu Komunikasi",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 548,
    gambarCover: "./img/pengantar_komunikasi.jpg"
  },
  {
    kodeLokasi: "0JKT01",
    kodeBarang: "EKMA4216",
    namaBarang: "Manajemen Keuangan",
    jenisBarang: "BMP",
    edisi: "3",
    stok: 392,
    gambarCover: "./img/manajemen_keuangan.jpg"
  },
  {
    kodeLokasi: "0MLG01",
    kodeBarang: "BIOL4211",
    namaBarang: "Mikrobiologi Dasar",
    jenisBarang: "BMP",
    edisi: "2",
    stok: 165,
    gambarCover: "./img/mikrobiologi.jpg"
  },
  {
    kodeLokasi: "0UPBJJBDG",
    kodeBarang: "PAUD4401",
    namaBarang: "Perkembangan Anak Usia Dini",
    jenisBarang: "BMP",
    edisi: "4",
    stok: 204,
    gambarCover: "./img/PAUD450302.jpg"
  },
  {
    kodeLokasi: "Devira",
    kodeBarang: "Putri",
    namaBarang: "Wanita Tercantik",
    jenisBarang: "Foto",
    edisi: "1",
    stok: 1,
    gambarCover: "./img/dev.jpg"
  }
];

// Data dummy untuk tracking pengiriman (tetap sama)
const trackingData = {
  "2023001234": {
    nomorDO: "2023001234",
    nama: "Rina Wulandari",
    status: "Dalam Perjalanan",
    progress: 45,
   ekspedisi: "JNE",
    tanggalKirim: "2025-08-25",
    paket: "0JKT01",
    total: "Rp 180.000",
    perjalanan: [
      { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka" },
      { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: TANGERANG SELATAN" },
      { waktu: "2025-08-25 10:12:20", keterangan: "Diteruskan ke Kantor Jakarta Selatan" }
    ]
  },
  "2023005678": {
    nomorDO: "2023005678",
    nama: "Agus Pranoto",
    status: "Dikirim",
    progress: 100,
    ekspedisi: "Pos Indonesia",
    tanggalKirim: "2025-08-25",
    paket: "0UPBJJBDG",
    total: "Rp 220.000",
    perjalanan: [
      { waktu: "2025-08-25 10:12:20", keterangan: "Penerimaan di Loket: TANGERANG SELATAN. Pengirim: Universitas Terbuka" },
      { waktu: "2025-08-25 14:07:56", keterangan: "Tiba di Hub: TANGERANG SELATAN" },
      { waktu: "2025-08-25 16:30:10", keterangan: "Diteruskan ke Kantor Kota Bandung" },
      { waktu: "2025-08-26 12:15:33", keterangan: "Tiba di Hub: Kota BANDUNG" },
      { waktu: "2025-08-26 15:06:12", keterangan: "Proses antar ke Cimahi" },
      { waktu: "2025-08-26 20:00:00", keterangan: "Selesai Antar. Penerima: Agus Pranoto" }
    ]
  },
  "DO003": {
    nomorDO: "DO003",
    nama: "Budi Santoso",
    status: "Dalam Pengiriman",
    progress: 50,
    ekspedisi: "POS Indonesia",
    tanggalKirim: "2023-10-05",
    paket: "Atlas Geografi - 2 buku",
    total: "Rp 120.000",
    perjalanan: [
      { waktu: "2023-10-05 08:00", keterangan: "Paket diterima di gudang pengirim" },
      { waktu: "2023-10-05 12:00", keterangan: "Paket diproses untuk pengiriman" },
      { waktu: "2023-10-06 14:00", keterangan: "Paket tiba di hub transit" }
    ]
  },
  "DO004": {
    nomorDO: "DO004",
    nama: "Rina Sari",
    status: "Pending",
    progress: 10,
    ekspedisi: "JNE",
    tanggalKirim: "2023-10-10",
    paket: "Buku Bahasa Inggris - 4 buku",
    total: "Rp 200.000",
    perjalanan: [
      { waktu: "2023-10-10 09:00", keterangan: "Paket diterima di gudang pengirim" },
      { waktu: "2023-10-10 11:00", keterangan: "Paket sedang dipersiapkan" }
    ]
  },
  "DO005": {
    nomorDO: "DO005",
    nama: "Dedi Kurniawan",
    status: "Selesai",
    progress: 100,
    ekspedisi: "TIKI",
    tanggalKirim: "2023-09-30",
    paket: "Modul Kimia - 2 modul",
    total: "Rp 75.000",
    perjalanan: [
      { waktu: "2023-09-30 08:00", keterangan: "Paket diterima di gudang pengirim" },
      { waktu: "2023-09-30 10:00", keterangan: "Paket diproses untuk pengiriman" },
      { waktu: "2023-10-01 13:00", keterangan: "Paket tiba di hub transit" },
      { waktu: "2023-10-02 15:00", keterangan: "Paket dikirim ke alamat tujuan" },
      { waktu: "2023-10-03 11:00", keterangan: "Paket diterima oleh penerima" }
    ]
  },
   "7474": {
    nomorDO: "7474",
    nama: "Devira Putri",
    status: "Istri masa depan",
    progress: 100,
    ekspedisi: "Tanpa Ekspedisi",
    tanggalKirim: "2025-10-24",
    paket: "Cinta",
    total: "Tak Terbatas",
    perjalanan: [
      { waktu: "Selamanya", keterangan: "Suka sama Lala" }
    ]
  }
};


