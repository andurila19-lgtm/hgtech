'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Plus, 
  Minus, 
  Trash2, 
  AlertCircle,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  Printer,
  ShoppingCart
} from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import { getQuotationWhatsAppUrl, HG_TECH_DISPLAY_PHONE } from '@/lib/whatsapp';
import { QuotationRequest } from '@/types';

export default function RequestQuotationPage() {
  const { items, updateQuantity, removeItem, clearInquiry, totalItems, totalEstimatedPrice } = useInquiry();

  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    whatsapp: '',
    email: '',
    city: 'Surabaya',
    address: '',
    needsTaxInvoice: false,
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [quotationId, setQuotationId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.whatsapp.trim()) {
      setErrorMsg('Mohon lengkapi Nama PIC dan Nomor WhatsApp Anda.');
      return;
    }

    if (items.length === 0 && !formData.notes.trim()) {
      setErrorMsg('Pilih minimal satu produk dari katalog atau jelaskan kebutuhan barang Anda di kolom catatan.');
      return;
    }

    setErrorMsg('');
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const dateStr = new Date().toISOString().slice(2, 7).replace('-', '');
    const newId = `RFQ-SBY-${dateStr}-${randomCode}`;
    setQuotationId(newId);
    setIsSubmitted(true);
  };

  const quotationData: Partial<QuotationRequest> = {
    fullName: formData.fullName,
    companyName: formData.companyName,
    whatsapp: formData.whatsapp,
    email: formData.email,
    city: formData.city,
    needsTaxInvoice: formData.needsTaxInvoice,
    notes: formData.notes,
    items: items,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-industrial-500">
        <Link href="/" className="hover:text-industrial-900 transition-colors">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/inquiry" className="hover:text-industrial-900 transition-colors">Daftar Barang</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-industrial-900 font-semibold">Formulir Permintaan Penawaran (RFQ)</span>
      </nav>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-industrial-950 text-brand-400 text-xs font-bold rounded-full mb-2 border border-industrial-800">
          <Building2 className="w-3.5 h-3.5" />
          <span>Pengadaan B2B Perusahaan &amp; Bengkel</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Permintaan Penawaran Harga Resmi (Request for Quotation)
        </h1>
        <p className="text-xs sm:text-sm text-industrial-600 mt-1 max-w-2xl leading-relaxed">
          Ajukan daftar kebutuhan alat teknik Anda untuk mendapatkan surat penawaran resmi (Quotation Letter) dengan harga diskon kuantiti grosir dan estimasi waktu pengiriman ke lokasi Anda.
        </p>
      </div>

      {isSubmitted ? (
        /* Confirmation State */
        <div className="bg-white border-2 border-emerald-500 rounded-xl p-6 sm:p-10 shadow-lg text-center space-y-6 animate-in fade-in-50 duration-300">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="max-w-xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-md">
              NOMOR REGISTRASI: {quotationId}
            </span>
            <h2 className="text-2xl font-extrabold text-industrial-900 pt-2">
              Permintaan Penawaran Berhasil Terkirim!
            </h2>
            <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
              Terima kasih, <strong>{formData.fullName}</strong> {formData.companyName ? `(${formData.companyName})` : ''}. Tim Sales HG TECH Surabaya akan segera menyusun Surat Penawaran Harga resmi untuk Anda.
            </p>
          </div>

          {/* Quick WA forwarding */}
          <div className="bg-industrial-50 border border-industrial-200 rounded-xl p-6 max-w-lg mx-auto text-left space-y-3">
            <h4 className="font-bold text-sm text-industrial-900 flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-emerald-600" />
              Kirim Salinan ke WhatsApp Sales untuk Respon Cepat
            </h4>
            <p className="text-xs text-industrial-600 leading-relaxed">
              Agar penawaran dapat diproses dalam hitungan jam kerja, klik tombol di bawah untuk langsung meneruskan rincian RFQ ini ke WhatsApp Sales HG TECH.
            </p>
            <a
              href={getQuotationWhatsAppUrl(quotationData)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Teruskan Data Penawaran ke WhatsApp Sales</span>
            </a>
          </div>

          <div className="pt-4 flex flex-wrap justify-center items-center gap-4 text-xs">
            <button
              onClick={() => window.print()}
              className="px-4 py-2 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded-lg font-bold transition-colors inline-flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak Ringkasan RFQ</span>
            </button>
            <Link
              href="/produk"
              className="px-4 py-2 bg-industrial-900 hover:bg-industrial-800 text-white rounded-lg font-bold transition-colors"
            >
              Kembali ke Katalog Produk
            </Link>
          </div>
        </div>
      ) : (
        /* RFQ Form Grid */
        <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Form Fields (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-industrial-200 rounded-xl p-6 sm:p-8 space-y-6 shadow-xs">
            
            <div className="border-b border-industrial-200 pb-3">
              <h3 className="font-extrabold text-base text-industrial-900">
                1. Data Pemohon &amp; Perusahaan
              </h3>
              <p className="text-xs text-industrial-500 mt-0.5">
                Pastikan nomor WhatsApp dapat dihubungi untuk konfirmasi penawaran.
              </p>
            </div>

            {errorMsg && (
              <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              
              <div>
                <label className="block font-bold text-industrial-800 mb-1.5">
                  Nama PIC Pemohon <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Contoh: Bpk. Hendra Gunawan"
                  required
                  className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-industrial-900 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-industrial-800 mb-1.5">
                  Nama Perusahaan / Workshop (Opsional)
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder="Contoh: PT. Maju Fabrikasi Logam"
                  className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-industrial-900 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-industrial-800 mb-1.5">
                  Nomor WhatsApp Aktif <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  placeholder="Contoh: 081234567890"
                  required
                  className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-industrial-900 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-industrial-800 mb-1.5">
                  Email Perusahaan (Opsional)
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="purchasing@perusahaan.com"
                  className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-industrial-900 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div>
                <label className="block font-bold text-industrial-800 mb-1.5">
                  Kota Lokasi Pengiriman
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Surabaya, Sidoarjo, Gresik, luar kota..."
                  className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-industrial-900 focus:outline-none focus:border-brand-500"
                />
              </div>

              <div className="flex items-center pt-6">
                <label className="flex items-center gap-2 cursor-pointer font-medium text-industrial-800">
                  <input
                    type="checkbox"
                    name="needsTaxInvoice"
                    checked={formData.needsTaxInvoice}
                    onChange={handleInputChange}
                    className="w-4 h-4 accent-brand-600 rounded"
                  />
                  <span>Memerlukan Faktur Pajak Resmi (PPN 11%)</span>
                </label>
              </div>

            </div>

            <div>
              <label className="block font-bold text-industrial-800 mb-1.5 text-xs">
                Alamat Lengkap Pengiriman (Opsional):
              </label>
              <textarea
                name="address"
                rows={2}
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Alamat gudang / workshop penerima barang..."
                className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs text-industrial-900 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div>
              <label className="block font-bold text-industrial-800 mb-1.5 text-xs">
                Catatan Teknis / Permintaan Khusus:
              </label>
              <textarea
                name="notes"
                rows={3}
                value={formData.notes}
                onChange={handleInputChange}
                placeholder="Tuliskan jika ada spesifikasi khusus (misal: alternatif merk, jadwal pengiriman bertahap, syarat uji sertifikat material, dll)..."
                className="w-full p-2.5 bg-industrial-50 border border-industrial-300 rounded-lg text-xs text-industrial-900 focus:outline-none focus:border-brand-500"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 bg-brand-600 hover:bg-brand-500 active:scale-95 text-white rounded-lg font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Kirim Permintaan Penawaran (RFQ)</span>
              </button>
            </div>

          </div>

          {/* Right Column: Items Summary (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-industrial-200 rounded-xl p-6 space-y-5 shadow-xs sticky top-28">
            
            <div className="flex items-center justify-between pb-3 border-b border-industrial-200">
              <h3 className="font-bold text-sm text-industrial-900">
                2. Daftar Barang Penawaran ({totalItems} item)
              </h3>
              <Link 
                href="/produk" 
                className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-0.5"
              >
                <Plus className="w-3 h-3" />
                <span>Tambah Produk</span>
              </Link>
            </div>

            {/* Selected Items */}
            {items.length === 0 ? (
              <div className="p-6 bg-industrial-50 border border-dashed border-industrial-300 rounded-xl text-center text-xs space-y-2">
                <ShoppingCart className="w-8 h-8 text-industrial-400 mx-auto" />
                <p className="font-bold text-industrial-800">Belum ada produk dalam daftar barang</p>
                <p className="text-industrial-500 text-[11px] leading-relaxed">
                  Anda tetap dapat mengirim form ini dengan mengisi detail barang di kolom Catatan Teknis, atau pilih barang dari katalog.
                </p>
                <Link
                  href="/produk"
                  className="inline-block mt-2 px-3 py-1.5 bg-brand-600 text-white rounded-lg font-bold text-[11px]"
                >
                  Pilih dari Katalog
                </Link>
              </div>
            ) : (
              <div className="space-y-3 max-h-96 overflow-y-auto pr-1">
                {items.map((item) => {
                  const p = item.product;
                  return (
                    <div
                      key={p.id}
                      className="p-3 bg-industrial-50 border border-industrial-200 rounded-lg text-xs flex gap-3 items-center"
                    >
                      <div className="w-12 h-12 relative bg-white rounded-lg border border-industrial-200 overflow-hidden shrink-0">
                        <Image src={p.images[0]} alt={p.name} fill className="object-cover" sizes="48px" />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="font-mono text-[10px] font-bold text-brand-600">{p.sku}</div>
                        <div className="font-semibold text-industrial-900 truncate">{p.name}</div>
                        <div className="text-[11px] text-industrial-500">
                          {p.price ? `Est. Rp ${(p.price * item.quantity).toLocaleString('id-ID')}` : 'Perlu Penawaran Khusus'}
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <div className="flex items-center border border-industrial-300 rounded-lg bg-white">
                          <button
                            type="button"
                            onClick={() => updateQuantity(p.id, item.quantity - 1)}
                            className="p-1 text-industrial-600 hover:bg-industrial-100"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-mono font-bold text-xs">{item.quantity}</span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(p.id, item.quantity + 1)}
                            className="p-1 text-industrial-600 hover:bg-industrial-100"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(p.id)}
                          className="p-1 text-industrial-400 hover:text-red-600"
                          title="Hapus"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Total Estimation */}
            {totalEstimatedPrice > 0 && (
              <div className="pt-3 border-t border-industrial-200 flex justify-between items-baseline text-xs">
                <span className="text-industrial-600">Estimasi Nilai Barang:</span>
                <span className="font-mono font-bold text-sm text-industrial-900">
                  Rp {totalEstimatedPrice.toLocaleString('id-ID')}
                </span>
              </div>
            )}

            <div className="p-3 bg-industrial-100 rounded-lg text-[11px] text-industrial-600 space-y-1">
              <p className="font-semibold text-industrial-800">Catatan Proses Penawaran:</p>
              <p>• Surat penawaran resmi mencantumkan harga final, diskon partai, dan PPN.</p>
              <p>• Penawaran berlaku 14 hari kerja sejak diterbitkan.</p>
            </div>

          </div>

        </form>
      )}

    </div>
  );
}
