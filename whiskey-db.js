const WHISKEY_DATABASE = [
  // Bourbon
  { name: "Blanton's Original Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 46.5, proof: 93 },
  { name: "Blanton's Straight from the Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 64.3, proof: 128.6 },
  { name: "Eagle Rare 10 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 10, abv: 45, proof: 90 },
  { name: "E.H. Taylor Small Batch", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "E.H. Taylor Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "George T. Stagg", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 60.6, proof: 121.2 },
  { name: "Pappy Van Winkle 15 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 15, abv: 53.05, proof: 106.1 },
  { name: "Pappy Van Winkle 20 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 20, abv: 45.2, proof: 90.4 },
  { name: "Pappy Van Winkle 23 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 23, abv: 47.8, proof: 95.6 },
  { name: "W.L. Weller 12 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 12, abv: 45, proof: 90 },
  { name: "W.L. Weller Antique 107", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 53.5, proof: 107 },
  { name: "W.L. Weller CYPB", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 48.3, proof: 96.6 },
  { name: "Old Fitzgerald 8 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 8, abv: 50, proof: 100 },
  { name: "Stagg Jr.", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 63.15, proof: 126.3 },
  { name: "Colonel Taylor Barrel Proof", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 63.65, proof: 127.3 },
  
  // Other Bourbons
  { name: "Four Roses Single Barrel", distillery: "Four Roses", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Four Roses Small Batch", distillery: "Four Roses", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Booker's", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 62.15, proof: 124.3 },
  { name: "Basil Hayden's", distillery: "James B. Beam", type: "Bourbon", age: 8, abv: 40, proof: 80 },
  { name: "Old Grand-Dad 114", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 57, proof: 114 },
  { name: "Knob Creek 9 Year", distillery: "James B. Beam", type: "Bourbon", age: 9, abv: 50, proof: 100 },
  { name: "Maker's Mark", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Maker's Mark Cask Strength", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 55.7, proof: 111.4 },
  { name: "Woodford Reserve", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Woodford Reserve Double Oaked", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Jack Daniel's Single Barrel", distillery: "Jack Daniel's", type: "Bourbon", age: null, abv: 47, proof: 94 },
  { name: "Jack Daniel's Bonded", distillery: "Jack Daniel's", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Wild Turkey 101", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 50.5, proof: 101 },
  { name: "Wild Turkey Rare Breed", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 54.1, proof: 108.2 },
  { name: "Russell's Reserve 10 Year", distillery: "Wild Turkey", type: "Bourbon", age: 10, abv: 45, proof: 90 },
  { name: "Old Forester 1920", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 57.5, proof: 115 },
  { name: "Old Forester 1897", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 47.5, proof: 95 },
  { name: "Michter's US*1 Small Batch", distillery: "Michter's", type: "Bourbon", age: null, abv: 45.7, proof: 91.4 },
  { name: "Michter's 10 Year", distillery: "Michter's", type: "Bourbon", age: 10, abv: 46.4, proof: 92.8 },
  { name: "Angel's Envy", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 43.3, proof: 86.6 },
  { name: "Angel's Envy Cask Strength", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 59.7, proof: 119.4 },
  
  // Scotch
  { name: "Glenfiddich 12 Year", distillery: "Glenfiddich", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Glenfiddich 15 Year", distillery: "Glenfiddich", type: "Scotch", age: 15, abv: 40, proof: 80 },
  { name: "Glenfiddich 18 Year", distillery: "Glenfiddich", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Macallan 12 Year", distillery: "Macallan", type: "Scotch", age: 12, abv: 43, proof: 86 },
  { name: "Macallan 18 Year", distillery: "Macallan", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Lagavulin 16 Year", distillery: "Lagavulin", type: "Scotch", age: 16, abv: 43, proof: 86 },
  { name: "Lagavulin 8 Year", distillery: "Lagavulin", type: "Scotch", age: 8, abv: 48, proof: 96 },
  { name: "Laphroaig 10 Year", distillery: "Laphroaig", type: "Scotch", age: 10, abv: 40, proof: 80 },
  { name: "Laphroaig Cairdeas", distillery: "Laphroaig", type: "Scotch", age: null, abv: 51.5, proof: 103 },
  { name: "Ardbeg 10 Year", distillery: "Ardbeg", type: "Scotch", age: 10, abv: 46, proof: 92 },
  { name: "Ardbeg Uigeadail", distillery: "Ardbeg", type: "Scotch", age: null, abv: 54.2, proof: 108.4 },
  { name: "Talisker 10 Year", distillery: "Talisker", type: "Scotch", age: 10, abv: 45.8, proof: 91.6 },
  { name: "Oban 14 Year", distillery: "Oban", type: "Scotch", age: 14, abv: 43, proof: 86 },
  { name: "Glenmorangie 10 Year", distillery: "Glenmorangie", type: "Scotch", age: 10, abv: 43, proof: 86 },
  { name: "Glenmorangie Signet", distillery: "Glenmorangie", type: "Scotch", age: null, abv: 46, proof: 92 },
  { name: "Highland Park 12 Year", distillery: "Highland Park", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Highland Park 18 Year", distillery: "Highland Park", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Highland Park 25 Year", distillery: "Highland Park", type: "Scotch", age: 25, abv: 48.3, proof: 96.6 },
  { name: "Aberlour Abunadh", distillery: "Aberlour", type: "Scotch", age: null, abv: 60.1, proof: 120.2 },
  { name: "Glenlivet 12 Year", distillery: "Glenlivet", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Glenlivet 18 Year", distillery: "Glenlivet", type: "Scotch", age: 18, abv: 43, proof: 86 },
  
  // Rye
  { name: "Old Overholt Bonded", distillery: "Old Overholt", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Rittenhouse Rye", distillery: "Rittenhouse", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Bulleit Rye", distillery: "Bulleit", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Knob Creek Rye", distillery: "James B. Beam", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Michter's Rye", distillery: "Michter's", type: "Rye", age: null, abv: 42.4, proof: 84.8 },
  { name: "Sazerac Rye 6 Year", distillery: "Sazerac", type: "Rye", age: 6, abv: 45, proof: 90 },
  { name: "Willett Family Estate Rye", distillery: "Willett", type: "Rye", age: null, abv: 54.1, proof: 108.2 },
  { name: "Angel's Envy Rye", distillery: "Angel's Envy", type: "Rye", age: null, abv: 45, proof: 90 },
  
  // Irish
  { name: "Jameson", distillery: "Jameson", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Jameson Black Barrel", distillery: "Jameson", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Redbreast 12 Year", distillery: "Midleton", type: "Irish", age: 12, abv: 40, proof: 80 },
  { name: "Redbreast 15 Year", distillery: "Midleton", type: "Irish", age: 15, abv: 46, proof: 92 },
  { name: "Green Spot", distillery: "Midleton", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Yellow Spot", distillery: "Midleton", type: "Irish", age: 12, abv: 46, proof: 92 },
  { name: "Tullamore Dew", distillery: "Tullamore", type: "Irish", age: null, abv: 40, proof: 80 },
  
  // Japanese
  { name: "Yamazaki 12 Year", distillery: "Yamazaki", type: "Japanese", age: 12, abv: 43, proof: 86 },
  { name: "Yamazaki 18 Year", distillery: "Yamazaki", type: "Japanese", age: 18, abv: 43, proof: 86 },
  { name: "Hibiki Harmony", distillery: "Hibiki", type: "Japanese", age: null, abv: 43, proof: 86 },
  { name: "Hibiki 21 Year", distillery: "Hibiki", type: "Japanese", age: 21, abv: 43, proof: 86 },
  { name: "Nikka From the Barrel", distillery: "Nikka", type: "Japanese", age: null, abv: 51.4, proof: 102.8 },
  { name: "Nikka Miyagikyo 12 Year", distillery: "Nikka", type: "Japanese", age: 12, abv: 45, proof: 90 },
  { name: "Suntory Toki", distillery: "Suntory", type: "Japanese", age: null, abv: 43, proof: 86 },
  
  // Canadian
  { name: "Crown Royal", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Crown Royal XO", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Collingwood", distillery: "Collingwood", type: "Canadian", age: null, abv: 42.5, proof: 85 },
  { name: "Forty Creek Confederation", distillery: "Forty Creek", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Canadian Club 12 Year", distillery: "Canadian Club", type: "Canadian", age: 12, abv: 40, proof: 80 }
];

// Search function
function searchWhiskeys(query) {
  if (!query || query.length < 2) return [];
  const lowerQuery = query.toLowerCase();
  return WHISKEY_DATABASE.filter(w => 
    w.name.toLowerCase().includes(lowerQuery) ||
    w.distillery.toLowerCase().includes(lowerQuery)
  ).slice(0, 8); // Limit to 8 results
}

// Export for use in app
if (typeof window !== 'undefined') {
  window.whiskeySearch = searchWhiskeys;
  window.WHISKEY_DATABASE = WHISKEY_DATABASE;
}
