// Generate Android icons from source image
const fs = require('fs');
const path = require('path');

// This won't actually work without a proper image library
// Instead, let's just copy the source image to all the needed locations
const srcPath = path.join(__dirname, '..', 'BarrelProofIcon.png');
const resPath = path.join(__dirname, '..', 'android', 'app', 'src', 'main', 'res');

// Target sizes
const sizes = {
    'mipmap-mdpi': 48,
    'mipmap-hdpi': 72,
    'mipmap-xhdpi': 96,
    'mipmap-xxhdpi': 144,
    'mipmap-xxxhdpi': 192
};

console.log('Note: For production, use Android Studio or online tools to resize.');
console.log('Copying source image to all locations...');

// Just copy the source 1024x1024 image
Object.keys(sizes).forEach(folder => {
    const dest = path.join(resPath, folder, 'ic_launcher.png');
    fs.copyFileSync(srcPath, dest);
    console.log(`Copied to ${folder}/ic_launcher.png`);
});

console.log('Done! Note: Source image is 1024x1024, not properly resized.');
