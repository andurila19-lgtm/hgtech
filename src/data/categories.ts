import { Category } from '@/types';

export const CATEGORIES: Category[] = [
  {
    id: 'hand-tools',
    slug: 'hand-tools',
    name: 'Hand Tools',
    description: 'Peralatan mekanik tangan standar industri: kunci ring pas, kunci inggris, obeng presisi, tang hidrolik & soket berkekuatan tinggi.',
    itemCount: 48,
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Combination Wrench', 'Adjustable Wrench', 'Screwdriver Set', 'Pliers & Cutters', 'Socket & Ratchet'],
    iconName: 'Wrench'
  },
  {
    id: 'power-tools',
    slug: 'power-tools',
    name: 'Power Tools',
    description: 'Mesin perkakas elektrik & cordless bertenaga tinggi untuk fabrikasi logam, konstruksi, dan perbengkelan berat.',
    itemCount: 36,
    image: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Angle Grinder', 'Cordless Drill & Driver', 'Impact Wrench', 'Rotary Hammer', 'Bench Grinder'],
    iconName: 'Zap'
  },
  {
    id: 'measuring-tools',
    slug: 'measuring-tools',
    name: 'Measuring Tools',
    description: 'Instrumen pengukuran presisi metrologi dan quality control: jangka sorong digital (caliper), mikrometer sekrup, dial gauge & meteran baja.',
    itemCount: 24,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Digital Caliper', 'Micrometer', 'Steel Measuring Tape', 'Dial Indicator', 'Torque Wrench'],
    iconName: 'Ruler'
  },
  {
    id: 'cutting-tools',
    slug: 'cutting-tools',
    name: 'Cutting Tools',
    description: 'Batu gerinda potong ultra tipis, mata bor baja HSS-Co, mata gergaji TCT, tap & snei untuk pemotongan logam dan kayu.',
    itemCount: 42,
    image: 'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Cutting Disc', 'HSS-Co Drill Bits', 'TCT Saw Blades', 'End Mill & Tap', 'Hole Saw'],
    iconName: 'Disc'
  },
  {
    id: 'workshop-equipment',
    slug: 'workshop-equipment',
    name: 'Workshop Equipment',
    description: 'Perlengkapan bengkel dan workshop industri: ragum meja (bench vise), lemari perkakas modular, dongkrak hidrolik & hydraulic press.',
    itemCount: 19,
    image: 'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Bench Vise', 'Tool Cabinet & Trolley', 'Hydraulic Jack', 'Workshop Press', 'Pipe Bender'],
    iconName: 'Hammer'
  },
  {
    id: 'safety-equipment',
    slug: 'safety-equipment',
    name: 'Safety Equipment (APD)',
    description: 'Alat Pelindung Diri (APD) standar keselamatan kerja K3 industri: helm proyek ANSI, kacamata safety anti-fog, sarung tangan cut-resistant level 5.',
    itemCount: 28,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Safety Helmet', 'Safety Gloves', 'Safety Goggles', 'Respirator & Mask', 'Hearing Protection'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'industrial-supplies',
    slug: 'industrial-supplies',
    name: 'Industrial Supplies',
    description: 'Komponen transmisi daya dan fastener industri: bearing SKF/NSK kelas presisi, v-belt tahan panas, baut baja grade 8.8/10.9 & abrasive flap disc.',
    itemCount: 54,
    image: 'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=800&q=80',
    subcategories: ['Deep Groove Ball Bearing', 'Industrial V-Belt', 'Fastener Bolt & Nut', 'Flap Disc & Abrasive', 'Industrial Seal'],
    iconName: 'Cog'
  }
];
