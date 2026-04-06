const STORAGE_KEY = 'whiskey_collection';
let collection = [];
let editingId = null;
let currentPhotoBase64 = null;

// Supabase Configuration
const SUPABASE_URL = 'https://hzkhvnqhepxadwxdtnih.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_TMJiyaGhOmZsgsOEcS5s5g_XArNhn9G';
let supabaseClient = null;

// DOM Elements
const collectionEl = document.getElementById('collection');
const emptyStateEl = document.getElementById('emptyState');
const modal = document.getElementById('modal');
const statsModal = document.getElementById('statsModal');
const detailModal = document.getElementById('detailModal');
const dbModal = document.getElementById('dbModal');
const whiskeyForm = document.getElementById('whiskeyForm');
const dbForm = document.getElementById('dbForm');
const searchInput = document.getElementById('searchInput');
const filterOwned = document.getElementById('filterOwned');
const filterWishlist = document.getElementById('filterWishlist');
let currentFilter = 'owned';
const suggestionsEl = document.getElementById('searchSuggestions');
const nameInput = document.getElementById('name');
const distilleryInput = document.getElementById('distillery');
const typeInput = document.getElementById('type');
const ageInput = document.getElementById('age');
const abvInput = document.getElementById('abv');
const proofInput = document.getElementById('proof');

let html5QrCode = null;

// Initialize Supabase
function initSupabase() {
  try {
    supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    console.log('Supabase initialized successfully');
  } catch (err) {
    console.error('Supabase init failed:', err);
  }
}

// Load shared whiskeys from Supabase
async function loadSharedWhiskeys() {
  if (!supabaseClient) return [];
  try {
    const { data, error } = await supabaseClient
      .from('whiskeys')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw error;
    return data || [];
  } catch (err) {
    console.log('Could not load from Supabase, using local DB');
    return [];
  }
}

// Add whiskey to shared Supabase database
async function addToSharedDatabase(whiskey) {
  if (!supabaseClient) {
    alert('Database not connected. Please check your internet connection.');
    return false;
  }
  try {
    const { data, error } = await supabaseClient
      .from('whiskeys')
      .insert([{
        name: whiskey.name,
        distillery: whiskey.distillery,
        type: whiskey.type,
        age: whiskey.age,
        abv: whiskey.abv,
        proof: whiskey.proof
      }]);
    if (error) throw error;
    return true;
  } catch (err) {
    console.error('Failed to add to database:', err);
    return false;
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  initSupabase();
  loadCollection();
  renderCollection();
  setupEventListeners();
  console.log('App initialized');
  
  // Also load shared whiskeys into local DB for search
  loadSharedWhiskeys().then(sharedWhiskeys => {
    if (sharedWhiskeys.length > 0) {
      // Merge with existing WHISKEY_DATABASE
      const existingNames = new Set(WHISKEY_DATABASE.map(w => w.name));
      sharedWhiskeys.forEach(w => {
        if (!existingNames.has(w.name)) {
          WHISKEY_DATABASE.push({
            name: w.name,
            distillery: w.distillery || '',
            type: w.type || 'Other',
            age: w.age || null,
            abv: w.abv || null,
            proof: w.proof || null
          });
        }
      });
    }
  });
});

// Load from localStorage
function loadCollection() {
  const stored = localStorage.getItem(STORAGE_KEY);
  collection = stored ? JSON.parse(stored) : [];
}

// Save to localStorage
function saveCollection() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(collection));
}

// Setup event listeners
function setupEventListeners() {
  document.getElementById('addBtn').addEventListener('click', () => openModal());
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('closeStats').addEventListener('click', () => statsModal.classList.add('hidden'));
  document.getElementById('closeDetail').addEventListener('click', () => detailModal.classList.add('hidden'));
  document.getElementById('closeDbModal').addEventListener('click', closeDbModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  dbModal.addEventListener('click', (e) => {
    if (e.target === dbModal) closeDbModal();
  });

// Filter tab switching
function setFilter(filter) {
  currentFilter = filter;
  filterOwned.classList.toggle('active', filter === 'owned');
  filterWishlist.classList.toggle('active', filter === 'wishlist');
  
  // Show/hide search bar based on filter
  const searchSection = document.getElementById('searchSection');
  if (filter === 'owned') {
    searchSection.classList.remove('hidden');
  } else {
    searchSection.classList.add('hidden');
    searchInput.value = ''; // Clear search when going to wishlist
  }
  
  renderCollection();
}

  searchInput.addEventListener('input', renderCollection);
  filterOwned.addEventListener('click', () => setFilter('owned'));
  filterWishlist.addEventListener('click', () => setFilter('wishlist'));

  // Smart search for whiskey name
  nameInput.addEventListener('input', (e) => {
    const query = e.target.value;
    if (query.length < 2) {
      suggestionsEl.classList.add('hidden');
      return;
    }
    
    const results = searchWhiskeys(query);
    if (results.length === 0) {
      suggestionsEl.classList.add('hidden');
      return;
    }
    
    suggestionsEl.innerHTML = `
      <div class="search-hint">Select a whiskey to auto-fill details, or type a custom name</div>
      ${results.map(w => `
        <div class="suggestion-item" onclick="selectWhiskey('${w.name.replace(/'/g, "\\'")}')">
          <div class="suggestion-name">${escapeHtml(w.name)}</div>
          <div class="suggestion-meta">
            <span class="suggestion-tag">${w.type}</span>
            ${w.age ? `<span>${w.age} yr</span>` : ''}
            ${w.abv ? `<span>${w.abv}%</span>` : ''}
            <span>${escapeHtml(w.distillery)}</span>
          </div>
        </div>
      `).join('')}
    `;
    suggestionsEl.classList.remove('hidden');
  });
  
  // Hide suggestions when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.form-group')) {
      suggestionsEl.classList.add('hidden');
    }
  });
  
  // Star rating
  document.querySelectorAll('.star').forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.dataset.rating;
      document.getElementById('rating').value = rating;
      document.querySelectorAll('.star').forEach((s, i) => {
        s.classList.toggle('active', i < rating);
      });
    });
  });

  // Photo preview
  document.getElementById('photo').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        currentPhotoBase64 = e.target.result;
        const preview = document.getElementById('photoPreview');
        preview.src = currentPhotoBase64;
      };
      reader.readAsDataURL(file);
    }
  });

  whiskeyForm.addEventListener('submit', handleSubmit);
  
  // Database submission form
  dbForm.addEventListener('submit', handleDbSubmit);
  
  // Show/hide contributor section based on DB checkbox
  document.getElementById('addToSharedDb').addEventListener('change', (e) => {
    const contributorSection = document.getElementById('contributorSection');
    if (e.target.checked) {
      contributorSection.classList.remove('hidden');
      document.getElementById('contributorName').focus();
    } else {
      contributorSection.classList.add('hidden');
    }
  });
}

// Open Database Modal
function openDbModal() {
  dbForm.classList.remove('hidden');
  document.getElementById('dbSuccess').classList.add('hidden');
  dbForm.reset();
  dbModal.classList.remove('hidden');
}

// Close Database Modal
function closeDbModal() {
  dbModal.classList.add('hidden');
}

// Handle Database Submission - DEPRECATED (using inline form now)
async function handleDbSubmit(e) {
  e.preventDefault();
  alert('Please use the "Add Whiskey" button to add to the shared database.');
}

function openModal(whiskey = null) {
  editingId = whiskey ? whiskey.id : null;
  document.getElementById('modalTitle').textContent = editingId ? 'Edit Whiskey' : 'Add Whiskey';
  document.getElementById('submitBtn').textContent = editingId ? 'Save Changes' : 'Add Whiskey';

  // Reset form
  whiskeyForm.reset();
  document.getElementById('rating').value = '0';
  document.querySelectorAll('.star').forEach(s => s.classList.remove('active'));
  currentPhotoBase64 = null;
  document.getElementById('photoPreview').src = '';
  
  // Show and enable shared DB checkbox only for new entries
  const addToSharedDbEl = document.getElementById('addToSharedDb');
  if (editingId) {
    addToSharedDbEl.checked = false;
    addToSharedDbEl.disabled = true;
    document.querySelector('.checkbox-hint').textContent = 'Editing existing entry - cannot add to shared database';
  } else {
    addToSharedDbEl.checked = false;
    addToSharedDbEl.disabled = false;
    document.querySelector('.checkbox-hint').textContent = 'Check this to contribute this whiskey to the shared database so others can find it';
  }

  // Populate if editing
  if (whiskey) {
    document.getElementById('name').value = whiskey.name;
    document.getElementById('distillery').value = whiskey.distillery || '';
    document.getElementById('type').value = whiskey.type;
    document.getElementById('age').value = whiskey.age || '';
    document.getElementById('abv').value = whiskey.abv || '';
    document.getElementById('proof').value = whiskey.proof || '';
    document.getElementById('price').value = whiskey.price || '';
    document.getElementById('datePurchased').value = whiskey.datePurchased || '';
    document.getElementById('notes').value = whiskey.notes || '';
    document.getElementById('flavorTags').value = (whiskey.flavorTags || []).join(', ');
    document.getElementById('fillLevel').value = whiskey.fillLevel || 'sealed';
    document.getElementById('bottleStatus').value = whiskey.status || 'owned';

    const rating = whiskey.rating || 0;
    document.getElementById('rating').value = rating;
    document.querySelectorAll('.star').forEach((s, i) => {
      s.classList.toggle('active', i < rating);
    });

    if (whiskey.photo) {
      currentPhotoBase64 = whiskey.photo;
      const preview = document.getElementById('photoPreview');
      preview.src = currentPhotoBase64;
    }
  }

  modal.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  editingId = null;
}

function handleSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  
  // Check if also adding to shared database
  const addToSharedDb = document.getElementById('addToSharedDb').checked;
  
  // Check for duplicates in shared DB if checkbox is checked
  if (addToSharedDb) {
    const lowerName = name.toLowerCase();
    const existingInLocal = WHISKEY_DATABASE.find(w => w.name.toLowerCase() === lowerName);
    if (existingInLocal) {
      alert(`"${name}" is already in our database!\n\nThis whiskey cannot be added as a duplicate.`);
      return;
    }
  }
  
  const whiskey = {
    id: editingId || Date.now().toString(),
    name,
    distillery: document.getElementById('distillery').value.trim(),
    type: document.getElementById('type').value,
    age: document.getElementById('age').value ? parseInt(document.getElementById('age').value) : null,
    abv: document.getElementById('abv').value ? parseFloat(document.getElementById('abv').value) : null,
    proof: document.getElementById('proof').value ? parseInt(document.getElementById('proof').value) : null,
    price: document.getElementById('price').value ? parseFloat(document.getElementById('price').value) : null,
    datePurchased: document.getElementById('datePurchased').value || null,
    notes: document.getElementById('notes').value.trim(),
    rating: parseInt(document.getElementById('rating').value) || 0,
    flavorTags: document.getElementById('flavorTags').value
      .split(',')
      .map(t => t.trim())
      .filter(t => t),
    photo: currentPhotoBase64,
    fillLevel: document.getElementById('fillLevel').value,
    status: document.getElementById('bottleStatus').value
  };

  if (editingId) {
    const index = collection.findIndex(w => w.id === editingId);
    if (index !== -1) collection[index] = whiskey;
  } else {
    collection.push(whiskey);
  }

  // If checkbox is checked, also add to shared database
  if (addToSharedDb && !editingId) {
    const contributorName = document.getElementById('contributorName').value.trim();
    const contributorEmail = document.getElementById('contributorEmail').value.trim();
    
    if (!contributorName || !contributorEmail) {
      alert('Please provide your name and email to contribute to the database.');
      return;
    }
    
    const dbWhiskey = {
      name: whiskey.name,
      distillery: whiskey.distillery,
      type: whiskey.type,
      age: whiskey.age,
      abv: whiskey.abv,
      proof: whiskey.proof,
      contributor_name: contributorName,
      contributor_email: contributorEmail
    };
    addToSharedDatabase(dbWhiskey).then(success => {
      if (success) {
        // Add to local DB so it shows up in search immediately
        WHISKEY_DATABASE.push({
          name: whiskey.name,
          distillery: whiskey.distillery,
          type: whiskey.type,
          age: whiskey.age,
          abv: whiskey.abv,
          proof: whiskey.proof
        });
      }
    });
  }
  
  saveCollection();
  renderCollection();
  closeModal();
}

function renderCollection() {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = collection.filter(w => {
    const matchesSearch = !searchTerm ||
      w.name.toLowerCase().includes(searchTerm) ||
      (w.distillery && w.distillery.toLowerCase().includes(searchTerm));
    const matchesFilter = w.status === currentFilter;
    return matchesSearch && matchesFilter;
  });

  // Update header stats - only owned bottles (not wishlist)
  const ownedBottles = collection.filter(w => w.status !== 'wishlist');
  document.getElementById('totalCount').textContent = ownedBottles.length;

  if (collection.length === 0) {
    emptyStateEl.style.display = 'block';
    collectionEl.innerHTML = '';
    return;
  }

  emptyStateEl.style.display = 'none';

  collectionEl.innerHTML = filtered.map(whiskey => {
    const fillIcon = {
      'sealed': '🔒',
      'open': '🍾',
      'low': '📉',
      'empty': '🫗'
    }[whiskey.fillLevel] || '📦';
    const isWishlist = whiskey.status === 'wishlist';
    
    return `
    <div class="whiskey-card ${isWishlist ? 'wishlist-card' : ''}" onclick="showDetail('${whiskey.id}')">
      ${isWishlist ? '<div class="wishlist-badge">❤️ Wishlist</div>' : ''}
      <div class="image-container">
        ${whiskey.photo
          ? `<img src="${whiskey.photo}" alt="${whiskey.name}">`
          : `<div class="image-placeholder">${fillIcon}</div>`
        }
      </div>
      <div class="card-content">
        <div class="name">${escapeHtml(whiskey.name)}</div>
        ${whiskey.distillery ? `<div class="distillery">${escapeHtml(whiskey.distillery)}</div>` : ''}
        <div class="meta">
          <span class="tag">${whiskey.type}</span>
          ${whiskey.age ? `<span class="tag">${whiskey.age}yr</span>` : ''}
          ${whiskey.abv ? `<span class="tag">${whiskey.abv}%</span>` : ''}
          <span class="tag">${fillIcon}</span>
        </div>
        <div class="card-footer">
          <div class="rating">
            ${renderStars(whiskey.rating)}
          </div>
          ${whiskey.price ? `<span class="price">$${whiskey.price.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </div>
  `}).join('');
}

function showDetail(id) {
  const whiskey = collection.find(w => w.id === id);
  if (!whiskey) return;

  document.getElementById('detailTitle').textContent = whiskey.name;
  document.getElementById('detailContent').innerHTML = `
    ${whiskey.photo ? `<img src="${whiskey.photo}" alt="${whiskey.name}" class="detail-image">` : ''}
    <div class="detail-info">
      <div class="detail-row">
        <span class="detail-label">Type</span>
        <span class="detail-value">${whiskey.type}</span>
      </div>
      ${whiskey.distillery ? `
        <div class="detail-row">
          <span class="detail-label">Distillery</span>
          <span class="detail-value">${escapeHtml(whiskey.distillery)}</span>
        </div>
      ` : ''}
      ${whiskey.age ? `
        <div class="detail-row">
          <span class="detail-label">Age</span>
          <span class="detail-value">${whiskey.age} years</span>
        </div>
      ` : ''}
      ${whiskey.abv ? `
        <div class="detail-row">
          <span class="detail-label">ABV</span>
          <span class="detail-value">${whiskey.abv}%</span>
        </div>
      ` : ''}
      ${whiskey.proof ? `
        <div class="detail-row">
          <span class="detail-label">Proof</span>
          <span class="detail-value">${whiskey.proof}</span>
        </div>
      ` : ''}
      ${whiskey.price ? `
        <div class="detail-row">
          <span class="detail-label">Price</span>
          <span class="detail-value">$${whiskey.price.toFixed(2)}</span>
        </div>
      ` : ''}
      ${whiskey.datePurchased ? `
        <div class="detail-row">
          <span class="detail-label">Purchased</span>
          <span class="detail-value">${new Date(whiskey.datePurchased).toLocaleDateString()}</span>
        </div>
      ` : ''}
      ${whiskey.rating ? `
        <div class="detail-row">
          <span class="detail-label">Rating</span>
          <span class="detail-value">${renderStars(whiskey.rating)}</span>
        </div>
      ` : ''}
      ${whiskey.fillLevel ? `
        <div class="detail-row">
          <span class="detail-label">Fill Level</span>
          <span class="detail-value">${{
            'sealed': '🔒 Sealed',
            'open': '🍾 Opened',
            'low': '📉 Low',
            'empty': '🫗 Empty'
          }[whiskey.fillLevel] || whiskey.fillLevel}</span>
        </div>
      ` : ''}
      ${whiskey.status === 'wishlist' ? `
        <div class="detail-row">
          <span class="detail-label">Status</span>
          <span class="detail-value">❤️ On Wishlist</span>
        </div>
      ` : ''}
      ${whiskey.notes ? `
        <div class="detail-notes">
          <h4>Tasting Notes</h4>
          <p>${escapeHtml(whiskey.notes)}</p>
        </div>
      ` : ''}
      ${whiskey.flavorTags && whiskey.flavorTags.length > 0 ? `
        <div class="detail-tags">
          ${whiskey.flavorTags.map(t => `<span class="detail-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      ` : ''}
    </div>
    <div class="detail-actions">
      <button class="edit-btn" onclick="editWhiskey('${whiskey.id}')">Edit</button>
      <button class="delete-btn" onclick="confirmDelete('${whiskey.id}')">Delete</button>
    </div>
  `;

  detailModal.classList.remove('hidden');
}

function editWhiskey(id) {
  const whiskey = collection.find(w => w.id === id);
  if (!whiskey) return;
  detailModal.classList.add('hidden');
  openModal(whiskey);
}

function confirmDelete(id) {
  if (confirm('Delete this whiskey from your collection?')) {
    collection = collection.filter(w => w.id !== id);
    saveCollection();
    renderCollection();
    detailModal.classList.add('hidden');
  }
}

function deleteWhiskey(id) {
  confirmDelete(id);
}

function showStats() {
  // Only count owned bottles (not wishlist)
  const ownedBottles = collection.filter(w => w.status === 'owned');
  const totalBottles = ownedBottles.length;
  const totalValue = ownedBottles.reduce((sum, w) => sum + (w.price || 0), 0);
  const avgRating = ownedBottles.filter(w => w.rating).length > 0
    ? (ownedBottles.reduce((sum, w) => sum + (w.rating || 0), 0) / ownedBottles.filter(w => w.rating).length).toFixed(1)
    : 'N/A';

  // Type breakdown
  const typeCount = {};
  ownedBottles.forEach(w => {
    typeCount[w.type] = (typeCount[w.type] || 0) + 1;
  });

  const sortedTypes = Object.entries(typeCount).sort((a, b) => b[1] - a[1]);
  const maxCount = sortedTypes.length > 0 ? sortedTypes[0][1] : 0;

  document.getElementById('statsContent').innerHTML = `
    <div class="stat-card">
      <span class="stat-label">Total Bottles</span>
      <span class="stat-value">${totalBottles}</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">Collection Value</span>
      <span class="stat-value money">$${totalValue.toFixed(2)}</span>
    </div>
    <div class="stat-card">
      <span class="stat-label">Average Rating</span>
      <span class="stat-value">${avgRating} ⭐</span>
    </div>
    ${sortedTypes.length > 0 ? `
      <div class="type-breakdown">
        <h3>By Type</h3>
        ${sortedTypes.map(([type, count]) => `
          <div class="type-bar">
            <span class="type-name">${type}</span>
            <div class="bar-container">
              <div class="bar-fill" style="width: ${(count / maxCount) * 100}%">${count}</div>
            </div>
            <span class="type-count">${count}</span>
          </div>
        `).join('')}
      </div>
    ` : ''}
  `;

  statsModal.classList.remove('hidden');
}

function renderStars(rating) {
  if (!rating) return '<span class="star">☆</span><span class="star">☆</span><span class="star">☆</span><span class="star">☆</span><span class="star">☆</span>';
  return '★'.repeat(rating).split('').map(() => '<span class="star">★</span>').join('') + '☆'.repeat(5 - rating).split('').map(() => '<span class="star empty">☆</span>').join('');
}

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Auto-fill form when a whiskey is selected from suggestions
function selectWhiskey(name) {
  const whiskey = WHISKEY_DATABASE.find(w => w.name === name);
  if (!whiskey) return;
  
  nameInput.value = whiskey.name;
  distilleryInput.value = whiskey.distillery;
  typeInput.value = whiskey.type;
  ageInput.value = whiskey.age || '';
  abvInput.value = whiskey.abv || '';
  if (whiskey.abv) {
    proofInput.value = Math.round(whiskey.abv * 2);
  }
  
  suggestionsEl.classList.add('hidden');
  
  // Focus on price field next
  document.getElementById('price').focus();
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed:', err));
  }
}
