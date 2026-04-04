const WHISKEY_DATABASE = [
  // Bourbon
  { name: "Blanton's Original Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 46.5, proof: 93 },
  { name: "Blanton's Straight from the Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 64.3, proof: 128.6 },
  { name: "Eagle Rare 10 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 10, abv: 45, proof: 90 },
  { name: "E.H. Taylor Small Batch", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Pappy Van Winkle 15 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 15, abv: 53.05, proof: 106.1 },
  { name: "Pappy Van Winkle 20 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 20, abv: 45.2, proof: 90.4 },
  { name: "Pappy Van Winkle 23 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 23, abv: 47.8, proof: 95.6 },
  { name: "W.L. Weller 12 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 12, abv: 45, proof: 90 },
  { name: "W.L. Weller Antique 107", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 53.5, proof: 107 },
  { name: "Stagg Jr.", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 63.15, proof: 126.3 },
  { name: "Four Roses Single Barrel", distillery: "Four Roses", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Booker's", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 62.15, proof: 124.3 },
  { name: "Knob Creek 9 Year", distillery: "James B. Beam", type: "Bourbon", age: 9, abv: 50, proof: 100 },
  { name: "Maker's Mark", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Woodford Reserve", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Jack Daniel's Single Barrel", distillery: "Jack Daniel's", type: "Bourbon", age: null, abv: 47, proof: 94 },
  { name: "Wild Turkey 101", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 50.5, proof: 101 },
  { name: "Old Forester 1920", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 57.5, proof: 115 },
  { name: "Michter's US*1 Small Batch", distillery: "Michter's", type: "Bourbon", age: null, abv: 45.7, proof: 91.4 },
  { name: "Angel's Envy", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 43.3, proof: 86.6 },
  // Scotch
  { name: "Glenfiddich 12 Year", distillery: "Glenfiddich", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Macallan 12 Year", distillery: "Macallan", type: "Scotch", age: 12, abv: 43, proof: 86 },
  { name: "Macallan 18 Year", distillery: "Macallan", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Lagavulin 16 Year", distillery: "Lagavulin", type: "Scotch", age: 16, abv: 43, proof: 86 },
  { name: "Lagavulin 8 Year", distillery: "Lagavulin", type: "Scotch", age: 8, abv: 48, proof: 96 },
  { name: "Laphroaig 10 Year", distillery: "Laphroaig", type: "Scotch", age: 10, abv: 40, proof: 80 },
  { name: "Ardbeg 10 Year", distillery: "Ardbeg", type: "Scotch", age: 10, abv: 46, proof: 92 },
  { name: "Ardbeg Uigeadail", distillery: "Ardbeg", type: "Scotch", age: null, abv: 54.2, proof: 108.4 },
  { name: "Talisker 10 Year", distillery: "Talisker", type: "Scotch", age: 10, abv: 45.8, proof: 91.6 },
  { name: "Highland Park 12 Year", distillery: "Highland Park", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Glenmorangie 10 Year", distillery: "Glenmorangie", type: "Scotch", age: 10, abv: 43, proof: 86 },
  { name: "Glenlivet 12 Year", distillery: "Glenlivet", type: "Scotch", age: 12, abv: 40, proof: 80 },
  // Rye
  { name: "Old Overholt Bonded", distillery: "Old Overholt", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Rittenhouse Rye", distillery: "Rittenhouse", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Bulleit Rye", distillery: "Bulleit", type: "Rye", age: null, abv: 45, proof: 90 },
  // Irish
  { name: "Jameson", distillery: "Jameson", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Redbreast 12 Year", distillery: "Midleton", type: "Irish", age: 12, abv: 40, proof: 80 },
  // Japanese
  { name: "Yamazaki 12 Year", distillery: "Yamazaki", type: "Japanese", age: 12, abv: 43, proof: 86 },
  { name: "Hibiki Harmony", distillery: "Hibiki", type: "Japanese", age: null, abv: 43, proof: 86 },
  { name: "Nikka From the Barrel", distillery: "Nikka", type: "Japanese", age: null, abv: 51.4, proof: 102.8 },
  { name: "Suntory Toki", distillery: "Suntory", type: "Japanese", age: null, abv: 43, proof: 86 },
  // Canadian
  { name: "Crown Royal", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 }
];

const API_BASE = 'https://thewhiskyedition.com/api';

// Search function - tries API first, falls back to local DB
async function searchWhiskeys(query) {
  if (!query || query.length < 2) return [];
  
  // Try the real API first
  try {
    const apiResults = await searchWhiskyAPI(query);
    if (apiResults.length > 0) return apiResults;
  } catch (e) {
    console.log('API search failed, using local DB');
  }
  
  // Fallback to local database
  const lowerQuery = query.toLowerCase();
  return WHISKEY_DATABASE.filter(w => 
    w.name.toLowerCase().includes(lowerQuery) ||
    w.distillery.toLowerCase().includes(lowerQuery)
  ).slice(0, 8);
}

// Search the WHISKY:EDITION API
async function searchWhiskyAPI(query) {
  const url = `${API_BASE}/whisky-reviews?q=${encodeURIComponent(query)}&per_page=8&lang=en`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('API error');
  const data = await response.json();
  
  if (!data.ok || !data.items || data.items.length === 0) return [];
  
  return data.items.map(item => ({
    name: item.name,
    distillery: item.metadata?.distillery || '',
    type: mapWhiskyType(item.metadata?.type),
    age: item.metadata?.age || null,
    abv: item.metadata?.abv || null,
    proof: item.metadata?.abv ? Math.round(item.metadata.abv * 2) : null,
    country: item.metadata?.country || '',
    region: item.metadata?.region || '',
    description: item.description || '',
    image: item.image?.url || null,
    rating: item.rating ? Math.round((item.rating.marcel + item.rating.sascha) / 2 / 20) : 0,
    valueForMoney: item.rating?.value_for_money || 0,
    tastingNotes: item.tasting_notes || null,
    slug: item.slug,
    apiSource: 'whiskyedition'
  }));
}

// Get detailed info from API
async function getWhiskyDetail(slug) {
  const url = `${API_BASE}/whisky-reviews/${slug}?lang=en`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('API error');
  const data = await response.json();
  return data;
}

// Map API type to our types
function mapWhiskyType(apiType) {
  if (!apiType) return 'Other';
  const lower = apiType.toLowerCase();
  if (lower.includes('bourbon') || lower.includes('whiskey') && lower.includes('american')) return 'Bourbon';
  if (lower.includes('scotch') || lower.includes('whisky')) return 'Scotch';
  if (lower.includes('rye')) return 'Rye';
  if (lower.includes('irish') || lower.includes('eire')) return 'Irish';
  if (lower.includes('japanese') || lower.includes('japan')) return 'Japanese';
  if (lower.includes('canadian') || lower.includes('canada')) return 'Canadian';
  return 'Other';
}

// Export for use in app
if (typeof window !== 'undefined') {
  window.whiskeySearch = searchWhiskeys;
  window.WHISKEY_DATABASE = WHISKEY_DATABASE;
  window.getWhiskyDetail = getWhiskyDetail;
}
