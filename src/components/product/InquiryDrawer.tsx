'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Trash2, Plus, Minus, ArrowRight, MessageSquare, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import { getQuickCartWhatsAppUrl } from '@/lib/whatsapp';

export default function InquiryDrawer() {
  const {
    items,
    isDrawerOpen,
    closeDrawer,
    removeItem,
    updateQuantity,
    totalItems,
    totalEstimatedPrice,
    clearInquiry
  } = useInquiry();

  if (!isDrawerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={closeDrawer}
        aria-hidden="true"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-industrial-200 shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-4 sm:p-5 bg-industrial-950 text-white flex items-center justify-between border-b border-industrial-800">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-industrial-900 border border-industrial-800 rounded-lg text-brand-400">
                <ShoppingCart className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base leading-tight">Daftar Kebutuhan Barang</h3>
                <p className="text-xs text-industrial-400 mt-0.5">
                  {totalItems > 0 ? `${totalItems} barang dipilih untuk dicek stok/harga` : 'Daftar kebutuhan masih kosong'}
                </p>
              </div>
            </div>
            <button
              onClick={closeDrawer}
              className="p-1.5 text-industrial-400 hover:text-white rounded-lg transition-colors"
              aria-label="Tutup panel"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Microcopy Helper */}
          <div className="bg-industrial-100/80 px-4 py-2 text-[11px] text-industrial-600 border-b border-industrial-200">
            💡 Kumpulkan alat yang Anda cari, lalu minta surat penawaran resmi atau kirim langsung ke WhatsApp Sales.
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-3">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-6 text-industrial-500">
                <div className="w-16 h-16 rounded-full bg-industrial-100 flex items-center justify-center mb-4 text-industrial-400">
                  <ShoppingCart className="w-8 h-8" />
                </div>
                <h4 className="font-bold text-industrial-800 text-base mb-1">Daftar Barang Masih Kosong</h4>
                <p className="text-xs text-industrial-500 max-w-xs leading-relaxed mb-6">
                  Pilih produk dari katalog kami dan klik "+ Masuk Daftar" untuk menghitung estimasi atau meminta penawaran harga.
                </p>
                <Link
                  href="/produk"
                  onClick={closeDrawer}
                  className="px-5 py-2.5 bg-brand-600 hover:bg-brand-500 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-sm"
                >
                  Buka Katalog Produk
                </Link>
              </div>
            ) : (
              items.map((item) => {
                const p = item.product;
                return (
                  <div 
                    key={p.id}
                    className="p-3 bg-industrial-50/80 border border-industrial-200 rounded-xl relative flex gap-3 text-xs"
                  >
                    {/* Thumbnail */}
                    <div className="w-16 h-16 bg-white border border-industrial-200 rounded-lg overflow-hidden relative shrink-0">
                      <Image
                        src={p.images[0]}
                        alt={p.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-1">
                        <span className="text-[10px] font-mono font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-200">
                          {p.sku}
                        </span>
                        <button
                          onClick={() => removeItem(p.id)}
                          className="text-industrial-400 hover:text-red-600 p-0.5"
                          title="Hapus dari daftar"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <h5 className="font-semibold text-industrial-900 text-xs mt-1 line-clamp-2 leading-snug">
                        {p.name}
                      </h5>

                      <div className="mt-1 text-[11px] text-industrial-600 flex items-center justify-between">
                        <span className="font-mono font-semibold">
                          {p.price 
                            ? `Rp ${(p.price * item.quantity).toLocaleString('id-ID')}` 
                            : 'Perlu Penawaran Khusus'}
                        </span>
                        <span className="text-industrial-400">({p.unit})</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="mt-2 flex items-center gap-2">
                        <div className="flex items-center border border-industrial-300 rounded bg-white">
                          <button
                            onClick={() => updateQuantity(p.id, item.quantity - 1)}
                            className="p-1 text-industrial-600 hover:bg-industrial-100"
                            aria-label="Kurangi jumlah"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-2 font-mono font-bold text-xs text-industrial-800">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(p.id, item.quantity + 1)}
                            className="p-1 text-industrial-600 hover:bg-industrial-100"
                            aria-label="Tambah jumlah"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer Actions */}
          {items.length > 0 && (
            <div className="p-4 sm:p-5 bg-white border-t border-industrial-200 space-y-3">
              {totalEstimatedPrice > 0 && (
                <div className="flex items-baseline justify-between text-sm pb-2 border-b border-industrial-100">
                  <span className="text-industrial-600 text-xs">Estimasi Nilai Barang:</span>
                  <span className="font-mono font-bold text-base text-industrial-900">
                    Rp {totalEstimatedPrice.toLocaleString('id-ID')}
                  </span>
                </div>
              )}

              <p className="text-[11px] text-industrial-500 leading-tight">
                * Harga final, diskon pembelian grosir/pabrik, dan biaya kirim Surabaya dikonfirmasi via penawaran resmi.
              </p>

              {/* Action 1: Lanjut ke RFQ resmi */}
              <Link
                href="/permintaan-penawaran"
                onClick={closeDrawer}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-industrial-900 hover:bg-industrial-800 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-sm"
              >
                <span>Minta Surat Penawaran Resmi (RFQ)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Action 2: Kirim langsung ke WhatsApp */}
              <a
                href={getQuickCartWhatsAppUrl(items)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold tracking-wide transition-all shadow-xs"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span>Kirim Daftar Ini ke WhatsApp Sales</span>
              </a>

              <div className="flex justify-between items-center pt-1 text-[11px] text-industrial-400">
                <Link 
                  href="/inquiry" 
                  onClick={closeDrawer}
                  className="hover:text-brand-600 font-semibold underline"
                >
                  Buka Rincian Daftar Lengkap
                </Link>
                <button
                  onClick={clearInquiry}
                  className="hover:text-red-500 transition-colors"
                >
                  Kosongkan Semua
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
