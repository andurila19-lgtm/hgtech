'use client';

import React, { useState } from 'react';
import { notFound, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  Check, 
  Plus, 
  Minus, 
  MessageSquare, 
  ShieldCheck, 
  Truck, 
  FileText, 
  Share2, 
  ExternalLink,
  ArrowRight,
  Camera,
  Info,
  ShoppingCart
} from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { useInquiry } from '@/context/InquiryContext';
import { getProductInquiryUrl, getPhotoInquiryUrl, HG_TECH_DISPLAY_PHONE } from '@/lib/whatsapp';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  const { addItem, hasItem } = useInquiry();
  const isAdded = hasItem(product.id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(product.minOrder || 1);
  const [activeTab, setActiveTab] = useState<'specs' | 'desc' | 'shipping'>('specs');
  const [copiedLink, setCopiedLink] = useState(false);

  const handleShare = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleQuickQuotation = () => {
    addItem(product, quantity);
    router.push('/permintaan-penawaran');
  };

  // Related products from same category or tags
  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.categoryId === product.categoryId || p.brand === product.brand)
  ).slice(0, 4);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-industrial-500 overflow-x-auto whitespace-nowrap">
        <Link href="/" className="hover:text-industrial-900 transition-colors">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <Link href="/produk" className="hover:text-industrial-900 transition-colors">Katalog Produk</Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <Link href={`/produk?kategori=${product.categoryId}`} className="hover:text-industrial-900 transition-colors">
          {product.category}
        </Link>
        <ChevronRight className="w-3.5 h-3.5 shrink-0" />
        <span className="text-industrial-900 font-semibold truncate max-w-xs">{product.name}</span>
      </nav>

      {/* Main Product Hero Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Image Gallery (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Main Large Image */}
          <div className="relative h-80 sm:h-96 w-full bg-white border border-industrial-200 rounded-xl overflow-hidden shadow-xs">
            <Image
              src={product.images[activeImageIndex] || product.images[0]}
              alt={product.name}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 500px"
            />
            <div className="absolute top-3 left-3">
              <span className="font-mono text-xs font-bold text-industrial-900 bg-white/95 px-2.5 py-1 rounded-md border border-industrial-200 shadow-xs">
                SKU: {product.sku}
              </span>
            </div>
          </div>

          {/* Thumbnails Row */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-1">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative w-20 h-20 bg-white rounded-lg border-2 overflow-hidden shrink-0 transition-all ${
                    activeImageIndex === idx ? 'border-brand-600 ring-2 ring-brand-500/20' : 'border-industrial-200 hover:border-industrial-400'
                  }`}
                >
                  <Image src={img} alt={`${product.name} view ${idx + 1}`} fill className="object-cover" sizes="80px" />
                </button>
              ))}
            </div>
          )}

          {/* Physical Verification Notice */}
          <div className="p-3.5 bg-industrial-100/70 border border-industrial-200 rounded-xl text-xs text-industrial-700 flex items-start gap-2.5">
            <Info className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              Foto dan data teknis di atas mencerminkan unit fisik riil di gudang kami di Surabaya. Butuh foto close-up atau video pengujian unit? Hubungi WhatsApp sales kami.
            </p>
          </div>
        </div>

        {/* Right Column: Product Detail & Action (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Brand, Category, SKU Badges */}
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-wider text-white bg-industrial-900 px-2.5 py-0.5 rounded">
                {product.brand}
              </span>
              <span className="text-xs font-semibold text-industrial-600 bg-industrial-100 px-2.5 py-0.5 rounded">
                {product.category} • {product.subcategory}
              </span>
              
              {product.stockStatus === 'ready' && (
                <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Ready Stock Gudang Surabaya
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight leading-snug">
              {product.name}
            </h1>

            <p className="text-sm text-industrial-600 mt-2 leading-relaxed">
              {product.shortDescription}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="p-5 bg-white border border-industrial-200 rounded-xl shadow-2xs space-y-2">
            <span className="text-xs text-industrial-500 uppercase font-semibold tracking-wider block">
              Harga / Estimasi Penawaran
            </span>
            
            <div className="flex flex-wrap items-baseline gap-3">
              {product.price ? (
                <>
                  <span className="font-mono text-3xl font-black text-industrial-900">
                    Rp {product.price.toLocaleString('id-ID')}
                  </span>
                  <span className="text-sm text-industrial-500 font-medium">/{product.unit} (Sebelum PPN)</span>
                </>
              ) : (
                <div>
                  <span className="text-xl sm:text-2xl font-black text-industrial-900">
                    Hubungi untuk Penawaran Harga B2B
                  </span>
                  <p className="text-xs text-industrial-500 mt-1">
                    Item ini memerlukan verifikasi spesifikasi teknis dan estimasi volume pengadaan.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-2 text-xs text-industrial-500 flex flex-wrap items-center gap-4 border-t border-industrial-100">
              <span className="flex items-center gap-1 text-industrial-700">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-600" />
                Melayani Faktur Pajak Resmi PPN 11%
              </span>
              <span>•</span>
              <span>Minimal Pemesanan: <strong>{product.minOrder} {product.unit}</strong></span>
            </div>
          </div>

          {/* Quantity & CTAs */}
          <div className="space-y-4 pt-2">
            
            {/* Quantity selector */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-industrial-700">Jumlah / Kebutuhan:</span>
              <div className="flex items-center border border-industrial-300 rounded-lg bg-white">
                <button
                  onClick={() => setQuantity(Math.max(product.minOrder || 1, quantity - 1))}
                  className="p-2 text-industrial-600 hover:bg-industrial-100"
                  aria-label="Kurangi jumlah"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <input
                  type="number"
                  min={product.minOrder || 1}
                  value={quantity}
                  onChange={(e) => setQuantity(Math.max(product.minOrder || 1, parseInt(e.target.value) || 1))}
                  className="w-16 text-center font-mono font-bold text-sm text-industrial-900 focus:outline-none"
                />
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-industrial-600 hover:bg-industrial-100"
                  aria-label="Tambah jumlah"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <span className="text-xs text-industrial-500 font-medium">{product.unit}</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              
              {/* Tambah ke Daftar Kebutuhan */}
              <button
                onClick={() => addItem(product, quantity)}
                className={`py-3 px-5 rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm ${
                  isAdded 
                    ? 'bg-emerald-600 hover:bg-emerald-500 text-white' 
                    : 'bg-industrial-900 hover:bg-industrial-800 text-white'
                }`}
              >
                {isAdded ? <Check className="w-4 h-4" /> : <ShoppingCart className="w-4 h-4" />}
                <span>{isAdded ? 'Sudah di Daftar Barang' : '+ Tambah ke Daftar Barang'}</span>
              </button>

              {/* Request Quotation Instan */}
              <button
                onClick={handleQuickQuotation}
                className="py-3 px-5 bg-brand-600 hover:bg-brand-500 active:scale-95 text-white rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Minta Penawaran Resmi (RFQ)</span>
              </button>

            </div>

            {/* Direct WhatsApp Quote Button (Prefilled Context) */}
            <a
              href={getProductInquiryUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 bg-emerald-600 hover:bg-emerald-500 active:scale-95 text-white rounded-lg font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Chat WhatsApp Mengenai Produk Ini</span>
            </a>

            {/* Secondary Utility Links */}
            <div className="flex flex-wrap items-center justify-between pt-2 text-xs text-industrial-500">
              {product.shopeeUrl ? (
                <a
                  href={product.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-industrial-800 inline-flex items-center gap-1"
                >
                  <span>Beli via Shopee Channel</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <span>Tersedia via Pemesanan Langsung HG TECH</span>
              )}

              <button
                onClick={handleShare}
                className="hover:text-industrial-800 inline-flex items-center gap-1 text-xs font-semibold"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>{copiedLink ? 'Link Tersalin!' : 'Bagikan Produk'}</span>
              </button>
            </div>

          </div>

          {/* Help Box if Not Sure */}
          <div className="p-4 bg-industrial-50 border border-industrial-200 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div>
              <p className="font-bold text-industrial-900">Perlu Bantuan Mencari Ukuran yang Sesuai?</p>
              <p className="text-industrial-600 mt-0.5">Kirimkan ukuran baut, diameter as mesin, atau foto part lama Anda.</p>
            </div>
            <a
              href={getPhotoInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-1.5 bg-white border border-industrial-300 hover:border-brand-500 text-industrial-800 font-bold rounded-lg shrink-0 inline-flex items-center gap-1.5"
            >
              <Camera className="w-3.5 h-3.5 text-brand-600" />
              <span>Kirim Foto</span>
            </a>
          </div>

        </div>

      </div>

      {/* Tabs: Technical Specifications, Full Description, Shipping Info */}
      <div className="bg-white border border-industrial-200 rounded-xl overflow-hidden shadow-xs">
        
        {/* Tab Headers */}
        <div className="flex border-b border-industrial-200 bg-industrial-50">
          <button
            onClick={() => setActiveTab('specs')}
            className={`px-6 py-3.5 text-xs sm:text-sm font-bold transition-colors border-b-2 ${
              activeTab === 'specs'
                ? 'border-brand-600 text-brand-600 bg-white'
                : 'border-transparent text-industrial-600 hover:text-industrial-900'
            }`}
          >
            Spesifikasi Teknis
          </button>
          <button
            onClick={() => setActiveTab('desc')}
            className={`px-6 py-3.5 text-xs sm:text-sm font-bold transition-colors border-b-2 ${
              activeTab === 'desc'
                ? 'border-brand-600 text-brand-600 bg-white'
                : 'border-transparent text-industrial-600 hover:text-industrial-900'
            }`}
          >
            Deskripsi &amp; Aplikasi Kerja
          </button>
          <button
            onClick={() => setActiveTab('shipping')}
            className={`px-6 py-3.5 text-xs sm:text-sm font-bold transition-colors border-b-2 ${
              activeTab === 'shipping'
                ? 'border-brand-600 text-brand-600 bg-white'
                : 'border-transparent text-industrial-600 hover:text-industrial-900'
            }`}
          >
            Pengiriman &amp; Syarat B2B
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8">
          
          {/* 1. SPECS TAB */}
          {activeTab === 'specs' && (
            <div className="space-y-4">
              <h3 className="text-base font-bold text-industrial-900 mb-4">
                Tabel Spesifikasi Teknis Produk
              </h3>
              <div className="border border-industrial-200 rounded-lg overflow-hidden">
                <table className="w-full text-xs sm:text-sm text-left">
                  <tbody>
                    <tr className="border-b border-industrial-100 bg-industrial-50/50">
                      <td className="py-2.5 px-4 font-semibold text-industrial-700 w-1/3">Kode SKU Produk</td>
                      <td className="py-2.5 px-4 font-mono font-bold text-industrial-900">{product.sku}</td>
                    </tr>
                    <tr className="border-b border-industrial-100">
                      <td className="py-2.5 px-4 font-semibold text-industrial-700">Merek / Brand</td>
                      <td className="py-2.5 px-4 font-medium text-industrial-900">{product.brand}</td>
                    </tr>
                    <tr className="border-b border-industrial-100 bg-industrial-50/50">
                      <td className="py-2.5 px-4 font-semibold text-industrial-700">Kategori Utama</td>
                      <td className="py-2.5 px-4 text-industrial-900">{product.category} ({product.subcategory})</td>
                    </tr>
                    {Object.entries(product.specifications).map(([key, val], idx) => (
                      <tr 
                        key={key} 
                        className={`border-b border-industrial-100 ${idx % 2 === 1 ? 'bg-industrial-50/50' : ''}`}
                      >
                        <td className="py-2.5 px-4 font-semibold text-industrial-700">{key}</td>
                        <td className="py-2.5 px-4 text-industrial-900">{val}</td>
                      </tr>
                    ))}
                    <tr>
                      <td className="py-2.5 px-4 font-semibold text-industrial-700 bg-industrial-50/50">Satuan Penjualan</td>
                      <td className="py-2.5 px-4 font-medium text-industrial-900 bg-industrial-50/50">{product.unit}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. DESCRIPTION TAB */}
          {activeTab === 'desc' && (
            <div className="prose max-w-none text-xs sm:text-sm text-industrial-700 space-y-4 leading-relaxed">
              <h3 className="text-base font-bold text-industrial-900">Ulasan &amp; Petunjuk Penggunaan</h3>
              <p>{product.description}</p>
              
              <div className="p-4 bg-industrial-50 rounded-lg border border-industrial-200 mt-4">
                <h4 className="font-bold text-industrial-900 text-xs uppercase tracking-wider mb-2">
                  Cocok Digunakan Untuk:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-1 bg-white border border-industrial-200 rounded text-xs text-industrial-700">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. SHIPPING & B2B TERMS TAB */}
          {activeTab === 'shipping' && (
            <div className="space-y-4 text-xs sm:text-sm text-industrial-700 leading-relaxed">
              <h3 className="text-base font-bold text-industrial-900">Ketentuan Logistik &amp; Faktur Pajak Surabaya</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                <div className="p-4 bg-industrial-50 rounded-lg border border-industrial-200 space-y-2">
                  <h4 className="font-bold text-industrial-900 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-brand-600" />
                    Pengiriman Wilayah Surabaya &amp; Sekitarnya
                  </h4>
                  <p className="text-xs text-industrial-600">
                    Pengiriman dalam kota Surabaya dapat menggunakan kurir logistik toko, pickup langsung di gudang kami (Krembangan/Dupak), atau kurir instan untuk kebutuhan mendesak.
                  </p>
                </div>

                <div className="p-4 bg-industrial-50 rounded-lg border border-industrial-200 space-y-2">
                  <h4 className="font-bold text-industrial-900 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Ekspedisi Seluruh Indonesia
                  </h4>
                  <p className="text-xs text-industrial-600">
                    Kami bekerja sama dengan berbagai ekspedisi kargo darat, laut, dan udara untuk pengiriman partai besar ke Jawa, Madura, Bali, Kalimantan, Sulawesi, hingga Papua.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-brand-50 border border-brand-200 rounded-lg text-xs text-brand-900 mt-4 space-y-1">
                <p className="font-bold">Informasi Faktur Pajak Perusahaan (B2B):</p>
                <p>
                  Untuk permohonan faktur pajak, mohon melampirkan file scan NPWP perusahaan dan data SPPKP saat mengirimkan PO atau formulir penawaran. Faktur pajak e-Faktur akan diterbitkan sesuai dengan tanggal transaksi resmi.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* Related Products Grid */}
      {relatedProducts.length > 0 && (
        <div className="space-y-6 pt-6 border-t border-industrial-200">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-industrial-900 tracking-tight">
              Produk Terkait &amp; Rekomendasi Pelengkap
            </h3>
            <Link
              href={`/produk?kategori=${product.categoryId}`}
              className="text-xs font-bold text-brand-600 hover:text-brand-700 flex items-center gap-1"
            >
              <span>Lihat Kategori Ini</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
