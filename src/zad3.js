const dns = require('dns');
const {dsnPromises} = require('dns').promises;
const fs = require('fs');
const util = require('util');

(async () => {
    await dns.lookup('google.com', (err, address, family) => {
        console.log('address: %j family: IPv%s', address, family);
    });
})();

(async () => {
    try {
        const readFile = util.promisify(fs.readFile);
        const buf = await readFile('./zad3.js', 'utf8');
        console.log(buf);
    } catch (err) {
        console.log(err);
    }
})();
