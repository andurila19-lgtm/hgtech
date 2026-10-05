import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  MapPin, 
  ShieldCheck, 
  FileCheck2, 
  Truck, 
  Wrench, 
  Users, 
  Clock, 
  ArrowRight,
  MessageSquare
} from 'lucide-react';
import { 
  HG_TECH_ADDRESS, 
  HG_TECH_DISPLAY_PHONE, 
  HG_TECH_EMAIL, 
  getGeneralSalesUrl, 
  getPhotoInquiryUrl 
} from '@/lib/whatsapp';

export const metadata = {
  title: 'Tentang HG TECH — Supplier Alat Teknik & Kebutuhan Industri Surabaya',
  description: 'Profil HG TECH, supplier resmi peralatan teknik, perkakas industri, alat ukur, dan perlengkapan bengkel di Surabaya. Siap melayani kebutuhan retail dan perusahaan B2B.',
};

export default function AboutPage() {
  return (
    <div className="space-y-16 pb-16">
      
      {/* Header Banner */}
      <section className="bg-industrial-950 text-white border-b border-industrial-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-900 border border-industrial-700 text-brand-400 text-xs font-semibold rounded">
              <Building2 className="w-3.5 h-3.5" />
              <span>Profil Perusahaan &amp; Distribusi</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              HG TECH — Supplier Alat Teknik &amp; Kebutuhan Industri Surabaya
            </h1>
            <p className="text-sm sm:text-base text-industrial-300 leading-relaxed">
              Menghadirkan rantai pasok perkakas industri, perlengkapan mekanik presisi, dan kebutuhan operasional pabrik yang siap mendukung produktivitas sektor manufaktur dan perbengkelan.
            </p>
          </div>
        </div>
      </section>

      {/* Main Story & Positioning */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-industrial-700 leading-relaxed">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block">
              Siapa HG TECH
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Menghubungkan Industri dengan Alat Teknik yang Tepat &amp; Terstandarisasi
            </h2>
            <p>
              <strong>HG TECH</strong> beroperasi di Surabaya sebagai supplier peralatan teknik, mesin perkakas tangan, instrumen pengukuran metrologi, mata gerinda potong, serta perlengkapan workshop mekanikal.
            </p>
            <p>
              Kami mengamati bahwa tantangan utama para teknisi, kepala bengkel, dan divisi purchasing adalah menemukan barang dengan spesifikasi yang benar-benar pas dengan kondisi di lapangan. Seringkali informasi teknis yang ada di pasar kurang detail, atau barang yang diterima tidak sesuai standar material yang dibutuhkan.
            </p>
            <p>
              Di HG TECH, kami tidak sekadar menjual barang; kami membantu customer memverifikasi ukuran baut, jenis ulir, daya motor, dan tingkat kekerasan material agar alat yang dibeli langsung siap pakai tanpa kendala teknis saat produksi.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/produk"
                className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-xs"
              >
                <span>Jelajahi Produk Kami</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href={getGeneralSalesUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-industrial-900 hover:bg-industrial-800 text-white rounded font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>Hubungi Tim Sales</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative h-80 sm:h-96 rounded-lg overflow-hidden border border-industrial-200 shadow-xl bg-industrial-900">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                alt="Workshop & Pengujian Alat Teknik HG TECH Surabaya"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-transparent to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 p-4 bg-industrial-950/80 backdrop-blur-xs rounded border border-industrial-800 text-xs text-white">
                <p className="font-bold text-sm">Gudang &amp; Distribusi Surabaya</p>
                <p className="text-industrial-400 mt-1">{HG_TECH_ADDRESS}</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Target Pelanggan & Solusi yang Diberikan */}
      <section className="bg-industrial-100 border-y border-industrial-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Segmen Pengguna
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Siapa yang Mengandalkan Pasokan HG TECH?
            </h2>
            <p className="text-xs sm:text-sm text-industrial-600 mt-2">
              Solusi pengadaan kami dirancang fleksibel dari pembelian eceran hingga kontrak suplai rutin.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-md border border-industrial-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-industrial-900 text-brand-400 flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-bold text-base text-industrial-900">
                Pabrik &amp; Industri Manufaktur
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Kebutuhan suku cadang maintenance, mata bor baja tahan aus, bearing dinamo, dan perlengkapan APD keselamatan kerja dengan sistem pembayaran PO perusahaan dan faktur pajak PPN.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-industrial-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-industrial-900 text-brand-400 flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-bold text-base text-industrial-900">
                Bengkel, Workshop &amp; Fabrikasi
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Kunci pas kombinasi tempa Cr-V, ragum meja heavy-duty, gerinda potong, dongkrak hidrolik, dan perkakas bubut yang tahan terhadap hentakan serta torsi beban berat harian.
              </p>
            </div>

            <div className="bg-white p-6 rounded-md border border-industrial-200 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded bg-industrial-900 text-brand-400 flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-bold text-base text-industrial-900">
                Kontraktor, Teknisi &amp; Retail
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Bor cordless bertenaga baterai, jangka sorong digital QC, dan perkakas portabel untuk kebutuhan instalasi proyek di lapangan maupun perawatan fasilitas gedung komersial.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Nilai Utama HG TECH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="p-6 bg-white border border-industrial-200 rounded-md">
            <Wrench className="w-6 h-6 text-brand-600 mb-3" />
            <h4 className="font-bold text-sm text-industrial-900 mb-1">Produk Teknik Teruji</h4>
            <p className="text-xs text-industrial-600 leading-relaxed">
              Memilih alat berdasarkan ketahanan material nyata di lapangan, bukan sekadar merk murah yang cepat rusak.
            </p>
          </div>

          <div className="p-6 bg-white border border-industrial-200 rounded-md">
            <Users className="w-6 h-6 text-brand-600 mb-3" />
            <h4 className="font-bold text-sm text-industrial-900 mb-1">Dukungan Sales Responsif</h4>
            <p className="text-xs text-industrial-600 leading-relaxed">
              Komunikasi langsung dengan tim yang memahami spesifikasi barang, siap membantu via WhatsApp atau telepon.
            </p>
          </div>

          <div className="p-6 bg-white border border-industrial-200 rounded-md">
            <FileCheck2 className="w-6 h-6 text-brand-600 mb-3" />
            <h4 className="font-bold text-sm text-industrial-900 mb-1">Administrasi Lengkap</h4>
            <p className="text-xs text-industrial-600 leading-relaxed">
              Surat penawaran harga resmi, faktur komersial, surat jalan, dan e-Faktur Pajak resmi bagi pembeli B2B.
            </p>
          </div>

          <div className="p-6 bg-white border border-industrial-200 rounded-md">
            <Truck className="w-6 h-6 text-brand-600 mb-3" />
            <h4 className="font-bold text-sm text-industrial-900 mb-1">Distribusi Surabaya &amp; Kargo</h4>
            <p className="text-xs text-industrial-600 leading-relaxed">
              Dekat dengan akses pelabuhan Tanjung Perak dan terminal kargo untuk pengiriman cepat ke luar pulau Jawa.
            </p>
          </div>

        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-industrial-900 text-white rounded-lg p-8 sm:p-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-xl">
            <h3 className="text-2xl font-bold">Ingin Mengajukan Pengadaan Rutin Perusahaan?</h3>
            <p className="text-xs sm:text-sm text-industrial-400 leading-relaxed">
              Hubungi tim marketing B2B kami untuk mendiskusikan daftar kebutuhan rutin bengkel atau pabrik Anda dengan skema penawaran berkala.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/permintaan-penawaran"
              className="px-5 py-3 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded transition-all shadow-sm"
            >
              Ajukan Penawaran (RFQ)
            </Link>
            <a
              href={getGeneralSalesUrl('Konsultasi Kebutuhan Rutin Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-industrial-800 hover:bg-industrial-700 text-white font-bold text-xs sm:text-sm rounded border border-industrial-700 transition-all inline-flex items-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Sales</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
