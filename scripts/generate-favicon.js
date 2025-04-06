const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');
const { loadImage } = require('canvas');

async function generateFavicon() {
    // Create a canvas
    const canvas = createCanvas(32, 32);
    const ctx = canvas.getContext('2d');

    // Set background color
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, 32, 32);

    // Draw a simple code icon
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 20px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('</>', 16, 16);

    // Save the favicon
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(path.join(__dirname, '../public/favicon.png'), buffer);

    console.log('Favicon generated successfully!');
}

generateFavicon().catch(console.error); 