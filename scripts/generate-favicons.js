const fs = require('fs');
const path = require('path');

// SVG base para el favicon
const faviconSVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo circular con gradiente -->
  <defs>
    <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e40af;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3b82f6;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#ffffff;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e0e7ff;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Círculo de fondo -->
  <circle cx="16" cy="16" r="15" fill="url(#bgGradient)" stroke="#1e3a8a" stroke-width="1"/>
  
  <!-- Icono de código -->
  <path d="M8 12L4 16L8 20M24 12L28 16L24 20M20 6L12 26" stroke="url(#iconGradient)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  
  <!-- Sparkle effect -->
  <circle cx="22" cy="10" r="1" fill="#fbbf24" opacity="0.8"/>
  <circle cx="26" cy="14" r="0.5" fill="#fbbf24" opacity="0.6"/>
</svg>`;

// Función para generar el favicon.ico (simulado como SVG)
const generateFaviconICO = () => {
  const icoContent = faviconSVG;
  fs.writeFileSync(path.join(__dirname, '../public/favicon.ico'), icoContent);
  console.log('✅ favicon.ico generado');
};

// Función para generar PNGs de diferentes tamaños (simulado como SVG)
const generatePNGs = () => {
  const sizes = [
    { name: 'favicon-16x16.png', size: 16 },
    { name: 'favicon-32x32.png', size: 32 },
    { name: 'apple-touch-icon.png', size: 180 },
    { name: 'android-chrome-192x192.png', size: 192 },
    { name: 'android-chrome-512x512.png', size: 512 }
  ];

  sizes.forEach(({ name, size }) => {
    const pngContent = faviconSVG.replace('width="32" height="32"', `width="${size}" height="${size}"`);
    fs.writeFileSync(path.join(__dirname, '../public', name), pngContent);
    console.log(`✅ ${name} generado (${size}x${size})`);
  });
};

// Función principal
const generateFavicons = () => {
  console.log('🎨 Generando favicons...');
  
  // Asegurar que el directorio public existe
  const publicDir = path.join(__dirname, '../public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  
  generateFaviconICO();
  generatePNGs();
  
  console.log('🎉 ¡Todos los favicons han sido generados!');
  console.log('📝 Nota: Para convertir SVG a PNG/ICO real, usa herramientas como:');
  console.log('   - https://realfavicongenerator.net/');
  console.log('   - https://favicon.io/');
  console.log('   - Inkscape o GIMP para conversión manual');
};

// Ejecutar si se llama directamente
if (require.main === module) {
  generateFavicons();
}

module.exports = { generateFavicons }; 