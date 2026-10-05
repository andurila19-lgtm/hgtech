'use client';

import React, { useState, useMemo, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Filter, 
  Grid, 
  List, 
  Search, 
  X, 
  SlidersHorizontal, 
  AlertCircle, 
  Camera, 
  ChevronRight,
  RotateCcw
} from 'lucide-react';
import ProductCard from '@/components/product/ProductCard';
import { PRODUCTS } from '@/data/products';
import { CATEGORIES } from '@/data/categories';
import { Product } from '@/types';
import { getPhotoInquiryUrl } from '@/lib/whatsapp';

function CatalogContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('kategori') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [stockFilter, setStockFilter] = useState<string>('all');
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState<boolean>(false);

  // Sync URL query params with state
  useEffect(() => {
    const cat = searchParams.get('kategori');
    if (cat) setSelectedCategory(cat);

    const q = searchParams.get('q');
    if (q !== null) setSearchQuery(q);
  }, [searchParams]);

  // Current category data
  const currentCategoryData = useMemo(() => {
    return CATEGORIES.find((c) => c.slug === selectedCategory);
  }, [selectedCategory]);

  // Reset subcategory when category changes
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setSelectedSubcategory('all');
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setSearchQuery('');
    setStockFilter('all');
    setPriceRange('all');
    setSortBy('featured');
  };

  // Filtering & Sorting
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesSku = product.sku.toLowerCase().includes(q);
        const matchesCat = product.category.toLowerCase().includes(q) || product.subcategory.toLowerCase().includes(q);
        const matchesTags = product.tags.some((t) => t.toLowerCase().includes(q));
        const matchesBrand = product.brand.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);

        if (!matchesName && !matchesSku && !matchesCat && !matchesTags && !matchesBrand && !matchesDesc) {
          return false;
        }
      }

      // 2. Category
      if (selectedCategory !== 'all') {
        if (product.categoryId !== selectedCategory) {
          return false;
        }
      }

      // 3. Subcategory
      if (selectedSubcategory !== 'all') {
        if (product.subcategory !== selectedSubcategory) {
          return false;
        }
      }

      // 4. Stock status
      if (stockFilter !== 'all') {
        if (product.stockStatus !== stockFilter) {
          return false;
        }
      }

      // 5. Price Range
      if (priceRange !== 'all') {
        if (priceRange === 'quotation') {
          if (product.price !== null) return false;
        } else if (priceRange === 'under-200k') {
          if (!product.price || product.price > 200000) return false;
        } else if (priceRange === '200k-1m') {
          if (!product.price || product.price < 200000 || product.price > 1000000) return false;
        } else if (priceRange === 'above-1m') {
          if (!product.price || product.price < 1000000) return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'featured') {
        return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
      if (sortBy === 'price-low') {
        const pA = a.price || 999999999;
        const pB = b.price || 999999999;
        return pA - pB;
      }
      if (sortBy === 'price-high') {
        const pA = a.price || 0;
        const pB = b.price || 0;
        return pB - pA;
      }
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'name-desc') {
        return b.name.localeCompare(a.name);
      }
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedSubcategory, stockFilter, priceRange, sortBy]);

  const activeFilterCount = (selectedCategory !== 'all' ? 1 : 0) +
    (selectedSubcategory !== 'all' ? 1 : 0) +
    (searchQuery ? 1 : 0) +
    (stockFilter !== 'all' ? 1 : 0) +
    (priceRange !== 'all' ? 1 : 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Breadcrumb & Title */}
      <div>
        <nav className="flex items-center gap-1.5 text-xs text-industrial-500 mb-2">
          <Link href="/" className="hover:text-industrial-900 transition-colors">Beranda</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-industrial-900 font-semibold">Katalog Produk</span>
          {currentCategoryData && (
            <>
              <ChevronRight className="w-3.5 h-3.5" />
              <span className="text-brand-600 font-semibold">{currentCategoryData.name}</span>
            </>
          )}
        </nav>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-industrial-900 tracking-tight">
              {currentCategoryData ? currentCategoryData.name : 'Katalog Alat Teknik & Perlengkapan Industri'}
            </h1>
            <p className="text-xs sm:text-sm text-industrial-600 mt-1 max-w-2xl leading-relaxed">
              {currentCategoryData 
                ? currentCategoryData.description 
                : 'Temukan spesifikasi lengkap hand tools, power tools, alat ukur presisi, mata potong, dan perlengkapan workshop siap kirim dari gudang Surabaya.'}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-industrial-500 font-mono font-bold bg-industrial-100 px-3 py-1.5 rounded border border-industrial-200">
              Menampilkan {filteredProducts.length} Produk
            </span>
          </div>
        </div>
      </div>

      {/* Main Layout: Sidebar Filter + Product Content */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        
        {/* ================= DESKTOP FILTER SIDEBAR ================= */}
        <aside className="hidden lg:block lg:col-span-1 bg-white border border-industrial-200 rounded-md p-5 space-y-6 shadow-xs sticky top-28">
          
          <div className="flex items-center justify-between pb-3 border-b border-industrial-200">
            <div className="flex items-center gap-2 font-bold text-sm text-industrial-900">
              <Filter className="w-4 h-4 text-brand-600" />
              <span>Filter Produk</span>
            </div>
            {activeFilterCount > 0 && (
              <button
                onClick={resetFilters}
                className="text-xs text-brand-600 hover:text-brand-700 font-semibold flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset</span>
              </button>
            )}
          </div>

          {/* Search within catalog */}
          <div>
            <label className="block text-xs font-bold text-industrial-800 uppercase tracking-wider mb-2">
              Pencarian Kata Kunci
            </label>
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Nama, SKU, kata kunci..."
                className="w-full pl-8 pr-7 py-2 bg-industrial-50 border border-industrial-300 rounded text-xs text-industrial-900 placeholder:text-industrial-400 focus:outline-none focus:border-brand-500"
              />
              <Search className="w-3.5 h-3.5 text-industrial-400 absolute left-2.5 top-2.5" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-2.5 text-industrial-400 hover:text-industrial-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Category List */}
          <div>
            <label className="block text-xs font-bold text-industrial-800 uppercase tracking-wider mb-2.5">
              Kategori Utama
            </label>
            <div className="space-y-1">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`w-full text-left px-2.5 py-1.5 rounded text-xs font-medium transition-colors flex items-center justify-between ${
                  selectedCategory === 'all'
                    ? 'bg-industrial-900 text-white font-bold'
                    : 'text-industrial-700 hover:bg-industrial-100'
                }`}
              >
                <span>Semua Kategori</span>
                <span className="text-[11px] font-mono opacity-80">{PRODUCTS.length}</span>
              </button>

              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors flex items-center justify-between ${
                    selectedCategory === cat.slug
                      ? 'bg-industrial-900 text-white font-bold'
                      : 'text-industrial-700 hover:bg-industrial-100'
                  }`}
                >
                  <span className="truncate pr-2">{cat.name}</span>
                  <span className="text-[11px] font-mono opacity-80">
                    {PRODUCTS.filter((p) => p.categoryId === cat.slug).length}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Subcategory List if Category is chosen */}
          {currentCategoryData && currentCategoryData.subcategories.length > 0 && (
            <div className="pt-3 border-t border-industrial-100">
              <label className="block text-xs font-bold text-industrial-800 uppercase tracking-wider mb-2">
                Subkategori {currentCategoryData.name}
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedSubcategory('all')}
                  className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors ${
                    selectedSubcategory === 'all'
                      ? 'bg-brand-100 text-brand-800 font-bold border border-brand-300'
                      : 'text-industrial-600 hover:bg-industrial-100'
                  }`}
                >
                  Semua Subkategori
                </button>
                {currentCategoryData.subcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => setSelectedSubcategory(sub)}
                    className={`w-full text-left px-2.5 py-1.5 rounded text-xs transition-colors ${
                      selectedSubcategory === sub
                        ? 'bg-brand-100 text-brand-800 font-bold border border-brand-300'
                        : 'text-industrial-600 hover:bg-industrial-100'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Stock Status */}
          <div className="pt-3 border-t border-industrial-100">
            <label className="block text-xs font-bold text-industrial-800 uppercase tracking-wider mb-2">
              Ketersediaan Stok
            </label>
            <div className="space-y-1.5 text-xs text-industrial-700">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stock"
                  checked={stockFilter === 'all'}
                  onChange={() => setStockFilter('all')}
                  className="accent-brand-600"
                />
                <span>Semua Status</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="stock"
                  checked={stockFilter === 'ready'}
                  onChange={() => setStockFilter('ready')}
                  className="accent-brand-600"
                />
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  Ready Stock Surabaya
                </span>
              </label>
            </div>
          </div>

          {/* Price Category */}
          <div className="pt-3 border-t border-industrial-100">
            <label className="block text-xs font-bold text-industrial-800 uppercase tracking-wider mb-2">
              Kisaran Harga
            </label>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full p-2 bg-industrial-50 border border-industrial-300 rounded text-xs text-industrial-800 focus:outline-none focus:border-brand-500"
            >
              <option value="all">Semua Harga</option>
              <option value="under-200k">Di bawah Rp 200.000</option>
              <option value="200k-1m">Rp 200.000 - Rp 1.000.000</option>
              <option value="above-1m">Di atas Rp 1.000.000</option>
              <option value="quotation">Perlu Penawaran Khusus</option>
            </select>
          </div>

          {/* Quick WA Box */}
          <div className="pt-4 border-t border-industrial-200 bg-industrial-50 p-3 rounded text-xs space-y-2">
            <p className="font-bold text-industrial-900 leading-tight">Tidak menemukan barang yang dicari?</p>
            <p className="text-[11px] text-industrial-600 leading-tight">
              Tim sales kami dapat mencarikan produk dari ribuan SKU di gudang Surabaya.
            </p>
            <a
              href={getPhotoInquiryUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-1.5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded font-bold text-xs transition-colors"
            >
              <Camera className="w-3.5 h-3.5" />
              <span>Kirim Foto Produk</span>
            </a>
          </div>

        </aside>

        {/* ================= MAIN PRODUCT LISTING ================= */}
        <div className="lg:col-span-3 space-y-5">
          
          {/* Top Control Bar: Sort, View Toggle, Mobile Filter Trigger */}
          <div className="bg-white border border-industrial-200 rounded-md p-3 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
            
            {/* Mobile Filter Button */}
            <button
              onClick={() => setIsMobileFilterOpen(true)}
              className="lg:hidden flex items-center gap-2 px-3 py-1.5 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded text-xs font-bold transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-brand-600" />
              <span>Filter ({activeFilterCount})</span>
            </button>

            {/* Active Query Pill */}
            {searchQuery && (
              <div className="flex items-center gap-1.5 text-xs bg-brand-50 border border-brand-200 text-brand-800 px-2.5 py-1 rounded">
                <span>Pencarian: <strong>"{searchQuery}"</strong></span>
                <button onClick={() => setSearchQuery('')} className="hover:text-brand-950">
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-3 ml-auto">
              {/* Sorting Select */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-industrial-500 hidden sm:inline">Urutkan:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-industrial-50 border border-industrial-300 rounded px-2.5 py-1.5 text-xs text-industrial-800 font-medium focus:outline-none focus:border-brand-500"
                >
                  <option value="featured">Unggulan &amp; Rekomendasi</option>
                  <option value="price-low">Harga: Terendah ke Tertinggi</option>
                  <option value="price-high">Harga: Tertinggi ke Terendah</option>
                  <option value="name-asc">Nama Produk: A - Z</option>
                  <option value="name-desc">Nama Produk: Z - A</option>
                </select>
              </div>

              {/* View Toggle (Grid / List) */}
              <div className="hidden sm:flex items-center border border-industrial-300 rounded overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 ${viewMode === 'grid' ? 'bg-industrial-900 text-white' : 'bg-white text-industrial-600 hover:bg-industrial-100'}`}
                  aria-label="Tampilan Grid"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 ${viewMode === 'list' ? 'bg-industrial-900 text-white' : 'bg-white text-industrial-600 hover:bg-industrial-100'}`}
                  aria-label="Tampilan List"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Product Grid / List */}
          {filteredProducts.length > 0 ? (
            <div className={
              viewMode === 'grid'
                ? "grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                : "space-y-3"
            }>
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white border border-industrial-200 rounded-md p-10 text-center space-y-4">
              <div className="w-14 h-14 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center">
                <AlertCircle className="w-7 h-7" />
              </div>
              <div className="max-w-md mx-auto">
                <h3 className="text-lg font-bold text-industrial-900">Produk Belum Ditemukan</h3>
                <p className="text-xs sm:text-sm text-industrial-600 mt-1 leading-relaxed">
                  Tidak ada produk yang cocok dengan kriteria pencarian Anda. Kami menyediakan ribuan item teknik yang mungkin belum terdaftar lengkap di web.
                </p>
              </div>
              
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <button
                  onClick={resetFilters}
                  className="px-4 py-2 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded text-xs font-bold transition-colors"
                >
                  Reset Semua Filter
                </button>

                <a
                  href={getPhotoInquiryUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-all inline-flex items-center gap-2 shadow-xs"
                >
                  <Camera className="w-4 h-4" />
                  <span>Tanyakan Produk ke HG TECH (WhatsApp)</span>
                </a>
              </div>
            </div>
          )}

        </div>

      </div>

      {/* ================= MOBILE FILTER MODAL ================= */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden overflow-hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-xs" onClick={() => setIsMobileFilterOpen(false)} />
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-xs bg-white shadow-2xl p-5 flex flex-col justify-between overflow-y-auto">
              <div className="space-y-5">
                <div className="flex items-center justify-between pb-3 border-b border-industrial-200">
                  <span className="font-bold text-sm text-industrial-900 flex items-center gap-2">
                    <Filter className="w-4 h-4 text-brand-600" />
                    Filter Katalog
                  </span>
                  <button onClick={() => setIsMobileFilterOpen(false)} className="p-1 text-industrial-500">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Categories */}
                <div>
                  <label className="block text-xs font-bold text-industrial-800 uppercase mb-2">Kategori</label>
                  <div className="space-y-1">
                    <button
                      onClick={() => { handleCategoryChange('all'); setIsMobileFilterOpen(false); }}
                      className={`w-full text-left px-2.5 py-1.5 rounded text-xs ${selectedCategory === 'all' ? 'bg-industrial-900 text-white font-bold' : 'text-industrial-700'}`}
                    >
                      Semua Kategori
                    </button>
                    {CATEGORIES.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => { handleCategoryChange(cat.slug); setIsMobileFilterOpen(false); }}
                        className={`w-full text-left px-2.5 py-1.5 rounded text-xs ${selectedCategory === cat.slug ? 'bg-industrial-900 text-white font-bold' : 'text-industrial-700'}`}
                      >
                        {cat.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stock */}
                <div className="pt-3 border-t border-industrial-100">
                  <label className="block text-xs font-bold text-industrial-800 uppercase mb-2">Ketersediaan</label>
                  <div className="space-y-1.5 text-xs">
                    <label className="flex items-center gap-2">
                      <input type="radio" checked={stockFilter === 'all'} onChange={() => setStockFilter('all')} />
                      Semua
                    </label>
                    <label className="flex items-center gap-2">
                      <input type="radio" checked={stockFilter === 'ready'} onChange={() => setStockFilter('ready')} />
                      Ready Stock Surabaya
                    </label>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-industrial-200 space-y-2">
                <button
                  onClick={() => setIsMobileFilterOpen(false)}
                  className="w-full py-2.5 bg-brand-600 text-white font-bold text-xs rounded"
                >
                  Tampilkan {filteredProducts.length} Produk
                </button>
                <button
                  onClick={resetFilters}
                  className="w-full py-2 bg-industrial-100 text-industrial-700 font-semibold text-xs rounded"
                >
                  Reset Filter
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default function CatalogPage() {
  return (
    <Suspense fallback={
      <div className="max-w-7xl mx-auto px-4 py-16 text-center text-industrial-500">
        Memuat katalog produk HG TECH...
      </div>
    }>
      <CatalogContent />
    </Suspense>
  );
}
