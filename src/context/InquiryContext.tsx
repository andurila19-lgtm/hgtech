'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { InquiryItem, Product } from '@/types';

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (product: Product, quantity?: number, notes?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  updateNotes: (productId: string, notes: string) => void;
  clearInquiry: () => void;
  totalItems: number;
  totalEstimatedPrice: number;
  hasItem: (productId: string) => boolean;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  lastAddedProduct: Product | null;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

const STORAGE_KEY = 'hgtech_inquiry_list_v1';

export function InquiryProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<InquiryItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedProduct, setLastAddedProduct] = useState<Product | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setItems(JSON.parse(saved));
      }
    } catch (e) {
      console.error('Failed to load inquiry items from localStorage', e);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when items change
  useEffect(() => {
    if (!isInitialized) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch (e) {
      console.error('Failed to save inquiry items to localStorage', e);
    }
  }, [items, isInitialized]);

  const addItem = (product: Product, quantity = 1, notes = '') => {
    setItems((prev) => {
      const existingIndex = prev.findIndex((item) => item.product.id === product.id);
      if (existingIndex > -1) {
        const next = [...prev];
        next[existingIndex] = {
          ...next[existingIndex],
          quantity: next[existingIndex].quantity + quantity,
          notes: notes || next[existingIndex].notes,
        };
        return next;
      }
      return [...prev, { product, quantity, notes }];
    });
    setLastAddedProduct(product);
    setIsDrawerOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const updateNotes = (productId: string, notes: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, notes } : item
      )
    );
  };

  const clearInquiry = () => {
    setItems([]);
  };

  const totalItems = items.reduce((acc, curr) => acc + curr.quantity, 0);

  const totalEstimatedPrice = items.reduce((acc, curr) => {
    if (curr.product.price) {
      return acc + curr.product.price * curr.quantity;
    }
    return acc;
  }, 0);

  const hasItem = (productId: string) => {
    return items.some((item) => item.product.id === productId);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <InquiryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        updateNotes,
        clearInquiry,
        totalItems,
        totalEstimatedPrice,
        hasItem,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        lastAddedProduct,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
}

export function useInquiry() {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
}
