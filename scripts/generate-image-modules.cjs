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
  // Add original
  variants.jpeg.push(`../assets/${base}.jpg`);
  variants.webp.push(`../assets/${base}.webp`);
  return variants;
}

function genImports(variants, base, idx) {
  let imports = '';
  let names = [];
  for (const fmt of formats) {
    for (let i=0; i<sizes.length; ++i) {
      const varName = `${base}${idx+1}_${sizes[i]}`.replace(/-/g, '_');
      imports += `import ${varName} from '${variants[fmt][i]}';\n`;
      names.push(varName);
    }
    // original
    const origVar = `${base}${idx+1}`.replace(/-/g, '_');
    imports += `import ${origVar} from '${variants[fmt][sizes.length]}';\n`;
    names.push(origVar);
  }
  return { imports, names };
}

function genExport(idx, names, alt) {
  // jpeg: 0-3, webp: 4-7, fallback: 3, alt: alt[idx]
  return `  {\n    jpeg: [${names.slice(0,4).join(', ')}],\n    webp: [${names.slice(4,8).join(', ')}],\n    fallback: ${names[3]},\n    alt: '${alt[idx] || ''}'\n  }`;
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
