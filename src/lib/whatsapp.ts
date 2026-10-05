import { InquiryItem, Product, QuotationRequest } from '@/types';

export const HG_TECH_PHONE = '6281234567890'; // Representative WhatsApp Business number for Surabaya
export const HG_TECH_DISPLAY_PHONE = '+62 812-3456-7890';
export const HG_TECH_EMAIL = 'sales@hgtech.co.id';
export const HG_TECH_ADDRESS = 'Jl. Dupak Rukun Industrial Estate No. 45, Krembangan, Surabaya, Jawa Timur 60179';
export const HG_TECH_SHOPEE_URL = 'https://shopee.co.id/hgtech_surabaya';

/**
 * Encodes text and creates wa.me link
 */
export function getWhatsAppUrl(text: string, phone: string = HG_TECH_PHONE): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(text.trim())}`;
}

/**
 * Message for specific product inquiry
 */
export function getProductInquiryUrl(product: Product): string {
  const message = `Halo HG TECH, saya ingin menanyakan ketersediaan dan spesifikasi produk:
• Produk: ${product.name}
• SKU: ${product.sku}
• Kategori: ${product.category}
• Harga/Status: ${product.price ? `Rp ${product.price.toLocaleString('id-ID')}` : 'Perlu Penawaran'}

Apakah barang ini ready stock di Surabaya? Mohon informasinya. Terima kasih.`;
  return getWhatsAppUrl(message);
}

/**
 * Message for unknown product with photo upload intent
 */
export function getPhotoInquiryUrl(): string {
  const message = `Halo HG TECH, saya ingin mencari produk alat teknik/industrial.
Saya belum yakin nama atau kodenya, saya akan mengirimkan foto dan spesifikasi fisik barang yang saya butuhkan. Mohon dibantu pengecekannya. Terima kasih.`;
  return getWhatsAppUrl(message);
}

/**
 * Message for general sales / procurement assistance
 */
export function getGeneralSalesUrl(topic?: string): string {
  const message = topic 
    ? `Halo Tim Sales HG TECH, saya ingin berkonsultasi mengenai ${topic}. Mohon bantuan informasi ketersediaan barang dan penawaran.`
    : `Halo Tim Sales HG TECH, saya membutuhkan bantuan informasi produk dan penawaran kebutuhan alat teknik industri.`;
  return getWhatsAppUrl(message);
}

/**
 * Message for full quotation / inquiry list
 */
export function getQuotationWhatsAppUrl(quotation: Partial<QuotationRequest>): string {
  const itemList = quotation.items && quotation.items.length > 0
    ? quotation.items.map((item, idx) => {
        const p = item.product;
        return `${idx + 1}. ${p.name} (SKU: ${p.sku}) — ${item.quantity} ${p.unit}${item.notes ? ` [Catatan: ${item.notes}]` : ''}`;
      }).join('\n')
    : '- (Daftar produk spesifik akan disampaikan menyusul)';

  const lines = [
    'Halo Tim Sales HG TECH,',
    'Saya ingin mengajukan Permintaan Penawaran Harga (Request Quotation) resmi:',
    '',
    `• Nama PIC: ${quotation.fullName || '-'}`,
    quotation.companyName ? `• Perusahaan: ${quotation.companyName}` : '',
    `• Kontak WA: ${quotation.whatsapp || '-'}`,
    quotation.email ? `• Email: ${quotation.email}` : '',
    quotation.city ? `• Kota Pengiriman: ${quotation.city}` : '',
    quotation.needsTaxInvoice ? '• Faktur Pajak (PPN): Ya, membutuhkan faktur pajak' : '',
    '',
    'DAFTAR KEBUTUHAN BARANG:',
    itemList,
    '',
    quotation.notes ? `Catatan Tambahan: ${quotation.notes}\n` : '',
    'Mohon kirimkan surat penawaran resmi beserta estimasi waktu pengiriman ke Surabaya/lokasi kami. Terima kasih.'
  ].filter(line => line !== '');

  return getWhatsAppUrl(lines.join('\n'));
}

/**
 * Message for quick cart inquiry
 */
export function getQuickCartWhatsAppUrl(items: InquiryItem[]): string {
  const itemList = items.map((item, idx) => {
    return `${idx + 1}. ${item.product.name} (SKU: ${item.product.sku}) — ${item.quantity} ${item.product.unit}`;
  }).join('\n');

  const text = `Halo Tim Sales HG TECH Surabaya, saya ingin menanyakan stok dan harga untuk daftar kebutuhan berikut:

${itemList}

Mohon informasi ketersediaan barang dan penawaran harga terbaik. Terima kasih.`;

  return getWhatsAppUrl(text);
}
