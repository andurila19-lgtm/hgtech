'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Copy, 
  ExternalLink,
  Camera,
  ChevronRight
} from 'lucide-react';
import { 
  HG_TECH_ADDRESS, 
  HG_TECH_DISPLAY_PHONE, 
  HG_TECH_EMAIL, 
  getGeneralSalesUrl, 
  getPhotoInquiryUrl, 
  getWhatsAppUrl 
} from '@/lib/whatsapp';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    subject: 'Konsultasi Produk Teknik',
    message: ''
  });

  const handleCopyAddress = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(HG_TECH_ADDRESS);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-industrial-500">
        <Link href="/" className="hover:text-industrial-900 transition-colors">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-industrial-900 font-semibold">Kontak &amp; Lokasi Surabaya</span>
      </nav>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-100 text-brand-800 text-xs font-bold rounded mb-1.5">
          <Building2 className="w-3.5 h-3.5 text-brand-600" />
          <span>Kantor &amp; Gudang Surabaya</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Hubungi Tim HG TECH
        </h1>
        <p className="text-xs sm:text-sm text-industrial-600 mt-1 max-w-2xl leading-relaxed">
          Kami siap membantu kebutuhan informasi produk, cek stok fisik di gudang Surabaya, hingga penerbitan surat penawaran harga resmi (Quotation) untuk perusahaan Anda.
        </p>
      </div>

      {/* Department WhatsApp Routing Cards */}
      <div>
        <h3 className="text-sm font-bold uppercase tracking-wider text-industrial-500 mb-4">
          Pilih Tim Sesuai Kebutuhan Anda:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Dept 1: B2B Sales */}
          <div className="bg-white border border-industrial-200 rounded-md p-5 space-y-3 shadow-2xs hover:border-brand-500 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                Divisi B2B &amp; Proyek
              </span>
              <h4 className="font-bold text-base text-industrial-900 mt-2">
                Sales Korporasi &amp; PO Pabrik
              </h4>
              <p className="text-xs text-industrial-600 mt-1 leading-relaxed">
                Untuk permintaan penawaran resmi, negosiasi volume partai besar, surat jalan, dan penerbitan faktur pajak e-Faktur.
              </p>
            </div>
            <a
              href={getGeneralSalesUrl('Penawaran Resmi B2B & Purchase Order (PO)')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2 px-3 bg-industrial-900 hover:bg-industrial-800 text-white rounded text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
              <span>Hubungi Sales B2B</span>
            </a>
          </div>

          {/* Dept 2: Technical & Photo Identification */}
          <div className="bg-white border border-industrial-200 rounded-md p-5 space-y-3 shadow-2xs hover:border-brand-500 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Technical Support
              </span>
              <h4 className="font-bold text-base text-industrial-900 mt-2">
                Konsultasi &amp; Kirim Foto Barang
              </h4>
              <p className="text-xs text-industrial-600 mt-1 leading-relaxed">
                Bantu identifikasi part aus, pencocokan ukuran drat ulir baut, diameter bearing, dan rekomendasi tipe power tools.
              </p>
            </div>
            <a
              href={getPhotoInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Kirim Foto Produk</span>
            </a>
          </div>

          {/* Dept 3: Warehouse & Pickup */}
          <div className="bg-white border border-industrial-200 rounded-md p-5 space-y-3 shadow-2xs hover:border-brand-500 transition-colors flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Gudang &amp; Logistik
              </span>
              <h4 className="font-bold text-base text-industrial-900 mt-2">
                Konfirmasi Pengambilan &amp; Kargo
              </h4>
              <p className="text-xs text-industrial-600 mt-1 leading-relaxed">
                Informasi pengambilan barang langsung di gudang Surabaya atau konfirmasi resi pengiriman ekspedisi ke luar pulau.
              </p>
            </div>
            <a
              href={getGeneralSalesUrl('Konfirmasi Pengambilan Barang / Resi Ekspedisi')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full py-2 px-3 bg-industrial-100 hover:bg-industrial-200 text-industrial-900 rounded text-xs font-bold transition-colors inline-flex items-center justify-center gap-2"
            >
              <Clock className="w-3.5 h-3.5 text-industrial-600" />
              <span>Cek Status Gudang</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Grid: Location / Operational Info + Online Message Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Physical Info (5 cols) */}
        <div className="lg:col-span-5 bg-white border border-industrial-200 rounded-md p-6 space-y-6 shadow-xs">
          
          <div className="border-b border-industrial-200 pb-3">
            <h3 className="font-extrabold text-base text-industrial-900">
              Alamat Kantor &amp; Gudang Fisik
            </h3>
            <p className="text-xs text-industrial-500 mt-0.5">
              Lokasi operasional di Surabaya Barat / Utara
            </p>
          </div>

          <div className="space-y-4 text-xs">
            
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-industrial-900 text-sm">HG TECH Surabaya</p>
                <p className="text-industrial-600 mt-1 leading-relaxed">
                  {HG_TECH_ADDRESS}
                </p>
                <button
                  onClick={handleCopyAddress}
                  className="mt-2 text-xs font-semibold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                >
                  <Copy className="w-3 h-3" />
                  <span>{copied ? 'Alamat Tersalin!' : 'Salin Alamat Lengkap'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-industrial-100">
              <Clock className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-industrial-900">Jam Operasional Pelayanan:</p>
                <div className="mt-1 text-industrial-600 space-y-0.5">
                  <p>• Senin – Jumat: 08:30 – 17:00 WIB</p>
                  <p>• Sabtu: 08:30 – 14:00 WIB</p>
                  <p className="text-[11px] text-industrial-400">• Minggu & Hari Libur: Tutup (Pesan WA tetap dicatat)</p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-industrial-100">
              <Phone className="w-4 h-4 text-brand-600 shrink-0" />
              <div>
                <span className="text-industrial-500">Telepon / WhatsApp:</span>
                <p className="font-mono font-bold text-industrial-900 text-sm">{HG_TECH_DISPLAY_PHONE}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-industrial-100">
              <Mail className="w-4 h-4 text-brand-600 shrink-0" />
              <div>
                <span className="text-industrial-500">Email Resmi:</span>
                <p className="font-semibold text-industrial-900 text-sm">{HG_TECH_EMAIL}</p>
              </div>
            </div>

          </div>

          {/* Mockup Map Box */}
          <div className="h-44 bg-industrial-100 rounded border border-industrial-200 overflow-hidden relative flex flex-col items-center justify-center p-4 text-center">
            <MapPin className="w-8 h-8 text-brand-600 mb-1" />
            <p className="font-bold text-xs text-industrial-900">Area Kawasan Industri Surabaya</p>
            <p className="text-[11px] text-industrial-500 mt-0.5">Akses mudah untuk armada truk &amp; pickup pickup bengkel</p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(HG_TECH_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-[11px] font-bold text-brand-600 hover:underline inline-flex items-center gap-1"
            >
              <span>Buka di Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

        </div>

        {/* Right Column: Message Form (7 cols) */}
        <div className="lg:col-span-7 bg-white border border-industrial-200 rounded-md p-6 sm:p-8 space-y-6 shadow-xs">
          
          <div className="border-b border-industrial-200 pb-3">
            <h3 className="font-extrabold text-base text-industrial-900">
              Kirim Pesan atau Pertanyaan Tertulis
            </h3>
            <p className="text-xs text-industrial-500 mt-0.5">
              Isi formulir di bawah ini dan tim kami akan merespon pada jam kerja berikutnya.
            </p>
          </div>

          {formSent ? (
            <div className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-md space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-base text-emerald-900">Pesan Anda Telah Diterima!</h4>
              <p className="text-xs text-emerald-700 max-w-sm mx-auto leading-relaxed">
                Terima kasih telah menghubungi HG TECH. Tim kami akan segera menindaklanjuti pesan Anda.
              </p>
              <button
                onClick={() => setFormSent(false)}
                className="mt-2 px-4 py-1.5 bg-emerald-600 text-white rounded text-xs font-bold hover:bg-emerald-700"
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-industrial-800 mb-1.5">
                    Nama Lengkap Anda <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Nama Anda"
                    className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded text-industrial-900 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-industrial-800 mb-1.5">
                    Perusahaan / Bengkel (Opsional)
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Nama institusi / perorangan"
                    className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded text-industrial-900 focus:outline-none focus:border-brand-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-industrial-800 mb-1.5">
                    Nomor WhatsApp / Telp <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="0812xxxxxxxx"
                    className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded text-industrial-900 focus:outline-none focus:border-brand-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-industrial-800 mb-1.5">
                    Topik Pertanyaan
                  </label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded text-industrial-900 focus:outline-none focus:border-brand-500"
                  >
                    <option value="Konsultasi Produk Teknik">Konsultasi Produk Teknik</option>
                    <option value="Cek Stok Gudang Surabaya">Cek Stok Gudang Surabaya</option>
                    <option value="Penawaran Harga Perusahaan">Penawaran Harga Perusahaan (RFQ)</option>
                    <option value="Kemitraan Toko Retail">Kemitraan Toko Retail</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-bold text-industrial-800 mb-1.5">
                  Tuliskan Kebutuhan atau Pertanyaan Anda <span className="text-red-500">*</span>
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Sebutkan detail barang, estimasi jumlah yang dicari, atau pertanyaan lain..."
                  className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded text-industrial-900 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 bg-brand-600 hover:bg-brand-500 active:scale-95 text-white rounded font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan Sekarang</span>
                </button>

                <span className="text-industrial-400 text-xs hidden sm:inline">atau</span>

                <a
                  href={getWhatsAppUrl(`Halo Tim Sales HG TECH, nama saya ${formData.name || 'Pelanggan'}. Saya ingin menanyakan mengenai ${formData.subject}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold transition-all inline-flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 fill-white" />
                  <span>Langsung Chat WhatsApp</span>
                </a>
              </div>

            </form>
          )}

        </div>

      </div>

    </div>
  );
}
