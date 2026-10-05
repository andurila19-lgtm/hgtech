'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Plus, Check, MessageSquare, ArrowUpRight, ShieldCheck, ShoppingCart } from 'lucide-react';
import { Product } from '@/types';
import { useInquiry } from '@/context/InquiryContext';
import { getProductInquiryUrl } from '@/lib/whatsapp';

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export default function ProductCard({ product, viewMode = 'grid' }: ProductCardProps) {
  const { addItem, hasItem } = useInquiry();
  const isAdded = hasItem(product.id);

  const getStockBadge = () => {
    switch (product.stockStatus) {
      case 'ready':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            Ready Stock SBY
          </span>
        );
      case 'limited':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Stok Terbatas
          </span>
        );
      case 'po':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-blue-700 bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
            Indent / PO Pabrik
          </span>
        );
    }
  };

  if (viewMode === 'list') {
    return (
      <div className="bg-white border border-industrial-200 hover:border-brand-500/80 rounded-xl p-4 transition-all hover:shadow-md flex flex-col sm:flex-row items-start sm:items-center gap-4 group">
        
        {/* Image */}
        <Link 
          href={`/produk/${product.slug}`}
          className="w-full sm:w-40 h-36 bg-industrial-50 rounded-lg border border-industrial-200 overflow-hidden relative shrink-0 block"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 640px) 100vw, 160px"
          />
        </Link>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1.5">
            <span className="font-mono text-[10px] font-bold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
              {product.sku}
            </span>
            <span className="text-[11px] font-semibold text-industrial-500 uppercase tracking-wider">
              {product.category}
            </span>
            {getStockBadge()}
          </div>

          <Link href={`/produk/${product.slug}`}>
            <h3 className="font-bold text-base text-industrial-900 group-hover:text-brand-600 transition-colors leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-xs text-industrial-600 line-clamp-2 mt-1 leading-relaxed">
            {product.shortDescription}
          </p>

          {/* Key Spec Snippet */}
          <div className="mt-2 flex flex-wrap gap-2 text-[11px] text-industrial-500">
            {Object.entries(product.specifications).slice(0, 3).map(([key, val]) => (
              <span key={key} className="bg-industrial-100 px-2 py-0.5 rounded text-industrial-700">
                <strong className="font-semibold">{key}:</strong> {val}
              </span>
            ))}
          </div>
        </div>

        {/* Price & Actions */}
        <div className="w-full sm:w-56 sm:text-right shrink-0 pt-3 sm:pt-0 sm:border-l sm:border-industrial-100 sm:pl-4 flex flex-col justify-between h-full">
          <div>
            <span className="text-[10px] text-industrial-400 uppercase tracking-wider font-semibold block">
              Estimasi Harga
            </span>
            {product.price ? (
              <div className="font-mono text-lg font-extrabold text-industrial-900">
                Rp {product.price.toLocaleString('id-ID')}
                <span className="text-xs text-industrial-500 font-normal"> /{product.unit}</span>
              </div>
            ) : (
              <div className="text-sm font-bold text-industrial-800">
                Hubungi untuk Penawaran
              </div>
            )}
          </div>

          <div className="mt-3 flex items-center gap-2 sm:justify-end">
            <button
              onClick={() => addItem(product)}
              className={`flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-xs ${
                isAdded 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-industrial-900 hover:bg-industrial-800 text-white'
              }`}
            >
              {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{isAdded ? 'Sudah di Daftar' : '+ Masuk Daftar'}</span>
            </button>

            <a
              href={getProductInquiryUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-emerald-50 border border-emerald-300 text-emerald-700 hover:bg-emerald-600 hover:text-white rounded-lg transition-colors"
              title="Chat WhatsApp untuk produk ini"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            <Link
              href={`/produk/${product.slug}`}
              className="p-2 bg-industrial-100 hover:bg-industrial-200 text-industrial-700 rounded-lg transition-colors"
              title="Lihat Detail Spesifikasi"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    );
  }

  // Grid view (Default)
  return (
    <div className="bg-white border border-industrial-200 hover:border-brand-500/80 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-card flex flex-col h-full group">
      
      {/* Product Image Area */}
      <Link 
        href={`/produk/${product.slug}`}
        className="w-full h-48 bg-industrial-50 relative overflow-hidden block border-b border-industrial-100"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        
        {/* Top Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1 z-10">
          <span className="font-mono text-[10px] font-bold text-industrial-900 bg-white/95 backdrop-blur-xs px-2 py-0.5 rounded shadow-xs border border-industrial-200">
            {product.sku}
          </span>
        </div>

        <div className="absolute top-2 right-2 z-10">
          {getStockBadge()}
        </div>
      </Link>

      {/* Product Information */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between text-[11px] text-industrial-500 mb-1">
            <span className="uppercase font-semibold tracking-wider">{product.category}</span>
            <span className="text-industrial-400">{product.brand}</span>
          </div>

          <Link href={`/produk/${product.slug}`}>
            <h3 className="font-bold text-sm text-industrial-900 group-hover:text-brand-600 transition-colors line-clamp-2 leading-snug">
              {product.name}
            </h3>
          </Link>

          <p className="text-[11px] text-industrial-600 line-clamp-2 mt-1.5 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pricing & Add to Cart/List Action */}
        <div className="pt-3 mt-3 border-t border-industrial-100">
          <div className="flex items-baseline justify-between mb-2.5">
            <div>
              <span className="text-[10px] text-industrial-400 uppercase tracking-wider block font-semibold">
                Estimasi Harga
              </span>
              {product.price ? (
                <span className="font-mono text-sm sm:text-base font-extrabold text-industrial-900">
                  Rp {product.price.toLocaleString('id-ID')}
                  <span className="text-[10px] text-industrial-500 font-normal"> /{product.unit}</span>
                </span>
              ) : (
                <span className="text-xs font-bold text-industrial-800">
                  Hubungi Penawaran
                </span>
              )}
            </div>

            <a
              href={getProductInquiryUrl(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-industrial-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
              title="Tanya ketersediaan di WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-5 gap-1.5">
            <button
              onClick={() => addItem(product)}
              className={`col-span-4 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-bold transition-all shadow-xs ${
                isAdded 
                  ? 'bg-emerald-600 text-white' 
                  : 'bg-industrial-900 hover:bg-industrial-800 text-white active:scale-98'
              }`}
            >
              {isAdded ? <Check className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
              <span>{isAdded ? 'Sudah di Daftar' : '+ Masuk Daftar'}</span>
            </button>

            <Link
              href={`/produk/${product.slug}`}
              className="col-span-1 flex items-center justify-center p-2 bg-industrial-100 hover:bg-industrial-200 text-industrial-700 rounded-lg transition-colors"
              title="Lihat Detail Spesifikasi"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>

    </div>
  );
}
