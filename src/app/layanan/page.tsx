import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  FileCheck2, 
  Camera, 
  Truck, 
  Wrench, 
  Clock, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight,
  MessageSquare,
  FileSpreadsheet
} from 'lucide-react';
import { 
  getGeneralSalesUrl, 
  getPhotoInquiryUrl, 
  HG_TECH_DISPLAY_PHONE 
} from '@/lib/whatsapp';

export const metadata = {
  title: 'Layanan Pengadaan B2B & Suplai Industri — HG TECH Surabaya',
  description: 'Layanan pengadaan alat teknik profesional untuk perusahaan: Purchase Order (PO), faktur pajak PPN, konsultasi teknis matching foto part lama, dan logistik ekspedisi Surabaya.',
};

export default function ServicesPage() {
  return (
    <div className="space-y-14 pb-16">
      
      {/* Header Banner */}
      <section className="bg-industrial-950 text-white border-b border-industrial-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-900 border border-industrial-700 text-brand-400 text-xs font-semibold rounded">
              <Building2 className="w-3.5 h-3.5" />
              <span>Solusi Korporasi &amp; Industri</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Layanan Pengadaan B2B &amp; Suplai Alat Teknik
            </h1>
            <p className="text-sm sm:text-base text-industrial-300 leading-relaxed">
              Kami menyederhanakan proses pengadaan peralatan teknik bagi divisi Purchasing perusahaan, kontraktor proyek, dan bengkel mekanik dengan administrasi resmi dan respon cepat.
            </p>
          </div>
        </div>
      </section>

      {/* 4 Core Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white border border-industrial-200 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded bg-industrial-900 text-brand-400 flex items-center justify-center">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-industrial-900">
              Pengadaan Rutin dengan Purchase Order (PO) Perusahaan
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              Memfasilitasi sistem procurement korporasi dengan penerbitan Surat Penawaran Harga resmi (Quotation), verifikasi Purchase Order (PO), pengiriman bertahap sesuai jadwal produksi pabrik, serta kelengkapan e-Faktur Pajak resmi PPN 11%.
            </p>
            <ul className="text-xs text-industrial-600 space-y-1.5 pt-2 border-t border-industrial-100">
              <li>• Penawaran harga transparan &amp; diskon kuantiti bertingkat</li>
              <li>• Surat jalan pengiriman bertanda tangan resmi</li>
              <li>• Faktur komersial dan rekonsiliasi pembayaran terjadwal</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white border border-industrial-200 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded bg-industrial-900 text-brand-400 flex items-center justify-center">
              <Camera className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-industrial-900">
              Konsultasi Spesifikasi &amp; Identifikasi Foto Sampel
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              Teknisi Anda tidak perlu repot mencari kode buku manual yang hilang. Cukup kirimkan foto part lama atau bawa sampel fisik yang aus ke workshop kami di Surabaya. Tim kami akan mengukur dimensi dan mencocokkan suku cadang pengganti yang tepat.
            </p>
            <ul className="text-xs text-industrial-600 space-y-1.5 pt-2 border-t border-industrial-100">
              <li>• Verifikasi ukuran ulir baut, diameter as bearing, pitch belt</li>
              <li>• Rekomendasi material alternatif bila tipe awal discontinued</li>
              <li>• Respon konsultasi cepat via WhatsApp teknikal</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white border border-industrial-200 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded bg-industrial-900 text-brand-400 flex items-center justify-center">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-industrial-900">
              Distribusi Cepat Surabaya &amp; Kargo Antar Pulau
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              Menangani pengiriman dalam kota Surabaya, Sidoarjo, dan Gresik secara langsung. Untuk customer luar kota dan luar pulau (Kalimantan, Sulawesi, Nusa Tenggara, Papua), kami bermitra dengan ekspedisi kargo darat dan kapal laut terpercaya.
            </p>
            <ul className="text-xs text-industrial-600 space-y-1.5 pt-2 border-t border-industrial-100">
              <li>• Opsi pengiriman darurat (urgent delivery) area industri Surabaya</li>
              <li>• Packing palet kayu aman untuk perlengkapan berat</li>
              <li>• Pelacakan nomor resi ekspedisi kargo secara transparan</li>
            </ul>
          </div>

          {/* Service 4 */}
          <div className="bg-white border border-industrial-200 rounded-md p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="w-12 h-12 rounded bg-industrial-900 text-brand-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-industrial-900">
              Jaminan Keaslian &amp; After-Sales Support
            </h3>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              Seluruh produk yang kami distribusikan memiliki jaminan spesifikasi material asli sesuai deskripsi teknis. Untuk mesin perkakas listrik (power tools), kami menyediakan dukungan service dan ketersediaan suku cadang consumable seperti carbon brush dan armature.
            </p>
            <ul className="text-xs text-industrial-600 space-y-1.5 pt-2 border-t border-industrial-100">
              <li>• Garansi resmi service mesin power tools</li>
              <li>• Ketersediaan part fast moving (mata gerinda, bearing, v-belt)</li>
              <li>• Pendampingan petunjuk pemakaian keselamatan kerja (K3)</li>
            </ul>
          </div>

        </div>
      </section>

      {/* CTA Box for RFQ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-industrial-950 via-industrial-900 to-industrial-950 border border-industrial-800 rounded-lg p-8 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs font-bold text-brand-500 uppercase tracking-widest">
              Mulai Kerjasama Pengadaan
            </span>
            <h3 className="text-2xl font-bold">Kirimkan Daftar Kebutuhan Perusahaan Anda Hari Ini</h3>
            <p className="text-xs sm:text-sm text-industrial-300 leading-relaxed">
              Dapatkan surat penawaran harga resmi (Quotation) lengkap dengan rincian ketersediaan stok di gudang Surabaya.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/permintaan-penawaran"
              className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded transition-all shadow-md"
            >
              Form Permintaan Penawaran (RFQ)
            </Link>
            <a
              href={getPhotoInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-industrial-800 hover:bg-industrial-700 text-white font-bold text-xs sm:text-sm rounded border border-industrial-700 transition-all inline-flex items-center gap-2"
            >
              <Camera className="w-4 h-4 text-brand-400" />
              <span>Kirim Foto via WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
