'use client';

import React, { useState } from 'react';
import { MessageSquare, Camera, FileSpreadsheet, X, ChevronUp, Phone } from 'lucide-react';
import { getGeneralSalesUrl, getPhotoInquiryUrl, HG_TECH_DISPLAY_PHONE } from '@/lib/whatsapp';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="floating-whatsapp" className="fixed bottom-5 right-5 z-40 flex flex-col items-end no-print">
      
      {/* Quick Menu Popover */}
      {isOpen && (
        <div className="mb-3 w-80 bg-white border border-industrial-200 rounded-md shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-2 duration-200 text-industrial-900">
          
          {/* Header */}
          <div className="bg-industrial-900 text-white p-3.5 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center font-bold text-sm">
                HG
              </div>
              <div>
                <p className="font-bold text-sm leading-none">Tim Sales HG TECH</p>
                <p className="text-[11px] text-industrial-300 mt-1 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                  Online • Siap Membantu di Surabaya
                </p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-industrial-400 hover:text-white p-1 rounded"
              aria-label="Tutup chat menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body Options */}
          <div className="p-3 bg-industrial-50/50 space-y-2 text-xs">
            <p className="text-[11px] text-industrial-500 font-medium px-1">
              Pilih jenis bantuan yang Anda butuhkan:
            </p>

            {/* Option 1: Kirim Foto Produk / Belum Yakin Nama Barang */}
            <a
              href={getPhotoInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 bg-white border border-industrial-200 rounded hover:border-brand-500 hover:bg-brand-50/30 transition-all group"
            >
              <div className="p-1.5 bg-brand-100 text-brand-700 rounded group-hover:bg-brand-600 group-hover:text-white transition-colors shrink-0">
                <Camera className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-industrial-900 text-xs">Punya Foto Barang?</p>
                <p className="text-[11px] text-industrial-600 mt-0.5 leading-tight">
                  Kirim foto atau contoh barang lama Anda, tim kami akan carikan produk yang cocok.
                </p>
              </div>
            </a>

            {/* Option 2: Request Penawaran B2B / PO Perusahaan */}
            <a
              href={getGeneralSalesUrl('Permintaan Penawaran Harga B2B / PO Perusahaan')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 bg-white border border-industrial-200 rounded hover:border-brand-500 hover:bg-brand-50/30 transition-all group"
            >
              <div className="p-1.5 bg-industrial-100 text-industrial-800 rounded group-hover:bg-industrial-900 group-hover:text-white transition-colors shrink-0">
                <FileSpreadsheet className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-industrial-900 text-xs">Penawaran Resmi B2B</p>
                <p className="text-[11px] text-industrial-600 mt-0.5 leading-tight">
                  Kirim daftar PO / spesifikasi teknik untuk penawaran harga perusahaan + PPN.
                </p>
              </div>
            </a>

            {/* Option 3: Konsultasi Teknis & Stok */}
            <a
              href={getGeneralSalesUrl('Ketersediaan Stok & Konsultasi Spesifikasi Alat Teknik')}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 p-2.5 bg-white border border-industrial-200 rounded hover:border-brand-500 hover:bg-brand-50/30 transition-all group"
            >
              <div className="p-1.5 bg-emerald-100 text-emerald-700 rounded group-hover:bg-emerald-600 group-hover:text-white transition-colors shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-industrial-900 text-xs">Cek Stok Gudang Surabaya</p>
                <p className="text-[11px] text-industrial-600 mt-0.5 leading-tight">
                  Tanyakan langsung ketersediaan unit untuk pickup atau pengiriman hari ini.
                </p>
              </div>
            </a>
          </div>

          <div className="px-3 py-2 bg-industrial-100 border-t border-industrial-200 text-[10px] text-industrial-500 text-center">
            Hotline WhatsApp: <span className="font-semibold text-industrial-700">{HG_TECH_DISPLAY_PHONE}</span>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white font-bold text-xs rounded-full shadow-xl transition-all border-2 border-white"
        aria-label="Buka Chat WhatsApp Sales HG TECH"
      >
        <MessageSquare className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline">Tanya Sales / Kirim Foto</span>
        <span className="sm:hidden">WhatsApp</span>
        {isOpen ? <ChevronUp className="w-3.5 h-3.5" /> : null}
      </button>

    </div>
  );
}
