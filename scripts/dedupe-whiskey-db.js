// Script to remove duplicates from whiskey database
const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, '..', 'whiskey-db.js');
const content = fs.readFileSync(dbPath, 'utf8');

// Extract the database array content
const match = content.match(/const WHISKEY_DATABASE = \[([\s\S]*)\];/);
if (!match) {
    console.error('Could not find WHISKEY_DATABASE');
    process.exit(1);
}

let dbContent = match[1];

// Parse each whiskey entry - extract everything between { and }
const whiskeyRegex = /\{[^}]+\}/g;
const whiskeys = [];
let m;

while ((m = whiskeyRegex.exec(dbContent)) !== null) {
    const entry = m[0];
    // Create a normalized key for deduplication
    const nameMatch = entry.match(/name:\s*"([^"]+)"/);
    const distMatch = entry.match(/distillery:\s*"([^"]+)"/);
    const typeMatch = entry.match(/type:\s*"([^"]+)"/);
    
    if (nameMatch && distMatch && typeMatch) {
        const key = `${nameMatch[1].toLowerCase().trim()}|${distMatch[1].toLowerCase().trim()}|${typeMatch[1].toLowerCase().trim()}`;
        whiskeys.push({ key, entry });
    }
}

console.log(`Found ${whiskeys.length} entries`);

// Find duplicates
const seen = new Map();
const duplicates = [];

whiskeys.forEach((w, idx) => {
    if (seen.has(w.key)) {
        duplicates.push({ idx, key: w.key, entry: w.entry });
    } else {
        seen.set(w.key, idx);
    }
});

if (duplicates.length > 0) {
    console.log(`Found ${duplicates.length} duplicates:`);
    duplicates.forEach(d => {
        console.log(`  - ${d.key}`);
    });
} else {
    console.log('No duplicates found!');
}

// Remove duplicates
const uniqueWhiskeys = whiskeys.filter((w, idx) => !duplicates.find(d => d.idx === idx));

// Rebuild the file
const header = `const WHISKEY_DATABASE = [\n`;
const footer = `\n];\n`;

// Sort alphabetically by name within each category
// First, let's preserve the structure by keeping unique entries
const uniqueEntries = uniqueWhiskeys.map(w => w.entry);
const newDbContent = uniqueEntries.join(',\n  ');

const newContent = header + '  ' + newDbContent + footer;

fs.writeFileSync('whiskey-db.js', newContent);

console.log(`\nOriginal: ${whiskeys.length} entries`);
console.log(`Duplicates removed: ${duplicates.length}`);
console.log(`Final: ${uniqueWhiskeys.length} entries`);
console.log('\nDatabase cleaned!');
