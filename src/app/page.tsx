'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Wrench, 
  ShieldCheck, 
  Truck, 
  FileCheck2, 
  ArrowRight, 
  Camera, 
  MessageSquare, 
  CheckCircle2, 
  ExternalLink,
  ChevronRight,
  Search,
  Building,
  Zap,
  Check,
  Plus,
  Sparkles,
  Layers,
  ArrowUpRight,
  ChevronDown
} from 'lucide-react';
import SearchBar from '@/components/common/SearchBar';
import ProductCard from '@/components/product/ProductCard';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';
import { useInquiry } from '@/context/InquiryContext';
import { 
  getPhotoInquiryUrl, 
  getGeneralSalesUrl, 
  getProductInquiryUrl,
  HG_TECH_SHOPEE_URL, 
  HG_TECH_ADDRESS,
  HG_TECH_DISPLAY_PHONE 
} from '@/lib/whatsapp';

export default function HomePage() {
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>('all');
  const { addItem, hasItem } = useInquiry();

  // Featured flagship product for the hero inspector
  const flagshipProduct = PRODUCTS[0]; // Industrial Angle Grinder PT-AG-100X
  const isFlagshipAdded = hasItem(flagshipProduct.id);

  const featuredProducts = PRODUCTS.filter((p) => {
    if (selectedCategoryTab === 'all') return p.featured;
    return p.categoryId === selectedCategoryTab;
  }).slice(0, 8);

  const categoryTabs = [
    { id: 'all', label: 'Semua Produk Unggulan' },
    { id: 'power-tools', label: 'Power Tools' },
    { id: 'hand-tools', label: 'Hand Tools' },
    { id: 'measuring-tools', label: 'Alat Ukur' },
    { id: 'workshop-equipment', label: 'Workshop' },
    { id: 'industrial-supplies', label: 'Industrial' },
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION (BOOTSTRAP / TAILWIND / CODEIGNITER STYLE)               */}
      {/* ========================================================================= */}
      <section className="relative bg-[#070b14] text-white overflow-hidden border-b border-industrial-800/80 min-h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-4">
        
        {/* Subtle Engineering Grid & Ambient Light Glow (Tailwind/Bootstrap style) */}
        <div 
          className="absolute inset-0 opacity-[0.12] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Dual Radial Ambient Glow */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-600/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute top-1/4 -right-40 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 my-auto relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Compact Pill Badge */}
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-industrial-900/90 border border-brand-500/30 text-[11px] font-semibold text-brand-300 shadow-xs backdrop-blur-md">
                <span className="text-white font-bold">HG TECH SURABAYA</span>
                <span className="text-industrial-600">•</span>
                <span className="text-industrial-300 font-medium">Distributor Alat Teknik &amp; Industri</span>
              </div>

              {/* Balanced, Responsive Headline */}
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
                Solusi Pengadaan Alat Teknik &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-amber-300 to-brand-500">
                  Kebutuhan Industri
                </span>{' '}
                Terlengkap di Surabaya.
              </h1>

              {/* Crisp, Scannable Subheadline */}
              <p className="text-xs sm:text-sm text-industrial-300 leading-relaxed max-w-xl font-normal">
                Menyediakan ribuan pilihan perkakas bengkel, power tools bertenaga tinggi, alat ukur presisi, mata potong, dan komponen transmisi pabrik. Melayani retail eceran hingga kontrak suplai B2B dengan Faktur Pajak resmi.
              </p>

              {/* Compact High-Contrast Search Bar */}
              <div>
                <div className="p-1 rounded-lg bg-industrial-900/80 border border-industrial-700/80 shadow-lg backdrop-blur-md">
                  <SearchBar placeholder="Ketik nama alat, kode SKU, atau kebutuhan Anda (contoh: gerinda, bearing, baut m12)..." />
                </div>
              </div>

              {/* Action Buttons Row: Compact & Responsive */}
              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <Link
                  href="/produk"
                  className="px-4 py-2 sm:py-2.5 bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-bold text-xs rounded-md transition-all shadow-md shadow-brand-950/50 flex items-center gap-1.5 border border-brand-400/40"
                >
                  <span>Jelajahi Katalog Produk</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <a
                  href={getPhotoInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 sm:py-2.5 bg-industrial-900 hover:bg-industrial-800 text-white font-bold text-xs rounded-md border border-industrial-700 hover:border-brand-500 transition-all flex items-center gap-1.5 shadow-xs"
                >
                  <Camera className="w-3.5 h-3.5 text-brand-400" />
                  <span>Kirim Foto Barang (WhatsApp)</span>
                </a>

                <Link
                  href="/permintaan-penawaran"
                  className="px-3.5 py-2 text-industrial-300 hover:text-white font-semibold text-xs rounded-md transition-colors flex items-center gap-1.5"
                >
                  <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Minta Surat Penawaran (RFQ)</span>
                </Link>
              </div>

              {/* Trust Indicators Bar: Compact */}
              <div className="pt-4 border-t border-industrial-800/80 grid grid-cols-3 gap-3 text-xs">
                <div className="flex items-start gap-2">
                  <div className="p-1 bg-industrial-900 rounded border border-industrial-800 text-brand-400 shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs font-mono">READY STOCK</div>
                    <div className="text-industrial-400 text-[10px] sm:text-[11px]">Gudang Surabaya</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="p-1 bg-industrial-900 rounded border border-industrial-800 text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs font-mono">FAKTUR PAJAK</div>
                    <div className="text-industrial-400 text-[10px] sm:text-[11px]">PPN 11% Resmi</div>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <div className="p-1 bg-industrial-900 rounded border border-industrial-800 text-blue-400 shrink-0 mt-0.5">
                    <Truck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-xs font-mono">EKSPEDISI CEPAT</div>
                    <div className="text-industrial-400 text-[10px] sm:text-[11px]">Jawa &amp; Luar Pulau</div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Compact Industrial Showcase Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Showcase Window Card */}
                <div className="bg-industrial-900/90 border border-industrial-700/80 rounded-lg overflow-hidden shadow-xl shadow-black/60 backdrop-blur-md">
                  
                  {/* Window Titlebar */}
                  <div className="px-3.5 py-2 bg-industrial-950 border-b border-industrial-800 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                      <span className="ml-2 font-mono text-[10px] text-industrial-400 font-semibold tracking-wider">
                        HG-TECH // SPOTLIGHT
                      </span>
                    </div>
                    <span className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                      READY STOCK SBY
                    </span>
                  </div>

                  {/* Spotlight Image Area: Compact height */}
                  <div className="relative h-44 sm:h-52 w-full bg-gradient-to-b from-industrial-900 to-industrial-950 flex items-center justify-center p-4 overflow-hidden">
                    <Image
                      src={flagshipProduct.images[0]}
                      alt={flagshipProduct.name}
                      fill
                      className="object-cover opacity-90 transition-transform duration-500 hover:scale-105"
                      priority
                      sizes="(max-width: 1024px) 100vw, 400px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/20 to-transparent"></div>

                    {/* Floating Spec HUD Badges: Compact */}
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                      <span className="font-mono text-[10px] font-bold bg-industrial-950/90 backdrop-blur-md text-white px-2 py-0.5 rounded border border-industrial-700 shadow-xs">
                        SKU: {flagshipProduct.sku}
                      </span>
                      <span className="text-[9px] font-semibold bg-brand-950/90 text-brand-300 px-2 py-0.5 rounded border border-brand-800">
                        850W Heavy Motor
                      </span>
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 z-10">
                      <p className="font-bold text-sm text-white leading-tight drop-shadow-md truncate">
                        {flagshipProduct.name}
                      </p>
                      <div className="mt-0.5 flex items-center justify-between text-xs">
                        <span className="font-mono font-extrabold text-brand-400 text-xs sm:text-sm">
                          Rp {flagshipProduct.price?.toLocaleString('id-ID')} /{flagshipProduct.unit}
                        </span>
                        <span className="text-[10px] text-industrial-300">
                          Standar DIN / ISO
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Control Panel Inside Showcase: Compact */}
                  <div className="p-3 bg-industrial-950/90 border-t border-industrial-800 space-y-2">
                    
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <button
                        onClick={() => addItem(flagshipProduct, 1)}
                        className={`w-full py-2 px-2.5 rounded-md font-bold transition-all flex items-center justify-center gap-1 text-xs shadow-xs ${
                          isFlagshipAdded 
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                            : 'bg-brand-600 hover:bg-brand-500 text-white'
                        }`}
                      >
                        {isFlagshipAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        <span>{isFlagshipAdded ? 'Sudah di Daftar' : '+ Masuk Daftar'}</span>
                      </button>

                      <a
                        href={getProductInquiryUrl(flagshipProduct)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 px-2.5 bg-industrial-900 hover:bg-industrial-800 text-white rounded-md font-bold transition-all flex items-center justify-center gap-1 text-xs border border-industrial-700"
                      >
                        <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Chat WhatsApp</span>
                      </a>
                    </div>

                    {/* Quick photo assistance banner */}
                    <div className="p-2 bg-industrial-900 rounded-md border border-industrial-800 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                        <span className="text-industrial-300 text-[10px] sm:text-[11px]">Punya contoh part lama?</span>
                      </div>
                      <a 
                        href={getPhotoInquiryUrl()}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-brand-400 hover:text-brand-300 font-bold text-[10px] sm:text-[11px] inline-flex items-center gap-1"
                      >
                        Kirim Foto <ArrowUpRight className="w-3 h-3" />
                      </a>
                    </div>

                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="pb-3 pt-1 text-center relative z-10 hidden sm:block">
          <a 
            href="#kategori-produk" 
            className="inline-flex items-center gap-1.5 text-[11px] text-industrial-400 hover:text-white transition-colors"
          >
            <span>Scroll untuk melihat kategori &amp; produk</span>
            <ChevronDown className="w-3.5 h-3.5 text-brand-400 animate-bounce" />
          </a>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. KATEGORI PRODUK                                                        */}
      {/* ========================================================================= */}
      <section id="kategori-produk" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-3 border-b border-industrial-200 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Klasifikasi Produk
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Kategori Alat Teknik &amp; Perlengkapan
            </h2>
          </div>
          <Link
            href="/kategori"
            className="text-xs font-bold text-industrial-700 hover:text-brand-600 inline-flex items-center gap-1 group"
          >
            <span>Lihat Semua Kategori</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={`/produk?kategori=${cat.slug}`}
              className="group bg-white border border-industrial-200 hover:border-brand-500 rounded-lg overflow-hidden transition-all duration-200 hover:shadow-card flex flex-col"
            >
              <div className="h-36 relative overflow-hidden bg-industrial-100">
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-950/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 right-3 flex justify-between items-center text-white">
                  <span className="text-[11px] font-mono font-semibold bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    {cat.itemCount}+ Produk
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-base text-industrial-900 group-hover:text-brand-600 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-industrial-600 line-clamp-2 mt-1 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-industrial-100 flex items-center justify-between text-xs font-semibold text-industrial-700 group-hover:text-brand-600">
                  <span>Jelajahi Produk</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. PRODUK UNGGULAN & POPULER                                              */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 pb-3 border-b border-industrial-200 gap-4">
          <div>
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Produk Siap Kirim
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Produk Unggulan &amp; Kebutuhan Populer
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-industrial-100 p-1 rounded-lg text-xs font-medium">
            {categoryTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategoryTab(tab.id)}
                className={`px-3 py-1.5 rounded-md transition-all ${
                  selectedCategoryTab === tab.id
                    ? 'bg-white text-industrial-900 font-bold shadow-xs'
                    : 'text-industrial-600 hover:text-industrial-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Catalog CTA banner */}
        <div className="mt-8 p-6 bg-industrial-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-base sm:text-lg">Ingin melihat spesifikasi seluruh lini produk HG TECH?</h4>
            <p className="text-xs sm:text-sm text-industrial-400 mt-1">
              Gunakan fitur filter kategori, subkategori, dan pencarian teknis langsung pada katalog lengkap.
            </p>
          </div>
          <Link
            href="/produk"
            className="px-6 py-2.5 bg-brand-600 hover:bg-brand-500 text-white font-bold text-xs sm:text-sm rounded-lg transition-all shrink-0 inline-flex items-center gap-2"
          >
            <span>Buka Katalog Lengkap</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. VALUE PROPOSITION: KENAPA HG TECH                                     */}
      {/* ========================================================================= */}
      <section className="bg-industrial-100 border-y border-industrial-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
              Komitmen Layanan
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              Kenapa Memilih HG TECH Sebagai Supplier Anda?
            </h2>
            <p className="text-xs sm:text-sm text-industrial-600 mt-2 leading-relaxed">
              Kami memposisikan diri sebagai mitra pengadaan alat teknik yang andal dengan fokus pada ketepatan spesifikasi, kelengkapan dokumen B2B, dan kecepatan respon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-industrial-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-industrial-900 text-brand-400 flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-2">
                Produk Teknik Terstandarisasi
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Peralatan dengan spesifikasi material yang jelas (Cr-V, HSS-Co, Grade 8.8, standar DIN &amp; ANSI). Meminimalisir risiko kegagalan kerja dan kerusakan dini saat operasional intensif.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-industrial-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-industrial-900 text-brand-400 flex items-center justify-center mb-4">
                <Building className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-2">
                Dukungan Pengadaan Industri (B2B)
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Memahami kebutuhan divisi Purchasing perusahaan. Melayani penerbitan Surat Penawaran Harga resmi (Quotation), Purchase Order (PO), Surat Jalan pengiriman, dan Faktur Pajak PPN.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-industrial-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-industrial-900 text-brand-400 flex items-center justify-center mb-4">
                <Camera className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-2">
                Konsultasi &amp; Matching Foto Barang
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Seringkali teknisi hanya memiliki sampel fisik atau barang lama yang aus. Tim sales teknikal kami membantu mengidentifikasi tipe, ukuran ulir, dan spesifikasi pengganti yang akurat.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-industrial-200 shadow-xs">
              <div className="w-12 h-12 rounded-lg bg-industrial-900 text-brand-400 flex items-center justify-center mb-4">
                <Truck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-industrial-900 mb-2">
                Gudang &amp; Logistik Surabaya
              </h3>
              <p className="text-xs text-industrial-600 leading-relaxed">
                Lokasi strategis di kawasan industri Surabaya memudahkan pengambilan unit mendadak (urgent pickup) serta koordinasi ekspedisi logistik darat/laut ke berbagai pelosok Indonesia.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ALUR PEMESANAN PRAKTIS                                                */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block mb-1">
            Proses Transaksi Sederhana
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
            Alur Pemesanan &amp; Permintaan Penawaran
          </h2>
          <p className="text-xs sm:text-sm text-industrial-600 mt-2">
            Dari pencarian mandiri hingga pengiriman barang ke workshop Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
          
          <div className="bg-white p-5 rounded-lg border border-industrial-200 flex flex-col justify-between">
            <div>
              <span className="w-7 h-7 rounded bg-industrial-900 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                01
              </span>
              <h4 className="font-bold text-sm text-industrial-900">Cari Produk</h4>
              <p className="text-xs text-industrial-500 mt-1 leading-relaxed">
                Gunakan search bar website atau kirim foto barang ke sales jika belum yakin kodenya.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-600 mt-4 block">Katalog / Search</span>
          </div>

          <div className="bg-white p-5 rounded-lg border border-industrial-200 flex flex-col justify-between">
            <div>
              <span className="w-7 h-7 rounded bg-industrial-900 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                02
              </span>
              <h4 className="font-bold text-sm text-industrial-900">Lihat Spesifikasi</h4>
              <p className="text-xs text-industrial-500 mt-1 leading-relaxed">
                Cek dimensi, daya, material, dan kecocokan teknis produk dengan kebutuhan lapangan.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-600 mt-4 block">Datasheet Teknis</span>
          </div>

          <div className="bg-white p-5 rounded-lg border border-industrial-200 flex flex-col justify-between">
            <div>
              <span className="w-7 h-7 rounded bg-industrial-900 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                03
              </span>
              <h4 className="font-bold text-sm text-industrial-900">Kumpulkan Barang</h4>
              <p className="text-xs text-industrial-500 mt-1 leading-relaxed">
                Tambahkan ke Daftar Barang Anda, tentukan jumlah yang diperlukan dan catatan spesifik.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-600 mt-4 block">Daftar Barang</span>
          </div>

          <div className="bg-white p-5 rounded-lg border border-industrial-200 flex flex-col justify-between">
            <div>
              <span className="w-7 h-7 rounded bg-industrial-900 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                04
              </span>
              <h4 className="font-bold text-sm text-industrial-900">Minta Penawaran</h4>
              <p className="text-xs text-industrial-500 mt-1 leading-relaxed">
                Kirim via Form Penawaran Resmi (RFQ) atau teruskan rincian daftar langsung ke WhatsApp.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-brand-600 mt-4 block">RFQ / WhatsApp</span>
          </div>

          <div className="bg-white p-5 rounded-lg border border-industrial-200 flex flex-col justify-between">
            <div>
              <span className="w-7 h-7 rounded bg-brand-600 text-white font-mono font-bold text-xs flex items-center justify-center mb-3">
                05
              </span>
              <h4 className="font-bold text-sm text-industrial-900">Order &amp; Pengiriman</h4>
              <p className="text-xs text-industrial-500 mt-1 leading-relaxed">
                Konfirmasi penawaran, proses PO/Invoice resmi, dan barang dikirim atau diambil di Surabaya.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-emerald-600 mt-4 block">Selesai &amp; Faktur</span>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 6. PROMINENT ASSISTANCE SECTION: UNKNOWN PRODUCT / FOTO BARANG            */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-industrial-950 via-industrial-900 to-industrial-950 border border-industrial-800 rounded-xl p-6 sm:p-10 text-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-950 border border-brand-800 text-brand-400 rounded-full text-xs font-semibold">
                <Camera className="w-3.5 h-3.5" />
                <span>Layanan Identifikasi Suku Cadang</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Belum Menemukan atau Belum Tahu Nama Pasti Barangnya?
              </h3>

              <p className="text-xs sm:text-sm text-industrial-300 leading-relaxed max-w-2xl">
                Banyak customer kami hanya membawa part lama yang sudah aus atau foto alat di lapangan. Cukup ambil foto barang Anda, perlihatkan kode angka atau merk yang tersisa, dan kirimkan ke tim sales HG TECH via WhatsApp. Kami akan langsung mencarikan tipe pengganti yang cocok dari gudang Surabaya.
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href={getPhotoInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all shadow-md inline-flex items-center gap-2.5 active:scale-95"
                >
                  <Camera className="w-4 h-4" />
                  <span>Kirim Foto Barang ke WhatsApp</span>
                </a>

                <a
                  href={getGeneralSalesUrl('Konsultasi Spesifikasi Alat Teknik')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-industrial-800 hover:bg-industrial-700 text-industrial-200 hover:text-white rounded-lg font-semibold text-xs sm:text-sm border border-industrial-700 transition-all inline-flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-brand-400" />
                  <span>Tanyakan ke Tim Sales</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-4 bg-industrial-900/80 p-5 rounded-lg border border-industrial-700 space-y-3 text-xs">
              <h4 className="font-bold text-sm text-white border-b border-industrial-700 pb-2">
                Informasi yang Membantu Kami:
              </h4>
              <ul className="space-y-2 text-industrial-300 text-xs">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>Foto keseluruhan bentuk barang dari beberapa sudut</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>Foto angka/tulisan merk/spesifikasi yang masih terbaca</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>Estimasi dimensi fisik (diameter, panjang, atau ukuran kunci)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                  <span>Mesin atau alat apa yang menggunakan komponen tersebut</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 7. COMPANY PROFILE PREVIEW                                               */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-industrial-200 rounded-xl p-6 sm:p-10 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-brand-600 uppercase tracking-widest block">
                Tentang HG TECH
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
                Mitra Suplai Alat Teknik &amp; Kebutuhan Industri Berbasis di Surabaya
              </h2>
              <p className="text-xs sm:text-sm text-industrial-700 leading-relaxed">
                HG TECH didirikan untuk menjawab kebutuhan para pelaku industri di Jawa Timur dan Indonesia Timur akan supplier alat teknik yang transparan, memiliki stok fisik di Surabaya, serta memahami aspek teknikal setiap peralatan yang dijual.
              </p>
              <p className="text-xs sm:text-sm text-industrial-600 leading-relaxed">
                Kami melayani toko teknik retail, mekanik bengkel mandiri, kontraktor MEP, hingga bagian purchasing pabrik manufaktur yang membutuhkan kelengkapan administrasi faktur pajak dan pengiriman berkala.
              </p>
              
              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/tentang-kami"
                  className="px-5 py-2.5 bg-industrial-900 hover:bg-industrial-800 text-white rounded-lg text-xs font-bold transition-all inline-flex items-center gap-2"
                >
                  <span>Kenal Lebih Dekat Tentang Kami</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/kontak"
                  className="text-xs font-bold text-industrial-700 hover:text-brand-600 transition-colors"
                >
                  Lokasi Gudang &amp; Kontak →
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 bg-industrial-50 p-5 rounded-lg border border-industrial-200 space-y-3 text-xs">
              <div className="flex items-center justify-between pb-2 border-b border-industrial-200">
                <span className="text-industrial-500">Basis Operasional:</span>
                <span className="font-bold text-industrial-900">Surabaya, Jawa Timur</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-industrial-200">
                <span className="text-industrial-500">Tipe Pelanggan:</span>
                <span className="font-bold text-industrial-900">B2B Perusahaan &amp; Retail</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-industrial-200">
                <span className="text-industrial-500">Dokumen Pajak:</span>
                <span className="font-bold text-emerald-700">e-Faktur PPN Resmi</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-industrial-500">Jangkauan Ekspedisi:</span>
                <span className="font-bold text-industrial-900">Seluruh Wilayah Indonesia</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 8. MARKETPLACE CHANNEL (SHOPEE - SECONDARY OPTION)                        */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-industrial-100 border border-industrial-300 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#ee4d2d] text-white flex items-center justify-center font-bold text-lg shrink-0 shadow-sm">
              S
            </div>
            <div>
              <h4 className="font-bold text-sm text-industrial-900">Belanja Melalui Official Store Shopee</h4>
              <p className="text-xs text-industrial-600 mt-0.5">
                Mencari metode pembayaran marketplace atau pengiriman instan untuk pembelian eceran? Produk HG TECH juga tersedia di Shopee.
              </p>
            </div>
          </div>

          <a
            href={HG_TECH_SHOPEE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-white hover:bg-industrial-50 text-industrial-800 text-xs font-bold border border-industrial-300 rounded-lg transition-all shrink-0 inline-flex items-center gap-1.5 shadow-2xs"
          >
            <span>Kunjungi Toko Shopee</span>
            <ExternalLink className="w-3.5 h-3.5 text-industrial-500" />
          </a>
        </div>
      </section>

    </div>
  );
}
