const zad14 = require('./src/zad14');



/*const {exec} = require('child_process');
const path = require('path');

function safeJoin(base, target) {
  const targetPath = '.' + path.normalize('/' + target)
  return path.resolve(base, targetPath);
}

const fileName = process.argv[2];

if (!(/^[a-zA-Z0-9\.]+$/).test(fileName)) {
  throw new Error('Invalid name');
}

console.log(__dirname, fileName);

const filePath = safeJoin(__dirname, fileName);

const cp = exec(`type ${filePath}`);

cp.stdout.on('data', data => console.log(data));
*/

module.exports = {
    ...zad14,
};