import fs from 'fs';

async function buildCopy(cb) {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';

  // Copy shared resources (needed by Angular components)
  if (fs.existsSync('./src/color-utils')) {
    fs.cpSync('./src/color-utils', `${outputDir}/color-utils`, { recursive: true });
  }
  if (fs.existsSync('./src/styles')) {
    fs.cpSync('./src/styles', `${outputDir}/styles`, { recursive: true });
  }

  // Copy Angular-related files
  fs.mkdirSync(`${outputDir}/angular`, { recursive: true });

  if (fs.existsSync('./src/plugin-colors.js')) {
    fs.copyFileSync(`./src/plugin-colors.js`, `./${outputDir}/plugin-colors.js`);
  }
  if (fs.existsSync('./src/theme.css')) {
    fs.copyFileSync(`./src/theme.css`, `./${outputDir}/theme.css`);
  }
  if (fs.existsSync('./src/angular/theme.css')) {
    fs.copyFileSync(`./src/angular/theme.css`, `./${outputDir}/angular/theme.css`);
  }

  if (cb) cb();
}

export default buildCopy;
