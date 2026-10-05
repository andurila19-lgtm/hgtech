import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/common/FloatingWhatsApp';
import InquiryDrawer from '@/components/product/InquiryDrawer';
import { InquiryProvider } from '@/context/InquiryContext';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'HG TECH — Supplier Alat Teknik & Industrial Equipment Surabaya',
  description: 'Supplier resmi peralatan teknik, power tools, hand tools, alat ukur presisi, APD keselamatan, dan industrial equipment di Surabaya. Melayani kebutuhan retail, bengkel, kontraktor, dan pengadaan B2B perusahaan dengan faktur pajak.',
  keywords: [
    'supplier alat teknik surabaya',
    'toko alat teknik surabaya',
    'alat teknik surabaya',
    'supplier alat industri surabaya',
    'perkakas bengkel surabaya',
    'baut baja surabaya',
    'bearing surabaya',
    'power tools surabaya',
    'pengadaan b2b surabaya'
  ],
  authors: [{ name: 'HG TECH Surabaya' }],
  openGraph: {
    title: 'HG TECH — Supplier Alat Teknik & Kebutuhan Industri Surabaya',
    description: 'Katalog lengkap alat teknik dan industrial equipment Surabaya. Ready stock, melayani PO perusahaan, faktur pajak resmi, dan konsultasi spesifikasi via WhatsApp.',
    type: 'website',
    locale: 'id_ID',
    siteName: 'HG TECH',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable}`}>
      <body className="flex flex-col min-h-screen bg-industrial-50 text-industrial-900 font-sans">
        <InquiryProvider>
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
          <InquiryDrawer />
        </InquiryProvider>
      </body>
    </html>
  );
}
