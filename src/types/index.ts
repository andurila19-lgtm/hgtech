export interface Product {
  id: string;
  slug: string;
  name: string;
  sku: string;
  category: string;
  categoryId: string;
  subcategory: string;
  brand: string;
  shortDescription: string;
  description: string;
  specifications: Record<string, string>;
  price: number | null; // null means "Hubungi untuk Penawaran" (for custom/heavy industrial items)
  unit: string; // "Pcs", "Set", "Box", "Roll", etc.
  images: string[];
  stockStatus: 'ready' | 'limited' | 'po';
  minOrder: number;
  featured?: boolean;
  shopeeUrl?: string;
  tags: string[];
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  itemCount: number;
  image: string;
  subcategories: string[];
  iconName: string;
}

export interface InquiryItem {
  product: Product;
  quantity: number;
  notes?: string;
}

export interface QuotationRequest {
  id?: string;
  fullName: string;
  companyName?: string;
  whatsapp: string;
  email?: string;
  city: string;
  address?: string;
  needsTaxInvoice: boolean;
  notes?: string;
  items: InquiryItem[];
  createdAt?: string;
}
