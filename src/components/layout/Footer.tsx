import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  ShieldCheck, 
  Truck, 
  FileCheck2,
  MessageSquare
} from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { 
  HG_TECH_ADDRESS, 
  HG_TECH_DISPLAY_PHONE, 
  HG_TECH_EMAIL, 
  HG_TECH_SHOPEE_URL, 
  getGeneralSalesUrl, 
  getPhotoInquiryUrl 
} from '@/lib/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-industrial-950 text-industrial-300 border-t border-industrial-800">
      
      {/* Industrial Trust Pillars */}
      <div className="border-b border-industrial-800/80 bg-industrial-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-industrial-800 border border-industrial-700 rounded text-brand-400 shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Ready Stock Surabaya</h4>
                <p className="text-xs text-industrial-400 mt-1">Stok fisik langsung tersedia di gudang Surabaya untuk pengambilan mandiri atau kirim langsung.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-industrial-800 border border-industrial-700 rounded text-brand-400 shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Dokumen B2B & Faktur Pajak</h4>
                <p className="text-xs text-industrial-400 mt-1">Mendukung Purchasing perusahaan dengan Purchase Order (PO), Surat Jalan, dan e-Faktur resmi.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-industrial-800 border border-industrial-700 rounded text-brand-400 shrink-0">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Distribusi & Ekspedisi</h4>
                <p className="text-xs text-industrial-400 mt-1">Pengiriman area Surabaya & sekitarnya, serta jaringan ekspedisi logistik ke seluruh Indonesia.</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 bg-industrial-800 border border-industrial-700 rounded text-brand-400 shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-white text-sm">Spesifikasi Terstandarisasi</h4>
                <p className="text-xs text-industrial-400 mt-1">Produk berstandar teknis DIN, ISO, ANSI, & SNI untuk kepastian keselamatan operasional pabrik.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Company Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-brand-600 flex items-center justify-center rounded-sm font-black text-white text-lg border border-brand-400/30">
                HG
              </div>
              <div>
                <span className="font-black text-xl text-white tracking-tight">HG TECH</span>
                <p className="text-xs text-brand-400 font-semibold uppercase tracking-wider">Industrial & Technical Supplies</p>
              </div>
            </div>
            
            <p className="text-sm text-industrial-300 leading-relaxed pr-4">
              HG TECH adalah supplier peralatan teknik, perkakas mekanik, alat ukur presisi, dan industrial equipment yang berpusat di Surabaya. Kami melayani pengadaan retail bengkel mandiri hingga kontrak suplai rutin pabrik industri manufaktur dan kontraktor.
            </p>

            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href={getGeneralSalesUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-industrial-900 hover:bg-industrial-800 text-xs font-semibold text-white border border-industrial-700 rounded transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 text-brand-400" />
                <span>Konsultasi WhatsApp</span>
              </a>
              <a
                href={HG_TECH_SHOPEE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 bg-industrial-900 hover:bg-industrial-800 text-xs font-semibold text-industrial-200 border border-industrial-700 rounded transition-colors"
              >
                <span>Toko Resmi Shopee</span>
                <ExternalLink className="w-3 h-3 text-industrial-400" />
              </a>
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-industrial-800 pb-2">
              Kategori Produk
            </h4>
            <ul className="space-y-2.5 text-sm">
              {CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link 
                    href={`/produk?kategori=${cat.slug}`}
                    className="text-industrial-400 hover:text-brand-400 transition-colors flex items-center justify-between text-xs"
                  >
                    <span>{cat.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Navigation & Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-industrial-800 pb-2">
              Layanan & B2B
            </h4>
            <ul className="space-y-2.5 text-xs text-industrial-400">
              <li>
                <Link href="/permintaan-penawaran" className="hover:text-brand-400 transition-colors">
                  Permintaan Penawaran (RFQ)
                </Link>
              </li>
              <li>
                <Link href="/layanan" className="hover:text-brand-400 transition-colors">
                  Supply Rutin & Kontrak Pabrik
                </Link>
              </li>
              <li>
                <a href={getPhotoInquiryUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-brand-400 transition-colors">
                  Cari Produk via Foto / Sampel
                </a>
              </li>
              <li>
                <Link href="/inquiry" className="hover:text-brand-400 transition-colors">
                  Daftar Kebutuhan (Inquiry List)
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-brand-400 transition-colors">
                  Profil Perusahaan HG TECH
                </Link>
              </li>
              <li>
                <Link href="/kontak" className="hover:text-brand-400 transition-colors">
                  Lokasi Gudang & Hotline
                </Link>
              </li>
            </ul>
          </div>

          {/* Surabaya Contact Details */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-industrial-800 pb-2">
              Hubungi HG TECH
            </h4>
            <div className="space-y-3 text-xs text-industrial-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {HG_TECH_ADDRESS}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={getGeneralSalesUrl()} className="hover:text-white transition-colors">
                  {HG_TECH_DISPLAY_PHONE} (WhatsApp)
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-500 shrink-0" />
                <a href={`mailto:${HG_TECH_EMAIL}`} className="hover:text-white transition-colors">
                  {HG_TECH_EMAIL}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-white">Jam Operasional:</p>
                  <p>Senin – Jumat: 08:30 – 17:00 WIB</p>
                  <p>Sabtu: 08:30 – 14:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="mt-12 pt-8 border-t border-industrial-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-industrial-500 gap-4">
          <p>© {new Date().getFullYear()} HG TECH Surabaya. Hak Cipta Dilindungi Undang-Undang.</p>
          <div className="flex items-center gap-6">
            <span>Supplier Alat Teknik & Industrial Equipment Surabaya</span>
            <span>•</span>
            <Link href="/tentang-kami" className="hover:text-industrial-300">Tentang Kami</Link>
            <span>•</span>
            <Link href="/kontak" className="hover:text-industrial-300">Kontak</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
