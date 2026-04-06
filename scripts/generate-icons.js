// Generate Android app icons from barrel logo
const fs = require('fs');
const path = require('path');

// This is a placeholder - we'll use a simpler approach
// Actually, let's just copy the app-icon to the mipmap folders and let Android handle it

const srcPath = path.join(__dirname, '..', 'app-icon.png');
const resPath = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');

const sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192
};

// Copy same icon to all mipmap folders
Object.keys(sizes).forEach(folder => {
    const destPath = path.join(resPath, folder, 'ic_launcher.png');
    fs.copyFileSync(srcPath, destPath);
    console.log('Copied to:', destPath);
    
    const roundPath = path.join(resPath, folder, 'ic_launcher_round.png');
    fs.copyFileSync(srcPath, roundPath);
    console.log('Copied to:', roundPath);
});

console.log('Done! Note: For production, use properly sized images.');
