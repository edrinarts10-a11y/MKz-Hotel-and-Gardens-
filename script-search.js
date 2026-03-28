// ── SEARCH DATA (update these as your site grows) ──────────────────
const SEARCH_DATA = [
  // ROOMS
  { cat: 'rooms', title: 'Standard Room', snippet: 'Comfortable single or double room with en-suite bathroom, TV, and fan.', badge: 'From UGX 80,000/night' },
  { cat: 'rooms', title: 'Deluxe Room', snippet: 'Spacious room with air conditioning, king-size bed, and garden view.', badge: 'From UGX 150,000/night' },
  { cat: 'rooms', title: 'Family Suite', snippet: 'Large suite with two bedrooms, ideal for families or groups.', badge: 'From UGX 220,000/night' },
  { cat: 'rooms', title: 'Garden Chalet', snippet: 'Private chalet nestled in our green garden, perfect for a romantic stay.', badge: 'From UGX 180,000/night' },
  { cat: 'rooms', title: 'Room Amenities', snippet: 'All rooms include free WiFi, hot water, mosquito nets, and daily housekeeping.' },
  { cat: 'rooms', title: 'Check-in & Check-out', snippet: 'Check-in from 12:00 PM. Check-out by 11:00 AM. Early/late available on request.' },

  // MENU
  { cat: 'menu', title: 'Breakfast Buffet', snippet: 'Full buffet with eggs, toast, fruit, porridge, and tea/coffee. Served 7–10 AM.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Rolex & Snacks', snippet: 'Ugandan street-style rolex (eggs & chapati), samosas, and mandazi.', badge: 'From UGX 5,000' },
  { cat: 'menu', title: 'Local Dishes', snippet: 'Matoke, posho, beans, groundnut stew, chicken, fish, and goat.', badge: 'From UGX 12,000' },
  { cat: 'menu', title: 'Grills & BBQ', snippet: 'Grilled tilapia, pork ribs, nyama choma, and chicken — served with sides.', badge: 'From UGX 20,000' },
  { cat: 'menu', title: 'Bar Drinks', snippet: 'Sodas, beers, wine, spirits, fresh juices, cocktails, and mocktails.', badge: 'From UGX 3,000' },
  { cat: 'menu', title: 'Special Events Catering', snippet: 'We offer full catering packages for weddings, parties, and corporate events.' },

  // BILLING
  { cat: 'billing', title: 'Mobile Money Payment', snippet: 'Pay via MTN Mobile Money or Airtel Money. Ask reception for our number.', badge: 'Accepted' },
  { cat: 'billing', title: 'Cash Payment', snippet: 'We accept Uganda Shillings (UGX) cash at the front desk.', badge: 'Accepted' },
  { cat: 'billing', title: 'Bank Transfer', snippet: 'Bank transfers accepted for large bookings. Contact us for account details.', badge: 'On Request' },
  { cat: 'billing', title: 'Deposits & Booking', snippet: 'A 30% deposit is required to confirm event or group bookings.', badge: '30% Deposit' },
  { cat: 'billing', title: 'Invoices & Receipts', snippet: 'Printed and digital receipts provided for all payments on request.' },
  { cat: 'billing', title: 'WhatsApp Booking', snippet: 'Book and confirm your stay via WhatsApp. We accept deposit confirmations by screenshot.' },

  // GENERAL
  { cat: 'general', title: 'Garden & Grounds', snippet: 'Our lush garden is open to guests for relaxation, picnics, and outdoor events.', badge: 'Open Daily' },
  { cat: 'general', title: 'Restaurant Hours', snippet: 'Restaurant open 7 AM – 10 PM. Last food orders at 9:30 PM.', badge: '7AM–10PM' },
  { cat: 'general', title: 'Bar Hours', snippet: 'Bar open from 11 AM to midnight. Weekends until 1 AM.', badge: '11AM–12AM' },
  { cat: 'general', title: 'Events & Conferences', snippet: 'We host weddings, birthdays, corporate meetings, and private parties.', badge: 'Book Us' },
  { cat: 'general', title: 'WiFi Access', snippet: 'Free WiFi available throughout the hotel and garden. Password at reception.', badge: 'Free' },
  { cat: 'general', title: 'Location', snippet: 'Located in Wakiso, easily accessible from Kampala. Free parking available on site.' },
];

const CAT_ICONS = { rooms:'🛏', menu:'🍽', billing:'💳', general:'🌿' };

// ── SEARCH STATE ──────────────────────────────────────────────────
let srQuery = '';
let srCat   = 'all';

// ── DOM ───────────────────────────────────────────────────────────
const overlay    = document.getElementById('searchOverlay');
const srInput    = document.getElementById('searchInput');
const srClear    = document.getElementById('searchClear');
const srTabs     = document.getElementById('searchTabs');
const srResults  = document.getElementById('searchResults');
const srMeta     = document.getElementById('searchMeta');
const srEmpty    = document.getElementById('searchEmpty');
const srInitial  = document.getElementById('searchInitial');

document.getElementById('search-trigger').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
overlay.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

function openSearch() {
  overlay.classList.add('open');
  srInput.focus();
}
function closeSearch() {
  overlay.classList.remove('open');
}

// ── HELPERS ───────────────────────────────────────────────────────
function escH(s) {
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function hl(text, q) {
  if (!q) return text;
  return text.replace(new RegExp('(' + q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi'), '<mark>$1</mark>');
}
function fillSearch(text) {
  srInput.value = text;
  srQuery = text;
  renderSearch();
  srInput.focus();
}

// ── RENDER ────────────────────────────────────────────────────────
function renderSearch() {
  const q = srQuery.trim().toLowerCase();
  srClear.classList.toggle('visible', q.length > 0);
  srInitial.style.display = q ? 'none' : 'block';
  srTabs.style.display    = q ? 'flex'  : 'none';
  srEmpty.classList.remove('visible');
  srResults.innerHTML = '';
  srMeta.innerHTML    = '';

  if (!q) return;

  const all = SEARCH_DATA.filter(d =>
    (d.title + ' ' + d.snippet).toLowerCase().includes(q)
  );

  // Counts
  const cats = ['rooms','menu','billing','general'];
  document.getElementById('cnt-all').textContent = all.length;
  cats.forEach(c => {
    const el = document.getElementById('cnt-' + c);
    if (el) el.textContent = all.filter(r => r.cat === c).length;
  });

  const filtered = srCat === 'all' ? all : all.filter(r => r.cat === srCat);

  if (!filtered.length) {
    srEmpty.classList.add('visible');
    return;
  }

  srMeta.innerHTML = `<strong>${filtered.length}</strong> result${filtered.length !== 1 ? 's' : ''} for "<strong>${escH(q)}</strong>"`;

  filtered.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'result-card';
    card.style.animationDelay = (i * 0.04) + 's';
    card.innerHTML = `
      <div class="r-icon ${item.cat}">${CAT_ICONS[item.cat]}</div>
      <div class="r-body">
        <div class="r-cat">${item.cat}</div>
        <div class="r-title">${hl(escH(item.title), q)}</div>
        <div class="r-snippet">${hl(escH(item.snippet), q)}</div>
      </div>
      ${item.badge ? `<span class="r-badge badge-${item.cat}">${escH(item.badge)}</span>` : ''}
    `;
    srResults.appendChild(card);
  });
}

// ── EVENTS ────────────────────────────────────────────────────────
srInput.addEventListener('input', () => { srQuery = srInput.value; renderSearch(); });
srInput.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });
srClear.addEventListener('click', () => { srInput.value = ''; srQuery = ''; renderSearch(); srInput.focus(); });

document.querySelectorAll('.stab').forEach(tab => {
  tab.addEventListener('click', () => {
    srCat = tab.dataset.cat;
    document.querySelectorAll('.stab').forEach(t => t.classList.toggle('active', t === tab));
    renderSearch();
  });
});



window.addEventListener('scroll', () => {
  elements.forEach(el => {
    const position = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100) {
      el.classList.add('active');
    }
  });
});