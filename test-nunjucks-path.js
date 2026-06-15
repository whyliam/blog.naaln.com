const nunjucks = require('nunjucks');
const path = require('path');

// Check the default configuration
const env = nunjucks.configure({noCache: true});
console.log('Default loaders:', env.loaders.map(l => l.searchPaths));

// Test if we can load from current directory
const themeDir = path.join(__dirname, 'themes/aether/layout');
console.log('Theme layout directory:', themeDir);

// Try to render a simple template from the theme
try {
  const layoutPath = path.join(themeDir, '_layout.njk');
  console.log('Template path:', layoutPath);
  const fs = require('fs');
  const content = fs.readFileSync(layoutPath, 'utf8');
  console.log('Template content length:', content.length);
  console.log('First 100 chars:', content.substring(0, 100));
} catch (e) {
  console.error('Error reading template:', e.message);
}

// Try with FileSystemLoader
const FileSystemLoader = nunjucks.FileSystemLoader;
const loader = new FileSystemLoader(themeDir);
const env2 = nunjucks.Environment(loader);
console.log('\nWith FileSystemLoader:');
console.log('Loaders:', env2.loaders.map(l => l.searchPaths || l.toString()));
