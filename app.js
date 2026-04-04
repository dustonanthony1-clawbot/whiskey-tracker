const STORAGE_KEY = 'whiskey_collection';
let collection = [];
let editingId = null;
let currentPhotoBase64 = null;

// DOM Elements
const collectionEl = document.getElementById('collection');
const emptyStateEl = document.getElementById('emptyState');
const modal = document.getElementById('modal');
const statsModal = document.getElementById('statsModal');
const detailModal = document.getElementById('detailModal');
const whiskeyForm = document.getElementById('whiskeyForm');
const searchInput = document.getElementById('searchInput');
const filterType = document.getElementById('filterType');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadCollection();
  renderCollection();
  setupEventListeners();
  registerServiceWorker();
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
  document.getElementById('statsBtn').addEventListener('click', showStats);
  document.getElementById('closeModal').addEventListener('click', closeModal);
  document.getElementById('closeStats').addEventListener('click', () => statsModal.classList.add('hidden'));
  document.getElementById('closeDetail').addEventListener('click', () => detailModal.classList.add('hidden'));

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  searchInput.addEventListener('input', renderCollection);
  filterType.addEventListener('change', renderCollection);

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

  const whiskey = {
    id: editingId || Date.now().toString(),
    name: document.getElementById('name').value.trim(),
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
    photo: currentPhotoBase64
  };

  if (editingId) {
    const index = collection.findIndex(w => w.id === editingId);
    if (index !== -1) collection[index] = whiskey;
  } else {
    collection.push(whiskey);
  }

  saveCollection();
  renderCollection();
  closeModal();
}

function renderCollection() {
  const searchTerm = searchInput.value.toLowerCase();
  const typeFilter = filterType.value;

  const filtered = collection.filter(w => {
    const matchesSearch = !searchTerm ||
      w.name.toLowerCase().includes(searchTerm) ||
      (w.distillery && w.distillery.toLowerCase().includes(searchTerm));
    const matchesType = !typeFilter || w.type === typeFilter;
    return matchesSearch && matchesType;
  });

  // Update header stats
  const totalValue = collection.reduce((sum, w) => sum + (w.price || 0), 0);
  document.getElementById('totalCount').textContent = collection.length;
  document.getElementById('totalValue').textContent = '$' + totalValue.toFixed(0);

  if (collection.length === 0) {
    emptyStateEl.style.display = 'block';
    collectionEl.innerHTML = '';
    return;
  }

  emptyStateEl.style.display = 'none';

  collectionEl.innerHTML = filtered.map(whiskey => `
    <div class="whiskey-card" onclick="showDetail('${whiskey.id}')">
      <div class="image-container">
        ${whiskey.photo
          ? `<img src="${whiskey.photo}" alt="${whiskey.name}">`
          : `<div class="image-placeholder">🥃</div>`
        }
      </div>
      <div class="card-body">
        <div class="name">${escapeHtml(whiskey.name)}</div>
        ${whiskey.distillery ? `<div class="distillery">${escapeHtml(whiskey.distillery)}</div>` : ''}
        <div class="meta">
          <span class="tag">${whiskey.type}</span>
          ${whiskey.age ? `<span class="tag">${whiskey.age}yr</span>` : ''}
          ${whiskey.abv ? `<span class="tag">${whiskey.abv}%</span>` : ''}
        </div>
        <div class="rating">
          ${renderStars(whiskey.rating)}
        </div>
        <div class="footer">
          ${whiskey.price ? `<span class="price">$${whiskey.price.toFixed(2)}</span>` : '<span></span>'}
          ${whiskey.datePurchased ? `<span class="added-date">${formatDate(whiskey.datePurchased)}</span>` : ''}
        </div>
      </div>
    </div>
  `).join('');
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
      <button class="edit-btn" onclick="event.stopPropagation(); openModal(collection.find(w => w.id === '${whiskey.id}'))">Edit</button>
      <button class="delete-btn" onclick="event.stopPropagation(); deleteWhiskey('${whiskey.id}')">Delete</button>
    </div>
  `;

  detailModal.classList.remove('hidden');
}

function deleteWhiskey(id) {
  if (confirm('Delete this whiskey from your collection?')) {
    collection = collection.filter(w => w.id !== id);
    saveCollection();
    renderCollection();
    detailModal.classList.add('hidden');
  }
}

function showStats() {
  const totalBottles = collection.length;
  const totalValue = collection.reduce((sum, w) => sum + (w.price || 0), 0);
  const avgRating = collection.filter(w => w.rating).length > 0
    ? (collection.reduce((sum, w) => sum + (w.rating || 0), 0) / collection.filter(w => w.rating).length).toFixed(1)
    : 'N/A';

  // Type breakdown
  const typeCount = {};
  collection.forEach(w => {
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

// Service Worker Registration
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then(reg => console.log('SW registered'))
      .catch(err => console.log('SW registration failed:', err));
  }
}
