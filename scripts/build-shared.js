import fs from 'fs';

export default async (outputDir = 'package') => {
  // Copy shared directory directly (no transpilation needed for Angular)
  fs.cpSync('./src/shared', `${outputDir}/shared`, {
    recursive: true,
  });
};
