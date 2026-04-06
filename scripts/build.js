// Simple build script - copies static web files to dist/
const fs = require('fs');
const path = require('path');

const srcDir = __dirname + '/..';
const distDir = __dirname + '/../dist';

// Files and folders to copy
const filesToCopy = [
  'index.html',
  'app.js',
  'styles.css',
  'whiskey-db.js',
  'manifest.json',
  'sw.js',
  'barrel-logo.svg',
  'icon.svg',
  'app-icon.png'
];

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy files
filesToCopy.forEach(file => {
  const src = path.join(srcDir, file);
  const dest = path.join(distDir, file);
  if (fs.existsSync(src)) {
    fs.copyFileSync(src, dest);
    console.log('Copied:', file);
  } else {
    console.warn('Missing:', file);
  }
});

// Copy Supabase JS from node_modules
const supabaseSrc = path.join(srcDir, 'node_modules', '@supabase', 'supabase-js', 'dist', 'umd', 'supabase.js');
const supabaseDest = path.join(distDir, 'supabase.js');
if (fs.existsSync(supabaseSrc)) {
  fs.copyFileSync(supabaseSrc, supabaseDest);
  console.log('Copied: supabase.js (local bundle)');
} else {
  console.warn('Supabase bundle not found at:', supabaseSrc);
}

console.log('Build complete!');
