# HG TECH — Website & B2B Industrial Catalog Platform

Prototype website production-quality untuk **HG TECH**, supplier alat teknik dan industrial equipment di Surabaya, Jawa Timur.

Platform ini menggabungkan:
1. **Company Profile**: Membangun reputasi dan kredibilitas profesional supplier B2B.
2. **Product Catalog**: Memudahkan pencarian teknis mandiri (nama, SKU, spesifikasi DIN/ISO/ANSI).
3. **Inquiry List & RFQ Flow**: Alur penawaran resmi B2B (dengan opsi faktur pajak & dokumen PO).
4. **WhatsApp Sales Integration**: Pre-filled template pesan otomatis untuk produk spesifik, konsultasi foto part lama, hingga penawaran PO perusahaan.
5. **Shopee Channel Integration**: Jalur belanja eceran sekunder tanpa mengorbankan kepemilikan platform mandiri HG TECH.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Custom Industrial Slate & Safety Amber Palette)
- **Icons**: Lucide React
- **State Management**: React Context (`InquiryContext`) dengan persistensi `localStorage`
- **SEO & AEO Ready**: Metadata semantik, semantic HTML5, breadcrumb hierarchy, OpenGraph

---

## 🧭 Struktur Halaman & Fitur Utama

- **`/` (Beranda)**:
  - Announcement bar (Ready Stock Surabaya, Faktur Pajak Resmi, hotline WhatsApp)
  - Hero section industrial dengan search bar menonjol & trust indicators faktual
  - Grid klasifikasi kategori produk
  - Tab produk unggulan & populer (Power tools, Hand tools, Alat ukur, Workshop, Industrial)
  - Nilai keunggulan HG TECH (Kualitas teknis teruji, dukungan B2B, pencocokan foto part lama, logistik Surabaya)
  - Alur pemesanan 5 langkah
  - Section khusus pencocokan part via foto WhatsApp ("Belum tahu nama barang?")
  - Preview profil perusahaan & link resmi Shopee

- **`/produk` (Katalog Produk)**:
  - Live keyword search (nama barang, istilah lokal seperti "gerinda", "bearing", "sketmat", "baut", dsb.)
  - Filter kategori & subkategori bertingkat
  - Filter status stok (Ready Stock Surabaya, Stok Terbatas, Pre-Order)
  - Filter kisaran harga & penawaran khusus
  - Pengurutan (Rekomendasi, Harga terendah/tertinggi, Nama A-Z)
  - Toggle tampilan Grid (4 kolom desktop) dan List
  - Empty state ramah dengan tombol bantuan WhatsApp

- **`/produk/[slug]` (Detail Produk)**:
  - Galeri multi-foto dengan zoom thumbnail
  - SKU & badge status stok gudang Surabaya
  - Tabel spesifikasi teknis lengkap (Daya, Dimensi, Bahan, Standar DIN/ISO/ANSI)
  - Penyesuaian kuantiti (+ / -)
  - Tombol aksi "+ Tambah ke Inquiry", "Minta Penawaran Resmi (RFQ)", dan "Chat WhatsApp mengenai produk ini" (dengan pesan otomatis berkonteks SKU)
  - Tab spesifikasi, deskripsi aplikasi kerja, serta syarat logistik & faktur pajak B2B
  - Rekomendasi produk terkait

- **`/inquiry` (Inquiry List & Keranjang)**:
  - Pengelolaan daftar kebutuhan alat teknik
  - Kontrol jumlah per barang dan catatan teknis khusus (misal: panjang kabel, opsi merk)
  - Estimasi nilai barang
  - Tombol langsung ekspor ke pesan WhatsApp Sales atau lanjut ke form penawaran resmi

- **`/permintaan-penawaran` (Request Quotation / RFQ)**:
  - Formulir resmi purchasing perusahaan (Nama PIC, Perusahaan, WhatsApp, Email, Kota kirim, Opsi Faktur Pajak PPN)
  - Rincian produk otomatis dari inquiry list
  - Konfirmasi pengajuan dengan nomor registrasi unik (`RFQ-SBY-...`)
  - Tombol penerusan instan ke WhatsApp Sales HG TECH

- **`/tentang-kami`**:
  - Profil perusahaan, komitmen spesifikasi teknis, segmen customer (pabrik, bengkel, kontraktor, retail), dan alamat gudang Surabaya.

- **`/layanan`**:
  - Layanan pengadaan rutin PO B2B, matching foto part lama, logistik Surabaya & kargo luar pulau, garansi & after-sales.

- **`/kontak`**:
  - Routing WhatsApp per divisi (Sales B2B, Technical Support / Foto Barang, Gudang & Logistik)
  - Alamat operasional Surabaya dengan tombol salin alamat & tautan Google Maps
  - Form pengiriman pesan online

---

## 🚀 Cara Menjalankan Project

1. Install dependensi:
   ```bash
   npm install
   ```

2. Jalankan server lokal:
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser.

3. Build production:
   ```bash
   npm run build
   ```
