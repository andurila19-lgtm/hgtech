'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, 
  ShoppingCart, 
  MessageSquare, 
  Menu, 
  X, 
  ChevronRight,
  PhoneCall,
  ShieldCheck,
  PackageCheck
} from 'lucide-react';
import { useInquiry } from '@/context/InquiryContext';
import { getGeneralSalesUrl, HG_TECH_DISPLAY_PHONE } from '@/lib/whatsapp';

export default function Navbar() {
  const pathname = usePathname();
  const { totalItems, openDrawer } = useInquiry();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Beranda', href: '/' },
    { label: 'Katalog Produk', href: '/produk' },
    { label: 'Kategori', href: '/kategori' },
    { label: 'Layanan B2B', href: '/layanan' },
    { label: 'Tentang Kami', href: '/tentang-kami' },
    { label: 'Kontak', href: '/kontak' },
  ];

  const isHome = pathname === '/';

  return (
    <>
      {/* Fixed Full-Width Header: Transparent over Hero on Home, Frosted Dark on Scroll & Inner Pages */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 text-white ${
          isHome && !isScrolled 
            ? 'bg-transparent border-b border-white/10' 
            : 'bg-[#070b14]/95 backdrop-blur-md shadow-lg border-b border-industrial-800'
        }`}
      >
        {/* Top Announcement Bar */}
        <div className={`text-[11px] py-1 px-4 border-b transition-colors ${
          isHome && !isScrolled 
            ? 'bg-[#070b14]/40 border-white/10 text-industrial-300' 
            : 'bg-black/40 border-industrial-800/80 text-industrial-300'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-industrial-200">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                Gudang Surabaya: Ready Stock &amp; Siap Kirim
              </span>
              <span className="hidden md:inline-block text-industrial-700">|</span>
              <span className="hidden md:inline-flex items-center gap-1 text-industrial-400">
                <ShieldCheck className="w-3 h-3 text-brand-400" />
                PO Perusahaan &amp; Faktur Pajak Resmi (PPN 11%)
              </span>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <Link 
                href="https://shopee.co.id/hgtech_surabaya" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-industrial-400 hover:text-white transition-colors"
              >
                Shopee
              </Link>
              <span className="text-industrial-700">|</span>
              <a 
                href={getGeneralSalesUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-brand-400 hover:text-brand-300 font-semibold flex items-center gap-1"
              >
                <PhoneCall className="w-3 h-3" />
                <span>Hotline SBY: {HG_TECH_DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo Brand: Compact & Sharp */}
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none">
              <div className="w-8 h-8 sm:w-9 sm:h-9 bg-brand-600 flex items-center justify-center rounded-md font-black text-white text-base tracking-wider shadow-sm border border-brand-400/40">
                HG
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold text-base sm:text-lg tracking-tight text-white group-hover:text-brand-400 transition-colors">
                    HG TECH
                  </span>
                  <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-white/10 text-brand-300 border border-white/10">
                    SBY
                  </span>
                </div>
                <span className="text-[10px] text-industrial-400 font-medium tracking-wide -mt-0.5">
                  Alat Teknik &amp; Industri
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-white bg-white/20 font-bold shadow-xs'
                        : 'text-industrial-200 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Actions: Search, Daftar Barang, WhatsApp */}
            <div className="hidden sm:flex items-center gap-2">
              <Link 
                href="/produk" 
                className="p-2 text-industrial-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                title="Cari Katalog"
              >
                <Search className="w-4 h-4" />
              </Link>

              {/* Daftar Barang */}
              <button
                onClick={openDrawer}
                className="relative flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-md transition-all text-xs font-semibold"
                title="Daftar Barang & Permintaan Harga"
              >
                <ShoppingCart className="w-3.5 h-3.5 text-brand-400" />
                <span>Daftar</span>
                <span className="flex items-center justify-center px-1.5 py-0.2 text-[10px] font-bold bg-brand-600 text-white rounded-full min-w-4">
                  {totalItems}
                </span>
              </button>

              {/* Primary WhatsApp CTA */}
              <a
                href={getGeneralSalesUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-600 hover:bg-brand-500 text-white rounded-md font-bold text-xs transition-all shadow-sm active:scale-95"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>WhatsApp Sales</span>
              </a>
            </div>

            {/* Mobile menu and cart button */}
            <div className="flex sm:hidden items-center gap-2">
              <button
                onClick={openDrawer}
                className="relative p-1.5 bg-white/10 text-white rounded-md border border-white/15"
              >
                <ShoppingCart className="w-4 h-4 text-brand-400" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-600 text-white text-[9px] font-bold rounded-full w-3.5 h-3.5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 text-industrial-300 hover:text-white hover:bg-white/10 rounded-md"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-industrial-950/95 backdrop-blur-md border-b border-industrial-800 px-4 pt-2 pb-4 space-y-2 animate-in slide-in-from-top duration-200">
            <Link 
              href="/produk" 
              className="flex items-center justify-between w-full px-3 py-2 bg-industrial-900 border border-industrial-700 rounded-md text-xs text-industrial-300"
            >
              <span className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-brand-400" />
                Cari gerinda, bearing, baut, sketmat...
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-industrial-500" />
            </Link>

            <div className="space-y-0.5">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`block px-3 py-1.5 text-xs rounded font-medium ${
                      isActive 
                        ? 'bg-white/15 text-brand-400 font-bold' 
                        : 'text-industrial-200 hover:bg-white/10'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-2 border-t border-industrial-800 space-y-1.5">
              <Link
                href="/permintaan-penawaran"
                className="flex items-center justify-center gap-1.5 w-full py-2 bg-white/10 text-white rounded text-xs font-semibold border border-white/15"
              >
                <PackageCheck className="w-3.5 h-3.5 text-brand-400" />
                <span>Form Permintaan Penawaran (RFQ)</span>
              </Link>
              
              <a
                href={getGeneralSalesUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 w-full py-2 bg-brand-600 hover:bg-brand-500 text-white rounded text-xs font-semibold"
              >
                <MessageSquare className="w-3.5 h-3.5 fill-white" />
                <span>Hubungi WhatsApp Sales</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for non-home pages so page content starts cleanly below fixed header */}
      {!isHome && <div className="h-[81px] sm:h-[89px] shrink-0" aria-hidden="true" />}
    </>
  );
}
