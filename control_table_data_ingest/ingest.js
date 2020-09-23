console.log('hi');

const fs = require('fs').promises;

(async () => {
  await fs.writeFile('./testing', 'yeeting my way to victory', 'utf8');
})();
