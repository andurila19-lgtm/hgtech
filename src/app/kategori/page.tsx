import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ArrowRight, Layers, ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '@/data/categories';
import { PRODUCTS } from '@/data/products';

export const metadata = {
  title: 'Kategori Alat Teknik & Industrial Supplies — HG TECH Surabaya',
  description: 'Jelajahi klasifikasi lengkap alat teknik: hand tools, power tools, measuring instruments, cutting tools, workshop equipment, APD safety, dan industrial supplies di Surabaya.',
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-industrial-500">
        <Link href="/" className="hover:text-industrial-900 transition-colors">Beranda</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-industrial-900 font-semibold">Kategori Produk</span>
      </nav>

      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-2.5 py-0.5 bg-brand-100 text-brand-800 text-xs font-bold rounded mb-1.5">
          <Layers className="w-3.5 h-3.5 text-brand-600" />
          <span>Direktori Lengkap</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
          Kategori Alat Teknik &amp; Perlengkapan Industri
        </h1>
        <p className="text-xs sm:text-sm text-industrial-600 mt-1 max-w-2xl leading-relaxed">
          Temukan produk berdasarkan kelompok fungsi kerja perbengkelan, permesinan, dan keselamatan industri. Klik pada kategori untuk membuka katalog lengkap.
        </p>
      </div>

      {/* Categories Grid */}
      <div className="space-y-8">
        {CATEGORIES.map((cat, index) => {
          const sampleProducts = PRODUCTS.filter((p) => p.categoryId === cat.slug).slice(0, 3);

          return (
            <div
              key={cat.id}
              className="bg-white border border-industrial-200 rounded-md overflow-hidden shadow-xs hover:border-industrial-400 transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                
                {/* Left: Category Photo & Intro (5 cols) */}
                <div className="lg:col-span-5 relative min-h-64 sm:min-h-72 bg-industrial-900">
                  <Image
                    src={cat.image}
                    alt={cat.name}
                    fill
                    className="object-cover opacity-80"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-industrial-950 via-industrial-950/40 to-transparent"></div>
                  
                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <span className="font-mono text-xs font-bold bg-black/60 px-2.5 py-1 rounded w-fit border border-industrial-700">
                      0{index + 1} • {cat.itemCount}+ ITEM TERSEDIA
                    </span>

                    <div>
                      <h2 className="text-2xl font-black tracking-tight">{cat.name}</h2>
                      <p className="text-xs text-industrial-300 mt-2 line-clamp-3 leading-relaxed">
                        {cat.description}
                      </p>
                      
                      <Link
                        href={`/produk?kategori=${cat.slug}`}
                        className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded text-xs font-bold transition-all shadow-xs"
                      >
                        <span>Buka Semua {cat.name}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Subcategories & Sample Products (7 cols) */}
                <div className="lg:col-span-7 p-6 flex flex-col justify-between space-y-6">
                  
                  {/* Subcategories list */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-industrial-500 mb-3">
                      Subkategori &amp; Tipe Barang:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {cat.subcategories.map((sub) => (
                        <Link
                          key={sub}
                          href={`/produk?kategori=${cat.slug}`}
                          className="px-3 py-1.5 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded text-xs font-medium transition-colors"
                        >
                          {sub}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Sample Items from this category */}
                  <div className="pt-4 border-t border-industrial-100">
                    <div className="flex items-center justify-between mb-3 text-xs">
                      <span className="font-bold text-industrial-800">Contoh Produk Populer:</span>
                      <Link href={`/produk?kategori=${cat.slug}`} className="text-brand-600 font-semibold hover:underline">
                        Lihat Selengkapnya →
                      </Link>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {sampleProducts.map((p) => (
                        <Link
                          key={p.id}
                          href={`/produk/${p.slug}`}
                          className="p-2.5 bg-industrial-50 hover:bg-white border border-industrial-200 hover:border-brand-500 rounded text-xs transition-all group"
                        >
                          <div className="font-mono text-[10px] font-bold text-brand-600 truncate">{p.sku}</div>
                          <div className="font-semibold text-industrial-900 line-clamp-2 mt-0.5 group-hover:text-brand-600 leading-snug">
                            {p.name}
                          </div>
                          <div className="mt-1 text-[11px] font-mono text-industrial-700">
                            {p.price ? `Rp ${p.price.toLocaleString('id-ID')}` : 'Hubungi Penawaran'}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
