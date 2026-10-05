'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Search, ArrowRight, X, Sparkles, AlertCircle } from 'lucide-react';
import { PRODUCTS } from '@/data/products';
import { Product } from '@/types';
import { getPhotoInquiryUrl } from '@/lib/whatsapp';

interface SearchBarProps {
  placeholder?: string;
  initialQuery?: string;
  showSuggestions?: boolean;
  className?: string;
  autoFocus?: boolean;
}

export default function SearchBar({
  placeholder = 'Ketik nama alat, kode SKU, atau kebutuhan Anda (contoh: gerinda, bearing 6205, baut m12)...',
  initialQuery = '',
  showSuggestions = true,
  className = '',
  autoFocus = false
}: SearchBarProps) {
  const router = useRouter();
  const [query, setQuery] = useState(initialQuery);
  const [isOpen, setIsOpen] = useState(false);
  const [filteredResults, setFilteredResults] = useState<Product[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const popularSearches = [
    'Gerinda Tangan',
    'Bearing 6205',
    'Baut Baja 8.8',
    'Kunci Ring Pas',
    'Sketmat Digital',
    'Helm Proyek'
  ];

  // Perform search matching
  useEffect(() => {
    const q = query.trim().toLowerCase();
    if (q.length < 2) {
      setFilteredResults([]);
      return;
    }

    const matches = PRODUCTS.filter((item) => {
      const nameMatch = item.name.toLowerCase().includes(q);
      const skuMatch = item.sku.toLowerCase().includes(q);
      const catMatch = item.category.toLowerCase().includes(q) || item.subcategory.toLowerCase().includes(q);
      const tagMatch = item.tags.some((tag) => tag.toLowerCase().includes(q));
      const brandMatch = item.brand.toLowerCase().includes(q);
      return nameMatch || skuMatch || catMatch || tagMatch || brandMatch;
    }).slice(0, 5);

    setFilteredResults(matches);
  }, [query]);

  // Click outside listener
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    setIsOpen(false);
    router.push(`/produk?q=${encodeURIComponent(query.trim())}`);
  };

  const handleSelectKeyword = (keyword: string) => {
    setQuery(keyword);
    router.push(`/produk?q=${encodeURIComponent(keyword)}`);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      <form onSubmit={handleSubmit} className="relative flex items-center">
        <div className="absolute left-3.5 text-industrial-400 pointer-events-none">
          <Search className="w-4 h-4 text-industrial-500" />
        </div>

        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-10 pr-24 py-2 sm:py-2.5 bg-white text-industrial-900 placeholder:text-industrial-400 text-xs sm:text-sm border border-industrial-300 rounded-md focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 shadow-xs transition-all"
        />

        {query && (
          <button
            type="button"
            onClick={() => {
              setQuery('');
              setFilteredResults([]);
            }}
            className="absolute right-20 text-industrial-400 hover:text-industrial-600 p-1"
            aria-label="Hapus ketikan"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}

        <button
          type="submit"
          className="absolute right-1.5 px-3 py-1.5 bg-brand-600 hover:bg-brand-500 active:scale-95 text-white font-bold text-xs rounded transition-all flex items-center gap-1 shadow-xs"
        >
          <span>Cari</span>
          <ArrowRight className="w-3 h-3 hidden sm:inline" />
        </button>
      </form>

      {/* Dropdown Live Results or Suggestions */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-industrial-200 rounded-md shadow-2xl z-50 overflow-hidden text-industrial-900 animate-in fade-in-50 duration-150">
          {query.trim().length >= 2 ? (
            <div>
              <div className="p-3 bg-industrial-50 border-b border-industrial-200 text-xs font-semibold text-industrial-600 flex justify-between items-center">
                <span>Hasil Pencarian Cepat</span>
                <span className="text-[11px] text-industrial-400 font-normal">
                  Tekan Enter untuk melihat semua ({filteredResults.length} ditemukan)
                </span>
              </div>

              {filteredResults.length > 0 ? (
                <div className="divide-y divide-industrial-100">
                  {filteredResults.map((product) => (
                    <Link
                      key={product.id}
                      href={`/produk/${product.slug}`}
                      onClick={() => setIsOpen(false)}
                      className="p-3 flex items-center gap-3.5 hover:bg-industrial-50 transition-colors"
                    >
                      <div className="w-12 h-12 relative bg-industrial-100 rounded border border-industrial-200 overflow-hidden shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="48px"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] font-bold text-brand-600 bg-brand-50 px-1.5 py-0.5 rounded border border-brand-200">
                            {product.sku}
                          </span>
                          <span className="text-[11px] text-industrial-500">
                            {product.category}
                          </span>
                        </div>
                        <p className="font-semibold text-xs sm:text-sm text-industrial-900 truncate mt-0.5">
                          {product.name}
                        </p>
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-mono text-xs font-bold text-industrial-900 block">
                          {product.price ? `Rp ${product.price.toLocaleString('id-ID')}` : 'Hubungi Penawaran'}
                        </span>
                        <span className="text-[10px] text-industrial-400">/{product.unit}</span>
                      </div>
                    </Link>
                  ))}

                  <div className="p-2.5 bg-industrial-50/80 text-center">
                    <button
                      onClick={handleSubmit}
                      className="text-xs font-bold text-brand-600 hover:text-brand-700 inline-flex items-center gap-1"
                    >
                      Lihat Semua Hasil Pencarian "{query}" <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 text-center">
                  <div className="w-10 h-10 mx-auto rounded-full bg-amber-50 text-amber-600 flex items-center justify-center mb-2">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <p className="font-bold text-sm text-industrial-800">Produk Belum Ditemukan</p>
                  <p className="text-xs text-industrial-500 max-w-sm mx-auto mt-1 mb-4 leading-relaxed">
                    Tidak menemukan nama barang "{query}"? Kami memiliki ribuan jenis alat teknik di gudang Surabaya yang siap kami carikan.
                  </p>
                  <a
                    href={getPhotoInquiryUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-all shadow-sm"
                  >
                    Tanyakan Produk ke HG TECH via WhatsApp
                  </a>
                </div>
              )}
            </div>
          ) : (
            showSuggestions && (
              <div className="p-4">
                <p className="text-xs font-bold text-industrial-600 uppercase tracking-wider mb-2.5">
                  Pencarian Populer di Surabaya:
                </p>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleSelectKeyword(item)}
                      className="px-3 py-1.5 bg-industrial-100 hover:bg-industrial-200 text-industrial-800 rounded text-xs font-medium transition-colors"
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      )}
    </div>
  );
}
