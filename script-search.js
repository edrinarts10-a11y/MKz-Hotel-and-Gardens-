// ── SEARCH DATA (update these as your site grows) ──────────────────
const SEARCH_DATA = [
  // ROOMS
  { cat: 'rooms', title: 'Standard Room', snippet: 'Comfortable single or double room with en-suite bathroom, TV, and fan.', badge: 'From UGX 80,000/night' },
  { cat: 'rooms', title: 'Deluxe Room', snippet: 'Spacious room with air conditioning, king-size bed, and garden view.', badge: 'From UGX 150,000/night' },
  { cat: 'rooms', title: 'Family Suite', snippet: 'Large suite with two bedrooms, ideal for families or groups.', badge: 'From UGX 220,000/night' },
  { cat: 'rooms', title: 'Garden Chalet', snippet: 'Private chalet nestled in our green garden, perfect for a romantic stay.', badge: 'From UGX 180,000/night' },
  { cat: 'rooms', title: 'Room Amenities', snippet: 'All rooms include free WiFi, hot water, mosquito nets, and daily housekeeping.' },
  { cat: 'rooms', title: 'Check-in & Check-out', snippet: 'Check-in from 12:00 PM. Check-out by 11:00 AM. Early/late available on request.' },

  // MENU — LOCAL FOOD
  { cat: 'menu', title: 'Molokoni', snippet: 'Local dish served with your choice of side.', badge: 'UGX 10,000' },
  
  { cat: 'menu', title: 'Fish', snippet: 'Fresh fish prepared in local style, served with sides.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Chicken', snippet: 'Tender chicken in rich local sauce, served with sides.', badge: 'UGX 17,000' },
  { cat: 'menu', title: 'Beef', snippet: 'Slow-cooked beef with local sides.', badge: 'UGX 12,000' },
  { cat: 'menu', title: 'Beans', snippet: 'Fresh garden beans cooked Ugandan style.', badge: 'UGX 6,000' },
  { cat: 'menu', title: 'G. Nuts Fish', snippet: 'Fish cooked in rich groundnut sauce — a Ugandan classic.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Matooke & Goat', snippet: 'Steamed green banana with tender goat meat stew.', badge: 'UGX 20,000' },
  { cat: 'menu', title: 'Matooke Liver', snippet: 'Steamed green banana served with seasoned liver.', badge: 'UGX 20,000' },
  { cat: 'menu', title: 'Pilawo Beef', snippet: 'Spiced rice cooked with tender beef pieces.', badge: 'UGX 12,000' },
  { cat: 'menu', title: 'Pilawo Chicken', snippet: 'Spiced rice cooked with juicy chicken.', badge: 'UGX 17,000' },
  { cat: 'menu', title: 'Pilawo Goat', snippet: 'Spiced rice cooked with tender goat meat.', badge: 'UGX 20,000' },
  { cat: 'menu', title: 'Veg Rice Chicken', snippet: 'Vegetable rice served with chicken.', badge: 'UGX 20,000' },
  { cat: 'menu', title: 'Luwombo Chicken', snippet: 'Traditional Ugandan luwombo — chicken steamed in banana leaves.', badge: 'UGX 20,000' },
  // MENU — CHIPS & FAST FOOD
  { cat: 'menu', title: 'Chips Plain', snippet: 'Golden crispy plain chips.', badge: 'UGX 10,000' },
  { cat: 'menu', title: 'Chips Liver', snippet: 'Crispy chips served with seasoned liver.', badge: 'UGX 20,000' },
  { cat: 'menu', title: 'Chips Beef', snippet: 'Crispy chips served with tender beef.', badge: 'UGX 20,000' },
  { cat: 'menu', title: 'Chips Goat', snippet: 'Crispy chips served with goat meat.', badge: 'UGX 22,000' },
  { cat: 'menu', title: 'Chips Fish', snippet: 'Crispy chips served with whole fried fish.', badge: 'UGX 45,000' },
  { cat: 'menu', title: 'Chips Eggs', snippet: 'Chips served with fried eggs.', badge: 'UGX 12,000' },
  { cat: 'menu', title: 'Chips Pork', snippet: 'Crispy chips served with pork.', badge: 'UGX 40,000' },
  { cat: 'menu', title: 'Chips Sausage', snippet: 'Chips served with sausage.', badge: 'UGX 13,000' },
  { cat: 'menu', title: 'Chips Fingers Fish', snippet: 'Fish fingers served with crispy chips.', badge: 'UGX 35,000' },
  { cat: 'menu', title: 'Fish Fillet with Chips', snippet: 'Tender fish fillet with crispy chips.', badge: 'UGX 35,000' },
  { cat: 'menu', title: 'Goat Plain', snippet: 'Plain goat meat, simply seasoned.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Liver Plain', snippet: 'Plain seasoned liver.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Chicken Plain', snippet: 'Plain lightly seasoned chicken.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Fish Plain', snippet: 'Plain fried fish.', badge: 'UGX 35,000' },
  { cat: 'menu', title: 'Pork Ribs', snippet: 'Tender pork ribs seasoned and cooked to perfection.', badge: 'UGX 36,000' },
  { cat: 'menu', title: 'Chaps', snippet: 'Quick chaps snack.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Kebab', snippet: 'Grilled kebab skewer — quick and tasty.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Plain Sausage', snippet: 'Grilled plain sausage.', badge: 'UGX 5,000' },
  // MENU — EXTRAS
  { cat: 'menu', title: 'Plain Omelette', snippet: 'Simple fluffy omelette.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Spanish Omelette', snippet: 'Omelette with veggies and seasoning.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Cheese Omelette', snippet: 'Omelette loaded with melted cheese.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Toast Bread', snippet: 'Toasted bread — great with tea or coffee.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Beef Burger & Salads', snippet: 'Beef burger served with fresh salad.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Vegetable Burger', snippet: 'Veggie burger — a great meat-free option.', badge: 'UGX 15,000' },
  { cat: 'menu', title: 'Chicken Wings', snippet: 'Juicy seasoned chicken wings.', badge: 'UGX 15,000' },
  // MENU — IN A HURRY
  { cat: 'menu', title: 'Samosas Beef', snippet: 'Crispy beef-filled samosas — perfect snack.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Chapati', snippet: 'Soft Ugandan chapati — great with tea.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Mandazzi', snippet: 'Soft fried mandazzi doughnuts.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Egg Roll', snippet: 'Egg wrapped in a thin roll — quick and filling.', badge: 'UGX 1,500' },
  { cat: 'menu', title: 'Rolex', snippet: 'Ugandan-style rolex — eggs and chapati rolled together.', badge: 'UGX 4,000' },
  { cat: 'menu', title: 'Omulet', snippet: 'Quick omulet snack.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Katogo Peas G Nuts', snippet: 'Matooke cooked with peas or groundnuts — local breakfast favourite.', badge: 'UGX 5,000' },
  { cat: 'menu', title: 'Katogo Beef', snippet: 'Matooke cooked with beef — hearty and filling.', badge: 'UGX 7,000' },
  // MENU — HOT BEVERAGES
  { cat: 'menu', title: 'African Tea', snippet: 'Hot Ugandan spiced chai tea.', badge: 'UGX 5,000' },
  { cat: 'menu', title: 'Black Tea', snippet: 'Classic hot black tea.', badge: 'UGX 4,000' },
  { cat: 'menu', title: 'Black Coffee', snippet: 'Strong brewed black coffee.', badge: 'UGX 5,000' },
  { cat: 'menu', title: 'White Coffee', snippet: 'Coffee served with milk.', badge: 'UGX 7,000' },
  { cat: 'menu', title: 'English Toast & Chizzi', snippet: 'English toast with chizzi — great breakfast combo.', badge: 'UGX 8,500' },
  // MENU — SOFT DRINKS
  { cat: 'menu', title: 'Soda', snippet: 'Chilled sodas — Coke, Fanta, Sprite, Stoney and more.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Mineral Water', snippet: 'Chilled mineral water.', badge: 'UGX 2,000' },
  { cat: 'menu', title: 'Juice', snippet: 'Fresh or bottled fruit juice.', badge: 'UGX 5,000' },
  { cat: 'menu', title: 'Milkshake', snippet: 'Creamy blended milkshake.', badge: 'UGX 10,000' },
  { cat: 'menu', title: 'Oner', snippet: 'Oner energy drink.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Minute Maid', snippet: 'Minute Maid fruit drink.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Rockboom', snippet: 'Rockboom energy drink.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Predator', snippet: 'Predator energy drink.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Sting', snippet: 'Sting energy drink.', badge: 'UGX 3,000' },
  { cat: 'menu', title: 'Red Bull', snippet: 'Red Bull energy drink.', badge: 'UGX 10,000' },
  // MENU — WINES
  { cat: 'menu', title: 'Pure Heavens Wine', snippet: 'Pure Heavens wine — smooth and affordable.', badge: 'UGX 35,000' },
  { cat: 'menu', title: 'Four Cousins Dry', snippet: 'Four Cousins dry wine.', badge: 'UGX 60,000' },
  { cat: 'menu', title: 'Four Cousins Sweet', snippet: 'Four Cousins sweet wine.', badge: 'UGX 55,000' },
  { cat: 'menu', title: 'Nederburg Wine', snippet: 'Nederburg — a premium South African wine.', badge: 'UGX 60,000' },
  { cat: 'menu', title: '7 Hills Wine', snippet: '7 Hills wine selection.', badge: 'UGX 55,000' },
  { cat: 'menu', title: '4th Street Wine', snippet: '4th Street wine.', badge: 'UGX 55,000' },
  // MENU — SPIRITS
  { cat: 'menu', title: 'Smirnoff Vodka', snippet: 'Smirnoff Vodka — available in 1/2 or 1/4 bottle.', badge: 'From UGX 15,000' },
  { cat: 'menu', title: 'Uganda Waragi', snippet: 'Uganda Waragi — bottle, 1/2, 1/4, or plastic.', badge: 'From UGX 8,000' },
  { cat: 'menu', title: 'Bond 7', snippet: 'Bond 7 whisky — bottle, 1/2, 1/4, plastic, or ginger variant.', badge: 'From UGX 8,000' },
  { cat: 'menu', title: 'V&A Spirit', snippet: 'V&A spirit — available in bottle or 1/4.', badge: 'From UGX 15,000' },
  { cat: 'menu', title: 'Special Events Catering', snippet: 'Full catering packages for weddings, parties, and corporate events. Contact us on WhatsApp.' },

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
const searchOverlayEl = document.getElementById('searchOverlay');
const srInput    = document.getElementById('searchInput');
const srClear    = document.getElementById('searchClear');
const srTabs     = document.getElementById('searchTabs');
const srResults  = document.getElementById('searchResults');
const srMeta     = document.getElementById('searchMeta');
const srEmpty    = document.getElementById('searchEmpty');
const srInitial  = document.getElementById('searchInitial');

document.getElementById('search-trigger').addEventListener('click', openSearch);
document.getElementById('searchClose').addEventListener('click', closeSearch);
searchOverlayEl.addEventListener('click', e => { if (e.target === searchOverlayEl) closeSearch(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); });

function openSearch() {
  searchOverlayEl.classList.add('open');
  srInput.focus();
}
function closeSearch() {
  searchOverlayEl.classList.remove('open');
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