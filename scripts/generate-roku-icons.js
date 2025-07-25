const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const ASSETS_DIR = path.join(__dirname, '..', 'assets', 'images');
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

// Ensure directories exist
if (!fs.existsSync(ASSETS_DIR)) {
  fs.mkdirSync(ASSETS_DIR, { recursive: true });
}

if (!fs.existsSync(PUBLIC_DIR)) {
  fs.mkdirSync(PUBLIC_DIR, { recursive: true });
}

// Create a simple SVG logo for RokuApp
const createRokuAppSVG = () => {
  return `<svg width="1024" height="1024" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#6B46C1;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#9333EA;stop-opacity:1" />
      </linearGradient>
    </defs>
    
    <!-- Background circle -->
    <circle cx="512" cy="512" r="480" fill="url(#purpleGradient)" stroke="#4C1D95" stroke-width="8"/>
    
    <!-- Roku TV representation -->
    <rect x="312" y="350" width="400" height="240" rx="24" ry="24" fill="#1F2937" stroke="#374151" stroke-width="4"/>
    <rect x="332" y="370" width="360" height="160" rx="8" ry="8" fill="#111827"/>
    
    <!-- Remote control -->
    <rect x="420" y="620" width="60" height="160" rx="30" ry="30" fill="#374151" stroke="#6B7280" stroke-width="2"/>
    
    <!-- Remote buttons -->
    <circle cx="450" cy="660" r="12" fill="#6B46C1"/>
    <circle cx="450" cy="690" r="8" fill="#9CA3AF"/>
    <circle cx="430" cy="720" r="6" fill="#9CA3AF"/>
    <circle cx="470" cy="720" r="6" fill="#9CA3AF"/>
    <circle cx="450" cy="740" r="6" fill="#9CA3AF"/>
    
    <!-- App text -->
    <text x="512" y="300" font-family="Arial, sans-serif" font-size="80" font-weight="bold" fill="white" text-anchor="middle">ROKU</text>
    <text x="512" y="820" font-family="Arial, sans-serif" font-size="48" font-weight="normal" fill="white" text-anchor="middle">App</text>
  </svg>`;
};

// Generate icons with different sizes and configurations
async function generateRokuAppIcons() {
  console.log('Creating RokuApp SVG logo...');
  const logoSvg = Buffer.from(createRokuAppSVG());

  try {
    // 1. Master icon (1024×1024)
    console.log('Generating rokuapp-icon.png (1024x1024)...');
    await sharp(logoSvg)
      .resize(1024, 1024)
      .png({ quality: 90 })
      .toFile(path.join(ASSETS_DIR, 'rokuapp-icon.png'));

    // 2. Adaptive foreground (432×432) - no background
    console.log('Generating rokuapp-adaptive-foreground.png (432x432)...');
    const adaptiveSvg = `<svg width="432" height="432" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:#6B46C1;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#9333EA;stop-opacity:1" />
        </linearGradient>
      </defs>
      
      <!-- Roku TV representation -->
      <rect x="116" y="140" width="200" height="120" rx="12" ry="12" fill="#1F2937" stroke="#374151" stroke-width="2"/>
      <rect x="126" y="150" width="180" height="80" rx="4" ry="4" fill="#111827"/>
      
      <!-- Remote control -->
      <rect x="186" y="280" width="30" height="80" rx="15" ry="15" fill="#374151" stroke="#6B7280" stroke-width="1"/>
      
      <!-- Remote buttons -->
      <circle cx="201" cy="300" r="6" fill="#6B46C1"/>
      <circle cx="201" cy="315" r="4" fill="#9CA3AF"/>
      <circle cx="191" cy="330" r="3" fill="#9CA3AF"/>
      <circle cx="211" cy="330" r="3" fill="#9CA3AF"/>
      <circle cx="201" cy="345" r="3" fill="#9CA3AF"/>
      
      <!-- App text -->
      <text x="216" y="120" font-family="Arial, sans-serif" font-size="40" font-weight="bold" fill="#6B46C1" text-anchor="middle">ROKU</text>
      <text x="216" y="390" font-family="Arial, sans-serif" font-size="24" font-weight="normal" fill="#6B46C1" text-anchor="middle">App</text>
    </svg>`;
    
    await sharp(Buffer.from(adaptiveSvg))
      .resize(432, 432)
      .png({ quality: 90 })
      .toFile(path.join(ASSETS_DIR, 'rokuapp-adaptive-foreground.png'));

    // 3. Splash screen (1242×2436) with center logo on black background
    console.log('Generating rokuapp-splash.png (1242x2436)...');
    const splashWidth = 1242;
    const splashHeight = 2436;
    const logoSize = 400;
    
    // Create black background
    const blackBackground = await sharp({
      create: {
        width: splashWidth,
        height: splashHeight,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 1 }
      }
    }).png();

    // Resize logo and overlay on center
    const resizedLogo = await sharp(logoSvg)
      .resize(logoSize, logoSize)
      .png();

    await blackBackground
      .composite([{
        input: await resizedLogo.toBuffer(),
        top: Math.floor((splashHeight - logoSize) / 2),
        left: Math.floor((splashWidth - logoSize) / 2)
      }])
      .png({ quality: 90 })
      .toFile(path.join(ASSETS_DIR, 'rokuapp-splash.png'));

    // 4. Favicon.ico (32x32)
    console.log('Generating favicon.ico (32x32)...');
    await sharp(logoSvg)
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'favicon-32.png'));
    
    // Convert PNG to ICO (Sharp doesn't support ICO directly, so we'll create a PNG with ICO naming for now)
    await sharp(logoSvg)
      .resize(32, 32)
      .png()
      .toFile(path.join(PUBLIC_DIR, 'favicon.ico'));

    // 5. Logo192x192.png
    console.log('Generating logo192x192.png...');
    await sharp(logoSvg)
      .resize(192, 192)
      .png({ quality: 90 })
      .toFile(path.join(PUBLIC_DIR, 'logo192x192.png'));

    // 6. Logo512x512.png
    console.log('Generating logo512x512.png...');
    await sharp(logoSvg)
      .resize(512, 512)
      .png({ quality: 90 })
      .toFile(path.join(PUBLIC_DIR, 'logo512x512.png'));

    console.log('All RokuApp icons generated successfully!');
    console.log('Generated files:');
    console.log('- assets/images/rokuapp-icon.png (1024x1024)');
    console.log('- assets/images/rokuapp-splash.png (1242x2436)');
    console.log('- assets/images/rokuapp-adaptive-foreground.png (432x432)');
    console.log('- public/favicon.ico (32x32)');
    console.log('- public/logo192x192.png (192x192)');
    console.log('- public/logo512x512.png (512x512)');

  } catch (error) {
    console.error('Error generating icons:', error);
    throw error;
  }
}

// Run the generation
generateRokuAppIcons().catch(console.error);
