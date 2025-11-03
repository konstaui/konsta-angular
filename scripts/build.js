import buildCopy from './build-copy.js';
import buildShared from './build-shared.js';
import buildAngular from './build-angular.js';

(async () => {
  const env = process.env.NODE_ENV || 'development';
  const outputDir = env === 'development' ? 'build' : 'package';
  return Promise.all([
    buildCopy(),
    buildShared(outputDir),
    buildAngular(outputDir),
  ]).catch((err) => {
    // eslint-disable-next-line
    console.error(err);
    process.exit(1);
  });
})();
