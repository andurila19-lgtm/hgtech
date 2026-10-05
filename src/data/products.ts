import { Product } from '@/types';

export const PRODUCTS: Product[] = [
  // 1. POWER TOOLS - Angle Grinder
  {
    id: 'pt-ag-100x',
    slug: 'heavy-duty-angle-grinder-4-inch-850w',
    name: 'Industrial Angle Grinder 4" (100mm) Heavy-Duty 850W',
    sku: 'PT-AG-100X',
    category: 'Power Tools',
    categoryId: 'power-tools',
    subcategory: 'Angle Grinder',
    brand: 'HG PRO-LINE',
    shortDescription: 'Mesin gerinda tangan 4 inch bertenaga 850W dengan motor tahan debu logam & armored armature untuk pemotongan dan pengamplasan intensif pabrik.',
    description: 'Industrial Angle Grinder PT-AG-100X dirancang khusus untuk kebutuhan pemotongan plat besi tebal, pengikisan hasil las, serta grinding intensif pada workshop manufaktur dan konstruksi berat. Dilengkapi fitur labyrinth dust proofing yang mencegah partikel logam masuk ke gulungan tembaga murni, switch samping ergonomis, serta pelindung percikan anti-rotasi berstandar keselamatan industri.',
    specifications: {
      'Daya Input Listrik': '850 Watt / 220V 50Hz',
      'Diameter Mata Gerinda': '100 mm (4 Inch)',
      'Kecepatan Tanpa Beban': '11.000 RPM',
      'Ukuran Spindle': 'M10 x 1.5',
      'Fitur Keamanan': 'Anti-rotation protective guard & spindle lock',
      'Tipe Motor': '100% Heavy Duty Copper Wire with Resin Armored',
      'Berat Bersih': '1.85 kg',
      'Kelengkapan': 'Cover pelindung, gagang samping getaran rendah, kunci pengencang'
    },
    price: 685000,
    unit: 'Unit',
    images: [
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/pt-ag-100x',
    tags: ['gerinda', 'gerinda tangan', 'mesin potong', 'angle grinder', 'grinding', 'batu gerinda', 'mesin las', 'power tools']
  },

  // 2. POWER TOOLS - Cordless Drill
  {
    id: 'pt-cd-18v-brushless',
    slug: 'cordless-hammer-drill-driver-18v-brushless',
    name: 'Cordless Brushless Hammer Drill 18V 65Nm Dual Battery',
    sku: 'PT-CD-18BL',
    category: 'Power Tools',
    categoryId: 'power-tools',
    subcategory: 'Cordless Drill & Driver',
    brand: 'HG PRO-LINE',
    shortDescription: 'Bor baterai brushless 18V dengan torsi 65Nm, 3 mode (bor, obeng, impact beton), dan 2 unit baterai Li-Ion 4.0Ah.',
    description: 'Mesin bor cordless tanpa sikat (Brushless Motor) memberikan efisiensi daya 40% lebih tinggi dan usia pemakaian jauh lebih panjang dibanding motor carbon brush konvensional. Cocok untuk teknisi lapangan, instalatur struktur baja ringan, serta maintenance pabrik tanpa ketergantungan kabel listrik.',
    specifications: {
      'Tegangan Baterai': '18V Li-Ion (Includes 2x 4.0Ah Pack)',
      'Torsi Maksimal': '65 Nm (21+3 Tingkat Pengaturan)',
      'Kapasitas Chuck': '13 mm (1/2") Heavy All-Metal Keyless Chuck',
      'Kecepatan 2 Tingkat': 'Low: 0-500 RPM | High: 0-1.850 RPM',
      'Laju Pukulan Impact': '0-28.000 IPM (Pengeboran Beton & Tembok)',
      'Lampu Kerja': 'Integrated High-Lumen LED Worklight',
      'Garansi': 'Garansi Resmi Service & Sparepart 6 Bulan'
    },
    price: 1450000,
    unit: 'Set',
    images: [
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/pt-cd-18bl',
    tags: ['bor', 'bor baterai', 'bor cordless', 'drill', 'brushless', 'obeng baterai', 'impact drill']
  },

  // 3. POWER TOOLS - Heavy Duty Impact Wrench
  {
    id: 'pt-iw-1000nm',
    slug: 'industrial-cordless-impact-wrench-1-2-1000nm',
    name: 'Industrial Heavy-Duty Impact Wrench 1/2" Brushless 1000Nm',
    sku: 'PT-IW-1000',
    category: 'Power Tools',
    categoryId: 'power-tools',
    subcategory: 'Impact Wrench',
    brand: 'HG PRO-LINE',
    shortDescription: 'Impact wrench torsi ekstra besar 1000Nm untuk bongkar pasang baut roda tronton, alat berat, dan konstruksi jembatan.',
    description: 'Didesain untuk melepaskan baut macet dan torsi pengencangan baut struktural baja. Menggunakan anvil baja paduan khusus tahan hentakan ekstrem berulang.',
    specifications: {
      'Torsi Pelepasan Maksimal': '1.050 Nm',
      'Torsi Pengencangan': '850 Nm',
      'Ukuran Anvil': '1/2 Inch Square Drive with Friction Ring',
      'Baterai': '2x 21V 5.0Ah High Discharge Rate',
      'Mode Kecepatan': '3 Pilihan Kecepatan Otomatis + Auto Stop Reverse',
      'Aplikasi': 'Bengkel Truk, Pabrik Karoseri, Fabrikasi Derek'
    },
    price: 2150000,
    unit: 'Set',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572981779307-38b8cabb2407?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/pt-iw-1000',
    tags: ['impact wrench', 'buka baut roda', 'kunci impact', 'cordless impact', 'alat berat']
  },

  // 4. HAND TOOLS - Combination Wrench Set
  {
    id: 'ht-cw-14pcs',
    slug: 'combination-wrench-set-8-24mm-crv-14pcs',
    name: 'Industrial Combination Wrench Set 8-24mm Chrome Vanadium (14 Pcs)',
    sku: 'HT-CW-824',
    category: 'Hand Tools',
    categoryId: 'hand-tools',
    subcategory: 'Combination Wrench',
    brand: 'MASTER-TECH',
    shortDescription: 'Set kunci ring pas 14 pcs ukuran 8mm hingga 24mm material baja tempa Cr-V dengan satin finish anti karat berstandar DIN 3113.',
    description: 'Set kunci kombinasi ring pas kelas profesional untuk mekanik industri dan bengkel otomotif. Ditempa dari baja paduan Chrome Vanadium (Cr-V) yang melalui proses heat-treatment presisi, memberikan kekuatan torsi tinggi tanpa risiko retak atau melengkung. Dilengkapi kantong gulung kanvas tebal untuk penyimpanan teratur.',
    specifications: {
      'Material': 'Drop-Forged Chrome Vanadium (Cr-V) Steel',
      'Finishing': 'Industrial Satin Finish (Anti-Slip & Anti-Karat)',
      'Standar Torsi': 'Melebihi standar DIN 3113 & ANSI B107.9M',
      'Ukuran (14 Pcs)': '8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19, 21, 22, 24 mm',
      'Desain Rahang': 'Offset 15 derajat untuk akses sudut sempit',
      'Kemasan': 'Heavy-Duty Roll Pouch dengan pengunci strap'
    },
    price: 465000,
    unit: 'Set',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/ht-cw-824',
    tags: ['kunci pas', 'kunci ring', 'ring pas', 'kunci pas set', 'wrench', 'combination wrench', 'kunci montir', 'alat bengkel']
  },

  // 5. HAND TOOLS - Heavy Duty Adjustable Wrench
  {
    id: 'ht-aw-12hd',
    slug: 'heavy-duty-adjustable-wrench-12-inch',
    name: 'Heavy-Duty Adjustable Wrench 12" (300mm) Extra Wide Jaw',
    sku: 'HT-AW-12HD',
    category: 'Hand Tools',
    categoryId: 'hand-tools',
    subcategory: 'Adjustable Wrench',
    brand: 'MASTER-TECH',
    shortDescription: 'Kunci inggris 12 inch dengan bukaan rahang ekstra lebar hingga 38mm, skala ukur laser-etched, dan grip karet anti-slip.',
    description: 'Kunci inggris berkualitas industri dengan ulir cacing presisi tinggi yang tidak mudah longgar saat digunakan menahan torsi berat pada pipa dan baut mesin besar.',
    specifications: {
      'Panjang Total': '300 mm (12 Inch)',
      'Kapasitas Bukaan Rahang': '0 - 38 mm (Extra Wide)',
      'Material': 'High-Grade Carbon Alloy Steel Drop-Forged',
      'Skala Ukur': 'Dual Metric & Inch Scale (Laser Etched)',
      'Pegangan': 'Ergonomic TPR Soft Grip tahan oli dan cairan kimia'
    },
    price: 185000,
    unit: 'Pcs',
    images: [
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/ht-aw-12hd',
    tags: ['kunci inggris', 'adjustable wrench', 'kunci pipa', 'alat mekanik', 'bengkel']
  },

  // 6. HAND TOOLS - Insulated Screwdriver Set 1000V
  {
    id: 'ht-sd-1000v',
    slug: 'vde-insulated-screwdriver-set-1000v-8pcs',
    name: 'VDE 1000V Insulated Screwdriver Set Heavy-Duty (8 Pcs)',
    sku: 'HT-SD-1000V',
    category: 'Hand Tools',
    categoryId: 'hand-tools',
    subcategory: 'Screwdriver Set',
    brand: 'SAFETY-DRIVE',
    shortDescription: 'Set obeng isolasi tegangan tinggi 1000V berstandar VDE / IEC 60900 untuk teknisi panel listrik pabrik dan gardu PLN.',
    description: 'Set obeng safety bersertifikasi IEC 60900 untuk pekerjaan kelistrikan aktif bertegangan hingga 1000V AC. Ujung mata obeng dilapisi magnetik fosfat hitam presisi tinggi.',
    specifications: {
      'Standar Keamanan': 'VDE GS & IEC 60900 Tested to 10.000V',
      'Insulasi': 'Tembus pandang ganda tahan benturan 1000V AC / 1500V DC',
      'Kelengkapan': '4x Slotted (-), 3x Phillips (+), 1x Voltage Tester Pen 250V',
      'Ujung Mata': 'S2 Tool Steel dengan Black Magnetic Tip'
    },
    price: 295000,
    unit: 'Set',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/ht-sd-1000v',
    tags: ['obeng', 'obeng listrik', 'obeng 1000v', 'obeng vde', 'screwdriver', 'alat listrik']
  },

  // 7. MEASURING TOOLS - Digital Caliper
  {
    id: 'mt-dc-150ss',
    slug: 'precision-digital-caliper-150mm-stainless-ip54',
    name: 'Precision Stainless Steel Digital Caliper 150mm (0.01mm) IP54',
    sku: 'MT-DC-150SS',
    category: 'Measuring Tools',
    categoryId: 'measuring-tools',
    subcategory: 'Digital Caliper',
    brand: 'ACCU-MEASURE',
    shortDescription: 'Jangka sorong (sketmat) digital 150mm resolusi 0.01mm berbahan stainless steel keras tahan air/debu IP54 dengan layar LCD besar.',
    description: 'Alat ukur metrologi presisi tinggi untuk inspeksi QC, pembubutan logam, cetakan molding, dan perakitan mekanis. Mendukung 4 mode pengukuran: dimensi luar (OD), dimensi dalam (ID), kedalaman lubang (depth rod), dan ketinggian berundak (step). Dilengkapi thumb roller untuk pergeseran rahang yang halus dan thumb screw pengunci.',
    specifications: {
      'Rentang Ukur': '0 - 150 mm / 0 - 6 Inch',
      'Resolusi Layar': '0.01 mm / 0.0005 Inch',
      'Akurasi Presisi': '±0.02 mm (Standar DIN 862)',
      'Proteksi Lingkungan': 'IP54 Splash Water, Oil & Dust Resistant',
      'Material Body': 'Hardened Stainless Steel dengan Satin Chrome Beam',
      'Baterai': 'CR2032 3V Lithium Cell (Auto-off feature)',
      'Fitur Tambahan': 'Zero setting di posisi mana saja, konversi mm/inch instan'
    },
    price: 385000,
    unit: 'Unit',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/mt-dc-150ss',
    tags: ['sketmat', 'jangka sorong', 'sigmat', 'digital caliper', 'alat ukur', 'vernier caliper', 'alat presisi']
  },

  // 8. MEASURING TOOLS - Outside Micrometer
  {
    id: 'mt-om-025',
    slug: 'outside-micrometer-0-25mm-carbide-tip',
    name: 'Precision Outside Micrometer 0-25mm (0.001mm) Carbide Tipped',
    sku: 'MT-OM-025',
    category: 'Measuring Tools',
    categoryId: 'measuring-tools',
    subcategory: 'Micrometer',
    brand: 'ACCU-MEASURE',
    shortDescription: 'Mikrometer sekrup 0-25mm ketelitian 0.001mm dengan ujung anvil karbida dan ratchet stop untuk pembacaan gaya konstan.',
    description: 'Instrumen standar kalibrasi workshop permesinan bubut CNC. Anvil berbahan tungsten karbida memastikan kerataan permukaan ukur tetap presisi meski dipakai bertahun-tahun.',
    specifications: {
      'Rentang Ukur': '0 - 25 mm',
      'Graduasi Skala': '0.001 mm Vernier Reading',
      'Material Anvil': 'Tungsten Carbide Faced Jaws',
      'Fitur': 'Ratchet Thimble Stop & Spindle Clamp Lock',
      'Kemasan': 'Kotak kayu pelindung dilengkapi kunci kalibrasi'
    },
    price: 320000,
    unit: 'Unit',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/mt-om-025',
    tags: ['mikrometer', 'micrometer', 'alat ukur presisi', 'alat ukur ketebalan', 'bubut']
  },

  // 9. CUTTING TOOLS - Cutting Disc Ultra Thin
  {
    id: 'ct-cd-105in',
    slug: 'ultra-thin-cutting-disc-4-inch-inox-stainless',
    name: 'Ultra-Thin Inox Cutting Disc 4" x 1.2mm Metal & Stainless (Box 50 Pcs)',
    sku: 'CT-CD-105IN',
    category: 'Cutting Tools',
    categoryId: 'cutting-tools',
    subcategory: 'Cutting Disc',
    brand: 'VORTEX-CUT',
    shortDescription: 'Batu gerinda potong super tipis 105 x 1.2 x 16mm formula Zirconia khusus stainless steel & carbon steel tanpa gosong dan minim burr.',
    description: 'Mata gerinda potong industri berkecepatan tinggi dengan formula bonding resinoid dan penguat jaring fiberglass ganda. Menghasilkan potongan super bersih pada pipa stainless, besi siku, dan hollow galvanis tanpa mengubah warna material (tidak terbakar). Bebas zat besi, belerang, dan klorin (Fe+S+Cl < 0.1%) untuk mencegah kontaminasi karat pada stainless steel.',
    specifications: {
      'Dimensi': '105 mm x 1.2 mm x 16 mm (4" x 3/64" x 5/8")',
      'Spesifikasi Butiran': 'WA 60 T BF (White Aluminum Oxide + Zirconia)',
      'Kecepatan Putaran Maksimal': '15.300 RPM (80 m/s)',
      'Aplikasi Material': 'Stainless Steel (SS304/SS316), Besi Baja, Galvanis, Besi Cor',
      'Sertifikasi Keamanan': 'EN 12413 & MPA Hannover Tested',
      'Kemasan Isi': '1 Box = 50 Keping'
    },
    price: 275000,
    unit: 'Box (50 Pcs)',
    images: [
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/ct-cd-105in',
    tags: ['batu gerinda potong', 'cutting disc', 'mata potong besi', 'mata gerinda', 'inox', 'stainless steel', 'gerinda potong']
  },

  // 10. CUTTING TOOLS - HSS-Co Drill Bit Set
  {
    id: 'ct-db-19co',
    slug: 'hss-co5-cobalt-metal-drill-bit-set-1-10mm-19pcs',
    name: 'HSS-Co 5% Cobalt Heavy Metal Drill Bit Set 1-10mm (19 Pcs)',
    sku: 'CT-DB-19CO',
    category: 'Cutting Tools',
    categoryId: 'cutting-tools',
    subcategory: 'HSS-Co Drill Bits',
    brand: 'VORTEX-CUT',
    shortDescription: 'Set mata bor besi baja keras HSS Cobalt 5% (M35) ukuran 1mm - 10mm dengan ujung 135° split point tahan panas ekstrem.',
    description: 'Set mata bor industri untuk mengebor material berkekuatan tarik tinggi seperti baja tahan karat (stainless steel), besi cor, dan baja perkakas. Ujung mata potong 135 derajat split point tidak bergeser (self-centering) saat awal pengeboran.',
    specifications: {
      'Material Inti': 'High Speed Steel Cobalt 5% (M35 Alloy)',
      'Kekerasan Material': '65 - 67 HRC (Heat Resistance up to 600°C)',
      'Sudut Ujung': '135° Split Point DIN 1412C',
      'Ukuran (19 Pcs)': '1.0 mm hingga 10.0 mm (Step kelipatan 0.5 mm)',
      'Standar Produksi': 'DIN 338 Fully Ground',
      'Kemasan': 'Kotak Metal Box kokoh bersekat ukuran'
    },
    price: 490000,
    unit: 'Set',
    images: [
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/ct-db-19co',
    tags: ['mata bor', 'mata bor besi', 'mata bor stainless', 'drill bit', 'mata bor cobalt', 'hss cobalt', 'mata bor set']
  },

  // 11. WORKSHOP EQUIPMENT - Heavy Duty Bench Vise
  {
    id: 'we-bv-150hd',
    slug: 'heavy-duty-swivel-base-bench-vise-6-inch',
    name: 'Industrial Forged Steel Bench Vise 6" (150mm) with 360° Swivel Base',
    sku: 'WE-BV-150HD',
    category: 'Workshop Equipment',
    categoryId: 'workshop-equipment',
    subcategory: 'Bench Vise',
    brand: 'TITAN-FORGE',
    shortDescription: 'Ragum meja bengkel 6 inch (150mm) baja tempa padat berkekuatan jepit 45 kN dengan landasan anvil dan dudukan putar 360 derajat.',
    description: 'Ragum meja kelas berat untuk bengkel bubut, fabrikasi struktur, dan perbengkelan alat berat. Dibuat dari baja tempa berkekuatan 60.000 PSI (bukan besi cor rapuh), menjamin ketahanan terhadap hantaman godam dan tekanan jepit ekstrem. Dilengkapi rahang bergerigi yang dapat dibalik serta rahang khusus penjepit pipa terintegrasi.',
    specifications: {
      'Lebar Rahang (Jaw Width)': '150 mm (6 Inch)',
      'Kapasitas Bukaan Maksimal': '175 mm',
      'Kedalaman Tenggorokan': '95 mm',
      'Kekuatan Penjepitan': 'Hingga 4.500 kg (45 kN)',
      'Konstruksi Material': 'Drop-Forged 60.000 PSI Ductile Steel',
      'Dudukan': '360° Rotating Base dengan Dual Locking Levers',
      'Berat Bersih': '22.5 kg',
      'Aplikasi': 'Workshop Fabrikasi Logam, Bengkel Mesin Industri, Galangan'
    },
    price: 1850000,
    unit: 'Unit',
    images: [
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/we-bv-150hd',
    tags: ['ragum', 'ragum meja', 'catok meja', 'bench vise', 'catok besi', 'alat bengkel', 'workshop']
  },

  // 12. WORKSHOP EQUIPMENT - Modular Tool Cabinet (Heavy Industrial - Price on Quotation)
  {
    id: 'we-tc-7drawer',
    slug: 'industrial-modular-roller-tool-cabinet-7-drawers',
    name: 'Heavy-Duty Industrial Roller Tool Cabinet 7-Drawer with Central Lock',
    sku: 'WE-TC-7DR',
    category: 'Workshop Equipment',
    categoryId: 'workshop-equipment',
    subcategory: 'Tool Cabinet & Trolley',
    brand: 'TITAN-FORGE',
    shortDescription: 'Lemari perkakas dorong industri 7 laci dengan rel bantalan bola (ball-bearing slide), roda heavy duty 5" berkunci, dan top mat anti gores.',
    description: 'Solusi penyimpanan terorganisir untuk maintenance division pabrik dan bengkel modern. Seluruh laci dilengkapi sistem interlocking sentral guna mencegah laci terbuka bersamaan saat ditarik di area workshop yang miring.',
    specifications: {
      'Dimensi Keseluruhan': '680 x 460 x 1000 mm (Termasuk Roda)',
      'Kapasitas Beban Total': '450 kg',
      'Rel Laci': 'Heavy Duty Full Extension Ball Bearing (45 kg/laci)',
      'Material Lemari': 'Cold Rolled Steel 1.2mm dengan Powder Coating Tahan Gores',
      'Roda': '4x Industrial Caster 5" TPR (2 Fixed, 2 Swivel with Brake)',
      'Sistem Kunci': 'Centralized Tubular Cylinder Lock (Includes 2 Keys)'
    },
    price: null, // "Hubungi untuk Penawaran"
    unit: 'Unit',
    images: [
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    tags: ['tool cabinet', 'lemari perkakas', 'troli alat bengkel', 'tool trolley', 'kotak kunci', 'workshop equipment']
  },

  // 13. WORKSHOP EQUIPMENT - Hydraulic Floor Jack
  {
    id: 'we-hj-3ton',
    slug: 'low-profile-hydraulic-floor-jack-3-ton-dual-pump',
    name: 'Industrial Low-Profile Hydraulic Floor Jack 3-Ton Dual Pump Quick-Lift',
    sku: 'WE-HJ-3TON',
    category: 'Workshop Equipment',
    categoryId: 'workshop-equipment',
    subcategory: 'Hydraulic Jack',
    brand: 'TITAN-FORGE',
    shortDescription: 'Dongkrak buaya hidrolik 3 ton desain rendah (low profile 75mm) dengan sistem pompa ganda (rapid dual piston pump).',
    description: 'Dongkrak hidrolik lantai bodi baja kokoh untuk armada truk logistik, forklift pabrik, dan bengkel servis kendaraan komersial Surabaya.',
    specifications: {
      'Kapasitas Angkat': '3.000 kg (3 Ton)',
      'Tinggi Minimal (Low Profile)': '75 mm',
      'Tinggi Angkat Maksimal': '505 mm',
      'Sistem Pompa': 'Dual Hydraulic Piston (Naik penuh dalam 5-6 pompaan)',
      'Sistem Pengaman': 'Bypass Valve Overload Protection',
      'Berat Bersih': '34 kg'
    },
    price: 1350000,
    unit: 'Unit',
    images: [
      'https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/we-hj-3ton',
    tags: ['dongkrak', 'dongkrak buaya', 'hydraulic jack', 'floor jack', 'alat bengkel', 'alat hidrolik']
  },

  // 14. SAFETY EQUIPMENT - Safety Helmet
  {
    id: 'se-hl-vg01',
    slug: 'industrial-safety-helmet-v-gard-ansi-z89-fastrak',
    name: 'Industrial Safety Helmet V-Gard Type 1 Class E with Fas-Trac Ratchet',
    sku: 'SE-HL-VG01',
    category: 'Safety Equipment (APD)',
    categoryId: 'safety-equipment',
    subcategory: 'Safety Helmet',
    brand: 'ARMOR-SAFE',
    shortDescription: 'Helm proyek standar ANSI Z89.1 Class E (tahan tegangan hingga 20.000V) dengan suspensi Fas-Trac 4 titik dan tali dagu.',
    description: 'Helm pelindung kepala standar industri petrokimia, konstruksi tinggi, dan operasional pabrik. Desain lekuk V legendaris mendistribusikan energi benturan benda jatuh dari atas secara merata. Dilengkapi lubang slot samping untuk pemasangan earmuff dan pelindung wajah (face shield).',
    specifications: {
      'Standar Regulasi': 'ANSI / ISEA Z89.1-2014 Type 1, Class E & SNI ISO 3873',
      'Ketahanan Dielektrik': 'Hingga 20.000 Volt AC',
      'Material Batok (Shell)': 'High-Density Polyethylene (HDPE) UV-Stabilized',
      'Sistem Suspensi': 'Fas-Trac III Ratchet Suspension (Putar cepat ukuran kepala)',
      'Pilihan Warna Ready': 'Putih (Engineering/Tamu), Kuning (Operator), Biru (Mekanik), Merah (Safety/K3)',
      'Kelengkapan': 'Termasuk tali dagu elastis & sweatband antibakteri'
    },
    price: 125000,
    unit: 'Pcs',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/se-hl-vg01',
    tags: ['helm proyek', 'helm safety', 'safety helmet', 'apd', 'v-gard', 'k3', 'proyek surabaya']
  },

  // 15. SAFETY EQUIPMENT - Cut Resistant Gloves Level 5
  {
    id: 'se-gl-cut5',
    slug: 'cut-resistant-safety-gloves-level-5-pu-coated',
    name: 'High-Dexterity Cut-Resistant Gloves EN388 Level 5 PU Coated (Pairs)',
    sku: 'SE-GL-CUT5',
    category: 'Safety Equipment (APD)',
    categoryId: 'safety-equipment',
    subcategory: 'Safety Gloves',
    brand: 'ARMOR-SAFE',
    shortDescription: 'Sarung tangan anti-sayat level 5 serat HPPE ultra kuat dengan lapisan Polyurethane tipis untuk penanganan plat besi tajam dan kaca.',
    description: 'Melindungi tangan teknisi dari cedera sayatan tajam serpihan besi, plat seng, dan pisau pemotong. Lapisan PU pada telapak tangan memberikan daya cengkeram kuat terhadap komponen berminyak tanpa mengurangi sensasi sentuhan jari.',
    specifications: {
      'Standar Sertifikasi': 'EN 388:2016 Level 4X43D (Cut Level 5/D)',
      'Material Anyaman': '13-Gauge High Performance Polyethylene (HPPE) & Glass Fiber',
      'Coating Telapak': 'Micro-Foam Polyurethane (Breathable & Oil Resistant)',
      'Ukuran': 'Size M (8), L (9), XL (10)',
      'Aplikasi': 'Fabrikasi Plat Besi, Perakitan Otomotif, Industri Kaca & Logam'
    },
    price: 45000,
    unit: 'Pasang',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 2,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/se-gl-cut5',
    tags: ['sarung tangan safety', 'sarung tangan anti sayat', 'cut resistant gloves', 'apd', 'sarung tangan kerja']
  },

  // 16. INDUSTRIAL SUPPLIES - Deep Groove Ball Bearing
  {
    id: 'is-br-6205rs',
    slug: 'deep-groove-ball-bearing-6205-2rs-c3-high-speed',
    name: 'Precision Deep Groove Ball Bearing 6205-2RS C3 High-Speed',
    sku: 'IS-BR-6205RS',
    category: 'Industrial Supplies',
    categoryId: 'industrial-supplies',
    subcategory: 'Deep Groove Ball Bearing',
    brand: 'KAIZEN PRECISION',
    shortDescription: 'Bantalan bearing bola 6205 segel karet ganda (2RS) celah radial C3 untuk motor listrik, gearbox industri, dan pompa air pabrik.',
    description: 'Bearing bola alur dalam presisi standar industri internasional. Dilengkapi seal karet sintetis tahan oli NBR pada kedua sisi (2RS) guna mencegah masuknya debu kotoran dan mempertahankan pelumas gemuk lithium temperatur tinggi (-30°C hingga +120°C). Celah clearance C3 memberikan kelonggaran ekspansi panas optimal saat motor berputar pada kecepatan kontinu.',
    specifications: {
      'Nomor Bearing': '6205-2RS (Juga tersedia tipe 6205-ZZ pelat besi)',
      'Dimensi Utama': 'd (As): 25 mm | D (Luar): 52 mm | B (Tebal): 15 mm',
      'Tipe Penutup': '2RS (Double Synthetic Rubber Lip Seals)',
      'Clearance Internal': 'C3 (Optimal untuk Dinamo & Suhu Operasi Tinggi)',
      'Beban Dinamis (Cr)': '14.8 kN',
      'Beban Statis (Cor)': '7.8 kN',
      'Batas Kecepatan': '9.000 RPM (Grease Lubricated)',
      'Material': 'Baja Krom Berkualitas Tinggi High-Carbon Chromium Steel (GCr15)'
    },
    price: 62000,
    unit: 'Pcs',
    images: [
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: true,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/is-br-6205rs',
    tags: ['bearing', 'laher', 'laker', 'klaher', 'bantalan roda', 'ball bearing', 'bearing dinamo', '6205', 'bearing 6205']
  },

  // 17. INDUSTRIAL SUPPLIES - Industrial V-Belt Heavy Duty
  {
    id: 'is-vb-b52',
    slug: 'industrial-power-transmission-v-belt-b52-oil-heat-resistant',
    name: 'Industrial Classical Wrapped V-Belt Type B-52 Anti-Static & Heat Resistant',
    sku: 'IS-VB-B52',
    category: 'Industrial Supplies',
    categoryId: 'industrial-supplies',
    subcategory: 'Industrial V-Belt',
    brand: 'KAIZEN PRECISION',
    shortDescription: 'Tali sabuk v-belt industri tipe B ukuran 52 inch tahan panas, oli, dan anti-statis standar ISO 4184 untuk transmisi motor pabrik.',
    description: 'Sabuk transmisi daya trapesium untuk kompresor industri, blower pabrik, konveyor, dan mesin penggiling. Diperkuat dengan benang poliester berkekuatan tarik tinggi yang meminimalkan elongasi regangan.',
    specifications: {
      'Tipe Profil': 'Klasik Profil B (Top Width: 17 mm | Thickness: 11 mm)',
      'Panjang Nominal': '52 Inch (1.320 mm pitch length)',
      'Karakteristik Senyawa': 'Heat & Oil Resistant, Anti-Static Conductive (ISO 1813)',
      'Material Inti': 'Tension Member Polyester Cord + Polychloroprene Rubber',
      'Suhu Kerja': '-30°C hingga +80°C'
    },
    price: 78000,
    unit: 'Pcs',
    images: [
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/is-vb-b52',
    tags: ['v-belt', 'vbelt', 'tali kipas', 'fan belt', 'sabuk transmisi', 'karet kompresor', 'sabuk dinamo']
  },

  // 18. INDUSTRIAL SUPPLIES - High Tensile Hex Bolt Grade 8.8 (Bulk Custom Quotation)
  {
    id: 'is-bl-m12',
    slug: 'high-tensile-hex-head-bolt-grade-8-8-m12x50-zinc-plated',
    name: 'High-Tensile Hex Head Bolt Grade 8.8 M12 x 50mm Full Thread (Box/Bulk)',
    sku: 'IS-BL-M1250',
    category: 'Industrial Supplies',
    categoryId: 'industrial-supplies',
    subcategory: 'Fastener Bolt & Nut',
    brand: 'KAIZEN PRECISION',
    shortDescription: 'Baut baja keras kepala segi enam grade 8.8 ukuran diameter M12 panjang 50mm lapisan zinc plated anti korosi standar DIN 933.',
    description: 'Baut struktural berkekuatan tarik minimum 800 N/mm² untuk perakitan mesin, instalasi struktur baja gudang, dan flens pipa industri. Melayani pesanan partai besar (per pack/box) dengan sertifikat material.',
    specifications: {
      'Diameter & Pitch Ulir': 'M12 (Pitch 1.75 mm Standard Metric)',
      'Panjang Batang': '50 mm (Full Threaded DIN 933)',
      'Tingkat Kekuatan (Grade)': 'Baja Keras Grade 8.8 (Medium Carbon Steel Quenched & Tempered)',
      'Lapisan Permukaan': 'White Zinc Plated (Electro-Galvanized)',
      'Kunci Kepala': '19 mm Hex Key Size',
      'Kemasan Default': 'Box isi 50 Pcs (Tersedia opsi karung/bulk industri)'
    },
    price: 195000, // per box 50 pcs
    unit: 'Box (50 Pcs)',
    images: [
      'https://images.unsplash.com/photo-1580983218765-f663bec07b37?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    tags: ['baut', 'baut baja', 'baut 8.8', 'hex bolt', 'mur baut', 'baut m12', 'fastener', 'baut mesin']
  },

  // 19. INDUSTRIAL SUPPLIES - Flap Disc Zirconia
  {
    id: 'is-fd-z60',
    slug: 'zirconia-abrasive-flap-disc-4-inch-grit-60-heavy-grinding',
    name: 'Zirconia High-Performance Flap Disc 4" Grit #60 for Metal & SS (Box 10 Pcs)',
    sku: 'IS-FD-Z60',
    category: 'Industrial Supplies',
    categoryId: 'industrial-supplies',
    subcategory: 'Flap Disc & Abrasive',
    brand: 'VORTEX-CUT',
    shortDescription: 'Amplas susun mata gerinda 4 inch grit 60 berbahan Zirconia Alumina self-sharpening untuk penghalusan sambungan las dan deburring logam keras.',
    description: 'Flap disc abrasive berperforma tinggi dengan backing plate fiberglass tebal. Butiran abrasive zirconia alumina meregenerasi ketajaman sendiri saat terkikis, menghasilkan laju pengikisan 3 kali lebih cepat dan daya tahan 4 kali lebih lama dari amplas aluminium oxide biasa.',
    specifications: {
      'Diameter Luar': '100 mm (4 Inch)',
      'Lubang As': '16 mm (Pas gerinda tangan standar)',
      'Ukuran Butiran (Grit)': '#60 (Intermediate Stock Removal & Finishing)',
      'Bahan Abrasive': 'Zirconia Alumina Cloth Flaps',
      'Maksimal RPM': '13.300 RPM',
      'Kemasan': '1 Box = 10 Pcs'
    },
    price: 135000,
    unit: 'Box (10 Pcs)',
    images: [
      'https://images.unsplash.com/photo-1530124566582-a618bc2615dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/is-fd-z60',
    tags: ['amplas susun', 'flap disc', 'mata amplas gerinda', 'amplas gerinda', 'zirconia', 'penghalus las']
  },

  // 20. SAFETY EQUIPMENT - Anti-Fog Safety Goggles
  {
    id: 'se-gg-uv400',
    slug: 'panoramic-anti-fog-safety-goggles-en166-uv400',
    name: 'Panoramic Wide-Vision Safety Goggles Anti-Fog & Scratch Resistant UV400',
    sku: 'SE-GG-UV400',
    category: 'Safety Equipment (APD)',
    categoryId: 'safety-equipment',
    subcategory: 'Safety Goggles',
    brand: 'ARMOR-SAFE',
    shortDescription: 'Kacamata pelindung goggle lensa polikarbonat pandangan luas dengan ventilasi tidak langsung (indirect vent) anti-embun dan tahan percikan kimia.',
    description: 'Dirancang untuk kenyamanan pemakaian jangka panjang di lingkungan berdebu gerinda, percikan cairan kimia, dan percikan serpihan logam panas. Dapat digunakan bersama kacamata minus/resep (OTG - Over The Glasses).',
    specifications: {
      'Standar Keselamatan': 'ANSI Z87.1-2015 & CE EN 166 1 B T 3 4',
      'Lapisan Lensa': 'Dual-Side Anti-Fog & Anti-Scratch Hard Coating',
      'Proteksi Sinar': '99.9% UV400 Protection',
      'Frame & Ventilasi': 'Soft PVC Frame dengan 4 katup ventilasi tidak langsung',
      'Strap Ikat': 'Wide Elastic Headband Adjustable'
    },
    price: 65000,
    unit: 'Pcs',
    images: [
      'https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80'
    ],
    stockStatus: 'ready',
    minOrder: 1,
    featured: false,
    shopeeUrl: 'https://shopee.co.id/hgtech_surabaya/se-gg-uv400',
    tags: ['kacamata safety', 'safety goggles', 'kacamata las', 'kacamata gerinda', 'apd', 'anti fog', 'k3']
  }
];
