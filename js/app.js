/**
 * ChromaCam.art - Promo Website Interactive Simulator Script
 */

// 12 Representative Non-Branded Film Stocks Data
const filmStocksData = [
  {
    id: 'amber-gold-200',
    name: 'Amber Gold 200',
    originalBrand: 'Kodak Gold 200',
    category: 'color_negative',
    categoryLabel: 'Color Negative',
    iso: 200,
    tier: 'free',
    badgeClass: 'badge-free',
    filterClass: 'filter-amber-gold-200',
    halation: 'Soft Orange',
    descriptionNote: 'Warm, nostalgic daylight film stock with rich golden amber highlights, honey-yellow midtones, and gentle organic silver grain. Perfect for sunlit street scenes, golden hour portraits, and timeless everyday snapshots.'
  },
  {
    id: 'pastel-portrait-400',
    name: 'Pastel Portrait 400',
    originalBrand: 'Kodak Portra 400',
    category: 'color_negative',
    categoryLabel: 'Color Negative',
    iso: 400,
    tier: 'free',
    badgeClass: 'badge-free',
    filterClass: 'filter-pastel-portrait-400',
    halation: 'Subtle Red',
    descriptionNote: 'Industry-standard portrait emulsion featuring flattering natural skin tones, smooth micro-contrast, low-saturation pastel colors, and forgiving highlight roll-off across all natural lighting conditions.'
  },
  {
    id: 'gritty-noir-400',
    name: 'Gritty Noir 400',
    originalBrand: 'Kodak Tri-X 400',
    category: 'monochrome',
    categoryLabel: 'Monochrome',
    iso: 400,
    tier: 'free',
    badgeClass: 'badge-free',
    filterClass: 'filter-gritty-noir-400',
    halation: 'None',
    descriptionNote: 'Iconic street photography black-and-white stock offering punchy contrast, deep shadow blacks, silver halide highlight glow, crisp micro-sharpness, and expressive silver grain.'
  },
  {
    id: 'neutral-slide-100',
    name: 'Neutral Slide 100',
    originalBrand: 'Kodak Ektachrome E100',
    category: 'slide_reversal',
    categoryLabel: 'Slide Reversal',
    iso: 100,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-neutral-slide-100',
    halation: 'None',
    descriptionNote: 'Precision daylight E-6 color reversal slide stock featuring clean neutral tones, ultra-fine grain structure, linear color accuracy, and cool transparent shadow depth.'
  },
  {
    id: 'vivid-landscape-50',
    name: 'Vivid Landscape 50',
    originalBrand: 'Fujifilm Velvia 50',
    category: 'slide_reversal',
    categoryLabel: 'Slide Reversal',
    iso: 50,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-vivid-landscape-50',
    halation: 'None',
    descriptionNote: 'Legendary high-contrast landscape transparency profile with hyper-saturated emerald greens, vivid magenta dusk skies, steep slide tone curves, and micro-grain detail.'
  },
  {
    id: 'tungsten-halation-800',
    name: 'Tungsten Halation 800',
    originalBrand: 'CineStill 800T',
    category: 'color_negative',
    categoryLabel: 'Color Negative',
    iso: 800,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-tungsten-halation-800',
    halation: 'Fiery Red 2.8px',
    descriptionNote: 'Remjet-removed motion picture stock tuned for night shooting under artificial lighting. Delivers cool cyan shadows, warm tungsten midtones, and signature red-orange halation flares.'
  },
  {
    id: 'tonal-mono-400',
    name: 'Tonal Mono 400',
    originalBrand: 'Ilford HP5 Plus',
    category: 'monochrome',
    categoryLabel: 'Monochrome',
    iso: 400,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-tonal-mono-400',
    halation: 'None',
    descriptionNote: 'Versatile British monochrome emulsion with broad exposure latitude, silky midtone gradations, forgiving contrast curves, and classic medium grain texture.'
  },
  {
    id: 'emerald-peach-400',
    name: 'Emerald Peach 400',
    originalBrand: 'Fujifilm Superia 400',
    category: 'color_negative',
    categoryLabel: 'Color Negative',
    iso: 400,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-emerald-peach-400',
    halation: 'Soft Peach',
    descriptionNote: '4th-color-layer negative formula rendering distinct emerald shadow tints, vibrant turquoise sky hues, and soft peach skin tones under mixed daylight and fluorescent lighting.'
  },
  {
    id: 'party-flash-800',
    name: 'Party Flash 800',
    originalBrand: 'Kodak FunSaver 800',
    category: 'color_negative',
    categoryLabel: 'Color Negative',
    iso: 800,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-party-flash-800',
    halation: 'Amber Flare',
    descriptionNote: 'High-speed disposable camera aesthetic engineered for direct flash shots, punchy midtone contrast, vintage vignetting, and candid party snapshot warmth.'
  },
  {
    id: 'crimson-infrared-400',
    name: 'Crimson Infrared 400',
    originalBrand: 'Kodak Aerochrome IR',
    category: 'slide_reversal',
    categoryLabel: 'Slide Reversal',
    iso: 400,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-crimson-infrared-400',
    halation: 'Crimson Bloom 2.2px',
    descriptionNote: 'Surreal false-color infrared transparency stock that transforms foliage and midtone greens into vibrant crimson red and hot magenta with glowing highlight contrast.'
  },
  {
    id: 'instant-pastel-600',
    name: 'Instant Pastel 600',
    originalBrand: 'Polaroid 600',
    category: 'color_negative',
    categoryLabel: 'Color Instant',
    iso: 640,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-instant-pastel-600',
    halation: 'Soft Orange',
    descriptionNote: 'Instant square film emulation featuring lifted creamy blacks, warm vintage split-toning, soft pastel highlights, and nostalgic analog mood.'
  },
  {
    id: 'deep-infrared-mono-200',
    name: 'Deep Infrared Mono 200',
    originalBrand: 'Ilford SFX 200',
    category: 'monochrome',
    categoryLabel: 'Monochrome IR',
    iso: 200,
    tier: 'pro',
    badgeClass: 'badge-pro',
    filterClass: 'filter-deep-infrared-mono-200',
    halation: 'White Glow',
    descriptionNote: 'Extended-red 740nm near-infrared monochrome film producing pitch-black skies, glowing ethereal white foliage (Wood effect), and striking high-contrast skin tones.'
  }
];

// Current State
let activeStock = filmStocksData[0]; // Amber Gold 200
let activeAspect = '3:2';
let isZebraOn = false;
let isLeakOn = false;
let isDateOn = true;
let isSuper8On = false;

document.addEventListener('DOMContentLoaded', () => {
  renderStockCards('all');
  initViewfinderEvents();
  initCategoryFilters();
  updateViewfinderState();
  
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }
});

// Render Film Stock Cards Grid
function renderStockCards(filterCategory) {
  const grid = document.getElementById('stocks-grid');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  const filtered = filmStocksData.filter(stock => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'free') return stock.tier === 'free';
    if (filterCategory === 'pro') return stock.tier === 'pro';
    return stock.category === filterCategory;
  });
  
  filtered.forEach(stock => {
    const card = document.createElement('div');
    card.className = `stock-card ${stock.id === activeStock.id ? 'active-stock' : ''}`;
    card.setAttribute('data-id', stock.id);
    
    card.innerHTML = `
      <div class="flex items-center justify-between mb-3">
        <span class="badge ${stock.badgeClass}">${stock.tier === 'free' ? 'FREE CORE' : 'PRO+'}</span>
        <span class="font-mono-code text-xs text-amber-500 font-semibold">ISO ${stock.iso}</span>
      </div>
      <h3 class="text-xl font-bold mb-1 text-white flex items-center gap-2">
        ${stock.name}
      </h3>
      <p class="text-xs text-gray-400 font-mono-code mb-3">
        Category: ${stock.categoryLabel} ${stock.halation !== 'None' ? `• Halation: ${stock.halation}` : ''}
      </p>
      <p class="text-sm text-gray-300 leading-relaxed mb-4">
        ${stock.descriptionNote}
      </p>
      <div class="pt-3 border-t border-gray-800 flex items-center justify-between">
        <span class="text-xs text-gray-400 font-mono-code">Tap to test live profile</span>
        <button class="text-xs font-semibold text-amber-500 hover:text-amber-400 transition-colors flex items-center gap-1">
          Apply Tone Curve →
        </button>
      </div>
    `;
    
    card.addEventListener('click', () => {
      selectStock(stock.id);
    });
    
    grid.appendChild(card);
  });
}

// Category Filter Tabs
function initCategoryFilters() {
  const filterBtns = document.querySelectorAll('.filter-tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('bg-amber-500', 'text-black', 'font-bold');
        b.classList.add('bg-gray-800', 'text-gray-300');
      });
      btn.classList.remove('bg-gray-800', 'text-gray-300');
      btn.classList.add('bg-amber-500', 'text-black', 'font-bold');
      
      const cat = btn.getAttribute('data-category');
      renderStockCards(cat);
    });
  });
}

// Select Active Film Stock
function selectStock(stockId) {
  const stock = filmStocksData.find(s => s.id === stockId);
  if (!stock) return;
  
  activeStock = stock;
  
  // Highlight card
  document.querySelectorAll('.stock-card').forEach(card => {
    if (card.getAttribute('data-id') === stockId) {
      card.classList.add('active-stock');
    } else {
      card.classList.remove('active-stock');
    }
  });
  
  updateViewfinderState();
}

// Update Viewfinder Live State
function updateViewfinderState() {
  const sampleImg = document.getElementById('viewfinder-sample-img');
  const stockNameBadge = document.getElementById('vf-stock-name');
  const isoBadge = document.getElementById('vf-iso');
  const descNote = document.getElementById('vf-desc-note');
  const dateStamp = document.getElementById('vf-date-stamp');
  const container = document.getElementById('viewfinder-container');
  
  if (sampleImg) {
    // Strip old filter classes
    filmStocksData.forEach(s => sampleImg.classList.remove(s.filterClass));
    // Add active filter class
    sampleImg.classList.add(activeStock.filterClass);
  }
  
  if (stockNameBadge) stockNameBadge.textContent = activeStock.name;
  if (isoBadge) isoBadge.textContent = `ISO ${activeStock.iso}`;
  if (descNote) descNote.textContent = activeStock.descriptionNote;
  
  if (dateStamp) {
    if (activeStock.category === 'monochrome') {
      dateStamp.classList.add('mono');
    } else {
      dateStamp.classList.remove('mono');
    }
  }
  
  if (container) {
    container.className = `viewfinder-box relative transition-all duration-300 ${isZebraOn ? 'zebra-active' : ''} ${isLeakOn ? 'leak-active' : ''} ${isSuper8On ? 'super8-active' : ''}`;
  }
}

// Interactive Viewfinder Tap / Drag
function initViewfinderEvents() {
  const vfContainer = document.getElementById('viewfinder-container');
  const reticle = document.getElementById('vf-reticle');
  const afBadge = document.getElementById('vf-af-badge');
  
  if (vfContainer && reticle) {
    vfContainer.addEventListener('mousemove', (e) => {
      const rect = vfContainer.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      reticle.style.left = `${x}px`;
      reticle.style.top = `${y}px`;
      
      if (afBadge) afBadge.textContent = `AF LOCK (${Math.round((x/rect.width)*100)}%, ${Math.round((y/rect.height)*100)}%)`;
    });
    
    vfContainer.addEventListener('mouseleave', () => {
      reticle.style.left = '50%';
      reticle.style.top = '50%';
      if (afBadge) afBadge.textContent = 'AF LOCK (CENTER)';
    });
  }
}

// Aspect Ratio Switcher
function setAspectRatio(aspect) {
  activeAspect = aspect;
  const imgFrame = document.getElementById('viewfinder-frame');
  const aspectBtns = document.querySelectorAll('.aspect-btn');
  
  aspectBtns.forEach(btn => {
    if (btn.getAttribute('data-aspect') === aspect) {
      btn.classList.add('border-amber-500', 'text-amber-500', 'bg-amber-500/10');
      btn.classList.remove('border-gray-700', 'text-gray-400');
    } else {
      btn.classList.remove('border-amber-500', 'text-amber-500', 'bg-amber-500/10');
      btn.classList.add('border-gray-700', 'text-gray-400');
    }
  });
  
  if (imgFrame) {
    if (aspect === '4:5') imgFrame.style.aspectRatio = '4/5';
    else if (aspect === '9:16') imgFrame.style.aspectRatio = '9/16';
    else if (aspect === '1:1') imgFrame.style.aspectRatio = '1/1';
    else imgFrame.style.aspectRatio = '3/2';
  }
}

// Toggle Viewfinder FX
function toggleZebra() {
  isZebraOn = !isZebraOn;
  const btn = document.getElementById('btn-toggle-zebra');
  if (btn) btn.classList.toggle('bg-amber-500', isZebraOn);
  if (btn) btn.classList.toggle('text-black', isZebraOn);
  updateViewfinderState();
}

function toggleLeak() {
  isLeakOn = !isLeakOn;
  const btn = document.getElementById('btn-toggle-leak');
  if (btn) btn.classList.toggle('bg-amber-500', isLeakOn);
  if (btn) btn.classList.toggle('text-black', isLeakOn);
  updateViewfinderState();
}

function toggleDate() {
  isDateOn = !isDateOn;
  const stamp = document.getElementById('vf-date-stamp');
  const btn = document.getElementById('btn-toggle-date');
  if (stamp) stamp.style.display = isDateOn ? 'block' : 'none';
  if (btn) btn.classList.toggle('bg-amber-500', isDateOn);
  if (btn) btn.classList.toggle('text-black', isDateOn);
}

function toggleSuper8() {
  isSuper8On = !isSuper8On;
  const btn = document.getElementById('btn-toggle-super8');
  if (btn) btn.classList.toggle('bg-amber-500', isSuper8On);
  if (btn) btn.classList.toggle('text-black', isSuper8On);
  updateViewfinderState();
}
