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

console.log('Build complete!');
