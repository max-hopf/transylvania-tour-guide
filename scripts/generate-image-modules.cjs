// scripts/generate-image-modules.cjs
// Auto-generates image JS modules for blog, activities, etc. with all responsive variants
const fs = require('fs');
const path = require('path');

const groups = [
  {
    prefix: 'blog-post-',
    jsPath: '../src/components/blogImages.js',
    alt: [
      'Lakeside Camping & Activity',
      'Mountain Biking Adventure',
      'Family Hiking Day',
      'Wildlife Photography Tips',
      'Kayaking on the River',
      'Forest Survival Skills',
      'Stargazing Nights',
    ]
  },
  {
    prefix: 'our-activity-',
    jsPath: '../src/components/ourActivitiesImages.js',
    alt: [
      'Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5', 'Activity 6'
    ]
  },
  // Add more groups as needed
];

const assetDir = path.join(__dirname, '../src/assets');
const sizes = ['400w', '800w', '1600w'];
const formats = ['jpeg', 'webp'];

function getImageVariants(prefix, idx) {
  const base = `${prefix}${idx+1}`;
  const variants = { jpeg: [], webp: [] };
  for (const size of sizes) {
    for (const fmt of formats) {
      const file = `${base}-${size}.${fmt}`;
      if (fs.existsSync(path.join(assetDir, file))) {
        variants[fmt].push(`../assets/${file}`);
      }
    }
  }
  // Add original: check for .jpg, .jpeg, .png
  const originalExts = ['jpg', 'jpeg', 'png'];
  let foundOriginal = false;
  for (const ext of originalExts) {
    const file = `${base}.${ext}`;
    if (fs.existsSync(path.join(assetDir, file))) {
      variants.jpeg.push(`../assets/${file}`);
      foundOriginal = true;
      break;
    }
  }
  // webp original
  const webpOrig = `${base}.webp`;
  if (fs.existsSync(path.join(assetDir, webpOrig))) {
    variants.webp.push(`../assets/${webpOrig}`);
  }
  if (!foundOriginal) {
    console.warn(`WARNING: No original image found for ${base} (tried .jpg, .jpeg, .png)`);
  }
  return variants;
}

function genImports(variants, base, idx) {
  let imports = '';
  let names = { jpeg: [], webp: [] };
  for (const fmt of formats) {
    for (let i = 0; i < sizes.length; ++i) {
      const file = variants[fmt][i];
      if (!file) continue;
      const varName = `${base}${idx+1}_${sizes[i]}_${fmt}`.replace(/-/g, '_');
      imports += `import ${varName} from '${file}';\n`;
      names[fmt].push(varName);
    }
    // original
    const fileOrig = variants[fmt][sizes.length];
    if (fileOrig) {
      const origVar = `${base}${idx+1}_${fmt}`.replace(/-/g, '_');
      imports += `import ${origVar} from '${fileOrig}';\n`;
      names[fmt].push(origVar);
    }
  }
  return { imports, names };
}

function genExport(idx, names, alt) {
  // fallback: prefer smallest jpeg (400w, then 800w, then 1600w, then original)
  let fallback = names.jpeg[0] || names.webp[0] || 'undefined';
  return `  {\n    jpeg: [${names.jpeg.join(', ')}],\n    webp: [${names.webp.join(', ')}],\n    fallback: ${fallback},\n    alt: '${alt[idx] || ''}'\n  }`;
}


function generateModule(group) {
  let imports = '';
  let exports = [];
  for (let i=0; i<group.alt.length; ++i) {
    const variants = getImageVariants(group.prefix, i);
    const { imports: imp, names } = genImports(variants, group.prefix, i);
    imports += imp;
    exports.push(genExport(i, names, group.alt));
  }
  const content = `${imports}\nexport const images = [\n${exports.join(',\n')}\n];\n`;
  fs.writeFileSync(path.join(__dirname, group.jsPath), content);
  console.log(`Generated ${group.jsPath}`);
}

groups.forEach(generateModule);
