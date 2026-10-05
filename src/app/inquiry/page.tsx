'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  MessageSquare, 
  Building2, 
  ShieldCheck, 
  RotateCcw,
  CheckCircle2,
  ChevronRight,
  FileCheck2
} from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import { getQuickCartWhatsAppUrl, HG_TECH_DISPLAY_PHONE } from '@/lib/whatsapp';

export default function InquiryCartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    updateNotes, 
    clearInquiry, 
    totalItems, 
    totalEstimatedPrice 
  } = useInquiry();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-industrial-500">
        <Link href="/" className="hover:text-industrial-900 transition-colors">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/produk" className="hover:text-industrial-900 transition-colors">Katalog Produk</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-industrial-900 font-semibold">Daftar Kebutuhan Barang</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-4 border-b border-industrial-200">
        <div>
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-100 text-brand-800 text-xs font-bold rounded-full mb-1.5">
            <ShoppingCart className="w-3.5 h-3.5 text-brand-600" />
            <span>Daftar Kebutuhan &amp; Permintaan Harga</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
            Daftar Barang yang Anda Butuhkan
          </h1>
          <p className="text-xs sm:text-sm text-industrial-600 mt-1 max-w-2xl leading-relaxed">
            Kumpulkan kebutuhan peralatan teknik Anda di sini. Anda dapat langsung meneruskan daftar ini ke WhatsApp Sales atau mengajukan Formulir Penawaran Resmi (RFQ).
          </p>
        </div>

        {items.length > 0 && (
          <button
            onClick={clearInquiry}
            className="text-xs font-semibold text-industrial-500 hover:text-red-600 flex items-center gap-1 self-start sm:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Kosongkan Semua</span>
          </button>
        )}
      </div>

      {items.length === 0 ? (
        /* Empty State */
        <div className="bg-white border border-industrial-200 rounded-xl p-12 text-center space-y-4">
          <div className="w-16 h-16 rounded-full bg-industrial-100 text-industrial-400 flex items-center justify-center mx-auto">
            <ShoppingCart className="w-8 h-8" />
          </div>
          <div className="max-w-md mx-auto">
            <h3 className="text-lg font-bold text-industrial-900">Daftar Kebutuhan Masih Kosong</h3>
            <p className="text-xs sm:text-sm text-industrial-600 mt-1 leading-relaxed">
              Anda belum menambahkan produk ke dalam daftar. Buka katalog produk kami dan klik tombol "+ Masuk Daftar" pada produk yang Anda butuhkan.
            </p>
          </div>
          <div className="pt-2">
            <Link
              href="/produk"
              className="px-6 py-3 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold text-xs sm:text-sm transition-all inline-flex items-center gap-2 shadow-xs"
            >
              <span>Buka Katalog Produk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      ) : (
        /* Items Table & Checkout Controls */
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Items List (8 cols) */}
          <div className="lg:col-span-8 space-y-4">
            {items.map((item) => {
              const p = item.product;
              return (
                <div
                  key={p.id}
                  className="bg-white border border-industrial-200 rounded-xl p-4 sm:p-5 shadow-xs space-y-3"
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    
                    {/* Thumbnail */}
                    <Link
                      href={`/produk/${p.slug}`}
                      className="w-20 h-20 relative bg-industrial-50 rounded-lg border border-industrial-200 overflow-hidden shrink-0 block"
                    >
                      <Image src={p.images[0]} alt={p.name} fill className="object-cover" sizes="80px" />
                    </Link>

                    {/* Information */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                            {p.sku}
                          </span>
                          <span className="text-[11px] font-semibold text-industrial-500 uppercase">
                            {p.category}
                          </span>
                        </div>

                        <button
                          onClick={() => removeItem(p.id)}
                          className="text-industrial-400 hover:text-red-600 text-xs flex items-center gap-1"
                          title="Hapus barang"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline">Hapus</span>
                        </button>
                      </div>

                      <Link href={`/produk/${p.slug}`}>
                        <h4 className="font-bold text-sm sm:text-base text-industrial-900 hover:text-brand-600 transition-colors mt-1.5 leading-snug">
                          {p.name}
                        </h4>
                      </Link>

                      <div className="mt-2 flex flex-wrap items-center justify-between gap-4 text-xs">
                        <div>
                          <span className="text-industrial-500">Estimasi Satuan: </span>
                          <span className="font-mono font-bold text-industrial-800">
                            {p.price ? `Rp ${p.price.toLocaleString('id-ID')} /${p.unit}` : 'Perlu Penawaran Khusus'}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center gap-2">
                          <span className="text-industrial-500 text-xs">Jumlah:</span>
                          <div className="flex items-center border border-industrial-300 rounded-lg bg-white">
                            <button
                              onClick={() => updateQuantity(p.id, item.quantity - 1)}
                              className="p-1.5 text-industrial-600 hover:bg-industrial-100"
                              aria-label="Kurangi"
                            >
                              <Minus className="w-3.5 h-3.5" />
                            </button>
                            <input
                              type="number"
                              min={1}
                              value={item.quantity}
                              onChange={(e) => updateQuantity(p.id, parseInt(e.target.value) || 1)}
                              className="w-12 text-center font-mono font-bold text-xs text-industrial-900 focus:outline-none"
                            />
                            <button
                              onClick={() => updateQuantity(p.id, item.quantity + 1)}
                              className="p-1.5 text-industrial-600 hover:bg-industrial-100"
                              aria-label="Tambah"
                            >
                              <Plus className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <span className="text-industrial-500 text-xs">{p.unit}</span>
                        </div>

                      </div>

                    </div>

                  </div>

                  {/* Specific notes for this item */}
                  <div className="pt-2 border-t border-industrial-100 flex items-center gap-2">
                    <span className="text-[11px] font-semibold text-industrial-500 shrink-0">Catatan Khusus:</span>
                    <input
                      type="text"
                      value={item.notes || ''}
                      onChange={(e) => updateNotes(p.id, e.target.value)}
                      placeholder="Contoh: butuh pengiriman besok, opsi tipe 220V, dll..."
                      className="flex-1 py-1 px-2.5 bg-industrial-50 border border-industrial-200 rounded-lg text-xs text-industrial-800 placeholder:text-industrial-400 focus:outline-none focus:border-brand-500"
                    />
                  </div>

                </div>
              );
            })}
          </div>

          {/* Right Summary & Checkout Box (4 cols) */}
          <div className="lg:col-span-4 bg-white border border-industrial-200 rounded-xl p-6 space-y-6 shadow-xs sticky top-28">
            
            <div className="border-b border-industrial-200 pb-3">
              <h3 className="font-extrabold text-base text-industrial-900">
                Ringkasan Permintaan
              </h3>
              <p className="text-xs text-industrial-500 mt-0.5">
                Total {totalItems} jenis barang dalam daftar
              </p>
            </div>

            {/* Estimated Total Calculation */}
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-industrial-600">
                <span>Subtotal Barang (Tertera):</span>
                <span className="font-mono font-semibold text-industrial-900">
                  Rp {totalEstimatedPrice.toLocaleString('id-ID')}
                </span>
              </div>
              <div className="flex justify-between text-industrial-500 text-[11px]">
                <span>Biaya Kirim (Surabaya / Kargo):</span>
                <span>Dihitung di Surat Penawaran</span>
              </div>
              <div className="flex justify-between text-industrial-500 text-[11px]">
                <span>Pajak PPN 11% (Jika diperlukan):</span>
                <span>Disesuaikan di Invoice Resmi</span>
              </div>
              
              <div className="pt-3 border-t border-industrial-200 flex justify-between items-baseline">
                <span className="font-bold text-sm text-industrial-900">Estimasi Total:</span>
                <div className="text-right">
                  <span className="font-mono text-lg font-black text-industrial-900">
                    Rp {totalEstimatedPrice.toLocaleString('id-ID')}
                  </span>
                  <span className="block text-[10px] text-industrial-400">*Belum termasuk diskon grosir pabrik</span>
                </div>
              </div>
            </div>

            {/* Action 1: Lanjut ke RFQ resmi */}
            <div className="space-y-3 pt-2">
              <Link
                href="/permintaan-penawaran"
                className="w-full py-3.5 px-4 bg-brand-600 hover:bg-brand-500 text-white rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Ajukan Surat Penawaran Resmi (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Action 2: Direct WhatsApp */}
              <a
                href={getQuickCartWhatsAppUrl(items)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Kirim Daftar ke WhatsApp Sales</span>
              </a>
            </div>

            <div className="p-3.5 bg-industrial-50 border border-industrial-200 rounded-lg text-xs text-industrial-600 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold text-industrial-800">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                <span>Keuntungan Pembelian di HG TECH:</span>
              </div>
              <p className="text-[11px]">• Respon penawaran cepat dari tim sales di Surabaya.</p>
              <p className="text-[11px]">• Diskon kuantiti untuk pembelian volume bengkel / industri.</p>
              <p className="text-[11px]">• Bantuan verifikasi spesifikasi sebelum PO diterbitkan.</p>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
