import fs from 'fs';

export default async (outputDir = 'package') => {
  // Copy shared directory (needed by Angular components)
  if (fs.existsSync('./src/shared')) {
    fs.cpSync('./src/shared', `${outputDir}/shared`, {
      recursive: true,
    });
  }
};
