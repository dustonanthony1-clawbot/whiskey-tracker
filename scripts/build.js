// Simple build script - copies static web files to dist/
const fs = require('fs');
const path = require('path');

const srcDir = __dirname + '/..';
const distDir = __dirname + '/../dist';

// Ensure dist exists
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Copy Supabase JS from node_modules FIRST
const supabaseSrc = path.join(srcDir, 'node_modules', '@supabase', 'supabase-js', 'dist', 'umd', 'supabase.js');
const supabaseDest = path.join(distDir, 'supabase.js');
if (fs.existsSync(supabaseSrc)) {
  fs.copyFileSync(supabaseSrc, supabaseDest);
  console.log('Copied: supabase.js (local bundle)');
} else {
  console.warn('Supabase bundle not found at:', supabaseSrc);
}

// Files and folders to copy
const filesToCopy = [
  'index.html',
  'privacy.html',
  'app.js',
  'styles.css',
  'whiskey-db.js',
  'manifest.json',
  'sw.js',
  'barrel-logo.svg',
  'icon.svg',
  'app-icon.png'
];

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

// Update index.html to use local supabase.js instead of CDN
const indexPath = path.join(distDir, 'index.html');
if (fs.existsSync(indexPath)) {
  let html = fs.readFileSync(indexPath, 'utf8');
  html = html.replace(
    'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2',
    'supabase.js'
  );
  fs.writeFileSync(indexPath, html);
  console.log('Updated index.html to use local supabase.js');
}

console.log('Build complete!');
