const { spawnSync} = require('child_process');
const child = spawnSync('npm', ['test']);

console.log('error', child.error);
console.log('stdout ', child.stderr.toString());