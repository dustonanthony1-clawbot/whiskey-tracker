const WHISKEY_DATABASE = [
  // ============================================
  // BOURBON - Buffalo Trace
  // ============================================
  { name: "Blanton's Original Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 46.5, proof: 93 },
  { name: "Blanton's Straight from the Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 64.3, proof: 128.6 },
  { name: "Blanton's Gold Edition", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 51.5, proof: 103 },
  { name: "Blanton's Special Reserve", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Eagle Rare 10 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 10, abv: 45, proof: 90 },
  { name: "Eagle Rare 17 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 17, abv: 45, proof: 90 },
  { name: "Eagle Rare Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: 10, abv: 45, proof: 90 },
  { name: "E.H. Taylor Small Batch", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "E.H. Taylor Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "E.H. Taylor Barrel Proof", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 63.65, proof: 127.3 },
  { name: "E.H. Taylor Cured Oak", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "E.H. Taylor Four Grain", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "E.H. Taylor Warehouse C", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "George T. Stagg", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 60.6, proof: 121.2 },
  { name: "Pappy Van Winkle 12 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 12, abv: 45.2, proof: 90.4 },
  { name: "Pappy Van Winkle 15 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 15, abv: 53.05, proof: 106.1 },
  { name: "Pappy Van Winkle 20 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 20, abv: 45.2, proof: 90.4 },
  { name: "Pappy Van Winkle 23 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 23, abv: 47.8, proof: 95.6 },
  { name: "W.L. Weller 12 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 12, abv: 45, proof: 90 },
  { name: "W.L. Weller Antique 107", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 53.5, proof: 107 },
  { name: "W.L. Weller CYPB", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 48.3, proof: 96.6 },
  { name: "W.L. Weller Full Proof", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 57.1, proof: 114.2 },
  { name: "W.L. Weller 107", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 53.5, proof: 107 },
  { name: "Old Fitzgerald 8 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 8, abv: 50, proof: 100 },
  { name: "Old Fitzgerald 15 Year", distillery: "Buffalo Trace", type: "Bourbon", age: 15, abv: 50, proof: 100 },
  { name: "Old Fitzgerald Decanter", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Stagg Jr.", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 63.15, proof: 126.3 },
  { name: "Colonel Taylor Barrel Proof", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 63.65, proof: 127.3 },
  { name: "Colonel Taylor Single Barrel", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Rock Hill Farm", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Benchmark Small Batch", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Benchmark Top Floor", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Silver Dollar", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Breckenridge", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 43, proof: 86 },
  
  // ============================================
  // BOURBON - James B. Beam
  // ============================================
  { name: "Booker's", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 62.15, proof: 124.3 },
  { name: "Booker's The Storybook", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 63.9, proof: 127.8 },
  { name: "Booker's 2021-01", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 63.3, proof: 126.6 },
  { name: "Booker's 2021-02", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 64.1, proof: 128.2 },
  { name: "Booker's 2022-01", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 63.55, proof: 127.1 },
  { name: "Basil Hayden's", distillery: "James B. Beam", type: "Bourbon", age: 8, abv: 40, proof: 80 },
  { name: "Basil Hayden's Dark Assembly", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Basil Hayden's 10 Year", distillery: "James B. Beam", type: "Bourbon", age: 10, abv: 40, proof: 80 },
  { name: "Old Grand-Dad 114", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 57, proof: 114 },
  { name: "Old Grand-Dad Bonded", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Knob Creek 9 Year", distillery: "James B. Beam", type: "Bourbon", age: 9, abv: 50, proof: 100 },
  { name: "Knob Creek 12 Year", distillery: "James B. Beam", type: "Bourbon", age: 12, abv: 50, proof: 100 },
  { name: "Knob Creek Single Barrel", distillery: "James B. Beam", type: "Bourbon", age: 9, abv: 60, proof: 120 },
  { name: "Knob Creek 2001 22 Year", distillery: "James B. Beam", type: "Bourbon", age: 22, abv: 50.05, proof: 100.1 },
  { name: "Knob Creek Farm Collection", distillery: "James B. Beam", type: "Bourbon", age: 9, abv: 60, proof: 120 },
  { name: "Little Book Chapter 1", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 52, proof: 104 },
  { name: "Little Book Chapter 2", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 57.1, proof: 114.2 },
  { name: "Little Book Chapter 3", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 58.4, proof: 116.8 },
  { name: "Little Book Chapter 4", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 63.2, proof: 126.4 },
  { name: "Basil Hayden's 2 Year", distillery: "James B. Beam", type: "Bourbon", age: 2, abv: 40, proof: 80 },
  
  // ============================================
  // BOURBON - Four Roses
  // ============================================
  { name: "Four Roses Single Barrel", distillery: "Four Roses", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Four Roses Small Batch", distillery: "Four Roses", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Four Roses Yellow Label", distillery: "Four Roses", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Four Roses OBSF", distillery: "Four Roses", type: "Bourbon", age: 9, abv: 50, proof: 100 },
  { name: "Four Roses OBSO", distillery: "Four Roses", type: "Bourbon", age: 11, abv: 55, proof: 110 },
  { name: "Four Roses OBSK", distillery: "Four Roses", type: "Bourbon", age: 9, abv: 55, proof: 110 },
  { name: "Four Roses OBSQ", distillery: "Four Roses", type: "Bourbon", age: 10, abv: 55, proof: 110 },
  { name: "Four Roses OESK", distillery: "Four Roses", type: "Bourbon", age: 9, abv: 55, proof: 110 },
  { name: "Four Roses OESO", distillery: "Four Roses", type: "Bourbon", age: 11, abv: 55, proof: 110 },
  { name: "Four Roses OESV", distillery: "Four Roses", type: "Bourbon", age: 10, abv: 55, proof: 110 },
  { name: "Four Roses OESQ", distillery: "Four Roses", type: "Bourbon", age: 10, abv: 55, proof: 110 },
  
  // ============================================
  // BOURBON - Brown-Forman
  // ============================================
  { name: "Old Forester 1920", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 57.5, proof: 115 },
  { name: "Old Forester 1897", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 47.5, proof: 95 },
  { name: "Old Forester 1918", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Old Forester Classic 86", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 43, proof: 86 },
  { name: "Old Forester Birthday Bourbon 2021", distillery: "Brown-Forman", type: "Bourbon", age: 12, abv: 49, proof: 98 },
  { name: "Old Forester Birthday Bourbon 2022", distillery: "Brown-Forman", type: "Bourbon", age: 12, abv: 48.5, proof: 97 },
  { name: "Old Forester Birthday Bourbon 2023", distillery: "Brown-Forman", type: "Bourbon", age: 12, abv: 49.9, proof: 99.8 },
  { name: "Old Forester Edge of World", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 57.5, proof: 115 },
  { name: "Woodford Reserve", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Woodford Reserve Double Oaked", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Woodford Reserve Master's Collection", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Woodford Reserve 2021 Distillery Series", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Woodford Reserve Batch Proof", distillery: "Woodford Reserve", type: "Bourbon", age: null, abv: 60.4, proof: 120.8 },
  { name: "Woodford Reserve Straight Rye", distillery: "Woodford Reserve", type: "Rye", age: null, abv: 45.2, proof: 90.4 },
  
  // ============================================
  // BOURBON - Sazerac
  // ============================================
  { name: "Buffalo Trace", distillery: "Sazerac", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Sazerac Rye 6 Year", distillery: "Sazerac", type: "Rye", age: 6, abv: 45, proof: 90 },
  { name: "Sazerac Rye 18 Year", distillery: "Sazerac", type: "Rye", age: 18, abv: 45.6, proof: 91.2 },
  { name: "Thomas H. Handy Sazerac Rye", distillery: "Sazerac", type: "Rye", age: null, abv: 63.45, proof: 126.9 },
  { name: "Old Charter Oak", distillery: "Sazerac", type: "Bourbon", age: null, abv: 45.2, proof: 90.4 },
  { name: "Old Charter Oak 12 Year", distillery: "Sazerac", type: "Bourbon", age: 12, abv: 45.2, proof: 90.4 },
  { name: "W Straight Rye", distillery: "Sazerac", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Bardstown Bourbon", distillery: "Sazerac", type: "Bourbon", age: null, abv: 45, proof: 90 },
  
  // ============================================
  // BOURBON - Other Major Distilleries
  // ============================================
  { name: "Maker's Mark", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Maker's Mark Cask Strength", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 55.7, proof: 111.4 },
  { name: "Maker's Mark 46", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 47, proof: 94 },
  { name: "Maker's Mark SE4xFP4", distillery: "Maker's Mark", type: "Bourbon", age: null, abv: 54.8, proof: 109.6 },
  { name: "Larceny", distillery: "Heaven Hill", type: "Bourbon", age: null, abv: 46, proof: 92 },
  { name: "Larceny Barrel Proof", distillery: "Heaven Hill", type: "Bourbon", age: null, abv: 61.2, proof: 122.4 },
  { name: "Elijah Craig Small Batch", distillery: "Heaven Hill", type: "Bourbon", age: null, abv: 47, proof: 94 },
  { name: "Elijah Craig Barrel Proof", distillery: "Heaven Hill", type: "Bourbon", age: null, abv: 58.5, proof: 117 },
  { name: "Elijah Craig 12 Year", distillery: "Heaven Hill", type: "Bourbon", age: 12, abv: 47, proof: 94 },
  { name: "Elijah Craig 18 Year", distillery: "Heaven Hill", type: "Bourbon", age: 18, abv: 45, proof: 90 },
  { name: "Elijah Craig 23 Year", distillery: "Heaven Hill", type: "Bourbon", age: 23, abv: 46.5, proof: 93 },
  { name: "Bernheim Original Wheat", distillery: "Heaven Hill", type: "Wheat", age: 7, abv: 45, proof: 90 },
  { name: "Old Fitzgerald 8 Year Bottled in Bond", distillery: "Heaven Hill", type: "Bourbon", age: 8, abv: 50, proof: 100 },
  { name: "Old Fitzgerald 15 Year Bottled in Bond", distillery: "Heaven Hill", type: "Bourbon", age: 15, abv: 50, proof: 100 },
  { name: "A.H. Hirsch Reserve", distillery: "Heaven Hill", type: "Bourbon", age: 16, abv: 46, proof: 92 },
  { name: "Dewar's 12 Year", distillery: "Dewar's", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Aberlour 12 Year", distillery: "Aberlour", type: "Scotch", age: 12, abv: 43, proof: 86 },
  { name: "Famous Grouse", distillery: "Matthew Gloag", type: "Scotch", age: null, abv: 40, proof: 80 },
  
  // ============================================
  // BOURBON - Jack Daniel's (Brown-Forman)
  // ============================================
  { name: "Jack Daniel's Old No. 7", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 40, proof: 80 },
  { name: "Jack Daniel's Single Barrel", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 47, proof: 94 },
  { name: "Jack Daniel's Bonded", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Jack Daniel's Sinatra Century", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Jack Daniel's Coyote High", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Jack Daniel's 150 Anniversary", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Gentleman Jack", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 40, proof: 80 },
  { name: "Jack Daniel's Double Gold", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  
  // ============================================
  // BOURBON - Wild Turkey (Campari)
  // ============================================
  { name: "Wild Turkey 101", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 50.5, proof: 101 },
  { name: "Wild Turkey 101 8 Year", distillery: "Wild Turkey", type: "Bourbon", age: 8, abv: 50.5, proof: 101 },
  { name: "Wild Turkey Rare Breed", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 54.1, proof: 108.2 },
  { name: "Russell's Reserve 10 Year", distillery: "Wild Turkey", type: "Bourbon", age: 10, abv: 45, proof: 90 },
  { name: "Russell's Reserve Single Barrel", distillery: "Wild Turkey", type: "Bourbon", age: 10, abv: 55, proof: 110 },
  { name: "Russell's Reserve 6 Year", distillery: "Wild Turkey", type: "Bourbon", age: 6, abv: 52.5, proof: 105 },
  { name: "Wild Turkey Forgiven", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 45, proof: 90 },
  { name: "Wild Turkey Master's Keep Unforgotten", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 48.2, proof: 96.4 },
  { name: "Wild Turkey Master's Keep Decades", distillery: "Wild Turkey", type: "Bourbon", age: 12, abv: 52, proof: 104 },
  { name: "Wild Turkey Kentucky Spirit", distillery: "Wild Turkey", type: "Bourbon", age: null, abv: 50.5, proof: 101 },
  
  // ============================================
  // BOURBON - Michter's (Brown-Forman)
  // ============================================
  { name: "Michter's US*1 Small Batch", distillery: "Michter's", type: "Bourbon", age: null, abv: 45.7, proof: 91.4 },
  { name: "Michter's 10 Year", distillery: "Michter's", type: "Bourbon", age: 10, abv: 46.4, proof: 92.8 },
  { name: "Michter's 20 Year", distillery: "Michter's", type: "Bourbon", age: 20, abv: 45.7, proof: 91.4 },
  { name: "Michter's 25 Year", distillery: "Michter's", type: "Bourbon", age: 25, abv: 45.7, proof: 91.4 },
  { name: "Michter's Barrel Strength", distillery: "Michter's", type: "Bourbon", age: null, abv: 54.95, proof: 109.9 },
  { name: "Michter's Toasted Barrel", distillery: "Michter's", type: "Bourbon", age: null, abv: 45.7, proof: 91.4 },
  { name: "Michter's Sour Mash", distillery: "Michter's", type: "Bourbon", age: null, abv: 43, proof: 86 },
  { name: "Michter's US*1 Rye", distillery: "Michter's", type: "Rye", age: null, abv: 42.4, proof: 84.8 },
  { name: "Michter's 10 Year Rye", distillery: "Michter's", type: "Rye", age: 10, abv: 46.4, proof: 92.8 },
  { name: "Michter's 25 Year Rye", distillery: "Michter's", type: "Rye", age: 25, abv: 42.8, proof: 85.6 },
  { name: "Michter's Barrel Strength Rye", distillery: "Michter's", type: "Rye", age: null, abv: 54.1, proof: 108.2 },
  
  // ============================================
  // BOURBON - Angel's Envy (Bacardi)
  // ============================================
  { name: "Angel's Envy", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 43.3, proof: 86.6 },
  { name: "Angel's Envy Cask Strength", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 59.7, proof: 119.4 },
  { name: "Angel's Envy Rye", distillery: "Angel's Envy", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Angel's Envy Caribbean Rum Cask", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Angel's Envy Finished in Port Wine", distillery: "Angel's Envy", type: "Bourbon", age: null, abv: 43.3, proof: 86.6 },
  
  // ============================================
  // BOURBON - Other Craft/Large Distilleries
  // ============================================
  { name: "Bulleit 10 Year", distillery: "Bulleit", type: "Bourbon", age: 10, abv: 45.6, proof: 91.2 },
  { name: "Bulleit Frontier Whiskey", distillery: "Bulleit", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Bulleit 95 Rye", distillery: "Bulleit", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "I.W. Harper 15 Year", distillery: "I.W. Harper", type: "Bourbon", age: 15, abv: 43, proof: 86 },
  { name: "I.W. Harper Bonded", distillery: "I.W. Harper", type: "Bourbon", age: null, abv: 50, proof: 100 },
  { name: "Old Forester 117", distillery: "Brown-Forman", type: "Bourbon", age: null, abv: 57, proof: 114 },
  { name: "Fighting Cock 6 Year", distillery: "Heaven Hill", type: "Bourbon", age: 6, abv: 51.5, proof: 103 },
  { name: "Old Grand-Dad", distillery: "James B. Beam", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Rye 95", distillery: "Bulleit", type: "Rye", age: null, abv: 45, proof: 90 },
  
  // ============================================
  // RYE - MGP (Large Producer)
  // ============================================
  { name: "Old Overholt Bonded", distillery: "Old Overholt (MGP)", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Old Overholt 11 Year", distillery: "Old Overholt (MGP)", type: "Rye", age: 11, abv: 46, proof: 92 },
  { name: "Rittenhouse Rye", distillery: "Rittenhouse (MGP)", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Rittenhouse 21 Year", distillery: "Rittenhouse (MGP)", type: "Rye", age: 21, abv: 50, proof: 100 },
  { name: "Bulleit Rye", distillery: "MGP", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Knob Creek Rye", distillery: "James B. Beam", type: "Rye", age: null, abv: 50, proof: 100 },
  { name: "Woodford Reserve Straight Rye", distillery: "Woodford Reserve", type: "Rye", age: null, abv: 45.2, proof: 90.4 },
  { name: "Michter's US*1 Rye", distillery: "Michter's", type: "Rye", age: null, abv: 42.4, proof: 84.8 },
  { name: "Angel's Envy Rye", distillery: "Angel's Envy", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Sazerac Rye 6 Year", distillery: "Sazerac", type: "Rye", age: 6, abv: 45, proof: 90 },
  { name: "Thomas H. Handy", distillery: "Sazerac", type: "Rye", age: null, abv: 63.45, proof: 126.9 },
  { name: "Willett Family Estate Rye 4 Year", distillery: "Willett", type: "Rye", age: 4, abv: 55, proof: 110 },
  { name: "Willett Family Estate Rye 6 Year", distillery: "Willett", type: "Rye", age: 6, abv: 55.1, proof: 110.2 },
  { name: "Willett Family Estate Rye 8 Year", distillery: "Willett", type: "Rye", age: 8, abv: 55, proof: 110 },
  { name: "Old Forester Rye", distillery: "Brown-Forman", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Crown Royal Northern Harvest Rye", distillery: "Crown Royal", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Lot 40 Rye", distillery: "Lot 40", type: "Rye", age: null, abv: 45, proof: 90 },
  { name: "Alberta Premium 30 Year", distillery: "Alberta Premium", type: "Rye", age: 30, abv: 40, proof: 80 },
  { name: "J.D. Harrington Rye", distillery: "MGP", type: "Rye", age: null, abv: 46, proof: 92 },
  { name: "Pike Creek 10 Year", distillery: "Pike Creek", type: "Canadian", age: 10, abv: 40, proof: 80 },
  
  // ============================================
  // CRAFT BOURBON - Various Distilleries
  // ============================================
  { name: "Smoke Wagon Uncut Unfiltered", distillery: "Smoke Wagon", type: "Bourbon", age: null, abv: 58.8, proof: 117.6 },
  { name: "Smoke Wagon Small Batch", distillery: "Smoke Wagon", type: "Bourbon", age: null, abv: 46.5, proof: 93 },
  { name: "Smoke Wagon Straight Bourbon", distillery: "Smoke Wagon", type: "Bourbon", age: 5, abv: 50, proof: 100 },
  { name: "El Cope", distillery: "El Cope", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Hard Row Canadian", distillery: "Hard Row", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "New Riff Kentucky Straight Bourbon", distillery: "New Riff", type: "Bourbon", age: 4, abv: 50, proof: 100 },
  { name: "New Riff Backsetter", distillery: "New Riff", type: "Bourbon", age: 4, abv: 55, proof: 110 },
  { name: "Bardstown Bourbon Company Fusion", distillery: "Bardstown Bourbon Co.", type: "Bourbon", age: null, abv: 49.5, proof: 99 },
  { name: "Bardstown Bourbon Company Vermillion", distillery: "Bardstown Bourbon Co.", type: "Bourbon", age: null, abv: 49.5, proof: 99 },
  { name: "J.T.S. Brown", distillery: "Barton", type: "Bourbon", age: null, abv: 46.5, proof: 93 },
  { name: "Very Old Barton", distillery: "Barton", type: "Bourbon", age: null, abv: 43, proof: 86 },
  { name: "Barton 1792", distillery: "Barton", type: "Bourbon", age: null, abv: 46.85, proof: 93.7 },
  { name: "1792 Full Proof", distillery: "Barton", type: "Bourbon", age: null, abv: 62.05, proof: 124.1 },
  { name: "1792 Sweet Mash", distillery: "Barton", type: "Bourbon", age: null, abv: 46.85, proof: 93.7 },
  { name: "1792 12 Year", distillery: "Barton", type: "Bourbon", age: 12, abv: 46.85, proof: 93.7 },
  { name: "Old Taylor", distillery: "Old Taylor", type: "Bourbon", age: null, abv: 40, proof: 80 },
  { name: "Old Weller Antique", distillery: "Buffalo Trace", type: "Bourbon", age: null, abv: 53.5, proof: 107 },
  
  // ============================================
  // IRISH WHISKEY
  // ============================================
  { name: "Jameson", distillery: "Jameson", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Jameson Black Barrel", distillery: "Jameson", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Jameson 18 Year", distillery: "Jameson", type: "Irish", age: 18, abv: 40, proof: 80 },
  { name: "Jameson Bow Street 18 Year", distillery: "Jameson", type: "Irish", age: 18, abv: 40, proof: 80 },
  { name: "Jameson Gold Reserve", distillery: "Jameson", type: "Irish", age: null, abv: 43, proof: 86 },
  { name: "Redbreast 12 Year", distillery: "Midleton", type: "Irish", age: 12, abv: 40, proof: 80 },
  { name: "Redbreast 15 Year", distillery: "Midleton", type: "Irish", age: 15, abv: 46, proof: 92 },
  { name: "Redbreast 21 Year", distillery: "Midleton", type: "Irish", age: 21, abv: 46, proof: 92 },
  { name: "Redbreast 27 Year", distillery: "Midleton", type: "Irish", age: 27, abv: 54.3, proof: 108.6 },
  { name: "Green Spot", distillery: "Midleton", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Yellow Spot", distillery: "Midleton", type: "Irish", age: 12, abv: 46, proof: 92 },
  { name: "Blue Spot", distillery: "Midleton", type: "Irish", age: 7, abv: 58.4, proof: 116.8 },
  { name: "Power's Gold Label", distillery: "Midleton", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Tullamore Dew", distillery: "Tullamore", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Tullamore Dew 14 Year", distillery: "Tullamore", type: "Irish", age: 14, abv: 43, proof: 86 },
  { name: "Tullamore Dew Phoenix", distillery: "Tullamore", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "Bushmills 10 Year", distillery: "Bushmills", type: "Irish", age: 10, abv: 40, proof: 80 },
  { name: "Bushmills 16 Year", distillery: "Bushmills", type: "Irish", age: 16, abv: 40, proof: 80 },
  { name: "Bushmills 21 Year", distillery: "Bushmills", type: "Irish", age: 21, abv: 40, proof: 80 },
  { name: "Bushmills 25 Year", distillery: "Bushmills", type: "Irish", age: 25, abv: 46, proof: 92 },
  { name: "Redbreast Lustau Edition", distillery: "Midleton", type: "Irish", age: null, abv: 46, proof: 92 },
  { name: "Methodical Madras", distillery: "Midleton", type: "Irish", age: null, abv: 40, proof: 80 },
  
  // ============================================
  // SCOTCH - Islay
  // ============================================
  { name: "Lagavulin 8 Year", distillery: "Lagavulin", type: "Scotch", age: 8, abv: 48, proof: 96 },
  { name: "Lagavulin 12 Year", distillery: "Lagavulin", type: "Scotch", age: 12, abv: 48, proof: 96 },
  { name: "Lagavulin 16 Year", distillery: "Lagavulin", type: "Scotch", age: 16, abv: 43, proof: 86 },
  { name: "Lagavulin Distillers Edition", distillery: "Lagavulin", type: "Scotch", age: 16, abv: 43, proof: 86 },
  { name: "Lagavulin 1998 Distillers Edition", distillery: "Lagavulin", type: "Scotch", age: 16, abv: 43, proof: 86 },
  { name: "Laphroaig 10 Year", distillery: "Laphroaig", type: "Scotch", age: 10, abv: 40, proof: 80 },
  { name: "Laphroaig Cairdeas", distillery: "Laphroaig", type: "Scotch", age: null, abv: 51.5, proof: 103 },
  { name: "Laphroaig 18 Year", distillery: "Laphroaig", type: "Scotch", age: 18, abv: 48, proof: 96 },
  { name: "Laphroaig QC", distillery: "Laphroaig", type: "Scotch", age: null, abv: 55.5, proof: 111 },
  { name: "Laphroaig 25 Year", distillery: "Laphroaig", type: "Scotch", age: 25, abv: 43.3, proof: 86.6 },
  { name: "Laphroaig 33 Year", distillery: "Laphroaig", type: "Scotch", age: 33, abv: 41.5, proof: 83 },
  { name: "Ardbeg 10 Year", distillery: "Ardbeg", type: "Scotch", age: 10, abv: 46, proof: 92 },
  { name: "Ardbeg Uigeadail", distillery: "Ardbeg", type: "Scotch", age: null, abv: 54.2, proof: 108.4 },
  { name: "Ardbeg Corryvreckan", distillery: "Ardbeg", type: "Scotch", age: null, abv: 57.1, proof: 114.2 },
  { name: "Ardbeg An Oa", distillery: "Ardbeg", type: "Scotch", age: null, abv: 46.6, proof: 93.2 },
  { name: "Ardbeg Traigh Bhan 19 Year", distillery: "Ardbeg", type: "Scotch", age: 19, abv: 46.3, proof: 92.6 },
  { name: "Port Charlotte 10 Year", distillery: "Port Charlotte", type: "Scotch", age: 10, abv: 50, proof: 100 },
  { name: "Port Charlotte MRC:01", distillery: "Port Charlotte", type: "Scotch", age: null, abv: 58.7, proof: 117.4 },
  { name: "Port Ellen 40 Year", distillery: "Port Ellen", type: "Scotch", age: 40, abv: 44.2, proof: 88.4 },
  { name: "Bruichladdich Classic Laddie", distillery: "Bruichladdich", type: "Scotch", age: null, abv: 50, proof: 100 },
  { name: "Octomore 10 Year", distillery: "Bruichladdich", type: "Scotch", age: null, abv: 59.3, proof: 118.6 },
  
  // ============================================
  // SCOTCH - Speyside
  // ============================================
  { name: "Glenfiddich 12 Year", distillery: "Glenfiddich", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Glenfiddich 14 Year", distillery: "Glenfiddich", type: "Scotch", age: 14, abv: 48, proof: 96 },
  { name: "Glenfiddich 15 Year", distillery: "Glenfiddich", type: "Scotch", age: 15, abv: 40, proof: 80 },
  { name: "Glenfiddich 18 Year", distillery: "Glenfiddich", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Glenfiddich 21 Year", distillery: "Glenfiddich", type: "Scotch", age: 21, abv: 43, proof: 86 },
  { name: "Glenfiddich 25 Year", distillery: "Glenfiddich", type: "Scotch", age: 25, abv: 43, proof: 86 },
  { name: "Glenfiddich IPA Edition", distillery: "Glenfiddich", type: "Scotch", age: null, abv: 43, proof: 86 },
  { name: "Glenfiddich Project XX", distillery: "Glenfiddich", type: "Scotch", age: null, abv: 47, proof: 94 },
  { name: "Macallan 12 Year", distillery: "Macallan", type: "Scotch", age: 12, abv: 43, proof: 86 },
  { name: "Macallan 15 Year", distillery: "Macallan", type: "Scotch", age: 15, abv: 43, proof: 86 },
  { name: "Macallan 18 Year", distillery: "Macallan", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Macallan 21 Year", distillery: "Macallan", type: "Scotch", age: 21, abv: 43, proof: 86 },
  { name: "Macallan 25 Year", distillery: "Macallan", type: "Scotch", age: 25, abv: 43, proof: 86 },
  { name: "Macallan庄园", distillery: "Macallan", type: "Scotch", age: null, abv: 44.5, proof: 89 },
  { name: "Macallan Rare Cask", distillery: "Macallan", type: "Scotch", age: null, abv: 43, proof: 86 },
  { name: "Macallan Reflexion", distillery: "Macallan", type: "Scotch", age: null, abv: 43, proof: 86 },
  { name: "Glenlivet 12 Year", distillery: "Glenlivet", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Glenlivet 15 Year", distillery: "Glenlivet", type: "Scotch", age: 15, abv: 40, proof: 80 },
  { name: "Glenlivet 18 Year", distillery: "Glenlivet", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Glenlivet 21 Year", distillery: "Glenlivet", type: "Scotch", age: 21, abv: 43, proof: 86 },
  { name: "Glenlivet 25 Year", distillery: "Glenlivet", type: "Scotch", age: 25, abv: 43, proof: 86 },
  { name: "Glenmorangie 10 Year", distillery: "Glenmorangie", type: "Scotch", age: 10, abv: 43, proof: 86 },
  { name: "Glenmorangie 14 Year", distillery: "Glenmorangie", type: "Scotch", age: 14, abv: 46, proof: 92 },
  { name: "Glenmorangie 18 Year", distillery: "Glenmorangie", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Glenmorangie Signet", distillery: "Glenmorangie", type: "Scotch", age: null, abv: 46, proof: 92 },
  { name: "Aberlour Abunadh", distillery: "Aberlour", type: "Scotch", age: null, abv: 60.1, proof: 120.2 },
  { name: "Aberlour 16 Year", distillery: "Aberlour", type: "Scotch", age: 16, abv: 48, proof: 96 },
  { name: "Aberlour A'bunadh Batch 62", distillery: "Aberlour", type: "Scotch", age: null, abv: 60.5, proof: 121 },
  { name: "Tullamore DEW", distillery: "Tullamore", type: "Irish", age: null, abv: 40, proof: 80 },
  { name: "GlenDronach 12 Year", distillery: "GlenDronach", type: "Scotch", age: 12, abv: 43, proof: 86 },
  { name: "GlenDronach 18 Year", distillery: "GlenDronach", type: "Scotch", age: 18, abv: 48, proof: 96 },
  { name: "GlenDronach 21 Year", distillery: "GlenDronach", type: "Scotch", age: 21, abv: 48, proof: 96 },
  { name: "Balvenie 12 Year Single Barrel", distillery: "Balvenie", type: "Scotch", age: 12, abv: 47.8, proof: 95.6 },
  { name: "Balvenie 14 Year Caribbean Cask", distillery: "Balvenie", type: "Scotch", age: 14, abv: 43, proof: 86 },
  { name: "Balvenie 21 Year", distillery: "Balvenie", type: "Scotch", age: 21, abv: 43, proof: 86 },
  { name: "Craigellachie 13 Year", distillery: "Craigellachie", type: "Scotch", age: 13, abv: 46, proof: 92 },
  { name: "Glenrothes 12 Year", distillery: "Glenrothes", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Glenrothes 18 Year", distillery: "Glenrothes", type: "Scotch", age: 18, abv: 46, proof: 92 },
  
  // ============================================
  // SCOTCH - Highlands
  // ============================================
  { name: "Highland Park 12 Year", distillery: "Highland Park", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Highland Park 15 Year", distillery: "Highland Park", type: "Scotch", age: 15, abv: 40, proof: 80 },
  { name: "Highland Park 18 Year", distillery: "Highland Park", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Highland Park 25 Year", distillery: "Highland Park", type: "Scotch", age: 25, abv: 48.3, proof: 96.6 },
  { name: "Highland Park Valkyrie", distillery: "Highland Park", type: "Scotch", age: null, abv: 45.9, proof: 91.8 },
  { name: "Highland Park Dark Origins", distillery: "Highland Park", type: "Scotch", age: null, abv: 46.8, proof: 93.6 },
  { name: "Dalmore 12 Year", distillery: "Dalmore", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Dalmore 15 Year", distillery: "Dalmore", type: "Scotch", age: 15, abv: 40, proof: 80 },
  { name: "Dalmore 18 Year", distillery: "Dalmore", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Dalmore Cigar Malt", distillery: "Dalmore", type: "Scotch", age: null, abv: 44, proof: 88 },
  { name: "Dalmore Gran Reserva", distillery: "Dalmore", type: "Scotch", age: null, abv: 43, proof: 86 },
  { name: "Aberfeldy12 Year", distillery: "Aberfeldy", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Aberfeldy 16 Year", distillery: "Aberfeldy", type: "Scotch", age: 16, abv: 40, proof: 80 },
  { name: "Clynelish 14 Year", distillery: "Clynelish", type: "Scotch", age: 14, abv: 46, proof: 92 },
  { name: "Clynelish 1995 23 Year", distillery: "Clynelish", type: "Scotch", age: 23, abv: 48.6, proof: 97.2 },
  { name: "Old Pulteney 12 Year", distillery: "Old Pulteney", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Old Pulteney 18 Year", distillery: "Old Pulteney", type: "Scotch", age: 18, abv: 46, proof: 92 },
  { name: "Old Pulteney 21 Year", distillery: "Old Pulteney", type: "Scotch", age: 21, abv: 46, proof: 92 },
  { name: "Ben Nevis 10 Year", distillery: "Ben Nevis", type: "Scotch", age: 10, abv: 46, proof: 92 },
  { name: "Deanston 12 Year", distillery: "Deanston", type: "Scotch", age: 12, abv: 46.3, proof: 92.6 },
  { name: "Deanston 18 Year", distillery: "Deanston", type: "Scotch", age: 18, abv: 43.3, proof: 86.6 },
  { name: "Royal Lochnagar 12 Year", distillery: "Royal Lochnagar", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "GlenWyvis 3 Year", distillery: "GlenWyvis", type: "Scotch", age: 3, abv: 46, proof: 92 },
  
  // ============================================
  // SCOTCH - Lowlands
  // ============================================
  { name: "Auchentoshan 12 Year", distillery: "Auchentoshan", type: "Scotch", age: 12, abv: 40, proof: 80 },
  { name: "Auchentoshan 18 Year", distillery: "Auchentoshan", type: "Scotch", age: 18, abv: 43, proof: 86 },
  { name: "Auchentoshan Valinch", distillery: "Auchentoshan", type: "Scotch", age: null, abv: 50, proof: 100 },
  { name: "Auchentoshan American Oak", distillery: "Auchentoshan", type: "Scotch", age: null, abv: 50, proof: 100 },
  { name: "Glenkinchie 12 Year", distillery: "Glenkinchie", type: "Scotch", age: 12, abv: 43, proof: 86 },
  { name: "Glenkinchie 20 Year", distillery: "Glenkinchie", type: "Scotch", age: 20, abv: 43, proof: 86 },
  { name: "Tullamore Dew", distillery: "Tullamore", type: "Irish", age: null, abv: 40, proof: 80 },
  
  // ============================================
  // SCOTCH - Campbeltown
  // ============================================
  { name: "Springbank 10 Year", distillery: "Springbank", type: "Scotch", age: 10, abv: 46, proof: 92 },
  { name: "Springbank 12 Year", distillery: "Springbank", type: "Scotch", age: 12, abv: 48, proof: 96 },
  { name: "Springbank 15 Year", distillery: "Springbank", type: "Scotch", age: 15, abv: 46, proof: 92 },
  { name: "Springbank 18 Year", distillery: "Springbank", type: "Scotch", age: 18, abv: 46, proof: 92 },
  { name: "Springbank 21 Year", distillery: "Springbank", type: "Scotch", age: 21, abv: 46, proof: 92 },
  { name: "Springbank 25 Year", distillery: "Springbank", type: "Scotch", age: 25, abv: 45, proof: 90 },
  { name: "Longrow 10 Year", distillery: "Springbank", type: "Scotch", age: 10, abv: 46, proof: 92 },
  { name: "Longrow 18 Year", distillery: "Springbank", type: "Scotch", age: 18, abv: 46, proof: 92 },
  { name: "Hazelburn 13 Year", distillery: "Springbank", type: "Scotch", age: 13, abv: 46, proof: 92 },
  { name: "Kilkerran 12 Year", distillery: "Glen Scotia", type: "Scotch", age: 12, abv: 46, proof: 92 },
  { name: "Glen Scotia 14 Year", distillery: "Glen Scotia", type: "Scotch", age: 14, abv: 46, proof: 92 },
  
  // ============================================
  // SCOTCH - Islands
  // ============================================
  { name: "Talisker 10 Year", distillery: "Talisker", type: "Scotch", age: 10, abv: 45.8, proof: 91.6 },
  { name: "Talisker 18 Year", distillery: "Talisker", type: "Scotch", age: 18, abv: 45.8, proof: 91.6 },
  { name: "Talisker Distillers Edition", distillery: "Talisker", type: "Scotch", age: 15, abv: 45.8, proof: 91.6 },
  { name: "Talisker 25 Year", distillery: "Talisker", type: "Scotch", age: 25, abv: 48.3, proof: 96.6 },
  { name: "Isle of Jura 10 Year", distillery: "Isle of Jura", type: "Scotch", age: 10, abv: 40, proof: 80 },
  { name: "Isle of Jura 16 Year", distillery: "Isle of Jura", type: "Scotch", age: 16, abv: 40, proof: 80 },
  { name: "Isle of Jura Prophecy", distillery: "Isle of Jura", type: "Scotch", age: null, abv: 46, proof: 92 },
  { name: "Arran 10 Year", distillery: "Arran", type: "Scotch", age: 10, abv: 50, proof: 100 },
  { name: "Arran 18 Year", distillery: "Arran", type: "Scotch", age: 18, abv: 46, proof: 92 },
  { name: "Ledaig 10 Year", distillery: "Tobermory", type: "Scotch", age: 10, abv: 46.3, proof: 92.6 },
  { name: "Ledaig 18 Year", distillery: "Tobermory", type: "Scotch", age: 18, abv: 46.3, proof: 92.6 },
  
  // ============================================
  // JAPANESE WHISKEY
  // ============================================
  { name: "Yamazaki 12 Year", distillery: "Yamazaki", type: "Japanese", age: 12, abv: 43, proof: 86 },
  { name: "Yamazaki 18 Year", distillery: "Yamazaki", type: "Japanese", age: 18, abv: 43, proof: 86 },
  { name: "Yamazaki 25 Year", distillery: "Yamazaki", type: "Japanese", age: 25, abv: 43, proof: 86 },
  { name: "Hibiki Harmony", distillery: "Hibiki", type: "Japanese", age: null, abv: 43, proof: 86 },
  { name: "Hibiki 21 Year", distillery: "Hibiki", type: "Japanese", age: 21, abv: 43, proof: 86 },
  { name: "Hibiki Japanese Harmony", distillery: "Hibiki", type: "Japanese", age: null, abv: 43, proof: 86 },
  { name: "Nikka From the Barrel", distillery: "Nikka", type: "Japanese", age: null, abv: 51.4, proof: 102.8 },
  { name: "Nikka Miyagikyo 12 Year", distillery: "Nikka", type: "Japanese", age: 12, abv: 45, proof: 90 },
  { name: "Nikka Taketsuru 12 Year", distillery: "Nikka", type: "Japanese", age: 12, abv: 40, proof: 80 },
  { name: "Nikka Taketsuru 21 Year", distillery: "Nikka", type: "Japanese", age: 21, abv: 43, proof: 86 },
  { name: "Nikka Coffey Grain", distillery: "Nikka", type: "Japanese", age: null, abv: 45, proof: 90 },
  { name: "Nikka Coffey Malt", distillery: "Nikka", type: "Japanese", age: null, abv: 45, proof: 90 },
  { name: "Suntory Toki", distillery: "Suntory", type: "Japanese", age: null, abv: 43, proof: 86 },
  { name: "Suntory Kakubin", distillery: "Suntory", type: "Japanese", age: null, abv: 40, proof: 80 },
  { name: "Mars Iwai", distillery: "Mars", type: "Japanese", age: null, abv: 40, proof: 80 },
  { name: "Mars Shinshu 18 Year", distillery: "Mars", type: "Japanese", age: 18, abv: 50, proof: 100 },
  { name: "Mars Komagatake 2022", distillery: "Mars", type: "Japanese", age: null, abv: 50, proof: 100 },
  { name: "Fukano 16 Year", distillery: "Fukano", type: "Japanese", age: 16, abv: 53, proof: 106 },
  { name: "Kaiyo Mizunara", distillery: "Kaiyo", type: "Japanese", age: null, abv: 47, proof: 94 },
  { name: "Kaiyo Single Malt", distillery: "Kaiyo", type: "Japanese", age: null, abv: 47, proof: 94 },
  { name: "Ohishi 10 Year", distillery: "Ohishi", type: "Japanese", age: 10, abv: 43, proof: 86 },
  { name: "Akkeshi 10 Year", distillery: "Akkeshi", type: "Japanese", age: 10, abv: 50, proof: 100 },
  
  // ============================================
  // CANADIAN WHISKEY
  // ============================================
  { name: "Crown Royal", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Crown Royal XO", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Crown Royal Reserve", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Crown Royal Northern Harvest Rye", distillery: "Crown Royal", type: "Canadian", age: null, abv: 45, proof: 90 },
  { name: "Crown Royal 75th Anniversary", distillery: "Crown Royal", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Collingwood", distillery: "Collingwood", type: "Canadian", age: null, abv: 42.5, proof: 85 },
  { name: "Collingwood 21 Year", distillery: "Collingwood", type: "Canadian", age: 21, abv: 42.5, proof: 85 },
  { name: "Forty Creek Confederation", distillery: "Forty Creek", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Forty Creek Copper Pot", distillery: "Forty Creek", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Canadian Club 12 Year", distillery: "Canadian Club", type: "Canadian", age: 12, abv: 40, proof: 80 },
  { name: "Canadian Club 30 Year", distillery: "Canadian Club", type: "Canadian", age: 30, abv: 40, proof: 80 },
  { name: "Pike Creek 10 Year", distillery: "Pike Creek", type: "Canadian", age: 10, abv: 40, proof: 80 },
  { name: "Lot 40 Rye", distillery: "Lot 40", type: "Canadian", age: null, abv: 45, proof: 90 },
  { name: "Alberta Premium 30 Year", distillery: "Alberta Premium", type: "Canadian", age: 30, abv: 40, proof: 80 },
  { name: "Alberta Premium Dark Batch", distillery: "Alberta Premium", type: "Canadian", age: null, abv: 45, proof: 90 },
  { name: "Carrot Top", distillery: "Carrot Top", type: "Canadian", age: null, abv: 40, proof: 80 },
  { name: "Dillon's Rye", distillery: "Dillon's", type: "Canadian", age: null, abv: 43, proof: 86 },
  { name: "Goodridge Whiskey", distillery: "Goodridge", type: "Canadian", age: null, abv: 46, proof: 92 },
  { name: "Stalk & Barrel Single Malt", distillery: "Stalk & Barrel", type: "Canadian", age: null, abv: 46, proof: 92 },
  { name: "Brockmans", distillery: "Brockmans", type: "Gin", age: null, abv: 40, proof: 80 },
  
  // ============================================
  // TENNESSEE WHISKEY
  // ============================================
  { name: "Jack Daniel's Old No. 7", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 40, proof: 80 },
  { name: "Jack Daniel's Single Barrel", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 47, proof: 94 },
  { name: "Jack Daniel's Bonded", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Jack Daniel's Sinatra Century", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Jack Daniel's Coyote High", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Jack Daniel's 150 Anniversary", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "Gentleman Jack", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 40, proof: 80 },
  { name: "Jack Daniel's Double Gold", distillery: "Jack Daniel's", type: "Tennessee", age: null, abv: 50, proof: 100 },
  { name: "George Dickel 8 Year", distillery: "George Dickel", type: "Tennessee", age: 8, abv: 45, proof: 90 },
  { name: "George Dickel 13 Year", distillery: "George Dickel", type: "Tennessee", age: 13, abv: 45, proof: 90 },
  { name: "Benjamin Prichard's", distillery: "Benjamin Prichard's", type: "Tennessee", age: null, abv: 40, proof: 80 },
  
  // ============================================
  // WHEAT WHISKEY
  // ============================================
  { name: "Old Fitzgerald 8 Year", distillery: "Old Fitzgerald", type: "Wheat", age: 8, abv: 50, proof: 100 },
  { name: "W.L. Weller 12 Year", distillery: "W.L. Weller", type: "Wheat", age: 12, abv: 45, proof: 90 },
  { name: "W.L. Weller Antique 107", distillery: "W.L. Weller", type: "Wheat", age: null, abv: 53.5, proof: 107 },
  { name: "W.L. Weller Full Proof", distillery: "W.L. Weller", type: "Wheat", age: null, abv: 57.1, proof: 114.2 },
  { name: "W.L. Weller CYPB", distillery: "W.L. Weller", type: "Wheat", age: null, abv: 48.3, proof: 96.6 },
  { name: "Maker's Mark", distillery: "Maker's Mark", type: "Wheat", age: null, abv: 45, proof: 90 },
  { name: "Maker's Mark Cask Strength", distillery: "Maker's Mark", type: "Wheat", age: null, abv: 55.7, proof: 111.4 },
  { name: "Maker's Mark 46", distillery: "Maker's Mark", type: "Wheat", age: null, abv: 47, proof: 94 },
  { name: "Bernheim Original Wheat", distillery: "Heaven Hill", type: "Wheat", age: 7, abv: 45, proof: 90 },
  { name: "Old Grand-Dad", distillery: "James B. Beam", type: "Wheat", age: null, abv: 40, proof: 80 },
  { name: "Old Grand-Dad 114", distillery: "James B. Beam", type: "Wheat", age: null, abv: 57, proof: 114 }
];

// Search function
function searchWhiskeys(query) {
  if (!query || query.length < 2) return [];
  const lowerQuery = query.toLowerCase();
  return WHISKEY_DATABASE.filter(w => 
    w.name.toLowerCase().includes(lowerQuery) ||
    w.distillery.toLowerCase().includes(lowerQuery)
  ).slice(0, 10);
}

// Export for use in app
if (typeof window !== 'undefined') {
  window.whiskeySearch = searchWhiskeys;
  window.WHISKEY_DATABASE = WHISKEY_DATABASE;
}
